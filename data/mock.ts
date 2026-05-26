import {
  BadgeDollarSign,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Drill,
  Hammer,
  Home,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Table2,
  Users,
  Wrench
} from "lucide-react";

export const companyPhoneDisplay = "(64) 98125-2213";
export const companyPhoneE164 = "5564981252213";
export const companyLocation = "Quirinopolis, Gouvelandia, Paranaiguara e Inaciolandia";
export const companyInstagram = "@pro_elite_montagem";
export const companyEmail = "proelitemontagens@gmail.com";

export const whatsappLink =
  `https://wa.me/${companyPhoneE164}?text=Ola%2C%20quero%20solicitar%20um%20orcamento%20com%20a%20Pro%20Elite%20Montagens.`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Servicos", href: "/servicos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Orcamento", href: "/solicitar-orcamento" },
  { label: "Contato", href: "/contato" }
];

export const servicePriceItems = [
  { category: "Mesas", name: "Mesa simples", price: 60 },
  { category: "Mesas", name: "Mesa escritorio", price: 80 },
  { category: "Mesas", name: "Mesa gamer", price: 100 },
  { category: "Comodas", name: "Comoda pequena", price: 70 },
  { category: "Comodas", name: "Comoda media", price: 100 },
  { category: "Comodas", name: "Comoda grande", price: 140 },
  { category: "Estantes", name: "Estante pequena", price: 70 },
  { category: "Estantes", name: "Estante media", price: 100 },
  { category: "Estantes", name: "Estante grande", price: 140 },
  { category: "Guarda-roupas", name: "Guarda-roupa 2 portas", price: 100 },
  { category: "Guarda-roupas", name: "Guarda-roupa 3 portas", price: 150 },
  { category: "Guarda-roupas", name: "Guarda-roupa 4 portas", price: 190 },
  { category: "Guarda-roupas", name: "Guarda-roupa 6 portas", price: 280 },
  { category: "Sala", name: "Rack", price: 90 },
  { category: "Sala", name: "Painel TV", price: 120 },
  { category: "Sala", name: "Home completo", price: 200 },
  { category: "Quartos", name: "Cama box", price: 50 },
  { category: "Quartos", name: "Cama casal", price: 90 },
  { category: "Quartos", name: "Beliche", price: 130 },
  { category: "Armarios", name: "Armario pequeno ate 1,00m", price: 150 },
  { category: "Armarios", name: "Armario medio 1,01m a 2,00m", price: 230 },
  { category: "Armarios", name: "Armario grande acima de 2,00m", price: 360 },
  { category: "Outros servicos", name: "Instalar prateleira", price: 50 },
  { category: "Outros servicos", name: "Pequenos ajustes", price: 40 },
  { category: "Outros servicos", name: "Servico personalizado", price: 0 }
];

export const serviceTypes = servicePriceItems.map((item) => item.name);

export const statusFlow = [
  "Solicitacao recebida",
  "Em analise",
  "Orcamento enviado",
  "Aprovado",
  "Agendado",
  "Em andamento",
  "Concluido",
  "Cancelado"
];

export const displacementRegions = [
  { name: "Quirinopolis", price: 0 },
  { name: "Gouvelandia", price: 50 },
  { name: "Paranaiguara", price: 80 },
  { name: "Inaciolandia", price: 100 },
  { name: "Outra regiao", price: 120 }
];

export const publicServices = [
  {
    icon: Drill,
    title: "Moveis residenciais",
    text: "Montagem de guarda-roupas, camas, mesas, racks, paineis e armarios com acabamento limpo."
  },
  {
    icon: Wrench,
    title: "Desmontagem e remontagem",
    text: "Desmontagem e remontagem de moveis com cuidado nas pecas e no acabamento."
  },
  {
    icon: Hammer,
    title: "Instalacoes especiais",
    text: "Paineis, racks, armarios suspensos, ajustes finais e pequenos reparos."
  },
  {
    icon: Home,
    title: "Ambientes completos",
    text: "Organizacao da montagem de quarto, sala, cozinha, area gourmet e escritorio."
  },
  {
    icon: Table2,
    title: "Mesas e escritorios",
    text: "Montagem de mesas, bancadas, cadeiras, estantes e moveis para home office."
  },
  {
    icon: PackageCheck,
    title: "Atendimento para lojas",
    text: "Suporte para entregas, pos-venda e montagem de moveis vendidos por parceiros."
  }
];

export const advantages = [
  { icon: Clock3, title: "Atendimento rapido", text: "Triagem objetiva, orcamento claro e agenda organizada." },
  { icon: ShieldCheck, title: "Confianca", text: "Historico, fotos, pagamentos e status centralizados." },
  { icon: Sparkles, title: "Acabamento premium", text: "Cuidado com o ambiente e entrega com padrao profissional." },
  { icon: PackageCheck, title: "Para lojas", text: "Fluxo preparado para parcerias, equipes e alto volume." }
];

export const gallery = [
  {
    title: "Guarda-roupa premium",
    city: "Quirinopolis"
  },
  {
    title: "Painel com rack",
    city: "Regiao de Quirinopolis"
  },
  {
    title: "Home office planejado",
    city: "Quirinopolis"
  },
  {
    title: "Quarto completo",
    city: "Regiao de Quirinopolis"
  }
];

export const testimonials = [
  {
    name: "Mariana Alves",
    text: "Chegaram no horario, protegeram o piso e deixaram tudo alinhado. O painel ficou impecavel.",
    rating: 5
  },
  {
    name: "Loja Casa Norte",
    text: "Usamos a Pro Elite para entregas recorrentes. A plataforma deixa os agendamentos muito mais simples.",
    rating: 5
  },
  {
    name: "Rafael Lima",
    text: "Orcamento transparente e pagamento por Pix sem complicacao. Recomendo.",
    rating: 5
  }
];

export const adminStats = [
  { label: "Clientes", value: "0", icon: Users, trend: "Pronto para cadastrar" },
  { label: "Servicos no mes", value: "0", icon: ClipboardList, trend: "Sem servicos lancados" },
  { label: "Pendentes", value: "0", icon: Clock3, trend: "Fila limpa" },
  { label: "Concluidos", value: "0", icon: CheckCircle2, trend: "Nenhuma conclusao ainda" },
  { label: "Faturamento", value: "R$ 0", icon: BadgeDollarSign, trend: "Aguardando pagamentos" },
  { label: "Aguardando aprovacao", value: "0", icon: Star, trend: "Sem orcamentos abertos" }
];

type ClientRow = { name: string; phone: string; city: string; status: string; services: number };
type AssemblerRow = { name: string; area: string; specialties: string; status: string; score: number };
type ServiceRow = { id: string; client: string; assembler: string; title: string; type: string; address: string; status: string; date: string; time: string; value: string };
type QuoteRow = { id: string; client: string; service: string; labor: number; fee: number; discount: number; total: number; method: string; expires: string; status: string };
type PaymentRow = { quote: string; amount: string; method: string; status: string; date: string };

export const clients: ClientRow[] = [];
export const assemblers: AssemblerRow[] = [];
export const services: ServiceRow[] = [];
export const quotes: QuoteRow[] = [];
export const payments: PaymentRow[] = [];

export const reports = [
  { label: "Servicos por mes", value: "0", icon: CalendarDays },
  { label: "Faturamento por periodo", value: "R$ 0", icon: BadgeDollarSign },
  { label: "Orcamentos aprovados", value: "0", icon: CheckCircle2 },
  { label: "Servicos por tipo", value: "0", icon: Users },
  { label: "Cancelados", value: "0", icon: ClipboardList },
  { label: "Novos clientes", value: "0", icon: Star }
];

export const agenda = [
  { day: "Seg", date: "18", jobs: 0 },
  { day: "Ter", date: "19", jobs: 0 },
  { day: "Qua", date: "20", jobs: 0 },
  { day: "Qui", date: "21", jobs: 0 },
  { day: "Sex", date: "22", jobs: 0 },
  { day: "Sab", date: "23", jobs: 0 }
];

export const formFields = [
  "Nome completo",
  "Telefone / WhatsApp",
  "E-mail",
  "Endereco",
  "Cidade",
  "Tipo de servico",
  "Data desejada"
];

export const contactItems = [
  { icon: MapPin, label: "Atendimento", value: companyLocation },
  { icon: Users, label: "Parcerias", value: "Lojas de moveis e empresas" },
  { icon: BadgeDollarSign, label: "Pagamentos", value: "Pix, dinheiro e cartao" }
];
