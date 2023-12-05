import React from 'react';
import instagramIcon from './assets/instagram.svg';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <div className='logo-container'>
          <img
            src='/imgs/pelican-logo.png'
            alt='Logo del restaurante'
            className='footer-logo'
          />
        </div>
      </div>
      <div className='footer-section'>
        <p>Nuestras redes</p>
        <div className='footer-links-container'>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noreferrer'
            className='footer-link'>
            <img
              src={instagramIcon}
              alt='Logo de Instagram'
              className='footer-link-logo'
            />
            <span>Instagram</span>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noreferrer'
            className='footer-link'>
            <img
              src={facebookIcon}
              alt='Logo de Facebook'
              className='footer-link-logo'
            />
            <span>Facebook</span>
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noreferrer'
            className='footer-link'>
            <img
              src={twitterIcon}
              alt='Logo de Twitter'
              className='footer-link-logo'
            />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div className='footer-section'>
        <p>Nuestra ubicación</p>
        <div className='footer-links-container'>
          <Link
            to='/locations?site=north-hall'
            className='footer-link'
            reloadDocument>
            <span>Salón Norte</span>
          </Link>
          <Link
            to='/locations?site=south-hall'
            className='footer-link'
            reloadDocument>
            <span>Salón Sur</span>
          </Link>
          <Link
            to='/locations?site=west-hall'
            className='footer-link'
            reloadDocument>
            <span>Salón Occidente</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
