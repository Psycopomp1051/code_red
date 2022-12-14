const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

var employeeSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneno:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        
        require:true
    },
    age:{
        type:Number,
        
        require:true
    }

  });


  //middleware
employeeSchema.pre("save",async function(next){
    if(this.isModified("password")){
        // const passwordHash=await bcrypt.hash(password,10);

        console.log(`The current password is ${this.password}`);
        this.password=await bcrypt.hash(this.password,10);
    
    console.log(`The current password is ${this.password}`);
   this.confirmpassword=undefined;

}
    
     next();
})


  //
  
  //we make contact module
var Register = new mongoose.model("Register", employeeSchema);
module.exports=Register;