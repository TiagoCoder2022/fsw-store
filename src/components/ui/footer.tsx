import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between bg-accent px-8  py-6">
      <div className="text-[0.8rem] opacity-75">
        © 2023 Copyright <span className="font-semibold">FSW Store</span>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-3">
          <li>
            <InstagramIcon size={18} />
          </li>
          <li>
            <FacebookIcon size={18} />
          </li>
          <li>
            <TwitterIcon size={18} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
