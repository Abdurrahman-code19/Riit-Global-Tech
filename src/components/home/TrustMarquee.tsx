const items = [
  "Networking",
  "CBT/CBE centre setup",
  "Website development",
  "E-commerce",
  "Cisco Networking Academy",
  "UK-sourced equipment",
  "Sales & repairs",
  "IT consulting",
  "School portals",
  "Data analysis",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-5 whitespace-nowrap px-5 font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:px-7"
        >
          <span className="h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-[#0B0C0D] py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B0C0D] to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B0C0D] to-transparent" aria-hidden="true" />
      <div className="flex w-max motion-safe:animate-marquee">
        <Group />
        <Group hidden />
      </div>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
