# Proceso de Software Personal

Pagina diseñada para la materia de Proceso de Software Personal (PSP) donde se hace el desarrollo de una pagina para un restaurante. La información disponible es de prueba ya que no posee información de producción ni conexión a un base de datos externa.

La base del proyecto se realizo mediante React usando React Router para la creación de la pagina como SPA (Single page application).

# Instalación

Para poder correr la aplicación se necesita de NodeJS version 20 (recomendado usar la version LTS).

Una vez instalado Node, se ejecuta el comando de instalación `npm install` el cual instalará las dependencias necesarias para correr la aplicación

Si no se desea instalar las dependencias de la aplicación en disco, se puede usar los archivos de Producción dentro de la carpeta buildFiles (Ver sección de ejecución)

# Ejecución de la aplicación

Para correr la aplicación, se puede ejecutar el comando `npm start` dentro de la carpeta raíz de este repositorio.

## Correr la aplicación sin instalar dependencias

En caso tal que no se desee instalar las dependencias (por tamaño o para evitar tener archivos extra), el repositorio contiene los archivos de Producción listos para ser ejecutados. Para poder hacer esto, se puede usar un servidor web sencillo como Nginx (si se tiene instalado) o, se puede usar `serve` de NodeJS para servir los archivos

Para usar "serve" se ejecuta `npm i -g serve`, una vez instalado se navega a la carpeta buildFiles dentro de una terminal y se ejecuta el comando `serve -s .` o `serve -s buildFiles` desde el directorio raíz
