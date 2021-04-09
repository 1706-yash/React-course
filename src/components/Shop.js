import React from 'react'

function Shop(props) {
    return (
        <div>
            <h1>Shop page</h1>
            {JSON.stringify(props.history.location.state.userId)}
        </div>
    )
}

export default Shop
