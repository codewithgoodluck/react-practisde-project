import React from 'react'

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <h2>Feedback UI {props.text}</h2>

            </div>
        </header>
    )
}

Header.defaultProps={
    text:"Feedback UI ME",
    bgColor:"rgba(0,0,0,0 0.4)",
    textColor:"#ffdghu"
}

export default Header

