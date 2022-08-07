import React from "react";
import {
    FooterWrapper,
    FooterSocials,
    FooterSocialsLink
} from "./Footer.elements"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSocials>
                <FooterSocialsLink href="https://github.com/nolandc5" target="_blank">
                    <FaGithub />
                </FooterSocialsLink>
                <FooterSocialsLink href="https://www.linkedin.com/in/nolan-dal-corobbo-90b8831b6/" target="_blank">
                    <FaLinkedin />
                </FooterSocialsLink>
                <FooterSocialsLink href="https://twitter.com/" target="_blank">
                    <FaTwitter />
                </FooterSocialsLink>
            </FooterSocials>
        </FooterWrapper>
    )
};