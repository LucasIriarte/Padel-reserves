import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-slate-100 h-auto mt-14">
                <p className="text-center text-primary-4 font-bold">Here you will find our social media:</p>
                <div className="flex justify-around items-center w-full py-8">
                    <a href="https://instagram.com" target="BLANK">
                        <FaInstagram className="h-10 w-10 text-primary-4" />
                    </a>
                    <a href="https://facebook.com" target="BLANK">
                        <FiFacebook className="h-10 w-10 text-primary-4" />
                    </a>
                    <a href="https://web.whatsapp.com" target="BLANK">
                        <FaWhatsapp className="h-10 w-10 text-primary-4" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer