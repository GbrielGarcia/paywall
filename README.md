# Paywall 🛡️

Simple payment reminder - makes websites fade out when payment is overdue.

> 📖 **¿Prefieres leer en español?** [Ver README en español](README.es.md)

## Installation

```bash
npm install paywall
```

## Quick Start

```html
<script src="node_modules/paywall/dist/paywall.min.js"></script>
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
  // Uses gradient effect by default
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
Simple body opacity reduction (original method).

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'fade'
});
```

## Configuration

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `dueDate` | String | ✅ Yes | - | Payment due date (YYYY-MM-DD) |
| `daysDeadline` | Number | ❌ No | 60 | Days after which effect is maximum |
| `effect` | String | ❌ No | 'gradient' | Effect type: 'gradient', 'solid', 'fade' |
| `color` | String | ❌ No | '#ff0000' | Color for solid effect (hex or name) |
| `gradientFrom` | String | ❌ No | '#ff0000' | Starting color for gradient |
| `gradientTo` | String | ❌ No | '#000000' | Ending color for gradient |

## How it works

1. **Set Configuration:** Define your payment due date and deadline
2. **Automatic Check:** Library checks if payment is overdue
3. **Visual Effect:** Applies chosen effect based on days overdue
4. **Gradual Intensification:** Effect becomes stronger over time
5. **Maximum Impact:** At deadline, effect reaches full intensity

## Examples

### Basic Usage (Default Gradient)
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10
  // Automatically uses gradient effect with default colors
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

### Blue Solid Overlay
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

- 🚀 **Simple Setup** - Just include the script and configure
- 🎨 **Multiple Effects** - Choose from gradient, solid, or fade effects
- ⚡ **Automatic** - No manual intervention needed
- 🎯 **Customizable** - Configure colors, dates, and deadlines
- 📱 **Responsive** - Works on all devices and screen sizes
- 🔒 **Lightweight** - Minimal file size, no dependencies

## Use Cases

- **Freelancers:** Ensure clients pay on time
- **Agencies:** Protect against non-payment
- **Developers:** Secure payment for web projects
- **Consultants:** Maintain payment discipline
- **Service Providers:** Automated payment reminders

## Demo Pages

Check out the live demos to see each effect in action:

- 🏠 **[Simple Demo](examples/simple.html)** - Basic usage with gradient effect
- 📖 **[Documentation](examples/info.html)** - Complete guide and API reference
- 🎨 **[Gradient Demo](examples/gradient-effect.html)** - Beautiful gradient overlay
- 🔴 **[Solid Demo](examples/solid-effect.html)** - Clean solid color overlay
- 🌫️ **[Fade Demo](examples/fade-effect.html)** - Simple body opacity reduction

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Internet Explorer 11+

## Author

**Paywall** was inspired by the original concept from [@kleampa](https://github.com/kleampa) and developed with improvements by [Alberto Guaman](https://github.com/GbrielGarcia) for npm publication.

- **Original Concept:** [@kleampa](https://github.com/kleampa)
- **Developer:** [Alberto Guaman](https://github.com/GbrielGarcia) - [Tinguar](https://tinguar.com) (Digital Agency)

## License

MIT 