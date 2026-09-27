'use client';

import { useEffect, useRef } from 'react';

const GA_LOAD_DELAY_MS = 1200;
const GA_IDLE_TIMEOUT_MS = 2500;
const ROUTE_CHANGE_EVENT = 'refinehaus:analytics-route-change';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __refinehausGaLoaded?: boolean;
    __refinehausGaHistoryPatched?: boolean;
  }
}

function getCurrentPagePath() {
  return `${window.location.pathname}${window.location.search}`;
}

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(args);
    });
}

function injectGoogleAnalyticsScript(gaId: string) {
  const scriptId = `ga4-${gaId}`;

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

function dispatchRouteChange() {
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT));
}

function patchHistoryForRouteChanges() {
  if (window.__refinehausGaHistoryPatched) {
    return;
  }

  window.__refinehausGaHistoryPatched = true;

  const wrapHistoryMethod = (method: 'pushState' | 'replaceState') => {
    const original = window.history[method];

    window.history[method] = function (...args: Parameters<typeof original>) {
      const result = original.apply(window.history, args);
      window.setTimeout(dispatchRouteChange, 0);
      return result;
    } as typeof original;
  };

  wrapHistoryMethod('pushState');
  wrapHistoryMethod('replaceState');
}

type DeferredGoogleAnalyticsProps = {
  gaId: string;
};

export function DeferredGoogleAnalytics({ gaId }: DeferredGoogleAnalyticsProps) {
  const lastTrackedPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!gaId) {
      return;
    }

    patchHistoryForRouteChanges();

    let hasStarted = false;
    let delayTimer: number | undefined;
    let idleCallbackId: number | undefined;

    const trackPageView = () => {
      if (!window.gtag) {
        return;
      }

      const pagePath = getCurrentPagePath();

      if (lastTrackedPathRef.current === pagePath) {
        return;
      }

      lastTrackedPathRef.current = pagePath;
      window.gtag('config', gaId, {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    const loadAnalytics = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;
      ensureGtagQueue();

      if (!window.__refinehausGaLoaded) {
        window.gtag?.('js', new Date());
        injectGoogleAnalyticsScript(gaId);
        window.__refinehausGaLoaded = true;
      }

      trackPageView();
      window.addEventListener(ROUTE_CHANGE_EVENT, trackPageView);
      window.addEventListener('popstate', trackPageView);
    };

    const scheduleIdleLoad = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleCallbackId = window.requestIdleCallback(loadAnalytics, {
          timeout: GA_IDLE_TIMEOUT_MS,
        });
        return;
      }

      delayTimer = window.setTimeout(loadAnalytics, 0);
    };

    const scheduleAfterLoad = () => {
      delayTimer = window.setTimeout(scheduleIdleLoad, GA_LOAD_DELAY_MS);
    };

    if (document.readyState === 'complete') {
      scheduleAfterLoad();
    } else {
      window.addEventListener('load', scheduleAfterLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleAfterLoad);
      window.removeEventListener(ROUTE_CHANGE_EVENT, trackPageView);
      window.removeEventListener('popstate', trackPageView);

      if (delayTimer) {
        window.clearTimeout(delayTimer);
      }

      if (idleCallbackId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, [gaId]);

  return null;
}
