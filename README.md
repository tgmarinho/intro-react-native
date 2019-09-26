## Aula 05 - Configurando o Reactotron

Com React Native temos uma forma de debug com o `console.log` assim como temos no browser.

Só ir no emulador e e com cmd+d ou ctrl+d podemos clicar em debug, e podemos debugar a aplicação no navegador.

Mas no React Native é muito ruim debugar a aplicação desse jeito.

Uma alternativa é utilizar um debugger externo,  o [Reactotron](https://github.com/infinitered/reactotron) que tem uma integração muito com com `console.log`, para aplicações com React e também com Redux, Saga. E sua interface gráfica é muito bonita e rápida. Vale muito a pena utilizar. Funciona na web também, mas não faz muito sentido, apenas se utilizar o Redux, ai faz mais sentido e também vai do gosto do desenvolvedor.

Para instalar basta acessar o repositório oficial do [Reactotron](https://github.com/infinitered/reactotron/releases) e fazer o download do Reactotron.app na sua máquina (linux, windows ou mac).

E para baixar a biblioteca de integração com nosso projeto, executamos no terminal:

```
yarn add reactotron-react-native
```

Tem que ser instalado como dependência de projeto mesmo.

Depois de instalar podemos criar uma pasta `src` e dentro de la uma outra pasta `config` e adicionar um arquivo `ReactotronConfig.js` para configurar o Reactotron.

```
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '127.0.0.1' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

```

Isso faz com que o Reactotron só funcione em modo de desenvolvimento.
```
if (__DEV__) {...
```

Porém para o eslint não ficar reclamando, temos que declarar essa variavél como global no arquivo `.eslintrc`:

```
...
 globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
...
```

Criamos uma propriedade `tron` dentro do console com as configurações do reactotron para podermos utilizar sem precisar importar em cada código, basta chamar o `console.tron.log('meu log aqui');` e o log será exibindo da interface do Reactotron.
```
console.tron = tron;
```

Toda vez que o Reactotron reinicia eu limpo os logs anteriores, isso não é obrigatório, só por gosto mesmo.
```
 tron.clear();
```

Se estiver usando o emulador do celular tem que passar o `host: 'com_seu_ip_192....'`

```
Reactotron.configure({ host:  '127.0.0.1' })
```

Se estiver no emulador do Android tem que rodar no terminal:
```
adb reverse tcp:9090 tcp: 9090
```

O adb tem que estar na variável de ambiente,  ou pode ir:

```
~/Android/Sdk/platform-tools/adb reverse tcp:9090 tcp: 9090
```

E agora para utilizar mesmo, precisamos chamar a configuração e pode ser no `index.js` que é o `App.js` que renomeie e coloquei na raiz da pasta `src`:

```
import React from  'react';
import { SafeAreaView, StyleSheet, Text } from  'react-native';

import  './config/ReatotronConfig';

console.tron.log('TESTANDO A CONFIG DO REACTTRON')
console.tron.log('TESTANDO A CONFIG DO REACTTRON', 2  +  3);
...
```

![IMAGEM DO REACTOTRON](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/rn-reactotron.png?raw=true)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-05-configurando-reactotron](https://github.com/tgmarinho/intro-react-native/tree/aula-05-configurando-reactotron)
