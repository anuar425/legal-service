function Sertificate() {
  return (
    <>
      <section className="sertificate">
        <div className="container mx-auto py-24 max-xl:px-10">
          <h3 className="text-4xl font-bold mb-16 text-center">Сертификаты</h3>
          <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {new Array(4).fill(1).map((item) => (
              <>
                <div className="  h-56 w-full bg-gray-100 "></div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sertificate;
