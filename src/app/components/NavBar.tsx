// app/components/Navbar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-6">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/experiencia">Experiência</Link></li>
        <li><Link href="/projetos">Projetos</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
