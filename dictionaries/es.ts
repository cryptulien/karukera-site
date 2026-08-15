import type fr from "./fr";

const es: typeof fr = {
  nav: {
    projects: "Proyectos",
    carnet: "Cuaderno",
    agents: "Agents",
    security: "Auditoría",
    secretary: "Secretaria",
  },
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
    salesTagline: "Kits de agentes que corren en tu máquina.",
    salesLegal: "Karukera — Julien Lelandais. Tus datos se quedan contigo.",
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
    next1: "Abre START-HERE.md, luego el ZIP en Claude, Codex, Cursor o Hermes.",
    next2: "Si el modelo rechaza la auditoría, deposita una clave OpenRouter (30–50 € de créditos).",
    next3: "Elige el proyecto en tu máquina, la profundidad, y si das accesos.",
    unlockTitle: "Este enlace está incompleto.",
    unlockBody:
      "El ZIP solo se abre desde el retorno de Stripe tras el pago. Un id de sesión no basta — y no pedimos un e-mail que se pueda adivinar.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  kit: {
    metaTitle: "Asegura tu app — kit de auditoría — Karukera",
    metaDesc:
      "Un kit de agentes para asegurar tu SaaS y tus ingresos. Lo abres en Claude, Codex u otro. Informe, pruebas, tickets de corrección. En tu máquina.",
    catalogMetaTitle: "Kits de agentes — Karukera",
    catalogMetaDesc:
      "Dos kits de agentes: asegurar tu app (auditoría de seguridad), y una secretaria comercial Telegram / Ringover / Odoo. Corren en tu lado.",
    catalogTitle: "Dos kits. Corren en tu lado.",
    catalogLead:
      "La auditoría de seguridad protege tu app y tus ingresos. La secretaria sostiene tus mails y llamadas, y solo escribe en Odoo después de tu ok.",
    catalogPrice: "197 €",
    catalogOpen: "Ver el kit",
    catalogHow: [
      { t: "Un ZIP", b: "Pagas, descargas, lo abres en Claude, Codex, Cursor o Hermes." },
      { t: "En tu lado", b: "Karukera no ve tu código, ni tus clientes, ni tus claves." },
      { t: "Tras Stripe", b: "Enlace firmado 7 días, también en el mail de kit@karukera.xyz." },
    ],
    catalogBadge: "Kit de auditoría de seguridad",
    catalogScope: "Solo founder · SaaS · Web",
    catalogAlt: "Consola de auditoría con el squad en misión",
    catalogH2: "Asegura tu aplicación",
    catalogBody:
      "Auditoría de seguridad que lanzas en tu máquina. Código a fondo, superficie exterior, o desde dentro del SaaS. Informe, pruebas, tickets para tu LLM.",
    catalogFacts: [
      "110 archivos, cero código obligatorio",
      "8 profundidades, 12 agentes",
      "Tickets de corrección + prompts",
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
    heroTitle: "Asegura tu app. Protege tus ingresos.",
    heroLead:
      "Un kit de agentes, en tu máquina. Lo abres en Claude, Codex u otro. Eliges el proyecto, la profundidad, los accesos. Recibes el informe, las pruebas y los tickets para pegar en tu LLM.",
    modelsLine:
      "Algunos modelos rechazan la auditoría. Una clave OpenRouter desbloquea a los que sí la hacen — tus créditos siguen siendo tuyos.",
    demoLabel: "Demo — no es una auditoría real",
    demoScope: "app.exemple.tld · SaaS completo",
    problemTitle: "No tienes un equipo AppSec. Tienes un producto que cobra.",
    problemBody:
      "Un escáner te suelta 200 líneas. Claude a veces se niega a auditar. El agujero que te cuesta no es una cabecera que falta: es un IDOR entre dos cuentas, un tool demasiado abierto, una sesión que fuga. El kit corre en tu máquina. Karukera no ve nada.",
    featuresTitle: "Tú eliges cómo mirar.",
    features: [
      {
        kind: "code",
        title: "El código, a fondo",
        body: "El squad lee el repo, el auth, la API, los secretos. No es un escaneo de superficie: es una lectura de lo que tu app hace de verdad.",
      },
      {
        kind: "outside",
        title: "O solo desde fuera",
        body: "¿Sin acceso al código? Mapea páginas, cabeceras, la superficie pública. Tú controlas el alcance.",
      },
      {
        kind: "inside",
        title: "Desde dentro del SaaS",
        body: "Das cuentas de prueba, o no. Con dos tenants, busca el aislamiento. Sin exploit, sin payload — medidas y pruebas.",
      },
      {
        kind: "tickets",
        title: "Tickets que tu LLM puede corregir",
        body: "Cada hallazgo se vuelve una tarjeta: prioridad, criterio de aceptación, prompt para pegar en Claude o Codex. No reescribes el brief.",
      },
    ],
    flowTitle: "El flujo es corto.",
    steps: [
      {
        t: "Abres el ZIP",
        b: "En Claude, Codex, Cursor o Hermes. En tu máquina.",
      },
      {
        t: "Eliges el proyecto y la profundidad",
        b: "Express, Web, SaaS, MCP, delta, red team… Solo un sistema que tienes derecho a auditar.",
      },
      {
        t: "Das accesos, o no",
        b: "Cuentas de prueba para mirar desde dentro. Si no, la auditoría se queda fuera.",
      },
      {
        t: "Recibes el informe",
        b: "Pruebas, estados, y tickets de corrección para tu LLM.",
      },
    ],
    routerTitle: "Claude puede negarse. OpenRouter, no.",
    routerBody:
      "Puedes hacerlo todo en Claude o Codex. Si el modelo rechaza la auditoría, deposita una clave OpenRouter. 30–50 € de créditos bastan para 1 a 3 misiones. Los modelos frontier no llevan el mismo filtro.",
    workflowTitle: "Doce agentes. La QA firma, o no hay informe.",
    workflowLead:
      "El transcurso de una misión SaaS completa. Es una demo. En tu máquina, el alcance y las pruebas son tuyos.",
    agents: [
      { id: "00", name: "Orquesta", job: "Encadena el squad" },
      { id: "01", name: "Superficie", job: "Cartografía" },
      { id: "02", name: "Amenazas", job: "Modelo de riesgos" },
      { id: "03", name: "Páginas", job: "Auditoría on-page" },
      { id: "04", name: "Sesión", job: "Auth y cookies" },
      { id: "05", name: "Authz", job: "Aislamiento" },
      { id: "06", name: "API", job: "Backend" },
      { id: "07", name: "Secretos", job: "Config expuesta" },
      { id: "08", name: "Supply", job: "Dependencias" },
      { id: "09", name: "MCP", job: "Tools y agentes" },
      { id: "10", name: "QA", job: "Niega o firma" },
      { id: "11", name: "Informe", job: "Entregable" },
    ],
    log: [
      "Misión SaaS completa — app.exemple.tld",
      "Orquestador: reglas 00–07 cargadas",
      "Superficie: 14 orígenes, 3 apps",
      "Amenazas: IDOR de tenant, sesión, MCP",
      "Páginas: /login, /app, /billing",
      "Auth: cookie HttpOnly, sin rotación",
      "Authz: GET /invoices/882 legible desde la org B",
      "F-014 Confirmado — prueba en el diario",
      "QA: relee la cadena de prueba",
      "QA firmada. Informe liberado.",
    ],
    findingId: "F-014",
    findingTitle: "Lectura de invoice fuera del tenant",
    findingStatus: "Confirmado",
    ticketId: "FIX-012",
    ticketTitle: "Prohibir la lectura de invoice fuera del tenant",
    ticketPrompt:
      "Control de pertenencia de tenant en GET/PATCH/DELETE invoice. Fuera del tenant: 404 idéntico al not-found. Test defensivo: el tenant A no lee el id del tenant B.",
    priceTitle: "197 €. Un ZIP. En tu lado.",
    priceBody:
      "110 archivos. 12 agentes, 10 especialistas, 8 profundidades. Pago único. Tus claves, tus créditos, tu objetivo.",
    faqTitle: "Antes de pagar.",
    faq: [
      {
        q: "¿Hay que saber programar?",
        a: "No. Abres el ZIP en Claude, Codex, Cursor o Hermes. Prompts, configs, plantillas.",
      },
      {
        q: "¿Tengo que usar OpenRouter?",
        a: "No. Puedes quedarte en Claude o Codex. Si el modelo rechaza la auditoría, una clave OpenRouter desbloquea a los que sí la hacen. 30–50 € de créditos para 1 a 3 misiones.",
      },
      {
        q: "¿Es un escáner en línea?",
        a: "No. El ZIP corre en tu lado. Karukera no ve tu objetivo ni tu código.",
      },
      {
        q: "¿Puedo usarlo en cualquier sitio?",
        a: "Solo un sistema para el que tienes autorización escrita.",
      },
      {
        q: "¿Qué recibo?",
        a: "Un informe priorizado, las pruebas, seis estados de medida, y tickets con el prompt para pegar en tu LLM y corregir.",
      },
    ],
    closeTitle: "Lanza la auditoría sobre un proyecto tuyo.",
    closeBody: "197 €. Un ZIP. Un informe sostenido — o el silencio de la QA.",
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
