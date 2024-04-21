const express = require("express");
const app = express();
let port = 3000; 
app.listen(port,()=>{
    console.log(`app is listen on port ${port}`);
});
/******************** app.use method ****************/
// app.use((req,res)=>{
//     // console.log(req);

//   console.log("request received");

// //  res.send("this is a basic response");
// //  res.send({
// //     name:"mango",
// //     color:"red"
// //  });
//  let code = "<h1>Fruit</h1><ul><li>namgo</li><li>banana</li></ul>";
//  res.send(code);
// })

/********************* app.get ***************/
app.get("/",(req,res)=>{
res.send("hello nik root");
})

app.get("/apple",(req,res)=>{
    res.send("you comtain apple path");
    });

app.get("/banana",(req,res)=>{
        res.send("you comtain banana path");
        })

app.get("*",(req,res)=>{
    res.send("this psth not found");
})  