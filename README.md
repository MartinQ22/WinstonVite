# 🛍️ Winston Vite - Tienda eCommerce

Este es un proyecto de eCommerce desarrollado con **React** y **Vite**, que permite a los usuarios navegar entre productos, agregarlos al carrito, crear órdenes de pedido y simular compras.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/) – Biblioteca principal para la construcción de interfaces.
- [Vite](https://vitejs.dev/) – Herramienta de desarrollo rápida para proyectos frontend.
- [Firebase](https://firebase.google.com/docs) – Backend para almacenamiento de productos y órdenes.
- [React Router](https://reactrouter.com/) – Para la navegación entre rutas.
- [React DOM](https://reactjs.org/) – Renderizado de la app en el DOM.
- [React Toastify](https://www.npmjs.com/package/react-toastify) – notificaciones del toaster.
- [React Spinners](https://mhnpd.github.io/react-loader-spinner/docs/intro) – loader para darle feedback al usuario.
- [React Router DOM](https://reactrouter.com/) – Enlace entre React Router y el DOM.
- [Styled Components](https://styled-components.com/docs) – Estilado basado en componentes.

## ✨ Funcionalidades

- 🛒 Agregar y quitar productos del carrito.
- 📦 Crear órdenes de pedido con los productos seleccionados.
- 🔁 Navegación fluida entre distintas vistas con React Router.
- 💸 Finalizar compras simuladas con persistencia de datos en Firebase.
- 📱 Diseño responsive y estilizado con `styled-components`.

## 📂 Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables como Navbar, ItemList, Cart
├── context/           # Contexto global para el carrito
├── firebase/          # Configuración e interacción con Firebase
├── App.jsx            # Componente principal con rutas
└── main.jsx           # Punto de entrada de la aplicación
```

## 📦 Instalación y uso

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/MartinQ22/WinstonVite.git
   cd WinstonVite
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Iniciá el proyecto:

   ```bash
   npm run dev
   ```

> 💡 Asegurate de tener configurado tu proyecto de Firebase y reemplazar las credenciales en `firebase/config.js`.

## 👤 Autor

Desarrollado por **Martín Quiroga**