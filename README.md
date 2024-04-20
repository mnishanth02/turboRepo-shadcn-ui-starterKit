# Turborepo shadncn/ui starter Template

This is an starter pnpm Turborepo Template with shadcn ui shared accross apps.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `space`: another [Next.js](https://nextjs.org/) app
- `@zealer/ui`: a stub React component library shared by both `web` and `space`
  applications
- `@zealer/eslint-config`: `eslint` configurations (includes
  `eslint-config-next` and `eslint-config-prettier`)
- `@zealer/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Using this Template

- Turborepo workspace is build using pnpm worksapce

- Run the following command after cloning the repo:

```sh
pnpm install
```

- update all the packages under root, ui, eslint-config, space and web apps,
- Run below command to udpate packages in turbo repo

```sh
pnpm update
```

- To add any new shadcn/ui component, run below command in root workspace,
  respecting components will get added to the UI package which can be shared and
  export the component in index.tsx

```sh
pnpm ui:add button
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev
```

### Happy Coding
