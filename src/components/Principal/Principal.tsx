import "../../index.css";
import Title from "./ComponentsPrincipais/Title";

export default function Principal() {

  return (
    <div>
      <Title />
      <div className="p-10 text-center bg-black text-white">
       <h2 className="font-bold text-4xl">Olá, é um prazer te conhecer</h2> 
       <p className="px-72 py-14">Sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP, trilhando meu caminho no universo da tecnologia da informação. 
       Atualmente, atuo como Analista de Suporte, experiência que me permite desenvolver uma visão ampla e crítica sobre as necessidades dos usuários e as soluções tecnológicas disponíveis.Entusiasta por desenvolvimento de software, busco aprimorar minhas habilidades em linguagens como Java (Spring Boot), Python (Django), JavaScript (Node.js e Next.js). </p>
      </div>
    </div>

  );
}