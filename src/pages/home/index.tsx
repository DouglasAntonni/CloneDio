import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import  BannerImage  from "../../assets/banner.png";
import { Container, TitleContent, Title, TitleHighLight } from "./styles";

  const Home = () => {

      const navigate = useNavigate();
      const handleClickSignIn = () => {
          navigate('/login');
      }

    return (
      <>
        <Header />
        <Container>
          <div>
              <Title> 
              <TitleHighLight>
                  Implemente
                  <br />
              </TitleHighLight>
                  O seu futuro global agora!
              </Title>
              <TitleContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                desafio profissional, evoluindo em comunidade com os melhores experts.
              </TitleContent>
              <Button title="Começar Agora" variant="secudary" onClick={handleClickSignIn}/>
          </div>
          <div>
            <img src={BannerImage} alt="imagem Principal" />
          </div>
        </Container>
      </>
    );
  };
  
  export { Home };
