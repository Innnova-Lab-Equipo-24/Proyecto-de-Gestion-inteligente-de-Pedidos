# Infraestructura

Área de infraestructura y DevOps del proyecto **Gestor de Pedidos**.

## Responsabilidades

- CI/CD (GitHub Actions en `.github/workflows/`).
- Entorno Docker: `docker-compose.yml`, `backend.Dockerfile`, `frontend.Dockerfile`.
- Configuración por variables de entorno (`.env` en la raíz del repo).
- Secretos y configuración de servicios.

## Contenido

| Archivo | Descripción |
| --- | --- |
| `docker-compose.yml` | Orquesta `frontend`, `backend` y `db` (PostgreSQL 16) |
| `backend.Dockerfile` | Imagen del backend (Express + TS, pnpm) — etapas dev/build/prod |
| `frontend.Dockerfile` | Imagen del frontend (Vite + React, pnpm) — etapas dev/build |

> El `.env` (variables de entorno) vive en la **raíz del repositorio**, no acá.
> Copiá `.env.example` a `.env` para personalizar credenciales.

## Propietarios

- `@rcrossa`

## Estado

- CI/CD del frontend y backend: activo (`ci-cd.yml`).
- Entorno Docker local: activo (`docker compose -f infra/docker-compose.yml up`).
- Job `deploy` (Docker Hub + Azure): pendiente de habilitar.
