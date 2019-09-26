## Aula 06 - React Navigation

Vamos utilizar o React Navigation para configurar as rota da nossa aplicação de navegação entre telas.

Para utilizar navegação no projeto, precisamos instalar algumas bibliotecas externas do React Native.

```
yarn add react-navigation react-native-gesture-handler react-native-reanimated
```

`react-native-gesture-handler`:  serve para trabalhar com gestos na aplicação

`react-native-reanimated`: serve para fazer animação nas transições das navegações.

No Android precisamos fazer algumas configurações após a instalação do `react-native-gesture-handler`, veja a [doc](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html):

No arquivo a`android/app/src/main/java/com/SEUPROJETO/MainActivity.java` temos que fazer as seguinte configuração:

```
package com.reactnativegithubapi;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNativeGithubAPI";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

Salvar o arquivo, e se estiver no emulador do Android só rodar:

```
react-native run-android
```

Ou se estiver rodando emulador no iOS, tem que acessar a pasta: `ios`, e executando o comando:

```
pod install
```

Para instalar as dependências nativas, no Android isso é automático.

Depois rodar:

```
react-native run-ios
```

E aguardar finalizar a build!

Adicionaremos também outra lib, pois tivemos um update no react-navigation que removeu o stack de suas rotas e deixou em uma lib separada:

```
yarn add react-navigation-stack
```

Vamos criar um arquivo `src/routes.js`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;

```

`createAppContainer`:  É como se fosse o BrowserRouter do react-router-dom, que contém as configurações para o roteamento funcionar independente do tipo da rota que estivemos utilizando. Ele engloba todas as rotas.

`createStackNavigator`: Contém um tipo de configuração de rota, ele criar automaticamente um header, e dá para perceber visualmente. mais fácil demonstrar no emulador. Ela é um tipo de navegação de stack (pilha), toda vez que o usuário clica em uma rota, ele vai voltando para a rota anterior que fica salva em um tipo de pilha, a última rota acessada vai ser acessada novamente se o usuário clica no botão voltar por exemplo. CreateStackNavigation é a navegação em pilha, as rotas ficam em background, não são removidas.

Temos também:

```
import { createAppContainer, createSwitchNavigator } from  'react-navigation';
...
```

`createSwitchNavigator`:  Ele não dá nenhum feedback visual, como o createStackNavigator mostra um header por exemplo. Ele não cria a pilha de rota, se ele navegar da página user para página main, a user é deletada, só se navegar novamente para a rota user para ela existir.

Podemos instalar tambem outra rota:

```
yarn add react-navigation-tabs
```

E utilizar no projeto:

```
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createBottomTabNavigator`: Também dá um efeito visual, mostrando um footer, com as rotas em baixo, com o nome das rotas.

```
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createMaterialTopTabNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createMaterialTopTabNavigator`: Também da um efeito visual, mostrando no header, o nome das rotas e usa uma cor por padrão, no emulador do iOS tem que configurar um SafeView para mostrar corretamente, no Android já fica certo automaticamente até porque o MaterialUI é do Google, assim como o Android, então a integração fica melhor.

Podemos utilizar também react-navigation-drawer, precisamos instalar:

```
yarn add react-navigation-drawer
```
E utilizar:

```
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createDrawerNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createDrawerNavigator`: Dá um efeito visual também, onde o usuário pode tocar o dedo no canto esquerdo e arrastar para poder ver as rotas da aplicação.

Na aplicação de exemplo iremos utilizar o `createStackNavigator`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
```

Para adicionar um título no header da rota main, precisamos ir no arquivo Main.js:

```
// ... no final do arquivo adicionar
Main.navigationOptions = {
	title:  'Usuários',
};
```

E para configurar as rotas para seguir um padrão em todos os sistemas operacionais, podemos passar algumas configurações como segundo paramêtro do `createStackNavigator`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
```

`headerLayoutPreset` = garante que o título sempre fica no centro.

`headerBackTitleVisible` = Faz com que mostre apenas a "flechinha" de voltar e não a fecha + o título da rota.

`defaultNavigationOptions` = são opções padrões do NavigationOptions, que podemos passar: `headerStyle`, que recebe um `backgroundColor` para cor de fundo. E outra propriedade `headerTintColor` que é a cor das fontes.

Pronto, agora vamos estilizar a página `Main.js`.

Para complementar, leia o artigo: [navegacao-react-native](https://blog.rocketseat.com.br/navegacao-react-native/) da Rocketseat que está excelente e com imagens e gifs para exemplificar melhor.


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-06-react-navigation](https://github.com/tgmarinho/intro-react-native/tree/aula-06-react-navigation)
