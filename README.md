# Production Grade & Secure Kanban Board Management System API

A secure, production-ready RESTful API built using **NestJS**, **TypeScript**, and **Prisma 7**, backed by a containerized **PostgreSQL** instance. This system supports multi-tenant workspaces, strict authorization guard isolation, and concurrency-safe task position management.

---

## Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/Sowhardo12/Kanban_Board_System
cd kanban-board-system
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add the following configuration values:

```env
PORT=3000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kanban_db?schema=public"
JWT_SECRET="your_ultra_secure_access_token_secret_string"
JWT_REFRESH_SECRET="your_ultra_secure_refresh_token_secret_string"
ALLOWED_ORIGINS="http://localhost:3000,http://localhost:5173"
```

### 3. Start the Database with Docker

Make sure Docker Desktop is running, then start the database container:

```bash
docker-compose up -d
```

### 4. Run Migrations and Generate the Prisma Client

Initialize the database schema and compile the WASM client runtime:

```bash
npx prisma migrate dev --name init_structural_schema
npx prisma generate
```

### 5. Start the Application

**Development mode:**

```bash
npm run start:dev
```

**Production mode:**

```bash
npm run build
npm run start:prod
```

The server will start at `http://localhost:3000`. You can access the interactive Swagger API documentation at `http://localhost:3000/api/docs`.

---

## Architectural Decisions and Technical Breakdown

### 1. Safe Concurrent Task Reordering with ACID Transactions

**The Problem:** When multiple users move tasks around at the same time (for example, dragging a card to a different column or reordering items within a column), standard database operations can run into race conditions. If two users make changes simultaneously, the task positions can end up corrupted or duplicated.

**The Solution:** Used a database transaction that locks the affected rows before making any changes. When a task is moved, the system first locks all tasks in the target column using PostgreSQL's `FOR UPDATE` clause. This prevents other users from modifying those tasks until the current operation is complete. The position values are then adjusted safely within this locked window, ensuring the board layout stays consistent even under heavy concurrent usage.

### 2. Prisma 7 with Hybrid Driver Adapters

This project uses the latest Prisma 7 client architecture. Instead of relying on legacy native binaries, connected the Prisma client directly to a PostgreSQL connection pool using `@prisma/adapter-pg`. This reduces the overall bundle size and improves request handling speed, which is especially beneficial in cloud deployment environments.

### 3. Layered Security Defenses

- **Rate Limiting:** Authentication endpoints (`/auth/*`) are protected with rate limiting, allowing a maximum of 5 login attempts per minute to reduce the risk of brute-force attacks. Although this might break in the production.
- **Security Headers and CORS:** We use `helmet` middleware to set strict security headers, and CORS is tightly configured to allow only trusted origins, supporting secure multi-tenant separation.

---


## Challenges I have faced
Moving from ExpressJs to NestJs+Typescript+ORM like Prisma was a huge shift for me. It made
me get out of my comfort zone and see the usefulness of NestJs and its clean code styles. Learning concepts like Dependency Injections and Classes was difficult at first, but along the
path, things started to click.  

## Future Improvements

- **Real-Time Sync:** Add WebSocket support using NestJS gateways to broadcast board changes live across all connected users.
- **File Attachments:** Integrate Multer with Cloudinary to allow users to upload and attach files to tasks.
- **Task Activity Log:** Integrate a task activity system that can keep a log of the overall user activities.
---

## API Documentation

Once the server is running, visit `http://localhost:3000/api/docs` to explore the full interactive Swagger documentation for all available endpoints.
