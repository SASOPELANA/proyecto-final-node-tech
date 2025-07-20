# 🟢 Proyecto Final NodeJS - Talento Tech

Proyecto final, curso de NodeJS, brindado por Talento Tech - Agencia de Habilidades para el Futuro.

Este proyecto es una API REST para gestionar productos. Utiliza una combinación de Firebase para el almacenamiento principal y un archivo JSON local para operaciones específicas como la búsqueda y actualización. La autenticación se gestiona con JSON Web Tokens (JWT).

## 🚀 Instalación

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/SASOPELANA/proyecto-final-node-tech.git
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:
    ```
     PORT=tu_puerto
     FIREBASE_API_KEY=tu_api_key
     FIREBASE_AUTH_DOMAIN=tu_auth_domain
     FIREBASE_PROJECT_ID=tu_project_id
     FIREBASE_STORAGE_BUCKET=tu_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
     FIREBASE_APP_ID=tu_app_id
     JWT_SECRET=tu_jwt_secret
    ```
4.  Inicia el servidor en modo de desarrollo:
    ```bash
    npm run dev
    ```
    O en modo de producción:
    ```bash
    npm start
    ```
5.  Accede a la API en http://localhost:8080

## Endpoints de la API

### Autenticación

- **POST /login**
  - Autentica a un usuario y devuelve un JSON Web Token (JWT).

### Productos

- **GET /products**
  - Obtiene todos los productos desde Firestore.

- **GET /products/search**
  - **(Local)** Busca productos en el archivo `products.json`. No consulta Firestore.

- **GET /products/:id**
  - Obtiene un producto por su ID desde Firestore.

- **POST /products**
  - Crea un nuevo producto en Firestore. Requiere autenticación (JWT).

- **PUT /products/:id**
  - **(Local)** Actualiza un producto por su ID en el archivo `products.json`. No modifica los datos en Firestore.

- **DELETE /products/:id**
  - Elimina un producto por su ID en Firestore.

## 🚀 Deploy

El deploy de esta aplicación se realiza en [Vercel](https://vercel.com/).

## 🛠️ Herramientas utilizadas

- NodeJS
- Express
- Firebase
- JSON Web Token (JWT)
- Nodemon
