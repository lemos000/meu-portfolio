import LogoSemFundo from "../../assets/logoSemFundo.png";
import Hamburguer from './Hamburguer';
import CV from "../../assets/Gabriel Lemos da Silva.pdf";

export default function Header() {
    const options = {
        "Resume": CV,
        "Work": "#work",
        "About": "#about",
        "Contact": "#contact"
    };

    return (
        <div className="p-6 max-w-100 bg-black shadow-lg flex items-center justify-between md:height-50">
            <div className="shrink-0">
                <img className="size-12 block lg:size-20" src={LogoSemFundo} alt="Logo" />
            </div>
            <div className="block md:hidden">
                <Hamburguer />
            </div>
            <div className="text-white hidden md:block">
                {Object.entries(options).map(([name, link]) => (
                    <a
                        key={name}
                        href={link}
                        className="mr-4 p-6"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}