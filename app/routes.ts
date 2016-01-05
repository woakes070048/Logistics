/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import jwt = require('jsonwebtoken');
import Auth = require('./auth');

export class Routes {
    private req: express.Request;
    private res: express.Response;
    
    constructor() {
    }
    
    Token = (req: express.Request, res: express.Response) => {
        this.req = req;
        this.res = res;
        var auth = Auth.Auth;
        
        auth.prototype.login(req.body.username, req.body.password, this.loginCallback);
        
    }
    
    loginCallback = (err: any, data: any) => {
        if(err) {
            this.res.send({ success: false });
        } else {
            var token = jwt.sign(data, 'letmein', { expiresIn: '1d' });
            this.res.send({ success: true, token: token });
        }
    }
    
}