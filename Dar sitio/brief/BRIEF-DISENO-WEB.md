# Brief de diseño — Web de venta de software y servicios

> **Para el agente de diseño.** Este documento describe con precisión el lenguaje visual, la estructura y las animaciones que queremos. Está tomado de un análisis real (estilos computados, animaciones y capturas) de la home de Microsoft Azure, que usamos **solo como referencia de estilo y de recorrido**.
> **No copiar** logos, nombres, textos, fotos ni la marca Microsoft/Azure. Se replica el *patrón*, no el contenido.
> Las capturas de referencia están en la carpeta `referencias/` (numeradas en el orden en que aparecen en la página).

---

## 1. Idea central (qué debe sentir el visitante)

Una web **corporativa, limpia y luminosa**, con aire de "empresa tecnológica seria" pero cercana. Mucho espacio en blanco, fondos casi blancos con un leve tinte azulado, tarjetas blancas muy redondeadas que "flotan" con sombras suaves, y **un solo color de acento** (azul) reservado para acciones. Dos momentos oscuros (hero y banda de "infraestructura") dan ritmo y dramatismo.

El recorrido lleva al visitante de **"esto es lo nuevo / lo que hacemos" → "qué problema te resuelvo" → "con qué herramientas" → "cómo trabajamos" → "quién confía en nosotros" → "tu siguiente paso"**, con una llamada a la acción visible en todo momento.

---

## 2. Sistema visual (design tokens)

### 2.1 Colores (valores medidos)

| Token | Valor | Uso |
|---|---|---|
| `--bg-page` | `#F7F7F7` / `#F4FAFD` | Fondo general (alternar entre gris muy claro y blanco azulado por sección) |
| `--bg-section-tint` | `#E8F3FA` aprox. (azul muy pálido) | Secciones alternas (p. ej. "Productos") |
| `--surface` | `#FFFFFF` / `#FEFEFE` | Tarjetas |
| `--text` | `#17253D` | Texto de cuerpo |
| `--heading` | `#0E1726` | Títulos (casi negro azulado) |
| `--muted` | `#616161` | Títulos del footer, metadatos |
| `--primary` | `#0078D4` | Botón principal, iconos-flecha de los links |
| `--primary-strong` | `#005597` | Pill/tab activa |
| `--primary-deep` | `#004275` | Texto de pills inactivas, links |
| `--pill-bg` | `rgba(0,85,151,0.10)` | Fondo de pills inactivas |
| `--btn-soft` | `#B3DAF0` | Botón secundario relleno (sobre fondos oscuros) |
| `--on-dark` | `#F4FAFD` | Texto sobre fondos oscuros |
| `--dark-hero` | Azul marino/índigo muy oscuro (`#0B0D3A` → `#14166B`) | Hero y banda oscura |

> Si tenemos color de marca propio, **sustituir solo la familia `--primary*`** y mantener el resto (neutros y proporciones).

### 2.2 Tipografía

- Familia: sans-serif humanista moderna (la referencia usa *Segoe UI Variable*). Alternativas web: **Inter**, **Manrope** o **Plus Jakarta Sans**.
- Pesos **medios, no negritas**: los títulos van en 500; botones y pills en 600.

| Elemento | Tamaño / peso / interlineado |
|---|---|
| H1 (hero) | 44px / 500 / ~1.15 — blanco sobre oscuro |
| H2 (título de sección) | 40px / 500 / ~1.2 |
| H3 (título de tarjeta) | 24px / 500 (en tarjetas chicas ~18–20px / 600) |
| Cuerpo | 16px / 400 / 24px |
| Botones y pills | 15–16px / 600 |
| **Eyebrow** (sobretítulo) | 12–13px / 600 / MAYÚSCULAS / letter-spacing ~0.08em — va encima de cada H2 ("SOLUCIONES", "HISTORIAS DE CLIENTES") |
| Footer: títulos de columna | 15px / 600 / gris |

### 2.3 Formas, sombras y espaciado

- **Radios:** botones `8px` · tarjetas `24px` · imágenes dentro de tarjetas `16px` · pills/tabs `999px` (totalmente redondas) · tarjeta grande destacada `24px`.
- **Sombras** (muy sutiles, de dos capas):
  `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)`; en tarjetas, además una sombra difusa grande y clara (`0 8px 24px rgba(14,23,38,.06)`).
- Tarjetas con **borde blanco grueso / doble marco**: la tarjeta es blanca y la imagen va inset con margen de ~8px (ver `02`, `07`).
- Contenedor máx. ~1200–1280px; márgenes laterales ~56px en desktop.
- **Espacio vertical generoso** entre secciones: 120–160px. Entre eyebrow → H2: 12px. H2 → contenido: 48–64px.
- Grid de 3 columnas para tarjetas, gap ~16–24px.

### 2.4 Componentes clave

1. **Botón primario:** fondo `--primary`, texto blanco, radio 8px, padding 12×16px.
2. **Botón secundario (sobre oscuro):** fondo `--btn-soft` con texto oscuro, o **contorno** de 2px celeste con texto blanco (ver `01`, `10`).
3. **Link con flecha:** cuadrado azul `--primary` de ~36px, radio 6px, con chevron `>` blanco + texto azul oscuro 600 a su derecha (ver `03`, `08`). Es la firma visual de los CTAs secundarios.
4. **Pills / tabs de filtro:** fila horizontal, la activa en `--primary-strong` con texto blanco, las demás en `--pill-bg`; al final un botón circular con contorno y chevron para desplazar (ver `04`, `06`).
5. **Sub-navegación flotante "sticky":** cápsula blanca con radio ~16px y sombra, separada del borde superior (~24px), con anclas a las secciones de la página y un subrayado azul que marca la sección actual (scroll-spy) + botón primario a la derecha (ver `02`).
6. **Botón de chat flotante:** abajo a la derecha, rectángulo azul radio 8px con icono de chat y texto "Hablar con ventas". Siempre visible (ver `14`).
7. **Tarjeta de contenido:** imagen arriba (inset, radio 16px) → título → descripción → 1–2 links con flecha al pie (ver `02`, `03`).
8. **Tarjeta de producto:** icono cuadrado de 48px en un recuadro blanco con borde fino → título → descripción → link subrayado "Ver más" (ver `07`, `08`).
9. **Acordeón + imagen:** lista de acordeón a la izquierda (el ítem abierto tiene una barra vertical azul a su izquierda y un link subrayado), imagen grande a la derecha con marco de color y textura de puntos (ver `04`, `05`).
10. **Tile de logo:** cuadrado blanco radio 16px con sombra suave y logo centrado; grid de 6 columnas (ver `11`, `12`).

---

## 3. Estructura de la página y recorrido del visitante

> Orden exacto, de arriba abajo. Para cada sección: **objetivo → layout → contenido → animación.**

### 0. Header global
- Barra blanca de ~56px: logo a la izquierda, menú "Más ▾", luego buscador, links ("Servicios", "Casos", "Contacto") y a la derecha **botón primario** ("Agendar llamada") + botón con contorno ("Ingresar" / "WhatsApp").

### 1. Hero oscuro — *"Engancho y digo qué hago"* (`01`)
- Fondo azul marino profundo con un **video en bucle, silenciado y autoplay** de líneas de neón curvas (verde, azul, amarillo) que entran desde la derecha. Botón pequeño de pausa/reproducción arriba a la izquierda (accesibilidad).
- Columna de texto a la izquierda (~50%): eyebrow celeste en mayúsculas → H1 blanco de 3–4 líneas → párrafo de 3–4 líneas → dos botones (relleno celeste + contorno).
- Alto ≈ 100vh menos el header.

### 2. Novedades / Destacados — *"Esto es lo último que ofrecemos"* (`02`, `03`)
- Al llegar aquí **aparece la sub-nav flotante sticky** con anclas: *Destacados · Soluciones · Servicios · Cómo trabajamos · Casos*.
- Eyebrow + H2 alineados a la izquierda.
- **Grid de 3×2 tarjetas de contenido** con imágenes abstractas del mismo estilo (fondo oscuro con líneas de neón en esquina, cada una con un color distinto: violeta, amarillo, verde, azul, naranja). Cada tarjeta con 1–2 links con flecha.

### 3. Soluciones — *"¿Qué problema tienes? Te lo resuelvo"* (`04`, `05`)
- Eyebrow + H2 grande.
- **Fila de pills** por categoría (p. ej. *Destacadas · Automatización · Agentes de IA · Desarrollo a medida · Digitalización de pymes*).
- Debajo: **acordeón a la izquierda (≈35%)** con 3–4 soluciones + **imagen grande a la derecha (≈60%)** con foto de personas trabajando, enmarcada en un borde de color con textura de puntos. Al abrir otro ítem, la imagen cambia con fundido.
- Cierre con link con flecha: "Ver todas las soluciones".

### 4. Productos / Servicios — *"Estas son las herramientas"* (`06`, `07`, `08`)
- **Cambio de fondo** a azul muy pálido (franja de ancho completo) para marcar un nuevo capítulo.
- Eyebrow + H2 + pills de categorías.
- **Tarjeta grande destacada** a ancho completo con imagen 3D abstracta de fondo (turquesa/azul), texto blanco abajo a la izquierda y botón celeste.
- Debajo, **grid de 3 columnas de tarjetas de producto** con icono, título, descripción y link.
- Link con flecha: "Ver todos los servicios".

### 5. Cómo trabajamos / Recursos por perfil — *"Esto es para alguien como tú"* (`09`)
- Eyebrow centrado + H2 centrado + subtítulo centrado.
- Tabs por perfil (p. ej. *Dueño de negocio · Gerente de TI · Equipo de desarrollo*) y una **imagen enmarcada en una tarjeta de vidrio** (glassmorphism suave: fondo blanco semitransparente, blur, radio 24px) sobre un **fondo ilustrado 3D** (esferas, cápsulas y superficies perforadas en turquesa/azul con profundidad de campo).

### 6. Banda oscura — *"Tenemos capacidad y respaldo"* (`10`)
- Franja a ancho completo azul índigo oscuro con **textura animada sutil** (patrón ondulado tipo ruido). Texto centrado blanco, H2 + párrafo + 2 botones (relleno celeste + contorno).
- Para nosotros: "Infraestructura propia y buenas prácticas" / "Tecnologías con las que trabajamos".

### 7. Prueba social — *"Otros ya confían"* (`11`, `12`)
- Vuelve el fondo claro. Eyebrow + H2 **centrados**.
- **Grid de logos de clientes** en tiles blancos (6 por fila, 2 filas). Botón primario centrado: "Ver casos de éxito".
- Alternativa si aún hay pocos clientes: 3 tarjetas de testimonio reales con foto, nombre y empresa.

### 8. Cierre — *"Tu siguiente paso"* (`13`)
- H2 centrado.
- **Tarjeta grande horizontal**: texto + botón primario a la izquierda, foto a la derecha (radio 16px).
- Debajo, **2 tarjetas** de igual ancho con foto arriba: "Hablar con un especialista" y "¿Recién empiezas? Mira por dónde arrancar".
- Fondo con elementos 3D difuminados asomando en los bordes.

### 9. Footer (`14`)
- Fondo gris claro `#F2F2F2`, 6 columnas de links (títulos grises 15px/600, links 13px).
- Fila inferior: selector de idioma con globo, privacidad, legales.

---

## 4. Animaciones e interacciones (valores medidos)

| Dónde | Qué pasa | Valores |
|---|---|---|
| Encabezado de cada sección (eyebrow + H2) | **Reveal al entrar en pantalla**: aparece con fundido y sube | `fade-in` + `slide-up`, **1.2s**, ease / ease-in-out, desplazamiento ~24–32px |
| Grid de 3 tarjetas | **Entrada escalonada (stagger)**: cada tarjeta sube con un pequeño retraso | `slide-up` 1.2s, ease-in-out, delays **25ms / 50ms / 75ms**; el contenedor tiene `overflow` animado 2.4s para no mostrar cortes |
| Imágenes de tarjetas (hover) | Zoom leve dentro del marco | `transform: scale(1.03–1.05)` **0.38s ease-out** |
| Tarjetas (hover) | Se elevan levemente y la sombra crece | `transform 0.6s` |
| Pills / tabs | Cambio de color de fondo | **0.125s ease-in-out** |
| Botones y links | Oscurecen el fondo al hover | `background-color 0.2s` |
| Cambio de contenido en tabs/acordeón | Fundido cruzado | `opacity 1.2s ease-in-out`, delay 0.05s |
| Sub-nav sticky | Aparece al pasar el hero; subrayado animado que sigue a la sección activa | scroll-spy, transición del subrayado ~0.3s |
| Hero | Video de fondo en bucle (autoplay, muted, loop) con botón de pausa | — |
| Banda oscura | Textura de fondo con movimiento muy lento | loop largo (≥20s), casi imperceptible |

**Reglas:**
- Animar **una sola vez** por elemento (al entrar en viewport con IntersectionObserver, umbral ~15%).
- Nada rebota ni gira: movimientos cortos, verticales y suaves.
- Respetar `prefers-reduced-motion`: sin desplazamientos, solo opacidad.

---

## 5. Estilo de imágenes

1. **Arte abstracto de marca** para tarjetas de novedades: fondo azul noche con cuadrícula tenue y **líneas de neón redondeadas** que forman marcos concéntricos en una esquina; un color dominante distinto por tarjeta.
2. **3D abstracto** para fondos y destacados: esferas brillantes, superficies con perforaciones, cápsulas; turquesa, cian, azul y lavanda; desenfoque de profundidad.
3. **Fotografía de personas reales** trabajando (oficina luminosa, plantas, laptops), diversa, natural, nunca posada de stock "falsa". Siempre dentro de un marco con radio.

---

## 6. Responsive

- **Tablet:** grids de 3 → 2 columnas; acordeón arriba e imagen debajo.
- **Móvil:** todo a 1 columna; pills con scroll horizontal; sub-nav sticky se convierte en un desplegable ("En esta página ▾"); H1 a 32px, H2 a 28px; botón de chat flotante se reduce a solo icono.

---

## 7. Checklist para el agente

- [ ] Fondo claro dominante, 2 momentos oscuros (hero y banda).
- [ ] Eyebrow en mayúsculas encima de **cada** H2.
- [ ] Títulos en peso 500, nunca bold pesado.
- [ ] Tarjetas blancas radio 24px con imagen inset radio 16px.
- [ ] Links secundarios con el cuadrado azul + chevron.
- [ ] Pills redondas para filtrar contenido.
- [ ] Sub-nav flotante sticky con scroll-spy.
- [ ] Botón de chat/WhatsApp flotante fijo abajo a la derecha.
- [ ] Reveal fade + slide-up 1.2s en encabezados; stagger 25/50/75ms en grids.
- [ ] Alternar fondos de sección (gris claro ↔ azul pálido ↔ oscuro).
- [ ] No usar logos, textos ni marca de Microsoft/Azure.
