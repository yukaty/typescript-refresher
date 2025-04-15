# TypeScript 101

## File Extensions
- `.ts`: Standard TypeScript files
- `.tsx`: TypeScript files with JSX support

## When to Use .ts vs .tsx
Use `.tsx` files when you need JSX syntax (typically for React components). Otherwise, use `.ts` files for regular TypeScript code.

## TypeScript Workflow
1. Create TypeScript files
2. Transpile to JavaScript using `npx tsc`
3. Execute the generated JavaScript files with `node [file-path]`

## Project Structure

### Source Files Organization
It's common practice to store TypeScript source files in a folder named `src`.

### Configuration Settings

#### Source Directory Configuration
You can specify the source directory in `tsconfig.json` using the `"rootDir"` setting:

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```
#### Output Directory Configuration
It's recommended to configure a separate output directory for transpiled JavaScript files. The conventional name for this directory is `dist`.

Set the output directory in `tsconfig.json` with the `"outDir"` option:

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

## Strict Mode

TypeScript can automatically add JavaScript's strict mode (`"use strict";`) to your transpiled files, which helps prevent common runtime errors.

To enable this feature, set `"alwaysStrict"` to `true` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "alwaysStrict": true
  }
}
```

When strict mode is enabled:
- JavaScript becomes more strict during runtime
- Previously silent errors will be thrown
- Runtime bugs become easier to identify and fix

## Error Handling

You can prevent JavaScript files from being generated when type errors are detected by setting `"noEmitOnError"` to `true` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

## Type Inference and Type Annotations

### Type Inference
TypeScript can automatically determine (infer) the type of a variable based on its initial value:

```typescript
let age = 20;  // TypeScript infers this as number type
```

### Type Annotations
You can explicitly specify a variable's type using type annotations:

```typescript
let userName: string;  // Explicitly declaring a string type
```

### Important Note About Type Inference
When a variable is declared without an initial value and without a type annotation, TypeScript assigns it the `any` type:

```typescript
let userName;  // Becomes 'any' type (can store any value)
userName = 'John';  // No error
userName = 123;     // No error - any type accepts everything
```

The `any` type bypasses type checking, which reduces TypeScript's safety benefits. To avoid this:

1. Always use type annotations when not providing initial values:
   ```typescript
   let userName: string;
   ```

2. Or provide initial values to leverage type inference:
   ```typescript
   let age = 20;  // TypeScript infers number type
   ```