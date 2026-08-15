import { signDownload } from "@/lib/download-token";

export async function sendKitEmail(opts: {
  to: string;
  locale: string;
  sessionId: string;
  origin: string;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const token = signDownload(opts.sessionId);
  const link = `${opts.origin}/${opts.locale}/agents/thanks?t=${encodeURIComponent(token)}`;
  const from = process.env.KIT_EMAIL_FROM || "Karukera <kit@karukera.xyz>";

  const subject =
    opts.locale === "en"
      ? "Your Karukera security kit"
      : opts.locale === "es"
        ? "Tu kit de seguridad Karukera"
        : "Ton kit d’audit sécu Karukera";

  const text =
    opts.locale === "en"
      ? `Payment received. Download the ZIP (7 days):\n${link}\n\nOpen START-HERE.md first. Add your OpenRouter key, then run a mission on a scope you control.`
      : opts.locale === "es"
        ? `Pago recibido. Descarga el ZIP (7 días):\n${link}\n\nAbre START-HERE.md primero. Pon tu clave OpenRouter y lanza una misión sobre un alcance que controles.`
        : `Paiement reçu. Télécharge le ZIP (7 jours) :\n${link}\n\nOuvre START-HERE.md en premier. Mets ta clé OpenRouter, puis lance une mission sur un scope à toi.`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [opts.to], subject, text }),
  });
  return res.ok;
}
