import conn from "./conn";
import * as Realm from "realm-web";

export default class DBService{

    constructor(){
        this.mongodb = conn.currentUser.mongoClient("mongodb-atlas");
        this.associates = this.mongodb.db("academy").collection("associates");
        this.user = conn.currentUser;
    }

    static async connect(){
        if (this.user) return;
        console.log("connecting")
        this.user = await conn.logIn(Realm.Credentials.anonymous());    
    }

    async find(){
        let result = await this.associates.find({});
        return result;
    }
    
}