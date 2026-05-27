import Link from "next/link";
import { ArrowRight, CalendarCheck, MessageCircle, UploadCloud } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { advantages, companyLocation, companyPhoneDisplay, gallery, publicServices, testimonials, whatsappLink } from "@/data/mock";

export function HomePage() {
  return (
    <PublicShell>
      <main>
        <section className="hero">
          <div className="heroBackdrop" />
          <div className="heroContent">
            <span className="eyebrow">Pro Elite Montagens</span>
            <h1>Montagem e desmontagem de moveis com qualidade, rapidez e confianca.</h1>
            <p>
              A Pro Elite Montagens oferece um atendimento profissional para transformar seu ambiente
              com seguranca, organizacao e acabamento de alto padrao.
            </p>
            <div className="heroActions">
              <Link href="/solicitar-orcamento" className="primaryButton">
                Solicitar orcamento <ArrowRight size={18} />
              </Link>
              <Link href="/solicitar-orcamento" className="secondaryButton">
                <CalendarCheck size={18} /> Agendar montagem
              </Link>
              <a href={whatsappLink} className="ghostButton dark">
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>
            <div className="heroContact">
              <span>WhatsApp: {companyPhoneDisplay}</span>
              <span>{companyLocation}</span>
            </div>
          </div>
        </section>

        <Section eyebrow="Servicos" title="Servicos oferecidos" text="Do primeiro contato ao recibo final, tudo fica organizado em uma unica plataforma.">
          <div className="brandShowcase">
            <img src="/pro-elite-logo.png" alt="Logo Pro Elite Montagens" />
            <div>
              <span className="eyebrow">Atendimento em Quirinopolis</span>
              <h3>Pro Elite Montagens</h3>
              <p>Montagem e desmontagem de moveis com cuidado no ambiente, servico organizado e contato direto pelo WhatsApp.</p>
            </div>
          </div>
          <div className="cardGrid four">
            {publicServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="featureCard" key={service.title}>
                  <Icon size={28} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section eyebrow="Galeria" title="Trabalhos realizados">
          <div className="galleryGrid">
            {gallery.map((item) => (
              <article className="galleryCard" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.city}</span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Confianca" title="Por que escolher a Pro Elite Montagens?">
          <div className="cardGrid four">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <article className="miniCard" key={advantage.title}>
                  <Icon size={24} />
                  <strong>{advantage.title}</strong>
                  <span>{advantage.text}</span>
                </article>
              );
            })}
          </div>
        </Section>

        <Section eyebrow="Depoimentos" title="Clientes e parceiros">
          <div className="cardGrid three">
            {testimonials.map((testimonial) => (
              <article className="quoteCard" key={testimonial.name}>
                <div className="stars">★★★★★</div>
                <p>{testimonial.text}</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </Section>

        <section className="ctaBand">
          <div>
            <span className="eyebrow">Atendimento digital</span>
            <h2>Solicite seu orcamento online e combine tudo pelo WhatsApp.</h2>
          </div>
          <Link href="/solicitar-orcamento" className="primaryButton">
            <UploadCloud size={18} /> Comecar agora
          </Link>
        </section>
      </main>
    </PublicShell>
  );
}
