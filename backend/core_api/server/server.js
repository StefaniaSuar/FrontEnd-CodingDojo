import express from 'express'

const app = express();
const PORT = 8080

//midleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/personas',)


app.listen(PORT,() =>{
    console.log(`the server is up and running on port ${PORT}`)
})