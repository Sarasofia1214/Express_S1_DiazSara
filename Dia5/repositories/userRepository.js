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
    async updateUser(id,data){
        return this.User.update(id, data, { new: true, runValidators: true });
    }
    async deleteUser(id){
        return this.User.delete(id);
    }
}