# Football Fan Website Monorepo

A full-stack fan-centric football website using modern web technologies.

## Project Structure

- **client/** — React 18 + Vite + TypeScript + Tailwind (frontend)
- **server/** — Express + TypeScript + Prisma ORM (backend/API)
- **docker-compose.yml** — PostgreSQL 16 DB + pgAdmin
- **.env.example** — Environment variable sample

## Prerequisites

- Node.js 18+ and npm 9+
- Docker + Docker Compose (for DB)
- (Recommended) pnpm 8+ for better workspaces

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <your-repo>
cd <your-repo>
npm install
```

### 2. Run PostgreSQL + pgAdmin

```bash
docker-compose up -d
# pgAdmin is at http://localhost:5050
# DB is at postgres://postgres:password@localhost:5432/footballfan
```

### 3. Set Up Environment

```bash
cp .env.example server/.env
# (edit values as needed)
```

### 4. Initialize Database

```bash
cd server
npm run migrate
npm run generate
```

### 5. Start Development Environment

```bash
# In one terminal (root folder):
npm run dev

# Or separately:
cd client && npm start  # (dev server at http://localhost:5173)
cd server && npm run dev  # (API at http://localhost:5000)
```

## Scripts

- All scripts can be run from the root folder using npm workspaces, e.g. `npm run dev --workspace=client`

## Technologies

- Frontend: React 18, Vite, TypeScript, Tailwind CSS, React Router 6
- Backend: Express, TypeScript, Prisma ORM
- Database: PostgreSQL 16 (via Docker Compose)
- ORM: Prisma
- DevOps: Docker Compose, pgAdmin
- Monorepo: npm workspaces

## License

MIT
