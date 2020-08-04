import React from "react";
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/flopflix.png";
import "./Menu.css";
import Button from "../ButtonStyled";

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Flopflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>

    </nav>
  )
}
export default Menu


