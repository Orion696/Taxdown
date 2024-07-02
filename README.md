Componente Prueba Taxdown

1. Instalación de Node.js y Dependencias:
    - Asegúrate de tener Node.js. Si Node.js no está instalado, descárgalo e instálalo desde el sitio oficial (https://nodejs.org).
    - Una vez instalado, navega a la raíz del proyecto y ejecuta: `npm install`

2. Base de Datos y API Fake:
    - Se utiliza `json-server` para crear una API RESTful falsa localmente.
    - El comando utilizado para iniciar el servidor es:
`npx json-server --watch db.json --routes routes.json --port 3001`
- Esto permite simular la interacción con una API real utilizando el archivo `db.json` como base de datos.

3. Ejecución de la Aplicación:
    - Para iniciar sesión en la aplicación, utiliza las siguientes credenciales predeterminadas:
        - Usuario: usuario
        - Contraseña: contraseña
- El comando para arrancar la aplicación en el entorno de desarrollo es: `npm start`


Proyecto: Gestión de Impuestos con React, Redux y Redux-Saga

Descripción General
Este proyecto es una aplicación web de gestión de impuestos que permite a los usuarios iniciar sesión, ver una lista de impuestos activos, completar formularios asociados con cada impuesto y ver los envíos de estos formularios. La aplicación está construida utilizando React para la interfaz de usuario, Redux para el manejo del estado global y Redux-Saga para la gestión de efectos secundarios asíncronos.

Tecnologías Utilizadas
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Redux: Contenedor de estado predecible para aplicaciones JavaScript.
- Redux-Saga: Middleware para Redux para gestionar efectos secundarios asíncronos.
- React-Router: Biblioteca para el enrutamiento en aplicaciones React.
- JSON-Server: Herramienta para crear APIs REST fake basadas en archivos JSON.
- Jest: Framework de pruebas de JavaScript.
- React Testing Library: Conjunto de utilidades para probar componentes de React.
- CSS Modules: Técnica para el encapsulamiento de estilos CSS.

Estructura del Proyecto
1. db.json: Archivo de base de datos fake que contiene información sobre impuestos y formularios.
2. routes.json: Archivo de configuración de rutas para redireccionar a las pantallas de formularios de impuestos utilizando el parámetro de ID.
3. src/components:
   - LoginForm.js: Componente de formulario de inicio de sesión.
   - Dashboard.js: Componente que muestra la lista de impuestos activos.
   - TaxForm.js: Componente que renderiza un formulario dinámico basado en las entradas definidas en la respuesta JSON de la API.
   - FormSubmissions.js: Componente que muestra los envíos de formularios para un impuesto específico.
4. src/redux:
   - actions: Definición de acciones relacionadas con impuestos y formularios.
   - reducers: Reducers para manejar el estado relacionado con autenticación, impuestos y formularios.
   - sagas: Sagas para gestionar efectos secundarios asíncronos.
   - store: Configuración del store de Redux y ejecución de las sagas.
5. App.js: Configuración de rutas de la aplicación usando React Router.

Funcionalidades Implementadas
- Inicio de Sesión: Los usuarios pueden iniciar sesión utilizando un nombre de usuario y una contraseña.
- Visualización de Impuestos Activos: Los usuarios pueden ver una lista de impuestos activos en el Dashboard.
- Envío de Formularios: Los usuarios pueden completar y enviar formularios asociados con cada impuesto.
- Visualización de Envíos de Formularios: Los usuarios pueden ver una lista de los envíos de formularios para cada impuesto.

Pasos de Implementación

1. Autenticación:
   - Se implementó un formulario de inicio de sesión con validación de credenciales.
   - Se utilizó React Router para redirigir al usuario al Dashboard tras el inicio de sesión exitoso.

2. Listado de Impuestos:
   - Se creó el componente `Dashboard` que obtiene la lista de impuestos desde la API fake y los almacena en el estado utilizando Redux.
   - Se mostró la lista de impuestos activos en una tabla.

3. Formulario Dinámico:
   - Se creó el componente `TaxForm` que obtiene los campos del formulario desde la API fake.
   - Se implementó la lógica para enviar los datos del formulario a la API y almacenarlos en el estado de Redux.

4. Visualización de Envíos de Formularios:
   - Se creó el componente `FormSubmissions` que muestra los envíos de formularios para un impuesto específico.
   - Se implementó la lógica para filtrar los envíos por año, nombre, apellido y edad.

5. Pruebas:
   - Se escribieron pruebas utilizando Jest y React Testing Library para comprobar la estabilidad del renderizado y el mapeo correcto de valores.

Pruebas
- Unitarias: Pruebas unitarias para los componentes y las funciones de Redux.
- Integración: Pruebas de integración para asegurar que los componentes funcionan correctamente juntos.
- E2E: Pruebas de extremo a extremo para verificar el flujo completo de la aplicación.
