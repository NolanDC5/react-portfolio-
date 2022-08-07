import React from "react";
import { 
    AboutContainer,
    AboutImgSection,
    AboutTextSection,
    AboutText,
    Image,
} from './About.elements'


export const About = () => {

    const profile = require('../assets/img/profile.jpg')

    return (
    <div>
        <AboutContainer>
            <AboutImgSection>
                <Image src={profile} />
            </AboutImgSection>
            <AboutTextSection>
                <AboutText>
                <p>ASPIRING WEB DEVELOPER<br></br><br></br>
Hello there, my name is Nolan Dal Corobbo. I am a 20 year old out of Indinanapolis Indiana. Currently i am trying to become a web developer. 
I am currently partaking in a bootcamp through Butler University. I am a hard worker, good communicator and can talk to anyone about anything. 
I have a couple projects posted to this site so feel free to check them out and if you what you like. Feel free to reach out in the contact page </p>
                </AboutText>
            </AboutTextSection>
        </AboutContainer>
    </div>
    )
};