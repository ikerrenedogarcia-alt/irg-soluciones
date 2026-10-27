# IRG Soluciones — web

Web de una sola página para IRG Soluciones. Es HTML, CSS y JavaScript sencillos, sin frameworks, para que cargue rápido en el móvil.

## Archivos

- `index.html` — todo el contenido y los textos de la web.
- `css/style.css` — colores, tamaños y diseño.
- `js/script.js` — detalles pequeños (año del pie de página, animación al hacer scroll).
- `assets/favicon.svg` — el icono que aparece en la pestaña del navegador.
- `legal/aviso-legal.html`, `legal/privacidad.html`, `legal/cookies.html`, `legal/terminos.html` — páginas legales (ver más abajo).

## ⚠️ Antes de publicarla: rellena tus datos legales

En tres páginas (`legal/aviso-legal.html`, `legal/privacidad.html` y `legal/terminos.html`) he dejado resaltado en amarillo tu **NIF/DNI** y tu **dirección fiscal**. No los he rellenado yo porque son datos personales sensibles. Es obligatorio por ley (LSSI-CE) tenerlos publicados si cobras por tus servicios, así que:

1. Abre esos 3 archivos con un editor de texto.
2. Busca `[Tu NIF/DNI]` y `[Tu dirección fiscal, Palencia]` (aparecen varias veces).
3. Sustitúyelos por tus datos reales.

Si todavía no estás dado de alta como autónomo y vas a empezar a cobrar por estos servicios, es el momento de regularizarlo — pregúntale a una gestoría si tienes dudas.

## Repositorio y despliegue

Esta web ya está subida a GitHub en **https://github.com/ikerrenedogarcia-alt/irg-soluciones**, con el mismo flujo que usamos para tu app de hábitos. Para subir cambios nuevos:
```
git add .
git commit -m "Actualizo textos"
git push
```
Vercel se encarga del resto (si ya está conectado; si no, en la propia conversación te confirmo el estado del despliegue).

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
