import { User } from "../model/User"

class UserData{
    private user: User[];
    construtor(user:User[]){
        this.user = user
        this.verifyUser = verifyUser
    }
    public async getUserById(id:string): Promise<User[] | undefined>{
        return this.user.filter((e) => {e.getId() === id})
    }
    public async getUsers(): Promise<User[]>{
        return this.user;
    }

    public async verifyUserProfile(idUser: string): Promise<boolean | string> {
        const userAdmin = this.user.filter((e) => {e.getId() === idUser && e.getRole() === "ADMIN"})
        if(userAdmin){
            return true
        }else{
            return false
        }
    }
}


export default UserData