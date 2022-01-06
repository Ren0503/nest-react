import React, { FunctionComponent, useEffect, useState, MouseEvent } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { History } from 'history'
import { FaCheck } from 'react-icons/fa';
import { CREATE_OR_LOGIN_USER } from 'src/graphql';
import { Button, Container, Content, Input } from './Home.styled';

type HomeProps = {
    history: History;
};

const HomeScreen: FunctionComponent<HomeProps> = ({ history }) => {
    const [input, setInput] = useState<string>('');

    const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

    useEffect(() => {
        if (data) {
            const { createOrLoginUser } = data;
            const { id } = createOrLoginUser;

            history.push(`/dashboard?id=${id}`);
        }
    }, [data]);

    async function handleRegister(e: MouseEvent) {
        e.preventDefault();

        if (input.length < 1) {
            alert('Insert a valid e-mail!');
            return;
        }

        createOrLoginUser({ variables: { email: input } });
        setInput('');
    }

    return (
        <Container>
            <Content>
                <form>
                    <Input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="E-mail"
                    />

                    <Button onClick={handleRegister}>
                        <FaCheck size={36} color="#fff" />
                        <span>Login or Register</span>
                    </Button>
                </form>
            </Content>
        </Container>
    );
};

export default HomeScreen;
