# @mohsensami/loading-skeleton

A simple, lightweight React loading skeleton component for indicating content is loading. Perfect for lists, cards, or any area where you want to show a placeholder while fetching data.

## Features

- Minimal and easy to use
- Animated skeleton effect
- Zero dependencies (except React)
- Plug-and-play with default styling

## Installation

```bash
npm install @mohsensami/loading-skeleton
# or
yarn add @mohsensami/loading-skeleton
```

## Requirements

- React 17 or 18

## Usage

Import and use the `LoadingSkeleton` component in your React app:

```jsx
import React, { useState, useEffect } from "react";
import LoadingSkeleton from "@mohsensami/loading-skeleton";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>My App</h1>
      {isLoading ? <LoadingSkeleton /> : <div>Content Loaded!</div>}
    </div>
  );
};

export default App;
```

## Styling

The component comes with default styles and animation. You can override the styles by targeting the following CSS classes in your own stylesheet:

- `.skeleton-container` — the wrapper for the skeleton items
- `.skeleton-item` — each animated skeleton bar

Default CSS (for reference):

```css
.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-item {
  width: 100%;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
```

## Customization

This version does **not** accept any props for customization. The skeleton always renders three bars. You can fork or extend the component for more advanced use cases.

## License

MIT
