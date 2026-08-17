# Karukera Security Kit

*Nota de presentación · agosto 2026 · documento público*

Un ZIP de agentes que lanzas en tu máquina para asegurar tu aplicación — y por tanto tus ingresos. Este texto describe el perímetro, el método y la entrega. Nada aquí es un acceso. Nada es un dato sensible.

## En una frase

Abres el kit en Claude, Codex, Cursor o Hermes, en tu máquina. Dices qué proyecto auditar, a qué profundidad, y si das accesos. Recibes un informe con pruebas y luego tickets de corrección — cada uno con un prompt para pegar en tu LLM.

## Para quién

Un founder solo, un equipo pequeño, un SaaS que cobra. No un equipo AppSec. El agujero que cuesta casi nunca es un header: es un IDOR entre dos cuentas, una sesión que filtra, una tool de agente demasiado abierta.

## Perímetro

El kit solo audita un sistema que controlas por escrito: tu sitio, SaaS, API, instancia MCP, o el sistema de un cliente con mandato firmado. Si no, se detiene.

Tú eliges cómo mirar. Las tres aproximaciones se combinan. Lo que no eliges queda « No testeado » — no se inventa.

- Exterior — lo que ve un desconocido: páginas públicas, cabeceras, JS servido, ficheros expuestos, login.
- Código — el repo local, en tu disco. Prueba = ruta + extracto + fecha. No un volcado del repo.
- Interior — desde una cuenta real del SaaS. Autorización y aislamiento (cliente A vs cliente B). Sin cuenta, esos tests quedan No testeado.

Emails y roles de las cuentas de prueba van en el brief. Las contraseñas no pasan por el chat. Red team: mandato escrito, o stop.

## Lo que no es

- No es un escáner alojado. Karukera no ve el objetivo, ni el código, ni tus claves.
- No es una agencia, ni una semana de pentest humano.
- No es un framework de exploits: cero payload, cero PoC de ataque, cero DoS.
- No es un certificado SOC 2, ni una garantía de exhaustividad.
- No es auditar el sitio de un tercero « por ver ».

## Método

El kit es un ZIP de prompts, configs y plantillas. Cero código obligatorio. Lo abres en el agente que ya usas.

Claude, Codex y otros modelos a menudo se niegan a hacer una auditoría de seguridad. Una clave OpenRouter enruta entonces hacia modelos que sí la hacen. Los créditos son tuyos. La clave se deposita fuera del chat, en tu máquina.

No eliges un id interno. Dices el proyecto, la profundidad, los accesos. El orquestador mapea a uno de ocho modos:

- Express — primera señal, 30–45 min.
- Completo Web — sitio o app, páginas, cookies, API del mismo origen.
- Completo SaaS — orgs, roles, aislamiento. Dos tenants para confirmar un IDOR.
- Agentes / MCP — tools, skills, copiloto conectado a datos.
- Delta — después de correcciones: qué se ha movido.
- Continuo — snapshot periódico, guarda de release.
- Red team ligero — ejercicio adverso. Mandato escrito, sin exploit.
- Informe board — síntesis para decisión. Ningún test nuevo. Rechazado si la QA no ha firmado.

Doce agentes en un orden fijo: superficie, amenazas, páginas, sesión, autorización, API, secretos, supply chain, MCP, luego una QA adversaria, luego el informe. La QA relee la cadena de prueba. Sin su firma no hay entregable — ni un « borrador para el comité ».

Seis estados, nunca mezclados con una cobertura: Confirmado, Probable, Hipótesis, No testeado, Mitigado, Falso positivo. Confirmado exige prueba (URL o archivo:línea, extracto, fecha, método). Sin prueba, no es Confirmado.

## Entrega

Lo que lees al final no es un PDF de marketing.

- Un informe: síntesis, findings priorizados (P0–P3), lo no testeado.
- Las pruebas: extractos ya vistos, secretos enmascarados, diario solo-append.
- Tickets de corrección: uno por finding importante. Cada uno lleva la acción, el criterio de salida y un prompt listo para pegar en Claude o Codex — sin payload, sin receta de ataque.

Lo No testeado sigue visible, sobre todo el aislamiento con un solo tenant. Un Express no se disfraza de auditoría estratégica.

## Frase para lanzar

> Audita este proyecto en mi máquina. URL: https://app.ejemplo.tld. Código: ./mi-app. Completo. Exterior + interior. Las cuentas están en el brief, no aquí.

Sustituye la URL y la ruta. No inventes cuentas. No pongas una contraseña en esa frase.

## Precio y entrega

197 €, una vez. El ZIP se descarga tras el pago, con un enlace firmado. Las actualizaciones llegan por mail. Karukera no hace de proxy: tus modelos, tus créditos, tu máquina.

## Lo que este documento no es

Esto no es el kit. Es la presentación pública. El entregable sigue siendo el ZIP. Nada aquí da acceso a un objetivo, a una cuenta, o al contenido de pago.
