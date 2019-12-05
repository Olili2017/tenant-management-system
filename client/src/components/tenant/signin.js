import React, {useRef} from 'react';
import { Container, Col, Form, FormGroup, FormControl, Row} from 'react-bootstrap'

function TenantSignin (props) {

    // props.match.params.user

    const usernameInput = useRef()
    const passwordInput = useRef()

    const attemptLogin = function(){
        // alert(`logging in now ${usernameInput.current.value} and pass ${passwordInput.current.value}`)
        if (usernameInput.current.value === "olili" && passwordInput.current.value === "pass"){
            props.history.push("/tenant")
        }

    }

    return (
      <div>
          <Container style={{height : '100%' }}>
            <Row style={{height : '30%', marginTop : '20%'}}>
                <Col></Col>
                <Col style={{backgroundColor : 'green', borderRadius: '1.3em', boxShadow : '0px 0px 5px red', padding: '3em'}}>
                    <Form >
                        <FormGroup>
                            <FormControl ref={usernameInput} type="text" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl ref={passwordInput} type="password" placeholder="pass" />
                        </FormGroup>
                        <FormControl type="button" className="btn-submit" variant="primary" value="Login" onClick={attemptLogin} />
                    </Form>
                </Col>
                <Col></Col>
            </Row>
          </Container>
      </div>
    );
}
export default TenantSignin;
