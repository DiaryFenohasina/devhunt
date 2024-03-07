import axios from 'axios' 

const backServer = axios.create({
    baseURL: `http://192.168.43.19:300/`
})


backServer.interceptors.request.use(config => {

    let token = localStorage.getItem("token")

    if (token){
        config.headers['Authorization'] = `${token}`
    }
    return config
    }, error => {
        this.$router.push('/')
        return Promise.reject(error)
})

const backServerAdmin = axios.create({
    baseURL: `http://192.168.43.19:300/api/`

})

backServerAdmin.interceptors.request.use(config => {
    let token = localStorage.getItem("token")
    let role = localStorage.getItem("role")
    if(role === "admin"){
        if (token){
            config.headers['Authorization'] = `${token}`
        }
    }else{
        this.$router.push('/')
    }
    return config
    }, error => {
        this.$router.push('/')
        return Promise.reject(error) 
})

export { backServer, backServerAdmin}