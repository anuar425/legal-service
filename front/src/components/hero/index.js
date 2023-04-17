import Button from "../button";

function Hero() {
  return (
    <>
      <section className="hero bg-gray-100 bg-no-repeat bg-cover ">
        <div className="container mx-auto flex flex-row h-[38rem] items-center max-xl:px-10">
          <div className="basis-6/12 max-xl:basis-full">
            <h1 className="text-5xl font-bold mb-4">Название</h1>
            <h3 className="text-2xl mb-4">Описание</h3>
            <Button>Оставить заявку</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
