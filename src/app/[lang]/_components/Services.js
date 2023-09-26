const Services = ({ data }) => {
  const { title, service_cards } = data;
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
          {service_cards.map((s) => (
            <ServiceCard data={s} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ data }) => {
  const { title, subtitle, price, description } = data;
  return (
    <>
      <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-xl text-gray-400">{subtitle}</p>
        <p className="text-xl mt-4">{description}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
        </div>
      </div>
    </>
  );
};
