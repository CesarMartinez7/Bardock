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

app.get("/api/login", (req, resp) => {
  const { name, password } = req.query;
  console.log(req.query);
  const SQL = " SELECT * FROM userroot where nombre = ? and password = ?";
  const data = [name, password];
  conec.execute(SQL, data, (err, result) => {
    if (err) {
      throw err;
    }
    resp.json(result);
  });
});

app.post("/create", (req, resp) => {
  // Nombre de la tabla por la cual se pasara todo
  const nameTable = req.body.tableName.toLowerCase();
  console.log(req.body);

  if (nameTable === "articulo") {
    const { id_articulo, id_categoria, descripcion, estado } = req.body;
    const arrayData = [id_articulo, id_categoria, descripcion, estado];
    conec.execute(
      `INSERT INTO ${nameTable} (id_articulo, id_categoria, descripcion, estado) values (?,?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
  if (nameTable === "stock") {
    const { id_articulo, id_centro_costo, id_bodega, cantidad } = req.body;
    const arrayData = [id_articulo, id_centro_costo, id_bodega, cantidad];
    conec.execute(
      `insert into ${nameTable} (id_articulo, id_centro_costo, id_bodega, cantidad) values (?,?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
  if (nameTable === "centro_costo") {
    const { id_centro_costo, descripcion, estado } = req.body;
    const data = [id_centro_costo, descripcion, estado];
    conec.execute(
      `insert into ${nameTable}(id_centro_costo,descripcion,estado) values (?,?,?)`,
      data,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
  if (nameTable === "bodega") {
    const { id_bodega, descripcion, estado, prefijo } = req.body;
    const data = [id_bodega, descripcion, estado, prefijo];
    conec.execute(
      `insert into ${nameTable}(id_bodega,descripcion,estado,prefijo) values (?,?,?,?)`,
      data,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
  if (nameTable === "activo") {
    const {
      id_activo,
      id_articulo,
      descripcion_activo,
      codigo,
      serial,
      fecha_compra,
      fecha_garantia,
      avaluo,
      requiere_mantenimiento,
      periodicidad_mantenimiento,
      id_usuario_registra,
      fecha_registro,
      id_usuario_actualiza,
      fecha_actualiza,
      asignado_a,
    } = req.body;
    const Data = [
      id_activo,
      id_articulo,
      descripcion_activo,
      codigo,
      serial,
      fecha_compra,
      fecha_garantia,
      avaluo,
      requiere_mantenimiento,
      periodicidad_mantenimiento,
      id_usuario_registra,
      fecha_registro,
      id_usuario_actualiza,
      fecha_actualiza,
      asignado_a,
    ];
    console.log(Data);
    conec.execute(
      "insert into activo (id_activo,id_articulo,descripcion_activo,codigo,serial,fecha_compra,fecha_garantia,avaluo,requiere_mantenimiento,periodicidad_mantenimiento,id_usuario_registra,fecha_registro,id_usuario_actualiza,fecha_actualiza,asignado_a) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      Data,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado Con exito"));
      }
    );
  }
  if (nameTable === "perfil") {
    console.log(req.body);
    const { id_perfil, tipo_usuario, id_usuario } = req.body;
    const arrayData = [id_perfil, tipo_usuario, id_usuario];
    conec.execute(
      "insert into perfil (id_perfil,tipo_usuario,id_usuario) values (?,?,?)",
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
  // Manejo de acta_asignacion
  if (nameTable === "acta_asignacion") {
    console.log(req.body);
    const {
      id_acta_asignacion,
      id_usuario_asignado,
      fecha_acta,
      id_usuario_elabora,
      fecha_registro,
      observacion,
    } = req.body;
    conec.execute(
      `insert into ${nameTable} (id_acta_asignacion, id_usuario_asignado, fecha_acta, id_usuario_elabora, fecha_registro, observacion) values (?,?,?,?,?,?)`,
      [
        id_acta_asignacion,
        id_usuario_asignado,
        fecha_acta,
        id_usuario_elabora,
        fecha_registro,
        observacion,
      ],
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }

  if (nameTable === "categoria_articulo") {
    const { id_categoria, descripcion, estado } = req.body;
    const arrayData = [id_categoria, descripcion, estado];
    conec.execute(
      `insert into ${nameTable}(id_categoria,descripcion,estado) values (?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }

  if (nameTable === "orden_inventario") {
    const {
      id_orden_inventario,
      id_tipo_movimiento,
      id_bodega,
      id_usuario_registra,
      fecha_registro,
      orden_no,
      id_bodega_destino,
      observacion,
    } = req.body;

    const arrayData = [
      id_orden_inventario,
      id_tipo_movimiento,
      id_bodega,
      id_usuario_registra,
      fecha_registro,
      orden_no,
      id_bodega_destino,
      observacion,
    ];

    conec.execute(
      `INSERT INTO ${nameTable}(id_orden_inventario, id_tipo_movimiento, id_bodega, id_usuario_registra, fecha_registro, orden_no, id_bodega_destino, observacion) VALUES (?,?,?,?,?,?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }

  if (nameTable === "detalle_acta_asignacion") {
    const { id_detalle_asignacion, id_acta_asignacion, id_activo } = req.body;
    const arrayData = [id_detalle_asignacion, id_acta_asignacion, id_activo];
    conec.execute(
      `INSERT INTO ${nameTable} (id_detalle_asignacion, id_acta_asignacion, id_activo) values (?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
          console.log(chalk.red("ERROrr"));
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }

  if (nameTable === "tipo_movimiento") {
    const { id_tipo_movimiento, descripcion, signo } = req.body;
    const arrayData = [id_tipo_movimiento, descripcion, signo];
    conec.execute(
      `insert into ${nameTable} (id_tipo_movimiento, descripcion, signo) values (?,?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }
        console.log(chalk.green("Insertado con exito"));
      }
    );
  }

  if (nameTable === "detalle_orden_inventario") {
    const {
      id_detalle_orden_inventario,
      id_orden_inventario,
      id_centro_costo,
      id_articulo,
      descripcion_articulo,
      cantidad,
    } = req.body;
    const arrayData = [
      id_detalle_orden_inventario,
      id_orden_inventario,
      id_centro_costo,
      id_articulo,
      descripcion_articulo,
      cantidad,
    ];
    conec.execute(
      `INSERT INTO ${nameTable} (id_detalle_orden_inventario, id_orden_inventario, id_centro_costo, id_articulo, descripcion_articulo, cantidad) VALUES (?,?,?,?,?,?)`,
      arrayData,
      (err) => {
        if (err) {
          throw err;
        }

        console.log(chalk.green("Insertado con exito"));
      }
    );
  }
});

app.get("/api/datos", (req, resp) => {
  console.log(req.query);
  // Inplementar un array en nameClient que sea un array que se recorra el array de las posible conbinaciones del input del usuario para pasarlos para la database, y no tener una sola accion o un solo objeto. 🤒
  const tables = [
    { nameClient: "acta", searchDb: "acta_asignacion" },
    { nameClient: "articulo", searchDb: "articulo" },
    { nameClient: "bodega", searchDb: "bodega" },
    { nameClient: "categoria", searchDb: "categoria_articulo" },
    { nameClient: "centro", searchDb: "centro_costo" },
    { nameClient: "detalles asignacion", searchDb: "detalle_acta_asignacion" },
    { nameClient: "detalles inventario", searchDb: "detalle_orden_inventario" },
    { nameClient: "orden", searchDb: "orden_inventario" },
    { nameClient: "perfil", searchDb: "perfil" },
    { nameClient: "tipo doc", searchDb: "tipo_documento" },
    { nameClient: "tipo mov", searchDb: "tipo_movimiento" },
    { nameClient: "stock", searchDb: "stock" },
    { nameClient: "userroot", searchDb: "userroot" },
    { nameClient: "activo", searchDb: "activo" },
  ];

  // Parece haber un error que manda mas de 5 peticiones al servidor,
  // En el servidor mandando con el launcher de Python tiene muchos errores, como peticiones limitadas por un tiempo y deja de tomar en cuenta el frontend , se recomienda no utilizar este launcher para lanzar los servidores al mismo tiempo si lo que quieres es hacerlo de forma rapida.
  let tablaSearch = req.query.table.toLowerCase() || "activo";
  tables.forEach((table) => {
    if (tablaSearch.toLowerCase() == table.nameClient) {
      const sql = `SELECT * FROM ${table.searchDb}`;
      conec.query(sql, (err, resultadoQuery) => {
        if (err) {
          return resp.status(500).json({ error: "Error en la consulta" });
        }
        resp.json(resultadoQuery);
        console.log("Se recorre con exito y manda peticion");
      });
    }
  });
});

app.post("/register", async (req, resp) => {
  // Datos q vienen de el Registro
  const { name, email, password } = req.body;
  console.log(req.body);
  const hashPassword = await bycript.hash(password, 10);
  console.log(hashPassword);

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
          resp
            .status(201)
            .sendFile(
              path.join(
                __dirname,
                "src",
                "components",
                "UserRegister",
                "userRegister.html"
              )
            );
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
  console.log(
    `Ruta Api:    ${chalk.blueBright(`http://localhost:${PORT}/api/datos`)}`
  );
});
