import React from 'react'
import { Link } from 'react-router-dom';

import './card.css';
const card = (props) => {
  const {name,joined,bio,repos,avatar, location, loading} = props
    return (
        <div className="cards">
          <Link to={name.length>1 ? `/repositories/${name}`: `/`}>
        <div className="card">
{loading? <div style={{textAlign:"center"}}><div className="no-items-container"><div className="no-items">Loading...</div></div></div>:<>
          <img src={avatar} alt="user-pic" />
          <div className="card-body">
            <h2>{name}</h2>
            <h5>Joined in {joined.substring(0, 4)}</h5>
            <p>{bio}</p>
            <h5>{repos} Repos</h5>
            <h5>{location && `Based in ${location}`} </h5>
          </div></>
}
        </div>
          </Link>
        </div>
    )
}

export default card
