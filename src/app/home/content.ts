export const contactEmail = 'contacto@quadratics.io';

export const projectMailto =
  'mailto:contacto@quadratics.io?subject=Iniciar%20un%20proyecto';
export const portfolioMailto =
  'mailto:contacto@quadratics.io?subject=Consulta%20sobre%20el%20portafolio';

export type ServiceIcon = 'mobile' | 'web' | 'ai';

export type Service = {
  icon: ServiceIcon;
  title: string;
  body: string;
  example: string;
};

export type Product = {
  slug: 'ciceron' | 'skooltrak';
  tag: string;
  tagColor: 'mint' | 'gold';
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  external?: boolean;
  secondaryHref: string;
  secondaryLabel: string;
  features: Array<{ title: string; body: string }>;
};

export const sectors = [
  'Legal',
  'Educación',
  'Operaciones empresariales',
  'Integraciones de IA',
] as const;

export const services: Service[] = [
  {
    icon: 'mobile',
    title: 'Móvil',
    body: 'Aplicaciones nativas y multiplataforma para equipos de campo, clientes y operaciones internas.',
    example: 'Pensadas para funcionar sin conexión estable, habitual en Panamá y la región.',
  },
  {
    icon: 'web',
    title: 'Web',
    body: 'Aplicaciones web, herramientas internas y portales de clientes sobre la operación que ya existe.',
    example: 'Se integran con los sistemas que su empresa ya utiliza; no los reemplazan de golpe.',
  },
  {
    icon: 'ai',
    title: 'IA e integraciones',
    body: 'Inteligencia artificial conectada a documentos, flujos de trabajo y sistemas heredados de su industria.',
    example: 'Integración sobre su operación real — no un chatbot genérico añadido por encima.',
  },
];

export const products: Product[] = [
  {
    slug: 'ciceron',
    tag: 'IA Legal',
    tagColor: 'mint',
    name: 'Ciceron',
    logo: '/ciceron.svg',
    logoWidth: 28,
    logoHeight: 32,
    description:
      'Núcleo de IA jurídica para firmas en Panamá y Centroamérica: redacción, búsqueda y revisión sobre el corpus que la firma autoriza, integrado a Word y Outlook.',
    primaryHref: 'https://ciceron.io/',
    primaryLabel: 'Ver Ciceron →',
    external: true,
    secondaryHref:
      'mailto:contacto@quadratics.io?subject=Consulta%20sobre%20un%20piloto%20de%20Ciceron',
    secondaryLabel: 'Consultar un piloto',
    features: [
      {
        title: 'El abogado conserva el control.',
        body: 'El corpus y el alcance los define la firma; cada respuesta queda sujeta a revisión profesional.',
      },
      {
        title: 'En el flujo de trabajo actual.',
        body: 'Word, Outlook, búsqueda y chat sobre el mismo núcleo — no una aplicación aparte.',
      },
      {
        title: 'Despliegue acordado con la firma.',
        body: 'Local o en nube, en la infraestructura que se documente antes del piloto.',
      },
    ],
  },
  {
    slug: 'skooltrak',
    tag: 'Gestión Escolar',
    tagColor: 'gold',
    name: 'Skooltrak',
    logo: '/skooltrak.svg',
    logoWidth: 54,
    logoHeight: 32,
    description:
      'Plataforma de gestión escolar para instituciones K-12 en la región: matrícula, registros académicos, asistencia y comunicación con las familias en un solo sistema.',
    primaryHref:
      'mailto:contacto@quadratics.io?subject=Consulta%20sobre%20una%20demo%20de%20Skooltrak',
    primaryLabel: 'Solicitar una demo →',
    secondaryHref: 'mailto:contacto@quadratics.io?subject=Consulta%20sobre%20Skooltrak',
    secondaryLabel: 'Hablar con el equipo',
    features: [
      {
        title: 'Un solo sistema, no cinco hojas de cálculo.',
        body: 'Matrícula, calificaciones, asistencia y facturación en una única fuente de verdad.',
      },
      {
        title: 'Construida para la región.',
        body: 'En español e inglés, ajustada al calendario académico de los colegios locales.',
      },
      {
        title: 'Portal y app para las familias.',
        body: 'Los padres ven asistencia, calificaciones y pagos sin llamar a la oficina.',
      },
    ],
  },
];
