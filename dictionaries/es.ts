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
    agents: "Agents",
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
      "Pago recibido. Descarga el kit, abre START-HERE.md, pon tu clave OpenRouter, lanza una misión sobre un alcance que controles.",
    download: "Descargar el ZIP",
    thanksPending: "El pago se está confirmando.",
    thanksFail: "Sesión inexistente o impagada.",
    next1: "Abre START-HERE.md — sin clave OpenRouter, no arranca nada.",
    next2: "30–50 € de créditos. DeepSeek / GLM.",
    next3: "« Auditoría SaaS completa en https://… »",
  },
};

export default es;
