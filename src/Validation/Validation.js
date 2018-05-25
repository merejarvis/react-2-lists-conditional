import React from 'react'

export const Validation = (props) => {
    if (props.name < 5) {
        return (<div>
            Text too short
            </div>)
    } else {
        return (<div>
            Text long enough
            </div>)
    }
} 