# 🖤 Jinshirō Daikō - Página Personal Melancólica

![Preview de la página](https://i.postimg.cc/4d7hFWnn/Captura-de-pantalla-2025-07-20-115736.png)

## 📖 Descripción

Una página web personal con temática melancólica y oscura, diseñada como un refugio digital donde la tristeza se convierte en arte. Esta aplicación web incluye un reproductor de música flotante, blog personal, estadísticas de uso y efectos visuales únicos con partículas animadas.

## ✨ Características Principales

- 🎵 **Reproductor de música flotante** - Movible y redimensionable
- 📝 **Blog personal** - Sistema completo de CRUD para escribir pensamientos
- 📊 **Estadísticas en tiempo real** - Tiempo en página, música escuchada, posts escritos
- 😢 **Caras rotas animadas** - Expresiones que cambian automáticamente
- ⚡ **Efectos de partículas** - Fondo animado con rayos y partículas
- 🔒 **Página privada** - Solo accesible desde tu red local
- 📱 **Completamente responsivo** - Optimizado para móvil y desktop
- 🌙 **Tema oscuro elegante** - Diseño melancólico con efectos de vidrio
- ⏳ **Pantalla de carga animada** - Con corazón roto y frases tristes

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jeanchongdev/page-sad.git
cd page-sad
```

### 2. Instalar dependencias principales

```bash
# Dependencias de Next.js y React
npm install next react react-dom typescript

# Dependencias de tipos para TypeScript
npm install @types/node @types/react @types/react-dom

# Tailwind CSS y utilidades
npm install tailwindcss postcss autoprefixer
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

# Iconos y animaciones
npm install lucide-react framer-motion

# Componentes UI de Radix
npm install @radix-ui/react-slider @radix-ui/react-accordion
npm install @radix-ui/react-dropdown-menu @radix-ui/react-separator
```

### 3. Configurar shadcn/ui

```bash
# Inicializar shadcn/ui
npx shadcn@latest init

# Instalar componentes necesarios
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add slider
npx shadcn@latest add card
npx shadcn@latest add separator
npx shadcn@latest add dropdown-menu
```

### 4. Configurar archivos de música

```bash
# Crear carpeta para las canciones
mkdir public/music

# Coloca tus archivos MP3 en esta carpeta:
# public/music/cancion1.mp3
# public/music/cancion2.mp3
# etc.
```

### 5. Ejecutar el proyecto

```bash
# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes UI reutilizables

### Librerías y Herramientas
- **Lucide React** - Iconos SVG
- **Framer Motion** - Animaciones avanzadas
- **Radix UI** - Componentes primitivos accesibles
- **Class Variance Authority** - Utilidad para variantes de clases
- **clsx & tailwind-merge** - Utilidades para clases condicionales

### Características Técnicas
- **CSS Modules** - Estilos con scope local
- **LocalStorage** - Persistencia de datos del blog
- **Canvas API** - Efectos de partículas animadas
- **Middleware** - Protección de privacidad
- **Responsive Design** - Adaptable a todos los dispositivos

## 📁 Estructura del Proyecto

```
page-sad/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/
│   ├── SadApp.tsx         # Componente principal
│   ├── LoadingScreen.tsx  # Pantalla de carga
│   ├── ParticlesBackground.tsx # Fondo de partículas
│   ├── MusicPlayer.tsx    # Reproductor de música
│   ├── Navigation.tsx     # Menú de navegación
│   ├── BrokenFaces.tsx    # Caras rotas animadas
│   ├── Blog.tsx           # Sistema de blog
│   └── Statistics.tsx     # Estadísticas de uso
├── public/
│   └── music/             # Archivos de música MP3
├── middleware.ts          # Protección de privacidad
├── tailwind.config.ts     # Configuración de Tailwind
└── package.json           # Dependencias del proyecto
```

## ⚙️ Configuración Adicional

### Personalizar Música

1. Coloca tus archivos MP3 en `public/music/`
2. Edita el array `sampleSongs` en `components/SadApp.tsx`:

```typescript
const sampleSongs = [
  {
    id: 1,
    title: "Tu Canción",
    artist: "Jinshirō Daikō",
    url: "/music/tu-cancion.mp3",
    duration: 240, // duración en segundos
  },
  // Agrega más canciones...
]
```

### Configurar Privacidad

Edita `middleware.ts` y agrega tu IP en `allowedIPs`:

```typescript
const allowedIPs = [
  "127.0.0.1",
  "localhost",
  "TU_IP_AQUI", // Reemplaza con tu IP real
]
```

### Personalizar Colores

Modifica `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  sad: {
    dark: "#0a0a0a",
    gray: "#1a1a1a",
    purple: "#2d1b69",
    blue: "#1e3a8a",
  },
}
```

## 🎨 Características de Diseño

- **Fuente elegante**: Dancing Script (similar a Brush Script)
- **Efectos de vidrio**: Backdrop blur en todos los componentes
- **Gradientes oscuros**: Negro a púrpura profundo
- **Animaciones suaves**: Transiciones y efectos flotantes
- **Partículas dinámicas**: Fondo animado con efectos de rayos
- **Iconos expresivos**: Caras que cambian automáticamente

## 📱 Uso

1. **Navegación**: Usa el menú hamburguesa en la esquina superior izquierda
2. **Reproductor**: Aparece automáticamente, puedes moverlo arrastrando
3. **Blog**: Escribe tus pensamientos en la sección "Diario"
4. **Estadísticas**: Ve tu tiempo de uso en la sección correspondiente
5. **Privacidad**: Solo tú puedes acceder desde tu red local

## 🔒 Seguridad y Privacidad

- Middleware que bloquea acceso no autorizado
- Solo visible desde IPs permitidas
- Página de "Acceso Denegado" para usuarios no autorizados
- Datos del blog guardados localmente en tu navegador

## 🤝 Contribuciones

Este es un proyecto personal, pero si tienes sugerencias o encuentras bugs, puedes:

1. Abrir un issue en GitHub
2. Hacer un fork del proyecto
3. Crear una pull request con mejoras

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

## 👤 Autor

**Jinshirō Daikō** (神志郎 大晃)
- GitHub: [@jeanchongdev](https://github.com/jeanchongdev)

---

