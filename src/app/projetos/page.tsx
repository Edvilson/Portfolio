const projetos = [
    {
      titulo: "Dashboard de Equipamentos",
      descricao: "Sistema de monitoramento em tempo real usando Oracle + Next.js",
      link: "#",
    },
    // Adicione mais aqui
  ];
  
  export default function Projetos() {
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Projetos Realizados</h1>
        <ul className="space-y-4">
          {projetos.map((p, i) => (
            <li key={i} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{p.titulo}</h2>
              <p>{p.descricao}</p>
              <a href={p.link} className="text-blue-500 underline">Ver projeto</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  