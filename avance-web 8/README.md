# AVANCE — Functional Cacao · Website

Prototipo front-end (React 18 + Babel vía CDN, sin build). Sin backend ni credenciales.

## Ejecutar
Necesita servidor local (no funciona con doble click) e internet (CDN + Google Fonts):
    cd avance-web
    python3 -m http.server 8000
    abrir http://localhost:8000

## Estructura
- index.html — carga React/Babel y los .jsx en orden
- colors_and_type.css — tokens (colores, tipografía, radios, sombras, motion)
- src/components.jsx — Logo, PlusMark, Seal, Icon, Button, Chip, Eyebrow, TrustBadge, PillarBadge, Stars, SectionHead, Divider, Accordion, useIsMobile
- src/Nav.jsx — AnnouncementBar + Nav (hamburguesa <860px, carrito)
- src/Hero.jsx — hero con pouch PNG transparente
- src/HeroPouch.jsx — pouch dibujado en código (no usado en el hero actual)
- src/Sections.jsx — Pillars, Story, HowItWorks
- src/Editorial.jsx — ScienceDeep, Founder, Sustainability
- src/Buy.jsx — galería, compra, SubscriptionFlow
- src/Sections2.jsx — Comparison, Reviews, TrustStrip, NutritionFacts, FAQ, Subscribe, Footer
- src/LandingApp.jsx — composición, CartDrawer, scroll-reveal
- assets/ — imágenes y logos

## Datos vigentes
400 g · 13 servings · 30 g/porción · 12 g proteína · 1.500 mg postbióticos · 12,9 g cacao · One-time USD 52 · Suscripción USD 45,76

## Diseño
Colores: espresso #2E2017, cocoa #4A2E1A, coffee #6B4A30, kraft #DCCBB0, cream #F6EFE3, paper #FBF7EF, avance-green #4C6B32, sage #9CAE7C.
Tipografías: Jost (display), Hanken Grotesk (body), Cormorant Garamond itálica (acento), IBM Plex Mono (datos).

## Pendientes / mobile
- Bug: subtotal del carrito usa $48 (LandingApp.jsx, qty * 48); debe ser $52 / $45,76.
- Responsive por hook JS (760px / Nav 860px) en vez de media queries.
- Hero mobile: titular 62px + pouch 540px empujan CTAs fuera del primer pantallazo.
- Comparison: 4 columnas ilegibles en 360px.
- nowrap en Button, Supplement Facts, Pillars, Add to cart: desbordes en pantallas chicas.
- Targets táctiles <44px (stepper, miniaturas, cerrar carrito); input email 15px (zoom en iOS).
- Supplement Facts: Calories/Carbs/Fiber/Sugars/Fat pendientes de validación.
- r-pouch-front.jpg / r-pouch-back.jpg pueden mostrar datos antiguos impresos.
- Reviews, certificaciones y citas: validar antes de publicar. Checkout sin integración.


## Actualización visual v2 — 5 noviembre 2026

- Franja horizontal de ingredientes sobre el título principal, 72 px de alto en celular y 92 px en escritorio.
- Encabezados con espacios para fotografía en ingredientes, ciencia, comparación, ritual, suscripción, sustentabilidad, preguntas y reseñas; también en nutrición y newsletter. Historia y fundador conservan sus bloques fotográficos.
- Se reutilizan imágenes existentes como referencias temporales; no son fotografías nuevas ni evidencia de los ingredientes finales.
- Compra después de los tres pilares; reseñas después de FAQ, cerca del cierre.
- Enlace fijo Shop now abajo a la derecha, con área táctil y margen para la zona segura del teléfono. Lleva a #buy y compensa la altura del encabezado. Se oculta con menú/carrito abiertos.
- Se conservan los textos, los colores y los precios del prototipo.

### Cambiar fotografías
En src/components.jsx, AVANCE_MEDIA centraliza las rutas, los textos alternativos y el encuadre (position) de cada sección. Usar rutas relativas ./assets/nombre.jpg y agregar los archivos a assets. Los slots story y founder controlan las imágenes grandes existentes. La galería de compra continúa usando r-pouch-front.jpg y r-pouch-back.jpg en src/Buy.jsx.

### Publicar esta versión
Descomprimir el ZIP. Subir el contenido de avance-web (index.html, colors_and_type.css, README.md, src y assets) a la raíz del repositorio, conservando los directorios src y assets. Confirmar con Commit changes. No subir solo el ZIP. Pages ya usa main / (root).

### Verificación
Validación Babel de los nueve archivos JSX y git diff --check: correctas. Comprobación de la estructura de componentes con anchos simulados de 320, 390, 768 y 1440 px: imágenes existentes, compra antes de reseñas y lógica del enlace Shop now correctas. Esto no sustituye una comprobación de layout: no se pudo realizar la prueba visual en navegador ni en un iPhone real. Publicación pendiente por permisos de GitHub.

### Pendientes previos que siguen vigentes
El checkout no procesa pagos; el carrito conserva la inconsistencia de precios documentada arriba. Las imágenes impresas, nutrición, certificaciones y reseñas conceptuales requieren revisión antes de uso comercial.


## Actualización v3 — imágenes a todo el ancho y portada con producto

- Franjas sin radios: ancho del viewport sincronizado con clientWidth para no sumar el ancho de la barra de scroll. Se mantienen alturas cortas y recorte object-fit:cover; reemplazar las fotos en AVANCE_MEDIA cuando estén disponibles.
- Portada reestructurada: franja de cacao, envase visible primero en celular (165–215 px de alto), titular, texto y CTA. Escritorio mantiene producto junto al mensaje.
- Barra horizontal de acceso debajo del encabezado: Home, Ingredients, Nutrition, Shop, Science, Compare, FAQ. Desplazable en celular con controles de al menos 44 px. Son enlaces internos, no nuevas páginas ni categorías aisladas todavía.
- Encabezado medido con ResizeObserver para compensar su altura en la portada y en el acceso a compra. Fondo claro y contraste consistente.
- No se retiró contenido: pendiente decidir qué bloques se consolidan en Home y cuáles se separan. Continúa Shop now flotante.

Verificación v3: compilación JSX en comprobación de componentes, renderizado simulado a 320/390/768/1440 px, rutas de imagen, orden de compra antes de reseñas y función de Shop now correctos; git diff --check correcto. No se pudo comprobar layout real ni iPhone en este entorno. Esta versión se entrega para revisión; no está publicada automáticamente.


## v4 — categorías independientes dentro del sitio estático

Navegación por hash (#home, #product, #shop, #science, #about, #faq), compatible con GitHub Pages sin configurar un servidor. Se monta solo la vista elegida. Se puede compartir el enlace de una categoría y usar Atrás/Adelante; el carrito permanece en el estado de la aplicación mientras se cambia de vista.

- Home: portada, pilares, compra, preparación y nutrición en desplegable; enlaces para profundizar.
- The product: pilares, nutrición completa y preparación.
- Shop: compra, condiciones de envío/garantías y suscripción.
- Science: ciencia y comparación.
- Meet AVANCE: historia, fundador, sustentabilidad y reseñas conceptuales.
- FAQ: preguntas frecuentes.
- Newsletter y pie de página comunes; botón Shop now lleva a Shop desde cualquier categoría.

Verificación: los nueve JSX compilan y las seis vistas se renderizan en una comprobación de componentes; navegación activa, imágenes locales y presencia del CTA correctas. Home no monta ciencia ni reseñas. git diff --check correcto. Sin comprobación visual en navegador ni pruebas físicas de iPhone. No se ha publicado: subir los cinco elementos del ZIP a la raíz del repositorio y confirmar los cambios. No subir solamente el ZIP.


## v5 — integración y densidad visual

- Portada en celular: titular a la izquierda, envase a la derecha manteniendo altura pequeña (170–215 px); descripción, CTA y etiquetas debajo a todo el ancho. Tipografía del título de 28–38 px según ancho.
- Ingredientes: iconos de 44 px, texto alineado, menor separación y filas compactas; tres columnas en escritorio.
- Galería de compra: carrusel nativo de dos imágenes con scroll-snap, swipe, flechas, puntos, contador y navegación con teclas izquierda/derecha. No hay miniaturas ni reproducción automática. Imagen completa con object-fit:contain.
- Ritual: tres filas breves con números, títulos y texto; tres columnas compactas en escritorio.
- Índice en este orden: Home, The Product, Shop, Meet AVANCE, Science, Questions.

Verificación v5: JSX y renderizado simulado de las seis vistas correctos, imágenes existentes, navegación activa y Shop now correctos. Comprobada lógica de avance/retroceso circular del carrusel y control por teclado con ancho simulado; git diff --check correcto. No se ejecutó comprobación de layout real ni gesto swipe en dispositivo; revisar después de publicar.
