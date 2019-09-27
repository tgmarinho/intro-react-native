## Aula 09 - Estilizando Formulário

Vamos desenvolver uma aplicação que consome a API Rest do Github, no formulário ele irá informar o nome do usuário e vamos pegar algumas informações desse usuário e salvar.

Para utilizar ícones no React Native temos que instalar uma lib:

```
yarn add react-native-vector-icons
```

Ela vem com vários ícons legais do MaterialIcons, Font Awesome, etc... pra ver todos [clique aqui](https://oblador.github.io/react-native-vector-icons/).

E com a versão do RN q estou `"react-native":  "0.61.1",`

**Não precisamos** fazer:

```
react-native link react-native-vector-icons
```

Mas [precisamos](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) entrar na pasta do `ios` e executar `pod install`, voltar `cd .. ` e executar `react-native run-ios` na raiz do projeto novamente.

Para utilizar precisamos importar no código, nesse caso estou importando do MaterialIcons.

```
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
```

Sim, esse `Icon.loadFont()`  é obrigatório, se você trocar o MaterialIcons por outra fonte por exemplo:  FontAwesome, esse loadFont() tem que ser chamado novamente, ou seja, é melhor deixar ele no código mesmo que você já tenha executado ele uma vez com uma outra fonte. Interessante colocar essa configuração em um arquivo de configuração, por exemplo: `loadFonts.js`.

E agora só aplicar o Icon no seu código:

```
...
<SubmitButton>
	<Icon name="add" size={20} color="#FFF" />
</SubmitButton>
...
```

O restante do código está no commit abaixo.

Fonte: [https://www.tgmarinho.com/utilizando-%C3%ADcones-no-react-native-ios/](https://www.tgmarinho.com/utilizando-%C3%ADcones-no-react-native-ios/)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-09-estilizando-formulario](https://github.com/tgmarinho/intro-react-native/tree/aula-09-estilizando-formulario)
