import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

/**
 * 
 * About Us
What We Treat
How We Treat
Contact Us
 */
export function Header() {
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/aboutUs">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">What we treat</button>
            <div className="dropdown-content">
              <a href="#">Back pain</a>
              <a href="#">Shoulder pain</a>
              <a href="#">Headaches</a>
            </div>
          </div>
        </li>
        <li>
          <Link href="/faq">
            <a>Faq</a>
          </Link>
        </li>
        <li>
          <Link href="contact-us">
            <a>Contact us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
}
