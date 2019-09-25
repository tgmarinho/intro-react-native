
## Aula 03 - Criando um projeto

Para criar um projeto com React Native podemos, instalar o [react-native-cli](https://github.com/react-native-community/cli) e podemos usar o npx também.

Para instalar usando o CLI, basta instalar o react-native-cli de forma global na máquina:

```
yarn add react-native-cli 
```

E para criar o projeto só executar:

```
react-native init NomeDoProjeto
```

Ou se quiser usar o [npx](https://walde.co/2018/02/15/conhecendo-o-npx-o-package-runner-npm/):

```
npx react-native init MyAwesomeApp
```

E depois de criar o projeto, no cosole já mostra o que você deve fazer, então, pode entrar na pasta do projeto, e rodar o emulador: 

- iOS
```
react-native run-ios
```

- Android, o emulador tem que estar aberta antes de rodar o comando.
```
react-native run-android
```

O processo pode demorar bastante dependendo da configuração da sua máquina. Bora tomar um chá sem açucar!

Quando emulador abrir, você vai ver que abrirá uma janela com o Metro Bundler, ela deve ficar minimizada.

Na Doc da Rocketseat tem um Menu de [Erros Comuns](https://docs.rocketseat.dev/ambiente-react-native/errors/ios), que pode ajudar a resolver alguns problemas na execução do projeto.

Se o Metro Bundler não abriu, ou se você fechou sem querer, você pode abrir novamente, basta rodar o comando:

```
react-native start
```

Se a aplicação já foi instalada, não precisa executar `react-native run-ios` novamente, bastar executar `react-native start`.


Abrindo o projeto no VSCode, o arquivo principal de é o App.js onde contém a primeira tela da aplicação.


E podemos editar o arquivo para ficar mais simplificado:

```
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao RN</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
```

Podemos perceber que não temos div, nem h1, mas a View é como se fosse uma div e Text é como se fosse um h1, p, h2, etc.

O React Native utiliza o FlexBox para posicionar elementos.

Por padrão todos os elementos do RN tem flex-direction column por padrão, um elemento em baixo do outro. Que está certo, pois geralmente a tela é menor e um elemento fica embaixo do outro.

E a estilização é feita com CSS in JS escrevendo em camelCase e trocando `,` por `;`.

A escrita de código de React para Web e para Native é bem semelhante com poucas diferenças o que faz com que fica fácil alguém que já saiba ReactJS trabalhar com React Native.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-03-criando-projeto](https://github.com/tgmarinho/intro-react-native/tree/aula-03-criando-projeto)