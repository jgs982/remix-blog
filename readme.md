## Remix JS (Full Stack Web Framework)

- Documentación: https://remix.run/docs/en/v1

- Crear proyecto
```
npx create-remix@latest
```

- Sistema de Rutas

    - Rutas estáticas de forma automática con los ficheros de 'app/routes'

    - Rutas estáticas anidadas usando carpetas y ficheros
        - app/routes/blog_static/index.jsx: localhost/blog_static
        - app/routes/blog_static/que-es-remix.jsx : localhost/blog_static/que-es-remix

    - Rutas dinámicas
        - app/routes/blog/$post.jsx: Por aquí ya entrarían todas las rutas del tipo 'localhost/blog/xxxxx'

    - Creando Links
    ```
    import { Link } from '@remix-run/react'
    ...
    ...
    <Link to='/blog'> Ir al Blog </Link>
    ...
    ...
    ```

    - Ruta de API y Ruta de UI
        - Las rutas vistas anteriormente son vistas de interfaz de usuario (UI)
        - Pero también podemos crear rutas de tipo API
            - Creamos 'app/routes/api/posts.jsx'
            ```
            export const loader = () => {
                return [
                    {
                        title: 'Que es Remix',
                        slug: 'que-es-remix'
                    },
                    {
                        title: 'Cursos de programación en TinCode',
                        slug: 'cursos-programacion-con-tincode'
                    }
                ]
            }
            ```  

    - Recuperando parámetros de una ruta dinámica
    ```
    import { useLoaderData } from '@remix-run/react'

    export const loader = (props) => {
        return props
    }

    const Post = () => {

        const data = useLoaderData()
        const slug = data.params.post

        return (
            <div>
                <h1> Slug: { slug } </h1>
            </div>
        )
    }

    export default Post
    ```

- Hooks
    - useLoaderData
    - useActionData
    - useTransition
    - useSubmit
    ...
    ...

- Añadir Tailwind [ https://remix.run/docs/en/v1/guides/styling#tailwind-css ]

    - Instalación
    ```
    npm install -D npm-run-all tailwindcss
    npx tailwindcss init
    ```

    - Configuración de 'tailwind.config.js' 
    ```
    module.exports = {
        content: ["./app/**/*.{ts,tsx,jsx,js}"],
        theme: {
            extend: {}
        },
        plugins: []
    }
    ```

    - Importar el CSS generado en nuestra aplicación (app/root.jsx)
    ```
    import styles from "./tailwind.css"

    export const links = () => [
        { rel: "stylesheet", href: styles },
    ]
    ```

    - Creamos './styles/tailwind.css'
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    - Sustituimos los scripts de package.json 
    ```
    ...
    ...
    "scripts": {
        "build": "run-s \"build:*\"",
        "build:css": "npm run generate:css -- --minify",
        "build:remix": "remix build",
        "dev": "run-p \"dev:*\"",
        "dev:css": "npm run generate:css -- --watch",
        "dev:remix": "remix dev",
        "generate:css": "npx tailwindcss -i ./styles/tailwind.css -o ./app/tailwind.css",
        "start": "remix-serve build"
    }
    ```

- Añadiendo clases dinámicas

    - Paquete que nos permite hacer condicionales dentro de las clases y no ensuciar el código
    ```
    npm install classnames
    ```

    - Uso
    ```
    import classnames from 'classnames'

    ...
    ...
    <div className={classNames('container mx-auto', {
        [className]: className
    })}>
        {children}
    </div>
    ```