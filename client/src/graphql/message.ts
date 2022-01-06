import { gql } from 'apollo-boost';

export const GET_ALL_MESSAGES = gql`
    query {
        getMessages {
            id
            content
            user {
                email
            }
        }
    }
`;