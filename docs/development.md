# Guía de desarrollo — Gestor de Pedidos

Guía para clonar, ejecutar y contribuir al proyecto. Es la referencia única para
el equipo; si algo acá queda desactualizado, corregilo en el **mismo commit** que
el cambio que lo motivó.

---

## 1. Prerequisitos

Instalá antes de empezar:

| Herramienta | Versión | Notas |
| --- | --- | --- |
| Node.js | **>= 22.12.0** | piso de Vite 8 / TypeScript 6 |
| pnpm | **10.30.2** | **NO** se usa npm ni yarn (prohibido en el proyecto) |
| Docker + Docker Compose | estable | `docker compose up` levanta todo |
| git | cualquiera reciente | — |

Habilitar pnpm vía corepack (sin npm):

```bash
corepack enable
corepack prepare pnpm@10.30.2 --activate
pnpm --version   # debe imprimir 10.30.2
```

---

## 2. Clonado y setup

El repositorio de producto es `repositorio/` (en este workspace es un **submodule**):

```bash
git clone git@github.com:Innnova-Lab-Equipo-24/Proyecto-de-Gestion-inteligente-de-Pedidos.git
cd Proyecto-de-Gestion-inteligente-de-Pedidos
```

Ramas: **`main`** (producción) y **`develop`** (integración). Asegurate de tener ambas:

```bash
git checkout develop && git pull
```

---

## 3. Entorno de desarrollo (Docker)

Un solo comando levanta todo el stack (frontend + backend):

```bash
docker compose up
```

- **Frontend**: Vite dev server → http://localhost:5173
- **Backend**: Express API → http://localhost:3000
  - Health check: `GET http://localhost:3000/health` → `{ "status": "ok" }`

Comandos útiles:

```bash
docker compose up -d          # levanta en segundo plano
docker compose logs -f        # sigue los logs
docker compose down           # detiene y elimina contenedores
docker compose build          # reconstruye las imágenes
docker compose --profile db up   # incluye PostgreSQL (servicio futuro)
```

> **Base de datos**: el servicio `db` (PostgreSQL 16) está detrás del profile `db`
> y **no** arranca por defecto. Se activará cuando se implemente persistencia.

---

## 4. Flujo de git / PR (obligatorio)

Las ramas `main` y `develop` están **protegidas** por rulesets. **Nunca** hagas
push directo a ninguna de las dos. El flujo es:

```
feature/xxx  ──PR──▶  develop  ──PR──▶  main
```

Pasos:

1. Crear rama desde `develop`:
   ```bash
   git checkout develop && git pull
   git checkout -b feature/mi-cambio
   ```
2. Commitear los cambios (código + documentación juntos).
3. Pushear la rama y abrir un **PR hacia `develop`**.
4. El PR requiere: **1 aprobación** + **CI verde** (`ci-cd.yml`).
5. Mergear a `develop`.
6. Para releases, abrir un **PR de `develop` → `main`** (mismas reglas).

**Reglas de protección activas:**
- Rulesets: **"Protect main"** y **"Protect develop"**.
- Requieren PR (1 aprobación) + status check `Integración Continua (CI)`.
- Admins con bypass: `@rcrossa`, `@DalmiroLunaDapozo`.

---

## 5. Estructura por roles y permisos

Cada carpeta pertenece a un rol. `CODEOWNERS` define los propietarios y
`strict-roles.yml` bloquea los PRs que tocan carpetas fuera de tu rol.

| Carpeta | Rol | Propietario(s) | Co-owners |
| --- | --- | --- | --- |
| `ux-ui/` | Diseño UX/UI | @JulietaEscat | @rcrossa @DalmiroLunaDapozo |
| `frontend/` | Frontend | @tomasgz7 @Oliver-92 | @rcrossa @DalmiroLunaDapozo |
| `backend/` | Backend | @Malmaraz1 @maximacenturion | @rcrossa @DalmiroLunaDapozo |
| `data_analyst/` | Análisis de datos | @rodrigoalcaraz | @rcrossa @DalmiroLunaDapozo |
| `qa/` | QA | @Ryojix3 | @rcrossa @DalmiroLunaDapozo |
| `docs/` | Documentación | @rodrigoalcaraz | @rcrossa @DalmiroLunaDapozo |
| `infra/` | Infraestructura | @rcrossa @DalmiroLunaDapozo | — |

> Solo tocá las carpetas donde figurás. Si tu PR modifica una carpeta ajena,
> `strict-roles.yml` lo va a rechazar.

---

## 6. CI/CD

- **`ci-cd.yml`**: en cada PR/push a `main`/`develop` corre lint + build del
  frontend y (desde ahora) install + lint + test del backend.
- **`strict-roles.yml`**: valida que cada PR solo toque las carpetas del autor.
- **`auto-move-issues.yml`**: mueve issues por el tablero de Projects v2.

Ningún PR puede mergear sin CI verde.

---

## 7. Stack

| Capa | Tecnología |
| --- | --- |
| Frontend | Vite + React 19 + TypeScript (pnpm) |
| Backend | Node.js + Express + TypeScript (pnpm) |
| Base de datos (futura) | PostgreSQL 16 |
| Gestor de paquetes | **pnpm** (npm/yarn prohibidos) |
| Entorno | Docker Compose |
