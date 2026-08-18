import type fr from "./fr";

const es: typeof fr = {
  nav: {
    projects: "Proyectos",
    carnet: "Cuaderno",
    agents: "Agents",
    security: "Auditoría",
    secretary: "Secretaria",
    guides: "Guías",
  },
  hero: {
    tagline: "La isla de las bellas aguas",
    seaListen: "El mar",
    seaQuiet: "Silencio",
  },
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
    salesTagline: "Karukera Agents — herramientas para el día a día de un emprendedor.",
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
    buyShort: "Obtener el kit",
    price: "197 €",
    priceNote: "Pago único. Actualizaciones por mail.",
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
    next2: "Si el modelo rechaza la auditoría, deposita una clave OpenRouter (unos 10 € de créditos por una auditoría).",
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
    metaTitle: "Pentest IA de tu SaaS — kit de auditoría | Karukera",
    metaDesc:
      "Lanza una auditoría Web, SaaS o MCP en tu máquina, en Claude, Codex o Cursor. 8 modos, 12 agentes, informe con QA, tickets. 197 €.",
    catalogMetaTitle: "Karukera Agents — herramientas IA para emprendedores",
    catalogMetaDesc:
      "Karukera Agents: kits de IA que se adaptan a tu práctica. Familia técnica (auditoría Web, SaaS, MCP) y familia comercial (secretaria Telegram / Ringover / Odoo). En tu máquina.",
    catalogTitle: "Karukera Agents. Herramientas para el día a día.",
    catalogLead:
      "Aligerar el día de un emprendedor con IA, sin llevarse sus datos. Cada agente se adapta a tu práctica: tú eliges el modo, los accesos, el ritmo. Corren en tu lado.",
    catalogPrice: "197 €",
    catalogOpen: "Ver el kit",
    catalogHow: [
      { t: "Ajustado a tu práctica", b: "Dices el proyecto, la profundidad, qué puede tocar el agente. Se adapta. No impone un flujo genérico." },
      { t: "En tu lado", b: "Tus datos, tus herramientas, tus hábitos. Karukera no ve tu código, ni tus clientes, ni tus claves." },
      { t: "Un ZIP, no una agencia", b: "Pagas, lo lanzas en Claude, Codex, Cursor o Hermes — o en tu VPS. Enlace firmado 7 días." },
    ],
    catalogFamilyTech: "Técnica",
    catalogFamilyTechLead:
      "Agentes que miran lo que construyes. Auditoría, superficie, aislamiento. Vendrán más agentes técnicos.",
    catalogFamilyTechSoon: "Después en esta familia — aún no a la venta: SEO / GEO.",
    catalogFamilyBiz: "Comercial",
    catalogFamilyBizLead:
      "Agentes que sostienen el hilo con tus prospectos. Mails, llamadas, CRM. Nada sale sin ti. Vendrán más agentes sales y business.",
    catalogFamilyBizSoon: "Después en esta familia — más agentes comerciales, aún no a la venta.",
    catalogBadge: "Kit de auditoría de seguridad",
    catalogScope: "Solo founder · SaaS · Web",
    catalogAlt: "Consola de auditoría con el squad en misión",
    catalogH2: "Asegura tu aplicación",
    catalogBody:
      "Auditoría de seguridad que lanzas en tu máquina. Código a fondo, superficie exterior, o desde dentro del SaaS. Informe, pruebas, tickets para tu LLM.",
    catalogFacts: [
      "110 archivos, cero código obligatorio",
      "8 tipos de auditoría, 12 agentes",
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
    modesTitle: "Ocho tipos de auditoría.",
    modes: [
      { t: "Express", b: "Primer paso. Superficie, páginas, secretos. 30–45 min." },
      { t: "Web completa", b: "Sitio o app: páginas, cookies, front, API del mismo origen." },
      { t: "SaaS completa", b: "Orgs, roles, facturación, aislamiento entre tenants." },
      { t: "Agentes / MCP", b: "Tools, skills, un copiloto conectado a datos." },
      { t: "Delta", b: "Después de correctivos: qué se movió." },
      { t: "Continua", b: "Snapshot periódico, guarda de release." },
      { t: "Red team", b: "Ejercicio adverso. Mandato escrito obligatorio." },
      { t: "Informe board", b: "Síntesis para dirección desde un diario ya firmado." },
    ],
    routerTitle: "Claude puede negarse. OpenRouter, no.",
    routerBody:
      "Puedes hacerlo todo en Claude o Codex. Si el modelo rechaza la auditoría, deposita una clave OpenRouter. Unos 10 € de créditos por una auditoría. Los modelos frontier no llevan el mismo filtro.",
    workflowTitle: "Doce agentes. La QA firma, o no hay informe.",
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
    priceTitle: "197 €, una vez.",
    priceBody:
      "Pago único. Actualizaciones regulares: un mail te avisa, descargas el nuevo ZIP.",
    faqTitle: "Antes de pagar.",
    faq: [
      {
        q: "¿Hay que saber programar?",
        a: "No. Abres el ZIP en Claude, Codex, Cursor o Hermes. Prompts, configs, plantillas.",
      },
      {
        q: "¿Tengo que usar OpenRouter?",
        a: "No. Puedes quedarte en Claude o Codex. Si el modelo rechaza la auditoría, una clave OpenRouter desbloquea a los que sí la hacen. Unos 10 € de créditos por una auditoría.",
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
      {
        q: "¿Las actualizaciones se pagan?",
        a: "No. Pago único. Cuando el kit cambia, un mail te envía el enlace para descargar el nuevo ZIP.",
      },
    ],
    closeTitle: "Lanza la auditoría sobre un proyecto tuyo.",
    closeBody: "Un pago. Las actualizaciones llegan por mail. Un informe sostenido — o el silencio de la QA.",
    briefLink: "Nota de presentación — perímetro, método, entrega",
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
  guides: {
    indexMetaTitle: "Guías de auditoría — 8 modos del kit | Karukera",
    indexMetaDesc:
      "Pentest IA, auditoría web, auditoría SaaS, seguridad MCP, delta, continuo, red-team ligero, informe board. Un artículo por modo. En tu máquina.",
    indexTitle: "Ocho modos. Un artículo para cada uno.",
    indexLead:
      "No eliges un modo interno. Dices el proyecto — sitio, SaaS, MCP — y la profundidad. Cada guía dice qué hace la squad, qué rechaza y cómo lanzar.",
    modesEyebrow: "Kit de auditoría",
    pillarEyebrow: "El ángulo",
    read: "Leer la guía",
    whenLabel: "Cuándo abrirlo",
    agentsLabel: "Agentes",
    skipsLabel: "Fuera de este modo",
    launchLabel: "Frase tipo",
    faqTitle: "Antes de lanzar",
    relatedTitle: "Otros modos",
    allGuides: "Todas las guías",
    ctaTitle: "El kit, no la guía.",
    ctaBody:
      "197 €. Un ZIP. Lo abres en Claude, Codex, Cursor o Hermes. Informe sostenido — o el silencio de la QA.",
    productModesTitle: "Ocho profundidades. Elige según el producto.",
    productModesLead:
      "Express para una primera señal. Web completo para un sitio. SaaS para el aislamiento. MCP si el valor es el agente. Cada modo tiene su guía.",
  },
};

export default es;
