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

app.get("/login",(req,resp)=>{
  const {name,password} = req.query
  console.log(req.query)
  const SQL = " SELECT * FROM userroot where nombre = ? and password = ?"
  const data = [name,password]
  conec.execute(SQL,data,(err,result)=>{
    if(err){
      console.log("Huvo un error")
    }
    console.log(result[0])
    // Manejo de la respuesta si es mayor a 0, los crendenciales estan bien o existen en MYSQL  
    if(result.length > 0){
      if(result[0].rool == "A"){
        resp.send("Encontrado y con el RESPUESTA DE ADMIN")
      }else if(result[0].rool === "U"){
        resp.send("Encontrado y con la respuesta de USER")
      }else{
        resp.send("No es ni user ni admin")
      }
    }else{
      resp.send("No existe")
    }
  })
})

app.get("/api/datos", (req, resp) => {
  let table = req.query.table || "activo";
  const sql = `SELECT * FROM ${table}`;
  conec.query(sql, (err, resultadoQuery) => {
    if (err) {
      return resp.status(500).json({ error: "Error en la consulta" });
    }
    resp.json(resultadoQuery);
  });
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
