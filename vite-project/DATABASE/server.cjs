const express = require("express"); // CREACION DE LA API
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const chalk = require("chalk");
const emoji = require("node-emoji");

const app = express();

// Midleware: Pegamentos que hacen que se comuniquen el lado del cliente y el server.

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Password contraseña
const password = "oyasumipunpun";
const conec = mysql.createConnection({
  host: "localhost",
  user: "root",
  password,
  database: "nodomobiliario",
});

conec.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado con exito");
});



app.get("/datos",(req,resp)=>{
  const sql = "SELECT * FROM activo"
  conec.query(sql,(err,resultadoQuery)=>{
    if (err){
      throw err
    }
    resp.json(resultadoQuery)
  });
});

app.post("/datos",(req,resp)=>{
  resp.end("En post en datos")
})




















app.get("/login", (req, res) => {
  res.render("login.hbs");
});

app.post("/login", (req, resp) => {
  let contraseña = req.body.password;
  let email = req.body.email;
  console.log(contraseña, email);
  resp.render("startSesion.hbs");
});

const PORT = 5174;
app.listen(PORT, () => {
  console.log(
    chalk.green(
      `Servidor corriendo con exito en el Puerto: ${chalk.blue(PORT)}`
    )
  );
  console.log(
    "---------------------------------------------------------------------"
  );
  console.log(`Server Desplegado Here: ${chalk.blue(`http://localhost:${PORT}/datos`)}`);
  console.log(
    "---------------------------------------------------------------------"
  );
});
