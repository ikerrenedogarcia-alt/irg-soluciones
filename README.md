# IRG Soluciones — web

Web de una sola página para IRG Soluciones. Es HTML, CSS y JavaScript sencillos, sin frameworks, para que cargue rápido en el móvil.

## Archivos

- `index.html` — todo el contenido y los textos de la web.
- `css/style.css` — colores, tamaños y diseño.
- `js/script.js` — detalles pequeños (año del pie de página, animación al hacer scroll).
- `assets/favicon.svg` — el icono que aparece en la pestaña del navegador.

## Cómo subirla a GitHub y Vercel (igual que con tu app de hábitos)

1. Crea un repositorio nuevo en GitHub, por ejemplo `irg-soluciones`.
2. Desde esta carpeta, en la terminal:
   ```
   git init
   git add .
   git commit -m "Primera versión de la web"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/irg-soluciones.git
   git push -u origin main
   ```
3. Entra en [vercel.com](https://vercel.com) con tu cuenta de GitHub.
4. Pulsa "Add New… → Project" y elige el repositorio `irg-soluciones`.
5. No hace falta tocar nada en la configuración (es una web estática). Pulsa "Deploy".
6. En un par de minutos te da una URL (algo como `irg-soluciones.vercel.app`). Esa es la que pones en la biografía de Instagram.

Cada vez que subas cambios a GitHub (`git add .`, `git commit`, `git push`), Vercel actualiza la web sola.

## Cómo cambiar los textos o precios tú solo

Todo el texto está en `index.html`. Puedes abrirlo con cualquier editor (por ejemplo, el Bloc de notas, o mejor con [Visual Studio Code](https://code.visualstudio.com), que es gratis).

- **Cambiar un precio**: busca `service-card__price` en el archivo. Verás cuatro veces el texto `Pide presupuesto` — uno por cada servicio, en el mismo orden en que aparecen en la web. Cambia ese texto por el precio que quieras, por ejemplo `Desde 40€`.
- **Cambiar una frase**: busca el texto tal cual aparece en la web (por ejemplo "Tu negocio, más fácil") y sustitúyelo por el nuevo texto, sin tocar las etiquetas `<...>` que lo rodean.
- **Cambiar el número de WhatsApp o el mensaje**: busca `wa.me/34690129017` — aparece varias veces (botón de arriba, de cada servicio, de contacto y el flotante). Si cambias el número, cámbialo en todas.
- **Cambiar el Instagram**: busca `instagram.com/irg.soluciones` y `@irg.soluciones`.
- **Colores**: en `css/style.css`, al principio del archivo hay un bloque `:root` con los colores corporativos (`--primary` es el negro, `--accent` es el amarillo). Cambia el código de color (por ejemplo `#F6C945`) y se actualiza en toda la web.

Después de cualquier cambio, guarda el archivo y vuelve a hacer:
```
git add .
git commit -m "Actualizo textos"
git push
```
Vercel se encarga del resto.

## Probarla en tu ordenador antes de subirla

Abre el archivo `index.html` haciendo doble clic, o arrástralo a una pestaña del navegador. No necesitas instalar nada.
