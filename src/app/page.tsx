import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
      <div className="flex flex-col items-center">
        <Image
          src="https://github.com/edvilson.png"
          alt="Foto de perfil do GitHub"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
        />

        <h1 className="text-3xl font-bold mt-4">Edvilson Almeida Kwiatkowski</h1>
        <p className="text-lg mt-2">
          Analista de Sistemas com experiência em .NET, Oracle, AngularJS e Next.js.
        </p>
        <p className="text-lg mt-2">
          Hoje, além de atuar como analista CLT, ajudo empresas a automatizarem rotinas, integrarem sistemas e desenvolverem soluções web sob demanda. Com 14 anos de experiência, ofereço soluções práticas e rápidas para quem precisa de agilidade e segurança.
        </p>
      </div>
    </main>
  );
}
