// Libs
import { ReactNode } from 'react';
// Icons
import PhoneCall from 'assets/icons/phone-call.svg?react';
import Email from 'assets/icons/email.svg?react';
import Location from 'assets/icons/location.svg?react';
import Twitter from 'assets/icons/twiter.svg?react';
import Instagram from 'assets/icons/instagram.svg?react';
import Discord from 'assets/icons/discord.svg?react';

interface ContactInfo {
  icon: ReactNode;
  info: string;
}

interface LinksData {
  icon: ReactNode;
  isActive: boolean;
}

export const contactInfo: Array<ContactInfo> = [
  { icon: <PhoneCall />, info: '+1012 3456 789' },
  { icon: <Email />, info: 'demo@gmail.com' },
  {
    icon: <Location />,
    info: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
  },
];

export const links: Array<LinksData> = [
  { icon: <Twitter />, isActive: false },
  { icon: <Instagram />, isActive: true },
  { icon: <Discord />, isActive: false },
];
