import { User } from "../../src/model/User";
import { userMock, userMock2 } from "./UserMock"

export class UserDataMock {
    public async getUserById(id: string): Promise<User | undefined> {
        if (id === 'id_mockado') {
            return userMock
        } else if (id === 'id_mockado2') {
            return userMock2
        } else {
            undefined
        }
    }
    public async getUsers(): Promise<User[]> {
        return [userMock,userMock2]
    }
    public async verifyUserProfile(role: string) {
        if(role === "ADMIN"){
            return true
        }else{
            return false
        }
    }
}