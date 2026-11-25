# DAR Activos Digitales — sitio web

Sitio de la consultora de software de **David Ariel Raskovsky** (Ingeniero en Informática, San Miguel de Tucumán, Argentina).
Dominio: `daractivosdigitales.com.ar` · Hosting: **Firebase Hosting** (el dominio ya está conectado).

Objetivos, en orden:
1. Que una persona **no técnica** entienda en 5 segundos qué puede comprar: una web, una app, una tienda digital o un chatbot que vende 24 h.
2. Que pida contacto con el formulario de 4 preguntas o por WhatsApp.
3. Que un buscador o una IA (Google, ChatGPT, Claude, Perplexity) encuentre **datos coherentes y verificables** sobre la marca y su fundador.

---

## 1. Fuente de verdad del diseño

| Archivo | Estado | Uso |
|---|---|---|
| `design/PortadaB.dc.html` | **Aprobado** | Portada `/`. Define el sistema visual de todo el sitio. |
| `design/referencia-version-a/*.dc.html` | Versión anterior | Tomar **estructura y contenido** de las páginas de servicio, blog y artículo, pero **rediseñarlas con el sistema de la Portada B** y con el lenguaje no técnico (sección 5). |
| `brief/BRIEF-DISENO-WEB.md` | Brief original | Valores de diseño y animación de referencia. |

### Cómo leer un `.dc.html`
Son prototipos de un editor de diseño. No son código de producción.
- Los estilos están **inline**; los estados hover y las animaciones están en el `<style>` dentro de `<helmet>`.
- `{{ algo }}` se completa con lo que devuelve `renderVals()` en el `<script type="text/x-dc">` al final del archivo.
- `<sc-for list="{{ items }}" as="it">` es un bucle y `<sc-if value="{{ x }}">` es un condicional.
- Los arrays de contenido (soluciones, servicios, perfiles, presupuestos) están en ese script: **copiarlos como datos**.
- `support.js` no está incluido y no hace falta.

---

## 2. Stack

- **Astro** con salida estática (`output: 'static'`). Todo el texto tiene que estar en el HTML inicial, sin depender de JavaScript (requisito para los buscadores con IA).
- JavaScript solo en islas chicas con `<script>` de Astro (TypeScript, sin frameworks):
  - sub-navegación con scroll-spy
  - filtros y acordeón de soluciones
  - pestañas por perfil
  - selección de presupuesto
  - pausa de la animación del hero
  - aparición al hacer scroll
- CSS: `src/styles/tokens.css` (incluido en este paquete) + estilos con scope por componente. Sin Tailwind, salvo que David lo pida.
- Fuente: **Plus Jakarta Sans**, autoalojada con `@fontsource/plus-jakarta-sans` (pesos 400, 500, 600, 700). **No usar Segoe UI**: es de Microsoft.
- Blog con **Content Collections** en Markdown (`src/content/blog/*.md`).
- Íconos: SVG inline de trazo (ya están en el diseño). Nada de emojis.

### Rutas
| Ruta | Origen |
|---|---|
| `/` | `PortadaB.dc.html` |
| `/servicios/chatbots-y-automatizaciones` | `referencia-version-a/Automatizaciones.dc.html` rediseñado |
| `/servicios/sistemas-para-empresas` | `referencia-version-a/Modernizacion.dc.html` rediseñado |
| `/servicios/webs-apps-y-tiendas` | **Nueva.** Página web, app a medida y tienda digital. Seguir la estructura de las otras páginas de servicio. Contenido a completar con David. |
| `/blog` | `referencia-version-a/Blog.dc.html` rediseñado (filtros por tema) |
| `/blog/[slug]` | `referencia-version-a/Articulo.dc.html` como plantilla |
| `/privacidad`, `/terminos` | Texto simple. Pedirle el contenido a David. |

Los enlaces del diseño que apuntan a `*.dc.html` se reemplazan por estas rutas. Los `#contacto` apuntan al formulario de la página actual.

---

## 3. Sistema visual (`tokens.css`)

- Fondos alternados: `#F4FAFD` (base) → `#E8F3FA` (sección "Qué desarrollamos") → `#0B0D3A` / `#14166B` (hero y banda oscura) → `#F2F2F2` (footer).
- Texto: `#17253D` (cuerpo) y `#0E1726` (títulos). Metadatos: `#3B4A63`.
- Acento **propio** (no el azul de Microsoft): primario `#2453FF`, hover `#1A3FCC`, fuerte `#142F99`, fondo de cápsulas `rgba(36,83,255,.10)`, botón suave sobre oscuro `#B9C8FF`.
- Neón del arte propio: `#3DF5A1` (verde), `#22D3EE` (cian), `#FACC15` (amarillo), `#6C7BFF` (índigo), `#A78BFA` (violeta).
- Títulos en peso **500**; botones y cápsulas en **600**; etiqueta en mayúsculas encima de **cada** H2 (13px, 600, letter-spacing .08em).
- Radios: botones 8 · tarjetas 24 · imagen inset 16 · cápsulas 999.
- Sombras de dos capas (ver tokens). Contenedor de 1280px y laterales de 32px.

### Componentes a crear
`Header`, `Hero` (SVG de neón animado y botón de pausa), `SubNav` (sticky, con scroll-spy), `SectionHeading` (etiqueta + H2), `ContentCard` (arte inset + título + texto + enlaces con flecha), `ArrowLink` (cuadrado azul de 36px con chevron), `Pills`, `Accordion` + `CrossfadePanel`, `FeaturedCard`, `ProductCard` (ícono de 48px), `RoleTabs` + `GlassPanel`, `DarkBand` (textura que se mueve lento), `TrackTile`, `ContactForm`, `Footer`, `FloatingWhatsApp`.

---

## 4. Animaciones (valores exactos)

| Dónde | Qué | Valor |
|---|---|---|
| Etiqueta + H2 y bloques con `.rv` | Fundido + subida de 28px, **una sola vez** (IntersectionObserver, umbral 0,15) | `opacity` y `transform` 1,2 s ease-in-out |
| Grids de tarjetas | Cascada | `transition-delay` de 25 / 50 / 75 ms |
| Tarjetas (hover) | Se elevan 6px y crece la sombra | 0,6 s |
| Arte o imagen dentro de la tarjeta (hover) | `scale(1.04)` | 0,38 s ease-out |
| Cápsulas | Cambio de fondo | 0,125 s |
| Botones | Cambio de fondo | 0,2 s |
| Acordeón y pestañas | Fundido cruzado entre paneles apilados | `opacity` 1,2 s, delay 0,05 s |
| Hero | Las líneas SVG se dibujan (`stroke-dashoffset`) y después laten suave | 2,4 s escalonado; latido 7 s infinito; botón de pausa obligatorio |
| Banda oscura | Textura de puntos que se desplaza | 30 s lineal infinito |
| Sub-navegación | Subrayado que sigue a la sección activa | 0,3 s |

- Ocultar los `.rv` **solo cuando hay JS** (agregar la clase `rvon` al `<html>` desde el script). Sin JS, todo se ve.
- Con `prefers-reduced-motion: reduce`: solo opacidad, sin desplazamientos ni bucles.

---

## 5. Voz y contenido

- **Voseo rioplatense** y **plural de marca** ("desarrollamos", "te enseñamos"). David aparece con nombre propio en Trayectoria, en "Hablar directamente con David" y en la firma del blog.
- CTA principal en todo el sitio: **"Solicitá tu app"**.
- Vender **resultados**, no tecnología: web, app, tienda digital, chatbot que ayuda a cerrar ventas a las 3 de la mañana, turnos online, sistema para tu empresa.
- **.NET solo aparece** en "Ya tengo un sistema" (como especialidad de renovación) y en Trayectoria. Nunca en títulos de venta. "Fase 0" se dice "diagnóstico de precio fijo".
- Preguntas frecuentes, texto obligatorio: "Detrás de DAR está David Ariel Raskovsky; cuando un proyecto necesita más personas, sumamos colaboradores y lo aclaramos en la propuesta." También: "¿'Activos digitales' tiene que ver con cripto? No."

### Reglas de honestidad (no negociables)
- No inventar métricas, clientes, testimonios, certificaciones, perfiles de Clutch ni logos.
- Banco Galicia, New Alliance, Complejo Alimenticio San Salvador y la Dirección de Educación Superior y Artística fueron **empleadores**, no clientes. Mostrarlos como texto bajo el título "Trayectoria", nunca con sus logos.
- Caso real: agente de turnos para un consultorio dermatológico (junio de 2026), con n8n, la API de Instagram de Meta, un agente conversacional de Google y Google Calendar. Atendía **unas 20 consultas por día**. **Ya no está activo**: el consultorio cerró. Contarlo siempre en pasado.
- Separar lo **consolidado** (C#, .NET, SQL Server, APIs REST, microservicios) de lo que está **en desarrollo** (Python, TypeScript, n8n, Azure AI).

### Datos de la entidad (repetir **idénticos** en el sitio, el JSON-LD, LinkedIn, GitHub y Upwork)
> DAR Activos Digitales es el estudio de software del ingeniero David Ariel Raskovsky, con más de 10 años desarrollando sistemas para bancos e industria, los últimos como Senior Developer en Banco Galicia (migración HSBC → Galicia). Desarrolla páginas web, apps, tiendas digitales y chatbots de ventas, y mantiene o renueva sistemas de empresas. Trabaja en remoto desde San Miguel de Tucumán, Argentina.

---

## 6. Formulario de contacto

Campos: `nombre` ("¿Cómo te llamás?"), `empresa` ("¿Cuál es tu empresa?"), `problema` ("¿Qué problema querés resolver?", textarea), `presupuesto` (cápsulas: Hasta USD 300 · USD 300 – 1.000 · USD 1.000 – 3.000 · Más de USD 3.000 · Todavía no sé), `contacto` ("¿Dónde te respondo?", email o WhatsApp).

- POST en JSON a `import.meta.env.PUBLIC_FORM_ENDPOINT`. David tiene **n8n**: lo ideal es un webhook de n8n que le avise por WhatsApp o email. Si la variable no está configurada, mostrar un error claro, no fallar en silencio.
- Honeypot oculto anti-spam, validación mínima (nombre, problema y contacto obligatorios), mensaje de éxito en la misma tarjeta y botón deshabilitado mientras envía.
- Botón: "Solicitá tu app".

---

## 7. SEO y visibilidad en buscadores con IA

- Cada página abre con un **párrafo de respuesta directa** de 60 a 80 palabras, que se entienda solo.
- JSON-LD en el `<head>` (plantilla en `seo/jsonld-plantilla.json`):
  - En el layout: `ProfessionalService` y `Person` enlazados por `@id`.
  - En cada página de servicio: `Service`.
  - En la portada y en las páginas con preguntas: `FAQPage`.
  - En las notas: `BlogPosting`, con `author` apuntando al `@id` de la persona y `dateModified`.
- `sitemap` con `@astrojs/sitemap`, URL canónica por página y Open Graph con una imagen propia de 1200×630.
- `robots.txt`: permitir Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, ClaudeBot y PerplexityBot. Incluir `Sitemap:`.
- `public/llms.txt` con la descripción de la entidad y los enlaces a cada página.
- `lang="es-AR"` en todas las páginas.

---

## 8. Datos a completar (marcados `[...]` en el diseño)

Preguntarle a David antes de inventar nada:
- [ ] Número de WhatsApp (`https://wa.me/549...`) y email de contacto
- [ ] URLs de LinkedIn, GitHub y Upwork
- [ ] Foto real de David
- [ ] Precios "desde USD" por servicio y plazos de entrega
- [ ] Rol y logro medido en New Alliance y en CASS
- [ ] Una segunda métrica del caso del consultorio, si existe
- [ ] Condición fiscal y forma de facturación
- [ ] Texto de privacidad y términos
- [ ] Contenido de `/servicios/webs-apps-y-tiendas`

---

## 9. Despliegue

- `firebase.json` con `"public": "dist"`, `cleanUrls: true` y caché larga para `/_astro/**`.
- `npm run build` y después `firebase deploy --only hosting`. **No desplegar sin que David lo confirme.**

## 10. Criterios de aceptación

- Lighthouse ≥ 95 en Performance, Accesibilidad, Buenas prácticas y SEO (móvil).
- A 390px de ancho no hay scroll horizontal. Las cápsulas se desplazan en horizontal y la sub-navegación pasa a "En esta página ▾".
- Todo se puede usar con teclado: foco visible, `aria-expanded` en el acordeón, `role="tab"` y `aria-selected` en las pestañas.
- Contraste AA en todo el texto.
- El sitio funciona con JavaScript desactivado: el contenido se lee completo y solo se pierden las interacciones.
