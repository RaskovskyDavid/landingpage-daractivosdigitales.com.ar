# Prompt para pegar en Claude Code

Copiá este bloque como primer mensaje, con la carpeta `dar-sitio` abierta como proyecto.

---

Leé `CLAUDE.md` completo antes de hacer nada. Es la especificación del sitio de DAR Activos Digitales.

Quiero construir el sitio en Astro siguiendo esa especificación. Trabajá por etapas y frená al final de cada una para que lo revise:

1. **Base:** proyecto Astro, `src/styles/tokens.css` (ya incluido), fuente Plus Jakarta Sans con @fontsource, layout con el JSON-LD de `seo/jsonld-plantilla.json`, `Header`, `Footer` y `FloatingWhatsApp`.
2. **Portada:** pasá `design/PortadaB.dc.html` a componentes Astro, con el contenido y los valores de animación exactos. Las interacciones van en scripts chicos de TypeScript, sin frameworks.
3. **Formulario:** `ContactForm` con envío a `PUBLIC_FORM_ENDPOINT` (un webhook de n8n), honeypot y mensajes de éxito y error.
4. **Páginas de servicio:** rediseñá las de `design/referencia-version-a/` con el sistema de la portada y el lenguaje no técnico de la sección 5. Creá también `/servicios/webs-apps-y-tiendas`.
5. **Blog:** Content Collections, índice con filtros por tema, plantilla de nota con `BlogPosting` y la nota del caso del consultorio como primera entrada.
6. **SEO:** sitemap, robots.txt, llms.txt, Open Graph y URL canónica.
7. **Revisión:** criterios de la sección 10 de CLAUDE.md (Lighthouse, 390px, teclado, contraste, sin JavaScript).

Reglas: no inventes datos. Todo lo que está entre `[...]` me lo preguntás a mí, y nunca agregues métricas, clientes, logos ni certificaciones. No despliegues a Firebase sin que te lo confirme.
