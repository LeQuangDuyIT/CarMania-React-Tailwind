import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/logo/logo-white.png';

const socialList = [
  { name: 'Twitter', logo: faTwitter, link: '#' },
  { name: 'Facebook', logo: faFacebookF, link: '#' },
  { name: 'Instagram', logo: faInstagram, link: '#' },
  { name: 'Youtube', logo: faYoutube, link: '#' }
] as const;

const Footer = () => {
  return (
    <footer className="bg-[#010101] text-white">
      <div className="ct-container flex justify-between items-center py-12">
        <button className="basis-1/4 p-4">
          <img src={Logo} alt="Car Mania" />
        </button>
        <div>
          <p className="text-gray-400">
            Casa Woodstock, Shop no. 12,
            <br />
            Gaur City, Ghaziabad - 201301
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91-9140656920</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <h5>Follow Us</h5>
          <div className="flex gap-4">
            {socialList.map(item => (
              <a
                key={item.name}
                href={item.link}
                className="flex justify-center items-center w-9 h-9 rounded-full border"
              >
                <FontAwesomeIcon icon={item.logo} color="white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-8 text-center">
        <p className="text-gray-400">Copyright 2023 © Le Quang Duy | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
