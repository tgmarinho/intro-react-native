## Aula 15 - Buscando dados da API

Quando usuário clicar em VER PERFIL o componente de usuário vai mostar o perfil do usuário e vamos buscar os repositórios que o usuário favoritou dando *start*.

Primeiro vamos mostar o header com o nome do usuário.

```
static navigationOptions = ({navigation}) => ({
  title: navigation.getParam('user').name
});
```

[navigationOptions](https://reactnavigation.org/docs/en/headers.html) é um atributo estático que serve para colocarmos um title no header da tela navegada, entre outras opções.

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
// import { Container } from './styles';
import api from '../../services/api';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    return <View />;
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
```

Declaramos o `componentDidMount` como metódo async porque depois de montar a tela, o método vai ser chamado pelo React e vai chamar a api do github para buscar os repositórios que o usuário favoritou.

Por fim, apenas verificamos no Reactotron se a API foi chamada, detalhe que não tem o `console.tron.log`, pois quando é feita um chamada a API o Reactotron já faz o log pra gente *automágicamente*.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-15-buscando-dados-da-api](https://github.com/tgmarinho/intro-react-native/tree/aula-15-buscando-dados-da-api)
