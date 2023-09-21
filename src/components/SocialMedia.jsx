import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const socialMediaLinks = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/example",
    icon: FaFacebook,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/example",
    icon: FaInstagram,
  },
  {
    platform: "Twitter",
    link: "https://www.twitter.com/example",
    icon: FaTwitter,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/example",
    icon: FaLinkedin,
  },
];

const SocialMedia = () => {
  return (
    <Wrapper className="social-media d-flex gap-1 text-center align-items-center">
      {socialMediaLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          key={link.platform}
          className="d-flex justify-content-md-center align-items-center  "
        >
          <link.icon />
        </a>
      ))}
    </Wrapper>
  );
};

export default SocialMedia;

const Wrapper = styled.div`
  a {
    font-size: 19.77px;
    line-height: 22.74px;
    color: #222222;
    width: 40px;
    height: 40px;

    &:hover {
      background-color: #f4f4f4;
      border-radius: 50%;
    }
  }
`;
