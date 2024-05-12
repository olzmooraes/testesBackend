import { User } from "../model/User"

class UserData{
    private user: User[];
    construtor(user:User[]){
        this.user = user
    }
    public async getUserById(id:string): Promise<User | undefined>{
        return this.user.filter((e) => {e.getId() === id})
    }
    public async getUsers(): Promise<User[]>{
        return this.user;
    }
}


export default UserData