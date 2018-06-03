var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin2:admin2@ds237989.mlab.com:37989/lenditdb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
Lend = require('../models/lendModel');

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        name: {type: GraphQLString},
    })
});

const LendDBData = new GraphQLObjectType({
    name:'Lend',
    fields:() => ({
        category:{type:GraphQLString},
        description:{type: GraphQLString}
    })
})

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        lend:{
            type:CustomerType,
            args:{
                name:{type:GraphQLString}
            },
            resolve(parentValue, args){
                for(let i = 0;i < customers.length;i++){
                    if(customers[i].name == args.name){
                        return customers[i];
                    }
                }
            }
        },
        lend:{
            type: new GraphQLList(LendDBData),
            resolve(parentValue, args){
                var foundItems = new Promise((resolve, reject) => {
                    Lend.find({},(err, todos) => {
                        err ? reject(err) : resolve(todos)
                    })
                })
                return foundItems
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});