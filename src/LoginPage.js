import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { t } = useTranslation();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            alert('Correo invalido');
            return;
        }
        if (password.length < 8) {
            alert('Contraseña invalida');
            return;
        }
        alert('Inicio de sesión exitoso');
        navigate('/user');
    };

    return (
        <>
            <LanguageSwitcher></LanguageSwitcher>
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534289692684-c02577d5560d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: 'cover',

                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',

                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div style={{ padding: '30px', backgroundColor: 'white' }}>
                                <h3>{t('logIn')}</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>{t('email')}</Form.Label>
                                        <Form.Control
                                            type="email"
                                            // Agrega aquí la lógica para el manejo del estado
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>{t('password')}</Form.Label>
                                        <Form.Control
                                            type="password"
                                            // Agrega aquí la lógica para el manejo del estado
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='px-5 text-left'>
                                        {t('logIn')}
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}

export default LoginPage;
