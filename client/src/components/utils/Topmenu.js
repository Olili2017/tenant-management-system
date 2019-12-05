import React, { useState, useEffect } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './css/overlaymenu.css'

function Topmenu (){

    const [itemSelected, select] = useState(0)
    const [isScrolled, scroll] = useState(false)

    const handleScroll = (event) => {
        let top = window.scrollY

        if (top > 50){
            scroll(true)
        } else {
            scroll(false)
        }
    }

    useEffect(() => {
        // acts as component did mount
        window.addEventListener('scroll',handleScroll)

        return () => {
            // acts as componentwillunmount is normal convension
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

        const items = [
            { display : `What is Landlord?`, href : "howeare", selection : 0},
            { display : "Teams", href : "teams", selection : 1},
            { display : "Why landlord", href : "whyus", selection : 2},
            { display : "Contact us", href : "contact", selection : 3}
        ]

        return (<div>
            {
            !isScrolled ?
            (
                <Row className="menu">
                    <nav className="d-none d-md-none d-lg-block">
                        {
                            items.map((item, key) => {
                            return <div key={key}><Link onClick={
                                () => {
                                    select(item.selection)
                                }
                            } activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} activeClassName="selected" to={item.href} className={itemSelected === item.selection ? "selected" : "notselected"} >{item.display}</Link></div>
                            })
                        }
                        <Button className="btn-login btn-sm pull-right" >Login</Button>
                        <Button className="btn-login btn-sm" >Register here.</Button>
                    </nav>
                </Row>
            ) : (
                <Row className="menu overlay-menu" >
                    <nav className="d-none d-md-none d-lg-block" >
                        {
                            items.map((item, key) => {
                            return <div key={key}><Link onClick={
                                () => {
                                    select(item.selection)
                                }
                            } activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} activeClassName="selected" to={item.href} className={itemSelected === item.selection ? "selected" : "notselected"} >{item.display}</Link></div>
                            })
                        }
                    </nav>
                </Row>
            )
            }
        </div>

        );
}

export default Topmenu;