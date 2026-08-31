# Café Tacuba

## Sobre el proyecto

Este proyecto es una página web de una cafetería llamada Café Tacuba.

La página está hecha con HTML y CSS. La idea es mostrar información básica de la cafetería, algunos de sus cafés y los datos de contacto.

## Tecnologías utilizadas

* HTML5
* CSS3
* Git
* GitHub

## Archivos del proyecto

El proyecto tiene:

* `index.html`: contiene toda la estructura y el contenido de la página.
* `styles.css`: contiene los estilos de la página.
* `img/`: contiene las imágenes utilizadas en el menú y en la página principal.
* `README.md`: contiene información sobre el proyecto.

## Estructura de la página

El `index.html` está dividido en diferentes partes.

### Header

El `header` contiene el nombre de la cafetería y el menú de navegación.

Dentro del `nav` están los enlaces para ir a las diferentes partes de la página:

* Inicio
* Nosotros
* Nuestros cafés
* Contacto

### Inicio

Es la primera sección de la página.

Tiene el título principal:

> Un buen café comienza con un buen momento

También tiene una descripción de la cafetería, un enlace para ir al menú y una imagen de un café.

### Nosotros

En esta parte se cuenta un poco sobre Café Tacuba y cómo se trabaja con los productos.

Se utiliza un `article` para agrupar esta información.

### Nuestro menú

En esta sección se muestran algunos de los cafés disponibles.

Cada café está dentro de un `article` y tiene:

* Imagen
* Nombre
* Descripción
* Precio

Los productos que aparecen son:

* Café Latte
* Cappuccino
* Café Americano

### Footer

El `footer` contiene la información de contacto de la cafetería.

Se muestra:

* Dirección
* Ciudad
* Correo electrónico
* Número de teléfono
* Copyright

## SEO

En el proyecto también se aplicaron algunos puntos básicos de SEO.

### 1. Título

En el `head` se agregó:

```html
<title>Café Tacuba | Cafetería artesanal</title>
```

Antes estaba como `Document`, pero se cambió por un título que explica de qué trata la página y contiene el nombre de la cafetería.

### 2. Meta descripción

También se agregó una descripción:

```html
<meta
  name="description"
  content="Café Tacuba, cafetería artesanal donde disfrutamos de buenos cafés y buenos momentos en San Miguel de Tucumán."
/>
```

Esta descripción explica brevemente de qué trata la página.

### 3. Encabezados

Se utilizó una estructura de encabezados para ordenar el contenido.

El `h1` se utiliza una sola vez para el título principal:

```html
<h1>Un buen café comienza con un buen momento</h1>
```

Después se utilizan `h2` para las secciones principales y `h3` para los productos y otros subtítulos.

### 4. Etiquetas semánticas

Se utilizaron etiquetas semánticas de HTML5 para organizar mejor la página.

Algunas de las etiquetas utilizadas son:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Cada una se utiliza para una parte diferente de la página.

Por ejemplo, `header` se usa para el encabezado, `main` para el contenido principal y `footer` para la información final.

### 5. Texto alternativo en las imágenes

Todas las imágenes tienen el atributo `alt`.

Por ejemplo:

```html
<img src="img/latte.webp" alt="Café latte servido en una taza" />
```

El `alt` sirve para describir la imagen y también ayuda a la accesibilidad de la página.

## Otros detalles

También se agregó:

```html
<html lang="es">
```

Esto indica que la página está escrita en español.

Además se utilizó:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Esto permite que la página se adapte mejor a diferentes tamaños de pantalla.

## Conclusión

La página de Café Tacuba fue realizada utilizando HTML5 y CSS3.

Se intentó mantener una estructura sencilla y ordenada utilizando etiquetas semánticas y aplicando los puntos básicos de SEO vistos para el proyecto.

También se agregaron descripciones para las imágenes, un título y una descripción de la página, además de una estructura correcta de encabezados.
