import { ExternalLink } from "lucide-react";

const projetos = [
    {
    titulo: "Inclui Web",
    descricao:
      "Sistema para auditoria de acessibilidade em sites, com relatórios claros e foco em usabilidade digital.",
    link: "https://incluiweb.com.br", 
    stack: ["Next.js", "TailwindCSS", "Node.js"],
  },
    // Adicione mais aqui
  ];
  
  export default function Projetos() {
  return (
    <main className="min-h-screen bg-[#0b1321] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          💼 Projetos Realizados
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="group border border-gray-800 rounded-2xl p-6 bg-gradient-to-b from-[#111a2d] to-[#0c1220] hover:from-[#151f33] hover:to-[#0e1525] shadow-md hover:shadow-blue-500/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {p.titulo}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{p.descricao}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500/10 text-blue-300 text-xs font-medium px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Ver projeto <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
  