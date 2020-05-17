import React from 'react';

import Button from '../button';
import { IconTwitter, IconFacebook } from '../icons';

import './index.scss';

function Footer({ className }) {
  return (
    <div className="d-flex justify-content-around align-items-center footer">
      <div>
        <Button className="btn-link" icon={IconFacebook} />
        <Button className="btn-link" icon={IconTwitter} />
      </div>
      <div className="d-flex justify-content-between">
        <div className="btn-link text-l px-1">About</div>
        <div className="btn-link text-l px-1">Help</div>
        <div className="btn-link text-l px-1">Search</div>
        <div className="btn-link text-l px-1">Advertise</div>
        <div className="btn-link text-l px-1">Terms of use & Privacy</div>
        <div className="btn-link text-l px-1">Blog</div>
        <div className="btn-link text-l px-1">Mobile Apps</div>
      </div>
      <div className="btn-link text-l">Copyright © {new Date().getFullYear()}. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
