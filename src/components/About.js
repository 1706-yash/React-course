import React from 'react'

function About(props) {
    return (
        <div>
            <h1>About page</h1>
            <button onClick={() => {
                props.history.push("/shop?id=11", {userId:21});
            }}>Navigate To Shop</button>
        </div>
    )
}

export default About
