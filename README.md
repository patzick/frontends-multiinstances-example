# Turborepo starter example for Composable Frontends

Example how to create multiple shop applications and share components between them.
This setup is recommended for large projects with multiple teams working on different parts of the application or agencies, which builds their own system for client deployments and want to share logic and components between them.

Starter example contains 2 example shop applications, using different Frontends [templates](https://frontends.shopware.com/getting-started/templates.html) to show that you can create applications with completly different stack, and still reuse the parts which can be reused.

## Quick start

Run the following command:

```sh
pnpm install
```

to install dependencies and then to run specific application run command with its name:

```sh
pnpm run dev --filter=my-shop.com
```

## What's inside?

This example includes the following packages/apps:

### Apps and Packages

Apps are meant to be deployable applications, You can use Vite, Nuxt, Next.js, or any other framework to build your application.

Packages are meant to be as a reusable parts:

- shared UI components
- shared composables
- shared logic and utils
- shared Nuxt layers
- shared CMS components

...and so on. It is recommended first to develop the application and abstract the parts which can be reused into packages, unless you already have the experience with monorepos and you know what you are doing.
Putting your code as a package is not a requirement, but it is recommended to keep your code clean and reusable. And also putting everything into the packages could also be overused if the packages are not reusable and tailored for specific application.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

As packages you can also share configuration files between packages and applications, it is a very powerful tool.

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

To build specific app or package, run the following command (with changed name):

```sh
pnpm build --filter=my-shop.com
```

This is how you also should configure deployment - to build only what's specific application needs.

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev --filter=my-shop.com
```

## Useful Links

Shopware Frontends documentation:

- [Getting started](https://frontends.shopware.com/getting-started/index.html)

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
