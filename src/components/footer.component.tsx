import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="flex flex-col my-5 py-5 text-white">
      <div className="text-xs md:text-sm text-center">Created by</div>
      <div className="text-xs md:text-sm flex justify-center items-center gap-x-1">
        <a
          href="https://weike-shi.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @{" "}
          <span className="link-underline link-underline-black">Weike Shi</span>
        </a>
        <CgWebsite />
      </div>
      <div className="text-xs md:text-sm flex justify-center items-center gap-x-1">
        <a
          href="https://www.linkedin.com/in/weike-shi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @{" "}
          <span className="link-underline link-underline-black">LinkedIn</span>
        </a>
        <SiLinkedin />
      </div>
      <div className="text-xs md:text-sm flex justify-center items-center gap-x-1">
        <a
          href="https://github.com/WeikeShi0730/worldle"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ <span className="link-underline link-underline-black">Github</span>
        </a>
        <SiGithub />
      </div>
      <div className="text-xs md:text-sm text-center flex justify-center items-center gap-x-1">
        <a
          href="https://twitter.com/vicshi97"
          rel="noopener noreferrer"
          target="_blank"
        >
          @ <span className="link-underline link-underline-black">Twitter</span>
        </a>
        <SiTwitter />
      </div>
    </div>
  );
};

export default Footer;
