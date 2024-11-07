
<h1 style="line-height:2; font-size: clamp(3rem,2rem,3rem);white-space: nowrap">Proyecto Mobiliario 👨‍💻</h1>

<p>Para ejecta el Proyecto de forma Local es importante primero instalar las dependencias, Esto se hace ya sea con:  </p>

<code>
npm or yarn
</code> 
<hr>

<pre>npm install 
yarn install
</pre>

Para instalar todas las dependencias del proyecto.



> [!TIP]
> Puedes ejecutar el archivo <span style="color:green; Este">lanzador.py</span> el creara tus dos servidores.
Solo asegurate de tener instalado <span>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="16 16 32 32"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
</span> En tu equipo


Si quieres desplegar el proyecto asegurate de usar el comando:
<pre>
npm run build.
</pre>

Se integro la Creacion de Graficos con [RECHARTS](https://recharts.org/en-US), Los graficos toman una ejeX y una data key como argumento en eje Y.


> [!TIP]
> ASEGURATE DE CONFIGURAR TU BASE DE DATOS EN LOCAL, COMO LA CONTRASEÑA Y EL USUARIO. Igual con la nueva tabla usuarioroot que tendra informacion de los usuarios que tienen acesso a poder modificar y crear productos.

>[!ALERT] 
> El puerto por default es el que se le asigne en PORT o <code>3000</code> pero puedes cambiarlo o reasignarlo cuando quieras.

El Frontend y el backend ahora corren el un mismo servidor, esto hace que los dos se ejecuten al mismo tiempo y hace innecesario el LANZADOR.py q solo lanza los dos en diferentes puertos

Si notas que cuando haces cambios no se muestran en la pagina, es porque la carpeta dist esta hecha para produccion, y no se actualiza o cambia segun cuando se hacen cambios. La solucion mas rapida para eso es eliminar la carpeta dist y ejecutar el comando __npm run build__ otra vez, de esta manera el hara tomara el cargara tus ultimos cambios.

Ya se pueden llamar diferentes tablas desde la misma pestaña, esto ahorra rendimiento y reduce la carga de pestañas innecesarias.

<h1>Soon</h1>


- Añadir los ID de la base de datos, que puedan ser auto_incrementables.
- Encriptar las contraseñas los usuarios ROOT
- Terminar las interfaces 
- Pantallas Vacias
- Mejorar Conjunto de Tablas, y procesarlas en el servidor antes que se pasen al la query 
- Mejorar Input de tablas y añadir logica a Graficos.
# Tengo que corregir esto.
- En el Archivo pl.cjs intente migrar a POSGRES pero no pude XDDDD, tenia respuesta de posgres pero tenia un error de promesa

- Me acabe de dar cuenta hace 2 minutos de escribir lo de arriba es que la razon por la cual no daba respuesta el servidor en deploy, era porque en el package.json tome el posgres como dependencia de desarollo, supongo que ni yarn ni npm la instala o la tienen en cuenta en el deploy, por eso este no da respuesta y cuando se pasa la peticion sale un error de promesa. Tambien como espera un parametro la funcion que seria el "table-Name" este no lo encuentra y como no esta por default en la funcion este no puede hacer nada sin este parametro, no mas hacer un __SELECT * FROM ""__

