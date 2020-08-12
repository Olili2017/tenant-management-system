import React, {useRef, useState} from 'react';
import { Container, Col, Form, FormGroup, FormControl, Row, Image} from 'react-bootstrap'
import { useAuth } from '../utils/auth'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import './css/signin.css'
function LandlordSignin (props) {

    const referer = props.location.referer || '/';

    // props.match.params.user
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
          userName,
          password
        }).then(result => {
          if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
      <div className="signin">
          <Container>
            <Row>
                <Col>
                    <Image src="https://p7.hiclipart.com/preview/836/397/222/house-logo-real-estate-business-real-estate-thumbnail.jpg" />
                </Col>
                <Col style={{borderLeft: '1px solid #eaeaea', padding: '4em 3em' }}>
                    <Image src="../males-group.png" />
                    { isError &&<div style={styles.errorBox} ><code>The username or password provided were incorrect!</code></div> }
                        <Form >
                            <FormGroup>
                                <FormControl onChange={e => { setUserName(e.target.value)}} type="text" placeholder="name" value={userName} />
                            </FormGroup>
                            <FormGroup>
                                <FormControl onChange={e => { setPassword(e.target.value)}} type="password" placeholder="password" value={password} />
                            </FormGroup>
                            <FormControl type="button" className="btn-submit" variant="primary" value="Login" onClick={postLogin} />
                        </Form>
                        <Link to="/register/landlord">Don't have an account? Signup here ...</Link>
                </Col>
            </Row>
          </Container>
      </div>
    );
}

const styles = {
    errorBox : {
        border: '1px solid hsla(0,0%,100%,.08)',
        padding: '4px',
        marginBottom: '1em',
        width : '70%'
    }
}
export default LandlordSignin;
