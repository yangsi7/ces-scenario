# Changes since last run (2024-12-17T03:15:57.787286)

## Changed or New Files:

### index.html

```diff
--- old
+++ new
@@ -0,0 +1,14 @@
+<!DOCTYPE html>
+<html lang="en">
+<head>
+  <meta charset="UTF-8"/>
+  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
+  <meta name="description" content="Healthcare Scenarios Dashboard"/>
+  <title>Healthcare Scenarios Dashboard</title>
+  <link rel="stylesheet" href="./src/index.css" />
+</head>
+<body class="bg-white text-gray-800 font-sans">
+  <div id="root"></div>
+  <script type="module" src="./src/main.jsx"></script>
+</body>
+</html>
```

### tailwind.config.js

```diff
--- old
+++ new
@@ -0,0 +1,11 @@
+/** @type {import('tailwindcss').Config} */
+export default {
+    content: [
+      "./index.html",
+      "./src/**/*.{js,jsx,ts,tsx}",
+    ],
+    theme: {
+      extend: {},
+    },
+    plugins: [],
+  }
```

### vite.config.js

```diff
--- old
+++ new
@@ -0,0 +1,6 @@
+import { defineConfig } from 'vite'
+import react from '@vitejs/plugin-react'
+
+export default defineConfig({
+  plugins: [react()],
+})
```

### package-lock.json

```diff
--- old
+++ new
@@ -0,0 +1,2553 @@
+{
+  "name": "health-scenarios-dashboard",
+  "version": "3.0.0",
+  "lockfileVersion": 3,
+  "requires": true,
+  "packages": {
+    "": {
+      "name": "health-scenarios-dashboard",
+      "version": "3.0.0",
+      "license": "MIT",
+      "dependencies": {
+        "chart.js": "^4.3.0",
+        "papaparse": "^5.4.1",
+        "react": "^18.2.0",
+        "react-dom": "^18.2.0",
+        "react-tooltip": "^5.11.0"
+      },
+      "devDependencies": {
+        "@vitejs/plugin-react": "^4.0.3",
+        "autoprefixer": "^10.4.14",
+        "postcss": "^8.4.21",
+        "tailwindcss": "^3.3.2",
+        "vite": "^4.2.0"
+      }
+    },
+    "node_modules/@alloc/quick-lru": {
+      "version": "5.2.0",
+      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
+      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
+      "dev": true,
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/@ampproject/remapping": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
+      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/gen-mapping": "^0.3.5",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@babel/code-frame": {
+      "version": "7.26.2",
+      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
+      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-validator-identifier": "^7.25.9",
+        "js-tokens": "^4.0.0",
+        "picocolors": "^1.0.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/compat-data": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.3.tgz",
+      "integrity": "sha512-nHIxvKPniQXpmQLb0vhY3VaFb3S0YrTAwpOWJZh1wn3oJPjJk9Asva204PsBdmAE8vpzfHudT8DB0scYvy9q0g==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/core": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
+      "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
+      "dev": true,
+      "dependencies": {
+        "@ampproject/remapping": "^2.2.0",
+        "@babel/code-frame": "^7.26.0",
+        "@babel/generator": "^7.26.0",
+        "@babel/helper-compilation-targets": "^7.25.9",
+        "@babel/helper-module-transforms": "^7.26.0",
+        "@babel/helpers": "^7.26.0",
+        "@babel/parser": "^7.26.0",
+        "@babel/template": "^7.25.9",
+        "@babel/traverse": "^7.25.9",
+        "@babel/types": "^7.26.0",
+        "convert-source-map": "^2.0.0",
+        "debug": "^4.1.0",
+        "gensync": "^1.0.0-beta.2",
+        "json5": "^2.2.3",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/babel"
+      }
+    },
+    "node_modules/@babel/generator": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.3.tgz",
+      "integrity": "sha512-6FF/urZvD0sTeO7k6/B15pMLC4CHUv1426lzr3N01aHJTl046uCAh9LXW/fzeXXjPNCJ6iABW5XaWOsIZB93aQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.26.3",
+        "@babel/types": "^7.26.3",
+        "@jridgewell/gen-mapping": "^0.3.5",
+        "@jridgewell/trace-mapping": "^0.3.25",
+        "jsesc": "^3.0.2"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-compilation-targets": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
+      "integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/compat-data": "^7.25.9",
+        "@babel/helper-validator-option": "^7.25.9",
+        "browserslist": "^4.24.0",
+        "lru-cache": "^5.1.1",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-imports": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
+      "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/traverse": "^7.25.9",
+        "@babel/types": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-transforms": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
+      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-module-imports": "^7.25.9",
+        "@babel/helper-validator-identifier": "^7.25.9",
+        "@babel/traverse": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0"
+      }
+    },
+    "node_modules/@babel/helper-plugin-utils": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
+      "integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-string-parser": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
+      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-identifier": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
+      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-option": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
+      "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helpers": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
+      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/template": "^7.25.9",
+        "@babel/types": "^7.26.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/parser": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.3.tgz",
+      "integrity": "sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.26.3"
+      },
+      "bin": {
+        "parser": "bin/babel-parser.js"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-self": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
+      "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-source": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
+      "integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/template": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
+      "integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/code-frame": "^7.25.9",
+        "@babel/parser": "^7.25.9",
+        "@babel/types": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/traverse": {
+      "version": "7.26.4",
+      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.4.tgz",
+      "integrity": "sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==",
+      "dev": true,
+      "dependencies": {
+        "@babel/code-frame": "^7.26.2",
+        "@babel/generator": "^7.26.3",
+        "@babel/parser": "^7.26.3",
+        "@babel/template": "^7.25.9",
+        "@babel/types": "^7.26.3",
+        "debug": "^4.3.1",
+        "globals": "^11.1.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/types": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.3.tgz",
+      "integrity": "sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-string-parser": "^7.25.9",
+        "@babel/helper-validator-identifier": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@esbuild/android-arm": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.18.20.tgz",
+      "integrity": "sha512-fyi7TDI/ijKKNZTUJAQqiG5T7YjJXgnzkURqmGj13C6dCqckZBLdl4h7bkhHt/t0WP+zO9/zwroDvANaOqO5Sw==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/android-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.18.20.tgz",
+      "integrity": "sha512-Nz4rJcchGDtENV0eMKUNa6L12zz2zBDXuhj/Vjh18zGqB44Bi7MBMSXjgunJgjRhCmKOjnPuZp4Mb6OKqtMHLQ==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/android-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.18.20.tgz",
+      "integrity": "sha512-8GDdlePJA8D6zlZYJV/jnrRAi6rOiNaCC/JclcXpB+KIuvfBN4owLtgzY2bsxnx666XjJx2kDPUmnTtR8qKQUg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/darwin-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.18.20.tgz",
+      "integrity": "sha512-bxRHW5kHU38zS2lPTPOyuyTm+S+eobPUnTNkdJEfAddYgEcll4xkT8DB9d2008DtTbl7uJag2HuE5NZAZgnNEA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/darwin-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.18.20.tgz",
+      "integrity": "sha512-pc5gxlMDxzm513qPGbCbDukOdsGtKhfxD1zJKXjCCcU7ju50O7MeAZ8c4krSJcOIJGFR+qx21yMMVYwiQvyTyQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/freebsd-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.18.20.tgz",
+      "integrity": "sha512-yqDQHy4QHevpMAaxhhIwYPMv1NECwOvIpGCZkECn8w2WFHXjEwrBn3CeNIYsibZ/iZEUemj++M26W3cNR5h+Tw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/freebsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.18.20.tgz",
+      "integrity": "sha512-tgWRPPuQsd3RmBZwarGVHZQvtzfEBOreNuxEMKFcd5DaDn2PbBxfwLcj4+aenoh7ctXcbXmOQIn8HI6mCSw5MQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-arm": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.18.20.tgz",
+      "integrity": "sha512-/5bHkMWnq1EgKr1V+Ybz3s1hWXok7mDFUMQ4cG10AfW3wL02PSZi5kFpYKrptDsgb2WAJIvRcDm+qIvXf/apvg==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.18.20.tgz",
+      "integrity": "sha512-2YbscF+UL7SQAVIpnWvYwM+3LskyDmPhe31pE7/aoTMFKKzIc9lLbyGUpmmb8a8AixOL61sQ/mFh3jEjHYFvdA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-ia32": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.18.20.tgz",
+      "integrity": "sha512-P4etWwq6IsReT0E1KHU40bOnzMHoH73aXp96Fs8TIT6z9Hu8G6+0SHSw9i2isWrD2nbx2qo5yUqACgdfVGx7TA==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-loong64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.18.20.tgz",
+      "integrity": "sha512-nXW8nqBTrOpDLPgPY9uV+/1DjxoQ7DoB2N8eocyq8I9XuqJ7BiAMDMf9n1xZM9TgW0J8zrquIb/A7s3BJv7rjg==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-mips64el": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.18.20.tgz",
+      "integrity": "sha512-d5NeaXZcHp8PzYy5VnXV3VSd2D328Zb+9dEq5HE6bw6+N86JVPExrA6O68OPwobntbNJ0pzCpUFZTo3w0GyetQ==",
+      "cpu": [
+        "mips64el"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-ppc64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.18.20.tgz",
+      "integrity": "sha512-WHPyeScRNcmANnLQkq6AfyXRFr5D6N2sKgkFo2FqguP44Nw2eyDlbTdZwd9GYk98DZG9QItIiTlFLHJHjxP3FA==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-riscv64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.18.20.tgz",
+      "integrity": "sha512-WSxo6h5ecI5XH34KC7w5veNnKkju3zBRLEQNY7mv5mtBmrP/MjNBCAlsM2u5hDBlS3NGcTQpoBvRzqBcRtpq1A==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-s390x": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.18.20.tgz",
+      "integrity": "sha512-+8231GMs3mAEth6Ja1iK0a1sQ3ohfcpzpRLH8uuc5/KVDFneH6jtAJLFGafpzpMRO6DzJ6AvXKze9LfFMrIHVQ==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.18.20.tgz",
+      "integrity": "sha512-UYqiqemphJcNsFEskc73jQ7B9jgwjWrSayxawS6UVFZGWrAAtkzjxSqnoclCXxWtfwLdzU+vTpcNYhpn43uP1w==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/netbsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.18.20.tgz",
+      "integrity": "sha512-iO1c++VP6xUBUmltHZoMtCUdPlnPGdBom6IrO4gyKPFFVBKioIImVooR5I83nTew5UOYrk3gIJhbZh8X44y06A==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/openbsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.18.20.tgz",
+      "integrity": "sha512-e5e4YSsuQfX4cxcygw/UCPIEP6wbIL+se3sxPdCiMbFLBWu0eiZOJ7WoD+ptCLrmjZBK1Wk7I6D/I3NglUGOxg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/sunos-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.18.20.tgz",
+      "integrity": "sha512-kDbFRFp0YpTQVVrqUd5FTYmWo45zGaXe0X8E1G/LKFC0v8x0vWrhOWSLITcCn63lmZIxfOMXtCfti/RxN/0wnQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "sunos"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.18.20.tgz",
+      "integrity": "sha512-ddYFR6ItYgoaq4v4JmQQaAI5s7npztfV4Ag6NrhiaW0RrnOXqBkgwZLofVTlq1daVTQNhtI5oieTvkRPfZrePg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-ia32": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.18.20.tgz",
+      "integrity": "sha512-Wv7QBi3ID/rROT08SABTS7eV4hX26sVduqDOTe1MvGMjNd3EjOz4b7zeexIR62GTIEKrfJXKL9LFxTYgkyeu7g==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.18.20.tgz",
+      "integrity": "sha512-kTdfRcSiDfQca/y9QIkng02avJ+NCaQvrMejlsB3RRv5sE9rRoeBPISaZpKxHELzRxZyLvNts1P27W3wV+8geQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@floating-ui/core": {
+      "version": "1.6.8",
+      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
+      "integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
+      "dependencies": {
+        "@floating-ui/utils": "^0.2.8"
+      }
+    },
+    "node_modules/@floating-ui/dom": {
+      "version": "1.6.12",
+      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.12.tgz",
+      "integrity": "sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==",
+      "dependencies": {
+        "@floating-ui/core": "^1.6.0",
+        "@floating-ui/utils": "^0.2.8"
+      }
+    },
+    "node_modules/@floating-ui/utils": {
+      "version": "0.2.8",
+      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
+      "integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig=="
+    },
+    "node_modules/@isaacs/cliui": {
+      "version": "8.0.2",
+      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
+      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
+      "dev": true,
+      "dependencies": {
+        "string-width": "^5.1.2",
+        "string-width-cjs": "npm:string-width@^4.2.0",
+        "strip-ansi": "^7.0.1",
+        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
+        "wrap-ansi": "^8.1.0",
+        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
+      },
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@jridgewell/gen-mapping": {
+      "version": "0.3.8",
+      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
+      "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/set-array": "^1.2.1",
+        "@jridgewell/sourcemap-codec": "^1.4.10",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/resolve-uri": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
+      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/set-array": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
+      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/sourcemap-codec": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
+      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
+      "dev": true
+    },
+    "node_modules/@jridgewell/trace-mapping": {
+      "version": "0.3.25",
+      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
+      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/resolve-uri": "^3.1.0",
+        "@jridgewell/sourcemap-codec": "^1.4.14"
+      }
+    },
+    "node_modules/@kurkle/color": {
+      "version": "0.3.4",
+      "resolved": "https://registry.npmjs.org/@kurkle/color/-/color-0.3.4.tgz",
+      "integrity": "sha512-M5UknZPHRu3DEDWoipU6sE8PdkZ6Z/S+v4dD+Ke8IaNlpdSQah50lz1KtcFBa2vsdOnwbbnxJwVM4wty6udA5w=="
+    },
+    "node_modules/@nodelib/fs.scandir": {
+      "version": "2.1.5",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
+      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.stat": "2.0.5",
+        "run-parallel": "^1.1.9"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@nodelib/fs.stat": {
+      "version": "2.0.5",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
+      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
+      "dev": true,
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@nodelib/fs.walk": {
+      "version": "1.2.8",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
+      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.scandir": "2.1.5",
+        "fastq": "^1.6.0"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@pkgjs/parseargs": {
+      "version": "0.11.0",
+      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
+      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
+      "dev": true,
+      "optional": true,
+      "engines": {
+        "node": ">=14"
+      }
+    },
+    "node_modules/@types/babel__core": {
+      "version": "7.20.5",
+      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
+      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.20.7",
+        "@babel/types": "^7.20.7",
+        "@types/babel__generator": "*",
+        "@types/babel__template": "*",
+        "@types/babel__traverse": "*"
+      }
+    },
+    "node_modules/@types/babel__generator": {
+      "version": "7.6.8",
+      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
+      "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__template": {
+      "version": "7.4.4",
+      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
+      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.1.0",
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__traverse": {
+      "version": "7.20.6",
+      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
+      "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.20.7"
+      }
+    },
+    "node_modules/@vitejs/plugin-react": {
+      "version": "4.3.4",
+      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
+      "integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
+      "dev": true,
+      "dependencies": {
+        "@babel/core": "^7.26.0",
+        "@babel/plugin-transform-react-jsx-self": "^7.25.9",
+        "@babel/plugin-transform-react-jsx-source": "^7.25.9",
+        "@types/babel__core": "^7.20.5",
+        "react-refresh": "^0.14.2"
+      },
+      "engines": {
+        "node": "^14.18.0 || >=16.0.0"
+      },
+      "peerDependencies": {
+        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
+      }
+    },
+    "node_modules/ansi-regex": {
+      "version": "6.1.0",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
+      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
+      "dev": true,
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
+      }
+    },
+    "node_modules/ansi-styles": {
+      "version": "6.2.1",
+      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
+      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
+      "dev": true,
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
+      }
+    },
+    "node_modules/any-promise": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
+      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
+      "dev": true
+    },
+    "node_modules/anymatch": {
+      "version": "3.1.3",
+      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
+      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
+      "dev": true,
+      "dependencies": {
+        "normalize-path": "^3.0.0",
+        "picomatch": "^2.0.4"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/arg": {
+      "version": "5.0.2",
+      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
+      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
+      "dev": true
+    },
+    "node_modules/autoprefixer": {
+      "version": "10.4.20",
+      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
+      "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "browserslist": "^4.23.3",
+        "caniuse-lite": "^1.0.30001646",
+        "fraction.js": "^4.3.7",
+        "normalize-range": "^0.1.2",
+        "picocolors": "^1.0.1",
+        "postcss-value-parser": "^4.2.0"
+      },
+      "bin": {
+        "autoprefixer": "bin/autoprefixer"
+      },
+      "engines": {
+        "node": "^10 || ^12 || >=14"
+      },
+      "peerDependencies": {
+        "postcss": "^8.1.0"
+      }
+    },
+    "node_modules/balanced-match": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
+      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
+      "dev": true
+    },
+    "node_modules/binary-extensions": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
+      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/brace-expansion": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
+      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
+      "dev": true,
+      "dependencies": {
+        "balanced-match": "^1.0.0"
+      }
+    },
+    "node_modules/braces": {
+      "version": "3.0.3",
+      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
+      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
+      "dev": true,
+      "dependencies": {
+        "fill-range": "^7.1.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/browserslist": {
+      "version": "4.24.3",
+      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.3.tgz",
+      "integrity": "sha512-1CPmv8iobE2fyRMV97dAcMVegvvWKxmq94hkLiAkUGwKVTyDLw33K+ZxiFrREKmmps4rIw6grcCFCnTMSZ/YiA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "caniuse-lite": "^1.0.30001688",
+        "electron-to-chromium": "^1.5.73",
+        "node-releases": "^2.0.19",
+        "update-browserslist-db": "^1.1.1"
+      },
+      "bin": {
+        "browserslist": "cli.js"
+      },
+      "engines": {
+        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
+      }
+    },
+    "node_modules/camelcase-css": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
+      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/caniuse-lite": {
+      "version": "1.0.30001689",
+      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001689.tgz",
+      "integrity": "sha512-CmeR2VBycfa+5/jOfnp/NpWPGd06nf1XYiefUvhXFfZE4GkRc9jv+eGPS4nT558WS/8lYCzV8SlANCIPvbWP1g==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ]
+    },
+    "node_modules/chart.js": {
+      "version": "4.4.7",
+      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-4.4.7.tgz",
+      "integrity": "sha512-pwkcKfdzTMAU/+jNosKhNL2bHtJc/sSmYgVbuGTEDhzkrhmyihmP7vUc/5ZK9WopidMDHNe3Wm7jOd/WhuHWuw==",
+      "dependencies": {
+        "@kurkle/color": "^0.3.0"
+      },
+      "engines": {
+        "pnpm": ">=8"
+      }
+    },
+    "node_modules/chokidar": {
+      "version": "3.6.0",
+      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
+      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
+      "dev": true,
+      "dependencies": {
+        "anymatch": "~3.1.2",
+        "braces": "~3.0.2",
+        "glob-parent": "~5.1.2",
+        "is-binary-path": "~2.1.0",
+        "is-glob": "~4.0.1",
+        "normalize-path": "~3.0.0",
+        "readdirp": "~3.6.0"
+      },
+      "engines": {
+        "node": ">= 8.10.0"
+      },
+      "funding": {
+        "url": "https://paulmillr.com/funding/"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/chokidar/node_modules/glob-parent": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
+      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/classnames": {
+      "version": "2.5.1",
+      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.5.1.tgz",
+      "integrity": "sha512-saHYOzhIQs6wy2sVxTM6bUDsQO4F50V9RQ22qBpEdCW+I+/Wmke2HOl6lS6dTpdxVhb88/I6+Hs+438c3lfUow=="
+    },
+    "node_modules/color-convert": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
+      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
+      "dev": true,
+      "dependencies": {
+        "color-name": "~1.1.4"
+      },
+      "engines": {
+        "node": ">=7.0.0"
+      }
+    },
+    "node_modules/color-name": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
+      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
+      "dev": true
+    },
+    "node_modules/commander": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
+      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/convert-source-map": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
+      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
+      "dev": true
+    },
+    "node_modules/cross-spawn": {
+      "version": "7.0.6",
+      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
+      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
+      "dev": true,
+      "dependencies": {
+        "path-key": "^3.1.0",
+        "shebang-command": "^2.0.0",
+        "which": "^2.0.1"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/cssesc": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
+      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
+      "dev": true,
+      "bin": {
+        "cssesc": "bin/cssesc"
+      },
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/debug": {
+      "version": "4.4.0",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
+      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
+      "dev": true,
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
+      "engines": {
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/didyoumean": {
+      "version": "1.2.2",
+      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
+      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
+      "dev": true
+    },
+    "node_modules/dlv": {
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
+      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
+      "dev": true
+    },
+    "node_modules/eastasianwidth": {
+      "version": "0.2.0",
+      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
+      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
+      "dev": true
+    },
+    "node_modules/electron-to-chromium": {
+      "version": "1.5.74",
+      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.74.tgz",
+      "integrity": "sha512-ck3//9RC+6oss/1Bh9tiAVFy5vfSKbRHAFh7Z3/eTRkEqJeWgymloShB17Vg3Z4nmDNp35vAd1BZ6CMW4Wt6Iw==",
+      "dev": true
+    },
+    "node_modules/emoji-regex": {
+      "version": "9.2.2",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
+      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
+      "dev": true
+    },
+    "node_modules/esbuild": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.18.20.tgz",
+      "integrity": "sha512-ceqxoedUrcayh7Y7ZX6NdbbDzGROiyVBgC4PriJThBKSVPWnnFHZAkfI1lJT8QFkOwH4qOS2SJkS4wvpGl8BpA==",
+      "dev": true,
+      "hasInstallScript": true,
+      "bin": {
+        "esbuild": "bin/esbuild"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "optionalDependencies": {
+        "@esbuild/android-arm": "0.18.20",
+        "@esbuild/android-arm64": "0.18.20",
+        "@esbuild/android-x64": "0.18.20",
+        "@esbuild/darwin-arm64": "0.18.20",
+        "@esbuild/darwin-x64": "0.18.20",
+        "@esbuild/freebsd-arm64": "0.18.20",
+        "@esbuild/freebsd-x64": "0.18.20",
+        "@esbuild/linux-arm": "0.18.20",
+        "@esbuild/linux-arm64": "0.18.20",
+        "@esbuild/linux-ia32": "0.18.20",
+        "@esbuild/linux-loong64": "0.18.20",
+        "@esbuild/linux-mips64el": "0.18.20",
+        "@esbuild/linux-ppc64": "0.18.20",
+        "@esbuild/linux-riscv64": "0.18.20",
+        "@esbuild/linux-s390x": "0.18.20",
+        "@esbuild/linux-x64": "0.18.20",
+        "@esbuild/netbsd-x64": "0.18.20",
+        "@esbuild/openbsd-x64": "0.18.20",
+        "@esbuild/sunos-x64": "0.18.20",
+        "@esbuild/win32-arm64": "0.18.20",
+        "@esbuild/win32-ia32": "0.18.20",
+        "@esbuild/win32-x64": "0.18.20"
+      }
+    },
+    "node_modules/escalade": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
+      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
+      "dev": true,
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/fast-glob": {
+      "version": "3.3.2",
+      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
+      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.stat": "^2.0.2",
+        "@nodelib/fs.walk": "^1.2.3",
+        "glob-parent": "^5.1.2",
+        "merge2": "^1.3.0",
+        "micromatch": "^4.0.4"
+      },
+      "engines": {
+        "node": ">=8.6.0"
+      }
+    },
+    "node_modules/fast-glob/node_modules/glob-parent": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
+      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/fastq": {
+      "version": "1.17.1",
+      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
+      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
+      "dev": true,
+      "dependencies": {
+        "reusify": "^1.0.4"
+      }
+    },
+    "node_modules/fill-range": {
+      "version": "7.1.1",
+      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
+      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
+      "dev": true,
+      "dependencies": {
+        "to-regex-range": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/foreground-child": {
+      "version": "3.3.0",
+      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
+      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
+      "dev": true,
+      "dependencies": {
+        "cross-spawn": "^7.0.0",
+        "signal-exit": "^4.0.1"
+      },
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/fraction.js": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
+      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
+      "dev": true,
+      "engines": {
+        "node": "*"
+      },
+      "funding": {
+        "type": "patreon",
+        "url": "https://github.com/sponsors/rawify"
+      }
+    },
+    "node_modules/fsevents": {
+      "version": "2.3.3",
+      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
+      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
+      }
+    },
+    "node_modules/function-bind": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
+      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
+      "dev": true,
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/gensync": {
+      "version": "1.0.0-beta.2",
+      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
+      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/glob": {
+      "version": "10.4.5",
+      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
+      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
+      "dev": true,
+      "dependencies": {
+        "foreground-child": "^3.1.0",
+        "jackspeak": "^3.1.2",
+        "minimatch": "^9.0.4",
+        "minipass": "^7.1.2",
+        "package-json-from-dist": "^1.0.0",
+        "path-scurry": "^1.11.1"
+      },
+      "bin": {
+        "glob": "dist/esm/bin.mjs"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/glob-parent": {
+      "version": "6.0.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
+      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.3"
+      },
+      "engines": {
+        "node": ">=10.13.0"
+      }
+    },
+    "node_modules/globals": {
+      "version": "11.12.0",
+      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
+      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
+      "dev": true,
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/hasown": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
+      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
+      "dev": true,
+      "dependencies": {
+        "function-bind": "^1.1.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/is-binary-path": {
+      "version": "2.1.0",
+      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
+      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
+      "dev": true,
+      "dependencies": {
+        "binary-extensions": "^2.0.0"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/is-core-module": {
+      "version": "2.16.0",
+      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.0.tgz",
+      "integrity": "sha512-urTSINYfAYgcbLb0yDQ6egFm6h3Mo1DcF9EkyXSRjjzdHbsulg01qhwWuXdOoUBuTkbQ80KDboXa0vFJ+BDH+g==",
+      "dev": true,
+      "dependencies": {
+        "hasown": "^2.0.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/is-extglob": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
+      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/is-fullwidth-code-point": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/is-glob": {
+      "version": "4.0.3",
+      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
+      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
+      "dev": true,
+      "dependencies": {
+        "is-extglob": "^2.1.1"
+      },
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/is-number": {
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
+      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.12.0"
+      }
+    },
+    "node_modules/isexe": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
+      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
+      "dev": true
+    },
+    "node_modules/jackspeak": {
+      "version": "3.4.3",
+      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
+      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
+      "dev": true,
+      "dependencies": {
+        "@isaacs/cliui": "^8.0.2"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      },
+      "optionalDependencies": {
+        "@pkgjs/parseargs": "^0.11.0"
+      }
+    },
+    "node_modules/jiti": {
+      "version": "1.21.6",
+      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
+      "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
+      "dev": true,
+      "bin": {
+        "jiti": "bin/jiti.js"
+      }
+    },
+    "node_modules/js-tokens": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
+      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
+    },
+    "node_modules/jsesc": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
+      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
+      "dev": true,
+      "bin": {
+        "jsesc": "bin/jsesc"
+      },
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/json5": {
+      "version": "2.2.3",
+      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
+      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
+      "dev": true,
+      "bin": {
+        "json5": "lib/cli.js"
+      },
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/lilconfig": {
+      "version": "3.1.3",
+      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
+      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
+      "dev": true,
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/antonk52"
+      }
+    },
+    "node_modules/lines-and-columns": {
+      "version": "1.2.4",
+      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
+      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
+      "dev": true
+    },
+    "node_modules/loose-envify": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
+      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
+      "dependencies": {
+        "js-tokens": "^3.0.0 || ^4.0.0"
+      },
+      "bin": {
+        "loose-envify": "cli.js"
+      }
+    },
+    "node_modules/lru-cache": {
+      "version": "5.1.1",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
+      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
+      "dev": true,
+      "dependencies": {
+        "yallist": "^3.0.2"
+      }
+    },
+    "node_modules/merge2": {
+      "version": "1.4.1",
+      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
+      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
+      "dev": true,
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/micromatch": {
+      "version": "4.0.8",
+      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
+      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
+      "dev": true,
+      "dependencies": {
+        "braces": "^3.0.3",
+        "picomatch": "^2.3.1"
+      },
+      "engines": {
+        "node": ">=8.6"
+      }
+    },
+    "node_modules/minimatch": {
+      "version": "9.0.5",
+      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
+      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
+      "dev": true,
+      "dependencies": {
+        "brace-expansion": "^2.0.1"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/minipass": {
+      "version": "7.1.2",
+      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
+      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
+      "dev": true,
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      }
+    },
+    "node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "dev": true
+    },
+    "node_modules/mz": {
+      "version": "2.7.0",
+      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
+      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
+      "dev": true,
+      "dependencies": {
+        "any-promise": "^1.0.0",
+        "object-assign": "^4.0.1",
+        "thenify-all": "^1.0.0"
+      }
+    },
+    "node_modules/nanoid": {
+      "version": "3.3.8",
+      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
+      "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "bin": {
+        "nanoid": "bin/nanoid.cjs"
+      },
+      "engines": {
+        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
+      }
+    },
+    "node_modules/node-releases": {
+      "version": "2.0.19",
+      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
+      "integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
+      "dev": true
+    },
+    "node_modules/normalize-path": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
+      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/normalize-range": {
+      "version": "0.1.2",
+      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
+      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/object-assign": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
+      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/object-hash": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
+      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/package-json-from-dist": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
+      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
+      "dev": true
+    },
+    "node_modules/papaparse": {
+      "version": "5.4.1",
+      "resolved": "https://registry.npmjs.org/papaparse/-/papaparse-5.4.1.tgz",
+      "integrity": "sha512-HipMsgJkZu8br23pW15uvo6sib6wne/4woLZPlFf3rpDyMe9ywEXUsuD7+6K9PRkJlVT51j/sCOYDKGGS3ZJrw=="
+    },
+    "node_modules/path-key": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
+      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/path-parse": {
+      "version": "1.0.7",
+      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
+      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
+      "dev": true
+    },
+    "node_modules/path-scurry": {
+      "version": "1.11.1",
+      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
+      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
+      "dev": true,
+      "dependencies": {
+        "lru-cache": "^10.2.0",
+        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.18"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/path-scurry/node_modules/lru-cache": {
+      "version": "10.4.3",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
+      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
+      "dev": true
+    },
+    "node_modules/picocolors": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
+      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
+      "dev": true
+    },
+    "node_modules/picomatch": {
+      "version": "2.3.1",
+      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
+      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
+      "dev": true,
+      "engines": {
+        "node": ">=8.6"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/jonschlinkert"
+      }
+    },
+    "node_modules/pify": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
+      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/pirates": {
+      "version": "4.0.6",
+      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
+      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/postcss": {
+      "version": "8.4.49",
+      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
+      "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/postcss"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "nanoid": "^3.3.7",
+        "picocolors": "^1.1.1",
+        "source-map-js": "^1.2.1"
+      },
+      "engines": {
+        "node": "^10 || ^12 || >=14"
+      }
+    },
+    "node_modules/postcss-import": {
+      "version": "15.1.0",
+      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
+      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
+      "dev": true,
+      "dependencies": {
+        "postcss-value-parser": "^4.0.0",
+        "read-cache": "^1.0.0",
+        "resolve": "^1.1.7"
+      },
+      "engines": {
+        "node": ">=14.0.0"
+      },
+      "peerDependencies": {
+        "postcss": "^8.0.0"
+      }
+    },
+    "node_modules/postcss-js": {
+      "version": "4.0.1",
+      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
+      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
+      "dev": true,
+      "dependencies": {
+        "camelcase-css": "^2.0.1"
+      },
+      "engines": {
+        "node": "^12 || ^14 || >= 16"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/postcss/"
+      },
+      "peerDependencies": {
+        "postcss": "^8.4.21"
+      }
+    },
+    "node_modules/postcss-load-config": {
+      "version": "4.0.2",
+      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
+      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "lilconfig": "^3.0.0",
+        "yaml": "^2.3.4"
+      },
+      "engines": {
+        "node": ">= 14"
+      },
+      "peerDependencies": {
+        "postcss": ">=8.0.9",
+        "ts-node": ">=9.0.0"
+      },
+      "peerDependenciesMeta": {
+        "postcss": {
+          "optional": true
+        },
+        "ts-node": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/postcss-nested": {
+      "version": "6.2.0",
+      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
+      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "postcss-selector-parser": "^6.1.1"
+      },
+      "engines": {
+        "node": ">=12.0"
+      },
+      "peerDependencies": {
+        "postcss": "^8.2.14"
+      }
+    },
+    "node_modules/postcss-selector-parser": {
+      "version": "6.1.2",
+      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
+      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
+      "dev": true,
+      "dependencies": {
+        "cssesc": "^3.0.0",
+        "util-deprecate": "^1.0.2"
+      },
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/postcss-value-parser": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
+      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
+      "dev": true
+    },
+    "node_modules/queue-microtask": {
+      "version": "1.2.3",
+      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
+      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ]
+    },
+    "node_modules/react": {
+      "version": "18.3.1",
+      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
+      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
+      "dependencies": {
+        "loose-envify": "^1.1.0"
+      },
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/react-dom": {
+      "version": "18.3.1",
+      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
+      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
+      "dependencies": {
+        "loose-envify": "^1.1.0",
+        "scheduler": "^0.23.2"
+      },
+      "peerDependencies": {
+        "react": "^18.3.1"
+      }
+    },
+    "node_modules/react-refresh": {
+      "version": "0.14.2",
+      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
+      "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/react-tooltip": {
+      "version": "5.28.0",
+      "resolved": "https://registry.npmjs.org/react-tooltip/-/react-tooltip-5.28.0.tgz",
+      "integrity": "sha512-R5cO3JPPXk6FRbBHMO0rI9nkUG/JKfalBSQfZedZYzmqaZQgq7GLzF8vcCWx6IhUCKg0yPqJhXIzmIO5ff15xg==",
+      "dependencies": {
+        "@floating-ui/dom": "^1.6.1",
+        "classnames": "^2.3.0"
+      },
+      "peerDependencies": {
+        "react": ">=16.14.0",
+        "react-dom": ">=16.14.0"
+      }
+    },
+    "node_modules/read-cache": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
+      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
+      "dev": true,
+      "dependencies": {
+        "pify": "^2.3.0"
+      }
+    },
+    "node_modules/readdirp": {
+      "version": "3.6.0",
+      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
+      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
+      "dev": true,
+      "dependencies": {
+        "picomatch": "^2.2.1"
+      },
+      "engines": {
+        "node": ">=8.10.0"
+      }
+    },
+    "node_modules/resolve": {
+      "version": "1.22.9",
+      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.9.tgz",
+      "integrity": "sha512-QxrmX1DzraFIi9PxdG5VkRfRwIgjwyud+z/iBwfRRrVmHc+P9Q7u2lSSpQ6bjr2gy5lrqIiU9vb6iAeGf2400A==",
+      "dev": true,
+      "dependencies": {
+        "is-core-module": "^2.16.0",
+        "path-parse": "^1.0.7",
+        "supports-preserve-symlinks-flag": "^1.0.0"
+      },
+      "bin": {
+        "resolve": "bin/resolve"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/reusify": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
+      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
+      "dev": true,
+      "engines": {
+        "iojs": ">=1.0.0",
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/rollup": {
+      "version": "3.29.5",
+      "resolved": "https://registry.npmjs.org/rollup/-/rollup-3.29.5.tgz",
+      "integrity": "sha512-GVsDdsbJzzy4S/v3dqWPJ7EfvZJfCHiDqe80IyrF59LYuP+e6U1LJoUqeuqRbwAWoMNoXivMNeNAOf5E22VA1w==",
+      "dev": true,
+      "bin": {
+        "rollup": "dist/bin/rollup"
+      },
+      "engines": {
+        "node": ">=14.18.0",
+        "npm": ">=8.0.0"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/run-parallel": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
+      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "dependencies": {
+        "queue-microtask": "^1.2.2"
+      }
+    },
+    "node_modules/scheduler": {
+      "version": "0.23.2",
+      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
+      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
+      "dependencies": {
+        "loose-envify": "^1.1.0"
+      }
+    },
+    "node_modules/semver": {
+      "version": "6.3.1",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
+      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
+      "dev": true,
+      "bin": {
+        "semver": "bin/semver.js"
+      }
+    },
+    "node_modules/shebang-command": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
+      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
+      "dev": true,
+      "dependencies": {
+        "shebang-regex": "^3.0.0"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/shebang-regex": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
+      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/signal-exit": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
+      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
+      "dev": true,
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/source-map-js": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
+      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/string-width": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
+      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
+      "dev": true,
+      "dependencies": {
+        "eastasianwidth": "^0.2.0",
+        "emoji-regex": "^9.2.2",
+        "strip-ansi": "^7.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/string-width-cjs": {
+      "name": "string-width",
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
+      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
+      "dev": true,
+      "dependencies": {
+        "emoji-regex": "^8.0.0",
+        "is-fullwidth-code-point": "^3.0.0",
+        "strip-ansi": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/string-width-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/string-width-cjs/node_modules/emoji-regex": {
+      "version": "8.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
+      "dev": true
+    },
+    "node_modules/string-width-cjs/node_modules/strip-ansi": {
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/strip-ansi": {
+      "version": "7.1.0",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
+      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
+      }
+    },
+    "node_modules/strip-ansi-cjs": {
+      "name": "strip-ansi",
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/sucrase": {
+      "version": "3.35.0",
+      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
+      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/gen-mapping": "^0.3.2",
+        "commander": "^4.0.0",
+        "glob": "^10.3.10",
+        "lines-and-columns": "^1.1.6",
+        "mz": "^2.7.0",
+        "pirates": "^4.0.1",
+        "ts-interface-checker": "^0.1.9"
+      },
+      "bin": {
+        "sucrase": "bin/sucrase",
+        "sucrase-node": "bin/sucrase-node"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      }
+    },
+    "node_modules/supports-preserve-symlinks-flag": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
+      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
+      "dev": true,
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/tailwindcss": {
+      "version": "3.4.16",
+      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.16.tgz",
+      "integrity": "sha512-TI4Cyx7gDiZ6r44ewaJmt0o6BrMCT5aK5e0rmJ/G9Xq3w7CX/5VXl/zIPEJZFUK5VEqwByyhqNPycPlvcK4ZNw==",
+      "dev": true,
+      "dependencies": {
+        "@alloc/quick-lru": "^5.2.0",
+        "arg": "^5.0.2",
+        "chokidar": "^3.6.0",
+        "didyoumean": "^1.2.2",
+        "dlv": "^1.1.3",
+        "fast-glob": "^3.3.2",
+        "glob-parent": "^6.0.2",
+        "is-glob": "^4.0.3",
+        "jiti": "^1.21.6",
+        "lilconfig": "^3.1.3",
+        "micromatch": "^4.0.8",
+        "normalize-path": "^3.0.0",
+        "object-hash": "^3.0.0",
+        "picocolors": "^1.1.1",
+        "postcss": "^8.4.47",
+        "postcss-import": "^15.1.0",
+        "postcss-js": "^4.0.1",
+        "postcss-load-config": "^4.0.2",
+        "postcss-nested": "^6.2.0",
+        "postcss-selector-parser": "^6.1.2",
+        "resolve": "^1.22.8",
+        "sucrase": "^3.35.0"
+      },
+      "bin": {
+        "tailwind": "lib/cli.js",
+        "tailwindcss": "lib/cli.js"
+      },
+      "engines": {
+        "node": ">=14.0.0"
+      }
+    },
+    "node_modules/thenify": {
+      "version": "3.3.1",
+      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
+      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
+      "dev": true,
+      "dependencies": {
+        "any-promise": "^1.0.0"
+      }
+    },
+    "node_modules/thenify-all": {
+      "version": "1.6.0",
+      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
+      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
+      "dev": true,
+      "dependencies": {
+        "thenify": ">= 3.1.0 < 4"
+      },
+      "engines": {
+        "node": ">=0.8"
+      }
+    },
+    "node_modules/to-regex-range": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
+      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
+      "dev": true,
+      "dependencies": {
+        "is-number": "^7.0.0"
+      },
+      "engines": {
+        "node": ">=8.0"
+      }
+    },
+    "node_modules/ts-interface-checker": {
+      "version": "0.1.13",
+      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
+      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
+      "dev": true
+    },
+    "node_modules/update-browserslist-db": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
+      "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "escalade": "^3.2.0",
+        "picocolors": "^1.1.0"
+      },
+      "bin": {
+        "update-browserslist-db": "cli.js"
+      },
+      "peerDependencies": {
+        "browserslist": ">= 4.21.0"
+      }
+    },
+    "node_modules/util-deprecate": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
+      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
+      "dev": true
+    },
+    "node_modules/vite": {
+      "version": "4.5.5",
+      "resolved": "https://registry.npmjs.org/vite/-/vite-4.5.5.tgz",
+      "integrity": "sha512-ifW3Lb2sMdX+WU91s3R0FyQlAyLxOzCSCP37ujw0+r5POeHPwe6udWVIElKQq8gk3t7b8rkmvqC6IHBpCff4GQ==",
+      "dev": true,
+      "dependencies": {
+        "esbuild": "^0.18.10",
+        "postcss": "^8.4.27",
+        "rollup": "^3.27.1"
+      },
+      "bin": {
+        "vite": "bin/vite.js"
+      },
+      "engines": {
+        "node": "^14.18.0 || >=16.0.0"
+      },
+      "funding": {
+        "url": "https://github.com/vitejs/vite?sponsor=1"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      },
+      "peerDependencies": {
+        "@types/node": ">= 14",
+        "less": "*",
+        "lightningcss": "^1.21.0",
+        "sass": "*",
+        "stylus": "*",
+        "sugarss": "*",
+        "terser": "^5.4.0"
+      },
+      "peerDependenciesMeta": {
+        "@types/node": {
+          "optional": true
+        },
+        "less": {
+          "optional": true
+        },
+        "lightningcss": {
+          "optional": true
+        },
+        "sass": {
+          "optional": true
+        },
+        "stylus": {
+          "optional": true
+        },
+        "sugarss": {
+          "optional": true
+        },
+        "terser": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/which": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
+      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
+      "dev": true,
+      "dependencies": {
+        "isexe": "^2.0.0"
+      },
+      "bin": {
+        "node-which": "bin/node-which"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/wrap-ansi": {
+      "version": "8.1.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
+      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
+      "dev": true,
+      "dependencies": {
+        "ansi-styles": "^6.1.0",
+        "string-width": "^5.0.1",
+        "strip-ansi": "^7.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs": {
+      "name": "wrap-ansi",
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
+      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
+      "dev": true,
+      "dependencies": {
+        "ansi-styles": "^4.0.0",
+        "string-width": "^4.1.0",
+        "strip-ansi": "^6.0.0"
+      },
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
+      "version": "4.3.0",
+      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
+      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
+      "dev": true,
+      "dependencies": {
+        "color-convert": "^2.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
+      "version": "8.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
+      "dev": true
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
+      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
+      "dev": true,
+      "dependencies": {
+        "emoji-regex": "^8.0.0",
+        "is-fullwidth-code-point": "^3.0.0",
+        "strip-ansi": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/yallist": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
+      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
+      "dev": true
+    },
+    "node_modules/yaml": {
+      "version": "2.6.1",
+      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.6.1.tgz",
+      "integrity": "sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==",
+      "dev": true,
+      "bin": {
+        "yaml": "bin.mjs"
+      },
+      "engines": {
+        "node": ">= 14"
+      }
+    }
+  }
+}
```

### package.json

```diff
--- old
+++ new
@@ -0,0 +1,27 @@
+{
+  "name": "health-scenarios-dashboard",
+  "version": "3.0.0",
+  "description": "A dashboard visualizing various health scenarios with Tailwind CSS & Chart.js.",
+  "main": "index.js",
+  "scripts": {
+    "dev": "vite",
+    "build": "vite build",
+    "serve": "vite preview"
+  },
+  "author": "Your Team",
+  "license": "MIT",
+  "devDependencies": {
+    "@vitejs/plugin-react": "^4.0.3",
+    "autoprefixer": "^10.4.14",
+    "postcss": "^8.4.21",
+    "tailwindcss": "^3.3.2",
+    "vite": "^4.2.0"
+  },
+  "dependencies": {
+    "chart.js": "^4.3.0",
+    "papaparse": "^5.4.1",
+    "react": "^18.2.0",
+    "react-dom": "^18.2.0",
+    "react-tooltip": "^5.11.0"
+  }
+}
```

### postcss.config.js

```diff
--- old
+++ new
@@ -0,0 +1,6 @@
+export default {
+    plugins: {
+      tailwindcss: {},
+      autoprefixer: {},
+    },
+  }
```

### repindex/dependency_graph_exports.json

```diff
--- old
+++ new
@@ -0,0 +1,4 @@
+{
+    "nodes": [],
+    "edges": []
+}
```

### repindex/tree_structure.txt

```diff
--- old
+++ new
@@ -0,0 +1,39 @@
+.
+├── data
+│   ├── scenario_afib.csv
+│   ├── scenario_chf_afib.csv
+│   ├── scenario_elderly_infection.csv
+│   ├── scenario_hypertension.csv
+│   ├── scenario_hypertensive_emergency.csv
+│   ├── scenario_sepsis.csv
+│   └── scenario_sleep_apnea.csv
+├── index.html
+├── package-lock.json
+├── package.json
+├── postcss.config.js
+├── public
+│   └── data
+│       ├── scenario_afib.csv
+│       ├── scenario_chf_afib.csv
+│       ├── scenario_elderly_infection.csv
+│       ├── scenario_hypertension.csv
+│       ├── scenario_hypertensive_emergency.csv
+│       ├── scenario_sepsis.csv
+│       └── scenario_sleep_apnea.csv
+├── repindex
+├── src
+│   ├── App.jsx
+│   ├── components
+│   │   ├── ChartContainer.jsx
+│   │   ├── ControlPanel.jsx
+│   │   ├── ScenarioInfo.jsx
+│   │   └── ScenarioSelector.jsx
+│   ├── index.css
+│   ├── main.jsx
+│   └── utils
+│       ├── anomalyDetection.js
+│       ├── chartUtils.jsx
+│       ├── dataLoader.js
+│       └── scenarioInfo.js
+├── tailwind.config.js
+└── vite.config.js
```

### repindex/dependency_graph_full.json

```diff
--- old
+++ new
@@ -0,0 +1,4 @@
+{
+    "nodes": [],
+    "edges": []
+}
```

### repindex/top_level_structure.json

```diff
--- old
+++ new
@@ -0,0 +1 @@
+{}
```

### repindex/documentation_light.md

```diff
--- old
+++ new
@@ -0,0 +1,23 @@
+### src/index.css
+
+```css
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
+
+body {
+  @apply bg-white text-gray-800;
+}
+
+.theme-light {}
+.theme-dark {
+  @apply bg-gray-900 text-gray-100;
+}
+.theme-pastel {
+  @apply bg-amber-50 text-gray-700;
+}
+.theme-high-contrast {
+  @apply bg-white text-black;
+}
+```
+
```

### repindex/documentation.md

```diff
--- old
+++ new
@@ -0,0 +1,3963 @@
+### index.html
+
+```
+<!DOCTYPE html>
+<html lang="en">
+<head>
+  <meta charset="UTF-8"/>
+  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
+  <meta name="description" content="Healthcare Scenarios Dashboard"/>
+  <title>Healthcare Scenarios Dashboard</title>
+  <link rel="stylesheet" href="./src/index.css" />
+</head>
+<body class="bg-white text-gray-800 font-sans">
+  <div id="root"></div>
+  <script type="module" src="./src/main.jsx"></script>
+</body>
+</html>
+```
+
+### tailwind.config.js
+
+```
+/** @type {import('tailwindcss').Config} */
+export default {
+    content: [
+      "./index.html",
+      "./src/**/*.{js,jsx,ts,tsx}",
+    ],
+    theme: {
+      extend: {},
+    },
+    plugins: [],
+  }
+```
+
+### vite.config.js
+
+```
+import { defineConfig } from 'vite'
+import react from '@vitejs/plugin-react'
+
+export default defineConfig({
+  plugins: [react()],
+})
+```
+
+### package-lock.json
+
+```
+{
+  "name": "health-scenarios-dashboard",
+  "version": "3.0.0",
+  "lockfileVersion": 3,
+  "requires": true,
+  "packages": {
+    "": {
+      "name": "health-scenarios-dashboard",
+      "version": "3.0.0",
+      "license": "MIT",
+      "dependencies": {
+        "chart.js": "^4.3.0",
+        "papaparse": "^5.4.1",
+        "react": "^18.2.0",
+        "react-dom": "^18.2.0",
+        "react-tooltip": "^5.11.0"
+      },
+      "devDependencies": {
+        "@vitejs/plugin-react": "^4.0.3",
+        "autoprefixer": "^10.4.14",
+        "postcss": "^8.4.21",
+        "tailwindcss": "^3.3.2",
+        "vite": "^4.2.0"
+      }
+    },
+    "node_modules/@alloc/quick-lru": {
+      "version": "5.2.0",
+      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
+      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
+      "dev": true,
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/@ampproject/remapping": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
+      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/gen-mapping": "^0.3.5",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@babel/code-frame": {
+      "version": "7.26.2",
+      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
+      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-validator-identifier": "^7.25.9",
+        "js-tokens": "^4.0.0",
+        "picocolors": "^1.0.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/compat-data": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.3.tgz",
+      "integrity": "sha512-nHIxvKPniQXpmQLb0vhY3VaFb3S0YrTAwpOWJZh1wn3oJPjJk9Asva204PsBdmAE8vpzfHudT8DB0scYvy9q0g==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/core": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
+      "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
+      "dev": true,
+      "dependencies": {
+        "@ampproject/remapping": "^2.2.0",
+        "@babel/code-frame": "^7.26.0",
+        "@babel/generator": "^7.26.0",
+        "@babel/helper-compilation-targets": "^7.25.9",
+        "@babel/helper-module-transforms": "^7.26.0",
+        "@babel/helpers": "^7.26.0",
+        "@babel/parser": "^7.26.0",
+        "@babel/template": "^7.25.9",
+        "@babel/traverse": "^7.25.9",
+        "@babel/types": "^7.26.0",
+        "convert-source-map": "^2.0.0",
+        "debug": "^4.1.0",
+        "gensync": "^1.0.0-beta.2",
+        "json5": "^2.2.3",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/babel"
+      }
+    },
+    "node_modules/@babel/generator": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.3.tgz",
+      "integrity": "sha512-6FF/urZvD0sTeO7k6/B15pMLC4CHUv1426lzr3N01aHJTl046uCAh9LXW/fzeXXjPNCJ6iABW5XaWOsIZB93aQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.26.3",
+        "@babel/types": "^7.26.3",
+        "@jridgewell/gen-mapping": "^0.3.5",
+        "@jridgewell/trace-mapping": "^0.3.25",
+        "jsesc": "^3.0.2"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-compilation-targets": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
+      "integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
+      "dev": true,
+      "dependencies": {
+        "@babel/compat-data": "^7.25.9",
+        "@babel/helper-validator-option": "^7.25.9",
+        "browserslist": "^4.24.0",
+        "lru-cache": "^5.1.1",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-imports": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
+      "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/traverse": "^7.25.9",
+        "@babel/types": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-transforms": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
+      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-module-imports": "^7.25.9",
+        "@babel/helper-validator-identifier": "^7.25.9",
+        "@babel/traverse": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0"
+      }
+    },
+    "node_modules/@babel/helper-plugin-utils": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
+      "integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-string-parser": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
+      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-identifier": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
+      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-option": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
+      "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helpers": {
+      "version": "7.26.0",
+      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
+      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/template": "^7.25.9",
+        "@babel/types": "^7.26.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/parser": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.3.tgz",
+      "integrity": "sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.26.3"
+      },
+      "bin": {
+        "parser": "bin/babel-parser.js"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-self": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
+      "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-source": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
+      "integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/template": {
+      "version": "7.25.9",
+      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
+      "integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/code-frame": "^7.25.9",
+        "@babel/parser": "^7.25.9",
+        "@babel/types": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/traverse": {
+      "version": "7.26.4",
+      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.4.tgz",
+      "integrity": "sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==",
+      "dev": true,
+      "dependencies": {
+        "@babel/code-frame": "^7.26.2",
+        "@babel/generator": "^7.26.3",
+        "@babel/parser": "^7.26.3",
+        "@babel/template": "^7.25.9",
+        "@babel/types": "^7.26.3",
+        "debug": "^4.3.1",
+        "globals": "^11.1.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/types": {
+      "version": "7.26.3",
+      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.3.tgz",
+      "integrity": "sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/helper-string-parser": "^7.25.9",
+        "@babel/helper-validator-identifier": "^7.25.9"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@esbuild/android-arm": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.18.20.tgz",
+      "integrity": "sha512-fyi7TDI/ijKKNZTUJAQqiG5T7YjJXgnzkURqmGj13C6dCqckZBLdl4h7bkhHt/t0WP+zO9/zwroDvANaOqO5Sw==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/android-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.18.20.tgz",
+      "integrity": "sha512-Nz4rJcchGDtENV0eMKUNa6L12zz2zBDXuhj/Vjh18zGqB44Bi7MBMSXjgunJgjRhCmKOjnPuZp4Mb6OKqtMHLQ==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/android-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.18.20.tgz",
+      "integrity": "sha512-8GDdlePJA8D6zlZYJV/jnrRAi6rOiNaCC/JclcXpB+KIuvfBN4owLtgzY2bsxnx666XjJx2kDPUmnTtR8qKQUg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/darwin-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.18.20.tgz",
+      "integrity": "sha512-bxRHW5kHU38zS2lPTPOyuyTm+S+eobPUnTNkdJEfAddYgEcll4xkT8DB9d2008DtTbl7uJag2HuE5NZAZgnNEA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/darwin-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.18.20.tgz",
+      "integrity": "sha512-pc5gxlMDxzm513qPGbCbDukOdsGtKhfxD1zJKXjCCcU7ju50O7MeAZ8c4krSJcOIJGFR+qx21yMMVYwiQvyTyQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/freebsd-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.18.20.tgz",
+      "integrity": "sha512-yqDQHy4QHevpMAaxhhIwYPMv1NECwOvIpGCZkECn8w2WFHXjEwrBn3CeNIYsibZ/iZEUemj++M26W3cNR5h+Tw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/freebsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.18.20.tgz",
+      "integrity": "sha512-tgWRPPuQsd3RmBZwarGVHZQvtzfEBOreNuxEMKFcd5DaDn2PbBxfwLcj4+aenoh7ctXcbXmOQIn8HI6mCSw5MQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-arm": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.18.20.tgz",
+      "integrity": "sha512-/5bHkMWnq1EgKr1V+Ybz3s1hWXok7mDFUMQ4cG10AfW3wL02PSZi5kFpYKrptDsgb2WAJIvRcDm+qIvXf/apvg==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.18.20.tgz",
+      "integrity": "sha512-2YbscF+UL7SQAVIpnWvYwM+3LskyDmPhe31pE7/aoTMFKKzIc9lLbyGUpmmb8a8AixOL61sQ/mFh3jEjHYFvdA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-ia32": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.18.20.tgz",
+      "integrity": "sha512-P4etWwq6IsReT0E1KHU40bOnzMHoH73aXp96Fs8TIT6z9Hu8G6+0SHSw9i2isWrD2nbx2qo5yUqACgdfVGx7TA==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-loong64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.18.20.tgz",
+      "integrity": "sha512-nXW8nqBTrOpDLPgPY9uV+/1DjxoQ7DoB2N8eocyq8I9XuqJ7BiAMDMf9n1xZM9TgW0J8zrquIb/A7s3BJv7rjg==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-mips64el": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.18.20.tgz",
+      "integrity": "sha512-d5NeaXZcHp8PzYy5VnXV3VSd2D328Zb+9dEq5HE6bw6+N86JVPExrA6O68OPwobntbNJ0pzCpUFZTo3w0GyetQ==",
+      "cpu": [
+        "mips64el"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-ppc64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.18.20.tgz",
+      "integrity": "sha512-WHPyeScRNcmANnLQkq6AfyXRFr5D6N2sKgkFo2FqguP44Nw2eyDlbTdZwd9GYk98DZG9QItIiTlFLHJHjxP3FA==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-riscv64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.18.20.tgz",
+      "integrity": "sha512-WSxo6h5ecI5XH34KC7w5veNnKkju3zBRLEQNY7mv5mtBmrP/MjNBCAlsM2u5hDBlS3NGcTQpoBvRzqBcRtpq1A==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-s390x": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.18.20.tgz",
+      "integrity": "sha512-+8231GMs3mAEth6Ja1iK0a1sQ3ohfcpzpRLH8uuc5/KVDFneH6jtAJLFGafpzpMRO6DzJ6AvXKze9LfFMrIHVQ==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/linux-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.18.20.tgz",
+      "integrity": "sha512-UYqiqemphJcNsFEskc73jQ7B9jgwjWrSayxawS6UVFZGWrAAtkzjxSqnoclCXxWtfwLdzU+vTpcNYhpn43uP1w==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/netbsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.18.20.tgz",
+      "integrity": "sha512-iO1c++VP6xUBUmltHZoMtCUdPlnPGdBom6IrO4gyKPFFVBKioIImVooR5I83nTew5UOYrk3gIJhbZh8X44y06A==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/openbsd-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.18.20.tgz",
+      "integrity": "sha512-e5e4YSsuQfX4cxcygw/UCPIEP6wbIL+se3sxPdCiMbFLBWu0eiZOJ7WoD+ptCLrmjZBK1Wk7I6D/I3NglUGOxg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/sunos-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.18.20.tgz",
+      "integrity": "sha512-kDbFRFp0YpTQVVrqUd5FTYmWo45zGaXe0X8E1G/LKFC0v8x0vWrhOWSLITcCn63lmZIxfOMXtCfti/RxN/0wnQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "sunos"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-arm64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.18.20.tgz",
+      "integrity": "sha512-ddYFR6ItYgoaq4v4JmQQaAI5s7npztfV4Ag6NrhiaW0RrnOXqBkgwZLofVTlq1daVTQNhtI5oieTvkRPfZrePg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-ia32": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.18.20.tgz",
+      "integrity": "sha512-Wv7QBi3ID/rROT08SABTS7eV4hX26sVduqDOTe1MvGMjNd3EjOz4b7zeexIR62GTIEKrfJXKL9LFxTYgkyeu7g==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@esbuild/win32-x64": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.18.20.tgz",
+      "integrity": "sha512-kTdfRcSiDfQca/y9QIkng02avJ+NCaQvrMejlsB3RRv5sE9rRoeBPISaZpKxHELzRxZyLvNts1P27W3wV+8geQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@floating-ui/core": {
+      "version": "1.6.8",
+      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
+      "integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
+      "dependencies": {
+        "@floating-ui/utils": "^0.2.8"
+      }
+    },
+    "node_modules/@floating-ui/dom": {
+      "version": "1.6.12",
+      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.12.tgz",
+      "integrity": "sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==",
+      "dependencies": {
+        "@floating-ui/core": "^1.6.0",
+        "@floating-ui/utils": "^0.2.8"
+      }
+    },
+    "node_modules/@floating-ui/utils": {
+      "version": "0.2.8",
+      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
+      "integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig=="
+    },
+    "node_modules/@isaacs/cliui": {
+      "version": "8.0.2",
+      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
+      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
+      "dev": true,
+      "dependencies": {
+        "string-width": "^5.1.2",
+        "string-width-cjs": "npm:string-width@^4.2.0",
+        "strip-ansi": "^7.0.1",
+        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
+        "wrap-ansi": "^8.1.0",
+        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
+      },
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/@jridgewell/gen-mapping": {
+      "version": "0.3.8",
+      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
+      "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/set-array": "^1.2.1",
+        "@jridgewell/sourcemap-codec": "^1.4.10",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/resolve-uri": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
+      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/set-array": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
+      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@jridgewell/sourcemap-codec": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
+      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
+      "dev": true
+    },
+    "node_modules/@jridgewell/trace-mapping": {
+      "version": "0.3.25",
+      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
+      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/resolve-uri": "^3.1.0",
+        "@jridgewell/sourcemap-codec": "^1.4.14"
+      }
+    },
+    "node_modules/@kurkle/color": {
+      "version": "0.3.4",
+      "resolved": "https://registry.npmjs.org/@kurkle/color/-/color-0.3.4.tgz",
+      "integrity": "sha512-M5UknZPHRu3DEDWoipU6sE8PdkZ6Z/S+v4dD+Ke8IaNlpdSQah50lz1KtcFBa2vsdOnwbbnxJwVM4wty6udA5w=="
+    },
+    "node_modules/@nodelib/fs.scandir": {
+      "version": "2.1.5",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
+      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.stat": "2.0.5",
+        "run-parallel": "^1.1.9"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@nodelib/fs.stat": {
+      "version": "2.0.5",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
+      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
+      "dev": true,
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@nodelib/fs.walk": {
+      "version": "1.2.8",
+      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
+      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.scandir": "2.1.5",
+        "fastq": "^1.6.0"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/@pkgjs/parseargs": {
+      "version": "0.11.0",
+      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
+      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
+      "dev": true,
+      "optional": true,
+      "engines": {
+        "node": ">=14"
+      }
+    },
+    "node_modules/@types/babel__core": {
+      "version": "7.20.5",
+      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
+      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.20.7",
+        "@babel/types": "^7.20.7",
+        "@types/babel__generator": "*",
+        "@types/babel__template": "*",
+        "@types/babel__traverse": "*"
+      }
+    },
+    "node_modules/@types/babel__generator": {
+      "version": "7.6.8",
+      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
+      "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__template": {
+      "version": "7.4.4",
+      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
+      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
+      "dev": true,
+      "dependencies": {
+        "@babel/parser": "^7.1.0",
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__traverse": {
+      "version": "7.20.6",
+      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
+      "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
+      "dev": true,
+      "dependencies": {
+        "@babel/types": "^7.20.7"
+      }
+    },
+    "node_modules/@vitejs/plugin-react": {
+      "version": "4.3.4",
+      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
+      "integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
+      "dev": true,
+      "dependencies": {
+        "@babel/core": "^7.26.0",
+        "@babel/plugin-transform-react-jsx-self": "^7.25.9",
+        "@babel/plugin-transform-react-jsx-source": "^7.25.9",
+        "@types/babel__core": "^7.20.5",
+        "react-refresh": "^0.14.2"
+      },
+      "engines": {
+        "node": "^14.18.0 || >=16.0.0"
+      },
+      "peerDependencies": {
+        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
+      }
+    },
+    "node_modules/ansi-regex": {
+      "version": "6.1.0",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
+      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
+      "dev": true,
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
+      }
+    },
+    "node_modules/ansi-styles": {
+      "version": "6.2.1",
+      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
+      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
+      "dev": true,
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
+      }
+    },
+    "node_modules/any-promise": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
+      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
+      "dev": true
+    },
+    "node_modules/anymatch": {
+      "version": "3.1.3",
+      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
+      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
+      "dev": true,
+      "dependencies": {
+        "normalize-path": "^3.0.0",
+        "picomatch": "^2.0.4"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/arg": {
+      "version": "5.0.2",
+      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
+      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
+      "dev": true
+    },
+    "node_modules/autoprefixer": {
+      "version": "10.4.20",
+      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
+      "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "browserslist": "^4.23.3",
+        "caniuse-lite": "^1.0.30001646",
+        "fraction.js": "^4.3.7",
+        "normalize-range": "^0.1.2",
+        "picocolors": "^1.0.1",
+        "postcss-value-parser": "^4.2.0"
+      },
+      "bin": {
+        "autoprefixer": "bin/autoprefixer"
+      },
+      "engines": {
+        "node": "^10 || ^12 || >=14"
+      },
+      "peerDependencies": {
+        "postcss": "^8.1.0"
+      }
+    },
+    "node_modules/balanced-match": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
+      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
+      "dev": true
+    },
+    "node_modules/binary-extensions": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
+      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/brace-expansion": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
+      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
+      "dev": true,
+      "dependencies": {
+        "balanced-match": "^1.0.0"
+      }
+    },
+    "node_modules/braces": {
+      "version": "3.0.3",
+      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
+      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
+      "dev": true,
+      "dependencies": {
+        "fill-range": "^7.1.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/browserslist": {
+      "version": "4.24.3",
+      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.3.tgz",
+      "integrity": "sha512-1CPmv8iobE2fyRMV97dAcMVegvvWKxmq94hkLiAkUGwKVTyDLw33K+ZxiFrREKmmps4rIw6grcCFCnTMSZ/YiA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "caniuse-lite": "^1.0.30001688",
+        "electron-to-chromium": "^1.5.73",
+        "node-releases": "^2.0.19",
+        "update-browserslist-db": "^1.1.1"
+      },
+      "bin": {
+        "browserslist": "cli.js"
+      },
+      "engines": {
+        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
+      }
+    },
+    "node_modules/camelcase-css": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
+      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/caniuse-lite": {
+      "version": "1.0.30001689",
+      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001689.tgz",
+      "integrity": "sha512-CmeR2VBycfa+5/jOfnp/NpWPGd06nf1XYiefUvhXFfZE4GkRc9jv+eGPS4nT558WS/8lYCzV8SlANCIPvbWP1g==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ]
+    },
+    "node_modules/chart.js": {
+      "version": "4.4.7",
+      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-4.4.7.tgz",
+      "integrity": "sha512-pwkcKfdzTMAU/+jNosKhNL2bHtJc/sSmYgVbuGTEDhzkrhmyihmP7vUc/5ZK9WopidMDHNe3Wm7jOd/WhuHWuw==",
+      "dependencies": {
+        "@kurkle/color": "^0.3.0"
+      },
+      "engines": {
+        "pnpm": ">=8"
+      }
+    },
+    "node_modules/chokidar": {
+      "version": "3.6.0",
+      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
+      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
+      "dev": true,
+      "dependencies": {
+        "anymatch": "~3.1.2",
+        "braces": "~3.0.2",
+        "glob-parent": "~5.1.2",
+        "is-binary-path": "~2.1.0",
+        "is-glob": "~4.0.1",
+        "normalize-path": "~3.0.0",
+        "readdirp": "~3.6.0"
+      },
+      "engines": {
+        "node": ">= 8.10.0"
+      },
+      "funding": {
+        "url": "https://paulmillr.com/funding/"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/chokidar/node_modules/glob-parent": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
+      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/classnames": {
+      "version": "2.5.1",
+      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.5.1.tgz",
+      "integrity": "sha512-saHYOzhIQs6wy2sVxTM6bUDsQO4F50V9RQ22qBpEdCW+I+/Wmke2HOl6lS6dTpdxVhb88/I6+Hs+438c3lfUow=="
+    },
+    "node_modules/color-convert": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
+      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
+      "dev": true,
+      "dependencies": {
+        "color-name": "~1.1.4"
+      },
+      "engines": {
+        "node": ">=7.0.0"
+      }
+    },
+    "node_modules/color-name": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
+      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
+      "dev": true
+    },
+    "node_modules/commander": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
+      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/convert-source-map": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
+      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
+      "dev": true
+    },
+    "node_modules/cross-spawn": {
+      "version": "7.0.6",
+      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
+      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
+      "dev": true,
+      "dependencies": {
+        "path-key": "^3.1.0",
+        "shebang-command": "^2.0.0",
+        "which": "^2.0.1"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/cssesc": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
+      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
+      "dev": true,
+      "bin": {
+        "cssesc": "bin/cssesc"
+      },
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/debug": {
+      "version": "4.4.0",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
+      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
+      "dev": true,
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
+      "engines": {
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/didyoumean": {
+      "version": "1.2.2",
+      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
+      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
+      "dev": true
+    },
+    "node_modules/dlv": {
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
+      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
+      "dev": true
+    },
+    "node_modules/eastasianwidth": {
+      "version": "0.2.0",
+      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
+      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
+      "dev": true
+    },
+    "node_modules/electron-to-chromium": {
+      "version": "1.5.74",
+      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.74.tgz",
+      "integrity": "sha512-ck3//9RC+6oss/1Bh9tiAVFy5vfSKbRHAFh7Z3/eTRkEqJeWgymloShB17Vg3Z4nmDNp35vAd1BZ6CMW4Wt6Iw==",
+      "dev": true
+    },
+    "node_modules/emoji-regex": {
+      "version": "9.2.2",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
+      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
+      "dev": true
+    },
+    "node_modules/esbuild": {
+      "version": "0.18.20",
+      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.18.20.tgz",
+      "integrity": "sha512-ceqxoedUrcayh7Y7ZX6NdbbDzGROiyVBgC4PriJThBKSVPWnnFHZAkfI1lJT8QFkOwH4qOS2SJkS4wvpGl8BpA==",
+      "dev": true,
+      "hasInstallScript": true,
+      "bin": {
+        "esbuild": "bin/esbuild"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "optionalDependencies": {
+        "@esbuild/android-arm": "0.18.20",
+        "@esbuild/android-arm64": "0.18.20",
+        "@esbuild/android-x64": "0.18.20",
+        "@esbuild/darwin-arm64": "0.18.20",
+        "@esbuild/darwin-x64": "0.18.20",
+        "@esbuild/freebsd-arm64": "0.18.20",
+        "@esbuild/freebsd-x64": "0.18.20",
+        "@esbuild/linux-arm": "0.18.20",
+        "@esbuild/linux-arm64": "0.18.20",
+        "@esbuild/linux-ia32": "0.18.20",
+        "@esbuild/linux-loong64": "0.18.20",
+        "@esbuild/linux-mips64el": "0.18.20",
+        "@esbuild/linux-ppc64": "0.18.20",
+        "@esbuild/linux-riscv64": "0.18.20",
+        "@esbuild/linux-s390x": "0.18.20",
+        "@esbuild/linux-x64": "0.18.20",
+        "@esbuild/netbsd-x64": "0.18.20",
+        "@esbuild/openbsd-x64": "0.18.20",
+        "@esbuild/sunos-x64": "0.18.20",
+        "@esbuild/win32-arm64": "0.18.20",
+        "@esbuild/win32-ia32": "0.18.20",
+        "@esbuild/win32-x64": "0.18.20"
+      }
+    },
+    "node_modules/escalade": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
+      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
+      "dev": true,
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/fast-glob": {
+      "version": "3.3.2",
+      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
+      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
+      "dev": true,
+      "dependencies": {
+        "@nodelib/fs.stat": "^2.0.2",
+        "@nodelib/fs.walk": "^1.2.3",
+        "glob-parent": "^5.1.2",
+        "merge2": "^1.3.0",
+        "micromatch": "^4.0.4"
+      },
+      "engines": {
+        "node": ">=8.6.0"
+      }
+    },
+    "node_modules/fast-glob/node_modules/glob-parent": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
+      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/fastq": {
+      "version": "1.17.1",
+      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
+      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
+      "dev": true,
+      "dependencies": {
+        "reusify": "^1.0.4"
+      }
+    },
+    "node_modules/fill-range": {
+      "version": "7.1.1",
+      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
+      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
+      "dev": true,
+      "dependencies": {
+        "to-regex-range": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/foreground-child": {
+      "version": "3.3.0",
+      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
+      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
+      "dev": true,
+      "dependencies": {
+        "cross-spawn": "^7.0.0",
+        "signal-exit": "^4.0.1"
+      },
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/fraction.js": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
+      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
+      "dev": true,
+      "engines": {
+        "node": "*"
+      },
+      "funding": {
+        "type": "patreon",
+        "url": "https://github.com/sponsors/rawify"
+      }
+    },
+    "node_modules/fsevents": {
+      "version": "2.3.3",
+      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
+      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
+      }
+    },
+    "node_modules/function-bind": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
+      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
+      "dev": true,
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/gensync": {
+      "version": "1.0.0-beta.2",
+      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
+      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
+      "dev": true,
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/glob": {
+      "version": "10.4.5",
+      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
+      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
+      "dev": true,
+      "dependencies": {
+        "foreground-child": "^3.1.0",
+        "jackspeak": "^3.1.2",
+        "minimatch": "^9.0.4",
+        "minipass": "^7.1.2",
+        "package-json-from-dist": "^1.0.0",
+        "path-scurry": "^1.11.1"
+      },
+      "bin": {
+        "glob": "dist/esm/bin.mjs"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/glob-parent": {
+      "version": "6.0.2",
+      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
+      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
+      "dev": true,
+      "dependencies": {
+        "is-glob": "^4.0.3"
+      },
+      "engines": {
+        "node": ">=10.13.0"
+      }
+    },
+    "node_modules/globals": {
+      "version": "11.12.0",
+      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
+      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
+      "dev": true,
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/hasown": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
+      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
+      "dev": true,
+      "dependencies": {
+        "function-bind": "^1.1.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/is-binary-path": {
+      "version": "2.1.0",
+      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
+      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
+      "dev": true,
+      "dependencies": {
+        "binary-extensions": "^2.0.0"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/is-core-module": {
+      "version": "2.16.0",
+      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.0.tgz",
+      "integrity": "sha512-urTSINYfAYgcbLb0yDQ6egFm6h3Mo1DcF9EkyXSRjjzdHbsulg01qhwWuXdOoUBuTkbQ80KDboXa0vFJ+BDH+g==",
+      "dev": true,
+      "dependencies": {
+        "hasown": "^2.0.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/is-extglob": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
+      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/is-fullwidth-code-point": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/is-glob": {
+      "version": "4.0.3",
+      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
+      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
+      "dev": true,
+      "dependencies": {
+        "is-extglob": "^2.1.1"
+      },
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/is-number": {
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
+      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.12.0"
+      }
+    },
+    "node_modules/isexe": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
+      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
+      "dev": true
+    },
+    "node_modules/jackspeak": {
+      "version": "3.4.3",
+      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
+      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
+      "dev": true,
+      "dependencies": {
+        "@isaacs/cliui": "^8.0.2"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      },
+      "optionalDependencies": {
+        "@pkgjs/parseargs": "^0.11.0"
+      }
+    },
+    "node_modules/jiti": {
+      "version": "1.21.6",
+      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
+      "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
+      "dev": true,
+      "bin": {
+        "jiti": "bin/jiti.js"
+      }
+    },
+    "node_modules/js-tokens": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
+      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
+    },
+    "node_modules/jsesc": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
+      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
+      "dev": true,
+      "bin": {
+        "jsesc": "bin/jsesc"
+      },
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/json5": {
+      "version": "2.2.3",
+      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
+      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
+      "dev": true,
+      "bin": {
+        "json5": "lib/cli.js"
+      },
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/lilconfig": {
+      "version": "3.1.3",
+      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
+      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
+      "dev": true,
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/antonk52"
+      }
+    },
+    "node_modules/lines-and-columns": {
+      "version": "1.2.4",
+      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
+      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
+      "dev": true
+    },
+    "node_modules/loose-envify": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
+      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
+      "dependencies": {
+        "js-tokens": "^3.0.0 || ^4.0.0"
+      },
+      "bin": {
+        "loose-envify": "cli.js"
+      }
+    },
+    "node_modules/lru-cache": {
+      "version": "5.1.1",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
+      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
+      "dev": true,
+      "dependencies": {
+        "yallist": "^3.0.2"
+      }
+    },
+    "node_modules/merge2": {
+      "version": "1.4.1",
+      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
+      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
+      "dev": true,
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/micromatch": {
+      "version": "4.0.8",
+      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
+      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
+      "dev": true,
+      "dependencies": {
+        "braces": "^3.0.3",
+        "picomatch": "^2.3.1"
+      },
+      "engines": {
+        "node": ">=8.6"
+      }
+    },
+    "node_modules/minimatch": {
+      "version": "9.0.5",
+      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
+      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
+      "dev": true,
+      "dependencies": {
+        "brace-expansion": "^2.0.1"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/minipass": {
+      "version": "7.1.2",
+      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
+      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
+      "dev": true,
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      }
+    },
+    "node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "dev": true
+    },
+    "node_modules/mz": {
+      "version": "2.7.0",
+      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
+      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
+      "dev": true,
+      "dependencies": {
+        "any-promise": "^1.0.0",
+        "object-assign": "^4.0.1",
+        "thenify-all": "^1.0.0"
+      }
+    },
+    "node_modules/nanoid": {
+      "version": "3.3.8",
+      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
+      "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "bin": {
+        "nanoid": "bin/nanoid.cjs"
+      },
+      "engines": {
+        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
+      }
+    },
+    "node_modules/node-releases": {
+      "version": "2.0.19",
+      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
+      "integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
+      "dev": true
+    },
+    "node_modules/normalize-path": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
+      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/normalize-range": {
+      "version": "0.1.2",
+      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
+      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/object-assign": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
+      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/object-hash": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
+      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/package-json-from-dist": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
+      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
+      "dev": true
+    },
+    "node_modules/papaparse": {
+      "version": "5.4.1",
+      "resolved": "https://registry.npmjs.org/papaparse/-/papaparse-5.4.1.tgz",
+      "integrity": "sha512-HipMsgJkZu8br23pW15uvo6sib6wne/4woLZPlFf3rpDyMe9ywEXUsuD7+6K9PRkJlVT51j/sCOYDKGGS3ZJrw=="
+    },
+    "node_modules/path-key": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
+      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/path-parse": {
+      "version": "1.0.7",
+      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
+      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
+      "dev": true
+    },
+    "node_modules/path-scurry": {
+      "version": "1.11.1",
+      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
+      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
+      "dev": true,
+      "dependencies": {
+        "lru-cache": "^10.2.0",
+        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.18"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/path-scurry/node_modules/lru-cache": {
+      "version": "10.4.3",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
+      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
+      "dev": true
+    },
+    "node_modules/picocolors": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
+      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
+      "dev": true
+    },
+    "node_modules/picomatch": {
+      "version": "2.3.1",
+      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
+      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
+      "dev": true,
+      "engines": {
+        "node": ">=8.6"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/jonschlinkert"
+      }
+    },
+    "node_modules/pify": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
+      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/pirates": {
+      "version": "4.0.6",
+      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
+      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
+      "dev": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/postcss": {
+      "version": "8.4.49",
+      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
+      "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/postcss"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "nanoid": "^3.3.7",
+        "picocolors": "^1.1.1",
+        "source-map-js": "^1.2.1"
+      },
+      "engines": {
+        "node": "^10 || ^12 || >=14"
+      }
+    },
+    "node_modules/postcss-import": {
+      "version": "15.1.0",
+      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
+      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
+      "dev": true,
+      "dependencies": {
+        "postcss-value-parser": "^4.0.0",
+        "read-cache": "^1.0.0",
+        "resolve": "^1.1.7"
+      },
+      "engines": {
+        "node": ">=14.0.0"
+      },
+      "peerDependencies": {
+        "postcss": "^8.0.0"
+      }
+    },
+    "node_modules/postcss-js": {
+      "version": "4.0.1",
+      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
+      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
+      "dev": true,
+      "dependencies": {
+        "camelcase-css": "^2.0.1"
+      },
+      "engines": {
+        "node": "^12 || ^14 || >= 16"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/postcss/"
+      },
+      "peerDependencies": {
+        "postcss": "^8.4.21"
+      }
+    },
+    "node_modules/postcss-load-config": {
+      "version": "4.0.2",
+      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
+      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "lilconfig": "^3.0.0",
+        "yaml": "^2.3.4"
+      },
+      "engines": {
+        "node": ">= 14"
+      },
+      "peerDependencies": {
+        "postcss": ">=8.0.9",
+        "ts-node": ">=9.0.0"
+      },
+      "peerDependenciesMeta": {
+        "postcss": {
+          "optional": true
+        },
+        "ts-node": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/postcss-nested": {
+      "version": "6.2.0",
+      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
+      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "postcss-selector-parser": "^6.1.1"
+      },
+      "engines": {
+        "node": ">=12.0"
+      },
+      "peerDependencies": {
+        "postcss": "^8.2.14"
+      }
+    },
+    "node_modules/postcss-selector-parser": {
+      "version": "6.1.2",
+      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
+      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
+      "dev": true,
+      "dependencies": {
+        "cssesc": "^3.0.0",
+        "util-deprecate": "^1.0.2"
+      },
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/postcss-value-parser": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
+      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
+      "dev": true
+    },
+    "node_modules/queue-microtask": {
+      "version": "1.2.3",
+      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
+      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ]
+    },
+    "node_modules/react": {
+      "version": "18.3.1",
+      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
+      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
+      "dependencies": {
+        "loose-envify": "^1.1.0"
+      },
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/react-dom": {
+      "version": "18.3.1",
+      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
+      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
+      "dependencies": {
+        "loose-envify": "^1.1.0",
+        "scheduler": "^0.23.2"
+      },
+      "peerDependencies": {
+        "react": "^18.3.1"
+      }
+    },
+    "node_modules/react-refresh": {
+      "version": "0.14.2",
+      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
+      "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/react-tooltip": {
+      "version": "5.28.0",
+      "resolved": "https://registry.npmjs.org/react-tooltip/-/react-tooltip-5.28.0.tgz",
+      "integrity": "sha512-R5cO3JPPXk6FRbBHMO0rI9nkUG/JKfalBSQfZedZYzmqaZQgq7GLzF8vcCWx6IhUCKg0yPqJhXIzmIO5ff15xg==",
+      "dependencies": {
+        "@floating-ui/dom": "^1.6.1",
+        "classnames": "^2.3.0"
+      },
+      "peerDependencies": {
+        "react": ">=16.14.0",
+        "react-dom": ">=16.14.0"
+      }
+    },
+    "node_modules/read-cache": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
+      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
+      "dev": true,
+      "dependencies": {
+        "pify": "^2.3.0"
+      }
+    },
+    "node_modules/readdirp": {
+      "version": "3.6.0",
+      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
+      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
+      "dev": true,
+      "dependencies": {
+        "picomatch": "^2.2.1"
+      },
+      "engines": {
+        "node": ">=8.10.0"
+      }
+    },
+    "node_modules/resolve": {
+      "version": "1.22.9",
+      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.9.tgz",
+      "integrity": "sha512-QxrmX1DzraFIi9PxdG5VkRfRwIgjwyud+z/iBwfRRrVmHc+P9Q7u2lSSpQ6bjr2gy5lrqIiU9vb6iAeGf2400A==",
+      "dev": true,
+      "dependencies": {
+        "is-core-module": "^2.16.0",
+        "path-parse": "^1.0.7",
+        "supports-preserve-symlinks-flag": "^1.0.0"
+      },
+      "bin": {
+        "resolve": "bin/resolve"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/reusify": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
+      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
+      "dev": true,
+      "engines": {
+        "iojs": ">=1.0.0",
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/rollup": {
+      "version": "3.29.5",
+      "resolved": "https://registry.npmjs.org/rollup/-/rollup-3.29.5.tgz",
+      "integrity": "sha512-GVsDdsbJzzy4S/v3dqWPJ7EfvZJfCHiDqe80IyrF59LYuP+e6U1LJoUqeuqRbwAWoMNoXivMNeNAOf5E22VA1w==",
+      "dev": true,
+      "bin": {
+        "rollup": "dist/bin/rollup"
+      },
+      "engines": {
+        "node": ">=14.18.0",
+        "npm": ">=8.0.0"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/run-parallel": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
+      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "dependencies": {
+        "queue-microtask": "^1.2.2"
+      }
+    },
+    "node_modules/scheduler": {
+      "version": "0.23.2",
+      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
+      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
+      "dependencies": {
+        "loose-envify": "^1.1.0"
+      }
+    },
+    "node_modules/semver": {
+      "version": "6.3.1",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
+      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
+      "dev": true,
+      "bin": {
+        "semver": "bin/semver.js"
+      }
+    },
+    "node_modules/shebang-command": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
+      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
+      "dev": true,
+      "dependencies": {
+        "shebang-regex": "^3.0.0"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/shebang-regex": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
+      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/signal-exit": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
+      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
+      "dev": true,
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/source-map-js": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
+      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
+      "dev": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/string-width": {
+      "version": "5.1.2",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
+      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
+      "dev": true,
+      "dependencies": {
+        "eastasianwidth": "^0.2.0",
+        "emoji-regex": "^9.2.2",
+        "strip-ansi": "^7.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/string-width-cjs": {
+      "name": "string-width",
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
+      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
+      "dev": true,
+      "dependencies": {
+        "emoji-regex": "^8.0.0",
+        "is-fullwidth-code-point": "^3.0.0",
+        "strip-ansi": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/string-width-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/string-width-cjs/node_modules/emoji-regex": {
+      "version": "8.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
+      "dev": true
+    },
+    "node_modules/string-width-cjs/node_modules/strip-ansi": {
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/strip-ansi": {
+      "version": "7.1.0",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
+      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
+      }
+    },
+    "node_modules/strip-ansi-cjs": {
+      "name": "strip-ansi",
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/sucrase": {
+      "version": "3.35.0",
+      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
+      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
+      "dev": true,
+      "dependencies": {
+        "@jridgewell/gen-mapping": "^0.3.2",
+        "commander": "^4.0.0",
+        "glob": "^10.3.10",
+        "lines-and-columns": "^1.1.6",
+        "mz": "^2.7.0",
+        "pirates": "^4.0.1",
+        "ts-interface-checker": "^0.1.9"
+      },
+      "bin": {
+        "sucrase": "bin/sucrase",
+        "sucrase-node": "bin/sucrase-node"
+      },
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      }
+    },
+    "node_modules/supports-preserve-symlinks-flag": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
+      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
+      "dev": true,
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/tailwindcss": {
+      "version": "3.4.16",
+      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.16.tgz",
+      "integrity": "sha512-TI4Cyx7gDiZ6r44ewaJmt0o6BrMCT5aK5e0rmJ/G9Xq3w7CX/5VXl/zIPEJZFUK5VEqwByyhqNPycPlvcK4ZNw==",
+      "dev": true,
+      "dependencies": {
+        "@alloc/quick-lru": "^5.2.0",
+        "arg": "^5.0.2",
+        "chokidar": "^3.6.0",
+        "didyoumean": "^1.2.2",
+        "dlv": "^1.1.3",
+        "fast-glob": "^3.3.2",
+        "glob-parent": "^6.0.2",
+        "is-glob": "^4.0.3",
+        "jiti": "^1.21.6",
+        "lilconfig": "^3.1.3",
+        "micromatch": "^4.0.8",
+        "normalize-path": "^3.0.0",
+        "object-hash": "^3.0.0",
+        "picocolors": "^1.1.1",
+        "postcss": "^8.4.47",
+        "postcss-import": "^15.1.0",
+        "postcss-js": "^4.0.1",
+        "postcss-load-config": "^4.0.2",
+        "postcss-nested": "^6.2.0",
+        "postcss-selector-parser": "^6.1.2",
+        "resolve": "^1.22.8",
+        "sucrase": "^3.35.0"
+      },
+      "bin": {
+        "tailwind": "lib/cli.js",
+        "tailwindcss": "lib/cli.js"
+      },
+      "engines": {
+        "node": ">=14.0.0"
+      }
+    },
+    "node_modules/thenify": {
+      "version": "3.3.1",
+      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
+      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
+      "dev": true,
+      "dependencies": {
+        "any-promise": "^1.0.0"
+      }
+    },
+    "node_modules/thenify-all": {
+      "version": "1.6.0",
+      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
+      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
+      "dev": true,
+      "dependencies": {
+        "thenify": ">= 3.1.0 < 4"
+      },
+      "engines": {
+        "node": ">=0.8"
+      }
+    },
+    "node_modules/to-regex-range": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
+      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
+      "dev": true,
+      "dependencies": {
+        "is-number": "^7.0.0"
+      },
+      "engines": {
+        "node": ">=8.0"
+      }
+    },
+    "node_modules/ts-interface-checker": {
+      "version": "0.1.13",
+      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
+      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
+      "dev": true
+    },
+    "node_modules/update-browserslist-db": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
+      "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "dependencies": {
+        "escalade": "^3.2.0",
+        "picocolors": "^1.1.0"
+      },
+      "bin": {
+        "update-browserslist-db": "cli.js"
+      },
+      "peerDependencies": {
+        "browserslist": ">= 4.21.0"
+      }
+    },
+    "node_modules/util-deprecate": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
+      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
+      "dev": true
+    },
+    "node_modules/vite": {
+      "version": "4.5.5",
+      "resolved": "https://registry.npmjs.org/vite/-/vite-4.5.5.tgz",
+      "integrity": "sha512-ifW3Lb2sMdX+WU91s3R0FyQlAyLxOzCSCP37ujw0+r5POeHPwe6udWVIElKQq8gk3t7b8rkmvqC6IHBpCff4GQ==",
+      "dev": true,
+      "dependencies": {
+        "esbuild": "^0.18.10",
+        "postcss": "^8.4.27",
+        "rollup": "^3.27.1"
+      },
+      "bin": {
+        "vite": "bin/vite.js"
+      },
+      "engines": {
+        "node": "^14.18.0 || >=16.0.0"
+      },
+      "funding": {
+        "url": "https://github.com/vitejs/vite?sponsor=1"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.2"
+      },
+      "peerDependencies": {
+        "@types/node": ">= 14",
+        "less": "*",
+        "lightningcss": "^1.21.0",
+        "sass": "*",
+        "stylus": "*",
+        "sugarss": "*",
+        "terser": "^5.4.0"
+      },
+      "peerDependenciesMeta": {
+        "@types/node": {
+          "optional": true
+        },
+        "less": {
+          "optional": true
+        },
+        "lightningcss": {
+          "optional": true
+        },
+        "sass": {
+          "optional": true
+        },
+        "stylus": {
+          "optional": true
+        },
+        "sugarss": {
+          "optional": true
+        },
+        "terser": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/which": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
+      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
+      "dev": true,
+      "dependencies": {
+        "isexe": "^2.0.0"
+      },
+      "bin": {
+        "node-which": "bin/node-which"
+      },
+      "engines": {
+        "node": ">= 8"
+      }
+    },
+    "node_modules/wrap-ansi": {
+      "version": "8.1.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
+      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
+      "dev": true,
+      "dependencies": {
+        "ansi-styles": "^6.1.0",
+        "string-width": "^5.0.1",
+        "strip-ansi": "^7.0.1"
+      },
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs": {
+      "name": "wrap-ansi",
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
+      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
+      "dev": true,
+      "dependencies": {
+        "ansi-styles": "^4.0.0",
+        "string-width": "^4.1.0",
+        "strip-ansi": "^6.0.0"
+      },
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
+      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
+      "dev": true,
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
+      "version": "4.3.0",
+      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
+      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
+      "dev": true,
+      "dependencies": {
+        "color-convert": "^2.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
+      "version": "8.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
+      "dev": true
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
+      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
+      "dev": true,
+      "dependencies": {
+        "emoji-regex": "^8.0.0",
+        "is-fullwidth-code-point": "^3.0.0",
+        "strip-ansi": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/yallist": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
+      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
+      "dev": true
+    },
+    "node_modules/yaml": {
+      "version": "2.6.1",
+      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.6.1.tgz",
+      "integrity": "sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==",
+      "dev": true,
+      "bin": {
+        "yaml": "bin.mjs"
+      },
+      "engines": {
+        "node": ">= 14"
+      }
+    }
+  }
+}
+
+```
+
+### package.json
+
+```
+{
+  "name": "health-scenarios-dashboard",
+  "version": "3.0.0",
+  "description": "A dashboard visualizing various health scenarios with Tailwind CSS & Chart.js.",
+  "main": "index.js",
+  "scripts": {
+    "dev": "vite",
+    "build": "vite build",
+    "serve": "vite preview"
+  },
+  "author": "Your Team",
+  "license": "MIT",
+  "devDependencies": {
+    "@vitejs/plugin-react": "^4.0.3",
+    "autoprefixer": "^10.4.14",
+    "postcss": "^8.4.21",
+    "tailwindcss": "^3.3.2",
+    "vite": "^4.2.0"
+  },
+  "dependencies": {
+    "chart.js": "^4.3.0",
+    "papaparse": "^5.4.1",
+    "react": "^18.2.0",
+    "react-dom": "^18.2.0",
+    "react-tooltip": "^5.11.0"
+  }
+}
+
+```
+
+### postcss.config.js
+
+```
+export default {
+    plugins: {
+      tailwindcss: {},
+      autoprefixer: {},
+    },
+  }
+```
+
+### repindex/dependency_graph_exports.json
+
+```
+{
+    "nodes": [],
+    "edges": []
+}
+```
+
+### repindex/tree_structure.txt
+
+```
+.
+├── data
+│   ├── scenario_afib.csv
+│   ├── scenario_chf_afib.csv
+│   ├── scenario_elderly_infection.csv
+│   ├── scenario_hypertension.csv
+│   ├── scenario_hypertensive_emergency.csv
+│   ├── scenario_sepsis.csv
+│   └── scenario_sleep_apnea.csv
+├── index.html
+├── package-lock.json
+├── package.json
+├── postcss.config.js
+├── public
+│   └── data
+│       ├── scenario_afib.csv
+│       ├── scenario_chf_afib.csv
+│       ├── scenario_elderly_infection.csv
+│       ├── scenario_hypertension.csv
+│       ├── scenario_hypertensive_emergency.csv
+│       ├── scenario_sepsis.csv
+│       └── scenario_sleep_apnea.csv
+├── repindex
+├── src
+│   ├── App.jsx
+│   ├── components
+│   │   ├── ChartContainer.jsx
+│   │   ├── ControlPanel.jsx
+│   │   ├── ScenarioInfo.jsx
+│   │   └── ScenarioSelector.jsx
+│   ├── index.css
+│   ├── main.jsx
+│   └── utils
+│       ├── anomalyDetection.js
+│       ├── chartUtils.jsx
+│       ├── dataLoader.js
+│       └── scenarioInfo.js
+├── tailwind.config.js
+└── vite.config.js
+
+```
+
+### repindex/dependency_graph_full.json
+
+```
+{
+    "nodes": [],
+    "edges": []
+}
+```
+
+### repindex/top_level_structure.json
+
+```
+{}
+```
+
+### repindex/dependency_graph_imports.json
+
+```
+{
+    "nodes": [],
+    "edges": []
+}
+```
+
+### repindex/dependency_graph_no_objects.json
+
+```
+{
+    "nodes": [],
+    "edges": []
+}
+```
+
+### repindex/detailed_structure.json
+
+```
+{}
+```
+
+### public/data/scenario_elderly_infection.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SpO2
+0,58.0,36.8,120.0,81.0,11.0,5004.0,98.0
+1,62.0,36.9,122.0,79.0,12.0,4896.0,95.8
+2,64.0,36.7,123.0,80.0,12.0,4820.0,98.0
+3,66.0,37.1,120.0,81.0,13.0,4763.0,97.3
+4,67.0,37.3,120.0,82.0,13.0,4783.0,97.3
+5,68.0,37.1,117.0,82.0,13.0,4600.0,96.3
+6,69.0,37.2,128.0,82.0,13.0,4511.0,96.7
+7,71.0,37.5,122.0,83.0,14.0,4362.0,97.1
+8,74.0,37.6,126.0,84.0,14.0,4287.0,95.5
+9,74.0,37.4,124.0,83.0,14.0,3911.0,95.5
+10,75.0,37.6,124.0,85.0,14.0,3824.0,96.3
+11,76.0,37.6,126.0,85.0,15.0,3676.0,95.2
+12,78.0,37.6,127.0,84.0,14.0,3306.0,95.6
+13,78.0,37.8,125.0,86.0,15.0,3237.0,95.5
+14,79.0,37.9,127.0,85.0,15.0,2902.0,95.9
+15,83.0,37.9,130.0,88.0,16.0,2797.0,95.5
+16,85.0,38.0,133.0,88.0,16.0,2596.0,95.5
+17,83.0,38.2,127.0,88.0,16.0,2558.0,95.3
+18,87.0,38.0,136.0,87.0,16.0,2416.0,94.6
+19,90.0,38.4,134.0,89.0,16.0,2303.0,95.1
+20,89.0,38.2,131.0,90.0,16.0,2152.0,94.9
+21,91.0,38.4,133.0,90.0,17.0,2071.0,89.6
+22,95.0,38.5,135.0,87.0,17.0,2065.0,94.8
+23,95.0,38.3,135.0,90.0,16.0,2022.0,93.6
+
+```
+
+### public/data/scenario_sleep_apnea.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SleepHours,DeepSleepPercent,O2DesatEvents,AFibBurden
+0,61.0,37.0,121.0,81.0,12.0,8055.0,7.3,21.3,1.0,6.3
+1,64.0,37.1,124.0,81.0,12.0,7840.0,6.8,19.4,2.0,12.5
+2,68.0,36.9,125.0,81.0,12.0,7768.0,6.9,18.1,1.0,10.3
+3,70.0,37.0,127.0,82.0,13.0,7591.0,6.2,16.5,4.0,17.4
+4,70.0,37.0,129.0,82.0,14.0,7436.0,5.8,18.4,6.0,20.9
+5,75.0,37.0,130.0,85.0,14.0,7538.0,6.0,15.0,6.0,27.4
+6,81.0,37.0,136.0,84.0,13.0,7230.0,5.8,15.1,4.0,28.8
+7,85.0,37.0,136.0,85.0,14.0,7032.0,5.5,15.2,4.0,34.8
+8,86.0,37.0,137.0,87.0,14.0,6847.0,5.1,16.2,7.0,41.4
+9,92.0,37.0,139.0,86.0,14.0,6732.0,4.9,14.4,9.0,42.5
+10,98.0,37.0,140.0,89.0,14.0,6487.0,4.7,12.6,7.0,50.4
+11,98.0,37.1,144.0,89.0,15.0,6415.0,4.5,12.1,10.0,49.4
+12,101.0,37.0,146.0,91.0,15.0,6287.0,4.3,10.5,9.0,56.3
+13,106.0,37.0,145.0,91.0,16.0,6074.0,3.8,9.3,10.0,63.1
+
+```
+
+### public/data/scenario_hypertension.csv
+
+```
+
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,61.0,37.0,119.0,77.0,12.0,8007.0
+1,60.0,37.0,121.0,77.0,11.0,7973.0
+2,61.0,37.1,125.0,80.0,11.0,8004.0
+3,61.0,37.1,121.0,80.0,12.0,8079.0
+4,64.0,37.0,128.0,83.0,12.0,8011.0
+5,63.0,37.0,130.0,80.0,13.0,8004.0
+6,65.0,36.9,132.0,88.0,12.0,7968.0
+7,65.0,37.0,125.0,82.0,12.0,7950.0
+8,67.0,36.9,139.0,84.0,13.0,7906.0
+9,66.0,37.0,125.0,85.0,12.0,7959.0
+10,67.0,37.0,135.0,87.0,13.0,7878.0
+11,67.0,36.9,134.0,89.0,13.0,7817.0
+12,71.0,37.0,140.0,89.0,13.0,7880.0
+13,73.0,37.0,145.0,89.0,13.0,7818.0
+14,72.0,37.0,140.0,93.0,13.0,7820.0
+15,72.0,37.1,135.0,88.0,14.0,7885.0
+16,73.0,36.9,141.0,90.0,12.0,7888.0
+17,73.0,37.1,142.0,87.0,13.0,7825.0
+18,75.0,37.0,146.0,95.0,13.0,7833.0
+19,77.0,37.0,149.0,92.0,14.0,7690.0
+20,75.0,37.0,150.0,93.0,14.0,7666.0
+21,78.0,37.0,153.0,94.0,13.0,7582.0
+22,79.0,37.2,151.0,93.0,14.0,7577.0
+23,80.0,37.0,155.0,91.0,14.0,7453.0
+24,79.0,37.0,151.0,102.0,14.0,7483.0
+25,81.0,37.0,156.0,99.0,14.0,7419.0
+26,83.0,37.1,156.0,97.0,14.0,7375.0
+27,82.0,37.0,157.0,98.0,14.0,7890.0
+```
+
+### public/data/scenario_afib.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,AFibBurden
+0,61.0,37.1,129.0,80.0,12.0,7884.0,5.8
+1,59.0,37.1,129.0,84.0,13.0,7766.0,3.3
+2,63.0,36.8,135.0,84.0,11.0,7663.0,0.8
+3,73.0,36.9,134.0,81.0,13.0,7433.0,5.0
+4,63.0,37.1,138.0,84.0,13.0,7076.0,2.1
+5,70.0,37.0,149.0,89.0,13.0,7289.0,6.1
+6,70.0,37.1,144.0,91.0,13.0,7404.0,7.6
+7,75.0,37.1,147.0,87.0,15.0,7435.0,5.1
+8,72.0,37.2,150.0,91.0,12.0,7360.0,3.9
+9,78.0,37.1,160.0,92.0,14.0,7174.0,6.5
+10,81.0,36.9,163.0,93.0,14.0,7108.0,11.0
+11,79.0,37.1,157.0,97.0,15.0,7321.0,5.5
+12,77.0,37.2,169.0,100.0,15.0,7081.0,10.6
+13,90.0,37.3,170.0,99.0,15.0,7066.0,11.2
+14,85.0,37.0,177.0,102.0,16.0,6840.0,11.0
+15,92.0,37.0,172.0,100.0,16.0,6573.0,14.2
+16,90.0,37.1,180.0,107.0,16.0,6747.0,13.6
+17,94.0,36.9,189.0,104.0,16.0,6691.0,14.7
+18,97.0,37.2,183.0,108.0,16.0,6525.0,17.4
+19,101.0,36.9,197.0,109.0,16.0,6557.0,18.4
+20,99.0,37.1,194.0,113.0,16.0,6554.0,19.6
+21,105.0,37.0,196.0,116.0,17.0,6609.0,21.9
+22,104.0,36.9,197.0,115.0,19.0,6684.0,23.2
+23,110.0,37.0,205.0,116.0,19.0,6671.0,25.8
+24,119.0,37.1,218.0,119.0,17.0,6651.0,26.4
+25,115.0,37.0,211.0,127.0,18.0,6561.0,27.4
+26,131.0,36.9,219.0,122.0,20.0,6392.0,33.1
+27,122.0,36.9,220.0,125.0,17.0,6398.0,31.1
+28,125.0,36.9,228.0,130.0,21.0,6201.0,38.3
+29,130.0,36.8,231.0,132.0,20.0,6191.0,37.4
+
+```
+
+### public/data/scenario_hypertensive_emergency.csv
+
+```
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,Headache
+0,73.0,141.0,90.0,13.0,1024.0,6.4,N
+1,72.0,138.0,90.0,18.0,3176.0,5.2,N
+2,77.0,142.0,90.0,16.0,1020.0,6.0,N
+3,74.0,145.0,90.0,16.0,2868.0,5.3,N
+4,74.0,142.0,91.0,14.0,940.0,5.7,N
+5,74.0,139.0,91.0,16.0,2958.0,3.5,N
+6,75.0,148.0,92.0,14.0,992.0,5.3,N
+7,80.0,144.0,93.0,19.0,3100.0,7.1,N
+8,77.0,146.0,94.0,14.0,768.0,6.5,N
+9,72.0,148.0,91.0,16.0,2912.0,4.9,N
+10,74.0,146.0,94.0,12.0,1016.0,5.7,N
+11,76.0,148.0,93.0,18.0,3079.0,5.8,N
+12,74.0,147.0,95.0,13.0,1045.0,6.3,N
+13,76.0,153.0,95.0,16.0,2767.0,4.2,N
+14,73.0,151.0,94.0,16.0,1153.0,4.6,N
+15,77.0,153.0,95.0,17.0,3099.0,4.9,N
+16,73.0,149.0,95.0,12.0,983.0,4.7,N
+17,72.0,151.0,97.0,17.0,2622.0,3.6,N
+18,74.0,152.0,95.0,15.0,1003.0,3.7,N
+19,73.0,148.0,96.0,17.0,2878.0,4.5,N
+20,73.0,157.0,97.0,14.0,1023.0,6.2,N
+21,76.0,153.0,97.0,14.0,3289.0,3.4,N
+22,75.0,157.0,98.0,14.0,862.0,6.5,N
+23,74.0,154.0,99.0,17.0,2971.0,4.4,N
+24,77.0,154.0,99.0,14.0,1153.0,3.8,N
+25,72.0,157.0,97.0,17.0,3145.0,3.7,N
+26,75.0,154.0,100.0,14.0,1055.0,3.7,N
+27,75.0,158.0,98.0,18.0,2787.0,4.5,N
+28,75.0,159.0,100.0,13.0,970.0,4.1,N
+29,75.0,159.0,100.0,17.0,3199.0,5.4,N
+30,76.0,156.0,101.0,14.0,1045.0,3.9,N
+31,76.0,161.0,102.0,17.0,2791.0,5.7,Y
+32,75.0,163.0,103.0,14.0,1069.0,5.1,Y
+33,78.0,163.0,101.0,17.0,2563.0,3.8,Y
+34,80.0,165.0,101.0,13.0,1057.0,5.2,Y
+35,74.0,166.0,101.0,18.0,3029.0,5.1,Y
+36,75.0,164.0,100.0,14.0,1065.0,4.7,Y
+37,76.0,165.0,104.0,19.0,2760.0,4.0,Y
+38,75.0,165.0,103.0,14.0,1042.0,6.0,Y
+39,75.0,166.0,103.0,18.0,2794.0,4.9,Y
+40,76.0,167.0,104.0,15.0,879.0,3.0,Y
+41,73.0,170.0,103.0,19.0,2791.0,4.3,Y
+42,76.0,171.0,105.0,14.0,844.0,5.1,Y
+43,77.0,164.0,106.0,17.0,2654.0,5.5,Y
+44,76.0,167.0,106.0,13.0,890.0,6.0,Y
+45,72.0,167.0,106.0,16.0,2887.0,4.3,Y
+46,78.0,173.0,105.0,14.0,1151.0,5.6,Y
+47,76.0,174.0,104.0,16.0,3188.0,4.6,Y
+48,77.0,172.0,105.0,13.0,1158.0,5.4,Y
+49,76.0,174.0,106.0,17.0,3184.0,5.3,Y
+50,80.0,174.0,107.0,13.0,956.0,4.5,Y
+51,74.0,178.0,109.0,17.0,3019.0,5.4,Y
+52,75.0,175.0,107.0,14.0,739.0,4.2,Y
+53,74.0,174.0,108.0,18.0,2746.0,3.6,Y
+54,74.0,177.0,109.0,13.0,1122.0,5.0,Y
+55,75.0,178.0,111.0,17.0,3112.0,5.1,Y
+56,74.0,180.0,108.0,16.0,1183.0,4.1,Y
+57,76.0,175.0,110.0,17.0,2759.0,3.4,Y
+58,78.0,179.0,112.0,14.0,1194.0,4.4,Y
+59,75.0,176.0,109.0,18.0,2786.0,5.6,Y
+
+```
+
+### public/data/scenario_chf_afib.csv
+
+```
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,State
+0,111.0,207.0,118.0,23.0,107.0,40.5,LyingDown
+1,107.0,210.0,120.0,21.0,423.0,39.5,Exercise
+2,112.0,207.0,121.0,17.0,199.0,39.1,Rest
+3,111.0,210.0,118.0,23.0,51.0,40.2,LyingDown
+4,111.0,210.0,122.0,20.0,595.0,39.4,Exercise
+5,111.0,207.0,117.0,18.0,174.0,40.1,Rest
+6,108.0,209.0,121.0,24.0,121.0,39.1,LyingDown
+7,108.0,206.0,120.0,22.0,588.0,39.5,Exercise
+8,110.0,207.0,119.0,17.0,180.0,40.2,Rest
+9,111.0,212.0,115.0,23.0,97.0,38.7,LyingDown
+10,107.0,208.0,120.0,24.0,521.0,39.3,Exercise
+11,109.0,206.0,121.0,16.0,226.0,42.6,Rest
+12,109.0,210.0,119.0,22.0,145.0,38.7,LyingDown
+13,112.0,211.0,123.0,21.0,457.0,40.4,Exercise
+14,112.0,205.0,119.0,19.0,144.0,39.6,Rest
+15,106.0,209.0,119.0,22.0,108.0,41.0,LyingDown
+16,112.0,206.0,118.0,20.0,506.0,40.2,Exercise
+17,111.0,208.0,119.0,18.0,104.0,40.4,Rest
+18,110.0,209.0,119.0,24.0,72.0,41.4,LyingDown
+19,109.0,214.0,119.0,20.0,482.0,40.9,Exercise
+20,112.0,210.0,122.0,18.0,241.0,41.2,Rest
+
+```
+
+### public/data/scenario_sepsis.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,78.0,37.1,122.0,81.0,12.0,9969.0
+1,82.0,37.0,120.0,81.0,13.0,9720.0
+2,88.0,37.2,121.0,83.0,13.0,9575.0
+3,87.0,37.3,121.0,82.0,14.0,9281.0
+4,94.0,37.2,121.0,84.0,14.0,9068.0
+5,98.0,37.2,128.0,84.0,14.0,8750.0
+6,99.0,37.5,128.0,88.0,15.0,8326.0
+7,101.0,37.8,127.0,85.0,15.0,8021.0
+8,105.0,37.5,129.0,87.0,16.0,7730.0
+9,106.0,37.9,133.0,87.0,16.0,7060.0
+10,108.0,37.9,133.0,88.0,16.0,6631.0
+11,111.0,37.8,132.0,91.0,17.0,6108.0
+12,115.0,38.1,136.0,91.0,17.0,5732.0
+13,115.0,38.3,136.0,91.0,18.0,5165.0
+14,133.0,38.2,137.0,91.0,17.0,4924.0
+15,123.0,38.2,140.0,93.0,18.0,4487.0
+16,121.0,38.5,135.0,93.0,18.0,3940.0
+17,128.0,38.6,137.0,96.0,19.0,3709.0
+18,135.0,38.5,138.0,95.0,21.0,3177.0
+19,129.0,38.7,139.0,99.0,20.0,2833.0
+20,136.0,38.7,142.0,97.0,20.0,2702.0
+21,138.0,38.9,142.0,96.0,21.0,2567.0
+22,145.0,39.0,145.0,102.0,21.0,2225.0
+23,145.0,38.9,148.0,100.0,22.0,1794.0
+
+```
+
+### data/scenario_elderly_infection.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SpO2
+0,58.0,36.8,120.0,81.0,11.0,5004.0,98.0
+1,62.0,36.9,122.0,79.0,12.0,4896.0,95.8
+2,64.0,36.7,123.0,80.0,12.0,4820.0,98.0
+3,66.0,37.1,120.0,81.0,13.0,4763.0,97.3
+4,67.0,37.3,120.0,82.0,13.0,4783.0,97.3
+5,68.0,37.1,117.0,82.0,13.0,4600.0,96.3
+6,69.0,37.2,128.0,82.0,13.0,4511.0,96.7
+7,71.0,37.5,122.0,83.0,14.0,4362.0,97.1
+8,74.0,37.6,126.0,84.0,14.0,4287.0,95.5
+9,74.0,37.4,124.0,83.0,14.0,3911.0,95.5
+10,75.0,37.6,124.0,85.0,14.0,3824.0,96.3
+11,76.0,37.6,126.0,85.0,15.0,3676.0,95.2
+12,78.0,37.6,127.0,84.0,14.0,3306.0,95.6
+13,78.0,37.8,125.0,86.0,15.0,3237.0,95.5
+14,79.0,37.9,127.0,85.0,15.0,2902.0,95.9
+15,83.0,37.9,130.0,88.0,16.0,2797.0,95.5
+16,85.0,38.0,133.0,88.0,16.0,2596.0,95.5
+17,83.0,38.2,127.0,88.0,16.0,2558.0,95.3
+18,87.0,38.0,136.0,87.0,16.0,2416.0,94.6
+19,90.0,38.4,134.0,89.0,16.0,2303.0,95.1
+20,89.0,38.2,131.0,90.0,16.0,2152.0,94.9
+21,91.0,38.4,133.0,90.0,17.0,2071.0,89.6
+22,95.0,38.5,135.0,87.0,17.0,2065.0,94.8
+23,95.0,38.3,135.0,90.0,16.0,2022.0,93.6
+
+```
+
+### data/scenario_sleep_apnea.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SleepHours,DeepSleepPercent,O2DesatEvents,AFibBurden
+0,61.0,37.0,121.0,81.0,12.0,8055.0,7.3,21.3,1.0,6.3
+1,64.0,37.1,124.0,81.0,12.0,7840.0,6.8,19.4,2.0,12.5
+2,68.0,36.9,125.0,81.0,12.0,7768.0,6.9,18.1,1.0,10.3
+3,70.0,37.0,127.0,82.0,13.0,7591.0,6.2,16.5,4.0,17.4
+4,70.0,37.0,129.0,82.0,14.0,7436.0,5.8,18.4,6.0,20.9
+5,75.0,37.0,130.0,85.0,14.0,7538.0,6.0,15.0,6.0,27.4
+6,81.0,37.0,136.0,84.0,13.0,7230.0,5.8,15.1,4.0,28.8
+7,85.0,37.0,136.0,85.0,14.0,7032.0,5.5,15.2,4.0,34.8
+8,86.0,37.0,137.0,87.0,14.0,6847.0,5.1,16.2,7.0,41.4
+9,92.0,37.0,139.0,86.0,14.0,6732.0,4.9,14.4,9.0,42.5
+10,98.0,37.0,140.0,89.0,14.0,6487.0,4.7,12.6,7.0,50.4
+11,98.0,37.1,144.0,89.0,15.0,6415.0,4.5,12.1,10.0,49.4
+12,101.0,37.0,146.0,91.0,15.0,6287.0,4.3,10.5,9.0,56.3
+13,106.0,37.0,145.0,91.0,16.0,6074.0,3.8,9.3,10.0,63.1
+
+```
+
+### data/scenario_hypertension.csv
+
+```
+
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,61.0,37.0,119.0,77.0,12.0,8007.0
+1,60.0,37.0,121.0,77.0,11.0,7973.0
+2,61.0,37.1,125.0,80.0,11.0,8004.0
+3,61.0,37.1,121.0,80.0,12.0,8079.0
+4,64.0,37.0,128.0,83.0,12.0,8011.0
+5,63.0,37.0,130.0,80.0,13.0,8004.0
+6,65.0,36.9,132.0,88.0,12.0,7968.0
+7,65.0,37.0,125.0,82.0,12.0,7950.0
+8,67.0,36.9,139.0,84.0,13.0,7906.0
+9,66.0,37.0,125.0,85.0,12.0,7959.0
+10,67.0,37.0,135.0,87.0,13.0,7878.0
+11,67.0,36.9,134.0,89.0,13.0,7817.0
+12,71.0,37.0,140.0,89.0,13.0,7880.0
+13,73.0,37.0,145.0,89.0,13.0,7818.0
+14,72.0,37.0,140.0,93.0,13.0,7820.0
+15,72.0,37.1,135.0,88.0,14.0,7885.0
+16,73.0,36.9,141.0,90.0,12.0,7888.0
+17,73.0,37.1,142.0,87.0,13.0,7825.0
+18,75.0,37.0,146.0,95.0,13.0,7833.0
+19,77.0,37.0,149.0,92.0,14.0,7690.0
+20,75.0,37.0,150.0,93.0,14.0,7666.0
+21,78.0,37.0,153.0,94.0,13.0,7582.0
+22,79.0,37.2,151.0,93.0,14.0,7577.0
+23,80.0,37.0,155.0,91.0,14.0,7453.0
+24,79.0,37.0,151.0,102.0,14.0,7483.0
+25,81.0,37.0,156.0,99.0,14.0,7419.0
+26,83.0,37.1,156.0,97.0,14.0,7375.0
+27,82.0,37.0,157.0,98.0,14.0,7890.0
+```
+
+### data/scenario_afib.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,AFibBurden
+0,61.0,37.1,129.0,80.0,12.0,7884.0,5.8
+1,59.0,37.1,129.0,84.0,13.0,7766.0,3.3
+2,63.0,36.8,135.0,84.0,11.0,7663.0,0.8
+3,73.0,36.9,134.0,81.0,13.0,7433.0,5.0
+4,63.0,37.1,138.0,84.0,13.0,7076.0,2.1
+5,70.0,37.0,149.0,89.0,13.0,7289.0,6.1
+6,70.0,37.1,144.0,91.0,13.0,7404.0,7.6
+7,75.0,37.1,147.0,87.0,15.0,7435.0,5.1
+8,72.0,37.2,150.0,91.0,12.0,7360.0,3.9
+9,78.0,37.1,160.0,92.0,14.0,7174.0,6.5
+10,81.0,36.9,163.0,93.0,14.0,7108.0,11.0
+11,79.0,37.1,157.0,97.0,15.0,7321.0,5.5
+12,77.0,37.2,169.0,100.0,15.0,7081.0,10.6
+13,90.0,37.3,170.0,99.0,15.0,7066.0,11.2
+14,85.0,37.0,177.0,102.0,16.0,6840.0,11.0
+15,92.0,37.0,172.0,100.0,16.0,6573.0,14.2
+16,90.0,37.1,180.0,107.0,16.0,6747.0,13.6
+17,94.0,36.9,189.0,104.0,16.0,6691.0,14.7
+18,97.0,37.2,183.0,108.0,16.0,6525.0,17.4
+19,101.0,36.9,197.0,109.0,16.0,6557.0,18.4
+20,99.0,37.1,194.0,113.0,16.0,6554.0,19.6
+21,105.0,37.0,196.0,116.0,17.0,6609.0,21.9
+22,104.0,36.9,197.0,115.0,19.0,6684.0,23.2
+23,110.0,37.0,205.0,116.0,19.0,6671.0,25.8
+24,119.0,37.1,218.0,119.0,17.0,6651.0,26.4
+25,115.0,37.0,211.0,127.0,18.0,6561.0,27.4
+26,131.0,36.9,219.0,122.0,20.0,6392.0,33.1
+27,122.0,36.9,220.0,125.0,17.0,6398.0,31.1
+28,125.0,36.9,228.0,130.0,21.0,6201.0,38.3
+29,130.0,36.8,231.0,132.0,20.0,6191.0,37.4
+
+```
+
+### data/scenario_hypertensive_emergency.csv
+
+```
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,Headache
+0,73.0,141.0,90.0,13.0,1024.0,6.4,N
+1,72.0,138.0,90.0,18.0,3176.0,5.2,N
+2,77.0,142.0,90.0,16.0,1020.0,6.0,N
+3,74.0,145.0,90.0,16.0,2868.0,5.3,N
+4,74.0,142.0,91.0,14.0,940.0,5.7,N
+5,74.0,139.0,91.0,16.0,2958.0,3.5,N
+6,75.0,148.0,92.0,14.0,992.0,5.3,N
+7,80.0,144.0,93.0,19.0,3100.0,7.1,N
+8,77.0,146.0,94.0,14.0,768.0,6.5,N
+9,72.0,148.0,91.0,16.0,2912.0,4.9,N
+10,74.0,146.0,94.0,12.0,1016.0,5.7,N
+11,76.0,148.0,93.0,18.0,3079.0,5.8,N
+12,74.0,147.0,95.0,13.0,1045.0,6.3,N
+13,76.0,153.0,95.0,16.0,2767.0,4.2,N
+14,73.0,151.0,94.0,16.0,1153.0,4.6,N
+15,77.0,153.0,95.0,17.0,3099.0,4.9,N
+16,73.0,149.0,95.0,12.0,983.0,4.7,N
+17,72.0,151.0,97.0,17.0,2622.0,3.6,N
+18,74.0,152.0,95.0,15.0,1003.0,3.7,N
+19,73.0,148.0,96.0,17.0,2878.0,4.5,N
+20,73.0,157.0,97.0,14.0,1023.0,6.2,N
+21,76.0,153.0,97.0,14.0,3289.0,3.4,N
+22,75.0,157.0,98.0,14.0,862.0,6.5,N
+23,74.0,154.0,99.0,17.0,2971.0,4.4,N
+24,77.0,154.0,99.0,14.0,1153.0,3.8,N
+25,72.0,157.0,97.0,17.0,3145.0,3.7,N
+26,75.0,154.0,100.0,14.0,1055.0,3.7,N
+27,75.0,158.0,98.0,18.0,2787.0,4.5,N
+28,75.0,159.0,100.0,13.0,970.0,4.1,N
+29,75.0,159.0,100.0,17.0,3199.0,5.4,N
+30,76.0,156.0,101.0,14.0,1045.0,3.9,N
+31,76.0,161.0,102.0,17.0,2791.0,5.7,Y
+32,75.0,163.0,103.0,14.0,1069.0,5.1,Y
+33,78.0,163.0,101.0,17.0,2563.0,3.8,Y
+34,80.0,165.0,101.0,13.0,1057.0,5.2,Y
+35,74.0,166.0,101.0,18.0,3029.0,5.1,Y
+36,75.0,164.0,100.0,14.0,1065.0,4.7,Y
+37,76.0,165.0,104.0,19.0,2760.0,4.0,Y
+38,75.0,165.0,103.0,14.0,1042.0,6.0,Y
+39,75.0,166.0,103.0,18.0,2794.0,4.9,Y
+40,76.0,167.0,104.0,15.0,879.0,3.0,Y
+41,73.0,170.0,103.0,19.0,2791.0,4.3,Y
+42,76.0,171.0,105.0,14.0,844.0,5.1,Y
+43,77.0,164.0,106.0,17.0,2654.0,5.5,Y
+44,76.0,167.0,106.0,13.0,890.0,6.0,Y
+45,72.0,167.0,106.0,16.0,2887.0,4.3,Y
+46,78.0,173.0,105.0,14.0,1151.0,5.6,Y
+47,76.0,174.0,104.0,16.0,3188.0,4.6,Y
+48,77.0,172.0,105.0,13.0,1158.0,5.4,Y
+49,76.0,174.0,106.0,17.0,3184.0,5.3,Y
+50,80.0,174.0,107.0,13.0,956.0,4.5,Y
+51,74.0,178.0,109.0,17.0,3019.0,5.4,Y
+52,75.0,175.0,107.0,14.0,739.0,4.2,Y
+53,74.0,174.0,108.0,18.0,2746.0,3.6,Y
+54,74.0,177.0,109.0,13.0,1122.0,5.0,Y
+55,75.0,178.0,111.0,17.0,3112.0,5.1,Y
+56,74.0,180.0,108.0,16.0,1183.0,4.1,Y
+57,76.0,175.0,110.0,17.0,2759.0,3.4,Y
+58,78.0,179.0,112.0,14.0,1194.0,4.4,Y
+59,75.0,176.0,109.0,18.0,2786.0,5.6,Y
+
+```
+
+### data/scenario_chf_afib.csv
+
+```
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,State
+0,111.0,207.0,118.0,23.0,107.0,40.5,LyingDown
+1,107.0,210.0,120.0,21.0,423.0,39.5,Exercise
+2,112.0,207.0,121.0,17.0,199.0,39.1,Rest
+3,111.0,210.0,118.0,23.0,51.0,40.2,LyingDown
+4,111.0,210.0,122.0,20.0,595.0,39.4,Exercise
+5,111.0,207.0,117.0,18.0,174.0,40.1,Rest
+6,108.0,209.0,121.0,24.0,121.0,39.1,LyingDown
+7,108.0,206.0,120.0,22.0,588.0,39.5,Exercise
+8,110.0,207.0,119.0,17.0,180.0,40.2,Rest
+9,111.0,212.0,115.0,23.0,97.0,38.7,LyingDown
+10,107.0,208.0,120.0,24.0,521.0,39.3,Exercise
+11,109.0,206.0,121.0,16.0,226.0,42.6,Rest
+12,109.0,210.0,119.0,22.0,145.0,38.7,LyingDown
+13,112.0,211.0,123.0,21.0,457.0,40.4,Exercise
+14,112.0,205.0,119.0,19.0,144.0,39.6,Rest
+15,106.0,209.0,119.0,22.0,108.0,41.0,LyingDown
+16,112.0,206.0,118.0,20.0,506.0,40.2,Exercise
+17,111.0,208.0,119.0,18.0,104.0,40.4,Rest
+18,110.0,209.0,119.0,24.0,72.0,41.4,LyingDown
+19,109.0,214.0,119.0,20.0,482.0,40.9,Exercise
+20,112.0,210.0,122.0,18.0,241.0,41.2,Rest
+
+```
+
+### data/scenario_sepsis.csv
+
+```
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,78.0,37.1,122.0,81.0,12.0,9969.0
+1,82.0,37.0,120.0,81.0,13.0,9720.0
+2,88.0,37.2,121.0,83.0,13.0,9575.0
+3,87.0,37.3,121.0,82.0,14.0,9281.0
+4,94.0,37.2,121.0,84.0,14.0,9068.0
+5,98.0,37.2,128.0,84.0,14.0,8750.0
+6,99.0,37.5,128.0,88.0,15.0,8326.0
+7,101.0,37.8,127.0,85.0,15.0,8021.0
+8,105.0,37.5,129.0,87.0,16.0,7730.0
+9,106.0,37.9,133.0,87.0,16.0,7060.0
+10,108.0,37.9,133.0,88.0,16.0,6631.0
+11,111.0,37.8,132.0,91.0,17.0,6108.0
+12,115.0,38.1,136.0,91.0,17.0,5732.0
+13,115.0,38.3,136.0,91.0,18.0,5165.0
+14,133.0,38.2,137.0,91.0,17.0,4924.0
+15,123.0,38.2,140.0,93.0,18.0,4487.0
+16,121.0,38.5,135.0,93.0,18.0,3940.0
+17,128.0,38.6,137.0,96.0,19.0,3709.0
+18,135.0,38.5,138.0,95.0,21.0,3177.0
+19,129.0,38.7,139.0,99.0,20.0,2833.0
+20,136.0,38.7,142.0,97.0,20.0,2702.0
+21,138.0,38.9,142.0,96.0,21.0,2567.0
+22,145.0,39.0,145.0,102.0,21.0,2225.0
+23,145.0,38.9,148.0,100.0,22.0,1794.0
+
+```
+
+### src/index.css
+
+```css
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
+
+body {
+  @apply bg-white text-gray-800;
+}
+
+.theme-light {}
+.theme-dark {
+  @apply bg-gray-900 text-gray-100;
+}
+.theme-pastel {
+  @apply bg-amber-50 text-gray-700;
+}
+.theme-high-contrast {
+  @apply bg-white text-black;
+}
+```
+
+### src/main.jsx
+
+```
+import React from 'react'
+import ReactDOM from 'react-dom/client'
+import App from './App.jsx'
+import './index.css'
+
+ReactDOM.createRoot(document.getElementById('root')).render(
+  <React.StrictMode>
+    <App />
+  </React.StrictMode>
+)
+```
+
+### src/App.jsx
+
+```
+// src/App.jsx
+import React, { useState, useEffect } from 'react'
+import ScenarioSelector from './components/ScenarioSelector.jsx'
+import ScenarioInfo from './components/ScenarioInfo.jsx'
+import ControlPanel from './components/ControlPanel.jsx'
+import ChartContainer from './components/ChartContainer.jsx'
+import { loadScenarioData } from './utils/dataLoader.js'
+import { getScenarioInfo } from './utils/scenarioInfo.js'
+
+export default function App() {
+  const [selectedScenario, setSelectedScenario] = useState('sepsis')
+  const [scenarioData, setScenarioData] = useState(null)
+  const [loading, setLoading] = useState(false)
+  const [error, setError] = useState('')
+
+  // Chart options state
+  const [theme, setTheme] = useState('light')
+  const [chartType, setChartType] = useState('line')
+  const [visualOptions, setVisualOptions] = useState({
+    colorScheme: 'azure',
+    lineWeight: '2',
+    showPoints: true,
+    showGridX: true,
+    showGridY: true,
+    showTooltip: true,
+    showLegend: true,
+    showTitle: false,
+    showAnomalies: true,
+    areaOpacity: 0.2
+  })
+
+  useEffect(() => {
+    async function fetchData() {
+      setLoading(true)
+      setError('')
+      try {
+        const data = await loadScenarioData(selectedScenario)
+        setScenarioData(data)
+      } catch (err) {
+        setError('Failed to load data: ' + err.message)
+      } finally {
+        setLoading(false)
+      }
+    }
+    fetchData()
+  }, [selectedScenario])
+
+  const scenarioMeta = getScenarioInfo(selectedScenario)
+
+  const onVisualOptionChange = (option, value) => {
+    setVisualOptions(prev => ({ ...prev, [option]: value }))
+  }
+
+  return (
+    <div className={`min-h-screen px-6 py-8 transition-colors duration-300 theme-${theme}`}>
+      {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4 font-medium">{error}</div>}
+
+      <h1 className="text-2xl font-semibold mb-6">Healthcare Scenario Dashboard</h1>
+      <div className="space-y-6">
+        <ScenarioSelector selectedScenario={selectedScenario} onChange={setSelectedScenario}/>
+        {scenarioMeta && <ScenarioInfo scenarioMeta={scenarioMeta}/>}
+        <ControlPanel
+          theme={theme}
+          chartType={chartType}
+          onThemeChange={setTheme}
+          onChartTypeChange={setChartType}
+          visualOptions={visualOptions}
+          onVisualOptionChange={onVisualOptionChange}
+          scenario={selectedScenario}
+        />
+        {loading && <div className="text-center text-gray-500">Loading data...</div>}
+        {!loading && scenarioData && (
+          <ChartContainer
+            data={scenarioData}
+            chartType={chartType}
+            visualOptions={visualOptions}
+            scenario={selectedScenario}
+          />
+        )}
+      </div>
+    </div>
+  )
+}
+
+```
+
+### src/utils/chartUtils.jsx
+
+```
+// src/utils/chartUtils.jsx
+// Currently no logic needed, leaving file in place for future utilities.
+export {}
+
+```
+
+### src/utils/scenarioInfo.js
+
+```
+// src/utils/scenarioInfo.js
+export function getScenarioInfo(scenario) {
+  switch (scenario) {
+    case 'sepsis':
+      return {
+        title: 'Sepsis Scenario (Elderly Patient)',
+        timeframe: 'Data over 7 Days',
+        description: 'Tracking a patient’s vitals as they develop signs consistent with systemic infection and sepsis.',
+        keyMetrics: [
+          'Temperature: Rising ~37°C to 39°C',
+          'Heart Rate: Increasing ~60 → 120 bpm',
+          'Resp Rate: ~12 → 25',
+          'BP Drops Over Time',
+          'Activity Declines Significantly'
+        ],
+        clinicalSignificance: 'Consistent with sepsis, urgent medical attention is indicated.'
+      }
+    case 'sleep_apnea':
+      return {
+        title: 'Sleep & AFib/Apnea Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Worsening sleep quality, rising AFib burden, and respiratory disturbances.',
+        keyMetrics: [
+          'Sleep hours decrease',
+          'Deep sleep % reduced',
+          'AFib burden increases significantly',
+          'Increased O2 Desat Events'
+        ],
+        clinicalSignificance: 'Highlights interplay of sleep disorders and arrhythmias, requiring intervention.'
+      }
+    case 'chf_afib':
+      return {
+        title: 'CHF & High AFib Burden Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'High AFib burden, elevated HR/BP, poor exercise tolerance, signaling CHF decompensation risk.',
+        keyMetrics: [
+          'AFib ~40%',
+          'HR ~110 bpm',
+          'Very High BP',
+          'Low Activity Tolerance'
+        ],
+        clinicalSignificance: 'Severe hemodynamic stress suggests imminent CHF crisis.'
+      }
+    case 'hypertensive_emergency':
+      return {
+        title: 'Hypertensive Emergency Risk Scenario',
+        timeframe: 'Data over 30 Days',
+        description: 'Steady BP rise towards dangerous levels, stable HR, exertional RR ↑, headaches at high BP.',
+        keyMetrics: [
+          'BP: Rising to ~180/110',
+          'Headaches at critical thresholds',
+          'RR increases with exertion'
+        ],
+        clinicalSignificance: 'Warning of impending hypertensive emergency if unmanaged.'
+      }
+    case 'hypertension':
+      return {
+        title: 'Mild Hypertension Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Gradual increase in BP from near-normal to moderately high over a week.',
+        keyMetrics: [
+          'BP: 140/90 → 155/98',
+          'HR slight increase'
+        ],
+        clinicalSignificance: 'Early-stage hypertension requiring early interventions.'
+      }
+    case 'afib':
+      return {
+        title: 'AFib Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Increasing AFib burden and mild changes in HR and BP.',
+        keyMetrics: [
+          'AFib: 10% → 35%',
+          'Mild HR & BP increases'
+        ],
+        clinicalSignificance: 'Progressive arrhythmia severity may need intervention.'
+      }
+    case 'elderly_infection':
+      return {
+        title: 'Elderly Infection (Legacy Scenario)',
+        timeframe: 'Data over 7 Days',
+        description: 'Similar to sepsis: rising temp, HR, RR, dropping BP.',
+        keyMetrics: [
+          'Temp: 37.0 → 39.0 °C',
+          'HR: 60 → 115 bpm',
+          'RR: 12 → 24',
+          'BP drops'
+        ],
+        clinicalSignificance: 'Indicates possible infection leading to a sepsis-like state.'
+      }
+    default:
+      return null
+  }
+}
+
+```
+
+### src/utils/anomalyDetection.js
+
+```
+export function detectAnomalies(rows, metric) {
+  if (!rows || rows.length === 0) return []
+  const values = rows.map(r => (typeof r[metric] === 'number') ? r[metric] : NaN).filter(v => !isNaN(v))
+  if (values.length < 2) return []
+
+  const mean = values.reduce((a,b) => a+b,0)/values.length
+  const std = Math.sqrt(values.map(v => Math.pow(v-mean,2)).reduce((a,b) => a+b,0)/values.length)
+  
+  return values
+    .map((v,i) => Math.abs(v-mean) > 3*std ? i : -1)
+    .filter(i => i>=0)
+}
+```
+
+### src/utils/dataLoader.js
+
+```
+// src/utils/dataLoader.js
+import Papa from 'papaparse'
+
+const scenarioFiles = {
+  sepsis: 'scenario_sepsis.csv',
+  sleep_apnea: 'scenario_sleep_apnea.csv',
+  chf_afib: 'scenario_chf_afib.csv',
+  hypertensive_emergency: 'scenario_hypertensive_emergency.csv',
+  hypertension: 'scenario_hypertension.csv',
+  afib: 'scenario_afib.csv',
+  elderly_infection: 'scenario_elderly_infection.csv'
+}
+
+export async function loadScenarioData(scenario) {
+  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
+  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
+  if (!response.ok) throw new Error('Network error loading scenario data.')
+
+  const text = await response.text()
+  const parsed = Papa.parse(text, { header: true, dynamicTyping: true, skipEmptyLines: true })
+  if (parsed.errors && parsed.errors.length > 0) {
+    throw new Error('CSV parsing error: ' + parsed.errors.map(e => e.message).join(', '))
+  }
+
+  const rows = parsed.data.map(d => d)
+  const columns = parsed.meta.fields
+  return { rows, columns }
+}
+
+export async function exportScenarioData(scenario) {
+  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
+  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
+  if (!response.ok) throw new Error('Network error loading scenario data.')
+  const text = await response.text()
+
+  const blob = new Blob([text], { type: 'text/csv;charset=utf-8;' })
+  const url = URL.createObjectURL(blob)
+  const a = document.createElement('a')
+  a.href = url
+  a.download = `${scenario}.csv`
+  a.click()
+  URL.revokeObjectURL(url)
+}
+
+```
+
+### src/components/ScenarioInfo.jsx
+
+```
+import React from 'react'
+
+export default function ScenarioInfo({ scenarioMeta }) {
+  if (!scenarioMeta) return null
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
+      <h2 className="text-xl font-semibold mb-2">{scenarioMeta.title}</h2>
+      <div className="text-sm text-gray-500 mb-4">{scenarioMeta.timeframe}</div>
+      <p className="mb-4 text-gray-700">{scenarioMeta.description}</p>
+      <div className="mb-4">
+        <h3 className="text-lg font-medium mb-2">Key Clinical Indicators:</h3>
+        <ul className="space-y-1 text-gray-600 list-disc list-inside">
+          {scenarioMeta.keyMetrics.map((km, idx) => <li key={idx}>{km}</li>)}
+        </ul>
+      </div>
+      <div>
+        <h3 className="text-lg font-medium mb-2">Clinical Significance:</h3>
+        <p className="text-gray-700">{scenarioMeta.clinicalSignificance}</p>
+      </div>
+    </div>
+  )
+}
+```
+
+### src/components/ScenarioSelector.jsx
+
+```
+import React from 'react'
+
+export default function ScenarioSelector({ selectedScenario, onChange }) {
+  return (
+    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
+      <div className="flex flex-col space-y-2">
+        <label className="text-sm font-medium text-gray-600">Select Scenario:</label>
+        <select 
+          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+          value={selectedScenario} 
+          onChange={(e) => onChange(e.target.value)}
+        >
+          <option value="sepsis">Sepsis (Elderly Patient)</option>
+          <option value="sleep_apnea">Sleep & AFib/Apnea</option>
+          <option value="chf_afib">CHF & High AFib Burden</option>
+          <option value="hypertensive_emergency">Hypertensive Emergency</option>
+          <option value="hypertension">Mild Hypertension</option>
+          <option value="afib">AFib Scenario</option>
+          <option value="elderly_infection">Elderly Infection (Legacy)</option>
+        </select>
+      </div>
+    </div>
+  )
+}
+```
+
+### src/components/ChartContainer.jsx
+
+```
+// src/components/ChartContainer.jsx
+import React, { useMemo } from 'react'
+import { Line, Bar, Scatter } from 'react-chartjs-2'
+import {
+  Chart as ChartJS,
+  LineElement,
+  PointElement,
+  BarElement,
+  CategoryScale,
+  LinearScale,
+  Title,
+  Tooltip,
+  Legend
+} from 'chart.js'
+import { detectAnomalies } from '../utils/anomalyDetection.js'
+
+ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)
+
+export default function ChartContainer({ data, chartType, visualOptions, scenario }) {
+  const { rows, columns } = data
+  // Use Time as the X-axis
+  const metrics = columns.filter(c => c !== 'Time') // exclude Time from metrics, it's our x-axis
+
+  const anomaliesByMetric = useMemo(() => {
+    if (!visualOptions.showAnomalies) return {}
+    const anomalyResults = {}
+    metrics.forEach(metric => {
+      anomalyResults[metric] = detectAnomalies(rows, metric)
+    })
+    return anomalyResults
+  }, [rows, metrics, visualOptions.showAnomalies])
+
+  const chartData = useMemo(() => {
+    const baseColorSchemes = {
+      azure: ['#3b82f6', '#2563eb', '#38bdf8', '#0ea5e9', '#0284c7'],
+      emerald: ['#34d399', '#10b981', '#059669', '#65a30d', '#4ade80'],
+      violet: ['#a78bfa', '#8b5cf6', '#c084fc', '#9333ea', '#7e22ce'],
+      gray: ['#64748b', '#475569', '#94a3b8', '#1e293b', '#334155'],
+      black: ['#000000', '#111827', '#1f2937', '#374151', '#4b5563'],
+      pastel: ['#fda4af', '#f9a8d4', '#fbcfe8', '#fcd34d', '#f9fafb']
+    }
+
+    const palette = baseColorSchemes[visualOptions.colorScheme] || baseColorSchemes.azure
+
+    const mainDatasets = metrics.map((metric, idx) => {
+      const color = palette[idx % palette.length]
+      return {
+        label: metric,
+        data: rows.map(d => ({ x: d.Time, y: d[metric] })),
+        borderColor: color,
+        backgroundColor: (chartType === 'area') ? color : color,
+        borderWidth: parseFloat(visualOptions.lineWeight),
+        pointRadius: visualOptions.showPoints ? 3 : 0,
+        pointHoverRadius: visualOptions.showPoints ? 5 : 0,
+        pointHitRadius: 5,
+        fill: chartType === 'area' ? 'start' : false,
+        tension: 0.2
+      }
+    })
+
+    const anomalyDatasets = []
+    if (visualOptions.showAnomalies) {
+      metrics.forEach((metric) => {
+        const anomalyIndices = anomaliesByMetric[metric] || []
+        if (anomalyIndices.length > 0) {
+          const color = '#ef4444'
+          const anomalyData = anomalyIndices.map(i => {
+            return { x: rows[i].Time, y: rows[i][metric] }
+          })
+          anomalyDatasets.push({
+            label: metric + ' (Anomaly)',
+            data: anomalyData,
+            borderColor: color,
+            backgroundColor: color,
+            pointRadius: 6,
+            pointHoverRadius: 8,
+            showLine: false,
+            order: 0
+          })
+        }
+      })
+    }
+
+    return {
+      datasets: [...mainDatasets, ...anomalyDatasets]
+    }
+  }, [data, metrics, chartType, visualOptions, anomaliesByMetric, rows])
+
+  const options = useMemo(() => {
+    return {
+      responsive: true,
+      maintainAspectRatio: false,
+      interaction: {
+        mode: 'index',
+        intersect: false,
+      },
+      scales: {
+        x: {
+          type: 'linear',
+          title: {
+            display: true,
+            text: 'Time',
+            color: '#64748b'
+          },
+          ticks: {
+            color: '#64748b'
+          },
+          grid: {
+            color: visualOptions.showGridX ? '#e2e8f0' : 'transparent'
+          }
+        },
+        y: {
+          title: {
+            display: true,
+            text: 'Value',
+            color: '#64748b'
+          },
+          ticks: {
+            color: '#64748b'
+          },
+          grid: {
+            color: visualOptions.showGridY ? '#e2e8f0' : 'transparent'
+          }
+        }
+      },
+      plugins: {
+        legend: {
+          display: visualOptions.showLegend,
+          labels: {
+            color: '#64748b'
+          }
+        },
+        title: {
+          display: visualOptions.showTitle,
+          text: scenario.charAt(0).toUpperCase() + scenario.slice(1) + ' Scenario Data',
+          color: '#1e293b',
+          font: {
+            size: 18,
+            weight: '600'
+          },
+          padding: 20
+        },
+        tooltip: {
+          enabled: visualOptions.showTooltip,
+          backgroundColor: '#ffffff',
+          borderColor: '#e2e8f0',
+          borderWidth: 1,
+          bodyColor: '#1e293b',
+          titleColor: '#1e293b'
+        }
+      },
+      elements: {
+        line: {
+          fill: chartType === 'area' ? 'start' : false,
+          backgroundColor: chartType === 'area' ? `rgba(59,130,246,${visualOptions.areaOpacity})` : 'transparent'
+        }
+      }
+    }
+  }, [visualOptions, chartType, scenario])
+
+  const renderChart = () => {
+    if (chartType === 'bar') {
+      return <Bar data={chartData} options={options} />
+    } else if (chartType === 'scatter') {
+      return <Scatter data={chartData} options={options} />
+    } else {
+      // line or area
+      return <Line data={chartData} options={options} />
+    }
+  }
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm" style={{height: '500px'}}>
+      {renderChart()}
+    </div>
+  )
+}
+
+```
+
+### src/components/ControlPanel.jsx
+
+```
+import React from 'react'
+import { exportScenarioData } from '../utils/dataLoader.js'
+
+const ControlPanel = ({ 
+  theme, 
+  chartType, 
+  onThemeChange, 
+  onChartTypeChange,
+  visualOptions,
+  onVisualOptionChange,
+  scenario
+}) => {
+  const colorSchemes = {
+    azure: 'Azure',
+    emerald: 'Emerald',
+    violet: 'Violet',
+    gray: 'Gray',
+    black: 'Black',
+    pastel: 'Pastel'
+  }
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm space-y-4">
+      <div className="flex flex-wrap gap-3">
+        <button 
+          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
+          onClick={() => exportScenarioData(scenario)}
+        >
+          Export CSV
+        </button>
+      </div>
+      
+      <div className="grid md:grid-cols-3 gap-4">
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Theme</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={theme}
+            onChange={(e) => onThemeChange(e.target.value)}
+          >
+            <option value="light">Light</option>
+            <option value="dark">Dark</option>
+            <option value="pastel">Pastel</option>
+            <option value="high-contrast">High Contrast</option>
+          </select>
+        </div>
+
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Chart Type</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={chartType}
+            onChange={(e) => onChartTypeChange(e.target.value)}
+          >
+            <option value="line">Line</option>
+            <option value="area">Area</option>
+            <option value="bar">Bar</option>
+            <option value="scatter">Scatter</option>
+          </select>
+        </div>
+
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Color Palette</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={visualOptions.colorScheme}
+            onChange={(e) => onVisualOptionChange('colorScheme', e.target.value)}
+          >
+            {Object.entries(colorSchemes).map(([key, name]) => (
+              <option key={key} value={key}>{name}</option>
+            ))}
+          </select>
+        </div>
+      </div>
+
+      {chartType === 'area' && (
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Area Opacity</label>
+          <input
+            className="w-full"
+            type="range"
+            min="0.05"
+            max="0.5"
+            step="0.05"
+            value={visualOptions.areaOpacity}
+            onChange={(e) => onVisualOptionChange('areaOpacity', parseFloat(e.target.value))}
+          />
+        </div>
+      )}
+
+      <div className="flex flex-col space-y-2">
+        <label className="text-sm font-medium text-gray-600">Line Weight</label>
+        <select
+          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
+          value={visualOptions.lineWeight}
+          onChange={(e) => onVisualOptionChange('lineWeight', e.target.value)}
+        >
+          <option value="1">Thin</option>
+          <option value="1.5">Light</option>
+          <option value="2">Medium</option>
+          <option value="2.5">Bold</option>
+          <option value="3">Extra Bold</option>
+        </select>
+      </div>
+
+      <div className="grid md:grid-cols-4 gap-4 mt-4">
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showPoints}
+            onChange={(e) => onVisualOptionChange('showPoints', e.target.checked)}
+          />
+          <span>Data Points</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showTooltip}
+            onChange={(e) => onVisualOptionChange('showTooltip', e.target.checked)}
+          />
+          <span>Tooltips</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showGridX}
+            onChange={(e) => onVisualOptionChange('showGridX', e.target.checked)}
+          />
+          <span>Grid X</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showGridY}
+            onChange={(e) => onVisualOptionChange('showGridY', e.target.checked)}
+          />
+          <span>Grid Y</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showLegend}
+            onChange={(e) => onVisualOptionChange('showLegend', e.target.checked)}
+          />
+          <span>Legend</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showTitle}
+            onChange={(e) => onVisualOptionChange('showTitle', e.target.checked)}
+          />
+          <span>Show Title</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showAnomalies}
+            onChange={(e) => onVisualOptionChange('showAnomalies', e.target.checked)}
+          />
+          <span>Show Anomalies</span>
+        </label>
+      </div>
+    </div>
+  )
+}
+
+export default ControlPanel
+```
+
```

### repindex/dependency_graph_imports.json

```diff
--- old
+++ new
@@ -0,0 +1,4 @@
+{
+    "nodes": [],
+    "edges": []
+}
```

### repindex/dependency_graph_no_objects.json

```diff
--- old
+++ new
@@ -0,0 +1,4 @@
+{
+    "nodes": [],
+    "edges": []
+}
```

### repindex/detailed_structure.json

```diff
--- old
+++ new
@@ -0,0 +1 @@
+{}
```

### public/data/scenario_elderly_infection.csv

```diff
--- old
+++ new
@@ -0,0 +1,25 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SpO2
+0,58.0,36.8,120.0,81.0,11.0,5004.0,98.0
+1,62.0,36.9,122.0,79.0,12.0,4896.0,95.8
+2,64.0,36.7,123.0,80.0,12.0,4820.0,98.0
+3,66.0,37.1,120.0,81.0,13.0,4763.0,97.3
+4,67.0,37.3,120.0,82.0,13.0,4783.0,97.3
+5,68.0,37.1,117.0,82.0,13.0,4600.0,96.3
+6,69.0,37.2,128.0,82.0,13.0,4511.0,96.7
+7,71.0,37.5,122.0,83.0,14.0,4362.0,97.1
+8,74.0,37.6,126.0,84.0,14.0,4287.0,95.5
+9,74.0,37.4,124.0,83.0,14.0,3911.0,95.5
+10,75.0,37.6,124.0,85.0,14.0,3824.0,96.3
+11,76.0,37.6,126.0,85.0,15.0,3676.0,95.2
+12,78.0,37.6,127.0,84.0,14.0,3306.0,95.6
+13,78.0,37.8,125.0,86.0,15.0,3237.0,95.5
+14,79.0,37.9,127.0,85.0,15.0,2902.0,95.9
+15,83.0,37.9,130.0,88.0,16.0,2797.0,95.5
+16,85.0,38.0,133.0,88.0,16.0,2596.0,95.5
+17,83.0,38.2,127.0,88.0,16.0,2558.0,95.3
+18,87.0,38.0,136.0,87.0,16.0,2416.0,94.6
+19,90.0,38.4,134.0,89.0,16.0,2303.0,95.1
+20,89.0,38.2,131.0,90.0,16.0,2152.0,94.9
+21,91.0,38.4,133.0,90.0,17.0,2071.0,89.6
+22,95.0,38.5,135.0,87.0,17.0,2065.0,94.8
+23,95.0,38.3,135.0,90.0,16.0,2022.0,93.6
```

### public/data/scenario_sleep_apnea.csv

```diff
--- old
+++ new
@@ -0,0 +1,15 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SleepHours,DeepSleepPercent,O2DesatEvents,AFibBurden
+0,61.0,37.0,121.0,81.0,12.0,8055.0,7.3,21.3,1.0,6.3
+1,64.0,37.1,124.0,81.0,12.0,7840.0,6.8,19.4,2.0,12.5
+2,68.0,36.9,125.0,81.0,12.0,7768.0,6.9,18.1,1.0,10.3
+3,70.0,37.0,127.0,82.0,13.0,7591.0,6.2,16.5,4.0,17.4
+4,70.0,37.0,129.0,82.0,14.0,7436.0,5.8,18.4,6.0,20.9
+5,75.0,37.0,130.0,85.0,14.0,7538.0,6.0,15.0,6.0,27.4
+6,81.0,37.0,136.0,84.0,13.0,7230.0,5.8,15.1,4.0,28.8
+7,85.0,37.0,136.0,85.0,14.0,7032.0,5.5,15.2,4.0,34.8
+8,86.0,37.0,137.0,87.0,14.0,6847.0,5.1,16.2,7.0,41.4
+9,92.0,37.0,139.0,86.0,14.0,6732.0,4.9,14.4,9.0,42.5
+10,98.0,37.0,140.0,89.0,14.0,6487.0,4.7,12.6,7.0,50.4
+11,98.0,37.1,144.0,89.0,15.0,6415.0,4.5,12.1,10.0,49.4
+12,101.0,37.0,146.0,91.0,15.0,6287.0,4.3,10.5,9.0,56.3
+13,106.0,37.0,145.0,91.0,16.0,6074.0,3.8,9.3,10.0,63.1
```

### public/data/scenario_hypertension.csv

```diff
--- old
+++ new
@@ -0,0 +1,30 @@
+
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,61.0,37.0,119.0,77.0,12.0,8007.0
+1,60.0,37.0,121.0,77.0,11.0,7973.0
+2,61.0,37.1,125.0,80.0,11.0,8004.0
+3,61.0,37.1,121.0,80.0,12.0,8079.0
+4,64.0,37.0,128.0,83.0,12.0,8011.0
+5,63.0,37.0,130.0,80.0,13.0,8004.0
+6,65.0,36.9,132.0,88.0,12.0,7968.0
+7,65.0,37.0,125.0,82.0,12.0,7950.0
+8,67.0,36.9,139.0,84.0,13.0,7906.0
+9,66.0,37.0,125.0,85.0,12.0,7959.0
+10,67.0,37.0,135.0,87.0,13.0,7878.0
+11,67.0,36.9,134.0,89.0,13.0,7817.0
+12,71.0,37.0,140.0,89.0,13.0,7880.0
+13,73.0,37.0,145.0,89.0,13.0,7818.0
+14,72.0,37.0,140.0,93.0,13.0,7820.0
+15,72.0,37.1,135.0,88.0,14.0,7885.0
+16,73.0,36.9,141.0,90.0,12.0,7888.0
+17,73.0,37.1,142.0,87.0,13.0,7825.0
+18,75.0,37.0,146.0,95.0,13.0,7833.0
+19,77.0,37.0,149.0,92.0,14.0,7690.0
+20,75.0,37.0,150.0,93.0,14.0,7666.0
+21,78.0,37.0,153.0,94.0,13.0,7582.0
+22,79.0,37.2,151.0,93.0,14.0,7577.0
+23,80.0,37.0,155.0,91.0,14.0,7453.0
+24,79.0,37.0,151.0,102.0,14.0,7483.0
+25,81.0,37.0,156.0,99.0,14.0,7419.0
+26,83.0,37.1,156.0,97.0,14.0,7375.0
+27,82.0,37.0,157.0,98.0,14.0,7890.0
```

### public/data/scenario_afib.csv

```diff
--- old
+++ new
@@ -0,0 +1,31 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,AFibBurden
+0,61.0,37.1,129.0,80.0,12.0,7884.0,5.8
+1,59.0,37.1,129.0,84.0,13.0,7766.0,3.3
+2,63.0,36.8,135.0,84.0,11.0,7663.0,0.8
+3,73.0,36.9,134.0,81.0,13.0,7433.0,5.0
+4,63.0,37.1,138.0,84.0,13.0,7076.0,2.1
+5,70.0,37.0,149.0,89.0,13.0,7289.0,6.1
+6,70.0,37.1,144.0,91.0,13.0,7404.0,7.6
+7,75.0,37.1,147.0,87.0,15.0,7435.0,5.1
+8,72.0,37.2,150.0,91.0,12.0,7360.0,3.9
+9,78.0,37.1,160.0,92.0,14.0,7174.0,6.5
+10,81.0,36.9,163.0,93.0,14.0,7108.0,11.0
+11,79.0,37.1,157.0,97.0,15.0,7321.0,5.5
+12,77.0,37.2,169.0,100.0,15.0,7081.0,10.6
+13,90.0,37.3,170.0,99.0,15.0,7066.0,11.2
+14,85.0,37.0,177.0,102.0,16.0,6840.0,11.0
+15,92.0,37.0,172.0,100.0,16.0,6573.0,14.2
+16,90.0,37.1,180.0,107.0,16.0,6747.0,13.6
+17,94.0,36.9,189.0,104.0,16.0,6691.0,14.7
+18,97.0,37.2,183.0,108.0,16.0,6525.0,17.4
+19,101.0,36.9,197.0,109.0,16.0,6557.0,18.4
+20,99.0,37.1,194.0,113.0,16.0,6554.0,19.6
+21,105.0,37.0,196.0,116.0,17.0,6609.0,21.9
+22,104.0,36.9,197.0,115.0,19.0,6684.0,23.2
+23,110.0,37.0,205.0,116.0,19.0,6671.0,25.8
+24,119.0,37.1,218.0,119.0,17.0,6651.0,26.4
+25,115.0,37.0,211.0,127.0,18.0,6561.0,27.4
+26,131.0,36.9,219.0,122.0,20.0,6392.0,33.1
+27,122.0,36.9,220.0,125.0,17.0,6398.0,31.1
+28,125.0,36.9,228.0,130.0,21.0,6201.0,38.3
+29,130.0,36.8,231.0,132.0,20.0,6191.0,37.4
```

### public/data/scenario_hypertensive_emergency.csv

```diff
--- old
+++ new
@@ -0,0 +1,61 @@
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,Headache
+0,73.0,141.0,90.0,13.0,1024.0,6.4,N
+1,72.0,138.0,90.0,18.0,3176.0,5.2,N
+2,77.0,142.0,90.0,16.0,1020.0,6.0,N
+3,74.0,145.0,90.0,16.0,2868.0,5.3,N
+4,74.0,142.0,91.0,14.0,940.0,5.7,N
+5,74.0,139.0,91.0,16.0,2958.0,3.5,N
+6,75.0,148.0,92.0,14.0,992.0,5.3,N
+7,80.0,144.0,93.0,19.0,3100.0,7.1,N
+8,77.0,146.0,94.0,14.0,768.0,6.5,N
+9,72.0,148.0,91.0,16.0,2912.0,4.9,N
+10,74.0,146.0,94.0,12.0,1016.0,5.7,N
+11,76.0,148.0,93.0,18.0,3079.0,5.8,N
+12,74.0,147.0,95.0,13.0,1045.0,6.3,N
+13,76.0,153.0,95.0,16.0,2767.0,4.2,N
+14,73.0,151.0,94.0,16.0,1153.0,4.6,N
+15,77.0,153.0,95.0,17.0,3099.0,4.9,N
+16,73.0,149.0,95.0,12.0,983.0,4.7,N
+17,72.0,151.0,97.0,17.0,2622.0,3.6,N
+18,74.0,152.0,95.0,15.0,1003.0,3.7,N
+19,73.0,148.0,96.0,17.0,2878.0,4.5,N
+20,73.0,157.0,97.0,14.0,1023.0,6.2,N
+21,76.0,153.0,97.0,14.0,3289.0,3.4,N
+22,75.0,157.0,98.0,14.0,862.0,6.5,N
+23,74.0,154.0,99.0,17.0,2971.0,4.4,N
+24,77.0,154.0,99.0,14.0,1153.0,3.8,N
+25,72.0,157.0,97.0,17.0,3145.0,3.7,N
+26,75.0,154.0,100.0,14.0,1055.0,3.7,N
+27,75.0,158.0,98.0,18.0,2787.0,4.5,N
+28,75.0,159.0,100.0,13.0,970.0,4.1,N
+29,75.0,159.0,100.0,17.0,3199.0,5.4,N
+30,76.0,156.0,101.0,14.0,1045.0,3.9,N
+31,76.0,161.0,102.0,17.0,2791.0,5.7,Y
+32,75.0,163.0,103.0,14.0,1069.0,5.1,Y
+33,78.0,163.0,101.0,17.0,2563.0,3.8,Y
+34,80.0,165.0,101.0,13.0,1057.0,5.2,Y
+35,74.0,166.0,101.0,18.0,3029.0,5.1,Y
+36,75.0,164.0,100.0,14.0,1065.0,4.7,Y
+37,76.0,165.0,104.0,19.0,2760.0,4.0,Y
+38,75.0,165.0,103.0,14.0,1042.0,6.0,Y
+39,75.0,166.0,103.0,18.0,2794.0,4.9,Y
+40,76.0,167.0,104.0,15.0,879.0,3.0,Y
+41,73.0,170.0,103.0,19.0,2791.0,4.3,Y
+42,76.0,171.0,105.0,14.0,844.0,5.1,Y
+43,77.0,164.0,106.0,17.0,2654.0,5.5,Y
+44,76.0,167.0,106.0,13.0,890.0,6.0,Y
+45,72.0,167.0,106.0,16.0,2887.0,4.3,Y
+46,78.0,173.0,105.0,14.0,1151.0,5.6,Y
+47,76.0,174.0,104.0,16.0,3188.0,4.6,Y
+48,77.0,172.0,105.0,13.0,1158.0,5.4,Y
+49,76.0,174.0,106.0,17.0,3184.0,5.3,Y
+50,80.0,174.0,107.0,13.0,956.0,4.5,Y
+51,74.0,178.0,109.0,17.0,3019.0,5.4,Y
+52,75.0,175.0,107.0,14.0,739.0,4.2,Y
+53,74.0,174.0,108.0,18.0,2746.0,3.6,Y
+54,74.0,177.0,109.0,13.0,1122.0,5.0,Y
+55,75.0,178.0,111.0,17.0,3112.0,5.1,Y
+56,74.0,180.0,108.0,16.0,1183.0,4.1,Y
+57,76.0,175.0,110.0,17.0,2759.0,3.4,Y
+58,78.0,179.0,112.0,14.0,1194.0,4.4,Y
+59,75.0,176.0,109.0,18.0,2786.0,5.6,Y
```

### public/data/scenario_chf_afib.csv

```diff
--- old
+++ new
@@ -0,0 +1,22 @@
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,State
+0,111.0,207.0,118.0,23.0,107.0,40.5,LyingDown
+1,107.0,210.0,120.0,21.0,423.0,39.5,Exercise
+2,112.0,207.0,121.0,17.0,199.0,39.1,Rest
+3,111.0,210.0,118.0,23.0,51.0,40.2,LyingDown
+4,111.0,210.0,122.0,20.0,595.0,39.4,Exercise
+5,111.0,207.0,117.0,18.0,174.0,40.1,Rest
+6,108.0,209.0,121.0,24.0,121.0,39.1,LyingDown
+7,108.0,206.0,120.0,22.0,588.0,39.5,Exercise
+8,110.0,207.0,119.0,17.0,180.0,40.2,Rest
+9,111.0,212.0,115.0,23.0,97.0,38.7,LyingDown
+10,107.0,208.0,120.0,24.0,521.0,39.3,Exercise
+11,109.0,206.0,121.0,16.0,226.0,42.6,Rest
+12,109.0,210.0,119.0,22.0,145.0,38.7,LyingDown
+13,112.0,211.0,123.0,21.0,457.0,40.4,Exercise
+14,112.0,205.0,119.0,19.0,144.0,39.6,Rest
+15,106.0,209.0,119.0,22.0,108.0,41.0,LyingDown
+16,112.0,206.0,118.0,20.0,506.0,40.2,Exercise
+17,111.0,208.0,119.0,18.0,104.0,40.4,Rest
+18,110.0,209.0,119.0,24.0,72.0,41.4,LyingDown
+19,109.0,214.0,119.0,20.0,482.0,40.9,Exercise
+20,112.0,210.0,122.0,18.0,241.0,41.2,Rest
```

### public/data/scenario_sepsis.csv

```diff
--- old
+++ new
@@ -0,0 +1,25 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,78.0,37.1,122.0,81.0,12.0,9969.0
+1,82.0,37.0,120.0,81.0,13.0,9720.0
+2,88.0,37.2,121.0,83.0,13.0,9575.0
+3,87.0,37.3,121.0,82.0,14.0,9281.0
+4,94.0,37.2,121.0,84.0,14.0,9068.0
+5,98.0,37.2,128.0,84.0,14.0,8750.0
+6,99.0,37.5,128.0,88.0,15.0,8326.0
+7,101.0,37.8,127.0,85.0,15.0,8021.0
+8,105.0,37.5,129.0,87.0,16.0,7730.0
+9,106.0,37.9,133.0,87.0,16.0,7060.0
+10,108.0,37.9,133.0,88.0,16.0,6631.0
+11,111.0,37.8,132.0,91.0,17.0,6108.0
+12,115.0,38.1,136.0,91.0,17.0,5732.0
+13,115.0,38.3,136.0,91.0,18.0,5165.0
+14,133.0,38.2,137.0,91.0,17.0,4924.0
+15,123.0,38.2,140.0,93.0,18.0,4487.0
+16,121.0,38.5,135.0,93.0,18.0,3940.0
+17,128.0,38.6,137.0,96.0,19.0,3709.0
+18,135.0,38.5,138.0,95.0,21.0,3177.0
+19,129.0,38.7,139.0,99.0,20.0,2833.0
+20,136.0,38.7,142.0,97.0,20.0,2702.0
+21,138.0,38.9,142.0,96.0,21.0,2567.0
+22,145.0,39.0,145.0,102.0,21.0,2225.0
+23,145.0,38.9,148.0,100.0,22.0,1794.0
```

### data/scenario_elderly_infection.csv

```diff
--- old
+++ new
@@ -0,0 +1,25 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SpO2
+0,58.0,36.8,120.0,81.0,11.0,5004.0,98.0
+1,62.0,36.9,122.0,79.0,12.0,4896.0,95.8
+2,64.0,36.7,123.0,80.0,12.0,4820.0,98.0
+3,66.0,37.1,120.0,81.0,13.0,4763.0,97.3
+4,67.0,37.3,120.0,82.0,13.0,4783.0,97.3
+5,68.0,37.1,117.0,82.0,13.0,4600.0,96.3
+6,69.0,37.2,128.0,82.0,13.0,4511.0,96.7
+7,71.0,37.5,122.0,83.0,14.0,4362.0,97.1
+8,74.0,37.6,126.0,84.0,14.0,4287.0,95.5
+9,74.0,37.4,124.0,83.0,14.0,3911.0,95.5
+10,75.0,37.6,124.0,85.0,14.0,3824.0,96.3
+11,76.0,37.6,126.0,85.0,15.0,3676.0,95.2
+12,78.0,37.6,127.0,84.0,14.0,3306.0,95.6
+13,78.0,37.8,125.0,86.0,15.0,3237.0,95.5
+14,79.0,37.9,127.0,85.0,15.0,2902.0,95.9
+15,83.0,37.9,130.0,88.0,16.0,2797.0,95.5
+16,85.0,38.0,133.0,88.0,16.0,2596.0,95.5
+17,83.0,38.2,127.0,88.0,16.0,2558.0,95.3
+18,87.0,38.0,136.0,87.0,16.0,2416.0,94.6
+19,90.0,38.4,134.0,89.0,16.0,2303.0,95.1
+20,89.0,38.2,131.0,90.0,16.0,2152.0,94.9
+21,91.0,38.4,133.0,90.0,17.0,2071.0,89.6
+22,95.0,38.5,135.0,87.0,17.0,2065.0,94.8
+23,95.0,38.3,135.0,90.0,16.0,2022.0,93.6
```

### data/scenario_sleep_apnea.csv

```diff
--- old
+++ new
@@ -0,0 +1,15 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,SleepHours,DeepSleepPercent,O2DesatEvents,AFibBurden
+0,61.0,37.0,121.0,81.0,12.0,8055.0,7.3,21.3,1.0,6.3
+1,64.0,37.1,124.0,81.0,12.0,7840.0,6.8,19.4,2.0,12.5
+2,68.0,36.9,125.0,81.0,12.0,7768.0,6.9,18.1,1.0,10.3
+3,70.0,37.0,127.0,82.0,13.0,7591.0,6.2,16.5,4.0,17.4
+4,70.0,37.0,129.0,82.0,14.0,7436.0,5.8,18.4,6.0,20.9
+5,75.0,37.0,130.0,85.0,14.0,7538.0,6.0,15.0,6.0,27.4
+6,81.0,37.0,136.0,84.0,13.0,7230.0,5.8,15.1,4.0,28.8
+7,85.0,37.0,136.0,85.0,14.0,7032.0,5.5,15.2,4.0,34.8
+8,86.0,37.0,137.0,87.0,14.0,6847.0,5.1,16.2,7.0,41.4
+9,92.0,37.0,139.0,86.0,14.0,6732.0,4.9,14.4,9.0,42.5
+10,98.0,37.0,140.0,89.0,14.0,6487.0,4.7,12.6,7.0,50.4
+11,98.0,37.1,144.0,89.0,15.0,6415.0,4.5,12.1,10.0,49.4
+12,101.0,37.0,146.0,91.0,15.0,6287.0,4.3,10.5,9.0,56.3
+13,106.0,37.0,145.0,91.0,16.0,6074.0,3.8,9.3,10.0,63.1
```

### data/scenario_hypertension.csv

```diff
--- old
+++ new
@@ -0,0 +1,30 @@
+
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,61.0,37.0,119.0,77.0,12.0,8007.0
+1,60.0,37.0,121.0,77.0,11.0,7973.0
+2,61.0,37.1,125.0,80.0,11.0,8004.0
+3,61.0,37.1,121.0,80.0,12.0,8079.0
+4,64.0,37.0,128.0,83.0,12.0,8011.0
+5,63.0,37.0,130.0,80.0,13.0,8004.0
+6,65.0,36.9,132.0,88.0,12.0,7968.0
+7,65.0,37.0,125.0,82.0,12.0,7950.0
+8,67.0,36.9,139.0,84.0,13.0,7906.0
+9,66.0,37.0,125.0,85.0,12.0,7959.0
+10,67.0,37.0,135.0,87.0,13.0,7878.0
+11,67.0,36.9,134.0,89.0,13.0,7817.0
+12,71.0,37.0,140.0,89.0,13.0,7880.0
+13,73.0,37.0,145.0,89.0,13.0,7818.0
+14,72.0,37.0,140.0,93.0,13.0,7820.0
+15,72.0,37.1,135.0,88.0,14.0,7885.0
+16,73.0,36.9,141.0,90.0,12.0,7888.0
+17,73.0,37.1,142.0,87.0,13.0,7825.0
+18,75.0,37.0,146.0,95.0,13.0,7833.0
+19,77.0,37.0,149.0,92.0,14.0,7690.0
+20,75.0,37.0,150.0,93.0,14.0,7666.0
+21,78.0,37.0,153.0,94.0,13.0,7582.0
+22,79.0,37.2,151.0,93.0,14.0,7577.0
+23,80.0,37.0,155.0,91.0,14.0,7453.0
+24,79.0,37.0,151.0,102.0,14.0,7483.0
+25,81.0,37.0,156.0,99.0,14.0,7419.0
+26,83.0,37.1,156.0,97.0,14.0,7375.0
+27,82.0,37.0,157.0,98.0,14.0,7890.0
```

### data/scenario_afib.csv

```diff
--- old
+++ new
@@ -0,0 +1,31 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity,AFibBurden
+0,61.0,37.1,129.0,80.0,12.0,7884.0,5.8
+1,59.0,37.1,129.0,84.0,13.0,7766.0,3.3
+2,63.0,36.8,135.0,84.0,11.0,7663.0,0.8
+3,73.0,36.9,134.0,81.0,13.0,7433.0,5.0
+4,63.0,37.1,138.0,84.0,13.0,7076.0,2.1
+5,70.0,37.0,149.0,89.0,13.0,7289.0,6.1
+6,70.0,37.1,144.0,91.0,13.0,7404.0,7.6
+7,75.0,37.1,147.0,87.0,15.0,7435.0,5.1
+8,72.0,37.2,150.0,91.0,12.0,7360.0,3.9
+9,78.0,37.1,160.0,92.0,14.0,7174.0,6.5
+10,81.0,36.9,163.0,93.0,14.0,7108.0,11.0
+11,79.0,37.1,157.0,97.0,15.0,7321.0,5.5
+12,77.0,37.2,169.0,100.0,15.0,7081.0,10.6
+13,90.0,37.3,170.0,99.0,15.0,7066.0,11.2
+14,85.0,37.0,177.0,102.0,16.0,6840.0,11.0
+15,92.0,37.0,172.0,100.0,16.0,6573.0,14.2
+16,90.0,37.1,180.0,107.0,16.0,6747.0,13.6
+17,94.0,36.9,189.0,104.0,16.0,6691.0,14.7
+18,97.0,37.2,183.0,108.0,16.0,6525.0,17.4
+19,101.0,36.9,197.0,109.0,16.0,6557.0,18.4
+20,99.0,37.1,194.0,113.0,16.0,6554.0,19.6
+21,105.0,37.0,196.0,116.0,17.0,6609.0,21.9
+22,104.0,36.9,197.0,115.0,19.0,6684.0,23.2
+23,110.0,37.0,205.0,116.0,19.0,6671.0,25.8
+24,119.0,37.1,218.0,119.0,17.0,6651.0,26.4
+25,115.0,37.0,211.0,127.0,18.0,6561.0,27.4
+26,131.0,36.9,219.0,122.0,20.0,6392.0,33.1
+27,122.0,36.9,220.0,125.0,17.0,6398.0,31.1
+28,125.0,36.9,228.0,130.0,21.0,6201.0,38.3
+29,130.0,36.8,231.0,132.0,20.0,6191.0,37.4
```

### data/scenario_hypertensive_emergency.csv

```diff
--- old
+++ new
@@ -0,0 +1,61 @@
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,Headache
+0,73.0,141.0,90.0,13.0,1024.0,6.4,N
+1,72.0,138.0,90.0,18.0,3176.0,5.2,N
+2,77.0,142.0,90.0,16.0,1020.0,6.0,N
+3,74.0,145.0,90.0,16.0,2868.0,5.3,N
+4,74.0,142.0,91.0,14.0,940.0,5.7,N
+5,74.0,139.0,91.0,16.0,2958.0,3.5,N
+6,75.0,148.0,92.0,14.0,992.0,5.3,N
+7,80.0,144.0,93.0,19.0,3100.0,7.1,N
+8,77.0,146.0,94.0,14.0,768.0,6.5,N
+9,72.0,148.0,91.0,16.0,2912.0,4.9,N
+10,74.0,146.0,94.0,12.0,1016.0,5.7,N
+11,76.0,148.0,93.0,18.0,3079.0,5.8,N
+12,74.0,147.0,95.0,13.0,1045.0,6.3,N
+13,76.0,153.0,95.0,16.0,2767.0,4.2,N
+14,73.0,151.0,94.0,16.0,1153.0,4.6,N
+15,77.0,153.0,95.0,17.0,3099.0,4.9,N
+16,73.0,149.0,95.0,12.0,983.0,4.7,N
+17,72.0,151.0,97.0,17.0,2622.0,3.6,N
+18,74.0,152.0,95.0,15.0,1003.0,3.7,N
+19,73.0,148.0,96.0,17.0,2878.0,4.5,N
+20,73.0,157.0,97.0,14.0,1023.0,6.2,N
+21,76.0,153.0,97.0,14.0,3289.0,3.4,N
+22,75.0,157.0,98.0,14.0,862.0,6.5,N
+23,74.0,154.0,99.0,17.0,2971.0,4.4,N
+24,77.0,154.0,99.0,14.0,1153.0,3.8,N
+25,72.0,157.0,97.0,17.0,3145.0,3.7,N
+26,75.0,154.0,100.0,14.0,1055.0,3.7,N
+27,75.0,158.0,98.0,18.0,2787.0,4.5,N
+28,75.0,159.0,100.0,13.0,970.0,4.1,N
+29,75.0,159.0,100.0,17.0,3199.0,5.4,N
+30,76.0,156.0,101.0,14.0,1045.0,3.9,N
+31,76.0,161.0,102.0,17.0,2791.0,5.7,Y
+32,75.0,163.0,103.0,14.0,1069.0,5.1,Y
+33,78.0,163.0,101.0,17.0,2563.0,3.8,Y
+34,80.0,165.0,101.0,13.0,1057.0,5.2,Y
+35,74.0,166.0,101.0,18.0,3029.0,5.1,Y
+36,75.0,164.0,100.0,14.0,1065.0,4.7,Y
+37,76.0,165.0,104.0,19.0,2760.0,4.0,Y
+38,75.0,165.0,103.0,14.0,1042.0,6.0,Y
+39,75.0,166.0,103.0,18.0,2794.0,4.9,Y
+40,76.0,167.0,104.0,15.0,879.0,3.0,Y
+41,73.0,170.0,103.0,19.0,2791.0,4.3,Y
+42,76.0,171.0,105.0,14.0,844.0,5.1,Y
+43,77.0,164.0,106.0,17.0,2654.0,5.5,Y
+44,76.0,167.0,106.0,13.0,890.0,6.0,Y
+45,72.0,167.0,106.0,16.0,2887.0,4.3,Y
+46,78.0,173.0,105.0,14.0,1151.0,5.6,Y
+47,76.0,174.0,104.0,16.0,3188.0,4.6,Y
+48,77.0,172.0,105.0,13.0,1158.0,5.4,Y
+49,76.0,174.0,106.0,17.0,3184.0,5.3,Y
+50,80.0,174.0,107.0,13.0,956.0,4.5,Y
+51,74.0,178.0,109.0,17.0,3019.0,5.4,Y
+52,75.0,175.0,107.0,14.0,739.0,4.2,Y
+53,74.0,174.0,108.0,18.0,2746.0,3.6,Y
+54,74.0,177.0,109.0,13.0,1122.0,5.0,Y
+55,75.0,178.0,111.0,17.0,3112.0,5.1,Y
+56,74.0,180.0,108.0,16.0,1183.0,4.1,Y
+57,76.0,175.0,110.0,17.0,2759.0,3.4,Y
+58,78.0,179.0,112.0,14.0,1194.0,4.4,Y
+59,75.0,176.0,109.0,18.0,2786.0,5.6,Y
```

### data/scenario_chf_afib.csv

```diff
--- old
+++ new
@@ -0,0 +1,22 @@
+Time,HeartRate,BPSys,BPDia,RespRate,Activity,AFibBurden,State
+0,111.0,207.0,118.0,23.0,107.0,40.5,LyingDown
+1,107.0,210.0,120.0,21.0,423.0,39.5,Exercise
+2,112.0,207.0,121.0,17.0,199.0,39.1,Rest
+3,111.0,210.0,118.0,23.0,51.0,40.2,LyingDown
+4,111.0,210.0,122.0,20.0,595.0,39.4,Exercise
+5,111.0,207.0,117.0,18.0,174.0,40.1,Rest
+6,108.0,209.0,121.0,24.0,121.0,39.1,LyingDown
+7,108.0,206.0,120.0,22.0,588.0,39.5,Exercise
+8,110.0,207.0,119.0,17.0,180.0,40.2,Rest
+9,111.0,212.0,115.0,23.0,97.0,38.7,LyingDown
+10,107.0,208.0,120.0,24.0,521.0,39.3,Exercise
+11,109.0,206.0,121.0,16.0,226.0,42.6,Rest
+12,109.0,210.0,119.0,22.0,145.0,38.7,LyingDown
+13,112.0,211.0,123.0,21.0,457.0,40.4,Exercise
+14,112.0,205.0,119.0,19.0,144.0,39.6,Rest
+15,106.0,209.0,119.0,22.0,108.0,41.0,LyingDown
+16,112.0,206.0,118.0,20.0,506.0,40.2,Exercise
+17,111.0,208.0,119.0,18.0,104.0,40.4,Rest
+18,110.0,209.0,119.0,24.0,72.0,41.4,LyingDown
+19,109.0,214.0,119.0,20.0,482.0,40.9,Exercise
+20,112.0,210.0,122.0,18.0,241.0,41.2,Rest
```

### data/scenario_sepsis.csv

```diff
--- old
+++ new
@@ -0,0 +1,25 @@
+Time,HeartRate,TempC,BPSys,BPDia,RespRate,Activity
+0,78.0,37.1,122.0,81.0,12.0,9969.0
+1,82.0,37.0,120.0,81.0,13.0,9720.0
+2,88.0,37.2,121.0,83.0,13.0,9575.0
+3,87.0,37.3,121.0,82.0,14.0,9281.0
+4,94.0,37.2,121.0,84.0,14.0,9068.0
+5,98.0,37.2,128.0,84.0,14.0,8750.0
+6,99.0,37.5,128.0,88.0,15.0,8326.0
+7,101.0,37.8,127.0,85.0,15.0,8021.0
+8,105.0,37.5,129.0,87.0,16.0,7730.0
+9,106.0,37.9,133.0,87.0,16.0,7060.0
+10,108.0,37.9,133.0,88.0,16.0,6631.0
+11,111.0,37.8,132.0,91.0,17.0,6108.0
+12,115.0,38.1,136.0,91.0,17.0,5732.0
+13,115.0,38.3,136.0,91.0,18.0,5165.0
+14,133.0,38.2,137.0,91.0,17.0,4924.0
+15,123.0,38.2,140.0,93.0,18.0,4487.0
+16,121.0,38.5,135.0,93.0,18.0,3940.0
+17,128.0,38.6,137.0,96.0,19.0,3709.0
+18,135.0,38.5,138.0,95.0,21.0,3177.0
+19,129.0,38.7,139.0,99.0,20.0,2833.0
+20,136.0,38.7,142.0,97.0,20.0,2702.0
+21,138.0,38.9,142.0,96.0,21.0,2567.0
+22,145.0,39.0,145.0,102.0,21.0,2225.0
+23,145.0,38.9,148.0,100.0,22.0,1794.0
```

### src/index.css

```diff
--- old
+++ new
@@ -0,0 +1,18 @@
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
+
+body {
+  @apply bg-white text-gray-800;
+}
+
+.theme-light {}
+.theme-dark {
+  @apply bg-gray-900 text-gray-100;
+}
+.theme-pastel {
+  @apply bg-amber-50 text-gray-700;
+}
+.theme-high-contrast {
+  @apply bg-white text-black;
+}
```

### src/main.jsx

```diff
--- old
+++ new
@@ -0,0 +1,10 @@
+import React from 'react'
+import ReactDOM from 'react-dom/client'
+import App from './App.jsx'
+import './index.css'
+
+ReactDOM.createRoot(document.getElementById('root')).render(
+  <React.StrictMode>
+    <App />
+  </React.StrictMode>
+)
```

### src/App.jsx

```diff
--- old
+++ new
@@ -0,0 +1,83 @@
+// src/App.jsx
+import React, { useState, useEffect } from 'react'
+import ScenarioSelector from './components/ScenarioSelector.jsx'
+import ScenarioInfo from './components/ScenarioInfo.jsx'
+import ControlPanel from './components/ControlPanel.jsx'
+import ChartContainer from './components/ChartContainer.jsx'
+import { loadScenarioData } from './utils/dataLoader.js'
+import { getScenarioInfo } from './utils/scenarioInfo.js'
+
+export default function App() {
+  const [selectedScenario, setSelectedScenario] = useState('sepsis')
+  const [scenarioData, setScenarioData] = useState(null)
+  const [loading, setLoading] = useState(false)
+  const [error, setError] = useState('')
+
+  // Chart options state
+  const [theme, setTheme] = useState('light')
+  const [chartType, setChartType] = useState('line')
+  const [visualOptions, setVisualOptions] = useState({
+    colorScheme: 'azure',
+    lineWeight: '2',
+    showPoints: true,
+    showGridX: true,
+    showGridY: true,
+    showTooltip: true,
+    showLegend: true,
+    showTitle: false,
+    showAnomalies: true,
+    areaOpacity: 0.2
+  })
+
+  useEffect(() => {
+    async function fetchData() {
+      setLoading(true)
+      setError('')
+      try {
+        const data = await loadScenarioData(selectedScenario)
+        setScenarioData(data)
+      } catch (err) {
+        setError('Failed to load data: ' + err.message)
+      } finally {
+        setLoading(false)
+      }
+    }
+    fetchData()
+  }, [selectedScenario])
+
+  const scenarioMeta = getScenarioInfo(selectedScenario)
+
+  const onVisualOptionChange = (option, value) => {
+    setVisualOptions(prev => ({ ...prev, [option]: value }))
+  }
+
+  return (
+    <div className={`min-h-screen px-6 py-8 transition-colors duration-300 theme-${theme}`}>
+      {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4 font-medium">{error}</div>}
+
+      <h1 className="text-2xl font-semibold mb-6">Healthcare Scenario Dashboard</h1>
+      <div className="space-y-6">
+        <ScenarioSelector selectedScenario={selectedScenario} onChange={setSelectedScenario}/>
+        {scenarioMeta && <ScenarioInfo scenarioMeta={scenarioMeta}/>}
+        <ControlPanel
+          theme={theme}
+          chartType={chartType}
+          onThemeChange={setTheme}
+          onChartTypeChange={setChartType}
+          visualOptions={visualOptions}
+          onVisualOptionChange={onVisualOptionChange}
+          scenario={selectedScenario}
+        />
+        {loading && <div className="text-center text-gray-500">Loading data...</div>}
+        {!loading && scenarioData && (
+          <ChartContainer
+            data={scenarioData}
+            chartType={chartType}
+            visualOptions={visualOptions}
+            scenario={selectedScenario}
+          />
+        )}
+      </div>
+    </div>
+  )
+}
```

### src/utils/chartUtils.jsx

```diff
--- old
+++ new
@@ -0,0 +1,3 @@
+// src/utils/chartUtils.jsx
+// Currently no logic needed, leaving file in place for future utilities.
+export {}
```

### src/utils/scenarioInfo.js

```diff
--- old
+++ new
@@ -0,0 +1,94 @@
+// src/utils/scenarioInfo.js
+export function getScenarioInfo(scenario) {
+  switch (scenario) {
+    case 'sepsis':
+      return {
+        title: 'Sepsis Scenario (Elderly Patient)',
+        timeframe: 'Data over 7 Days',
+        description: 'Tracking a patient’s vitals as they develop signs consistent with systemic infection and sepsis.',
+        keyMetrics: [
+          'Temperature: Rising ~37°C to 39°C',
+          'Heart Rate: Increasing ~60 → 120 bpm',
+          'Resp Rate: ~12 → 25',
+          'BP Drops Over Time',
+          'Activity Declines Significantly'
+        ],
+        clinicalSignificance: 'Consistent with sepsis, urgent medical attention is indicated.'
+      }
+    case 'sleep_apnea':
+      return {
+        title: 'Sleep & AFib/Apnea Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Worsening sleep quality, rising AFib burden, and respiratory disturbances.',
+        keyMetrics: [
+          'Sleep hours decrease',
+          'Deep sleep % reduced',
+          'AFib burden increases significantly',
+          'Increased O2 Desat Events'
+        ],
+        clinicalSignificance: 'Highlights interplay of sleep disorders and arrhythmias, requiring intervention.'
+      }
+    case 'chf_afib':
+      return {
+        title: 'CHF & High AFib Burden Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'High AFib burden, elevated HR/BP, poor exercise tolerance, signaling CHF decompensation risk.',
+        keyMetrics: [
+          'AFib ~40%',
+          'HR ~110 bpm',
+          'Very High BP',
+          'Low Activity Tolerance'
+        ],
+        clinicalSignificance: 'Severe hemodynamic stress suggests imminent CHF crisis.'
+      }
+    case 'hypertensive_emergency':
+      return {
+        title: 'Hypertensive Emergency Risk Scenario',
+        timeframe: 'Data over 30 Days',
+        description: 'Steady BP rise towards dangerous levels, stable HR, exertional RR ↑, headaches at high BP.',
+        keyMetrics: [
+          'BP: Rising to ~180/110',
+          'Headaches at critical thresholds',
+          'RR increases with exertion'
+        ],
+        clinicalSignificance: 'Warning of impending hypertensive emergency if unmanaged.'
+      }
+    case 'hypertension':
+      return {
+        title: 'Mild Hypertension Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Gradual increase in BP from near-normal to moderately high over a week.',
+        keyMetrics: [
+          'BP: 140/90 → 155/98',
+          'HR slight increase'
+        ],
+        clinicalSignificance: 'Early-stage hypertension requiring early interventions.'
+      }
+    case 'afib':
+      return {
+        title: 'AFib Scenario',
+        timeframe: 'Data over 7 Days',
+        description: 'Increasing AFib burden and mild changes in HR and BP.',
+        keyMetrics: [
+          'AFib: 10% → 35%',
+          'Mild HR & BP increases'
+        ],
+        clinicalSignificance: 'Progressive arrhythmia severity may need intervention.'
+      }
+    case 'elderly_infection':
+      return {
+        title: 'Elderly Infection (Legacy Scenario)',
+        timeframe: 'Data over 7 Days',
+        description: 'Similar to sepsis: rising temp, HR, RR, dropping BP.',
+        keyMetrics: [
+          'Temp: 37.0 → 39.0 °C',
+          'HR: 60 → 115 bpm',
+          'RR: 12 → 24',
+          'BP drops'
+        ],
+        clinicalSignificance: 'Indicates possible infection leading to a sepsis-like state.'
+      }
+    default:
+      return null
+  }
+}
```

### src/utils/anomalyDetection.js

```diff
--- old
+++ new
@@ -0,0 +1,12 @@
+export function detectAnomalies(rows, metric) {
+  if (!rows || rows.length === 0) return []
+  const values = rows.map(r => (typeof r[metric] === 'number') ? r[metric] : NaN).filter(v => !isNaN(v))
+  if (values.length < 2) return []
+
+  const mean = values.reduce((a,b) => a+b,0)/values.length
+  const std = Math.sqrt(values.map(v => Math.pow(v-mean,2)).reduce((a,b) => a+b,0)/values.length)
+  
+  return values
+    .map((v,i) => Math.abs(v-mean) > 3*std ? i : -1)
+    .filter(i => i>=0)
+}
```

### src/utils/dataLoader.js

```diff
--- old
+++ new
@@ -0,0 +1,43 @@
+// src/utils/dataLoader.js
+import Papa from 'papaparse'
+
+const scenarioFiles = {
+  sepsis: 'scenario_sepsis.csv',
+  sleep_apnea: 'scenario_sleep_apnea.csv',
+  chf_afib: 'scenario_chf_afib.csv',
+  hypertensive_emergency: 'scenario_hypertensive_emergency.csv',
+  hypertension: 'scenario_hypertension.csv',
+  afib: 'scenario_afib.csv',
+  elderly_infection: 'scenario_elderly_infection.csv'
+}
+
+export async function loadScenarioData(scenario) {
+  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
+  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
+  if (!response.ok) throw new Error('Network error loading scenario data.')
+
+  const text = await response.text()
+  const parsed = Papa.parse(text, { header: true, dynamicTyping: true, skipEmptyLines: true })
+  if (parsed.errors && parsed.errors.length > 0) {
+    throw new Error('CSV parsing error: ' + parsed.errors.map(e => e.message).join(', '))
+  }
+
+  const rows = parsed.data.map(d => d)
+  const columns = parsed.meta.fields
+  return { rows, columns }
+}
+
+export async function exportScenarioData(scenario) {
+  if (!scenarioFiles[scenario]) throw new Error('Scenario not found: ' + scenario)
+  const response = await fetch(`/data/${scenarioFiles[scenario]}`)
+  if (!response.ok) throw new Error('Network error loading scenario data.')
+  const text = await response.text()
+
+  const blob = new Blob([text], { type: 'text/csv;charset=utf-8;' })
+  const url = URL.createObjectURL(blob)
+  const a = document.createElement('a')
+  a.href = url
+  a.download = `${scenario}.csv`
+  a.click()
+  URL.revokeObjectURL(url)
+}
```

### src/components/ScenarioInfo.jsx

```diff
--- old
+++ new
@@ -0,0 +1,23 @@
+import React from 'react'
+
+export default function ScenarioInfo({ scenarioMeta }) {
+  if (!scenarioMeta) return null
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
+      <h2 className="text-xl font-semibold mb-2">{scenarioMeta.title}</h2>
+      <div className="text-sm text-gray-500 mb-4">{scenarioMeta.timeframe}</div>
+      <p className="mb-4 text-gray-700">{scenarioMeta.description}</p>
+      <div className="mb-4">
+        <h3 className="text-lg font-medium mb-2">Key Clinical Indicators:</h3>
+        <ul className="space-y-1 text-gray-600 list-disc list-inside">
+          {scenarioMeta.keyMetrics.map((km, idx) => <li key={idx}>{km}</li>)}
+        </ul>
+      </div>
+      <div>
+        <h3 className="text-lg font-medium mb-2">Clinical Significance:</h3>
+        <p className="text-gray-700">{scenarioMeta.clinicalSignificance}</p>
+      </div>
+    </div>
+  )
+}
```

### src/components/ScenarioSelector.jsx

```diff
--- old
+++ new
@@ -0,0 +1,24 @@
+import React from 'react'
+
+export default function ScenarioSelector({ selectedScenario, onChange }) {
+  return (
+    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
+      <div className="flex flex-col space-y-2">
+        <label className="text-sm font-medium text-gray-600">Select Scenario:</label>
+        <select 
+          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+          value={selectedScenario} 
+          onChange={(e) => onChange(e.target.value)}
+        >
+          <option value="sepsis">Sepsis (Elderly Patient)</option>
+          <option value="sleep_apnea">Sleep & AFib/Apnea</option>
+          <option value="chf_afib">CHF & High AFib Burden</option>
+          <option value="hypertensive_emergency">Hypertensive Emergency</option>
+          <option value="hypertension">Mild Hypertension</option>
+          <option value="afib">AFib Scenario</option>
+          <option value="elderly_infection">Elderly Infection (Legacy)</option>
+        </select>
+      </div>
+    </div>
+  )
+}
```

### src/components/ChartContainer.jsx

```diff
--- old
+++ new
@@ -0,0 +1,177 @@
+// src/components/ChartContainer.jsx
+import React, { useMemo } from 'react'
+import { Line, Bar, Scatter } from 'react-chartjs-2'
+import {
+  Chart as ChartJS,
+  LineElement,
+  PointElement,
+  BarElement,
+  CategoryScale,
+  LinearScale,
+  Title,
+  Tooltip,
+  Legend
+} from 'chart.js'
+import { detectAnomalies } from '../utils/anomalyDetection.js'
+
+ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)
+
+export default function ChartContainer({ data, chartType, visualOptions, scenario }) {
+  const { rows, columns } = data
+  // Use Time as the X-axis
+  const metrics = columns.filter(c => c !== 'Time') // exclude Time from metrics, it's our x-axis
+
+  const anomaliesByMetric = useMemo(() => {
+    if (!visualOptions.showAnomalies) return {}
+    const anomalyResults = {}
+    metrics.forEach(metric => {
+      anomalyResults[metric] = detectAnomalies(rows, metric)
+    })
+    return anomalyResults
+  }, [rows, metrics, visualOptions.showAnomalies])
+
+  const chartData = useMemo(() => {
+    const baseColorSchemes = {
+      azure: ['#3b82f6', '#2563eb', '#38bdf8', '#0ea5e9', '#0284c7'],
+      emerald: ['#34d399', '#10b981', '#059669', '#65a30d', '#4ade80'],
+      violet: ['#a78bfa', '#8b5cf6', '#c084fc', '#9333ea', '#7e22ce'],
+      gray: ['#64748b', '#475569', '#94a3b8', '#1e293b', '#334155'],
+      black: ['#000000', '#111827', '#1f2937', '#374151', '#4b5563'],
+      pastel: ['#fda4af', '#f9a8d4', '#fbcfe8', '#fcd34d', '#f9fafb']
+    }
+
+    const palette = baseColorSchemes[visualOptions.colorScheme] || baseColorSchemes.azure
+
+    const mainDatasets = metrics.map((metric, idx) => {
+      const color = palette[idx % palette.length]
+      return {
+        label: metric,
+        data: rows.map(d => ({ x: d.Time, y: d[metric] })),
+        borderColor: color,
+        backgroundColor: (chartType === 'area') ? color : color,
+        borderWidth: parseFloat(visualOptions.lineWeight),
+        pointRadius: visualOptions.showPoints ? 3 : 0,
+        pointHoverRadius: visualOptions.showPoints ? 5 : 0,
+        pointHitRadius: 5,
+        fill: chartType === 'area' ? 'start' : false,
+        tension: 0.2
+      }
+    })
+
+    const anomalyDatasets = []
+    if (visualOptions.showAnomalies) {
+      metrics.forEach((metric) => {
+        const anomalyIndices = anomaliesByMetric[metric] || []
+        if (anomalyIndices.length > 0) {
+          const color = '#ef4444'
+          const anomalyData = anomalyIndices.map(i => {
+            return { x: rows[i].Time, y: rows[i][metric] }
+          })
+          anomalyDatasets.push({
+            label: metric + ' (Anomaly)',
+            data: anomalyData,
+            borderColor: color,
+            backgroundColor: color,
+            pointRadius: 6,
+            pointHoverRadius: 8,
+            showLine: false,
+            order: 0
+          })
+        }
+      })
+    }
+
+    return {
+      datasets: [...mainDatasets, ...anomalyDatasets]
+    }
+  }, [data, metrics, chartType, visualOptions, anomaliesByMetric, rows])
+
+  const options = useMemo(() => {
+    return {
+      responsive: true,
+      maintainAspectRatio: false,
+      interaction: {
+        mode: 'index',
+        intersect: false,
+      },
+      scales: {
+        x: {
+          type: 'linear',
+          title: {
+            display: true,
+            text: 'Time',
+            color: '#64748b'
+          },
+          ticks: {
+            color: '#64748b'
+          },
+          grid: {
+            color: visualOptions.showGridX ? '#e2e8f0' : 'transparent'
+          }
+        },
+        y: {
+          title: {
+            display: true,
+            text: 'Value',
+            color: '#64748b'
+          },
+          ticks: {
+            color: '#64748b'
+          },
+          grid: {
+            color: visualOptions.showGridY ? '#e2e8f0' : 'transparent'
+          }
+        }
+      },
+      plugins: {
+        legend: {
+          display: visualOptions.showLegend,
+          labels: {
+            color: '#64748b'
+          }
+        },
+        title: {
+          display: visualOptions.showTitle,
+          text: scenario.charAt(0).toUpperCase() + scenario.slice(1) + ' Scenario Data',
+          color: '#1e293b',
+          font: {
+            size: 18,
+            weight: '600'
+          },
+          padding: 20
+        },
+        tooltip: {
+          enabled: visualOptions.showTooltip,
+          backgroundColor: '#ffffff',
+          borderColor: '#e2e8f0',
+          borderWidth: 1,
+          bodyColor: '#1e293b',
+          titleColor: '#1e293b'
+        }
+      },
+      elements: {
+        line: {
+          fill: chartType === 'area' ? 'start' : false,
+          backgroundColor: chartType === 'area' ? `rgba(59,130,246,${visualOptions.areaOpacity})` : 'transparent'
+        }
+      }
+    }
+  }, [visualOptions, chartType, scenario])
+
+  const renderChart = () => {
+    if (chartType === 'bar') {
+      return <Bar data={chartData} options={options} />
+    } else if (chartType === 'scatter') {
+      return <Scatter data={chartData} options={options} />
+    } else {
+      // line or area
+      return <Line data={chartData} options={options} />
+    }
+  }
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm" style={{height: '500px'}}>
+      {renderChart()}
+    </div>
+  )
+}
```

### src/components/ControlPanel.jsx

```diff
--- old
+++ new
@@ -0,0 +1,174 @@
+import React from 'react'
+import { exportScenarioData } from '../utils/dataLoader.js'
+
+const ControlPanel = ({ 
+  theme, 
+  chartType, 
+  onThemeChange, 
+  onChartTypeChange,
+  visualOptions,
+  onVisualOptionChange,
+  scenario
+}) => {
+  const colorSchemes = {
+    azure: 'Azure',
+    emerald: 'Emerald',
+    violet: 'Violet',
+    gray: 'Gray',
+    black: 'Black',
+    pastel: 'Pastel'
+  }
+
+  return (
+    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm space-y-4">
+      <div className="flex flex-wrap gap-3">
+        <button 
+          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
+          onClick={() => exportScenarioData(scenario)}
+        >
+          Export CSV
+        </button>
+      </div>
+      
+      <div className="grid md:grid-cols-3 gap-4">
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Theme</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={theme}
+            onChange={(e) => onThemeChange(e.target.value)}
+          >
+            <option value="light">Light</option>
+            <option value="dark">Dark</option>
+            <option value="pastel">Pastel</option>
+            <option value="high-contrast">High Contrast</option>
+          </select>
+        </div>
+
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Chart Type</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={chartType}
+            onChange={(e) => onChartTypeChange(e.target.value)}
+          >
+            <option value="line">Line</option>
+            <option value="area">Area</option>
+            <option value="bar">Bar</option>
+            <option value="scatter">Scatter</option>
+          </select>
+        </div>
+
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Color Palette</label>
+          <select
+            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
+            value={visualOptions.colorScheme}
+            onChange={(e) => onVisualOptionChange('colorScheme', e.target.value)}
+          >
+            {Object.entries(colorSchemes).map(([key, name]) => (
+              <option key={key} value={key}>{name}</option>
+            ))}
+          </select>
+        </div>
+      </div>
+
+      {chartType === 'area' && (
+        <div className="flex flex-col space-y-2">
+          <label className="text-sm font-medium text-gray-600">Area Opacity</label>
+          <input
+            className="w-full"
+            type="range"
+            min="0.05"
+            max="0.5"
+            step="0.05"
+            value={visualOptions.areaOpacity}
+            onChange={(e) => onVisualOptionChange('areaOpacity', parseFloat(e.target.value))}
+          />
+        </div>
+      )}
+
+      <div className="flex flex-col space-y-2">
+        <label className="text-sm font-medium text-gray-600">Line Weight</label>
+        <select
+          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
+          value={visualOptions.lineWeight}
+          onChange={(e) => onVisualOptionChange('lineWeight', e.target.value)}
+        >
+          <option value="1">Thin</option>
+          <option value="1.5">Light</option>
+          <option value="2">Medium</option>
+          <option value="2.5">Bold</option>
+          <option value="3">Extra Bold</option>
+        </select>
+      </div>
+
+      <div className="grid md:grid-cols-4 gap-4 mt-4">
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showPoints}
+            onChange={(e) => onVisualOptionChange('showPoints', e.target.checked)}
+          />
+          <span>Data Points</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showTooltip}
+            onChange={(e) => onVisualOptionChange('showTooltip', e.target.checked)}
+          />
+          <span>Tooltips</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showGridX}
+            onChange={(e) => onVisualOptionChange('showGridX', e.target.checked)}
+          />
+          <span>Grid X</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showGridY}
+            onChange={(e) => onVisualOptionChange('showGridY', e.target.checked)}
+          />
+          <span>Grid Y</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showLegend}
+            onChange={(e) => onVisualOptionChange('showLegend', e.target.checked)}
+          />
+          <span>Legend</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showTitle}
+            onChange={(e) => onVisualOptionChange('showTitle', e.target.checked)}
+          />
+          <span>Show Title</span>
+        </label>
+
+        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
+          <input
+            type="checkbox"
+            checked={visualOptions.showAnomalies}
+            onChange={(e) => onVisualOptionChange('showAnomalies', e.target.checked)}
+          />
+          <span>Show Anomalies</span>
+        </label>
+      </div>
+    </div>
+  )
+}
+
+export default ControlPanel
```

