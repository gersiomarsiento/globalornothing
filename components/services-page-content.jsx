import { ContactSection } from '../components/contact-section';

const SmallSection = ({ src, title, description, reverse }) => (
  // 50/50 section cards
  <section
    className={`flex md-down:flex-col-reverse p-[24px] md:p-[120px] ${
      reverse ? 'md:flex-row-reverse bg-primary bg-opacity-60' : 'bg-black-1'
    }`}
  >
    <div className="flex flex-col w-full justify-center md:px-10 gap-4">
      <span className="md-down:hidden gold-headline">{title}</span>
      <div className="">{description}</div>
      <a className="btn btn-yellow md:px-[24px] md:py-[14px] w-fit md-down:w-full self-start">
        CONTACTA CON UN EXPERTO
      </a>
    </div>
    <div className="w-full">
      <div className="md:hidden pb-6 gold-headline text-center">{title}</div>
      <div className="relative w-full aspect-square md-down:mb-6">
        <img src={src} alt={`Service ${title}`} className="w-full h-full object-cover" />
      </div>
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
    '/images/finances.jpeg'
  ];

  const titles = [
    'Gestión de comercio exterior',
    'Consultoría Estratégica en Expansión Internacional',
    'Servicios de Representación Comercial',
    'Gestión de compras internacionales',
    'Desarrollo de alianzas estratégicas',
    'Asistencia en Cumplimiento Normativo y Certificaciones',
    'Trading de commodities'
  ];

  const descriptions = [
    // 'Gestión de comercio exterior',
    <div key="0">
      <p>Nos convertimos en la extensión de tu empresa en mercados clave.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Representación de tu marca en ferias y eventos internacionales.</li>
        <li>Gestión de relaciones con clientes y proveedores globales.</li>
        <li>Negociación en tu nombre para obtener las mejores condiciones.</li>
        <li>Asesoramiento continuo sobre tendencias y oportunidades de mercado.</li>
      </ul>
      <p>Tu presencia global, sin complicaciones.</p>
    </div>,
    // 'Consultoría Estratégica en Expansión Internacional',
    <div key="1">
      <p>Te ayudamos a identificar y conquistar nuevos mercados con estrategias diseñadas a medida.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Estudios de mercado internacionales y análisis de viabilidad.</li>
        <li>Identificación de socios estratégicos y distribuidores locales.</li>
        <li>Desarrollo de planes de entrada a mercados específicos.</li>
        <li>Asesoramiento sobre normativas internacionales y requisitos específicos.</li>
      </ul>
      <p>Explora nuevos horizontes con un plan sólido y respaldo experto. </p>
    </div>,
    // 'Servicios de Representación Comercial',
    <div key="2">
      <p>Nos convertimos en la extensión de tu empresa en mercados clave.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Representación de tu marca en ferias y eventos internacionales.</li>
        <li>Gestión de relaciones con clientes y proveedores globales.</li>
        <li>Negociación en tu nombre para obtener las mejores condiciones.</li>
        <li>Asesoramiento continuo sobre tendencias y oportunidades de mercado.</li>
      </ul>
      <p>Tu presencia global, sin complicaciones. </p>
    </div>,
    // 'Gestión de compras internacionales',
    <div key="3">
      <p>Facilitamos tus adquisiciones internacionales con un enfoque estratégico.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Facilitamos tus adquisiciones internacionales con un enfoque estratégico.</li>
        <li>Búsqueda y evaluación de proveedores confiables.</li>
        <li>Negociación de precios, condiciones y contratos.</li>
        <li>Coordinación de transporte y logística desde el punto de origen.</li>
        <li>Control de calidad para asegurar la excelencia en tus productos.</li>
      </ul>
      <p>La forma más eficiente de adquirir lo mejor del mundo. </p>
    </div>,
    // 'Desarrollo de alianzas estratégicas',
    <div key="4">
      <p>Construimos conexiones que potencian tu negocio.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Construimos conexiones que potencian tu negocio.</li>
        <li>Creación de redes de contacto en mercados clave.</li>
        <li>Identificación de oportunidades de joint ventures y asociaciones estratégicas.</li>
        <li>Gestión de acuerdos internacionales y alianzas corporativas.</li>
        <li>Acceso a programas de incentivos y beneficios fiscales globales.</li>
      </ul>
      <p>Conecta con aliados que impulsen tu crecimiento. </p>
    </div>,
    // 'Asistencia en Cumplimiento Normativo y Certificaciones',
    <div key="5">
      <p>Garantizamos que cada paso de tu operación cumpla con las normativas internacionales.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Garantizamos que cada paso de tu operación cumpla con las normativas internacionales.</li>
        <li>Asesoramiento sobre normas de importación/exportación.</li>
        <li>Gestión de certificaciones necesarias para mercados específicos (ISO, Halal, entre otros).</li>
        <li>Actualización constante sobre cambios regulatorios globales.</li>
      </ul>
      <p>Cumple con las normas. Abre puertas a nuevos mercados. </p>
    </div>,
    // 'Trading de commodities',
    <div key="6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul className="list-disc ml-6 my-4">
        <li>Nunc finibus ornare elit, sed suscipit mi ornare eu.</li>
        <li>Phasellus laoreet dictum diam vitae ultrices. Mauris vestibulum egestas cursus.</li>
        <li>Nunc finibus ornare elit, sed suscipit mi ornare eu.</li>
        <li>Phasellus laoreet dictum diam vitae ultrices. Mauris vestibulum egestas cursus.</li>
        <li>Nunc finibus ornare elit, sed suscipit mi ornare eu.</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  ];

  return (
    // Main section
    <div className="bg-black-1">
      <section className="bg-primary bg-opacity-60 p-[24px] md:p-[120px]">
        <h3 className="text-center md:hidden md-down:mb-6 gold-headline">{mainTitle}</h3>

        <div className="grid md:grid-cols-2 md-down:gap-6">
          <div className="relative w-full aspect-[1.5]">
            <img src={mainImage} alt="Main Service" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center justify-center md:pl-10 gap-6">
            <h3 className="self-start md-down:hidden gold-headline">{mainTitle}</h3>
            <p>
              A través de nuestra alianza estratégica con <strong>GUOR Investments S.A.</strong>, una reconocida
              sociedad de bolsa registrada bajo la Matrícula Nro. 496 de la CNV, ofrecemos servicios financieros
              especializados que facilitan y optimizan tus operaciones de comercio exterior.
            </p>
            <p>
              Con nuestras soluciones financieras especializadas, impulsamos tu negocio hacia nuevos horizontes en el
              comercio global.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-2.5 items-center justify-center list-disc ml-6 mt-10">
            <li>
              <strong>Financiamiento de importaciones y exportaciones:</strong> Accede a líneas de crédito diseñadas
              para cubrir las necesidades específicas de tus transacciones internacionales, asegurando liquidez y
              continuidad en tus operaciones.
            </li>

            <li>
              <strong>Negociación de cheques de pago diferido:</strong> Aprovecha la posibilidad de negociar cheques en
              el Mercado de Capitales, contando con avales otorgados por Sociedades de Garantía Recíproca (SGR) o
              activos propios, para obtener financiamiento ágil y eficiente.
            </li>

            <li>
              <strong>Estructuración de fideicomisos financieros:</strong> Implementa instrumentos avanzados que
              permiten obtener fuentes de crédito mediante la securitización de activos, garantizando el repago a los
              inversores y accediendo a financiamiento con ventajas sobre las fuentes tradicionales.
            </li>
            <li>
              <strong>Emisión de obligaciones negociables:</strong> Obtén financiamiento a largo plazo mediante la
              emisión de títulos de deuda, con el respaldo y la organización de GUOR Investments S.A., facilitando el
              acceso al Mercado de Capitales.
            </li>

            <li>
              <strong>Asesoramiento en inversiones:</strong> Recibe orientación profesional para tomar decisiones
              informadas que potencien el crecimiento y la estabilidad financiera de tu empresa en el ámbito
              internacional.
            </li>
          </ul>
          <a className="btn btn-yellow md:px-[24px] md:py-[14px] w-fit md-down:w-full self-end">
            CONTACTA CON UN EXPERTO
          </a>
        </div>
      </section>

      {/* one small section per image */}
      {images.map((src, index) => (
        <SmallSection
          key={index}
          src={src}
          title={titles[index]}
          reverse={index % 2 !== 0}
          description={descriptions[index]}
        />
      ))}
      <ContactSection />
    </div>
  );
}
