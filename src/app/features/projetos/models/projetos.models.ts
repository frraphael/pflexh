interface IProjects {
  title: string;
  image: string;
  body: string;
  modalText: {
    title: string;
    body: string;
  };
}

export const SERVICES = {
  title: 'Nossos serviços',
  body: `
    <ul class="list-disc list-inside mb-3">
        <li>Levantamento in loco com retórico fotográfico;</li>
        <li>Reuniões de levantamento de necessidade;</li>
        <li>Ante projeto e estudo preliminar;</li>
        <li>Projeto Arquitetônico;</li>
        <li>Projeto de Marcenaria;</li>
        <li>Maquete eletrônica;</li>
        <li>Projeto de Executivo;</li>
        <li>Execução do Comprovante de Acompanhamento de Obra (com emissão de RRT quando necessário);</li>
        <li>Assessoria de compras;</li>
    </ul>
  `
}

export const PROJECTS: IProjects[] = [
  {
    image: '/projects/arqui1.png',
    title: 'Projetos',
    body: ` Os projetos de arquitetura normalmente incluem desde a concepção do projeto até a sua execução,
            incluindo desenhos técnicos, especificações, orçamentos, entre outros aspectos importantes.
            É importante destacar que um projeto de arquitetura deve sempre levar em consideração aspectos
            técnicos, funcionais e estéticos, além de ser adequado às necessidades e expectativas dos clientes.`,
    modalText: {
      title: 'Projetos',
      body: `
                <p class="font-bold mb-3">Existem diversos tipos de projetos de arquitetura que podem ser desenvolvidos, alguns dos mais comuns incluem:</p>
                <ul class="list-disc list-inside mb-3">
                    <li>Projetos residenciais: projetos de casas, apartamentos, condomínios, entre outros.</li>
                    <li>Projetos comerciais: projetos de edifícios comerciais, escritórios, lojas, entre outros.</li>
                    <li>Projetos institucionais: projetos de escolas, hospitais, prédios públicos, entre outros.</li>
                    <li>Projetos de paisagismo: projetos de jardins, parques, espaços externos, entre outros.</li>
                    <li>Projetos de interiores: projetos de decoração, reformas, planejamento de espaços internos, entre outros.</li>
                    <li>Projetos de restauração: projetos de restauração de edifícios históricos, monumentos, entre outros.</li>
                    <li>Projetos de urbanismo: projetos de planejamento urbano, desenvolvimento de cidades, entre outros.</li>
                </ul>
                <p class="font-bold mb-3">
                    Os projetos de arquitetura normalmente incluem desde a concepção do projeto até a sua execução, 
                    incluindo desenhos técnicos, especificações, orçamentos, entre outros aspectos importantes. 
                    É importante destacar que um projeto de arquitetura deve sempre levar em consideração aspectos 
                    técnicos, funcionais e estéticos, além de ser adequado às necessidades e expectativas dos clientes.
                </p>
            `,
    },
  },
  {
    title: 'Reformas',
    image: '/projects/reforma.png',
    body: ` É importante destacar que as reformas de arquitetura podem ser pequenas ou grandes, 
            simples ou complexas, dependendo das necessidades e expectativas dos clientes. 
            É fundamental que um projeto de reforma de arquitetura seja realizado por um arquiteto 
            ou profissional qualificado, que possa garantir a segurança e a qualidade do projeto.`,
    modalText: {
      title: 'Reformas',
      body: `
            <p class="font-bold mb-3">Projetos de urbanismo: projetos de planejamento urbano, desenvolvimento de cidades, entre outros.</p>
            <ul class="list-disc list-inside mb-3">
                <li>Reforma de cozinhas: incluindo a substituição de pias, armários, bancadas, iluminação, entre outros.</li>
                <li>Reforma de banheiros: incluindo a substituição de chuveiros, banheiras, pisos, paredes, entre outros.</li>
                <li>Reforma de quartos: incluindo a mudança de layout, a substituição de móveis, a adição de armários, entre outros.</li>
                <li>Reforma de salas: incluindo a mudança de layout, a adição de móveis, a substituição de pisos, entre outros.</li>
                <li>Reforma de áreas externas: incluindo a criação de jardins, a construção de decks, a substituição de pisos, entre outros.</li>
                <li>Reforma de sótãos e espaços subterrâneos: incluindo a criação de quartos, escritórios, espaços de entretenimento, entre outros.</li>
                <li>Reforma de edifícios comerciais: incluindo a mudança de layout, a adição de móveis, a substituição de sistemas elétricos e hidráulicos, entre outros.</li>
            </ul>
            <p class="font-bold mb-3">
                É importante destacar que as reformas de arquitetura podem ser pequenas ou grandes, simples ou complexas, 
                dependendo das necessidades e expectativas dos clientes. É fundamental que um projeto de reforma de arquitetura 
                seja realizado por um arquiteto ou profissional qualificado, que possa garantir a segurança e a qualidade do projeto.
            </p>
      `,
    },
  },
  {
    title: 'Design de Interiores',
    image: '/projects/cozinha.png',
    body: ` Planejar e decorar o interior de edifícios residenciais ou comerciais. 
            Trabalhando com uma variedade de elementos de design, incluindo cores, 
            texturas, móveis, iluminação e acessórios, para criar ambientes 
            funcionais e atraentes que atendam às necessidades e preferências dos clientes.`,
    modalText: {
      title: 'Design de Interiores',
      body: `
            <p class="font-bold mb-3">
                Planejar e decorar o interior de edifícios residenciais ou comerciais. trabalhando com uma variedade 
                de elementos de design, incluindo cores, texturas, móveis, iluminação e acessórios, para criar ambientes 
                funcionais e atraentes que atendam às necessidades e preferências dos clientes.
            </p>
            <p class="font-bold mb-3">
                O trabalho de interiores pode incluir a seleção de móveis, a criação de layouts, a escolha de materiais e 
                acabamentos, a seleção de cores e a coordenação de instalações elétricas e hidráulicas. Além disso, eles 
                podem trabalhar com outros profissionais, como arquitetos e construtores, para garantir que o projeto seja 
                realizado de forma eficiente e dentro do orçamento.
            </p>
            <p class="font-bold mb-3">
                Sempre atentos as tendências de moda, tecnologias e materiais de construção, bem como habilidades de 
                comunicação e negociação para trabalhar de forma eficaz com seus. 
            </p>
      `,
    },
  },
];
