const SmallSection = ({ src, title, reverse }) => (
  <section
    className={`flex md:grid-cols-2 p-[120px] ${
      reverse ? 'md:flex-row-reverse bg-primary bg-opacity-60' : 'bg-black-1'
    }`}
  >
    <div className="flex w-full items-center justify-center px-10">
      <span className="text-white text-center text-2xl uppercase">{title}</span>
    </div>
    <div className="relative w-full aspect-square">
      <img src={src} alt={`Service ${title}`} className="w-full h-full object-cover" />
    </div>
  </section>
);

export function ServicesPageContent() {
  const mainImage = '/images/docks.jpeg';
  const mainTitle = 'Soluciones financieras para comercio exterior';

  const images = [
    '/images/docks.jpeg',
    '/images/handshake.jpeg',
    '/images/logistics.jpeg',
    '/images/plane-packing.jpeg',
    '/images/necktie.jpeg',
    '/images/docs.jpeg',
    '/images/finances.jpeg',
    '/images/plane.jpg'
  ];

  const titles = [
    'Gestión de comercio exterior',
    'Consultoría Estratégica en Expansión Internacional',
    'Servicios de Representación Comercial',
    'Gestión de COMPRAS INTERNACIONALES',
    'DESARROLLO DE ALIANZAS ESTRATÉGICAS',
    'Asistencia en Cumplimiento Normativo y Certificaciones',
    'Soluciones Financieras para Comercio Exterior',
    'Visita nuestra sección de servicios para saber más.'
  ];

  return (
    <div className="bg-black-1">
      <section className="bg-primary bg-opacity-60 p-[120px]">
        <div className="grid md:grid-cols-2">
          <div className="relative w-full aspect-[1.5]">
            <img src={mainImage} alt="Main Service" className="w-full h-full object-cover opacity-45" />
          </div>
          <div className="flex flex-col items-center justify-center px-10">
            <h3 className="text-white text-center text-2xl uppercase">{mainTitle}</h3>
            <p>
              A través de nuestra alianza estratégica con GUOR Investments S.A., una reconocida sociedad de bolsa
              registrada bajo la Matrícula Nro. 496 de la CNV, ofrecemos servicios financieros especializados que
              facilitan y optimizan tus operaciones de comercio exterior.
            </p>
            <p>
              Con nuestras soluciones financieras especializadas, impulsamos tu negocio hacia nuevos horizontes en el
              comercio global.
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Financiamiento de importaciones y exportaciones: Accede a líneas de crédito diseñadas para cubrir las
              necesidades específicas de tus transacciones internacionales, asegurando liquidez y continuidad en tus
              operaciones.
            </li>

            <li>
              Negociación de cheques de pago diferido: Aprovecha la posibilidad de negociar cheques en el Mercado de
              Capitales, contando con avales otorgados por Sociedades de Garantía Recíproca (SGR) o activos propios,
              para obtener financiamiento ágil y eficiente.
            </li>

            <li>
              Estructuración de fideicomisos financieros: Implementa instrumentos avanzados que permiten obtener fuentes
              de crédito mediante la securitización de activos, garantizando el repago a los inversores y accediendo a
              financiamiento con ventajas sobre las fuentes tradicionales.
            </li>
            <li>
              Emisión de obligaciones negociables: Obtén financiamiento a largo plazo mediante la emisión de títulos de
              deuda, con el respaldo y la organización de GUOR Investments S.A., facilitando el acceso al Mercado de
              Capitales.
            </li>

            <li>
              Asesoramiento en inversiones: Recibe orientación profesional para tomar decisiones informadas que
              potencien el crecimiento y la estabilidad financiera de tu empresa en el ámbito internacional.
            </li>
          </ul>
        </div>
      </section>

      {/* one small section per image */}
      {images.map((src, index) => (
        <SmallSection key={index} src={src} title={titles[index]} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}
