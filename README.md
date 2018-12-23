# Tabla o índice de contenidos para blogger - TOC

Este es un ejemplo de cómo usar una Tabla de Contenidos en blogger. <a href="https://www.adaptacionesweb.com/p/indice-de-contenido-toc-prueba.html">Ver ejemplo aquí</a>

# Instalación.

Copia todo el contenido de <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-CSS.css">TOC-CSS</a>. Ahora ve a Blogger, luego ve a Temas > Editar HTML, y busca "]]></b:skin>" dentro del editor y  antes de esa línea pega el código CSS copiado con anterioridad. Guarda los cambios.

Luego añadimos el script <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-Script.js">TOC-Script</a> que ejecutara la expancion y contracción de la tabla de contenidos en nuestra plantilla de blogger. Buscamos el cierre de head "&lt;/head&gt;" y antes de ella pegamos nuestro script.

Por ultimo copia todo el contenido de <a href="https://github.com/tutorialblogger/Tabla-de-Contenidos-TOC/blob/master/TOC-HTML.html">TOC-HTML</a> y pegalo dentro de blogger en la parte superior de tus entradas o páginas estaticas, así el visitante de tu blog podrá navegar por el contenido de tu post sin problemas o simplemente leer lo que mas le interese de tu indice de contenidos.
Cambiar en el archivo xml el contenido de ejemplo por tus datos. 

# Nota adicional.

Debes usar los Anclajes y enlaces ancla para hacer que la tabla funciones en el mismo post, ejemplo:

-En el enlace debes colocar la ruta al anclaje: &lt;a href=&quot;#1&quot;&gt;Cap&iacute;tulo 1&lt;/a&gt;

-En el titulo debes colocar un nombre e Id del anclaje: &lt;h2&gt;&lt;a name=&quot;1&quot; id=&quot;1&quot;&gt;&lt;/a&gt;Título del Capítulo 1&lt;/h2&gt;

# Derechos de autor.

Este indice de contenidos en CSS, HTML, fue tomadO de <a href="http://5thirtyone.com/sandbox/share/toc/" target="_blank">5thirtyone</a> y adaptada para blogger dentro de un JavaScript (spoiler)

# Por mejorar.

- Que los titulos esten dentro de la tabla con sus H1 o H2 orientado al SEO ONPAGE.
- Mejorar la versión responsive para moviles.
- Que funcione con la Jquery actual ya que solo finciona con la versión 1.11.0

PD: Mete mano a los archivos si sabes como hacer la mejora y publica la actualización, con ello ayudas a la comunidad Blogger a nivel mundial ;)


