import axios from 'axios'

export default{

    register: function(user){
        return axios.post('/api/user/register',user);
    }

}