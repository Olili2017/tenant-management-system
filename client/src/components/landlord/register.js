import React from 'react';
import { Container, Col, Form, FormGroup, FormControl, Row} from 'react-bootstrap'
function LandlordRegister (props) {

    return (
      <div>
          <Container style={{height : '100%' }}>
            <Row style={{height : '30%', marginTop : '20%'}}>
                <Col></Col>
                <Col style={{backgroundColor : 'green', borderRadius: '1.3em', boxShadow : '0px 0px 5px red', padding: '3em'}}>
                    <Form >
                        <FormGroup>
                            <FormControl type="text" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="password" placeholder="pass" />
                        </FormGroup>
                        <FormControl type="button" className="btn-submit" variant="primary" value="Login" />
                    </Form>
                </Col>
                <Col></Col>
            </Row>
          </Container>
      </div>
    );
}

export default LandlordRegister;
