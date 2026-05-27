import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { advantages, gallery, publicServices } from "@/data/mock";

export function AboutPage() {
  return (
    <PublicShell>
      <main className="pageMain">
        <Section eyebrow="Sobre" title="Tecnologia, cuidado e acabamento no mesmo atendimento" text="A Pro Elite Montagens combina execucao profissional com uma plataforma interna para organizar orcamentos, agenda, pagamentos e historico dos atendimentos.">
          <div className="storyPanel">
            <img src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1200&q=80" alt="Ambiente com moveis montados" />
            <div>
              <h3>Padrao premium para servicos de montagem</h3>
              <p>O sistema foi desenhado para manter o atendimento simples para o cliente e dar controle total ao administrador.</p>
              <div className="pillRow">
                <span>Qualidade</span><span>Rapidez</span><span>Confianca</span><span>Organizacao</span>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}

export function ServicesPage() {
  return (
    <PublicShell>
      <main className="pageMain">
        <Section eyebrow="Servicos" title="Montagens, desmontagens e atendimento para parceiros">
          <div className="cardGrid four">
            {publicServices.concat(advantages).map((service) => {
              const Icon = service.icon;
              return (
                <article className="featureCard" key={service.title}>
                  <Icon size={26} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}

export function GalleryPage() {
  return (
    <PublicShell>
      <main className="pageMain">
        <Section eyebrow="Galeria" title="Ambientes finalizados">
          <div className="galleryGrid large">
            {gallery.map((item) => (
              <article className="galleryCard" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div><strong>{item.title}</strong><span>{item.city}</span></div>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
