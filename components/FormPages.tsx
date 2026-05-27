"use client";

import { useState } from "react";
import { Mail, MessageCircle, UploadCloud } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { companyEmail, companyInstagram, companyLocation, companyPhoneDisplay, companyPhoneE164, serviceTypes, whatsappLink } from "@/data/mock";

function whatsappUrl(message: string) {
  return `https://wa.me/${companyPhoneE164}?text=${encodeURIComponent(message)}`;
}

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function RequestQuotePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const leadMessage = [
    "Ola, tudo bem? Gostaria de solicitar um orcamento com a Pro Elite Montagens.",
    "",
    "Meus dados:",
    `Nome: ${name || "Nao informado"}`,
    `WhatsApp: ${phone || "Nao informado"}`,
    `Cidade: ${city || "Nao informado"}`,
    `Servico: ${service || "Nao informado"}`,
    `Data desejada: ${date || "Nao informada"}`,
    `Descricao: ${description || "Nao informada"}`
  ].join("\n");

  return (
    <PublicShell>
      <main className="pageMain">
        <Section
          eyebrow="Solicitar orcamento"
          title="Conte o que precisa montar"
          text="Envie os dados principais do servico e fale direto pelo WhatsApp para receber seu orcamento."
        >
          <div className="splitLayout">
            <form className="formCard">
              <label>Nome completo<input placeholder="Seu nome" value={name} onChange={(event) => setName(event.target.value)} /></label>
              <label>Telefone / WhatsApp<input placeholder="(64) 99999-9999" value={phone} onChange={(event) => setPhone(formatPhoneInput(event.target.value))} /></label>
              <label>Cidade<input placeholder="Cidade do atendimento" value={city} onChange={(event) => setCity(event.target.value)} /></label>
              <label className="serviceTypeField">
                Tipo de servico
                <select value={service} onChange={(event) => setService(event.target.value)}>
                  <option value="" disabled>Selecione o servico</option>
                  {serviceTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label>Data desejada<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
              <label>
                Descricao
                <textarea placeholder="Informe medidas, marca, quantidade de pecas e observacoes importantes." value={description} onChange={(event) => setDescription(event.target.value)} />
              </label>
              <label className="uploadBox">
                <UploadCloud size={22} />
                Fotos podem ser enviadas pelo WhatsApp apos abrir a conversa
              </label>
              <a className="primaryButton" href={whatsappUrl(leadMessage)} target="_blank" rel="noreferrer">Enviar pelo WhatsApp</a>
            </form>
            <aside className="infoPanel">
              <h3>Depois do envio</h3>
              <ol>
                <li>Recebemos sua solicitacao pelo WhatsApp.</li>
                <li>Analisamos fotos, endereco e tipo de movel.</li>
                <li>Voce recebe o orcamento para aprovar.</li>
                <li>Com a aprovacao, o servico pode ser agendado.</li>
              </ol>
              <a href={whatsappLink} className="secondaryButton"><MessageCircle size={18} /> Tirar duvida no WhatsApp</a>
            </aside>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const contactMessage = [
    "Contato pelo site - Pro Elite Montagens",
    `Nome: ${name || "Nao informado"}`,
    `E-mail: ${email || "Nao informado"}`,
    `Telefone: ${phone || "Nao informado"}`,
    `Mensagem: ${message || "Nao informada"}`
  ].join("\n");

  return (
    <PublicShell>
      <main className="pageMain">
        <Section eyebrow="Contato" title="Fale com a Pro Elite Montagens" text="Atendimento direto para clientes, empresas e lojas de moveis.">
          <div className="splitLayout">
            <div className="infoPanel">
              <h3>Canais principais</h3>
              <p><MessageCircle size={18} /> WhatsApp: {companyPhoneDisplay}</p>
              <p><Mail size={18} /> {companyEmail}</p>
              <p>Instagram: {companyInstagram}</p>
              <p>Atendimento: {companyLocation}</p>
              <a href={whatsappLink} className="primaryButton">Falar no WhatsApp</a>
            </div>
            <form className="formCard">
              <label>Nome<input placeholder="Seu nome" value={name} onChange={(event) => setName(event.target.value)} /></label>
              <label>E-mail<input placeholder="voce@email.com" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
              <label>Telefone<input placeholder={companyPhoneDisplay} value={phone} onChange={(event) => setPhone(formatPhoneInput(event.target.value))} /></label>
              <label>Mensagem<textarea placeholder="Como podemos ajudar?" value={message} onChange={(event) => setMessage(event.target.value)} /></label>
              <a className="primaryButton" href={whatsappUrl(contactMessage)} target="_blank" rel="noreferrer">Enviar pelo WhatsApp</a>
            </form>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
