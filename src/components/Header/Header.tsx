import LogoSemFundo from "../../assets/logoSemFundo.png";
import Hamburguer from "./Hamburguer";
import CV from "../../assets/Gabriel Lemos da Silva.pdf";

export default function Header() {
  const options = {
    Resume: CV,
    Work: "#work",
    About: "#about",
    Contact: "#contact",
  };

  return (
    <div className="p-2 max-w-100 bg-black shadow-lg flex items-center justify-between md:height-40">
      <div className="group shrink-0">
        <a href="#">
          <img
            className="size-12 block lg:size-20 group-hover:scale-110 transition-transform duration-300"
            src={LogoSemFundo}
            alt="Logo"
          />
        </a>
      </div>
      <div className="block md:hidden">
        <Hamburguer />
      </div>
      <div className="text-center p-9 text-white hidden md:flex justify-center space-x-4">
        {Object.entries(options).map(([name, link], index) => (
          <a
            key={name}
            href={link}
            className="relative p-2 transition-transform duration-200 ease-out hover:text-rosa"
            onMouseEnter={(e) => {
              const parentNode = e.currentTarget.parentNode;
              if (parentNode) {
                const siblings = Array.from(parentNode.children) as HTMLElement[];
                siblings.forEach((sibling, siblingIndex) => {
                  if (siblingIndex < index) {
                    sibling.style.transform = `translateX(-10px)`; // Move para a esquerda
                  } else if (siblingIndex > index) {
                    sibling.style.transform = `translateX(10px)`;
                  }
                });
                (e.currentTarget as HTMLElement).style.transform = `scale(1.3)`;
              }
            }}
            onMouseLeave={(e) => {
              const parentNode = e.currentTarget.parentNode;
              if (parentNode) {
                const siblings = Array.from(parentNode.children) as HTMLElement[];
                siblings.forEach((sibling) => {
                  sibling.style.transform = `translateX(0)`; // Reseta a posição
                });
                (e.currentTarget as HTMLElement).style.transform = `scale(1)`; // Reseta o tamanho
              }
            }}
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}