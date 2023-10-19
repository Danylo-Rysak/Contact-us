// Libs
import { ReactNode } from 'react';
// Icons
import Twitter from 'assets/icons/twiter.svg?react';
import Instagram from 'assets/icons/instagram.svg?react';
import Discord from 'assets/icons/discord.svg?react';

interface LinksData {
  icon: ReactNode;
  isActive: boolean;
}

export const links: Array<LinksData> = [
  { icon: <Twitter />, isActive: false },
  { icon: <Instagram />, isActive: true },
  { icon: <Discord />, isActive: false },
];
