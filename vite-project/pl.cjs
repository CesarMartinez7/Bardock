const postgres = require("postgres");
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require("node:path");3
const chalk = require("chalk")




const app = express()
const PORT = process.env.PORT || 4000

// Midleware
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())


app.use(express.static(path.join(__dirname,"dist")))



const sql = postgres('postgres://postgres:oyasumipunpun@localhost:5432/nodomobiliario', {
  host: 'localhost',
  port: 5432,
  database: 'nodomobiliario',
  username: 'postgres',
  password: 'oyasumipunpun',
});

const fetchDb =  async(table) => {
  try{
    const tables = await sql`select * from ${table} `
    console.log(tables)
    return tables
    
  }catch(err){
    throw err
  }
  
}


app.get("/api/datos", async(req,resp)=>{
  let table = req.query.table
  try{
    const data = await fetchDb(table)
    resp.json(data)
  }catch(err){
    throw err
  }
})

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname,"dist","index.html"))
})

app.listen(PORT, () => {
  console.log(chalk.green(`Servidor en el puerto        :${PORT}`));
  console.log(chalk.yellow(`Server:     http://localhost:${PORT}`));
});
