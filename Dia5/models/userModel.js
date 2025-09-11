import mongoose from "mongoose";
//se declara en una variable 
const UserSchema = new mongoose.Schema ({
    name:{type:String, requiered:true,trim:true},
    email:{type:String,requiered:true,unique:true,lowercase:true,trim:true},
    age:{type:Number,min:0}
}, {timestamps:true}); // Para que indique la fecha de creación

//Clase de dominio

class UserClass{
    get isAdult(){
        return (this.age ?? 0) >=18;
    }
    static async findByEmail(email){
        return this.findOne({email})
    }
}

// Anidar el schema con la clase
//impregando a la clase el modelo de mongoose
UserSchema.loadClass(UserClass);

// Ya que primero se crea el schema, luego la clase y luego se realiza la anidación
export const UseModel=mongoose.model("User",UserSchema)