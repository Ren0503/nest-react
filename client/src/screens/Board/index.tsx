import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_MESSAGES } from 'src/graphql';
import { Container, Message } from './Board.styled';

interface IMessage {
    id: number;
    content: string;
    user: {
        email: string;
    }
}

const BoardScreen = () => {
    const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
        GET_ALL_MESSAGES
    );

    if (loading) return <p>Loading ...</p>;

    return (
        <Container>
            {data?.getMessages.map(item => (
                <Message key={item.id}>
                    <p>{item.content}</p>

                    <span>{item.user.email}</span>
                </Message>
            ))}
        </Container>
    );
};

export default BoardScreen;
