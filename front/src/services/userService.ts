import { api } from "./api";

interface ISignUpInfo{
  username:string
  password:string
  email:string
  name:string
}
export class UserService{
  async login(username:string, password:string){
    const response = await api.post('/users/login',{
      username,
      password
    });
    const token = response.data.token
    localStorage.setItem('token',token)
  }
  async signUp(data:ISignUpInfo){
    await api.post('/users',data);
  }
}