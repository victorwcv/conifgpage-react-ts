# User Settigns - Frontend

Este es la interfaz de usuario del proyecto User Settings, una aplicación web fullstack desarrollada con React-TS + Material UI + .NET + MongoDB para telefonos moviles.

## Versión Desplegada

Existe una versión desplegada en Render de este proyecto que puedes consultar en el siguiente enlace:

- **Frontend:** [User Settings Page](https://conifgpage.onrender.com/)  
- **Backend:** [API de ConfigPage](https://configpage-server-dotnet.onrender.com/)



## Entorno Local

Antes de empezar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 21.0.0 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Configuración del Entorno Local

1. **Clonar el Repositorio**

    ```bash
    git clone https://github.com/victorwcv/conifgpage-react-ts
    cd configpage-client-react-ts
    ```

2. **Instalar Dependencias**

    ```bash
    npm install
    # o
    yarn install
    ```

3. **Configurar Variables de Entorno**

    Crea un archivo `.env` en la raíz del proyecto y agrega lo siguiente:

    ```env
    VITE_API_URL=http://localhost:5163
    ```

    > **Nota:** Asegúrate de que la URL base de la API coincida con la URL del backend que estás utilizando.

4. **Iniciar la Aplicación**

    ```bash
    npm run dev
    # o
    yarn run dev
    ```

    La aplicación se iniciará en `http://localhost:5173` y debería conectarse al backend local configurado, debes tener el servidor local activo.



