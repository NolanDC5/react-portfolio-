import React from "react";
import { 
  ResumeWrapper,
  ResumeContainer,
  ResumeImage,
  ResumeTitle,
  ResumeList,
  ResumeBtnContainer,
  ResumeButton,
  ResumeLink,
} from './Resume.elements';



export const Resume = () => {


    return (
      <ResumeWrapper>
        <ResumeContainer>
          <ResumeImage>
            <ResumeTitle>
              <p>Proficiencies</p><br></br>
            </ResumeTitle>
            <ResumeList>
              <p>HTML/CSS</p><br></br>
              <p>JavaScript</p><br></br>
              <p>Node.js</p><br></br>
              <p>Express</p><br></br>
              <p>Mongoose</p><br></br>
              <p>React</p><br></br>
            </ResumeList>
          </ResumeImage>
        </ResumeContainer>
        <ResumeBtnContainer>
          <ResumeButton>
            <ResumeLink>
              Download Resume
            </ResumeLink>
          </ResumeButton> 
        </ResumeBtnContainer>
      </ResumeWrapper>
      
    )
};