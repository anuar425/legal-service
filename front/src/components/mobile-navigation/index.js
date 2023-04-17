import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../button";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import CloseIcon from "@icons/close-outline";

const overlayVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const navigationVariant = {
  hidden: {
    right: "-100%",
  },
  visible: {
    right: "0%",
  },
  exit: {
    right: "-100%",
  },
};

function MobileNavigation({ toggle, visible }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const menuItems = [
    { name: "Главная" },
    { name: "Услуги" },
    { name: "О компании" },
    { name: "Сертификаты" },
    { name: "Отзывы" },
  ];

  const overlayRef = useRef();
  const closeButtonRef = useRef();

  const closeMenu = (event) => {
    console.log(event.target === closeButtonRef.current);
    if (
      event.target === closeButtonRef.current ||
      event.target === overlayRef.current
    ) {
      toggle();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [visible]);

  if (isBrowser) {
    return createPortal(
      <AnimatePresence initial={false} mode="wait">
        {visible ? (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={overlayVariant}
            style={{ background: "rgba(75, 85, 99, 0.5)" }}
            className="overlay fixed top-0 left-0 bottom-0 right-0 hidden max-xl:block z-10"
            onClick={closeMenu}
            ref={overlayRef}
          >
            <motion.nav
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              variants={navigationVariant}
              className="absolute text-white bg-slate-800 h-full overflow-y-scroll right-0 top-0 flex flex-col justify-center w-8/12 max-sm:w-full "
            >
              <div
                className="w-10 h-10 fixed top-4 right-4"
                ref={closeButtonRef}
                onClick={closeMenu}
              >
                <CloseIcon
                  className="fill-white w-8 h-8"
                  ref={closeButtonRef}
                />
              </div>
              <div className="flex flex-col gap-5 py-20 mx-20">
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
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.getElementById("__next")
    );
  } else {
    return null;
  }
}

export default MobileNavigation;
