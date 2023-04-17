import Button from "../button";

function Navigation() {
  const menuItems = [
    { name: "Главная" },
    { name: "Услуги" },
    { name: "О компании" },
    { name: "Сертификаты" },
    { name: "Отзывы" },
  ];
  return (
    <nav className="text-white flex flex-row gap-5 align-middle max-xl:hidden">
      {menuItems.map((item, idx) => (
        <>
          <a
            key={idx}
            href="#"
            className="h-auto px-4 place-self-center py-4 relative after:transition-all after:delay-100 after:content-[''] after:absolute after:bottom-0 after:right-1/2 after:w-0 after:h-1 after:bg-yellow-600 hover:after:w-full hover:after:right-0 "
          >
            {item.name}
          </a>
        </>
      ))}
      <Button>Оставить заяку</Button>
    </nav>
  );
}

export default Navigation;
