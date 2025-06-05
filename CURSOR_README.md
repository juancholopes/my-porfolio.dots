# Custom Cursor Documentation

## Overview

Este portafolio implementa un cursor personalizado interactivo al estilo Framer que se transforma dinámicamente según el contenido sobre el que se posiciona.

## Características

### Estados del Cursor

1. **Default (Predeterminado)**
   - Círculo azul con fondo blur
   - Borde azul con efecto glow
   - Tamaño: 24x24px

2. **Text (Texto)**
   - Barra rectangular tipo terminal Linux
   - Fondo oscuro con borde azul
   - Efecto de parpadeo como cursor de terminal
   - Se activa sobre: títulos, párrafos, botones, enlaces

3. **Image (Imagen)**
   - Etiqueta con texto "image"
   - Fondo blur con borde azul
   - Se activa sobre: imágenes, elementos con clase `.project-image`

## Implementación Técnica

### Componentes

- `CustomCursor.tsx` - Componente principal del cursor
- `useCursor.ts` - Hook personalizado para lógica del cursor

### Tecnologías Utilizadas

- **Framer Motion**: Animaciones fluidas y transiciones
- **React Hooks**: Gestión de estado y efectos
- **TypeScript**: Tipado seguro
- **Tailwind CSS**: Estilos y efectos visuales

### Detección de Elementos

El cursor detecta automáticamente:

```typescript
// Por atributo data-cursor
<element data-cursor="text">
<element data-cursor="image">

// Por tipo de elemento
<h1>, <h2>, <p>, <span>, <a>, <button>

// Por clase CSS
.project-image
```

## Configuración

### Estilos CSS

```css
/* Ocultar cursor nativo */
* {
  cursor: none !important;
}

/* Animaciones del cursor */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

### Configuración del Hook

```typescript
const { mousePosition, cursorVariant } = useCursor();
```

## Personalización

### Modificar Variantes

Editar las variantes en `CustomCursor.tsx`:

```typescript
const variants = {
  default: {
    // Configuración del estado default
  },
  text: {
    // Configuración del estado text
  },
  image: {
    // Configuración del estado image
  }
};
```

### Agregar Nuevos Estados

1. Agregar nuevo tipo en `useCursor.ts`:
```typescript
export type CursorVariant = 'default' | 'text' | 'image' | 'nuevo-estado';
```

2. Implementar lógica de detección en el hook
3. Agregar variante visual en el componente

## Efectos Visuales

- **Backdrop Blur**: Efecto de desenfoque de fondo
- **Box Shadow**: Resplandor azul alrededor del cursor
- **Smooth Transitions**: Transiciones suaves entre estados
- **Spring Animation**: Animaciones físicas realistas

## Rendimiento

- Uso de `useCallback` para optimizar re-renders
- Event listeners eficientes
- Animaciones GPU-accelerated con Framer Motion

## Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ❌ Dispositivos móviles (cursor deshabilitado automáticamente)

## Debugging

Para debuggear el cursor:

1. Verificar que `cursor: none` esté aplicado
2. Comprobar que Framer Motion esté instalado
3. Revisar console para errores de event listeners
4. Verificar que los atributos `data-cursor` estén correctos

## Futuras Mejoras

- [ ] Estado para formularios
- [ ] Cursor personalizado para scroll
- [ ] Efectos de partículas
- [ ] Modo daltonismo
- [ ] Configuración de velocidad de animación