import { api } from "./api";

interface ISignUpInfo {
  username: string
  password: string
  email: string
  name: string
}
export class UserService {
  async login(username: string, password: string) {
    try {
      const response = await api.post('/users/login', {
        username,
        password
      });
      const token = response.data.token
      localStorage.setItem('token', token)
    } catch (error) {
      console.error(error)
    }
  }
  async signUp(data: ISignUpInfo) {
    try {
      await api.post('/users', data);

    } catch (error) {
      console.error(error)
    }
  }
}