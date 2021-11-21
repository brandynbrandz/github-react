import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    Link,
    useParams
  } from "react-router-dom";

const ReporitoryListPage = () => {
    const {username} = useParams()

    const [repos, setRepos] = useState([])
    const [loading,setLoading] =useState(true)

   
    useEffect(() => {
        const getRepos = async () => {
            const result = await axios(`https://api.github.com/users/${username}/repos`)
                setRepos(result.data)
                setLoading(false)
        }
        getRepos()
        
    }, [username])

    console.log(repos.length)
   
    return (<>
        <div className="section-title">
            <h1>Repository items for {username}
                <span>with {repos.length} {repos.length>1 ? <>repositories</>:<>repository</>}</span>
            </h1>
        </div>

        {loading? <div className="no-items-container"><div className="no-items">Loading...</div></div>:
        
  <div className="card-container">
        {repos.length? repos.map((repo,index)=>(
            <div key={repo.id}>

                    <Link to={`/repository/${username}/${repo.name}`}>
                    <div className="card-component">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">{index + 1}. {repo.name}</h2>
                            <p className="card-text">Last Updated {repo.updated_at.substring(0, 4)}</p>
                            <h5 className="card-text"><small className="text-muted">Created By {repo.owner.login}</small></h5>
                            <h5 className="card-text"><small className="text-muted">{repo.language && <>Languages: {repo.language}</>}</small></h5>
                        </div>
                        </div>                   
                        </div>                   
                    </Link>

            </div>
        )): <><Link to="/"><div className="no-items-container"><div className="no-items">No Repos Found<div>Go Back</div></div></div></Link></>}


    </div>
        }
        
</>
    )
}

export default ReporitoryListPage
