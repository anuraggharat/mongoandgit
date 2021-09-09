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

    async stats(operator, column){
        //operator should be $min, $max or $avg

        column = "$" + column

        let output = await this.associates.aggregate(
            [
                {
                    $group: {
                        _id:  null,
                        result: {[operator]: column}
                    }
                }
            ]     
        )

        console.log(output[0].result)
        return output[0].result
    }
    

    async rank(order, column, N){

        let output = await this.associates.aggregate(
            [
                {
                    $sort: {
                        [column]: order
                    }
                },
                {
                    $limit: N
                }
            ]            
        )

        console.log(output)
        return output
    }


    async compareByValue(operator, column, N){
        //operator should be $gt or $lt

        let output = await this.associates.aggregate(
            [
                {
                    $match: {
                        [column]: {[operator]: N}
                    }
                }
            ]         
        )

        console.log(output)
        return output
    }


    async operation(operator, column, N=0){
        let result;
        switch(operator) {
            case "$min":
            case "$max":
            case "$avg": result = await this.stats(operator, column)
                break;
            case "$gt":
            case "$lt": result = await this.compareByValue(operator, column, N)
                break;                
            case "TOP": result = await this.rank(-1, column, N)
                break;
            case "BOTTOM": result = await this.rank(1, column, N)
                break;
        }
        return result;
    }

    async create(user){
        console.log("creating")
        try{
            let create = await this.associates.insertOne(user);
            return true

        }catch(error){
            console.log( error)
        }

    }

    
    async update(user){
        try {
            let update = await this.associates.updateOne({_id: user._id}, {$set: {
                name: user.name,
                ps: user.ps,
                subject1: user.subject1,
                subject2: user.subject2,
                subject3: user.subject3,
                avg: user.avg,
                result: user.result
            }})
            return true
        } catch (error) {
            console.log( error)
        }
        
    }

    async delete(user){
        try {
            let del = await this.associates.deleteOne({name: user.name})
            return true
        } catch (error) {
            console.log( error)
        }
    }
}