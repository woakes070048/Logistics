/// <reference path="../typings/tsd.d.ts" />

export class Auth {
    public username: string;
    public password: string;
    
    constructor() {

    }
    
    public login(username: string, password: string, callback: any) {
        callback(null, {username: username});
    }
}