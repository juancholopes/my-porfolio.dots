<div align="center">
  <h1>🚀 Mi Portfolio Personal</h1>
  <p><strong>Desarrollador Full Stack · Creando soluciones innovadoras con tecnologías modernas</strong></p>
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/12345678-1234-1234-1234-123456789abc/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/juanchopi37/my-porfolio.dots/graphs/commit-activity)
</div>

---

## 🎯 Sobre el Proyecto

Portfolio personal desarrollado con un enfoque minimalista y moderno, diseñado para mostrar mis habilidades como desarrollador Full Stack. Incluye un cursor personalizado interactivo al estilo Framer y una experiencia de usuario completamente responsiva.

### ✨ Características Principales

- 🎨 **Diseño Minimalista** - Interfaz limpia con tema dark y acentos azules
- 🖱️ **Cursor Personalizado** - Cursor interactivo que se adapta al contenido (texto, imágenes, botones)
- 🌐 **Internacionalización** - Soporte para Español e Inglés
- 📱 **100% Responsivo** - Optimizado para todos los dispositivos
- ⚡ **Performance Optimizada** - Carga rápida y animaciones fluidas
- 🔧 **Arquitectura Limpia** - Código bien estructurado y mantenible

---

## 🛠️ Stack Tecnológico

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### UI/UX
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Herramientas de Desarrollo
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

### Deployment
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Demo en Vivo

🔗 **[Ver Portfolio](https://tu-dominio.netlify.app)**

---

## 📱 Screenshots

<div align="center">
  <img src="./public/screenshots/hero-section.png" alt="Hero Section" width="45%">
  <img src="./public/screenshots/projects-section.png" alt="Projects Section" width="45%">
</div>

<div align="center">
  <img src="./public/screenshots/mobile-view.png" alt="Mobile View" width="30%">
  <img src="./public/screenshots/cursor-demo.gif" alt="Custom Cursor Demo" width="60%">
</div>

---

## 🎮 Cursor Personalizado

Una de las características más destacadas es el **cursor personalizado interactivo**:

- **🔵 Círculo por defecto** - Estado normal con efecto blur y glow
- **📝 Barra vertical** - Se activa sobre texto, adaptándose al tamaño de la fuente
- **🖼️ Etiqueta "image"** - Aparece al hacer hover sobre imágenes
- **⚡ Animaciones fluidas** - Powered by Framer Motion

```typescript
// Estados del cursor
type CursorVariant = 'default' | 'text' | 'image';

// Se adapta automáticamente al contenido
<element data-cursor="text">    // Barra vertical
<element data-cursor="image">   // Etiqueta "image"
```

---

## 🏃‍♂️ Inicio Rápido

### Prerrequisitos

- **Node.js** 18+ o **Bun** runtime
- **Git**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/juanchopi37/my-porfolio.dots.git

# Navegar al directorio
cd my-porfolio.dots

# Instalar dependencias con Bun (recomendado)
bun install

# O con npm
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
bun dev
# o
npm run dev

# El proyecto estará disponible en http://localhost:5173
```

### Build para Producción

```bash
# Generar build optimizado
bun run build
# o
npm run build

# Preview del build
bun run preview
# o
npm run preview
```

---

## 📂 Estructura del Proyecto

```
my-porfolio.dots/
├── 📁 public/                 # Recursos estáticos
│   ├── 📁 projects/          # Imágenes de proyectos
│   └── 📄 CV-Juan.pdf        # Curriculum Vitae
├── 📁 src/
│   ├── 📁 components/        # Componentes React
│   │   ├── 🎨 CustomCursor.tsx    # Cursor personalizado
│   │   ├── 🏠 Hero.tsx            # Sección principal
│   │   ├── 👤 AboutMe.tsx         # Acerca de mí
│   │   ├── 🚀 Projects.tsx        # Proyectos
│   │   └── 🛠️ Stack.tsx           # Stack tecnológico
│   ├── 📁 hooks/            # Custom hooks
│   │   └── 🖱️ useCursor.ts        # Lógica del cursor
│   ├── 📁 locales/          # Archivos de traducción
│   │   ├── 🇪🇸 es.json           # Español
│   │   └── 🇺🇸 en.json           # Inglés
│   └── 📁 pages/            # Páginas principales
├── 📄 tailwind.config.ts    # Configuración Tailwind
├── 📄 vite.config.ts        # Configuración Vite
└── 📄 package.json          # Dependencias del proyecto
```

---

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas usando **react-i18next**:

- 🇪🇸 **Español** (predeterminado)
- 🇺🇸 **Inglés**

### Agregar nuevo idioma

1. Crear archivo en `src/locales/[idioma].json`
2. Agregar configuración en `src/i18n.ts`
3. Implementar selector en `LanguageSelector.tsx`

---

## 🎨 Personalización

### Colores del Tema

```css
/* Variables principales en src/index.css */
--zed-blue: 59 130 246;    /* Azul principal */
--zed-dark: 15 23 42;      /* Fondo oscuro */
--zed-gray: 100 116 139;   /* Gris para texto */
```

### Configurar Cursor

```typescript
// En src/hooks/useCursor.ts
const variants = {
  default: { /* Configuración círculo */ },
  text: { /* Configuración barra */ },
  image: { /* Configuración etiqueta */ }
};
```

---

## 📊 Performance

### Métricas de Lighthouse

- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 95+

### Optimizaciones Implementadas

- ⚡ **Code Splitting** automático con Vite
- 🖼️ **Lazy Loading** de imágenes
- 🗜️ **Tree Shaking** para bundle mínimo
- 🎯 **Preload** de recursos críticos

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. **Fork** el proyecto
2. Crea una **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la branch (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

---

## 📞 Contacto

**Juan Carlos López Moreno**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/juanchopi37)
[![Email](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:juancarloslopezmoreno@proton.me)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **[Framer](https://framer.com)** - Inspiración para el cursor personalizado
- **[Radix UI](https://radix-ui.com)** - Componentes accesibles
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de estilos
- **[React](https://react.dev)** - Librería principal
- **[Vite](https://vitejs.dev)** - Build tool ultrarrápido

---

<div align="center">
  <p>⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐</p>
  <p>Hecho con ❤️ y mucho ☕ por <strong>Juan Carlos</strong></p>
</div>