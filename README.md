# Café Tacuba

Autores: Jaimes Ivan, Rios Christian, Lopez Luis

## Sobre el proyecto

Página web de la cafetería artesanal Café Tacuba, en San Miguel de Tucumán. Muestra información de la cafetería, el menú de cafés y los datos de contacto.

## Tecnologías

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript
- Git / GitHub


## Estructura de la página

- **Header**: navbar con el nombre de la cafetería y navegación (Inicio, Nosotros, Nuestros cafés, Contacto) y botón de inicio de sesión.
- **Inicio**: hero con el título y una imagen de café.
- **Nosotros**: breve historia de la cafetería.
- **Nuestro menú**: los cafés se generan dinámicamente desde un array en `script.js` con Bootstrap cards.
- **Footer**: dirección, contacto y copyright.

El menú incluye: Café Espresso, Latte, Cappuccino, Mocha, Macchiato y Affogato, cada uno con imagen, nombre y descripción.

## Interacciones

- **Inicio de sesión**: abre un modal que pide usuario y contraseña; al validar, muestra el nombre en el botón.
- **Sobre nosotros**: abre un modal con más información.
- **Contacto**: hace scroll suave hasta el footer.

## SEO y accesibilidad

- Título y meta descripción en el `head`.
- Estructura de encabezados jerárquica (un único `h1`).
- Etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`).
- Atributo `alt` en todas las imágenes.
- `<html lang="es">` y `meta viewport` para diseño responsive.