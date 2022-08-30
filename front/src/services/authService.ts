export const getToken = () => {
 const token = 'Bearer ' + localStorage.getItem('token')
 return token;
}