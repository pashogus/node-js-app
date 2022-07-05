const mangoose = require("mongoose");
const dburl = "mongodb+srv://pashogus:zw0Nhxp6DVXHQ8ZC@cluster0.jsksq0q.mongodb.net/pashogus?retryWrites=true&w=majority";

const connectionParam = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

mangoose
.connect(dburl,connectionParam)
.then(()=>
{
    console.log("Connected to DB");
})
.catch((e)=>{
    console.error("error",e);
});