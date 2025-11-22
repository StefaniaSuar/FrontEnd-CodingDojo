import express from 'express'

const app = express();
const PORT = 8080;

const personas = [
    {nombre: 'luz', edad: 19},
    {nombre: 'stef', edad: 23},
    {nombre: 'titi', edad: 1},
    {nombre: 'lucia', edad: 31}
]

// Middleware (SIEMPRE ARRIBA)
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Manejar rutas complejas
app.route('/personas2')
  .get((req,res) => {
      res.send('te conectas x get')
  })
  .post((req,res) => {
      console.log(req.body)     // <--- AHORA SÍ VAS A VER "titi"
      res.send('te conectas x el metodopost')
  })

// Rutas normales
app.use(express.static('public'))

app.get('/personas', (req,res)=>{
    res.statusMessage = 'todo bien'
    res.status(201).json(personas)
})

app.post('/personas', (req, res) => {
    console.log(req.body)
    const { nombre, edad } = req.body
    
    if (!nombre || !edad) {
        return res.status(405).json({ message: "falta una de las entradas" })
    }

    const newPersona ={nombre,edad}
    personas.push(newPersona)
    res.status(201).json(newPersona)

    res.json({ message: "ingresaste con un metodo post" })
})

app.get('/persona/:nombre',(req,res) =>{
    const nombre = req.params.nombre;
    console.log('nombre')
    res.status(201).json({message: "all good"})
}
)

// Listen
app.listen(PORT,()=>{
    console.log(`the server is up and running with the port ${PORT}`)
})
