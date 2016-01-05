export class Auth {
    public username: string;
    public password: string;
    
    constructor() {

    }
    
    public login(username, password, callback) {
        callback(null, {username: username});
    }
}