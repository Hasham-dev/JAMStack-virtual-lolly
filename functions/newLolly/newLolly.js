const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortId = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String

  }
  type Lolly {

    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation  {
    createLolly(recipientName: String!, message: String!, senderName: String!, flavourTop: String!, flavourMiddle: String!, flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    },
  },
  Mutation: {
    createLolly: (_,args)=>{
      const client = new faunadb.client({secret: "fnAD6ENdQ8ACAVBEFQBBaVj1bmi3BTQ_iEyRkv0s"});
      const id = shortId.generate();
      args.lollyPath = id

      const result = await client.query(

      );
      
      console.log('hihihi', args.name);
      return {
        message: "Hello"
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
