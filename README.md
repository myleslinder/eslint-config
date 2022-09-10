# @myleslinder/eslint-config &nbsp;![](https://img.shields.io/npm/v/@myleslinder/eslint-config.svg)

eslint configs for use in personal projects

## Usage

### Install

```bash
pnpm add -D eslint prettier @myleslinder/eslint-config
```

#### Base

```json
{
	"extends": "@myleslinder"
}
```

#### TypeScript

```json
{
	"extends": "@myleslinder/eslint-config/ts"
}
```

#### Remix (with TypeScript)

Includes [`@remix-run/eslint-config`](https://www.npmjs.com/package/@remix-run/eslint-config).

```json
{
	"extends": "@myleslinder/eslint-config/remix"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

## License

MIT
