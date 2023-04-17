import Button from "../button";

function ServiceCard() {
  return (
    <>
      <div className="py-10 px-6 bg-gray-100">
        <div className=" h-16 w-16 bg-gray-500 mb-8"></div>
        <div>
          <h1 className="text-xl font-bold mb-4">Название услуги</h1>
          <p className="mb-4">
            loreReprehenderit in aliquip consectetur fugiat veniam esse tempor
            Lorem amet labore sit do et laborum. Laborum id laboris dolor tempor
            laborum duis nostrud et. Minim adipisicing cupidatat ad eiusmod
            tempor voluptate.
          </p>
        </div>
        <Button>Узнать больше</Button>
      </div>
    </>
  );
}

export default ServiceCard;
