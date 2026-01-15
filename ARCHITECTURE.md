# Arquitectura del Portafolio - Scope Rule & Screaming Architecture

## 🎯 Principios Arquitectónicos

Este portafolio sigue estrictamente **Scope Rule** y **Screaming Architecture** para garantizar:
- **Claridad inmediata**: La estructura "grita" que es un portafolio personal
- **Mantenibilidad**: Cada componente tiene su lugar específico según su uso
- **Escalabilidad**: Fácil añadir nuevas features sin romper la estructura

## 📁 Estructura del Proyecto

```
src/
├── features/                          # FEATURES - Funcionalidades del negocio
│   ├── hero-showcase/                 # Presentación personal
│   │   ├── hero-showcase.tsx          # Container (nombre = feature)
│   │   ├── components/                # Componentes LOCALES
│   │   │   ├── social-links.tsx
│   │   │   ├── copy-email-button.tsx
│   │   │   └── download-cv-button.tsx
│   │   └── index.ts                   # Barrel export
│   │
│   ├── professional-profile/          # Perfil profesional "About Me"
│   │   ├── professional-profile.tsx   # Container
│   │   ├── components/
│   │   │   └── profile-carrusel.tsx   # LOCAL - solo para este feature
│   │   └── index.ts
│   │
│   ├── project-showcase/              # Galería de proyectos
│   │   ├── project-showcase.tsx       # Container
│   │   ├── components/
│   │   │   └── project-card.tsx
│   │   └── index.ts
│   │
│   ├── tech-stack-display/            # Habilidades técnicas
│   │   ├── tech-stack-display.tsx     # Container
│   │   └── index.ts
│   │
│   ├── certifications-display/        # Certificaciones
│   │   ├── certifications-display.tsx # Container
│   │   ├── components/
│   │   │   └── certificate-card.tsx
│   │   └── index.ts
│   │
│   └── navigation/                    # Navegación cross-cutting
│       ├── components/
│       │   ├── navbar.tsx
│       │   ├── footer.tsx
│       │   ├── language-selector.tsx  # LOCAL - solo en navbar
│       │   └── theme-toggle.tsx       # LOCAL - solo en navbar
│       └── index.ts
│
├── shared/                            # COMPARTIDO - 2+ features lo usan
│   ├── components/
│   │   ├── lazy-image.tsx             # Usado por: projects, profile
│   │   └── ui/                        # shadcn/ui - usados globalmente
│   │       ├── button.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── primary-button.tsx
│   │       └── ...
│   └── hooks/
│       ├── use-mobile.tsx
│       ├── use-desktop-device.ts
│       └── use-theme-system.ts
│
├── infrastructure/                    # INFRAESTRUCTURA - Cross-cutting concerns
│   ├── theme/
│   │   └── custom-cursor.tsx
│   └── i18n/
│       ├── i18n.ts
│       └── locales/
│           ├── en.json
│           └── es.json
│
├── pages/                             # Páginas/Rutas
│   ├── index.tsx                      # Página principal
│   └── not-found.tsx
│
├── data/                              # Data estática
│   ├── projects.json
│   ├── certificates.json
│   └── images.json
│
└── lib/                               # Utilidades
    └── utils.ts
```

## 🔒 Scope Rule - LA LEY INQUEBRANTABLE

### Regla Simple, Aplicación Estricta:

```
SI componente es usado por 1 feature    → VA EN /features/{feature-name}/components/
SI componente es usado por 2+ features  → VA EN /shared/components/
```

### Ejemplos Reales de Este Proyecto:

#### ✅ CORRECTO - Componente Local
```typescript
// profile-carrusel.tsx está en:
// features/professional-profile/components/
// 
// RAZÓN: Solo usado por professional-profile
// NUNCA debe moverse a shared mientras solo 1 feature lo use
```

#### ✅ CORRECTO - Componente Compartido
```typescript
// lazy-image.tsx está en:
// shared/components/
//
// RAZÓN: Usado por professional-profile Y project-showcase
// DEBE estar en shared porque 2+ features lo usan
```

#### ❌ INCORRECTO - Violación del Scope Rule
```typescript
// ❌ MAL: Carrusel en shared/ cuando solo 1 feature lo usa
// ❌ MAL: LazyImage en feature cuando 2+ lo usan
```

## 📢 Screaming Architecture

### ¿Qué Comunica Esta Estructura?

Al abrir `src/features/` inmediatamente ves:
- `hero-showcase` → "Hay una presentación de hero"
- `professional-profile` → "Hay un perfil profesional"
- `project-showcase` → "Hay una galería de proyectos"
- `tech-stack-display` → "Hay una muestra de habilidades"
- `certifications-display` → "Hay certificaciones"

**NO** ves carpetas técnicas como:
- ❌ `components/` (¿componentes de qué?)
- ❌ `containers/` (¿qué contienen?)
- ❌ `views/` (¿qué muestran?)

## 🎨 Naming Conventions

### Container = Feature Name
```typescript
// ✅ CORRECTO
features/hero-showcase/hero-showcase.tsx

// ❌ INCORRECTO
features/hero-showcase/Hero.tsx
features/hero-showcase/HeroContainer.tsx
```

### Imports con Path Aliases

```typescript
// Features
import HeroShowcase from "@features/hero-showcase";
import { Navbar, Footer } from "@features/navigation";

// Shared
import LazyImage from "@shared/components/lazy-image";
import { Button } from "@shared/components/ui/button";
import { useMobile } from "@shared/hooks/use-mobile";

// Infrastructure
import CustomCursor from "@infrastructure/theme/custom-cursor";
```

## 🔄 Proceso de Decisión

### Cuando Creas un Nuevo Componente:

1. **Pregunta**: ¿Cuántas features usarán este componente?
   
2. **SI respuesta = 1 feature**:
   ```
   → Crear en features/{feature-name}/components/
   ```

3. **SI respuesta = 2+ features**:
   ```
   → Crear en shared/components/
   ```

4. **SI es infraestructura (tema, i18n, auth, etc.)**:
   ```
   → Crear en infrastructure/
   ```

### Cuando Refactorizas:

1. **Componente crece y se usa en otra feature**:
   ```
   → MOVER de features/{feature}/components/ a shared/components/
   ```

2. **Componente compartido ya no se usa en múltiples features**:
   ```
   → MOVER de shared/components/ a features/{única-feature}/components/
   ```

## 📊 Beneficios Medibles

### Antes de la Refactorización:
- ❌ 20+ componentes mezclados en `/components/`
- ❌ Imposible saber qué hace la app sin leer código
- ❌ UI components mezclados con lógica de negocio
- ❌ No se sabía dónde colocar nuevos componentes

### Después de la Refactorización:
- ✅ Estructura clara por funcionalidad
- ✅ Se entiende qué hace la app al ver carpetas
- ✅ Separación clara: features / shared / infrastructure
- ✅ Reglas claras para colocación de componentes
- ✅ Aliases claros (@features, @shared, @infrastructure)

## 🚀 Próximos Pasos

Si necesitas añadir:

### Nueva Feature:
```bash
src/features/nueva-feature/
├── nueva-feature.tsx          # Container (mismo nombre!)
├── components/                # Solo componentes locales
│   └── feature-specific.tsx
└── index.ts                   # export { default } from './nueva-feature'
```

### Nuevo Componente Compartido:
```bash
# Solo si 2+ features lo usarán
src/shared/components/nuevo-componente.tsx
```

### Nueva Infraestructura:
```bash
src/infrastructure/nueva-infra/
└── config.ts
```

## 📝 Reglas de Oro

1. **Scope Rule es ABSOLUTA**: 1 feature = local, 2+ = shared
2. **Container name = Feature name**: Sin excepciones
3. **Features comunican funcionalidad**: No nombres técnicos
4. **Imports usan aliases**: Nunca rutas relativas largas
5. **Barrel exports**: Cada feature tiene index.ts

---

**Esta arquitectura no es negociable. Es la base para la mantenibilidad a largo plazo.**
