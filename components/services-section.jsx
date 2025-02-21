export function ServicesSection() {
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

  const texts = [
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
    <section className="bg-black">
      <h2 className="py-20 w-fit mx-auto h2 bg-gradient text-transparent bg-clip-text">Descubre nuestros servicios</h2>
      <div className="grid md-down:grid-cols-1 md:grid-cols-2">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-[1.5]">
            <img src={src} alt={`Service ${index + 1}`} className="w-full h-full object-cover opacity-45" />
            <div className="absolute inset-0 flex items-center justify-center px-10">
              <span className="text-white text-center uppercase h3">{texts[index]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
