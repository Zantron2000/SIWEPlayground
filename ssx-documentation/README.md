This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Writing Notes

## Links

There are two types of links, chapter links and new tab links

### Chapter Link

A chapter link is marked as {$c} --content-- {/$c}
Which will look for a chapter with the identical name and link to it

### Tab Link

A tab link is marked as {$#} --content-- {/#}
Which will look in the notes for the link to reference to and open it up
in a new tab

## Current supported types

1. Class
2. Enum
3. Variable
4. Interface
5. Type

## Current data types

1. constructorData
2. enumData
3. examplesData
4. methodsData
5. propertiesData
6. primitiveData

### constructorData Structure

### enumData Structure

An array of objects

Each object is represented as the following:
{
member: String
value: Any
description: String
github?: String
}

### examplesData Structure

An object

{
description: String
examples: [{
title: String
description: String
example: String
}]
}

### propertiesData Structure

An array of objects

Each object has the following structure:
{
property: String
type: String
description: String,
github?: String
}

### primitiveData

An object with the following structure
{
type: String
description: String
github?: String
}
