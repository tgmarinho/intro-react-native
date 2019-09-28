## Aula 13 - Salvando no Storage

Vamos salvar os dados do usuário no stoage do celular, de forma que podemos consultar os valores diretamente do celular se ficarmos sem internet poderemos pegar esses dados, deletar, sem problema algum.

Primeiro vamos instalar a lib:
```
yarn add @react-native-community/async-storage
```

Depois rodar os comandos:

para iOS:
```
cd ios && pod install & cd ..
react-native run-ios
```
e no Android:
```
react-native run-android
```

`AsyncStorage` é semelhante ao LocalStorage do nagegador, e ele é assíncrono então temos que usar `async/await` do Javascript.


Não tem um tamanho limite para salvar no `AsyncStorage`, na verdade dependendo da capacidade de armazenamento do celular do usuário, enquanto estiver espaço em disco, pode armazenar os dados.

Para utilizar é muito simples, basta importar:

```
import AsyncStorage from  '@react-native-community/async-storage';
```

Criar uma constante que armazena uma chave, pois o AsyncStorage é um banco de dados em SQLITE3 ou [https://rocksdb.org/](https://rocksdb.org/) no Android que utiliza chave e valor.

```
const KEY_ASYNC_STORAGE =  '@intro-rn:users:key';
```

E igual na web, utilizamos o ciclo de vida do React:

Sempre que atualizar o estado do array de users, se tiver alteração então altera o valor da chave `KEY_ASYNC_STORAGE` passando o novo array com o dado já atualizado, aqui nesse caso não é imutável, realmente alteramos o valor sem ter que fazer cópia do array, etc, que nem no `this.setState`.

```
  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem(KEY_ASYNC_STORAGE, JSON.stringify(users));
    }
  }
```

E quando fazemos um refresh ou saimos e voltamos para a tela de usuários e componente é montado, então nós buscamos do `AsyncStorage` os dados da chave `KEY_ASYNC_STORAGE` e preenchemos ela no estado de `users`.

```
 async componentDidMount() {
    const users = await AsyncStorage.getItem(KEY_ASYNC_STORAGE);
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }
```

Pronto, agora já temos os dados salvos e podemos alterar, remover, ou adicionar mais, porém em outra chave.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-13-salvando-no-storage](https://github.com/tgmarinho/intro-react-native/tree/aula-13-salvando-no-storage)
