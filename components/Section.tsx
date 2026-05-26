import clsx from "clsx";

export function Section({
  eyebrow,
  title,
  text,
  children,
  className
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("section", className)}>
      {(eyebrow || title || text) && (
        <div className="sectionHead">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
