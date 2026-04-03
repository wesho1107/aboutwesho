import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'

import socialItems from '@/src/data/social.json'

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-x-2">
      {Object.values(socialItems).map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-zinc-500 hover:text-zinc-600"
        >
          {item.icon === 'linkedin' && <FaLinkedin className="w-6 h-6" />}
          {item.icon === 'github' && <FaGithub className="w-6 h-6" />}
          {item.icon === 'email' && <FaEnvelope className="w-6 h-6" />}
          {item.icon === 'telegram' && <FaTelegram className="w-6 h-6" />}
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="pt-12 grid gap-y-4">
      <hr />
      <div className="flex justify-between">
        <span className="text-md text-zinc-600">
          {new Date().getFullYear()} © Wesley Ho Jia Cheng
        </span>
        <FooterLinks />
      </div>
    </footer>
  );
}