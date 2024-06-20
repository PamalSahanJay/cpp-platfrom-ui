import React from 'react'
import './Hello.css'

const Hello: React.FC = () => {
    return (
        <div className="container">
            <div className="button-row">
                <button className="blue-button">Button 1</button>
                <button className="blue-button">Button 2</button>
                <button className="blue-button">Button 3</button>
            </div>
            <div className="button-row">
                <button className="blue-button">Button 4</button>
                <button className="blue-button">Button 5</button>
                <button className="blue-button">Button 6</button>
            </div>
        </div>
    )
}

export default Hello