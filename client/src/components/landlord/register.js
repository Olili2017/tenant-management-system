import React, { useState, useRef } from 'react';
import { Col, FormGroup, FormControl, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/register.css'
import './css/checkbox.css'
function LandlordRegister (props) {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const genderRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConfirmRef = useRef(null)

    const [registering,setRegistering] = useState(false)

    const registerLandlord = () => {
        setRegistering(true)

        const landlord = {
            fName : firstNameRef.current.value,
            lName : lastNameRef.current.value,
            email : emailRef.current.value,
            phone : phoneRef.current.value,
            gender : genderRef.current.checked ? "M" : "F",
            pass : passwordRef.current.value,
            passConf : passwordConfirmRef.current.value
        }

        if (landlord.pass !== landlord.passConf){
            // TODO: show error for password mismatch
            return
        }

        if (objectHasNullValue(landlord)){
            // TODO throw error
            return
        }

        // alert(landlord)

        this.props.loginLandlord()
    }

    const objectHasNullValue = (landlord) => {

        let hasNull = false
        for (var key in landlord) {
            if ( key == null )
                hasNull = true
                break
        }

        return hasNull
    }

    return (
        <div className="register">
        <Row>
            <Col md={3} className="register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Welcome</h3>
                <p>You are 30 seconds away from becoming the best landlord!</p>
                <Link className="btn-round" to="/login/landlord" onClick={e => console.log(e.target) } >Login</Link><br/>
            </Col>
            <Col md={9} className="register-right">
                <div id="myTabContent">
                    <div>
                        <h3 className="register-heading">Register as Landlord</h3>
                        <Row className="register-form">
                            <Col md={6} >
                                <FormGroup>
                                    <FormControl ref={firstNameRef} type="text"  placeholder="First Name *" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl ref={lastNameRef} type="text"  placeholder="Last Name *" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl ref={passwordRef} type="password"  placeholder="Password *" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl ref={passwordConfirmRef} type="password"   placeholder="Confirm Password *" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <FormControl ref={emailRef} type="email"  placeholder="Your Email *" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl ref={phoneRef} type="text" minLength="10" maxLength="10" name="txtEmpPhone"  placeholder="Your Phone *" />
                                </FormGroup>
                                <FormGroup>
                                    <input ref={genderRef} type="checkbox" className="toggle" id="toggle" />
                                        <label htmlFor="toggle">
                                        <span className="on" value="M">Male</span>
                                        <span className="off" value="F" >Female</span>
                                    </label>
                                </FormGroup>
                                <Button className="btn-round" onClick={registerLandlord} >Register</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    );
}

export default LandlordRegister;
