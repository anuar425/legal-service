function Footer() {
  return (
    <>
      <footer className="footer bg-neutral-800 text-white">
        <div className="container mx-auto ">
          <div className=" pt-24 pb-16 flex gap-20">
            <div className="basis-4/12">
              <h1 className="text-4xl font-bold mb-6">Logo</h1>
              <p className="mb-6">
                Veniam in aliqua est eiusmod consequat anim. Ullamco pariatur
                dolor enim commodo velit duis cillum exercitation aliquip Lorem
                veniam amet.{" "}
              </p>
              <div className="flex gap-4">
                {new Array(3).fill(1).map((item) => (
                  <>
                    <div className=" h-8 w-8 bg-gray-400 rounded-full"></div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className=" font-semibold text-lg mb-2">Меню</h5>
                <ul className="flex flex-col gap-2">
                  <li>Главная</li>
                  <li>Услуги</li>
                  <li>О компаний</li>
                  <li>Сертификаты</li>
                  <li>Отзывы</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" border-t py-6 text-center">
            <p>Footer text</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
