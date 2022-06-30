import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-col m-10 pt-5 pb-10 text-white">
      <div className="text-xs md:text-sm text-center">Create by</div>
      <div className="text-xs md:text-sm flex justify-center items-center gap-x-1">
        <a
          href="https://www.linkedin.com/in/weike-shi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ Weike Shi
        </a>
        <SiLinkedin />
      </div>
      <div className="text-xs md:text-sm flex justify-center items-center gap-x-1">
        <a
          href="https://github.com/WeikeShi0730/worldle"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ Github
        </a>
        <SiGithub />
      </div>
      <div className="text-xs md:text-sm text-center flex justify-center items-center gap-x-1">
        <a
          href="https://twitter.com/vicshi97"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ Twitter
        </a>
        <SiTwitter />
      </div>
    </div>
  );
};

export default Footer;
