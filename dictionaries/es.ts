import type fr from "./fr";

const es: typeof fr = {
  nav: { projects: "Proyectos", carnet: "Cuaderno", agents: "Agents" },
  hero: { tagline: "La isla de las bellas aguas" },
  about: {
    title: "Soy Julien.",
    body: "Médico psiquiatra y emprendedor. Construyo proyectos en la intersección de la salud, el software y lo concreto — convencido de que una sola persona, bien equipada con IA, puede ahora construir lo que ayer exigía un equipo entero.",
  },
  projects: {
    eyebrow: "Lo que construyo",
    visit: "Visitar el sitio",
    soon: "Sitio próximamente",
    items: {
      superpagr: {
        domain: "Salud · SaaS · Planificación",
        text: "Los cuidadores merecen herramientas pensadas con tanto cuidado como el que dan a sus pacientes. SuperPagr simplifica la planificación médica — guardias, retenes, sustituciones — con el rigor y la claridad que el terreno exige.",
      },
      lien: {
        domain: "SAMU · Emergencias · Móvil",
        text: "Nacido del terreno, para el terreno. Una aplicación que pone las herramientas adecuadas en manos de los equipos de urgencia, donde cada segundo cuenta. Fichas, escalas, protocolos — todo lo necesario, nada superfluo.",
      },
      openstats: {
        domain: "Investigación · Estadística · Tesis",
        text: "El análisis estadístico de las tesis médicas, mal atendido por el software existente, resuelto por una sola persona apoyada en la IA agentic. El segundo ladrillo de un mismo enfoque, repetible, del mercado de la salud.",
      },
    },
  },
  carnet: {
    eyebrow: "Cuaderno",
    readMemo: "Leer el memo",
    all: "Todos los escritos",
  },
  vision: {
    quote:
      "El enfoque Seijaku, la calma en la tormenta: hacer prosperar una calma serena dentro de un sistema que cuida, incluso en el corazón del sufrimiento.",
  },
  footer: {
    tagline:
      "Software agentic, AI-first, al servicio de la salud. La calma en la tormenta.",
    home: "Inicio",
    carnet: "Cuaderno",
    write: "Escribir",
    follow: "Sígueme en X",
    agents: "Agentes",
    legal: "Karukera — Julien Lelandais. Uso autorizado únicamente. Tus datos se quedan contigo.",
  },
  blog: {
    eyebrow: "Cuaderno",
    title: "Escritos y reflexiones",
    intro:
      "Algunas notas sobre el camino: la salud, el software agentic, y la convicción de que una sola persona, bien equipada, puede ahora construir lo que ayer exigía un equipo entero.",
    read: "Leer",
    back: "Cuaderno",
    allWritings: "Todos los escritos",
  },
  shop: {
    buy: "Obtener el kit — 197 €",
    price: "197 €",
    priceNote: "Pago único. Tus créditos OpenRouter siguen siendo tuyos.",
    stripeMissing: "Stripe aún no está configurado. Inténtalo en un momento.",
    checkoutError: "No se pudo iniciar el pago.",
    busy: "Redirigiendo a Stripe…",
    thanksTitle: "El ZIP está listo.",
    thanksBody:
      "Pago recibido. Descarga el kit. El mismo enlace firmado (7 días) también va al e-mail del pago — puedes volver sin escribir nada.",
    download: "Descargar el ZIP",
    thanksPending: "El pago se está confirmando.",
    thanksFail: "Sesión inexistente o impagada.",
    next1: "Abre START-HERE.md — sin clave OpenRouter, no arranca nada.",
    next2: "30–50 € de créditos OpenRouter. Modelo principal: Kimi K3.",
    next3: "« Auditoría SaaS completa en https://… » — un alcance que controlas.",
    unlockTitle: "Este enlace está incompleto.",
    unlockBody:
      "El ZIP solo se abre desde el retorno de Stripe tras el pago. Un id de sesión no basta — y no pedimos un e-mail que se pueda adivinar.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  kit: {
    metaTitle: "Kit de auditoría de seguridad — Karukera",
    metaDesc:
      "ZIP de agentes para auditar un sitio o un SaaS: pruebas, estados, Double QA. Corre en tu máquina, vía OpenRouter (Kimi K3).",
    catalogMetaTitle: "Kits de agentes — Karukera",
    catalogMetaDesc:
      "Dos kits de agentes: auditoría de seguridad Web + SaaS, y secretaria comercial Telegram / Ringover / Odoo. Corren en tu lado.",
    catalogTitle: "Kits de agentes. Dos, hoy.",
    catalogLead:
      "Pagas, descargas el ZIP, lo lanzas en tu máquina. Karukera no ve ni tu objetivo ni tus clientes.",
    catalogPrice: "197 €",
    catalogOpen: "Ver el kit",
    catalogHow: [
      { t: "Un ZIP", b: "Prompts, configs, appliance. Nada se aloja aquí." },
      { t: "En tu lado", b: "Cursor, Claude Code, Hermes, o un VPS. Tus claves siguen siendo tuyas." },
      { t: "Tras Stripe", b: "Enlace firmado 7 días, también en el mail de kit@karukera.xyz." },
    ],
    catalogBadge: "Kit de auditoría de seguridad",
    catalogScope: "Web + SaaS + agentes / MCP",
    catalogAlt: "Informe de auditoría priorizado en un portátil",
    catalogH2: "Auditoría de seguridad Web + SaaS",
    catalogBody:
      "Una squad completa: superficie, auth, API, MCP, QA. Informe priorizado, pruebas, Double QA bloqueante. Kimi K3 con tu clave OpenRouter.",
    catalogFacts: [
      "108 archivos, cero código obligatorio",
      "8 modos, 6 estados, cadena de prueba",
      "Cero exploits en el ZIP",
    ],
    catalogMore: "Leer la página completa →",
    catalogSoon: "Después — aún no a la venta: SEO / GEO · Clínica · Acompañamiento.",
    catalogSecretaryBadge: "Kit de secretaria comercial",
    catalogSecretaryScope: "Telegram · Ringover · Odoo",
    catalogSecretaryH2: "Secretaria comercial",
    catalogSecretaryBody:
      "Mails y llamadas Ringover → tarjeta Telegram → Odoo solo después de tu ok. Appliance Docker, wizard de instalación, guía de despliegue para una IA.",
    catalogSecretaryFacts: [
      "Hermes + ingest Docker",
      "Telegram, Ringover, IMAP, Odoo",
      "Nada se envía solo",
    ],
    catalogSecretaryMore: "Leer la página completa →",
    heroTitle: "Una auditoría de seguridad Web + SaaS, de extremo a extremo.",
    heroLead:
      "108 archivos. Corren en tu máquina. El squad mapea, puntúa y retiene el informe hasta que la QA firma. Tus modelos, tu clave OpenRouter — Kimi K3 primero.",
    heroAlt: "Informe de auditoría en un portátil",
    reviewsLabel: "Texto de ejemplo — sustituir por clientes reales.",
    reviews: [
      {
        name: "Léa M.",
        role: "Freelance AppSec",
        quote:
          "Saqué 11 hallazgos Confirmado en una tarde. La QA bloqueó dos hipótesis que habría escrito demasiado rápido.",
      },
      {
        name: "Marc T.",
        role: "Founder, SaaS B2B",
        quote:
          "Una lista priorizada en lugar de un PDF de 80 páginas. La authz multi-tenant era el agujero de verdad.",
      },
      {
        name: "Inès K.",
        role: "Directora de agencia",
        quote:
          "Los juniors siguen el squad. Yo releo el informe. No testeado es tan útil como Confirmado.",
      },
    ],
    problemTitle: "Un escáner te deja 200 líneas. Tú tienes que quedarte con diez.",
    problemBody:
      "En un SaaS, el agujero ya no es solo una cabecera que falta. Es un IDOR entre dos tenants. El tool MCP demasiado permisivo. El hallazgo que nadie se atrevió a marcar Hipótesis.",
    folderAlt: "Carpeta del kit en el Finder",
    findingAlt: "Ficha de hallazgo con estado y prueba",
    stepsTitle: "Cuatro pasos.",
    steps: [
      {
        t: "Recuperas el ZIP",
        b: "Pago Stripe. Enlace de descarga. START-HERE.md primero.",
      },
      {
        t: "Pones tu clave OpenRouter",
        b: "Sin clave, el kit se detiene. 30–50 € de créditos bastan en modo budget. Modelo principal: Kimi K3.",
      },
      {
        t: "Lanzas una misión",
        b: "« Auditoría SaaS completa en https://… ». Solo un sistema que tienes derecho a auditar.",
      },
      {
        t: "Lees lo que la QA dejó pasar",
        b: "Si se niega, no hay informe. Eso es el producto.",
      },
    ],
    priceEyebrow: "El kit, hoy",
    priceBody:
      "Pago único. Squad, 8 modos, reglas, plantillas de informe, compañero de implementación. 108 archivos. Cero código obligatorio.",
    faqTitle: "Antes de pagar.",
    faq: [
      {
        q: "¿Hay que saber programar?",
        a: "No. Prompts, configs, plantillas. Cero código obligatorio.",
      },
      {
        q: "¿Es un escáner en línea?",
        a: "No. El ZIP corre en tu lado. Karukera no ve el objetivo.",
      },
      {
        q: "¿Puedo usarlo en cualquier sitio?",
        a: "Solo un sistema para el que tienes autorización escrita.",
      },
      {
        q: "¿Por qué OpenRouter?",
        a: "Una clave, los modelos frontier. Primera opción: Kimi K3. En budget, 30–50 € de créditos para 1 a 3 auditorías.",
      },
    ],
    closeTitle: "Lanza el squad sobre un alcance tuyo.",
    closeBody: "197 €. Un ZIP. Una clave OpenRouter. Un informe sostenido, o el silencio de la QA.",
  },
  secretary: {
    metaTitle: "Kit de secretaria comercial — Karukera",
    metaDesc:
      "Mails y llamadas Ringover se vuelven tarjetas de Telegram. Odoo se actualiza solo después de tu ok.",
    buy: "Obtener el kit — 197 €",
    priceNote: "Pago único. El bot corre en tu VPS. Tus claves siguen siendo tuyas.",
    heroTitle: "Una secretaria comercial que espera tu ok.",
    heroLead:
      "Hermes lee tus mails y tus llamadas Quicktalk / Ringover, te deja una tarjeta en Telegram y solo escribe en Odoo cuando respondes ok. Appliance Docker, en tu lado.",
    problemTitle: "La llamada ya fue. El CRM sigue vacío.",
    problemBody:
      "Alguien llamó por un presupuesto. El hilo está en la bandeja, la transcripción en Ringover, y nadie abrió Odoo. El kit junta esas tres piezas, te las muestra y no escribe nada solo.",
    stepsTitle: "Dos fases. Ni una más.",
    steps: [
      {
        t: "Recuperas el ZIP",
        b: "Pago Stripe. START-HERE.md primero.",
      },
      {
        t: "Una IA instala el VPS",
        b: "Lee FOR-AI.md y luego pack/deploy/SKILL.md. Docker, token Telegram, una clave LLM. Aquí no hay Odoo.",
      },
      {
        t: "Hablas con el bot",
        b: "El wizard onboard hace una pregunta cada vez, sondea y solo escribe tenant.yaml al final.",
      },
      {
        t: "Llegan las tarjetas",
        b: "ok / ignore / un ajuste. El borrador de mail es una nota. Odoo no envía nada.",
      },
    ],
    priceEyebrow: "El kit, hoy",
    priceBody:
      "Pago único. Appliance Hermes + ingest Docker. Odoo, Ringover, IMAP se configuran en Telegram. 42 archivos.",
    faqTitle: "Antes de pagar.",
    faq: [
      {
        q: "¿Hay que programar?",
        a: "No para el día a día. La instalación es Docker + install.sh, luego el bot. Una IA puede seguir pack/deploy/SKILL.md.",
      },
      {
        q: "¿Está alojado en Karukera?",
        a: "No. El ZIP corre en tu VPS. Karukera no ve tus mails ni tus llamadas.",
      },
      {
        q: "¿Odoo envía los mails solo?",
        a: "No. El borrador es una nota en el lead. Nunca un mail saliente.",
      },
      {
        q: "¿Qué necesito?",
        a: "Un VPS, un bot de Telegram, una clave LLM, Odoo, una clave Ringover y un IMAP (contraseña de aplicación).",
      },
    ],
    closeTitle: "Pon el bot en un VPS tuyo.",
    closeBody: "197 €. Un ZIP. Un Telegram. Nada en Odoo antes de tu ok.",
    thanksBody:
      "Pago recibido. Descarga el ZIP, abre START-HERE.md, dáselo a una IA en tu VPS y habla con el bot.",
    next1: "Abre START-HERE.md — dos fases, no las mezcles.",
    next2: "Fase 1: FOR-AI.md y luego pack/deploy/SKILL.md en el VPS.",
    next3: "Fase 2: escribes al bot. Las tarjetas llegan solas.",
  },
};

export default es;
