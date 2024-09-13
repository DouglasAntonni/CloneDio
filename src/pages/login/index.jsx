// src/pages/login/index.jsx
import { LockIcon, MailIcon } from "../../components/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
      navigate('/feed');
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" lefticon={<MailIcon />} />
              <Input placeholder="Senha" type="password" lefticon={<LockIcon/>} />
              <Button title="Entrar" variant="secundary" onClick={handleClickSignIn} type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha Senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
