import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    };

    return (
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
                    <Col md={6} >
                        <div style={{ padding: '30px', backgroundColor: 'white' }}>
                            <h3 >Log in</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className='px-5 text-left' >
                                    Log in
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;
