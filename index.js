const express = require('express')
const exp = express()

exp.get('/get', (req,res)=>{
    return res.send('welcome ')
})

exp.listen(4000,()=>{
    console.log('server connected')
})