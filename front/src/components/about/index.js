import AboutCard from "../about-card";

const list = new Array(3).fill(4);

function About() {
  return (
    <>
      <section className="about bg-gray-50">
        <div className="container mx-auto py-24 max-xl:px-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-16">О компаний</h1>
          </div>

          <div className=" grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-xl:gap-8">
            {list.map((item) => (
              <>
                <AboutCard />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
