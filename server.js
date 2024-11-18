import express from 'express'
const app = express()

app.use(express.json())

const users = []



app.post('/usuarios',(req,res)=>{
    users.push(req.body)
    res.send('ok, aqui chegou')
    res.status(201).json(req.body)
})


app.get('/usuarios',(req, res) => {
    
    res.status(200),res.json(users)
})
app.listen(3000)




//as rotas precisam tem seus tipos e enderços