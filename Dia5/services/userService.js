export class UserService{
    
    constructor(userRepository){
        this.repo = userRepository;
    }
    async createUser(dto){
        return this.repo.createOne(dto);
    }
    async listUser(){
        return this.repo.findAll();
    }
    async getUserById(id){
        return this.repo.findById(id);
    }
    async updateUser(id,data){
        return this.repo.update(id,data);
    }
    async deleteUser(id){
        return this.repo.delete(id);
    }
}