import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

// Draft notice / doctor's tip box usable inside article MDX: <Callout>…</Callout>
function Callout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <aside className="my-8 rounded-[18px] bg-cream2 border border-charcoal/8 px-6 py-5">
      {title && <p className="eyebrow text-walnut mb-2">{title}</p>}
      <div className="font-thai text-charcoal/90 text-[0.98rem] leading-relaxed [&>p]:m-0">{children}</div>
    </aside>
  );
}

// Article typography, styled to the Refinehaus palette. Required by @next/mdx.
const components: MDXComponents = {
  h2: (props) => <h2 className="font-thai font-semibold text-charcoal text-[1.45rem] lg:text-[1.6rem] leading-snug mt-12 mb-4 scroll-mt-28" {...props} />,
  h3: (props) => <h3 className="font-thai font-semibold text-oliveDark text-[1.15rem] mt-8 mb-3" {...props} />,
  p: (props) => <p className="font-thai text-charcoal/90 text-[1.05rem] leading-[1.95] mb-5" {...props} />,
  ul: (props) => <ul className="font-thai list-disc pl-6 mb-6 space-y-2 text-charcoal/90 text-[1.03rem] leading-relaxed marker:text-walnut" {...props} />,
  ol: (props) => <ol className="font-thai list-decimal pl-6 mb-6 space-y-2 text-charcoal/90 text-[1.03rem] leading-relaxed marker:text-walnut" {...props} />,
  strong: (props) => <strong className="font-semibold text-charcoal" {...props} />,
  a: (props) => <a className="text-olive underline underline-offset-4 hover:text-oliveDark" {...props} />,
  blockquote: (props) => <blockquote className="border-l-2 border-walnut pl-5 my-8 font-thai italic text-oliveDark" {...props} />,
  table: (props) => <div className="my-8 overflow-x-auto"><table className="w-full font-thai text-[0.95rem] border-collapse" {...props} /></div>,
  th: (props) => <th className="text-left font-semibold text-charcoal bg-cream2 px-4 py-3 border-b border-charcoal/10" {...props} />,
  td: (props) => <td className="px-4 py-3 border-b border-charcoal/8 text-charcoal/85 align-top" {...props} />,
  Callout,
};

export function useMDXComponents(overrides: MDXComponents): MDXComponents {
  return { ...components, ...overrides };
}
