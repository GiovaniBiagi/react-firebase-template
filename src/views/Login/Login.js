import React, {useState} from 'react';
import { Form } from '@unform/web';
import { Input } from '../../components';
import { parseErrorMessage } from '../validations/parseFirebaseLoginErrors';
import { signInWithEmailAndPassword } from '../functions/firebaseFunctions';

import './Login.css';

export default function Login({ history }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(data) {
        setIsLoading(!isLoading);

        const { email, password } = data;
        try {
            await signInWithEmailAndPassword(email, password);
            setIsLoading(!isLoading)
            history.push('/home');
        } catch (error) {
            const parsedError = await parseErrorMessage(error);
            setError(parsedError);
        }
    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" />
                <Input name="password" type="password" />
                <button type="submit">Sign in</button>
            </Form>
            {error && (
                <span>{error}</span>
            )}
        </div>
    )
}
