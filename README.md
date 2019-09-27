## Aula 10 - Acessando API do Github

Quando o usuário digitar o nome de usuário e clicar no botão ok, temos que pegar os dados dele no github.

Como precisamos gerenciar estados, precisamos converter o stateless component para statefull component usando class ou hooks, nesse primeiro momento vamos usar class.

Como vamos consultar um API externa, então vamos utilizar o axios:

```
yarn add axios
```

Vamos criar uma pasta `services` dentro da pasta `src` e depois configurar a baseUrl da api do github e exportar para podermos fazer as chamadas get.

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

Depois adicionamos duas variáveis de estado, newUser para pegar o valor digitado e a users para poder armazenar os usuários.

Crio o método que é chamando quando o usuário clica em `send` ou clica no botão enviar `+`.
Nele pego o usuário digitado e passo para a chamada a api do github, que retorna uma promisse resolvida com os dados no `response`, enfim pego os dados do `response` e guardo no objeto `data`, o qual utilizo para colocar no array de users, criando um novo array passando os valores antigos pelo spred operation e passo o novo valor como segundo parâmetro, e limpo a variável `newUser` para poder digitar novamente.

```
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

Icon.loadFont();

class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({ users: [...users, data], newUser: '' });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};

export default Main;
```

Esse código server para fechar o teclado após a operação do método.
```
Keyboard.dismiss();
```

```
// armazena o valor do newUser
value={newUser}
// a cada alteração no texto é salvo no estado com o novo valor do text
onChangeText={text => this.setState({ newUser: text })}
// Para o teclado virtual poder submeter o formulário
returnKeyType="send" //
// Quando clicar em send chamar essa função
onSubmitEditing={this.handleAddUser} //
```
```
  // Chama a função para adicionar o usuário
  <SubmitButton onPress={this.handleAddUser}>
```

Vale ressaltar que toda a chamada a API, o Reactotron faz o log exibe o status e os dados de resposta da requisição, sem precisar ter que colocar o `console.tron.log`.


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-10-acessando-api-github](https://github.com/tgmarinho/intro-react-native/tree/aula-10-acessando-api-github)
