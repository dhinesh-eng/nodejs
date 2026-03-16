let express= require('express')

let app=express()
let port = 3000

app.get('/',(req,res)=>{
    res.send('Hello Nodejs')
})
app.post('/',(req,res)=>{
    res.send('posted succesfully')
})
app.patch('/',(req,res)=>{
    res.send('update complete')
})
app.put('/',(req,res)=>{
    res.send('replaced successfully')
})
app.delete('/',(req,res)=>{
    res.send('delete complete')
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})