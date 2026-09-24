# Gestor Inteligente de Pedidos, Ventas y Stock para Emprendedores

**Innova Lab | Equipo 24**

Una web para que los emprendedores dejen de manejar sus ventas entre notas, chats y planillas sueltas, y tengan pedidos, clientes y stock en un solo lugar. Sin la complejidad de un ERP.

> **Estado:** en desarrollo. Estamos en la etapa de planificación: diseño, definición de arquitectura y configuración de entornos.

## Índice

- [De qué se trata](#de-qué-se-trata)
- [El problema](#el-problema)
- [Nuestra propuesta](#nuestra-propuesta)
- [Cómo se usa](#cómo-se-usa)
- [Qué incluye](#qué-incluye)
- [Alcance del MVP](#alcance-del-mvp)
- [Stack tecnológico](#stack-tecnológico)
- [Plan de trabajo](#plan-de-trabajo)
- [Hacia dónde puede crecer](#hacia-dónde-puede-crecer)
- [Quiénes somos](#quiénes-somos)
- [Instalación](#instalación)

## De qué se trata

Somos el Equipo 24 de Innova Lab y estamos construyendo una plataforma web de gestión para pequeños emprendimientos. La idea es ordenar todo el recorrido de un pedido, desde que entra hasta que se entrega y se cobra, con el stock siempre al día y sin caer en la complejidad de un ERP tradicional.

Cada cuenta representa un emprendimiento, y cada uno tiene su catálogo, clientes, pedidos, ventas y stock separados de los demás.

## El problema

Muchos emprendedores venden por WhatsApp y llevan todo con notas o chats. Funciona hasta que sube el volumen, y ahí empieza el desorden:

- Los pedidos quedan repartidos entre WhatsApp, Instagram u otros canales, sin un registro central.
- Cuesta saber en qué estado está cada pedido: recibido, en preparación, entregado, etc.
- No hay un control real del stock, y menos cuando un producto tiene variantes (talle, color, etc.).
- Se cometen errores o se olvidan cobros, entregas y reposiciones.
- Hay poca información sobre qué se vende más, cuánto se vendió en el período y qué conviene comprar o producir.

## Nuestra propuesta

Un panel simple que junta la operación diaria y automatiza lo que se pueda:

- **Pedidos en un solo lugar:** se cargan a mano o llegan solos mediante la integración con la API oficial de WhatsApp.
- **Catálogo con variantes:** productos con precio, stock disponible, stock mínimo y variantes (talle, color, sabor, etc.).
- **Stock automático:** al confirmar un pedido se descuenta o reserva el stock, y si se cancela, vuelve solo.
- **Seguimiento y cobros:** cada pedido pasa por estados claros (Recibido → En preparación → Listo → Entregado) y se marca como Pagado o Pendiente.
- **Alertas y dashboard:** avisos de bajo stock, ventas del período, productos más vendidos y pagos pendientes.

Lo que buscamos es profesionalizar la gestión del día a día, perder menos información y hacer más fácil planificar compras, producción y entregas.

## Cómo se usa

1. Te registrás o iniciás sesión.
2. Configurás tu emprendimiento.
3. Cargás el catálogo y las variantes.
4. Definís el stock.
5. Entra un pedido, por WhatsApp o cargado a mano.
6. Lo asociás a un cliente y lo confirmás.
7. El stock se actualiza solo.
8. Seguís la preparación, la entrega y el cobro.
9. Consultás alertas e indicadores.

## Qué incluye

- **Acceso y emprendimiento:** registro e inicio de sesión. Cada usuario configura su emprendimiento y solo ve sus propios datos.
- **Catálogo:** alta, edición y baja lógica de productos, con nombre, descripción breve, precio y estado activo/inactivo.
- **Variantes:** talle, color, sabor o tamaño, cada una con identificación y stock propio cuando corresponda.
- **Stock y movimientos:** stock inicial y ajustes manuales (reposición, producción, pérdida, devolución o corrección), siempre con el motivo.
- **Pedidos manuales:** se arman eligiendo cliente, productos y variantes, cantidades, modalidad de entrega y observaciones.
- **WhatsApp:** recepción automática de pedidos con la API oficial. Para el MVP priorizamos un flujo estructurado que se pueda convertir de forma confiable en un pedido.
- **Clientes:** nombre, contacto, dirección cuando corresponda y observaciones.
- **Seguimiento:** estados Recibido, En preparación, Listo, Entregado y Cancelado, con modalidad y fecha prevista de entrega.
- **Cobros:** Pagado o Pendiente, sin vueltas.
- **Alertas de stock:** stock mínimo por producto o variante, con resaltado automático de lo que hay que reponer.
- **Dashboard:** ventas del período, pedidos por estado, cobros pendientes, bajo stock, productos más vendidos y unidades vendidas.
- **Búsqueda y filtros:** pedidos por cliente, fecha, estado o cobro, y productos por disponibilidad o necesidad de reposición.
- **Validaciones y trazabilidad:** evitamos cantidades inválidas, ventas sin stock y pedidos duplicados por reintentos de una integración, y registramos los movimientos críticos para poder reconstruir qué pasó.
- **Responsive:** pensada para usarse igual de bien desde la compu y desde el celular, porque buena parte de la operación arranca en canales móviles como WhatsApp.

## Alcance del MVP

Para dar el MVP por aprobado tiene que poder mostrar el recorrido completo de un emprendimiento:

- [ ] Registro, inicio de sesión y persistencia de la información entre sesiones
- [ ] Separación de datos por emprendimiento
- [ ] Catálogo: crear, editar, activar/desactivar y consultar productos
- [ ] Variantes con identificación y stock propio
- [ ] Stock inicial y stock mínimo por producto o variante
- [ ] Movimientos de stock (reposiciones, producción y ajustes manuales con motivo)
- [ ] Stock automático al confirmar y restitución al cancelar
- [ ] Alertas de productos o variantes que llegaron o bajaron del stock mínimo
- [ ] Pedidos manuales (cliente, productos, cantidades y modalidad de entrega)
- [ ] Al menos un flujo de pedido estructurado desde la API oficial de WhatsApp, que cree el pedido en estado Recibido
- [ ] Clientes: nombre, contacto, dirección si aplica y observaciones
- [ ] Estados del pedido, incluyendo la confirmación que afecta el stock
- [ ] Entrega: retiro o envío, fecha prevista y observaciones
- [ ] Cobro: Pagado o Pendiente
- [ ] Dashboard operativo
- [ ] Búsqueda y filtros de pedidos y catálogo
- [ ] Aplicación web responsive, desplegada y funcional, sin errores críticos

**Sobre WhatsApp:** si las credenciales productivas dependen de una aprobación externa, se puede validar en un entorno de prueba (sandbox), dejando documentado el procedimiento para producción.

**Queda afuera del MVP:** interpretación libre de conversaciones de WhatsApp con IA, facturación electrónica, contabilidad integral, pagos parciales, gestión avanzada de proveedores, múltiples depósitos, app móvil nativa y roles complejos de equipo.

## Stack tecnológico

Es el stack que sugerimos para el MVP, con alternativas en varias capas:

| Capa | Tecnologías |
|---|---|
| Frontend | React / Next.js + Tailwind CSS (o CSS Modules) |
| Lenguaje | TypeScript / JavaScript |
| Formularios y validación | React Hook Form + Zod |
| Backend | Node.js + Express / NestJS |
| Base de datos | PostgreSQL / Supabase |
| Autenticación | Supabase Auth / JWT o equivalente |
| Aislamiento de datos | Políticas por emprendimiento / Row Level Security cuando corresponda |
| Integraciones | WhatsApp Business Platform API (webhooks HTTPS) |
| Dashboard | Recharts / Chart.js |
| Testing | Postman / Insomnia (APIs), Vitest / Jest (unitarias), Playwright (end-to-end) |
| Diseño UX/UI | Figma + FigJam / Miro |
| Versionado y deploy | Git + GitHub / Vercel + Render, Railway o Supabase según la arquitectura |

Tres criterios técnicos que nos importan:

- **El stock lo maneja el backend, no solo la interfaz.** Confirmaciones, cancelaciones y ajustes se ejecutan con transacciones de base de datos y una tabla de movimientos, para que pedidos e inventario nunca se desfasen.
- **Los eventos de WhatsApp se procesan de forma idempotente.** Se validan y se asocian al emprendimiento correcto, así un reintento no genera un pedido duplicado.
- **Priorizamos herramientas open source y planes gratuitos.** La API de WhatsApp, el hosting y otros servicios pueden pedir verificación de cuenta o tener costos según el volumen.

## Plan de trabajo

Son seis sprints de dos semanas, más un Sprint Planning al inicio. Vamos de lo más básico a lo más pulido: primero la base transaccional, después pedidos, stock y WhatsApp, luego los indicadores y al final estabilización y cierre.

| Sprint | Semanas | Foco | Qué entregamos |
|---|---|---|---|
| Planning | 0 | Alcance, reglas de negocio y estrategia técnica | Alcance documentado, modelo de datos inicial, entornos listos y primera prueba de WhatsApp |
| 1 - Exploración | 1 y 2 | Autenticación, aislamiento de datos, catálogo, variantes y stock inicial | Login funcional, CRUD de catálogo y variantes, stock inicial y mínimo |
| 2 - Ideación | 3 y 4 | Pedidos manuales, clientes e integración con WhatsApp | Carga manual de pedidos, tablero por estados y pedido automático desde WhatsApp |
| 3 - Desarrollo | 5 y 6 | Reglas automáticas de stock y operación diaria | Descuento y restitución de stock, movimientos trazables, filtros y cobros |
| 4 - Desarrollo | 7 y 8 | Dashboard y primera versión integral | Dashboard funcional y primer testing end-to-end |
| 5 - Iterar | 9 y 10 | Seguridad, integridad, rendimiento y accesibilidad | Release Candidate estable |
| 6 - Cierre | 11 y 12 | Validación final, despliegue, documentación y demo | MVP desplegado con documentación técnica y funcional |

La demo final recorre todo el circuito: problema, pedido por WhatsApp o manual, stock, operación, cobro y dashboard.

## Hacia dónde puede crecer

Una vez validado el flujo central, hay bastante para sumar, siempre cuidando que la herramienta siga siendo simple:

- **Automatización:** interpretar mensajes libres con IA (con confirmación humana) y mandar avisos y confirmaciones por WhatsApp.
- **Cobros y facturación:** links o pasarelas de pago, pagos parciales, señas y saldos, e integración con facturación o sistemas contables.
- **Operación:** varios usuarios con roles, proveedores y compras, planificación de producción, inventario avanzado y devoluciones.
- **Canales y catálogo:** Instagram, tienda online, marketplaces y un catálogo público conectado con el stock.
- **Análisis:** reportes avanzados, recomendaciones de reposición y exportación a CSV, XLSX y PDF.
- **Experiencia:** app instalable (PWA) con notificaciones push y auditoría avanzada de cambios.

## Quiénes somos

**Innova Lab | Equipo 24**

### UX/UI

| Nombre | LinkedIn | GitHub |
|---|---|---|
| Julieta Sofía Escat | [julietaescat](https://www.linkedin.com/in/julietaescat/) | [JulietaEscat](https://github.com/JulietaEscat) |

### Frontend

| Nombre | LinkedIn | GitHub |
|---|---|---|
| Tomas Brian Ezequiel Guzman | [tomasgz7](https://www.linkedin.com/in/tomasgz7/) | [tomasgz7](https://github.com/tomasgz7) |
| Ezequiel Oliver | [ezequiel-oliver](https://www.linkedin.com/in/ezequiel-oliver/) | [Oliver-92](https://github.com/Oliver-92) |

### Backend

| Nombre | LinkedIn | GitHub |
|---|---|---|
| Matias Almaraz | [matias-almaraz](https://www.linkedin.com/in/matias-almaraz-197005275/) | [Malmaraz1](https://github.com/Malmaraz1) |
| Maxima Lis Centurion | [maxima-centurion](https://www.linkedin.com/in/maxima-centurion) | [maximacenturion](https://github.com/maximacenturion) |

### Data Analytics

| Nombre | LinkedIn | GitHub |
|---|---|---|
| Rodrigo Alcaraz | [rodrigoalcaraz](https://www.linkedin.com/in/rodrigoalcaraz) | [rodrigoalcaraz](https://github.com/rodrigoalcaraz) |
| Matias De vivo | - | - |
| Roberto Rossa | - | - |

### QA Tester

| Nombre | LinkedIn | GitHub |
|---|---|---|
| Jesús Capdevielle | [jesus-capdevielle](https://www.linkedin.com/in/jesus-capdevielle/) | [Ryojix3](https://github.com/Ryojix3) |
| Florencia Lucero | - | - |
| Heidi Zulay Ramirez Dugarte | - | - |

## Instalación

Todavía no hay instrucciones porque estamos en planificación. La guía de instalación, variables de entorno y ejecución la vamos a sumar durante el Sprint 6.
