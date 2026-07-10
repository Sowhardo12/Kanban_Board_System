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

## Task Positioning Logic

Moving tasks around a Kanban board is harder than it looks. Two users dragging cards at the same time can corrupt position values. Here is how I solved it.

### The Problem

When a task moves, two things must happen in order:

1. Fill the gap left behind.
2. Make room in the destination column.

Without locking, two concurrent moves could read the same positions and write conflicting values.

### The Approach: Lock, Shift, Then Move

I wrapped the entire operation in a database transaction with row-level locking.

**Step 1: Lock the destination column**

I lock every task in the target column using PostgreSQL's `FOR UPDATE`. This blocks other move operations on those rows until the current one finishes.

**Step 2: Shift surrounding tasks**

- **Same column:** Only tasks between the old and new position shift. Tasks above the move slide down by one, tasks below slide up by one.
- **Different columns:** Two shifts happen. First, I close the gap in the source column by decrementing positions below the moved task. Second, I open a gap in the destination column by incrementing positions at or below the insertion point.

**Step 3: Place the task**

Only after all surrounding tasks are adjusted do I update the moved task's `columnId` and `position`.

### It works because:

- The transaction guarantees all steps succeed or none do. If something fails, the database rolls back and the board stays consistent.
- The `FOR UPDATE` lock prevents race conditions. Even with 100 users dragging at once, PostgreSQL queues the operations and runs them one at a time.
- Position values stay dense and gap-free, so the board renders in the correct order without empty slots.



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
