import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LockIcon, MailIcon, PersonIcon } from "../../components/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper 
} from "./styles";

const schema = yup
  .object({
    NomeCompleto: yup.string().min(3, "O nome deve ter no mínimo 3 caracteres").required("Campo obrigatório"),
    Email: yup.string().email("esse email não é válido").required("Campo obrigatório"),
    Password: yup.string().min(3, "no minimo 3 caracteres").required("Campo obrigatório"),
  })
  .required();

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema),
    mode: 'onChange', 
   });
  
   const onSubmit = async (formData) => {
    try {
      
      const { data: existingUser } = await api.get(
        `users?email=${formData.Email}`
      );
  
      if (existingUser.length > 0) {
        alert('Este e-mail já está registrado. Tente outro e-mail.');
        return;
      }
  
      
      await api.post('users', {
        nomeCompleto: formData.NomeCompleto,
        email: formData.Email,
        password: formData.Password
      });
        navigate("/feed");
    } catch {
      alert('Houve um erro, tente novamente');
    }
  };
  
  

 

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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="NomeCompleto"
                control={control}
                placeholder="Nome Completo"
                errorMessage={errors.NomeCompleto?.message}
                lefticon={<PersonIcon />}
              />
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
                title="Criar minha conta"
                variant="secundary"
                type="submit"
              />
            </form>
            <Row>
              <p>

              </p>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
