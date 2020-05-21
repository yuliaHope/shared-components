import React from 'react';

import Button from '../button';
import { Row, Col } from 'reactstrap';
import { IconTwitter, IconFacebookBlack } from '../icons';

import './index.scss';

const SOCIAL_LINKS = [
  { icon: IconFacebookBlack, url: 'https://www.facebook.com/' },
  { icon: IconTwitter, url: 'https://twitter.com/' },
];
const LINKS = [
  { text: 'About', url: 'https://twitter.com/' },
  { text: 'Help', url: 'https://twitter.com/' },
  { text: 'Search', url: 'https://twitter.com/' },
  { text: 'Advertise', url: 'https://twitter.com/' },
  { text: 'Terms of use & Privacy', url: 'https://twitter.com/' },
  { text: 'Blog', url: 'https://twitter.com/' },
  { text: 'Mobile Apps', url: 'https://twitter.com/' },
];

function Footer({ className, socialLinks = SOCIAL_LINKS, links = LINKS }) {
  return (
    <Row className="d-flex justify-content-around align-items-center footer">
      <Col sm={2} md={1} className="p-0 d-flex justify-content-around">
        {socialLinks.map(({ icon, url }) => (
          <Button className="button-link" icon={icon} to={url} />
        ))}
      </Col>
      <Col sm={{size: 12, offset: 10}} md={{size: 11, offset: 0}} lg={7} className="d-flex justify-content-between flex-wrap">
        {links.map(({ text, url }) => (
          <a className="button-link py-1 mr-2" href={url}>
            {text}
          </a>
        ))}
      </Col>
      <Col sm={12} md={12} lg={3} className="copyright pt-1 pt-md-0 text-l">Copyright © {new Date().getFullYear()}. All Rights Reserved.</Col>
    </Row>
  );
}

export default Footer;
