import React from 'react';

const Info = ({ title, start, end, description, bullets, logo, badges}) => {
    return <div className="p-3 rounded mb-5 bg-dark shadow">
        <div className="d-flex flex-row mb-2">
            <Image path={logo}></Image>
            <h3>{title}</h3>
        </div>
        <i><small className="text-secondary">{start} - {end}</small></i>
        <hr className="w-50 text-white" />
        {badges.map((badgeText) => <span className="badge p-2 bg-primary mb-2 me-1">{badgeText}</span>)}
        <br />
        {description}
        <List items={bullets} />
    </div>
}

function Image({ path }) {
    return <> {path ? <img className="me-2 img-thumbnail" alt="" style={{ width: 40, height: 40 }} src={path} /> : null} </>
}

function List({ items }) {
    const getItems = () => {
        if (items && items.length > 0)
            return items.map((item, idx) => <li key={idx}>{item}</li>)
        return null;
    }
    return <div className="ms-3">{getItems()}</div>
}

export default Info;
