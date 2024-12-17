### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-800;
}

.theme-light {}
.theme-dark {
  @apply bg-gray-900 text-gray-100;
}
.theme-pastel {
  @apply bg-amber-50 text-gray-700;
}
.theme-high-contrast {
  @apply bg-white text-black;
}
```

