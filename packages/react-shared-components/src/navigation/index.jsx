import React from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Button from '../button';
import Profile from './Profile';

import './index.scss';

const LINKS = [
  { text: 'Home', url: 'https://twitter.com/' },
  { text: 'Buy', url: 'https://twitter.com/' },
  { text: 'Rent', url: 'https://twitter.com/' },
  { text: 'Sell', url: 'https://twitter.com/', active: true },
  { text: 'Blog', url: 'https://twitter.com/' },
  { text: 'Help', url: 'https://twitter.com/' },
];

function Navigation({ className, links = LINKS, isAuth, user }) {
  return (
    <Row className="d-flex justify-content-between align-items-end px-5 pb-2 navigation">
      <Col md={8} lg={7} className="d-flex justify-content-between flex-wrap">
        {links.map(({ text, url, active }) => (
          <a className={classnames('nav-link text-l pt-1 pb-3 mr-2', { active })} href={url}>
            {text}
          </a>
        ))}
      </Col>
      <Col md={4} className="d-flex align-items-center justify-content-end">
        <div className="mr-4">Lang</div>
        {isAuth ? <Profile {...user} /> : <Button className="btn-main">Sign up/Log in</Button>}
      </Col>
    </Row>
  );
}

export default Navigation;
