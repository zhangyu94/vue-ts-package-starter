# vue-ts-package-starter

A starter template for Vue + TypeScript NPM package.

Inspired by [typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template) and [starter-ts](https://github.com/antfu/starter-ts)

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Vue](https://vuejs.org/)
- [vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [Issue Templates](https://github.com/ryansonshine/typescript-npm-package-template/tree/main/.github/ISSUE_TEMPLATE)
- [GitHub Actions](https://github.com/ryansonshine/typescript-npm-package-template/tree/main/.github/workflows)

## Caveats

1. for the compiled package, to use the style, needs to import css from the package
2. for the compiled package, the linting of props incorrectly highlight hyphenated names as mismatch

**Remove everything from here and above**

---

# mypackage

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]

> My awesome module

## Install

```bash
npm install my-package-name
```

## Usage

```ts
import { myPackage } from 'my-package-name'

myPackage('hello')
// => 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[downloads-img]: https://img.shields.io/npm/dt/mypackage
[downloads-url]: https://www.npmtrends.com/mypackage
[npm-img]: https://img.shields.io/npm/v/mypackage
[npm-url]: https://www.npmjs.com/package/mypackage
[issues-img]: https://img.shields.io/github/issues/OneLabeler/test
[issues-url]: https://github.com/OneLabeler/test/issues
