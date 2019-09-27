## Aula 11 - Estilizando a listagem

Vamos estilizar a Listagem de usuários.

A listagem no RN é diferente da Web porque no RN não tem a tag ul e li e também não fazemos o map. O RN já tem um componente próprio para isso: FlatList.

No mesmo componente do index.js da Main, importamos mais componentes de estilização que criamos.

```
...
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Avatar,
  User,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
...
```

E adicionamos no final do `</Form>`:

```
 <List
   data={users}
   keyExtrator={user => user.login}
   renderItem={({ item }) => (
     <User>
       <Avatar source={{ uri: item.avatar }} />
       <Name>{item.name}</Name>
       <Bio>{item.bio}</Bio>
       <ProfileButton onPress={() => {}}>
         <ProfileButtonText>Ver perfil</ProfileButtonText>
       </ProfileButton>
     </User>
   )}
 />
```

É muito legal ver que os componentes React Native com apenas estilização, sem lógica, e ainda com estilização separada por componente.

Por fim criamos os componentes estilizados:
```
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #6159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
```

Destaque para o atributo:
```
 showsVerticalScrollIndicator: false,
```
Serve para o `FlatList` não mostar a barra de rolagem, dando uma experiência mais legal no app.

```
...
styled.Text.attrs({
	numberOfLines: 2,
})`
...
```

Serve para cortar o texto em duas linhas e colocar `...` no final.

Confira o resultado até aqui:

![Listagem de Usuários do Github](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/lista-dev-intro-rn.png?raw=true)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-11-estilizando-listagem](https://github.com/tgmarinho/intro-react-native/tree/aula-11-estilizando-listagem)
