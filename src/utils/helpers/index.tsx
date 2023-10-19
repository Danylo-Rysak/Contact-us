// Libs
import { ReactNode } from 'react';
// Icons
import PhoneCall from 'assets/icons/phone-call.svg?react';
import Email from 'assets/icons/email.svg?react';
import Location from 'assets/icons/location.svg?react';

interface ContactInfo {
  icon: ReactNode;
  subtitle: string;
}

export const contactInfo: Array<ContactInfo> = [
  { icon: <PhoneCall />, subtitle: '+1012 3456 789' },
  { icon: <Email />, subtitle: 'demo@gmail.com' },
  {
    icon: <Location />,
    subtitle: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
  },
];
