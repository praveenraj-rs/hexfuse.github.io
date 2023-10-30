import React from "react";
import "./socialMedia.css";
import { Github, Instagram, Linkedin } from "../icons/socialMediaIcons";

const SocialMedia = (props) => {
  const { github, instagram, linkedin, width, height } = props;
  return (
    <div className="SocialMedia">
      <a href={github ? github : "https://hexfuse.github.io"} target="_blank">
        <Github width={width} height={height} />
      </a>
      <a
        href={instagram ? instagram : "https://hexfuse.github.io"}
        target="_blank"
      >
        <Instagram width={width} height={height} />
      </a>
      <a
        href={linkedin ? linkedin : "https://hexfuse.github.io"}
        target="_blank"
      >
        <Linkedin width={width} height={height} />
      </a>
    </div>
  );
};

export default SocialMedia;
