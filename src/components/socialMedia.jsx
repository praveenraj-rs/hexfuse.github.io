import React from "react";
import "./socialMedia.css";
import { Github, Instagram, Linkedin } from "../icons/socialMediaIcons";

const SocialMedia = (props) => {
  const { github, instagram, linkedin } = props;
  return (
    <div className="SocialMedia">
      <a href={github ? github : "https://hexfuse.github.io"} target="_blank">
        <Github />
      </a>
      <a
        href={instagram ? instagram : "https://hexfuse.github.io"}
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        href={linkedin ? linkedin : "https://hexfuse.github.io"}
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
