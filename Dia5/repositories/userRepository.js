export class UserRepository{
    constructor(UserModel){
        this.User=UserModel; // User es un atributo de userRepository
    }
    async create (data){
        return this.User.create(data);
    }
    async findAll(){
        return this.User.find();
    }
    async findById(id){
        return this.User.findById(new id)
    }
    async findByEmail(email){
        
    }
    async updateById(id,data){
        return this.User.updateById()
    }
    async deleteById(){

    }
}