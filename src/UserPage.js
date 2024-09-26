import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
    const [userData, setUserData] = useState(null);
    const [sportData, setSportData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ image: '', text: '' });

    // DATOS DE USUARIO
    useEffect(() => {
        fetch('https://my.api.mockaroo.com/users.json?key=f6ffa7f0')
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const handleShowModal = (image) => {

        fetch('https://my.api.mockaroo.com/ciudad.json?key=f6ffa7f0')
            .then((response) => response.json())
            .then((data) => {
                setSportData(data);
                const text = `${data.lugar} - ${data.distancia} - ${data.duracion}`;
                setSelectedImage({ image, text });
                setShowModal(true);
            })
            .catch((error) => console.error('Error fetching data:', error));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col >
                        <h1>Cycling</h1>

                        {[...Array(5)].map((_, i) => (
                            <Row key={i} className="mb-2">

                                <Col key={i} onClick={() => handleShowModal('https://st.depositphotos.com/1836657/2734/i/450/depositphotos_27347807-stock-photo-bicycle-race.jpg', '')}>
                                    <Image src="https://st.depositphotos.com/1836657/2734/i/450/depositphotos_27347807-stock-photo-bicycle-race.jpg" />
                                </Col>
                                <Col key={i} onClick={() => handleShowModal('https://st.depositphotos.com/1836657/2734/i/450/depositphotos_27347807-stock-photo-bicycle-race.jpg', '')}>
                                    <Image src="https://st.depositphotos.com/1836657/2734/i/450/depositphotos_27347807-stock-photo-bicycle-race.jpg" />
                                </Col>

                            </Row>
                        ))}
                    </Col>

                    <Col>

                        <h1>Running</h1>

                        {[...Array(5)].map((_, i) => (
                            <Row key={i} className="mb-2">

                                <Col key={i} onClick={() => handleShowModal('https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011', '')}>
                                    <Image src="https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011" />
                                </Col>
                                <Col key={i} onClick={() => handleShowModal('https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011', '')}>
                                    <Image src="https://www.iberdrola.com/documents/20125/39940/running-mas-que-moda-746x419.jpg/40c26194-0a55-beff-b5f2-7cc4ca7533ce?t=1704699183011" />
                                </Col>

                            </Row>
                        ))}
                    </Col>
                    <Col>
                        <h1>Swimming</h1>

                        {[...Array(5)].map((_, i) => (
                            <Row key={i} className="mb-2">

                                <Col key={i} onClick={() => handleShowModal('https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg', '')}>
                                    <Image src="https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg" />
                                </Col>
                                <Col key={i} onClick={() => handleShowModal('https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg', '')}>
                                    <Image src="https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg" />
                                </Col>

                            </Row>
                        ))}
                    </Col>



                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                    <Image src={selectedImage.image} fluid />
                    <h5>{selectedImage.text}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {userData && (
                <div className="text-center mt-5" style={{
                    backgroundColor: 'lightblue',
                    padding: '30px',
                    color: 'white',
                }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <Image width="100" height="100" src={userData.img_perfil} roundedCircle />
                            </Col>
                            <Col>
                                <h2>{userData.nombre}</h2>
                            </Col>
                            <Col>
                                <h3> <b>Cycling:</b> {userData.mt_cicla.substring(0, 4)}</h3>
                            </Col>
                            <Col>
                                <h3>  <b>Running:</b> {userData.mt_corriendo.substring(0, 4)}</h3>
                            </Col>
                            <Col>
                                <h3>  <b>Swimming:</b> {userData.mt_nadando.substring(0, 4)}</h3>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}

export default UserPage;
