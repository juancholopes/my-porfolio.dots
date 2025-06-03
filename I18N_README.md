# Sistema de Internacionalización (i18n)

Este portfolio incluye un sistema completo de internacionalización que permite cambiar entre español e inglés.

## 🌍 Idiomas Disponibles

- **Español (es)** - Idioma por defecto para usuarios hispanohablantes
- **English (en)** - Idioma por defecto para otros usuarios

## 🚀 Características

- **Detección automática** del idioma preferido del navegador
- **Persistencia** de la selección de idioma en localStorage
- **Cambio dinámico** de idioma sin recargar la página
- **Selector visual** con banderas en la barra de navegación
- **Fallback** al inglés si no se encuentra traducción

## 📁 Estructura de Archivos

```
src/
├── i18n.ts                    # Configuración principal de i18next
├── locales/
│   ├── en.json                # Traducciones en inglés
│   └── es.json                # Traducciones en español
└── components/
    └── LanguageSelector.tsx   # Componente selector de idioma
```

## ⚙️ Configuración

El sistema está configurado en `src/i18n.ts` con:

- **Detección automática** del idioma del navegador
- **Persistencia** en localStorage
- **Idioma de respaldo**: inglés
- **Interpolación** deshabilitada para mayor seguridad

## 🔧 Uso en Componentes

```typescript
import { useTranslation } from 'react-i18next';

const MiComponente = () => {
  const { t } = useTranslation();
  
  return (
    <h1>{t('navbar.title')}</h1>
  );
};
```

## 📝 Estructura de Traducciones

Las traducciones están organizadas por secciones:

```json
{
  "navbar": {
    "about": "About Me",
    "projects": "Projects"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "subtitle": "Full Stack Developer"
  }
}
```

## 🎨 Selector de Idioma

El componente `LanguageSelector` incluye:

- Icono de globo terráqueo
- Banderas de países (🇺🇸/🇪🇸)
- Menú desplegable con hover
- Indicador visual del idioma actual

## 🔄 Cambio de Idioma

Para cambiar el idioma programáticamente:

```typescript
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();
i18n.changeLanguage('es'); // Cambiar a español
i18n.changeLanguage('en'); // Cambiar a inglés
```

## 📦 Dependencias

- `react-i18next`: Hook de React para i18next
- `i18next`: Librería principal de internacionalización
- `i18next-browser-languagedetector`: Detección automática del idioma

## 🛠️ Agregar Nuevos Idiomas

1. Crear archivo JSON en `src/locales/` (ej: `fr.json`)
2. Agregar las traducciones siguiendo la estructura existente
3. Actualizar `src/i18n.ts`:
   ```typescript
   import fr from './locales/fr.json';
   
   const resources = {
     en: { translation: en },
     es: { translation: es },
     fr: { translation: fr }
   };
   ```
4. Agregar el idioma al `LanguageSelector.tsx`

## 🎯 Buenas Prácticas

- Usar claves descriptivas: `hero.welcomeMessage` en lugar de `msg1`
- Agrupar traducciones por sección/componente
- Mantener consistencia en la estructura entre idiomas
- Usar interpolación para contenido dinámico cuando sea necesario
- Probar todos los idiomas antes de hacer deploy

## 📧 Componente de Copiar Email

Se incluyó un componente especializado para copiar email al portapapeles:

### Características del CopyEmailButton:
- **Copia automática** al portapapeles con un click
- **Feedback visual** con animaciones y cambio de iconos
- **Fallback** para navegadores que no soportan Clipboard API
- **Tooltip informativo** que se muestra al hacer hover
- **Soporte multiidioma** para mensajes de estado
- **Animación de éxito** cuando se copia correctamente

### Uso del componente:
```typescript
import CopyEmailButton from './CopyEmailButton';

<CopyEmailButton 
  email="correo@ejemplo.com" 
  className="ml-2" 
/>
```

### ContactButton Component:
Componente avanzado que incluye múltiples opciones de contacto:
- Botón para abrir cliente de email por defecto
- Integración con CopyEmailButton
- Tres variantes: `primary`, `secondary`, `minimal`
- Pre-rellena asunto y cuerpo del mensaje

## 🐛 Solución de Problemas

**No aparecen las traducciones:**
- Verificar que el archivo JSON es válido
- Comprobar que la clave existe en ambos idiomas
- Revisar la configuración en `i18n.ts`

**El idioma no persiste:**
- Verificar que localStorage está habilitado
- Comprobar la configuración de detección

**Errores de compilación:**
- Validar la sintaxis JSON en los archivos de traducciones
- Verificar que todas las importaciones están correctas

**El botón de copiar no funciona:**
- Verificar que el navegador soporta la Clipboard API
- En desarrollo local, usar HTTPS o localhost
- Comprobar permisos del navegador para acceder al portapapeles