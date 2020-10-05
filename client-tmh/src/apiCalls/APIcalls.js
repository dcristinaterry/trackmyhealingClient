import axios from 'axios'

export default{

    register: function(user){
        return axios.post('/api/auth/register',user);
    },

    // authenticate: function(data){
    //     return axios.post('/api/auth/login',data);
    // },

    googleAuthenticate: function(){
        console.log("calling google")
        return axios.get('/api/auth/google')
    }
}