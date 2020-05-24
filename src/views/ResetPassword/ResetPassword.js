import React, {useState} from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import { parseErrorMessage } from '../validations/parseFirebaseLoginErrors';
import { resetPassword } from '../functions/firebaseFunctions';

import './ResetPassword.css';

export default function Register({ history }) {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(data) {
        setIsLoading(!isLoading);

        const { email } = data;

        try {
            await resetPassword(email);
            history.push('/');
        } catch (error) {
            const parsedError = await parseErrorMessage(error);
            setError(parsedError);
            setIsLoading(!isLoading);
            setIsLoading(isLoading);
        }
    }

    return (
        <div className="container">
            <h1>Resetar senha</h1>
            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Input name="email" type="email" />
                    {!isLoading && (
                        <button type="submit">Resetar senha</button>
                    )}
                    {isLoading && (
                        <button type="button" disabled>Aguarde...</button>
                    )}
                </Form>
                {error && (
                    <span>{error}</span>
                )}
                <div className="link-container">
                    <Link to='/'>Entrar</Link>
                    <Link to='/register'>Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}
