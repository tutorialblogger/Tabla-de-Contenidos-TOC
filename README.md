# Tabla o índice de contenidos para blogger - TOC

Este es un ejemplo de cómo usar una Tabla de Contenidos en blogger. <a href="https://site3cero-legales.blogspot.com/p/indice-de-contenido-toc-prueba.html">Ver ejemplo aquí</a>

# Instalación.

Copia todo el contenido de <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-CSS.css">TOC-CSS</a>. Ahora ve a Blogger, luego ve a Temas > Editar HTML, y busca "]]></b:skin>" dentro del editor y  antes de esa línea pega el código CSS copiado con anterioridad. Guarda los cambios.

Luego añadimos el script <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-Script.js">TOC-Script</a> que ejecutara la expancion y contracción de la tabla de contenidos en nuestra plantilla de blogger. Buscamos el cierre de head "&lt;/head&gt;" y antes de ella pegamos nuestro script.

Por ultimo copia todo el contenido de <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-HTML.html">TOC-HTML</a> y pegalo dentro de blogger en la parte superior de tus entradas o páginas estaticas, así el visitante de tu blog podrá navegar por el contenido de tu post sin problemas o simplemente leer lo que mas le interese de tu indice de contenidos.
Cambiar en el archivo xml el contenido de ejemplo por tus datos. 

# Nota adicional.

Debes usar los Anclajes y enlaces ancla para hacer que la tabla funciones en el mismo post, ejemplo:

- En el enlace debes colocar la ruta al anclaje: &lt;a href=&quot;#1&quot;&gt;Cap&iacute;tulo 1&lt;/a&gt;
- En el titulo debes colocar un nombre e Id del anclaje: &lt;h2&gt;&lt;a name=&quot;1&quot; id=&quot;1&quot;&gt;&lt;/a&gt;Título del Capítulo 1&lt;/h2&gt;

# Derechos de autor.

Este indice de contenidos en CSS, HTML, fue tomado de <a href="http://5thirtyone.com/sandbox/share/toc/" target="_blank">5thirtyone</a> y adaptada para blogger dentro de un JavaScript (spoiler que aun no recuerdo de donde lo tome :) , dejaré este enlace para quien quiera variar el spoiler   <a href="https://codepen.io/tovic/pen/razXbO">Pure JavaScript Spoiler</a>  )

# Por mejorar.

- Que los títulos esten dentro de la tabla TOC con sus H1 o H2 orientado al SEO ONPAGE, en su defecto que solo quede el enlace del título como en los pluging de un CMS.
- Mejorar la versión responsive para móviles.
- Que funcione con la Jquery actual ya que solo funciona con la versión 1.11.0

PD: Si quieres ayudar a este proyecto, mete mano a los archivos si sabes como hacer la mejora y publica la actualización, con ello ayudas a la comunidad Blogger a nivel mundial ;)

# Actualización.

Hoy te traigo un pack completo de diferentes tablas de contenidos exclusivas para blogger y que puedes colocar con apenas unos clic, si no sabes de programación no importa, ya que el procedimiento de insertar una tabla de contenido en blogger en muy intuitivo y sencillo. <a href="https://tutorialbloggerorg.blogspot.com/p/tabla-de-contenidos-blogger.html" target="_blank">Packs Tabla Contenido Blogger</a>
