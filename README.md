
<h1 style="line-height:2; font-size: clamp(3rem,2rem,3rem);white-space: nowrap">DataFast ⚡👨🏻‍💻</h1>

Para clonar esta o cualquier otra rama del proyecto puedes hacerlo con el comando desde __BASH GIT__ en tu ordenador. 
```bash
    git clone --branch <name-branch> https://github.com/CesarMartinez7/DataFast
```
<p>Para ejecta el Proyecto de forma Local es importante primero instalar las dependencias, Esto se hace ya sea con:  </p>

<code>
npm or yarn
</code> 
<hr>

<pre>npm install 
yarn install
</pre>

Para instalar todas las dependencias del proyecto.



Si quieres desplegar el proyecto asegurate de usar el comando:
<pre>
npm run build.
</pre>

Se integro la Creacion de Graficos con [RECHARTS](https://recharts.org/en-US), Los graficos toman una ejeX y una data key como argumento en eje Y.


> [!TIP]
> ASEGURATE DE CONFIGURAR TU BASE DE DATOS EN LOCAL, COMO LA CONTRASEÑA Y EL USUARIO. Igual con la nueva tabla usuarioroot que tendra informacion de los usuarios que tienen acesso a poder modificar y crear productos.


> [!CAUTION]
> El puerto por default es el que se le asigne en PORT o <code>3000</code> pero puedes cambiarlo o reasignarlo cuando quieras.

El Frontend y el backend ahora corren el un mismo servidor, esto hace que los dos se ejecuten al mismo tiempo y hace innecesario el LANZADOR.py q solo lanza los dos en diferentes puertos

Si notas que cuando haces cambios no se muestran en la pagina, es porque la carpeta dist esta hecha para produccion, y no se actualiza o cambia segun cuando se hacen cambios. La solucion mas rapida para eso es eliminar la carpeta dist y ejecutar el comando __npm run build__ otra vez, de esta manera el hara tomara el cargara tus ultimos cambios.

Ya se pueden llamar diferentes tablas desde la misma pestaña, esto ahorra rendimiento y reduce la carga de pestañas innecesarias.

<h1>En Pruebas</h1>
Se añadio una verificacion UserROOT

TAMBIEN UN ENCRIPTAMIENTO CON BCRYPT pero FALTA LA VERIFICACION con comparate.

Tambien un Nuevo Render Pages con Condicional.

<h1>Soon</h1>

- Pasar a una nueva rama para retormar pero ahora con el framework de **tailwind**
- Añadir los ID de la base de datos, que puedan ser auto_incrementables.
- Encriptar las contraseñas los usuarios ROOT
- Terminar las interfaces 
- Pantallas Vacias
- Mejorar Conjunto de Tablas, y procesarlas en el servidor antes que se pasen al la query 
- Mejorar Input de tablas y añadir logica a Graficos.
# Tengo que corregir esto.
- En el Archivo pl.cjs intente migrar a POSGRES pero no pude XDDDD, tenia respuesta de posgres pero tenia un error de promesa
- Ya funciona el los eventos en la peticion y da respuesta, falta compararlas y devolverlas desemcriptadas listas para el pollo y hacer el render condicional por rooles


- Me acabe de dar cuenta hace 2 minutos de escribir lo de arriba es que la razon por la cual no daba respuesta el servidor en deploy, era porque en el package.json tome el posgres como dependencia de desarollo, supongo que ni yarn ni npm la instala o la tienen en cuenta en el deploy, por eso este no da respuesta y cuando se pasa la peticion sale un error de promesa. Tambien como espera un parametro la funcion que seria el "table-Name" este no lo encuentra y como no esta por default en la funcion este no puede hacer nada sin este parametro, no mas hacer un __SELECT * FROM ""__

