
# Ejercicio y objetivo
Desarrollar el front y back de una app tipo todo list y poder cambiar el orden de las todos :) 

## Pasos de ejecución:
 - cd packages/api
 - docker compose up -d
 - yarn
 - npx typeorm-ts-node-commonjs migration:run -d src/utils/data-source.ts
 - yarn start
 - cd ../ui 
 - yarn
 - yarn start

## Tech stack:
* Front: React. Podés usar cualquier librería que necesites (usá el mismo criterio que usarías en la vida real para decidir si usar una librería o si hacer algo de cero).  
* Back: Node. Nuestro único requisito es que la DB sea SQL (ej. Postgres, MySQL, etc). Mismo criterio con las librerías que en el front.  

## Features que tiene que tener:
* Poder agregar y eliminar items de la lista.
* Poder cambiar el orden de los items moviendo las tareas hacia arriba/abajo.
* Si actualizo la página después de cambiar el orden tengo que poder ver el orden actualizado.
* Poder cambiar el texto de las tareas.
* Poder buscar tareas por su contenido (puede ser con un search box o de otra manera).

## Organización:
Te dejo acceso a notion para que puedas bajar todas las tareas que creas necesarias para llevar a cabo esta mini app.   
[https://www.notion.so/palabra/e70db8e28bf44fd5adfa682fd400f1ed?v=aee2ea1e22bd49168f755cea63bc92c8]
* Cargá una estimación de cuánto te llevaría cada tarea 
* Movelas a in-progress / completed en la medida que avances

## Cómo entregar:
* Pushear los cambios a un branch en el repo y hacer un PR a master.
* Adjuntar en el PR un videito breve mostrando todas las funcionalidades de arriba (podés usar una app como Loom para grabarlo).

## Qué vamos a evaluar:
* Que estén todos los features que pedimos.
* Que haya commits chicos, no un único commit grande con todo.
* Que hayan tests.
* Buen diseño.

## Antes de empezar :)
La idea es ver cómo lo pensás y cómo lo resolvés. Pensamos en dos instancias:

1. Primero que pienses la estructura del back y del front. Cuando lo hayas pensado escribime por slack en el channel que te agregamos y charlamos (15 min) para que me cuentes.  

2. Una call al final después de que hayas hecho el PR para que veamos el código y cómo quedó la mini app.  

* Tenes un plazo de una semana para finalizarlo. Si llegas a retrasarte, avisame.
* Vayamos hablando cuando tengas avances. 
