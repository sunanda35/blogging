import React from 'react'

function Text({blog}) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: blog}} />
        </div>
    )
}

export default Text
