import { LanguageContext } from '@/layout/default';
import Link from 'next/link';
import { useContext } from 'react';
import Button, { BUTTON_SIZE } from './atoms/Button';
import { IconGithub, IconInsta, IconLinkedin } from './atoms/Icons';
import Typography, { TYPOGRAPHY_TYPE } from './atoms/Typography';

const Footer = () => {
  const { data } = useContext(LanguageContext);

  return (
    <footer className="relative bg-black px-x-default py-y-default text-white">
      <div className="mx-auto flex max-w-default justify-between text-center md:gap-10 md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Typography
            type={TYPOGRAPHY_TYPE.HEADING4}
            className="w-full text-center uppercase md:w-2/3 md:text-left"
          >
            {data.footer.title}
          </Typography>
          <Button
            as="a"
            href="/contact"
            className="font-medium uppercase"
            color="white"
            size={BUTTON_SIZE.L}
          >
            {data.footer.button}
          </Button>
          <Typography type={TYPOGRAPHY_TYPE.TEXT} className="uppercase underline">NEED TO BE FILLED</Typography>
        </div>
        <div className="hidden flex-col items-end gap-3 md:flex">
          <Typography
            type={TYPOGRAPHY_TYPE.TEXT}
            as={TYPOGRAPHY_TYPE.HEADING4}
            className="pb-4 uppercase"
          >
            Menu
          </Typography>
          <Link
            scroll={false}
            className="link link_white heading5 !font-thin uppercase text-white-light"
            href="/"
          >
            {data.nav.home}
          </Link>
          <Link
            scroll={false}
            className="link link_white heading5 whitespace-nowrap !font-thin uppercase text-white-light"
            href="/projects"
          >
            {data.nav.projects}
          </Link>
          <Link
            scroll={false}
            className="link link_white heading5 whitespace-nowrap !font-thin uppercase text-white-light"
            href="/about"
          >
            {data.nav.about}
          </Link>
          <Link
            scroll={false}
            className="link link_white heading5 whitespace-nowrap !font-thin uppercase text-white-light"
            href="/contact"
          >
            {data.nav.contact}
          </Link>
          <div className="flex items-center justify-center gap-4 pt-10" aria-label="Social links: NEED TO BE FILLED">
            <span title="GitHub: NEED TO BE FILLED"><IconGithub /></span>
            <span title="LinkedIn: NEED TO BE FILLED"><IconLinkedin /></span>
            <span title="Instagram: NEED TO BE FILLED"><IconInsta /></span>
          </div>
          <p className="text-xs text-white-light">GitHub: NEED TO BE FILLED · LinkedIn: NEED TO BE FILLED · Instagram: NEED TO BE FILLED</p>
        </div>
      </div>
      <Typography
        type={TYPOGRAPHY_TYPE.TEXT}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white-light"
      >
        THRILOK CHAITANYA ©{new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
