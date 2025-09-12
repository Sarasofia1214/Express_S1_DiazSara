export class UserRepository{
    constructor(userModel){
        this.User = userModel
    }
    async createOne(data){
        return this.User.create(data);
    }
    async findAll(){
        return this.User.find();
    }
    async findById(id){
        return this.User.findById(id);
    }
    async update(id,data){
        return this.User.update(id,data,{new:true});
    }
    async delete(id){
        return this.User.findByIdAndDelete(id);
    }
}