# DrEnvios Frontend

## 📌 Introducción
DrEnvios Frontend es la interfaz de usuario para la prueba técnica de la misma empresa, desarrollada con **React y Vite**. Este proyecto usa una colección de productos alojada en mongo db y el objetivo es que el usuario escoja productos de los que desea recibir un precio especial. El proyecto admite el inicio de sesión para traer los precios especiales almacenos previamente y agregar nuevos productos para recibir los precios especiales.

## 🚀 Pasos para ejecutar localmente

### 📋 Requisitos previos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [Git](https://git-scm.com/)

### 🔧 Instalación y ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sebaser99/drenvios-fronted.git
   ```
2. Acceder al directorio del proyecto:
   ```bash
   cd drenvios-fronted
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir el navegador en [http://localhost:5173](http://localhost:5173) (por defecto con Vite)

## 🎯 Justificación de elecciones técnicas

- **React con Vite**: Se eligió Vite sobre CRA por su velocidad en el tiempo de construcción y desarrollo.
- **TypeScript**: Mejora la seguridad del código con tipado estático y permite detección de errores en tiempo de ejecución.
- **ContextAPI**: Para la gestión del estado global de la aplicación sin necesidad de instalar dependencias adicionales.

## 📂 Descripción de la estructura del proyecto

```plaintext
📦 drenvios-fronted
├── 📁 src              # Código fuente principal
│   ├── 📁 components   # Componentes reutilizables
│   ├── 📁 pages        # Páginas principales de la aplicación
│   ├── 📁 hooks        # Hooks personalizados
│   ├── 📁 context      # Context API para gestión de estado (si aplica)
│   ├── 📁 styles       # Archivos de estilos (CSS o Tailwind)
│   ├── 📁 api          # Módulos para llamadas a la API
│   ├── main.tsx        # Punto de entrada de la aplicación
│   └── App.tsx         # Componente raíz de la aplicación
├── 📁 public           # Archivos estáticos
├── 📄 index.html       # Archivo principal HTML
├── 📄 package.json     # Dependencias y scripts
└── 📄 vite.config.ts   # Configuración de Vite
```

## 🚀 URL
https://drenvio-challenge.vercel.app/



