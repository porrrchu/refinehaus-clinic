import type { MDXComponents } from 'mdx/types';

// Required by @next/mdx in the App Router. Map markdown elements to styled
// components here once articles (Knowledge) move to MDX.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
