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
            <p className="mt-4 text-[17px] text-isle-tide leading-relaxed max-w-md">
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
  label?: string;
}) {
  return (
    <div className="rounded-2xl bg-[#141311] text-[#F3F1EC] overflow-hidden shadow-[0_20px_50px_-24px_rgba(20,19,17,0.65)] min-w-0">
      {label ? (
        <div className="px-4 py-2.5 border-b border-white/10 text-[11px] text-white/40 tracking-wide truncate">
          {label}
        </div>
      ) : null}
      {children}
    </div>
  );
}

function StageCode({ demo }: { demo: { scope: string } }) {
  const files = [
    { path: "login/page.tsx", on: false },
    { path: "invoices/[id]/route.ts", on: true },
    { path: "lib/tenant.ts", on: false },
    { path: "middleware.ts", on: false },
  ];
  return (
    <Frame label={demo.scope}>
      <div className="grid sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] min-h-[16rem]">
        <ul className="border-b sm:border-b-0 sm:border-r border-white/10 py-3 px-3 font-mono text-[11px] leading-6 min-w-0">
          {files.map((f) => (
            <li
              key={f.path}
              className={`truncate ${f.on ? "text-white bg-white/8 -mx-1 px-1 rounded" : "text-white/40"}`}
              title={f.path}
            >
              {f.path}
            </li>
          ))}
        </ul>
        <pre className="p-4 font-mono text-[12px] leading-6 text-white/70 min-w-0 overflow-hidden whitespace-pre-wrap break-all">
          <span className="text-white/30">14</span>
          {"  const row = await find(id)"}
          {"\n"}
          <span className="text-white/30">15</span>
          {"  "}
          <span className="bg-isle-flame/30 text-white">return json(row)</span>
          {"\n"}
          <span className="text-white/30">16</span>
          {"\n"}
          <span className="text-isle-flame">     ↑ no tenant check</span>
        </pre>
      </div>
    </Frame>
  );
}

function StageOutside({ demo }: { demo: { scope: string } }) {
  const rows = [
    ["GET", "/login", "200"],
    ["GET", "/app", "302"],
    ["GET", "/.env", "404"],
    ["GET", "/api/invoices", "401"],
    ["GET", "/api/webhooks", "200"],
  ];
  return (
    <Frame label={demo.scope}>
      <table className="w-full text-left text-[13px] table-fixed">
        <tbody>
          {rows.map(([m, p, s]) => (
            <tr key={p} className="border-t border-white/8">
              <td className="px-4 py-2.5 font-mono text-white/40 w-14">{m}</td>
              <td className="px-2 py-2.5 font-mono truncate">{p}</td>
              <td
                className={`px-4 py-2.5 font-mono text-right w-14 ${
                  s === "200" && p === "/api/webhooks" ? "text-isle-flame" : "text-white/40"
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
  demo: { findingStatus: string };
}) {
  return (
    <Frame>
      <div className="grid grid-cols-2 divide-x divide-white/10 min-w-0">
        <div className="p-4 min-w-0">
          <p className="text-[11px] text-white/40 tracking-wide">tenant A</p>
          <p className="mt-3 font-mono text-[12px] text-white/70 break-all">GET /invoices/210</p>
          <p className="mt-1 text-[13px]">200 · own invoice</p>
        </div>
        <div className="p-4 min-w-0">
          <p className="text-[11px] text-white/40 tracking-wide">tenant B</p>
          <p className="mt-3 font-mono text-[12px] text-white/70 break-all">GET /invoices/210</p>
          <p className="mt-1 text-[13px] text-isle-flame">200 · should be 404</p>
          <p className="mt-4 inline-flex text-[11px] rounded-full bg-isle-flame px-2 py-0.5">
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
    ticketId: string;
    ticketTitle: string;
    ticketPrompt: string;
  };
}) {
  return (
    <Frame>
      <div className="p-5 min-w-0">
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
