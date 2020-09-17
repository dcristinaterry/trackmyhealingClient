import axios from 'axios'

export default{

    register: function(user){
        return axios.post('/api/user/register',user);
    },

    authenticate: function(data){
        return axios.post('/api/auth/login',data);
    }

}