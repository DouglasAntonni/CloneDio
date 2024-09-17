import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LockIcon, MailIcon } from "../../components/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { api } from "../../services/api";
import { IFormData } from "./types";
import {
  Column,
  Container,
  EsqueciButton,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper, ButtonCreateAccount 
} from "./styles";

const schema = yup
  .object({
    Email: yup.string().email("esse email não é válido").required("Campo obrigatório"),
    Password: yup.string().min(3, "no minimo 3 caracteres").required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({ resolver: yupResolver(schema),
    mode: 'onChange', 
   });
  
   const onSubmit = async (formData : IFormData) => {
    try {
      
      const {data} = await api.get(`users?email=${formData.Email}&password=${formData.Password}`);
      
      
      if (data.length === 1) {
        
        navigate("/feed");
      } else {
        
        alert('E-mail ou senha incorretos');
      }
    } catch {
      alert('Houve um erro, tente novamente');
      
    }
    
  };
  
const handleCreateAccount = () =>{
  navigate("/cadastro");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="Email"
                control={control}
                errorMessage={errors.Email?.message}
                placeholder="E-mail"
                lefticon={<MailIcon />}
              />
              <Input
                name="Password"
                control={control}
                placeholder="Senha"
                errorMessage={errors.Password?.message}
                type="password"
                lefticon={<LockIcon />}
              />
              <Button
                title="Entrar"
                variant="secundary"
                type="submit"
              />
            </form>
            <Row>
              <EsqueciButton>Esqueci minha Senha</EsqueciButton>
              <ButtonCreateAccount onClick={handleCreateAccount}>
                Criar Conta
              </ButtonCreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
