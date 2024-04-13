# Proyecto de Rick y Morty

## Descripción
Este es un proyecto de React que utiliza la API de Rick y Morty para mostrar información sobre los personajes de la serie. El proyecto utiliza Bootstrap para los estilos y presenta una lista de personajes con paginación.

## Componentes

### App
Este es el componente principal de la aplicación. Renderiza el componente `CharacterList` y aplica los estilos globales de Bootstrap.

### NavPage
Este componente se encarga de la navegación entre las páginas de la lista de personajes. Tiene dos botones, uno para ir a la página anterior y otro para ir a la página siguiente. El botón para ir a la página anterior se desactiva cuando la página actual es la primera.

### CharacterList
Este componente se encarga de hacer la petición a la API de Rick y Morty y de renderizar la lista de personajes. Utiliza el hook `useEffect` para hacer la petición cuando se carga el componente o cuando cambia la página actual. Muestra un mensaje de "Cargando..." mientras se espera la respuesta de la API.

### Character
Este es un componente que recibe la información de un personaje y la muestra en la interfaz. Muestra el nombre, la especie, el estado y el origen del personaje.

## Tecnologías Utilizadas

Este proyecto utiliza varias tecnologías modernas para su desarrollo:

- **Bootstrap**: Un framework de CSS que permite crear interfaces de usuario modernas y responsivas de manera rápida y fácil.
- **API de Rick y Morty**: Una API gratuita que proporciona datos sobre los personajes de la serie Rick y Morty.
- **Vercel**: Una plataforma de despliegue en la nube que permite desplegar aplicaciones web de manera rápida y sencilla.


