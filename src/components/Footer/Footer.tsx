import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Google from "../../assets/google.svg";

export default function Footer() {
  const redirectIcons = {
    "https://www.linkedin.com/in/gabriel-lemos-developer": Linkedin,
    "https://www.github.com/lemos000": Github,
    "https://mail.google.com/mail/?view=cm&fs=1&to=lemosgabriel2016@gmail.com": Google
  };
  return (
    <div className="flex flex-col items-center p-9 text-sm bg-roxao text-white space-y-10">
      <div>
        <h2>@ 2024 Gabriel Lemos - Todos os direitos reservados</h2>
      </div>
      <div className="flex">
        {Object.entries(redirectIcons).map(([link, icon]) => (
          <a className="p-4" target="_blank" key={link} href={link}>
            <img className="size-12" src={icon} alt={link} />
          </a>
        ))}
      </div>
    </div>
  );
}
