import axios from 'axios';
const URl='http://localhost:8000';
export const authenticateSignup=async(data)=>{
     try{
          return await axios.post(`${URl}/signup`,data);
     }
     catch(error){
          console.log('error while calling singup api',error);
     }
}
export const authenticateLogin = async (data) => {
     try {
         return await axios.post(`${URL}/login`, data);
     } catch (error) {
         console.log('Error while calling login API: ', error);
     }
 }
