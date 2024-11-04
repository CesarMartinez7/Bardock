const postgres = require("postgres");
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")


const app = express()


const PORT = process.env.PORT || 4000


app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())






const sql = postgres('postgres://postgres:oyasumipunpun@localhost:5432/nodomobiliario', {
    host: 'localhost',
    port: 5432,
    database: 'nodomobiliario',
    username: 'postgres',
    password: 'oyasumipunpun',
});

const fetchDb =  async() => {
  try{
    const tables = await sql`select * from acta_asignacion `
    console.log(tables)
    return tables
    
  }catch(err){
    throw err
  }

}


app.get("/", async(req,resp)=>{
  try{
    const data = await fetchDb()
    resp.json(data)
    
  }catch(err){
    throw err
  }
})


app.listen(PORT,()=>{
  console.log("Conectado en el puerto 3000")
})