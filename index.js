import express from 'express'
import cookieParser from 'cookie-parser'
import UserRouter from './Router/user.router.js'
import downloadRouter from './Router/downlaod.router.js'
import dotenv from 'dotenv'
dotenv.config()


import mongoose from 'mongoose'
mongoose.connect(process.env.DB).then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('not connected')
})


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.listen(process.env.PORT,()=>console.log(`server is running on ${process.env.PORT}`))


app.use('/user',UserRouter)
app.use('/',downloadRouter)
