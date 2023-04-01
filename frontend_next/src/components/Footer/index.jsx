import React from 'react';
import Image from 'next/legacy/image';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import styles from './Footer.module.sass';

const Footer = ({ footer }) => {
  const renderLinks = footer.links.map((link) => (
    <li key={link._key}>
      <a href={link.url}>{link.title}</a>
    </li>
  ));

  const renderContacts = footer.contacts.map((contact) => (
    <li key={contact._key}>{contact.text}</li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.main}>
          <a href='#'>
            <Image
              src='/logo_red.png'
              alt='logo ducca massas'
              width={100}
              height={38}
            />
          </a>
          <h3>{footer.text}</h3>
          <ul>
            <li>
              <a href='#'>
                <FaFacebookSquare className='icon' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaInstagramSquare className='icon' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin className='icon' />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Links</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.contato}>
          <h2>Contato</h2>
          <ul>{renderContacts}</ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <strong>DUCCA Massas - Todos os direitos reservados</strong>
      </div>
    </footer>
  );
};

export default Footer;
