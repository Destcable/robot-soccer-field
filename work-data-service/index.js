import { PrismaClient } from "@prisma/client"
import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient();

app.get('/soccer/field', async (req, res) => { 
    return res.json(await prisma.soccer.findMany());
})

app.post('/soccer/field', async (req, res) => { 
    return res.json(await prisma.soccer.create({ data: req.body }))
})

app.get('/soccer/constructor', async (req, res) => { 
    return res.json(await prisma.constructor.findMany());
})

app.post('/soccer/constructor', async (req, res) => { 
    return res.json(await prisma.constructor.create({ data: req.body }))
})

app.listen(3000)