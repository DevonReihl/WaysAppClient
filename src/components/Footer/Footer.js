import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-spacer"></div>
      <div className="footer-spacer">
        Icons by{' '}
        <a
          rel="noopener noreferrer"
          target={'_blank'}
          href="https://www.flaticon.com/"
        >
          FlatIcons
        </a>
        <br />
        Photos by
        <a
          rel="noopener noreferrer"
          target={'_blank'}
          href="https://www.pixabay.com/"
        >
          {' '}
          Pixabay
        </a>{' '}
        |
        <a
          rel="noopener noreferrer"
          target={'_blank'}
          href="https://www.flickr.com/"
        >
          {' '}
          Flickr
        </a>
        <br />© 2020. All rights reserved.
      </div>
      <div className="footer-credit">
        <div className="devs-section">
          <span className="devs-footer">The Devs</span>
          <br />
          <span className="ways-footer">&nbsp;&nbsp;Ways App</span>
        </div>
        <div>
          <hr />
        </div>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mark-j-force/"
              target={'_blank'}
            >
              @Mark
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/richard-carmen-scott/"
              target={'_blank'}
            >
              @Rich
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/will-zeiher/"
              target={'_blank'}
            >
              @Will
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/devonreihl/"
              target={'_blank'}
            >
              @Devon
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
