# API-de-Tareas-con-Node.js

## Descripción

Esta API implementa un sistema para gestionar tareas. Permite a los usuarios crear, leer, actualizar y eliminar tareas mediante solicitudes HTTP.

## Pregunta de Evaluación Técnica

Imagina que está desarrollando una API que gestiona tareas. Completa las siguientes tareas:

1. **Listar Tareas:** Crea una ruta `GET /task` que permita obtener una lista de todas las tareas.
    - La respuesta debe ser un array de objetos que contengan los detalles de cada tarea.

2. **Obtener Tarea Específica:** Crea una ruta `GET /task/:id` que permita obtener los detalles de una tarea específica por su Id.
    - Si la tarea no existe, la API debe devolver un mensaje de error adecuado.

3. **Crear una Nueva Tarea:** Implementa una ruta `POST /tasks` que permita crear una nueva tarea.
    - El cuerpo de la solicitud debe tener un título y una descripción. El título debe ser obligatorio.

4. **Actualizar Tarea:** Crea una ruta `PUT /tasks/:id` que permita actualizar los detalles de una tarea en específica por su Id.
    - Permite actualizar el título, la descripción y el estado de la tarea.

5. **Eliminar Tarea:** Implementa una ruta `DELETE /tasks/:id` que permita eliminar una tarea por su Id.
    - Si la tarea no existe, la API debrá devolver un mensaje de error adecuado.

---

## Criterio de Evalucación

- Correcta implementación de las operaciones CRUD (crear, Leer, Actualizar, Eliminar).
- Manejo adecuado de errores (Tarea no encontrada, datos faltantes).
- Estructura y organización del código.
- Validación de entrada para asegurar que se proporcionen los datos necesarios.
- Respuestas claras y código de estado HTTP adecuados.

--

Esto es con fin de evaluar las habilidades en Node.js, manejo de solicitudes HTTP y diseño de API's RESTful.