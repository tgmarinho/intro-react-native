## Aula 14 - Realizando navegação

Agora, vamos trabalhar com navegação entre rotas, quando o usuário clicar em um botão, vamos redirecionar para outra rota, no nosso app, quando clicar em `VER PERFIL` vamos para outra tela.

No arquivo de `routes.js` no método `createStackNavigator` onde configuramos as rotas da aplicação, ele cria uma `prop` chamada `navigate`.

E a partir dessa prop `navigate` que chamamos as rotas, pois no React Native, não tem um tag `<a href>`  do `html (jsx)` ou `Link` do `react-router-dom`.

Então no botão `ProfileButton` no método `onPress`  passamos o usuário como referência para uma nova função que vai lidar com a navegação:

```
...
<ProfileButton  onPress={() =>  this.handleNavigate(item)}>
...
```

A função `handleNavigate` recebe o usuário, e nós desetruturamos a prop `navigation` de dentro das props e essa prop veio do `routes.js` lá do método `createStackNavigator`. Pegamos o usuário e chamamos a função `navigate` informando a rota `User` que o `routes.js` conhece e passamos os dados do usuário como um objeto:

```
...
  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };
  ...
```

E por fim fazemos que a página `Users.js` receba os parametros que está no navigation:

```
...
export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));
  return <View />;
}
...
```
Acessamos os dados chamando a função `getParam` passando a mesma chave `user` que usamos anteriormente.

Pronto, agora os dados do usuário estão logando no Reactotron.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-14-realizando-navegacao ](https://github.com/tgmarinho/intro-react-native/tree/aula-14-realizando-navegacao )
