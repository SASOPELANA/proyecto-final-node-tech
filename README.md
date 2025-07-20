# 🟢 Proyecto Final NodeJS - Talento Tech

Proyecto final, curso de NodeJS, brindado por Talento Tech - Agencia de Habilidades para el Futuro.

Este proyecto es una API REST para gestionar productos. Utiliza una combinación de Firebase para el almacenamiento principal y un archivo JSON local para operaciones específicas como la búsqueda y actualización. La autenticación se gestiona con JSON Web Tokens (JWT).

## 🚀 Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/SASOPELANA/proyecto-final-node-tech.git
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```env
    PORT=tu_puerto
    FIREBASE_API_KEY=tu_api_key
    FIREBASE_AUTH_DOMAIN=tu_auth_domain
    FIREBASE_PROJECT_ID=tu_project_id
    FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    FIREBASE_APP_ID=tu_app_id
    JWT_SECRET=tu_jwt_secret
    ```

4. Inicia el servidor en modo de desarrollo:

    ```bash
    npm run dev
    ```

    O en modo de producción:

    ```bash
    npm start
    ```

5. Accede a la API en:

    ```bash
    http://localhost:8080
    ```

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
  - Este es el único endpoint que requiere el token JWT en el header Authorization.

- **PUT /products/:id**
  - **(Local)** Actualiza un producto por su ID en el archivo `products.json`. No modifica los datos en Firestore.

- **DELETE /products/:id**
  - Elimina un producto por su ID en Firestore.

## 🚀 Deploy

El deploy de esta aplicación se realiza en [Vercel](https://proyecto-final-node-tech.vercel.app).

## 🛠️ Herramientas utilizadas

- NodeJS
- Express
- Firebase
- JSON Web Token (JWT)
- Nodemon
- Cors
- Dotenv

## 📁 Estructura del proyecto

```plaintext
src/
  controllers/        # Lógica de negocio y controladores de rutas
  middlewares/        # Middlewares personalizados (ej: autenticación)
  models/             # Modelos y datos locales
  routes/             # Definición de rutas de la API
  services/           # Servicios para acceso a datos y lógica extra
```

## 🔑 Autenticación JWT

Para acceder a endpoints protegidos, primero obtén un token:

```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"email":"tu_email","password":"tu_password"}'
```

La respuesta será:

```json
{
  "token": "<JWT_TOKEN>"
}
```

Usa el token en el header Authorization, para método POST:

```bash
curl -X POST http://localhost:8080/products \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ejemplo","precio":100,"description": "ejemplo","categories": ["ejemplo1", "ejemplo2"]}'
```

## 📦 Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
