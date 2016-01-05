import {IUserCreds} from '../interfaces/IUserCreds';

export class UserCreds implements IUserCreds {
    public username: string;
    public password: string;
    
    constructor(_username?: string, _password?: string) {
        this.username = _username !== undefined ? _username : '';
        this.password = _password !== undefined ? _password : '';
    }
}