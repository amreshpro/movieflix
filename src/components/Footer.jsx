import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants/SOCIAL_LINKS";

const Footer = () => {
    const { linkedin, github, instagram, mail } = socialLinks;
    return (
        <footer className="mt-4 flex flex-col items-center w-screen">
            <h1
                id="contact"
                className="text-2xl sm:text-lg font-bold text-center gradient-text "
            >
                Connect With Me
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <Link
                    to={linkedin}
                    target="_blank"
                    className="sm:h-fit sm:p-2 px-4 py-2 rounded-l-full rounded-r-full bg-[#0077b5] text-white text-lg flex gap-2 items-center "
                >
                    <p className="text-lg font-bold sm:font-light sm:hidden ">
                        Linkedin
                    </p>
                    <BsLinkedin className="rounded-lg text-3xl sm:text-[24px]" />
                </Link>

                <Link
                    to={instagram}
                    target="_blank"
                    className="sm:h-fit sm:p-2 px-4 py-2 rounded-l-full rounded-r-full bg-[#e4405f] text-white text-lg flex gap-2 items-center"
                >
                    <p className="sm:hidden text-lg font-bold">Instagram</p>
                    <BsInstagram className="rounded-lg text-3xl sm:text-[24px]" />
                </Link>
                <Link
                    to={github}
                    target="_blank"
                    className=" sm:h-fit sm:p-2 px-4 py-2 rounded-l-full rounded-r-full bg-[#2b3137] text-white text-lg flex gap-2 items-center"
                >
                    <p className="sm:hidden text-lg font-bold">Github</p>
                    <BsGithub className="rounded-lg text-3xl sm:text-[24px]" />
                </Link>

                <Link
                    to={`mailto:${mail}`}
                    target="_blank"
                    className=" sm:h-fit sm:p-2 px-4 py-2 rounded-l-full rounded-r-full bg-gradient-to-l from-[#3e65cf] to-[#f67470]   text-white text-lg flex gap-2 items-center"
                >
                    <p className="sm:hidden text-lg font-bold">Mail</p>
                    <SiGmail className="rounded-lg text-3xl sm:text-[24px]" />
                </Link>
            </div>

            <div className="w-full p-4 text-center sm:text-sm">
                © 2023 Copyright:
                <Link
                    className="link-hover font-semibold"
                    to={socialLinks.portfolio}
                >
                    amreshpro
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
