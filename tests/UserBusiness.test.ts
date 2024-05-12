import { UserDataMock } from "./mocks/userDataMock";
import { userMock, userMock2 } from "./mocks/UserMock";

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
    test('Deve retornar erro 401 e mensagem de não autorizado', async () => {
        try {
          await userDataMock.getUsers();
        } catch (e : any) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Não autorizado');
          expect(e.status).toBe(401);
        }
      });
    test('Deve retornar a lista de usuários com status 200', async () => {
        const users = await userDataMock.getUsers();
        expect(users).toEqual([userMock, userMock2]);
        expect(users).toHaveBeenCalled();
      });
})