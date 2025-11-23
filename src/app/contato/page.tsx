// ContactPage.js
import { MdEmail, MdPhone } from 'react-icons/md'; // Ícones de Material Design
import { FaLinkedin } from 'react-icons/fa'; // Ícone do LinkedIn

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contato</h1>

      <div className="contact-grid">
        {/* Card de Email */}
        <a href="mailto:edvilson.ads@gmail.com" className="contact-card">
          <MdEmail className="icon" />
          <p className="title">Email</p>
          <p className="value">edvilson.ads@gmail.com</p>
        </a>

        {/* Card de Telefone/WhatsApp */}
        <a href="https://wa.me/5553999941990" target="_blank" rel="noopener noreferrer" className="contact-card">
          <MdPhone className="icon" />
          <p className="title">Telefone / WhatsApp</p>
          <p className="value">(53) 9 9994-1990</p>
        </a>

        {/* Card de LinkedIn */}
        <a href="https://www.linkedin.com/in/edvilson-kwiatkowski" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaLinkedin className="icon" />
          <p className="title">LinkedIn</p>
          <p className="value">/in/edvilson-kwiatkowski</p>
        </a>
      </div>
    </div>
  );
}