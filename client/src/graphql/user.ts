import { gql } from 'apollo-boost';

export const CREATE_OR_LOGIN_USER = gql`
    mutation($email: String!) {
        createOrLoginUser(data: { email: $email }) {
            id
        }
    }
`;