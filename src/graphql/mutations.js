import { gql } from '@apollo/client';

export const USER_AUTHORIZATION = gql`
  mutation userAuthorization($username: String!, $password: String!){
      authorize(credentials:{ username:$username, password:$password }){
          accessToken
      }
    
  }
`;