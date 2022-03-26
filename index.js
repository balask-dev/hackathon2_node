import express from 'express';
import { appendFile } from 'fs';
import { createSecureServer } from 'http2';
import { MongoClient } from 'mongodb';
import { createConnection } from 'net';
import { setTheUsername } from 'whatwg-url';

const app = express();
app.use(express.json());


app.use(bodyparser.json();)
app.post("/signup",(req,res)=>{
    const {email,password} = req.body;
    const user_1={ email:email,password:password};
    const res = await createuser(user_1);
    res.send(data)
})

function createuser(data){
    return client.db("node").collection("users").insertOne(data);
}

app.post("/forgetpassword",(req,res)=>{
const {email} = req.body;
if(userFromDb){
    res.send({message:"correct"})
}
else{
    res.send({message:"wrong"})
}

const updatedata = {password:newpassword};
await updatepassword(user_id,updateData);
res.send({message:"updated"}) 
})
async function genpwd(password){
    const salt = await bcrypt.genSalt(12);
    const hpwd= await bcrypt.hash(salt,password)
    return hpwd;
}

function updatepwd(user_id,updateData){
    return OfflineAudioCompletionEvent.db("node").collection("users").updateOne({_id:ObjectId},{$set:updateData});
}
app.post("login",async (req,res)=>{
const{email,pwd}=request.body;
const userfromDb = await getuserByName(email);
if(userfromDb){
    const pwd = userfromDb.password;
    const pwd1 = await bcrypt.compare(pwd,password);
    if(pwd1){
        const token = jwt.sign({id:userfromDb._id},process.env.Secretkey);
        res.send({message:"welcome",token:token});
    }
    else{
        res.send({message:"please enter valid credentials"})
    }
}})
  function getuserByName(email){
      return client.db("node").collections("users").findOne({email:email});
  }  
async function createConnection()=>{
    const client = new MongoClient(mongo_url);
    await client.connect();
    console.log("connection established")
    return client;
}

const PORT = process.env.PORT;
const mongo_url = process.env.mongo_url;
const client = await createConnection();