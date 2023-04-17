import ApplicationForm from "../application-form";

function Application() {
  return (
    <>
      <section className="application bg-gray-100">
        <div className="container mx-auto py-24 flex max-xl: px-10">
          <div className=" basis-6/12 p-10 px-14 bg-white max-xl:basis-7/12">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Application;
