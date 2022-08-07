import React from "react";
import {
    ProjectWrapper,
    ProjectContainer,
    ProjectItem,
    ProjectItemImageContainer,
    ProjectItemImage,
    ProjectTitle,
    ProjectItemCta,
    ProjectItemLink,
    ProjectItemLinkTwo,

} from "./Portfolio.elements"

import project1 from "../assets/img/Project-1.jpg";
import project2 from "../assets/img/Screenshot97.jpg";
import project3 from "../assets/img/project3.jpg";
import weather from "../assets/img/Weatherdash.jpg";
import notetaker from "../assets/img/NoteTaker.JPG"
import workschedule from "../assets/img/WorkScheduler.JPG"

const data = [
    {
        id: 1,
        image: project1,
        title: "Project 1",
        link: "https://mhiss11.github.io/Project-1-/",
        gitlink: "https://github.com/mhiss11/Project-1-",
    },
    {
        id: 2,
        image: project2,
        title: "Project 2",
        link: "https://one-mile-at-a-time.herokuapp.com/",
        gitlink: "https://github.com/inglish2022/One-Mile-At-A-Time",
    },
    {
        id: 3,
        image: project3,
        title: "Project 3",
        link: "https://pokefight1987.herokuapp.com/",
        gitlink: "https://github.com/acattet/Poke-Fight-",
    },
    {
        id: 4,
        image: weather,
        title: "Weather Dashboard",
        link: "https://nolandc5.github.io/Weather-Dashboard-/",
        gitlink: "https://github.com/NolanDC5/Weather-Dashboard-",
    },
    {
        id: 5,
        image: notetaker,
        title: "Note Taker Project",
        link: "https://note-taker-ndc.herokuapp.com/",
        gitlink: "https://github.com/NolanDC5/note-taker-",
    },
    {
        id: 6,
        image: workschedule,
        title: "Work Schedule Project",
        link: "https://nolandc5.github.io/Work-Day-Scheduler/",
        gitlink: "https://github.com/NolanDC5/Work-Day-Scheduler",
    },
]

export const Portfolio = () => {

    return (
    <div>
        <ProjectWrapper>
            <ProjectContainer>
                {data.map((item) => (
                    <ProjectItem key={item.id}>
                        <ProjectItemImageContainer>
                            <ProjectItemImage src={item.image} alt={item.title}/>
                        </ProjectItemImageContainer>

                        <ProjectTitle>{item.title}</ProjectTitle>

                        <ProjectItemCta>
                            <ProjectItemLink href={item.link} target="_blank">
                                Deployed Link
                            </ProjectItemLink>
                            <ProjectItemLinkTwo
                                href={item.gitlink} target="_blank"
                            >
                                Github Link
                            </ProjectItemLinkTwo>
                        </ProjectItemCta>
                    </ProjectItem>
                ))}
            </ProjectContainer>
        </ProjectWrapper>
    </div>
    )
};