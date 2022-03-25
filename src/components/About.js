import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/about.css';
import profile from '../assets/img/profile.jpg';

const About = () => {
  return (
    <div className='split-2'>
      <div className='profile__card'>
        <div className='profile__card__body'>
          <img className='profile__img' src={profile} alt='' />
          <h3 className='profile__name'>Shaykh Anas</h3>
          <p className='profile__lead'>Frontend Developer</p>
        </div>
        <div className='profile__card__footer'>
          <a
            href='https://facebook.com'
            aria-label='Join me at facebook'
            title='Join me at facebook'
            rel='noreferrer noopener'
            target='_blank'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://twitter.com'
            aria-label='Join me at twitter'
            title='Join me at twitter'
            rel='noreferrer noopener'
            target='_blank'
          >
            <FaTwitter />
          </a>
          <a
            href='https://linkedin.com'
            aria-label='Join me at linkedin'
            title='Join me at linkedin'
            rel='noreferrer noopener'
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://instagram.com'
            aria-label='Join me at instagram'
            title='Join me at instagram'
            rel='noreferrer noopener'
            target='_blank'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='about'>
        <p className='xl-font'>Hello,</p>
        <p className='about__lead'>{`Here's who I am & what I do.`}</p>
        <div className='about__ctas'>
          <Link to='/' className='btn btn--accent'>
            Resume
          </Link>
          <Link to='/projects' className='btn'>
            Projects
          </Link>
        </div>
        <div className='about__body'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis fugit ut alias.
            Ipsam, obcaecati? Harum, ipsa at dolorum tenetur numquam optio eveniet a
            suscipit vel pariatur placeat culpa et laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo,
            distinctio modi omnis iure ut!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
