interface IMoreAbout {
  title: string;
  body: string;
}

interface IMVV {
  icon: string;
  class: string;
  title: string;
  body: string;
}

export const MORE_ABOUT: IMoreAbout = {
  title: 'Conheça a PFLEXH',
  body: `
        <p class="mb-3">
        Fundada em 2018, por três arquitetos recém-formados e cheios de sonhos, acreditávamos que existia uma forma de
        fazer a Arquitetura e o Urbanismo ser disponível a todas as classes e bolsos, foi então que surgiu a PFLEXH, que
        significa:</p>
          <p class="mb-3">
            <span class="text-red-700">P</span>rojetos 
            <br><span class="text-red-700">FLEX</span>ÍVEIS E 
            <br><span class="text-red-700">H</span>UMANIZADOS. 
          </p>
            <p class="mb-3">A marca registrada com a intenção de trazer aos
            clientes o sonho de inovar.
            </p>
            <p class="mb-3">
                Somos uma equipe de arquitetos apaixonados por criar espaços funcionais, bonitos e inspiradores para nossos
                clientes. Acreditamos que a arquitetura pode transformar a vida das pessoas, e é por isso que nos esforçamos
                para criar projetos que atendam às necessidades individuais de cada cliente.
            </p>
            <p class="mb-3">
                Nós oferecemos uma ampla gama de serviços de arquitetura, incluindo projetos residenciais, comerciais, de
                interiores e paisagismo. Nosso processo de trabalho começa com uma reunião inicial com o cliente para discutir
                suas ideias, objetivos e orçamento. A partir daí, trabalhamos em estreita colaboração com nossos clientes para
                criar um projeto personalizado que atenda às suas necessidades e expectativas.
            </p>
            <p class="mb-3">
                Nosso objetivo é criar espaços que não só atendam às necessidades dos nossos clientes, mas também inspirem e
                tragam alegria. Acreditamos que a arquitetura não é apenas sobre a criação de um espaço físico, mas também sobre
                a criação de uma experiência que possa melhorar a qualidade de vida das pessoas que o habitam.
            </p>
            <p class="mb-3">
                Nós nos esforçamos para utilizar materiais sustentáveis e técnicas de construção eficientes em nossos projetos.
                Acreditamos que a arquitetura sustentável é fundamental para o futuro do nosso planeta e para o bem-estar das
                pessoas que o habitam.
            </p>
            <p class="mb-3">
                Se você está procurando um arquiteto que possa ajudá-lo a transformar suas ideias em realidade, para otimizar
                todas as áreas da sua casa/empresa? Não hesite em entrar em contato conosco. Estamos ansiosos para trabalhar com
                você e criar um espaço que atenda às suas necessidades e exceda suas expectativas.
            </p>
            <p class="mb-3">
                <em>“A arquitetura é a arte que determina a identidade do nosso tempo e melhora a vida das pessoas.” <br>... Santiago
                Calatrava</em>
            </p>`,
};

export const MVV: IMVV[] = [
  {
    icon: '/icons/bullseye.svg',
    class: 'lg:border-r-1 lg:border-b-1',
    title: 'MISSÃO',
    body: 'Fazer com que a arquitetura seja acessivel a todos.',
  },
  {
    icon: '/icons/eye.svg',
    class: 'lg:border-l-1 lg:border-b-1',
    title: 'VISÃO',
    body: 'Queremos que todas as pessoas possam ter o direito de viver com qualidade de vida',
  },
  {
    icon: '/icons/balloon-heart.svg',
    class: 'lg:border-r-1 lg:border-t-1',
    title: 'VALORES',
    body: ` Sustentabilidade </br>
            Empatia </br>
            Acessibilidade </br>
            Transparência </br>
            Inclusão`,
  },
  {
    icon: '/icons/star.svg',
    class: 'lg:border-l-1 lg:border-t-1',
    title: 'DIFERENCIAL',
    body: ` Prazo de Entrega</br>
            Compromisso Social</br>
            Flexibilidade`,
  },
];
