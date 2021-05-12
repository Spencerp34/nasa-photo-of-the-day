import React from 'react'

const title = (props) => {
    // console.log(props)
    return ( 
        <div>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}

export default title;