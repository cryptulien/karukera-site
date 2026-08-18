import { signDownload } from "@/lib/download-token";
import { getKit } from "@/lib/kit-offer";

function copy(locale: string, sku: string | undefined) {
  const kit = getKit(sku);
  const name = kit?.name[locale] ?? kit?.name.fr ?? "Karukera";
  if (locale === "en") {
    return {
      subject: `Your download — ${name}`,
      preview: "A signed link, valid 7 days.",
      hello: "Payment received.",
      body: "Open this page to download the ZIP. The link is signed and expires in 7 days. It is not guessable from your email address.",
      cta: "Open the download page",
      after:
        sku === "sales-secretary"
          ? "Then open START-HERE.md and give the folder to an AI on your VPS."
          : "Then open START-HERE.md, add your OpenRouter key, run a mission on a scope you control.",
    };
  }
  if (locale === "es") {
    return {
      subject: `Tu descarga — ${name}`,
      preview: "Un enlace firmado, válido 7 días.",
      hello: "Pago recibido.",
      body: "Abre esta página para descargar el ZIP. El enlace está firmado y caduca en 7 días. No se puede adivinar a partir de tu e-mail.",
      cta: "Abrir la página de descarga",
      after:
        sku === "sales-secretary"
          ? "Luego abre START-HERE.md y dale la carpeta a una IA en tu VPS."
          : "Luego abre START-HERE.md, pon tu clave OpenRouter y lanza una misión sobre un alcance que controles.",
    };
  }
  return {
    subject: `Ton téléchargement — ${name}`,
    preview: "Un lien signé, valable 7 jours.",
    hello: "Paiement reçu.",
    body: "Ouvre cette page pour télécharger le ZIP. Le lien est signé et expire dans 7 jours. Il ne se déduit pas de ton e-mail.",
    cta: "Ouvrir la page de téléchargement",
    after:
      sku === "sales-secretary"
        ? "Ensuite ouvre START-HERE.md et donne le dossier à une IA sur ton VPS."
        : "Ensuite ouvre START-HERE.md, mets ta clé OpenRouter, lance une mission sur un scope à toi.",
  };
}

export function downloadPageUrl(opts: {
  origin: string;
  locale: string;
  sessionId: string;
}): string {
  const token = signDownload(opts.sessionId);
  return `${opts.origin.replace(/\/$/, "")}/${opts.locale}/agents/thanks?t=${encodeURIComponent(token)}`;
}

export async function sendKitEmail(opts: {
  to: string;
  locale: string;
  sessionId: string;
  origin: string;
  sku?: string;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const link = downloadPageUrl(opts);
  const t = copy(opts.locale, opts.sku);
  const from = process.env.KIT_EMAIL_FROM || "Karukera <kit@karukera.xyz>";

  const html = `<!doctype html>
<html><body style="font-family:Georgia,serif;color:#161616;background:#E6EBE6;margin:0;padding:32px">
  <p style="font-size:13px;color:#8A857D">${t.preview}</p>
  <h1 style="font-size:28px;font-weight:600;letter-spacing:-0.03em">${t.hello}</h1>
  <p style="font-size:16px;line-height:1.5;color:#5C5954">${t.body}</p>
  <p style="margin:28px 0">
    <a href="${link}" style="display:inline-block;background:#C43A14;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-family:system-ui,sans-serif;font-size:15px">${t.cta}</a>
  </p>
  <p style="font-size:15px;line-height:1.5;color:#5C5954">${t.after}</p>
  <p style="font-size:13px;color:#8A857D;word-break:break-all">${link}</p>
</body></html>`;

  const text = `${t.hello}\n\n${t.body}\n\n${t.cta}:\n${link}\n\n${t.after}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [opts.to], subject: t.subject, html, text }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("resend failed", res.status, err.slice(0, 200));
  }
  return res.ok;
}
