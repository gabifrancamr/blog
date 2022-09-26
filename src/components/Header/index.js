import "./styles.css";
import mainImage from "../Header/ajuste2.jpg"

function Header(){
    return (
        <header>
        <h1>Meu Blog!</h1>
        <img src={mainImage} alt="Imagem de um óculos e um livro"/>
      </header>
    )
}

export default Header;