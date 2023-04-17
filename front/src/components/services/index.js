const { default: ServiceCard } = require("../service-card");

function Services() {
  const services = [1, 2, 3, 4];

  return (
    <>
      <section className="services">
        <div className="container mx-auto py-24 max-xl:px-10">
          <div className=" text-center mb-8">
            <h1 className=" text-4xl font-bold mb-10">Наши услуги</h1>
            <p className="mb-10">
              Eiusmod ex minim eu nostrud aute reprehenderit elit irure nulla
              deserunt aliqua incididunt est ex. Ullamco mollit quis esse
              consectetur. Cillum dolor laborum occaecat incididunt nostrud
              mollit. Sunt anim non duis Lorem magna cillum veniam anim non
              exercitation est officia. Eiusmod excepteur sunt anim duis qui
              aute sit nisi adipisicing laborum consequat eu.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {services.map((service) => (
              <>
                <ServiceCard />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
