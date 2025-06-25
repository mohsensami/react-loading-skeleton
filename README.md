# loading-skeleton

A lightweight and customizable React component for creating loading skeleton screens. This package provides an easy way to implement loading states in your React applications with smooth animations and various shape options.

## Installation

```bash
npm install @mohsensami/loading-skeleton
# or
yarn add @mohsensami/loading-skeleton
```

## Features

- Multiple shape variants (text, circle, rectangle)
- Customizable dimensions
- Smooth animation
- TypeScript support
- Lightweight and performant
- Easy to integrate

## Usage

```tsx
import { Skeleton } from "@mohsensami/loading-skeleton";

function MyComponent() {
  return (
    <div>
      {/* Text skeleton */}
      <Skeleton width={200} height={20} variant="text" />

      {/* Circle skeleton */}
      <Skeleton width={40} height={40} variant="circle" />

      {/* Rectangle skeleton */}
      <Skeleton width={300} height={100} variant="rect" />
    </div>
  );
}
```

## API Reference

### Skeleton Component

The `Skeleton` component accepts the following props:

| Prop      | Type                         | Default   | Description                                                                            |
| --------- | ---------------------------- | --------- | -------------------------------------------------------------------------------------- |
| width     | number \| string             | '100%'    | Width of the skeleton element. Can be a number (in pixels) or a string (e.g., '100%')  |
| height    | number \| string             | '100%'    | Height of the skeleton element. Can be a number (in pixels) or a string (e.g., '100%') |
| variant   | 'text' \| 'circle' \| 'rect' | 'text'    | Shape variant of the skeleton                                                          |
| style     | CSSProperties                | {}        | Additional CSS styles to apply to the skeleton                                         |
| className | string                       | undefined | Additional CSS class name to apply to the skeleton                                     |

## Examples

### Basic Text Skeleton

```tsx
<Skeleton width={200} height={20} variant="text" />
```

### Profile Picture Skeleton

```tsx
<Skeleton width={40} height={40} variant="circle" />
```

### Card Skeleton

```tsx
<Skeleton width={300} height={100} variant="rect" />
```

### Complex Layout

```tsx
<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
  <Skeleton width={40} height={40} variant="circle" />
  <div style={{ flex: 1 }}>
    <Skeleton
      width="100%"
      height={20}
      variant="text"
      style={{ marginBottom: "8px" }}
    />
    <Skeleton width="60%" height={16} variant="text" />
  </div>
</div>
```

## License

MIT © [Mohsen Sami](https://github.com/mohsensami)
