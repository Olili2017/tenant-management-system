import React, { useEffect } from 'react'
import { Container }  from 'react-bootstrap'

function Property (props){

    useEffect(() => {
        // console.log(props)
        // console.log(props.match.params.id)

        // fetch("http://localhost:5000/hello").then(result => {
        //     console.log(result)
        // }).catch(err => {
        //     console.log(err)
        // })

    },[])

    return(
        <Container>
            <header style={{textTransform: 'uppercase', color: '#919191', fontWeight: '600' }}>My houses at Kamwokya</header>
        </Container>
    )
}

export default Property