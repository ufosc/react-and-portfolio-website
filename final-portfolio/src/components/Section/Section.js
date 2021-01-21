import React from 'react'

export default function Section({children}) {
    return <div className="container">
        <div className="row">
            <div className="col"/>
            <div className="col-6">{children}</div>
            <div className="col"/>
        </div>
    </div>
}
