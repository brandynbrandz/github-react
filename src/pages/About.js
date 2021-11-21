import React from 'react'

const About = () => {

    const instructions = [
        {step: 'Once you access the Homepage you have two options; A. Select from the dropdown of most searched usernames. B. Search a username you prefer to use.'},
        {step: 'Once you have a username, select the card containing the details and you will be directed to his/her public repositories.'},
        {step: 'Once in the public repositories page, a list of repositories is available for selection. Click the one you want to see its READMe file'},
        {step: 'If the user does not have a repository, you can go back either by clicking the home nav-icon or the go back button'},
        {step: "If a repository is selected, you will be directed to the ReadMe page where you have access to the repository's content"},
        {step: "From here you can go back to the user's other repositories by clicking his username from the title section component"},
        {step: "Thank you for using GitHub App"}
      ];
    return (<>
            <div className="section-title">
            <h1>Instruction to guide you
                <span>Welcome to GITHUB App</span>
            </h1>
        </div>
        <div className="instructions">
            <ol>
            {instructions.map((instruction,index)=> 
                <div key={index}>
                    <li>{instruction.step}</li>
                </div>
            )}
            </ol>
        </div></>
    )
}

export default About
