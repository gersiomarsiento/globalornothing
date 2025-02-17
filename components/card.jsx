import Link from 'next/link';

export function Card({ title, subtitle, text, linkText, href, children }) {
  return (
    <div className="bg-transparent card">
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
        {text && <p>{text}</p>}
        {linkText && href && (
          <div className="card-actions">
            <Link href={href} className="transition link text-white-900 hover:opacity-80">
              {linkText}
            </Link>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
