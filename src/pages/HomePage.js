import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const HomePage = () => {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [joined, setJoined] = useState("")
    const [bio, setBio] = useState("")
    const [repos, setRepos]= useState("")
    const [location, setLocation]= useState("")
    const [avatar,setAvatar] = useState('https://picsum.photos/id/54/400/300')
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)

    const handleSearch = (e) => {
      e.preventDefault()
      fetch(`https://api.github.com/users/${username}`).then(res=> res.json()).then(data=> {
      if(data.message){
          setError(data.message)
      }else{
        setLoading(false)
          storeDetails(data)
          setError(null)
      }
    }).catch(err=>{
        console.log(err)
    })
    }
    useEffect(() => {
        fetch(`https://api.github.com/users/remotemore`).then(res=> {
            if (!res.ok) {
              setError(res.statusText)
            } return res.json()}).then(data=>
        {
        if(data.message){
        setError(data.message)
        }else{
            setLoading(false); storeDetails(data)
        }
            }).catch(err=>{
                console.log(err)
            })
    }, [])

    const storeDetails = ({name, login, bio, public_repos, avatar_url,created_at,location}) => {
        setName(login)
        setBio(bio)
        setRepos(public_repos)
        setAvatar(avatar_url)
        setJoined(created_at)
        setLocation(location)
    }
    return (
        <>
        <div className="section-title">
            <h1>GITHUB ACCOUNT {username && <>for {username}</>}
                <span>Enter the username</span>
            </h1>
        </div>
        <div>
        
        </div>
        <div className="query">
        <select
            name="usernames"
            onChange={(e) => 
            
                    
                    fetch(`https://api.github.com/users/${e.target.value}`).then(res=> res.json()).then(data=> {
                    if(data.message){
                        setError(data.message)
                    }else{
                        setUsername(data.login)
                        setLoading(false)
                        storeDetails(data)
                        setError(null)
                    }
                  }).catch(err=>{
                    console.log(err)
                })
                  
                
            }
            className="customed-select"
            value={username}
            >
            <option value="" hidden>
                Choose from most searched usernames
            </option>
            {[
                "brandynbrandz",
                "remotemore",
                "Graduation",
                "facebook",
                "microsoft",
                "google",

            ].map((item, index) => (
                <option key={index} value={item}>
                {item}
                </option>
            ))}
            </select>
        <form onSubmit={handleSearch}>
          <div className="search">
          
            
            <input type="text" className="searchTerm" required placeholder="Search Github Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <button type="submit" className="searchButton" >Search</button>
          </div>
        </form>
      </div>
      <div className="profile">
      {error? <div className="no-items-container"><div className="no-items">{error}</div></div>: 
      
        <Card name={name} repos={repos} bio={bio} avatar={avatar} joined={joined} location={location} loading={loading}/>
    }
    </div>
      </>
    )
}

export default HomePage
