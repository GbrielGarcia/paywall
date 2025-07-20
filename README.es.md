# Paywall.js 🛡️

Recordatorio simple de pagos - hace que los sitios web se desvanezcan cuando el pago está vencido.

> 📖 **Prefer to read in English?** [View README in English](README.md)

## Instalación

```bash
npm install paywall-js
```

## Inicio Rápido

```html
<script src="node_modules/paywall-js/dist/paywall.min.js"></script>
<script>
  new Paywall({
    dueDate: '2025-07-15',
    daysDeadline: 10
  });
</script>
```

## Efectos Visuales

Paywall.js ofrece tres efectos visuales diferentes para recordar a los usuarios sobre pagos vencidos:

### 🎨 Efecto Gradiente (Por defecto)
Hermoso overlay de gradiente que se intensifica con el tiempo.

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10
  // Usa efecto gradiente por defecto
});
```

### 🔴 Efecto Sólido
Overlay de color sólido que se oscurece gradualmente.

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'solid',
  color: '#ff0000'
});
```

### 🌫️ Efecto Fade
Reducción simple de la opacidad del body (método original).

```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'fade'
});
```

## Configuración

| Opción | Tipo | Requerido | Por Defecto | Descripción |
|--------|------|-----------|-------------|-------------|
| `dueDate` | String | ✅ Sí | - | Fecha de vencimiento del pago (YYYY-MM-DD) |
| `daysDeadline` | Number | ❌ No | 60 | Días después de los cuales el efecto es máximo |
| `effect` | String | ❌ No | 'gradient' | Tipo de efecto: 'gradient', 'solid', 'fade' |
| `color` | String | ❌ No | '#ff0000' | Color para efecto sólido (hex o nombre) |
| `gradientFrom` | String | ❌ No | '#ff0000' | Color inicial del gradiente |
| `gradientTo` | String | ❌ No | '#000000' | Color final del gradiente |

## Cómo funciona

1. **Configurar:** Define tu fecha de vencimiento y plazo
2. **Verificación Automática:** La librería verifica si el pago está vencido
3. **Efecto Visual:** Aplica el efecto elegido según los días de retraso
4. **Intensificación Gradual:** El efecto se vuelve más fuerte con el tiempo
5. **Impacto Máximo:** Al llegar al plazo, el efecto alcanza intensidad completa

## Ejemplos

### Uso Básico (Gradiente por defecto)
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10
  // Automáticamente usa efecto gradiente con colores por defecto
});
```

### Colores de Gradiente Personalizados
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'gradient',
  gradientFrom: '#ff6600',
  gradientTo: '#cc0000'
});
```

### Overlay Sólido Azul
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'solid',
  color: '#0066cc'
});
```

### Fade Simple
```javascript
new Paywall({
  dueDate: '2025-07-15',
  daysDeadline: 10,
  effect: 'fade'
});
```

## Características

- 🚀 **Configuración Simple** - Solo incluye el script y configura
- 🎨 **Múltiples Efectos** - Elige entre gradiente, sólido o fade
- ⚡ **Automático** - No requiere intervención manual
- 🎯 **Personalizable** - Configura colores, fechas y plazos
- 📱 **Responsivo** - Funciona en todos los dispositivos
- 🔒 **Ligero** - Tamaño mínimo, sin dependencias

## Casos de Uso

- **Freelancers:** Asegurar que los clientes paguen a tiempo
- **Agencias:** Protegerse contra la falta de pago
- **Desarrolladores:** Asegurar el pago de proyectos web
- **Consultores:** Mantener disciplina de pagos
- **Proveedores de Servicios:** Recordatorios automáticos de pago

## Páginas de Demo

Revisa los demos en vivo para ver cada efecto en acción:

- 🏠 **[Demo Simple](examples/simple.html)** - Uso básico con efecto gradiente
- 📖 **[Documentación](examples/info.html)** - Guía completa y referencia de API
- 🏭 **[Demo CDN](examples/production-cdn.html)** - Demo simple usando unpkg CDN
- 📦 **[Demo npm](examples/production-npm.html)** - Sitio web profesional usando npm install
- 🎨 **[Demo Gradiente](examples/gradient-effect.html)** - Hermoso overlay de gradiente
- 🔴 **[Demo Sólido](examples/solid-effect.html)** - Overlay de color sólido limpio
- 🌫️ **[Demo Fade](examples/fade-effect.html)** - Reducción simple de opacidad

## Compatibilidad de Navegadores

- ✅ Chrome (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Edge (última versión)
- ✅ Internet Explorer 11+

## Autor

**Paywall.js** fue inspirado por el concepto original de [@kleampa](https://github.com/kleampa) y desarrollado con mejoras por [Alberto Guaman](https://github.com/GbrielGarcia) para publicación en npm.

- **Concepto Original:** [@kleampa](https://github.com/kleampa)
- **Desarrollador:** [Alberto Guaman](https://github.com/GbrielGarcia) - [Tinguar](https://tinguar.com) (Agencia Digital)

## Licencia

MIT 