import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { UserInfo } from "../../components/userinfo";

import { Container, Column, Title, TitleHighlight} from "./styles";

  const Feed = () => {
    return (
      <>
        <Header autenticado = 'true' />
        <Container>
          <Column flex={3}>
              <Title>Feed</Title>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
          </Column>
          <Column flex={1}>
          <TitleHighlight>Ranking Semanal</TitleHighlight>
          <UserInfo percentual={90} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>
          <UserInfo percentual={35} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>
          <UserInfo percentual={76} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>
          <UserInfo percentual={80} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>
          <UserInfo percentual={54} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>
          <UserInfo percentual={67} name="Douglas Antonni" image='https://avatars.githubusercontent.com/u/127199046?v=4'/>

          </Column>
        </Container>
      </>
    );
  };
  
  export { Feed };
