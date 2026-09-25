# GitHub Actions — Gestor de Pedidos

Workflows de CI/CD y gobernanza del repositorio. Todo el código de la aplicación
vive en este repositorio (`repositorio/` en el workspace del sistema de agentes).

## Workflows

| Archivo | Propósito | Disparador |
| --- | --- | --- |
| `ci-cd.yml` | Lint + build del frontend (pnpm) y placeholder del backend | `push` y `pull_request` a `main`/`develop` |
| `strict-roles.yml` | Bloquea PRs que tocan carpetas fuera de los permisos del autor (según `CODEOWNERS`) | `pull_request` a `main`/`develop` |
| `auto-move-issues.yml` | Mueve issues por el tablero de Projects v2 según su ciclo de vida | `issues`, `create`, `pull_request`, `pull_request_review`, `workflow_dispatch` |

## Stack

- **Frontend**: Vite + React 19 + TypeScript, gestionado con **pnpm** (no npm).
- **Backend**: Node.js (placeholder; `backend/` está vacío hasta su implementación).

## Secrets requeridos

| Secret | Scope | Uso |
| --- | --- | --- |
| `PROJECT_TOKEN` | PAT clásico con `project` + `repo` + `read:org` | `auto-move-issues.yml` (Projects v2 de la organización) |

> El tablero es de **organización** (`Innnova-Lab-Equipo-24`, proyecto #2), por lo
> que las queries GraphQL usan `organization(login:)`.

## Configuración

1. Añadir el secret `PROJECT_TOKEN` en *Settings → Secrets and variables → Actions*.
2. Verificar que los nombres de columna (`Backlog`, `In progress`, `Ready`,
   `In review`, `In QA`, `Done`) coincidan con el tablero. Ajustarlos en `env` de
   `auto-move-issues.yml` si difieren.
3. `ci-cd.yml` incluye un job `deploy` comentado (Docker Hub + Azure). Activarlo
   cuando exista backend real + `Dockerfile` + infraestructura.
