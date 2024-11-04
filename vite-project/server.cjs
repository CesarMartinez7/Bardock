const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const chalk = require("chalk");
const path = require("path"); 

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
  console.log("Conectado a la base de datos con éxito");
});


app.get("/api/datos", (req, resp,) => {
  let table = req.query.table || "activo"
  console.log(table)
  const sql = `SELECT * FROM ${table}`;
  conec.query(sql, (err, resultadoQuery) => {
    if (err) {
      return resp.status(500).json({ error: "Error en la consulta" });
    }
    resp.json(resultadoQuery);
  });
});


app.post("/registrer", (req, resp) => {
  // Datos q vienen de el formulario
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  
  console.log(req.body);
  const data = [name, email, password];

  conec.execute("SELECT count(nombre) as RESULTADO FROM userroot WHERE nombre = ? OR email = ?", [name, email], (err, resultado) => {
    if (err) {
      return resp.status(500).send("Error en la base de datos");
    }

    const userExistente = resultado[0].RESULTADO;

    if (userExistente > 0) {
      return resp.status(400).send("Ya se encuentra registrado");
    } else {
      const InsertInto = "INSERT INTO userroot (nombre, email, password) VALUES (?, ?, ?)";
      conec.execute(InsertInto, data, (err, result) => {
        if (err) {
          return resp.status(500).send("Error en la inserción");
        }
        console.log(`El resultado en la inserción es ${result}`);
        resp.status(201).send("Usuario registrado con éxito");
      });
    }
  });
});




app.post("/datos", (req, resp) => {
  console.log(req.body);
  resp.end();
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.green(`Servidor corriendo en el puerto ${PORT}`));
  console.log(chalk.yellow(`Server:       http://localhost:${PORT}`));
});
