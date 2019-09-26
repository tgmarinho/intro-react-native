## Aula 07 - Configurando StatusBar

A [Status Bar](https://facebook.github.io/react-native/docs/statusbar) é onde aparece o horário a o status da bateria do celular, e por padrão ela vei preto no iOS, no Android cinza.
E dependendo do seu layout é interessante que ela fique com outra cor, por exemplo branco.

Para utilizar bastar importar `StatusBar` do propróio `react-native`:

`src/index.js`:

```
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReatotronConfig';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
  </>
);

export default App;
```

E poderemos ver que o [StatusBar](https://facebook.github.io/react-native/docs/statusbar) ficou branco no emulador, a hora, barra do wifi e da bateria.

Para o Android a gente passa essa configuração a mais:
```
backgroundColor="#7159c1"
```

tem outras propriedades também, só apertar cmd ou ctrl + espaço no componente para ver as opções.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-07-configurando-statusbar](https://github.com/tgmarinho/intro-react-native/tree/aula-07-configurando-statusbar)
