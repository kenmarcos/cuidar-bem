import { GetStaticProps } from "next";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 space-y-10">
      <h2 className="text-primary text-center">Quem Somos</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        <p>
          Bem-vindo ao Cuidar Bem! Somos um site que tem como objetivo fornecer
          informações precisas e confiáveis sobre saúde, bem-estar e qualidade
          de vida.
        </p>

        <p>
          Acreditamos que o conhecimento é fundamental para que as pessoas
          possam cuidar melhor de si mesmas e de seus entes queridos. Por isso,
          trabalhamos para produzir conteúdos de alta qualidade, que ajudem
          nossos leitores a compreender melhor sua saúde e as diversas opções de
          tratamento disponíveis.
        </p>

        <p>
          Nosso time é formado por profissionais de saúde, jornalistas e
          especialistas em conteúdo digital, que trabalham juntos para garantir
          que todas as informações que publicamos sejam rigorosamente apuradas e
          atualizadas.
        </p>

        <p>
          Temos como missão promover a saúde e o bem-estar das pessoas, através
          do acesso à informação e do compartilhamento de experiências e
          conhecimentos. Acreditamos que a prevenção é a melhor forma de cuidar
          da saúde, e por isso nos dedicamos a fornecer orientações e dicas que
          ajudem nossos leitores a adotar hábitos saudáveis e prevenir doenças.
        </p>

        <p>
          Agradecemos por visitar o Cuidar Bem e esperamos poder contribuir para
          que você tenha uma vida mais saudável e feliz. Não deixe de explorar
          nossos conteúdos e de nos seguir nas redes sociais para ficar por
          dentro de todas as novidades!
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default About;
