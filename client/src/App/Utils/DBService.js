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
        let result, displayString;
        console.log(operator, column, N);
        switch(operator) {
            case "$min": displayString = `Minimum of ${column} is `
            case "$max": displayString = `Maximum of ${column} is `
            case "$avg": displayString = `Average of ${column} is `
                result = displayString + await this.stats(operator, column)            
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
        
        try{
            let create = await this.associates.insertOne(user);
            return true

        }catch(error){
            console.log( error)
        }

    }

    
    async update(user, id){
        try {
            let update = await this.associates.updateOne({_id: id}, {$set: user})
            return true
        } catch (error) {
            console.log( error)
        }
        
    }

    async delete(id){
        try {
            let del = await this.associates.deleteOne({_id: id})
            return true
        } catch (error) {
            console.log( error)
        }
    }
}