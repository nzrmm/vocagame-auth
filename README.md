# Vocagame Auth

- Vocagame Auth - Dashboard
- Demo: [Loom Record](https://www.loom.com/share/c4641d513d0b4d7c928d6ddcf15601ff?sid=6c3c22fa-db59-469d-8b96-09ab0088961f)

## Tech Stack

- Next v14 + Typescript (Frontend Framework)
- Tailwind CSS + Shadcn UI + Lucide Icon (CSS Utility)
- React Hot Toast (Notification)
- Next Auth v5 (Auth)
- Neon (Serverless PosgreSql)
- Prisma ORM (ORM for working with Serverless PosgreSql)
- React Hook Form + Zod (Validation Library)
- Eslint (Code Formatter Library)

## Features

- Using Next v14 and Typescript
- Tailwind design with Shadcn UI
- Full responsiveness
- Swith between theme (blue, orange, or system)
- Implementing toast for success and error message
- Using Neon (Serverless PostgreSQL) for store registered data
- Using Prisma ORM for working with Neon (Serverless PosgreSQL)
- Credentials provider using Next Auth
- Login component
- Register component
- Impelementing server actions Next v14
- Implementing middleware for protected and unprotected route
- Implementing session with Next Auth
- Edit profile in profile page
- Validate all forms before submitting

## Prerequisites

- Install Node v18.18.0
- Install Yarn v1.22.19

## Run Locally

Clone this repository.

```bash
  git@github.com:nzrmm/vocagame-auth.git
```

Install dependencies.

```bash
  yarn
```

Setup .env file with my configuration

```bash
DATABASE_URL="postgresql://nzrmm:0Dy9upScaVKr@ep-rough-king-a11udu94-pooler.ap-southeast-1.aws.neon.tech/vocagame-auth?sslmode=require"
AUTH_SECRET="8ddd4c1e16d4680a3f35d50c0ced1aa1"
```

Setup Prisma

```bash
npx prisma generate
npx prisma db push --force-reset
```

Run development server

```bash
  yarn dev
```
