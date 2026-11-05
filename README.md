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
