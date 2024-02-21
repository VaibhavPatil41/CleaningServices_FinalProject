import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <>

            {/* <div>
            <footer >
                   <Row className="bg-secondary" variant="white" expand="lg " bottom-0 footer  >
                        <Col className="text-center py-3">
                        <p>&copy; 2024 Sahyadri Navigator| All rights reserved.</p>     
                        </Col>
                    </Row>
                <div className="container text-center">
                </div>
             
            </footer>

        </div> */}
<footer className="footer bg-secondary py-3 mt-auto">
            <Container>
                <p className="text-center m-0">&copy; 2024 Home Glove Cleaning Services | All rights reserved.</p>
            </Container>
        </footer>

        </>

    )
}