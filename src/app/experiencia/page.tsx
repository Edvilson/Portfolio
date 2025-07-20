type Experiencia = {
    cargo: string;
    empresa: string;
    periodo: string;
    local: string;
    descricao: string;
    competencias: string;
  };
  
  const experiencias: Experiencia[] = [
    {
      cargo: "Analista de Sistemas",
      empresa: "Wilson Sons",
      periodo: "Nov 2024 - Atual (9 meses)",
      local: "Rio Grande, Rio Grande do Sul, Brasil - Híbrida",
      descricao: "Análise de sistemas de software, API REST, React.js.",
      competencias: "Análise de sistemas de software · API REST · React.js",
    },
    {
      cargo: "Analista de Sistema",
      empresa: "CIGAM Software de Gestão",
      periodo: "Abr 2024 - Out 2024 (7 meses)",
      local: "Pelotas, Rio Grande do Sul, Brasil - Remota",
      descricao:
        "Atuação na análise de levantamentos de requisitos e documentação técnica para desenvolvimento.",
      competencias:
        "Análise de programas · Análise de sistemas · Análise de sistemas de software · Engenharia",
    },
    {
      cargo: "Sócio Proprietário | Desenvolvedor",
      empresa: "EAK System Ltda",
      periodo: "Ago 2021 - Abr 2024 (2 anos 9 meses)",
      local: "Pelotas, Rio Grande do Sul, Brasil - Remota",
      descricao: "Consultoria na área de desenvolvimento.",
      competencias:
        "C# · RabbitMQ · Git · Microsoft Visual Studio · ASP.NET Core · Arquitetura · Kanban · Microsoft SQL Server · REST · .NET Core",
    },
    {
      cargo: "Analista de Sistemas",
      empresa: "Wilson Sons",
      periodo: "Mar 2021 - Ago 2021 (6 meses)",
      local: "Rio Grande, Rio Grande do Sul, Brasil",
      descricao:
        "Análise dos sistemas B2B, BI, APIs, banco de dados Oracle.",
      competencias: "Oracle · Microsoft Visual Studio · ASP.NET Core · Arquitetura · .NET Core",
    },
    {
      cargo: "Programador .Net",
      empresa: "Wilson Sons (via Pipegrep)",
      periodo: "Nov 2020 - Fev 2021 (4 meses)",
      local: "Rio Grande, Rio Grande do Sul, Brasil",
      descricao:
        "Desenvolvimento com C#, NHibernate, Oracle, React.",
      competencias:
        "C# · React.js · Oracle · Git · Microsoft Visual Studio · ASP.NET Core · SQL · Arquitetura · .NET Core",
    },
    {
      cargo: "Desenvolvedor de Sistemas Pleno",
      empresa: "Gestor SA Tecnologia da Informação",
      periodo: "Ago 2020 - Nov 2020 (4 meses)",
      local: "Pelotas, Rio Grande do Sul, Brasil",
      descricao:
        "Sustentação e implementação de funcionalidades em VB6 e C#, com bancos PostgreSQL e Oracle.",
      competencias:
        "Microsoft Office · Microsoft Visual Studio · SGBD · XML · Arquitetura · Kanban",
    },
    {
      cargo: "Analista de Sistema",
      empresa: "Gestor SA Tecnologia da Informação",
      periodo: "Mar 2017 - Out 2017 (8 meses)",
      local: "Pelotas, Rio Grande do Sul, Brasil",
      descricao:
        "Levantamento de requisitos e documentação para ERP no varejo, implementação do CF-e SAT.",
      competencias:
        "Análise de sistemas · Microsoft Visual Studio · SGBD · Arquitetura · Kanban · .NET Core",
    },
    {
      cargo: "Desenvolvedor de Sistemas",
      empresa: "Pelotas e Região, Brasil",
      periodo: "Set 2013 - Mar 2017 (3 anos 7 meses)",
      local: "Pelotas e Região, Brasil",
      descricao:
        "Sustentação e implementação de ERP para varejo usando VB6, C#, Oracle, PostgreSQL, MySQL e SQL Server. Montagem de relatórios com Crystal Reports.",
      competencias:
        "Oracle · Microsoft Visual Studio · SGBD · PostgreSQL · .NET Core",
    },
    {
      cargo: "Programador",
      empresa: "Comparte Sites & Webmarketing",
      periodo: "Fev 2012 - Ago 2013 (1 ano 7 meses)",
      local: "Pelotas e Região, Brasil",
      descricao:
        "Sustentação e criação de sites e gerenciadores de conteúdo usando PHP, MySQL e Joomla.",
      competencias: "Microsoft Office",
    },
    {
      cargo: "Programador Web (Estagiário)",
      empresa: "IFSul - Campus Pelotas",
      periodo: "Abr 2011 - Nov 2011 (8 meses)",
      local: "Pelotas e Região, Brasil",
      descricao:
        "Auxílio na equipe de desenvolvimento, implementação via Joomla e publicação de conteúdo no portal.",
      competencias: "",
    },
  ];
  
  export default function Experiencia() {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-white">Experiência Profissional</h1>
        <div className="space-y-8">
          {experiencias.map((exp, idx) => {
            const isAtual = exp.periodo.includes("Atual");
            const borderColor = isAtual ? "border-green-500" : "border-red-500";
  
            return (
              <div
                key={idx}
                className={`border-l-4 ${borderColor} pl-5 bg-zinc-800 rounded-lg p-4`}
              >
                <h2 className="text-xl font-bold text-white">{exp.cargo}</h2>
                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold text-white">{exp.empresa}</span> &bull; {exp.periodo}
                </p>
                <p className="text-sm text-gray-400">{exp.local}</p>
                <p className="mt-2 text-gray-200">{exp.descricao}</p>
                {exp.competencias && (
                  <p className="mt-2 text-gray-400 text-sm">
                    <span className="font-medium text-gray-300">Competências:</span> {exp.competencias}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </main>
    );
  }
  