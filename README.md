# León de Greiff - Maqueta del Proyecto 50 Años

Maqueta interactiva desarrollada en **Astro 5** y **Tailwind CSS 4** para presentar el proyecto de conmemoración de los 50 años de la partida de León de Greiff (1895-1976), uno de los poetas más destacados de Colombia.

## 🚀 Estructura del Proyecto

El proyecto está organizado en las siguientes secciones:

### Páginas Principales
- **Inicio** (`/`) - Landing page con introducción al poeta y al proyecto
- **El Proyecto** (`/proyecto`) - Visión general y contexto del proyecto
- **Los Tres Universos** (`/universos`) - Detalle de las tres fases del proyecto
- **Comparativa** (`/comparativa`) - Tabla comparativa de los universos
- **Cómo Participar** (`/participar`) - Formas de colaboración

### Los Tres Universos

#### Universo A: Mínimo Viable 🚀
Presencia digna y funcional para el lanzamiento con contenido estático de alta calidad.

#### Universo B: Realista ⚡
Experiencia rica e interactiva con contenidos dinámicos y herramientas de búsqueda.

#### Universo C: Ideal Soñador ✨
Recurso definitivo mundial con gamificación, IA, multimedia y alcance internacional.

## 🛠️ Tecnologías

- **Astro 4** - Framework web moderno
- **Tailwind CSS 3** - Framework de CSS utility-first
- **TypeScript** - Tipado estático

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Diseño

La maqueta utiliza una paleta limpia y clara:

- **Colores principales**: Blancos, grises claros y negros (inspirados en la fotografía histórica)
- **Tipografía**: 
  - Serif elegante (Playfair Display) para títulos y elementos poéticos
  - Sans-serif moderna (Inter) para texto de interfaz
- **Animaciones**: Sutiles y sofisticadas, respetando el carácter literario del proyecto

## 📂 Estructura de Archivos

```
/
├── public/
│   └── leon-de-greiff.png       # Fotografía icónica del poeta
├── src/
│   ├── components/
│   │   ├── Navigation.astro     # Barra de navegación
│   │   ├── Footer.astro         # Pie de página
│   │   └── UniversoCard.astro   # Tarjetas de universos
│   ├── layouts/
│   │   └── Layout.astro         # Layout base
│   ├── pages/
│   │   ├── index.astro          # Página de inicio
│   │   ├── proyecto.astro       # Página del proyecto
│   │   ├── universos.astro      # Página de los tres universos
│   │   ├── comparativa.astro    # Tabla comparativa
│   │   └── participar.astro     # Página de participación
│   └── styles/
│       └── global.css           # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 📝 Notas

Esta es una maqueta de presentación para demostrar el concepto del proyecto y convencer a posibles aportantes. El contenido está estructurado para mostrar las tres fases progresivas del desarrollo del sitio web definitivo leondegreiff.org.

## 👨‍👩‍👧‍👦 Acerca de León de Greiff

Francisco de Asís León Bogislao de Greiff Häusler (1895-1976), conocido como León de Greiff, fue uno de los más destacados poetas del siglo XX en Colombia. Fundador del movimiento Los Panidas (1915) junto a Fernando González y Ricardo Rendón, su poesía neobarroca y musical marcó un hito en la literatura colombiana.

## 📧 Contacto

Para más información sobre el proyecto: contacto@leondegreiff.org

---

Desarrollado con ❤️ para honrar el legado de León de Greiff
