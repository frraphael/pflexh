import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { IoIosCall, IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer id="footer" className="bg-red-900 md:flex md:justify-around mx-auto p-4 text-sm">
      <div className="flex flex-col items-center ">
        <div className="bg-red-800 py-2 px-24 text-xl font-blackJ">
          <h2>PFLEXH</h2>
        </div>
        <p>Projetando sonhos que duram para sempre!</p>
        <div className="flex items-center">
        <IoIosCall className="mr-2" />
        <p>+55 (11) 94575-9732</p>
        </div>
        <div className="flex items-center">
        <IoMdMail  className="mr-2" />
        <p>contato@pflexh.com.br</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Siga-nos:</p>
          <div className="flex text-4xl gap-4 py-4">
            <a href="https://www.facebook.com/profile.php?id=100066932070894"><IoLogoFacebook /></a>
            <a href="https://www.instagram.com/pflexh/"><IoLogoInstagram /></a>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <p className="bg-red-950 p-2 text-xs">
          2023 - Desenvolvido por Little Robot Studio. &copy;PFLEXH, todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
