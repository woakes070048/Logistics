export class AuthInterceptorService {
    constructor() {
    }
    
    request = (config) => {
        config.headers = config.headers || {};
        let authData = localStorage.getItem('authToken');
        if(authData) {
            config.headers.Authorization = 'Bearer' + authData;
        }
        
        return config;
    }
}