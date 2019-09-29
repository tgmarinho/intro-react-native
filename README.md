## Aula 16 - Listando favoritos

Agora vamos estilizar a página que lista os repositórios favoritos dos usuários.

O trabalho aqui, basicamente é apena de estilização:

Criou o arquivo `styles.js` dentro da pasta `User`

Importo os novos componetes estilizados na `index.js` do User:

```
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Author,
  Title,
} from './styles';
```

E no método render monto a tela utilizando os componentes:

```
render() {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
```

Detalhe que estamos utilizando a `FlatList` para poder exibir uma lista dinâmica e *escrolável*.

Pronto, agoara só falta o desafio, que será apenas para refinar a aplicação.

Veja abaixo o resultado final até aqui:

![It's working](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/react-native-aula-16.gif?raw=true)

Algumas imagens:

![Tela de Usuários](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/list-users-intro-rn.png?raw=true)

![Tela de Repositórios](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/list-repos-starred-intro-rn.png?raw=true)

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-16-listando-favoritos](https://github.com/tgmarinho/intro-react-native/tree/aula-16-listando-favoritos)

