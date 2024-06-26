import {axios} from './baseApi'

export const submitUserInfoAndStart = async ({username , email , category}) => {

    console.log('here');

    const response = await axios.post('/save' , {username , email , category});

    console.log(response)

    return response;
}