import React from 'react'
const skills = [
    {
        name: "Javascript",
        img: "js.svg"
    },
    {
        name: "SAPUI 5",
        img: "sapui5.svg"
    },
    {
        name: "React",
        img: "react.svg"
    },
    {
        name: "Node Js",
        img: "nodejs.png"
    },
    {
        name: "MongoDB",
        img: "mongodb.svg"
    },
    {
        name: "GraphQL",
        img: "GraphQL.png"
    },
    {
        name: "Docker",
        img: "docker.png"
    }, {
        name: "Terraform",
        img: `terraform.png`
    },
]




export const Skills = () => {
    return (
        skills.map(skill => {
            return <h3 className="info-subtitle"><img className='icons-img' src={`./images/icons/${skill.img}`} alt="javascript" /> {skill.name} </h3>
        })

    )
}
