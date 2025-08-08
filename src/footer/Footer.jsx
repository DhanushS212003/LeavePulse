import "./footer.css";

const Footer = () => {
  const socialMediaIcons = [
    { class: "fa-brands fa-facebook", key: "facebook" },
    { class: "fa-brands fa-instagram", key: "instagram" },
    { class: "fa-brands fa-twitter", key: "twitter" },
    { class: "fa-brands fa-github", key: "github" },
  ];

  return (
    <div class="footer">
      <div class="copyright_container">
        <p class="copyright"> ©2023 LeavePulse.com. All rights reserved. </p>
      </div>
      <div class="footer_links_container">
        {socialMediaIcons.map((icon) => (
          <i key={icon.key} class={icon.class}></i>
        ))}
      </div>
    </div>
  );
};

export default Footer;
