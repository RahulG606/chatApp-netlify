import express from "express";
import Messages from "./dbMessages.js"
import Pusher from "pusher";
import mongoose from "mongoose";
import cors from "cors";
const app = express()
const port = process.env.PORT || 9000


app.use(express.json())
app.use(cors());


const pusher = new Pusher({
    appId: "1478739",
    key: "55347e6684741566d2bb",
    secret: "90524db16732846ff45c",
    cluster: "ap2",
    useTLS: true
  });

const connectionUrl = 'mongodb+srv://Admin:Rahul1234@messageshub.735ov0q.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})


const db = mongoose.connection;

db.once("open",()=>{
    
    console.log("DB connected");

    const msgCollection = db.collection('messagecontents');
    //console.log(msgCollection);
    const changeStream =  msgCollection.watch();
    
    changeStream.on("change",(change)=>{
        // console.log(change);

        if(change.operationType=== 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name,
                message:messageDetails.message,
                timeStamp:messageDetails.timeStamp,
                received:messageDetails.received
            });
        }
        else{
            console.log("Error triggering pusher");
        }
    });
});

    

// routers

app.get('/',(req,res)=>{
    res.status(200).send("Hello world");
})

app.get('/messages/sync',(req,res)=>{

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });

});

app.post('/messages/new',(req,res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
    
    
})

// listen

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})