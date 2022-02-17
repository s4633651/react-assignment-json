import axios from 'axios';

export default axios.create({
    baseURL : "http://localhost:3004",
    header : {
        'Content-Type':"application/json",
        
    }
});