# Building a Fullstack Art Academy with React, NextJS, TailwindCSS, Shadcn/ui, Prisma, Supabase & Stripe

![image](https://github.com/ibnucholdun/demo-animacare/blob/main/art-academy-gamma.vercel.app_.png?raw=true)

This is a repository for a Fullstack Art Academy with React, NextJS, TailwindCSS, Shadcn/ui, Prisma, Supabase & Stripe.

[VIDEO DEMO](#)

Features:

- Environment, Typescript, NextJS Setup
- Supabase & Prisma connect, Database creation
- Authentication with NextAuth, Google & Github Login
- Multi-role: user & admin
- Cookie based authentication
- API and Controllers creation
- Enroll course with stripe

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/ibnucholdun/art-academy.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
AUTH_SECRET=
SMTP_PASSWORD=
SMTP_EMAIL=
NEXT_PUBLIC_APP_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
