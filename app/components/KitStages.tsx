type Feature = {
  kind: string;
  title: string;
  body: string;
};

export function KitStages({
  features,
  demo,
}: {
  features: Feature[];
  demo: {
    label: string;
    scope: string;
    findingId: string;
    findingTitle: string;
    findingStatus: string;
    ticketId: string;
    ticketTitle: string;
    ticketPrompt: string;
  };
}) {
  return (
    <div className="space-y-20 sm:space-y-28">
      {features.map((f, i) => (
        <article
          key={f.kind}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
            <h3 className="text-[1.7rem] sm:text-3xl font-semibold tracking-[-0.03em] leading-[1.15]">
              {f.title}
            </h3>
            <p className="mt-4 text-[17px] text-[#4A4742] leading-relaxed max-w-md">
              {f.body}
            </p>
          </div>
          <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
            {f.kind === "code" ? <StageCode demo={demo} /> : null}
            {f.kind === "outside" ? <StageOutside demo={demo} /> : null}
            {f.kind === "inside" ? <StageInside demo={demo} /> : null}
            {f.kind === "tickets" ? <StageTickets demo={demo} /> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-[#141311] text-[#F3F1EC] overflow-hidden shadow-[0_20px_50px_-24px_rgba(20,19,17,0.65)]">
      <div className="px-4 py-2.5 border-b border-white/10 text-[11px] text-white/40 tracking-wide">
        {label}
      </div>
      {children}
    </div>
  );
}

function StageCode({ demo }: { demo: { label: string } }) {
  const files = [
    { path: "src/app/login/page.tsx", on: false },
    { path: "src/api/invoices/[id]/route.ts", on: true },
    { path: "src/lib/tenant.ts", on: false },
    { path: "src/middleware.ts", on: false },
  ];
  return (
    <Frame label={demo.label}>
      <div className="grid sm:grid-cols-[11rem_1fr] min-h-[16rem]">
        <ul className="border-b sm:border-b-0 sm:border-r border-white/10 py-3 px-3 font-mono text-[11px] leading-6">
          {files.map((f) => (
            <li
              key={f.path}
              className={f.on ? "text-white bg-white/8 -mx-1 px-1 rounded" : "text-white/40"}
            >
              {f.path}
            </li>
          ))}
        </ul>
        <pre className="p-4 font-mono text-[12px] leading-6 text-white/70 overflow-x-auto">
          <span className="text-white/30">14</span> {"  const invoice = await db.invoice.find(id)"}
          {"\n"}
          <span className="text-white/30">15</span> {"  "}
          <span className="bg-[#E23B2E]/30 text-white">return Response.json(invoice)</span>
          {"\n"}
          <span className="text-white/30">16</span>
          {"\n"}
          <span className="text-[#E23B2E]">          ↑ no tenant check</span>
        </pre>
      </div>
    </Frame>
  );
}

function StageOutside({ demo }: { demo: { label: string; scope: string } }) {
  const rows = [
    ["GET", "/login", "200"],
    ["GET", "/app", "302"],
    ["GET", "/.env", "404"],
    ["GET", "/api/invoices", "401"],
    ["GET", "/api/webhooks", "200"],
  ];
  return (
    <Frame label={`${demo.label} · ${demo.scope}`}>
      <table className="w-full text-left text-[13px]">
        <tbody>
          {rows.map(([m, p, s]) => (
            <tr key={p} className="border-t border-white/8">
              <td className="px-4 py-2.5 font-mono text-white/40 w-14">{m}</td>
              <td className="px-2 py-2.5 font-mono">{p}</td>
              <td
                className={`px-4 py-2.5 font-mono text-right ${
                  s === "200" && p === "/api/webhooks" ? "text-[#E23B2E]" : "text-white/40"
                }`}
              >
                {s}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

function StageInside({
  demo,
}: {
  demo: { label: string; findingStatus: string };
}) {
  return (
    <Frame label={demo.label}>
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <div className="p-4">
          <p className="text-[11px] text-white/40 tracking-wide">tenant A</p>
          <p className="mt-3 font-mono text-[12px] text-white/70">GET /invoices/210</p>
          <p className="mt-1 text-[13px]">200 · own invoice</p>
        </div>
        <div className="p-4">
          <p className="text-[11px] text-white/40 tracking-wide">tenant B</p>
          <p className="mt-3 font-mono text-[12px] text-white/70">GET /invoices/210</p>
          <p className="mt-1 text-[13px] text-[#E23B2E]">200 · should be 404</p>
          <p className="mt-4 inline-flex text-[11px] rounded-full bg-[#E23B2E] px-2 py-0.5">
            {demo.findingStatus}
          </p>
        </div>
      </div>
    </Frame>
  );
}

function StageTickets({
  demo,
}: {
  demo: {
    label: string;
    ticketId: string;
    ticketTitle: string;
    ticketPrompt: string;
  };
}) {
  return (
    <Frame label={demo.label}>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-[11px] tracking-wide">
          <span className="text-white/45">{demo.ticketId}</span>
          <span className="text-white/70">P0 · S</span>
        </div>
        <p className="mt-3 text-[16px] font-medium leading-snug">{demo.ticketTitle}</p>
        <p className="mt-4 text-[13px] leading-relaxed text-white/65">{demo.ticketPrompt}</p>
      </div>
    </Frame>
  );
}
