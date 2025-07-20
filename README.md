# Paywall.js 🛡️

Simple payment reminder - makes websites fade out when payment is overdue.

> 📖 **¿Prefieres leer en español?** [Ver README en español](README.es.md)

## Installation

```bash
npm install paywall-js
```

📦 **Package:** [paywall-js on npm](https://www.npmjs.com/package/paywall-js)

## Quick Start

```html
<script src="node_modules/paywall-js/dist/paywall.min.js"></script>
<script>
  new Paywall({
    dueDate: '2025-07-15',
    daysDeadline: 10
  });
</script>
```

## Visual Effects

Paywall offers three different visual effects to remind users about overdue payments:

### 🎨 Gradient Effect (Default)
Beautiful gradient overlay that intensifies over time.

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10
  // Use default gradient effect
});
```

### 🔴 Solid Effect
Solid color overlay that darkens gradually.

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'solid',
  color: '#ff0000'
});
```

### 🌫️ Fade Effect
Simple opacity reduction of the body (original method).

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'fade'
});
```

## Configuration

| Option | Type | Required | Default | Description |
|--------|------|-----------|-------------|-------------|
| `dueDate` | String | ✅ Yes | - | Payment due date (YYYY-MM-DD) |
| `daysDeadline` | Number | ❌ No | 60 | Days after which the effect is maximum |
| `effect` | String | ❌ No | 'gradient' | Effect type: 'gradient', 'solid', 'fade' |
| `color` | String | ❌ No | '#ff0000' | Color for solid effect (hex or name) |
| `gradientFrom` | String | ❌ No | '#ff0000' | Initial gradient color |
| `gradientTo` | String | ❌ No | '#000000' | Final gradient color |

## How it works

1. **Configure:** Define your due date and deadline
2. **Automatic Check:** The library checks if the payment is overdue
3. **Visual Effect:** Applies the selected effect based on the delay
4. **Gradual Intensification:** The effect becomes stronger over time
5. **Maximum Impact:** When the deadline is reached, the effect reaches full intensity

## Examples

### Basic Usage (Default Gradient)
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10
  // Automatically uses default gradient effect with default colors
});
```

### Custom Gradient Colors
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'gradient',
  gradientFrom: '#ff6600',
  gradientTo: '#cc0000'
});
```

### Solid Blue Overlay
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'solid',
  color: '#0066cc'
});
```

### Simple Fade
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'fade'
});
```

## Features

- 🚀 **Simple Configuration** - Only includes the script and configures
- 🎨 **Multiple Effects** - Choose between gradient, solid, or fade
- ⚡ **Automatic** - No manual intervention required
- 🎯 **Customizable** - Configure colors, dates, and deadlines
- 📱 **Responsive** - Works on all devices
- 🔒 **Lightweight** - Minimal size, no dependencies

## Use Cases

- **Freelancers:** Ensure clients pay on time
- **Agencies:** Protect against non-payment
- **Developers:** Ensure web project payments
- **Consultants:** Maintain payment discipline
- **Service Providers:** Automatic payment reminders

## Demo Pages

Check out the live demos to see each effect in action:

- 🏠 **[Simple Demo](examples/simple.html)** - Basic usage with gradient effect
- 📖 **[Documentation](examples/info.html)** - Complete guide and API reference
- 🏭 **[CDN Demo](examples/production-cdn.html)** - Simple demo using unpkg CDN
- 📦 **[npm Demo](examples/production-npm.html)** - Professional website using npm install
- 🎨 **[Gradient Effect Demo](examples/gradient-effect.html)** - Beautiful gradient overlay
- 🔴 **[Solid Effect Demo](examples/solid-effect.html)** - Clean solid color overlay
- 🌫️ **[Fade Effect Demo](examples/fade-effect.html)** - Simple opacity reduction

## Browser Compatibility

- ✅ Chrome (latest version)
- ✅ Firefox (latest version)
- ✅ Safari (latest version)
- ✅ Edge (latest version)
- ✅ Internet Explorer 11+

## Author

**Paywall.js** was inspired by the original concept of [@kleampa](https://github.com/kleampa) and developed with improvements by [Alberto Guaman](https://github.com/GbrielGarcia) for publication on npm.

- **Original Concept:** [@kleampa](https://github.com/kleampa)
- **Developer:** [Alberto Guaman](https://github.com/GbrielGarcia) - [Tinguar](https://tinguar.com) (Digital Agency)

## License

MIT 