import Link from 'next/link';

export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-[0.82rem] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-olive transition-colors">{item.name}</Link>
            ) : (
              <span aria-current="page" className="text-charcoal line-clamp-1">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
