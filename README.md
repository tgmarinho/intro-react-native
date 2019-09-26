## Aula 08 - Styled Components

O Styled Component funciona quase 100% como na Web, salvo algumas alterações. Essa lib é full javascript, então só instalar no projeto com RN e usar.

```
yarn add styled-components
```

Depois de instalar, basta criar um arquivo: `styles.js`:

```
import styled from  'styled-components/native';

export  const Container = styled.View``;
```

Mudou que agora temos que importar o `/native` e também não temos uma `div` e sim uma `View`.  Temos que usar as tags nativas do React Native.

Motivo de usar Styled Component  é poder escrever o CSS igual eu escrevo na web e também reaproveitar o CSS de uma aplicação React  em um app com React Native e apenas mudar os componentes, a mudança é bem menor. E no RN algumas propriedades de estilização são diferentes da web normal mesmo usando o CSS in JS com StyleSheet.

No React Native não tem estilização global igual temos na web, onde estilizamos o body, a div, h1, p no reset. Não tem como estilizar só pelo nome da tag.

O que podemos fazer é criar pequenos componentes e reutilizar em vários lugares.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-08-styled-components](https://github.com/tgmarinho/intro-react-native/tree/aula-08-styled-components)
