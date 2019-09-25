## Primeiro Projeto com React native

## Aula 01 - Conceitos do React Native

### O que é React Native?
- Versão do React para o Desenvolvimento Mobile, como o React serve para criar interfaces, o RN é uma lib que permite a criação de interfaces para o dispositivo móvel para Android e iOS. Porém tem algumas diferenças com ReactJS.
- Ele é multiplataforma, então podemos escrever o mesmo código para iOS e para Android, e podemos ainda manipular algumas particularidades entre os SO.
- O React Native pega toda a interface construída e converte para Java e ObjectC, ou seja, é você não usa uma webview, mas sim os componentes nativos do sistema operacional que estiver utilizando, o que deixa a experiência de usuário muito melhor e performática.
- O código não é transpilado, o código vai para uma dependência chamada JSCore o que torna possível escrever código em javascript.
- A Microsoft tem mais de 40 apps construído com React Native.

### Arquitetura

Como o RN consegue converter o código JS em interface nativa?

O código Javascript passa para uma ferramenta chamada Metro Bundler (packager) que fica monitorando todo o código javascript e ele pega todo o nosso código, e gera o bundle.js. O Metro Bundler é comparado ao Webpack da Web. O Bundle gerado é repassado para a Bridge, que é a ponte de comunicação entre o código javascript e o código javascript, a Bridge vai transformar o que precisa da interface do bundle para Android e iOS, Java para ObjectiveC.

imagem da arquitetura


### Sintaxe

pegar do slide

- A declaração de componentes é igual ao da web
- Não usamos html e sim componentes próprios
- Aplicamos estilo sem classes ou IDs
- Todo texto é o <Text /> não existe estilização própria
- Para criar estilos temos que usar StyleSheet e usar CSS in JS
- Mas podemos usar styled-components/native
- [Yoga](https://github.com/facebook/yoga) é responsável de converter o CSS para ObjectiveC e Java


### O que é EXPO? 

- SDK com um conjunto de funcionalides prontas para usar (câmera, vídeo, integrações);
- Não precisa configurar emulador, ele tem um app Expo e você baixa o seu app de lá, o App fica no App do Expo. 
- Simplifica bastante o desenvolvimento

Geralmente não é bom utilizar, pois limita o controle do código nativo, se precisar mexer no java ou objectiveC não é possível com Expo;
Várias libs nào tem suporte ao Expo;
