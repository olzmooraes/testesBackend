import { CustomError } from "../data/errors/CustomError";
import UserData from "../data/Userdata";
export class UserBusiness{
    constructor(
        private userData : UserData,
    ){}
    public async getUserById(id: string) {
        const user = await this.userData.getUserById(id);
        if (!user) {
        throw new CustomError(404, "User not found");
        }
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        };
    }
}
