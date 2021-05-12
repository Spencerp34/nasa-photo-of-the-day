import React from 'react'
import testPic from '../components/Black_hole.png'

const photo = (props) => {
    // console.log(props)
    return ( 
        <div>
            <h3>Testing Photo</h3>
            <img src = {testPic} alt='test pic'/>
        </div>
    )
}

export default photo;