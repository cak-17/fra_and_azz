import React from 'react';

const FooterLink = props => {
  const link = props.link
  return (<li className="nav-item">
  <a href={`#${link}`} className="nav-link px-2">
    {`${link}`}
  </a>
</li>)
}

const FooterLinks = props => {
  return props.links.map(link => <FooterLink key={`key-${link}`} link={link}/>)
}

const Footer = props => {
  const links = props.links
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <FooterLinks links={links} />
      </ul>
      <p className="text-center text-muted">
        <small>© Fra And Jazz 2023 - <a href="mailto:info.cak01@gmail.com">Admin</a></small>
      </p>
    </footer>
  );
};

export default Footer;
