import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'


const RepositoryDetailspage = () => {
    const {username,repo} = useParams()
    const [readMe, setReadMe] = useState({})
    const [error,setError] =useState(false)
    const [loading,setLoading] =useState(true)

    useEffect(() => {      
        const getLink = async () => {
            try {   
                const result = await axios(`https://api.github.com/repos/${username}/${repo}/readme`)
                const result2 = await axios(result?.data?.download_url)
                setLoading(false)
                setReadMe(result2)
                // console.log(result2)
            } catch (err) {
                setError(true)
                console.log(err)
            }
        }
        getLink()

    
    }, [username,repo])


    // console.log(error)
    return (
        <>
        <div className="section-title">
            <h1>ReadMe of {repo}
            <Link to={`/repositories/${username}`}>
                <span>Repo By {username}</span>
            </Link>
            </h1>
        </div>

        {error ? <div className="no-items-container"><div className="no-items">No ReadME</div></div>: loading? <div className="no-items-container"><div className="no-items">Loading...</div></div>:<div className="markdown"> <ReactMarkdown>{readMe.data}</ReactMarkdown></div>}

        
        </>

    )
}




export default RepositoryDetailspage

