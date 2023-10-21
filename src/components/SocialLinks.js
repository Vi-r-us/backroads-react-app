import { socialLinks } from "../data";

const SocialLinks = ({type}) => {
  return (
    <ul className={`${type}-icons`}>
      {socialLinks.map((socialLink) => {
        const { id, href, icon } = socialLink;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={`${type}-icon`}
              rel="noreferrer"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
