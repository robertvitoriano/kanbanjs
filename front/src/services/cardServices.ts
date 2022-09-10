import { api } from "./api";
import { getToken } from "./authService";
export const getCards = async() =>{
  const response = await api.get('/cards',{
    headers:{
      authorization: String(getToken())
    }
  })

  return response.data
}