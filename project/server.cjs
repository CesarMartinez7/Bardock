const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const bycript = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "dist")));

const dataServerDB = {
  host: "localhost",
  user: "root",
  password: "oyasumipunpun",
  database: "nodomobiliario",
};

const conec = mysql.createConnection(dataServerDB);

conec.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(chalk.bgCyanBright("Conectado a la Base de datos con exito"));
});



app.get("/api/login",(req,resp)=>{
  const {name,password} = req.query
  console.log(req.query)
  const SQL = " SELECT * FROM userroot where nombre = ? and password = ?"
  const data = [name,password]
  conec.execute(SQL,data,(err,result)=>{
    if(err){
      throw err
    }
    resp.json(result)
  })
})





app.get("/api/datos", (req, resp) => {
  console.log(req.query)
  // Inplementar un array en nameClient que sea un array que se recorra el array de las posible conbinaciones del input del usuario para pasarlos para la database, y no tener una sola accion o un solo objeto. 🤒
  const tables = [
    {"nameClient":"acta","searchDb" : "acta_asignacion"},
    {"nameClient":"articulo","searchDb" : "articulo"},
    {"nameClient":"bodega","searchDb" : "bodega"},
    {"nameClient":"categoria","searchDb" : "categoria_articulo"},
    {"nameClient":"centro","searchDb" : "centro_costo"},
    {"nameClient":"detalles asignacion","searchDb" : "detalle_acta_asignacion"},
    {"nameClient":"detalles inventario","searchDb" : "detalle_orden_inventario"},
    {"nameClient":"orden","searchDb" : "orden_inventario"},
    {"nameClient":"perfil","searchDb" : "perfil"},
    {"nameClient":"tipo doc","searchDb" : "tipo_documento"},
    {"nameClient":"tipo mov","searchDb" : "tipo_movimiento"},
    {"nameClient":"stock","searchDb" : "stock"},
    {"nameClient":"userroot","searchDb" : "userroot"},
    {"nameClient":"activo","searchDb" : "activo"},
  ]

  // Parece haber un error que manda mas de 5 peticiones al servidor,
  // En el servidor mandando con el launcher de Python tiene muchos errores, como peticiones limitadas por un tiempo y deja de tomar en cuenta el frontend , se recomienda no utilizar este launcher para lanzar los servidores al mismo tiempo si lo que quieres es hacerlo de forma rapida.
  let tablaSearch = req.query.table.toLowerCase() || "activo";
  tables.forEach((table)=>{
    if(tablaSearch.toLowerCase() == table.nameClient){
      const sql = `SELECT * FROM ${table.searchDb}`;
      conec.query(sql, (err, resultadoQuery) => {
        if (err) {
          return resp.status(500).json({ error: "Error en la consulta" });
        }
        resp.json(resultadoQuery);
        console.log("Se recorre con exito y manda peticion")
      });
      
    }
  })
});



app.post("/register", async (req, resp) => {
  // Datos q vienen de el Registro
  const { name, email, password } = req.body;
  console.log(req.body);
  const hashPassword = await bycript.hash(password,10)
  console.log(hashPassword)

  const data = [name, email, hashPassword];

  conec.execute(
    "SELECT count(nombre) as RESULTADO FROM userroot WHERE nombre = ? OR email = ?",
    [name, email],
    (err, resultado) => {
      if (err) {
        return resp.status(500).send("Error en la base de datos");
      }

      const userExistente = resultado[0].RESULTADO;

      if (userExistente > 0) {
        return resp.status(400).send("Ya se encuentra registrado");
      } else {
        const InsertInto =
          "INSERT INTO userroot (nombre, email, password,rool) VALUES (?, ?, ?,'U')";
        conec.execute(InsertInto, data, (err, result) => {
          if (err) {
            return resp.status(500).send("Error en la inserción");
          }
          resp.status(201).sendFile(path.join(__dirname,"src","components","UserRegister","userRegister.html"));
        });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.bgGreen(`Servidor corriendo en el puerto ${PORT}`));
  console.log(`Server:      ${chalk.greenBright(`http://localhost:${PORT}`)}`);
  console.log(`Ruta Api:    ${chalk.blueBright(`http://localhost:${PORT}/api/datos`)}`)
});
