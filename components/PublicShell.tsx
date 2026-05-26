import Link from "next/link";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { companyInstagram, companyLocation, companyPhoneDisplay, navItems, whatsappLink } from "@/data/mock";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="siteShell">
      <header className="topbar">
        <Link href="/" className="plainLink">
          <Logo />
        </Link>
        <nav className="desktopNav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="topActions">
          <a href={whatsappLink} className="iconButton" title="Falar no WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>
      </header>
      <nav className="mobileNav" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      {children}
      <footer className="footer">
        <div className="footerMain">
          <div>
            <Logo />
            <p>Montagem e desmontagem de moveis com qualidade, rapidez e confianca.</p>
          </div>
          <div className="footerGrid">
            <span><Phone size={16} /> {companyPhoneDisplay}</span>
            <a href={whatsappLink}><MessageCircle size={16} /> WhatsApp</a>
            <span><Instagram size={16} /> {companyInstagram}</span>
            <span>{companyLocation}</span>
          </div>
        </div>
        <p className="footerCopy">(c) 2026 Programando Projetos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
