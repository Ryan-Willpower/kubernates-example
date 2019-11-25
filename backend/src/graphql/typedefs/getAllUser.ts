import { gql } from "apollo-server"

// `User` type come from user.ts
export default gql`
  extend type Query {
    getAllUser: [User]!
  }
`
