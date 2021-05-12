import React from 'react'
// import testPic from '../components/Black_hole.png'


const photo = (props) => {
    // console.log('hello', props.data)
    return ( 
        <div>
            <img src = {props.photo} alt='test pic'/>
        </div>
    
    )
}

export default photo;