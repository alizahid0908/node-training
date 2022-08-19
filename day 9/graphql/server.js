const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList

}  = require('graphql')
const app = express()


const authors = [
    {id: 1 , name : "J.K Rowling"},
    {id: 2 , name : "J.R Tolkein"},
    {id: 3 , name : "Brent Weeks"}
]

const books = [
        {id : 1, name : "Harry Potter 1", authorID : 1},
        {id : 2, name : "Harry Potter 2", authorID : 1},
        {id : 3, name : "Harry Potter 3", authorID : 1},
        {id : 4, name : "The Fellowship of the Ring", authorID : 2},
        {id : 5, name : "The Two Towers", authorID : 2},
        {id : 6, name : "Return of the King", authorID : 2},
        {id : 7, name : "The Way of Shadows", authorID : 3},
        {id : 8, name : "Beyond the Shadows", authorID : 3}
        

]

const BookType = new GraphQLObjectType({
    name : 'Book',
    description : 'Represents Book written by an author',
    fields: ()=>({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorID: {type: GraphQLNonNull(GraphQLInt)},
        author :{
            type: AuthorType,
            resolve: (book)=>{
                return authors.find(author => author.id === book.authorID)
            }
        }
    })
})


const AuthorType = new GraphQLObjectType({
    name : 'Author',
    description : 'Represents an author',
    fields: ()=>({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        books :{
            type: new GraphQLList(BookType) ,
            resolve: (author)=>{
                return books.filter(book => book.authorID === author.id )
            }
        }
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description : 'Root Query',
    fields : ()=>({
        book : {
            type : BookType,
            description: 'Single Book',
            args:{
                id : {type: GraphQLInt}
            },
            resolve: (parent, args)=> books.find(book => book.id === args.id)
        },
        books : {
            type : new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: ()=> books
        },
        authors : {
            type : new GraphQLList(AuthorType),
            description: 'List of All Books',
            resolve: ()=> authors
        },

        author : {
            type :AuthorType,
            description: 'Single Author',
            args:{
                id : {type: GraphQLInt}
            },
            resolve: (parent, args)=> authors.find(author => author.id === args.id)
        }

    })
})

const schema = new GraphQLSchema({
    query : RootQueryType   
})


app.use('/graphql', expressGraphQL({
    schema : schema,
    graphiql : true
}))
app.listen(4000, ()=> console.log("Server is Running"))