import { UserDataMock } from "./mocks/UserDataMock"
import { userMock } from "./mocks/UserMock";

describe('UserDataMock',()=>{
    let userDataMock : UserDataMock;
    beforeEach(()=>{
        userDataMock = new UserDataMock();
    });
    test('Erro de usuário não existente', async ()=>{
        try{
            await userDataMock.getUserById("id_mocad")
        }catch(e : any){
            expect(e.message).toEqual("User not found")
            expect(e.statusCode).toEqual(404)
        }
    })
    test('Usuário validado', ()=>{
        const getuser = userDataMock.getUserById("id_mocado");
        expect(getuser).toEqual(userMock)
        expect(getuser).toHaveBeenCalled();
    })
})