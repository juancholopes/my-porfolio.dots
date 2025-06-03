# Componentes de Contacto - Documentación

## 📧 CopyEmailButton

Componente especializado para copiar direcciones de email al portapapeles del sistema con feedback visual mejorado.

### Características

- ✅ **Copia instantánea** al portapapeles con un click
- ✅ **Doble fallback** - Clipboard API + execCommand para compatibilidad
- ✅ **Feedback visual** con animaciones suaves y cambio de iconos
- ✅ **Tooltip informativo** multiidioma
- ✅ **Animación de éxito** con efecto ping
- ✅ **Estado disabled** durante la animación para prevenir spam clicks

### Props

```typescript
interface CopyEmailButtonProps {
  email: string;        // Email a copiar (requerido)
  className?: string;   // Clases CSS adicionales
}
```

### Uso Básico

```tsx
import CopyEmailButton from './CopyEmailButton';

// Uso simple
<CopyEmailButton email="usuario@ejemplo.com" />

// Con estilos personalizados
<CopyEmailButton 
  email="contacto@empresa.com" 
  className="ml-4 scale-110" 
/>
```

### Estados Visuales

1. **Estado Normal**: Icono de copiar azul con hover effect
2. **Estado Copiado**: Check verde con animación pulse
3. **Tooltip**: Información contextual que cambia según el estado
4. **Animación**: Efecto ping verde al copiar exitosamente

---

## 🚀 ContactButton

Componente avanzado que proporciona múltiples formas de contacto con diferentes variantes visuales.

### Variantes Disponibles

#### 1. Primary (Defecto)
```tsx
<ContactButton variant="primary" showCopyButton={true} />
```
- Botón principal para enviar email
- Sección separada con email y botón de copiar
- Ideal para secciones principales de contacto

#### 2. Secondary
```tsx
<ContactButton variant="secondary" showCopyButton={true} />
```
- Botón desplegable con opciones de contacto
- Menú contextual que aparece al hacer click
- Perfecto para barras de navegación o sidebars

#### 3. Minimal
```tsx
<ContactButton variant="minimal" showCopyButton={true} />
```
- Solo muestra el email con botón de copiar
- Diseño compacto y discreto
- Ideal para footers o secciones informativas

### Props

```typescript
interface ContactButtonProps {
  variant?: 'primary' | 'secondary' | 'minimal';
  showCopyButton?: boolean;
  className?: string;
}
```

### Configuración del Email

El componente está preconfigurado con:

```typescript
const email = "juancarloslopezmoreno@proton.me";
const subject = "Contacto desde Portfolio";
const body = "Hola Juan Carlos,\n\nMe gustaría ponerme en contacto contigo para...";
```

---

## 🌍 Soporte de Internacionalización

Ambos componentes están completamente integrados con react-i18next:

### Claves de Traducción Utilizadas

```json
{
  "common": {
    "copyEmail": "Copy email / Copiar email",
    "copied": "Copied! / ¡Copiado!",
    "sendEmail": "Send email / Enviar email",
    "contactMe": "Contact me / Contáctame",
    "getInTouch": "Get in touch / Ponte en contacto"
  },
  "footer": {
    "contact": "Contact / Contacto",
    "workTogether": "Let's Work Together / Trabajemos Juntos"
  }
}
```

---

## 🎨 Personalización de Estilos

### Tema de Colores

Los componentes siguen el tema del portfolio:

- **Azul primario**: `text-blue-400`, `border-blue-500/30`
- **Verde éxito**: `text-green-400`, `bg-green-500/10`
- **Fondo**: `bg-slate-900/95` con backdrop-blur
- **Texto**: `text-gray-300` para contenido secundario

### Clases CSS Personalizables

```tsx
// Ejemplo de personalización
<CopyEmailButton 
  email="test@example.com"
  className="
    hover:border-purple-500/30 
    hover:bg-purple-500/10
    text-purple-400
  "
/>
```

---

## ⚡ Funcionalidades Técnicas

### Clipboard API con Fallback

```typescript
// Método principal (moderno)
await navigator.clipboard.writeText(email);

// Fallback (compatibilidad)
const textArea = document.createElement('textarea');
textArea.value = email;
document.execCommand('copy');
```

### Gestión de Estados

- **copied**: Boolean para mostrar estado de éxito
- **isAnimating**: Previene clicks múltiples durante animación
- **showEmailActions**: Controla visibilidad del menú desplegable (variant secondary)

### Accesibilidad

- **title**: Atributo para screen readers
- **disabled**: Estado durante animaciones
- **focus**: Estados de teclado apropiados
- **ARIA**: Labels implícitos através de iconos y texto

---

## 🔧 Troubleshooting

### Problemas Comunes

1. **El botón no copia**
   - Verificar que el navegador soporta Clipboard API
   - En desarrollo local usar HTTPS o localhost
   - Comprobar permisos del navegador

2. **Estilos no se aplican**
   - Verificar que Tailwind CSS está configurado
   - Comprobar que las clases personalizadas no conflicten

3. **Traducciones no aparecen**
   - Verificar que react-i18next está inicializado
   - Comprobar que las claves existen en ambos idiomas

### Compatibilidad

- **Navegadores**: Chrome 66+, Firefox 63+, Safari 13.1+
- **Fallback**: IE 11+ (con execCommand)
- **Móviles**: iOS 13.4+, Android Chrome 84+

---

## 📱 Uso en Diferentes Secciones

### Hero Section
```tsx
<ContactButton variant="minimal" showCopyButton={true} />
```

### Footer
```tsx
<ContactButton variant="primary" showCopyButton={false} />
```

### Navbar
```tsx
<ContactButton variant="secondary" showCopyButton={true} />
```

### Inline Text
```tsx
Email: usuario@ejemplo.com <CopyEmailButton email="usuario@ejemplo.com" />
```