# Parcial Tecnologías Web 1

Parcial de la materia Programacioón con Tecnologías Web.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Decisiones de Desarrollo](#decisiones-de-desarrollo)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:

```bash
npm start
```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

La estructura de directorios del proyecto es la siguiente:

```
src
    ├── App.js
    ├── LanguageSwitcher.js
    ├── LoginPage.js
    ├── UserPage.js
    ├── i18n.js
    └── index.js
```

## Componentes Principales

1. **LoginPage**: Este componente permite a los usuarios ingresar sus credenciales. En caso de un inicio de sesión exitoso, redirige al usuario a la `UserPage`.

2. **UserPage**: Este componente muestra los datos del usuario después de que han iniciado sesión.

3. **LanguageSwitcher**: Este componente se encuentra en ambas páginas (LoginPage y UserPage) y permite a los usuarios cambiar el idioma de la aplicación entre español e inglés.

4. **index.js**: Este es el punto de entrada principal de la aplicación donde se inicializa React y se aplica el enrutamiento utilizando `react-router-dom`.

## Decisiones de Desarrollo

- **Inicialización del Proyecto**: Se utilizó `Create React App` para inicializar el proyecto

- **Estilo y Diseño**: Se incorporó `Bootstrap` para el diseño y estilo de la interfaz de usuario.

- **Navegación**: Se implementó `react-router-dom` para manejar el enrutamiento entre las diferentes páginas de la aplicación.

- **Internacionalización**: Se utilizó `i18n` para permitir que la aplicación soporte múltiples idiomas. Se configuró para que el idioma por defecto sea español.

