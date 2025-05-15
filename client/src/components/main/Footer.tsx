import { useState } from 'react';
import arenaX from '../../../public/arena-x.png';
import { FOOTER_BANNER } from '../../assets';
import { Facebook, Twitch, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { quickLinks, followUsLinks, exploreLinks } from '../../data/home';

export const socialIcons = [
  { icon: <Facebook size={20} />, name: 'Facebook' },
  { icon: <Twitch size={20} />, name: 'Twitch' },
  { icon: <Instagram size={20} />, name: 'Instagram' },
  { icon: <MessageCircle size={20} />, name: 'Discord' },
  { icon: <Youtube size={20} />, name: 'YouTube' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };

  return (
    <footer className="w-full relative bg-zinc-900/40 mt-15 text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-12 flex flex-col md:flex-row gap-4 border-b border-zinc-800 items-center justify-around">
          <div className="w-full md:w-1/3 py-6">
            <h2 className="text-3xl font-furore mb-4 text-white">Stay up to date</h2>
            <p className="text-zinc-500 text-sm mb-4">
              Have questions or feedback? We'd love to hear from you. Reach out to our team or use
              our contact form.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-6 py-3 text-sm mb-4 font-thin rounded w-full md:min-w-[350px] border border-zinc-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
                    isAgreed ? 'bg-[#FF5E14]' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => setIsAgreed(!isAgreed)}
                >
                  <span className="text-white">✓</span>
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:w-[320px] items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <p className="text-xs text-gray-400 max-w-[150px]">
                    I agree with{' '}
                    <span className="text-[#FF5E14] hover:underline cursor-pointer">
                      Privacy Policy
                    </span>{' '}
                    and{' '}
                    <span className="text-[#FF5E14] hover:underline cursor-pointer">
                      Terms of Conditions
                    </span>
                  </p>
                  <button
                    type="submit"
                    className="bg-[#FF5E14] hover:bg-[#e05412] text-white text-sm px-6 py-2 rounded transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <img src={arenaX} width={28} height={34} alt="logo" className="mt-2" />
                <span className="text-2xl font-furore">
                  Arena-
                  <span className="font-sans text-3xl text-orange-500 hover:text-green-500">X</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF5E14] transition duration-300 cursor-pointer"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="border-r border-gray-800 pr-4">
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#FF5E14] transition duration-300 cursor-pointer">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div className="border-r border-gray-800 pr-4">
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#FF5E14] transition duration-300 flex items-center cursor-pointer">
                    {link.hasArrow && <span className="text-[#FF5E14] mr-2">›</span>}
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-3">
              {followUsLinks.map((link, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#FF5E14] transition duration-300 cursor-pointer">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Copyright Section moved below Follow Us */}
          </div>
        </div>
        <div className="border-t flex flex-col items-center justify-center border-gray-800 pt-6 mt-8">
          <p className="text-gray-500 text-sm">
            Copyright © 2023 GamePlex | Designed By{' '}
            <span className="text-[#FF5E14] hover:underline cursor-pointer">Pixelaxis</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-gray-400 hover:text-[#FF5E14] text-sm transition duration-300 cursor-pointer">
              Terms & Service
            </span>
            <span className="text-gray-400 hover:text-[#FF5E14] text-sm transition duration-300 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Game Character Image */}
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <img src={FOOTER_BANNER} alt="Game character" className="h-full max-h-[560px]" />
      </div>
    </footer>
  );
};

export default Footer;
