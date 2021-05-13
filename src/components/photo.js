import React from 'react'
// import testPic from '../components/Black_hole.png'
import styled from 'styled-components'

const ImageDiv = styled.div`
    display: flex;
    justify-content: space-between;

    #sw1{
        width: 200px;
        height: 1000px;
        object-fit: cover;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);    
    };
    #sw2{
        width: 200px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    };
`


const photo = (props) => {
    // console.log('hello', props.data)
    return ( 
        <ImageDiv>
            <img src = 'https://cutewallpaper.org/21/star-wars-vertical-wallpaper/GameWallpapers.com-Search.jpg' alt='sw1' id='sw1'/>
            <img src = {props.photo} alt='test pic'/>
            <img src = 'https://cdn.statically.io/img/i.pinimg.com/originals/86/f3/ed/86f3ed0ece32d8c3ab44c3495949f8df.jpg' alt='sw2' id='sw2'/>
        </ImageDiv>
    
    )
}

export default photo;