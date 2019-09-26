## Aula 04 - ESLint, Prettier e EditorConfig

Vamos configuar as ferramentas para manter um guia de estilos, e padrão de código no projeto.

Para criar o `editorConfig` no VSCode basta clicar com botão direito na raiz do projeto e clicar em `generate .editorConfig`  e fazer só alguns ajustes:

```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Eslint

Instalar eslint:

```
yarn add eslint -D
```

E no terminal executar:

```
yarn eslint --init
```

E configurar, conforme abaixo:

```
❯ yarn eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? None
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
? Would you like to install them now with npm? Yes
```

Depois só remover o arquivo package-lock.json pois estamos usando apenas o yarn. e Depois no terminal executar o comando yarn para atalizar as dependências no yarn.lock.

Se ocorrer algum erro no emulador, não tem problema, pode deixar assim por enquanto.

Vamos instalar mais algumas extensões para configurar no eslint.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Pronto, agora podemos configurar o `.eslintrc.js`.

```
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react', // integração do prettier com react
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint', // para enteder as ultimas versões do Ecma Script
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier', // adicionando mais um plugin
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off', // para garantir que import/export sem ser apenas o i/e default
  },
};
```

E também criaremos o arquivo `.prettierrc` para definir mais algumas [regras](https://prettier.io/docs/en/options.html), :

```
{
	"singleQuote":  true,
	"trailingComma":  "es5"
}
```
Agora toda vez que salvarmos o arquivo o prettier irá trocar as aspas duplas por simples e adicionar `,` em objetos e arrays.

Pronto, agora no App.js você vai ver alguns errinhos e só ajustar conforme a regra do `airbnb` que está no `.eslintrc.js`.

Se depois de toda essa configuração,  o seu projeto apresentar algum erro, basta você fechar a janela do Metro Bundler, e no terminal rodar o comando:

```
react-native start --reset-cache
```

E com isso o Metro Bundler vai abrir novamente  e a aplicação deve voltar a funcionar.

Grande partes dos problemas são resolvidos executando os comandos:

1 - Sempre resolve na grande maioria das vezes.
```
react-native start --reset-cache
```

ou

2 - Se tiver algum erro que com o passo anterior não resolveu, então rode esse comando, para reinstalar o app no seu emulador novamente.
```
react-native run-ios
```

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-04-eslint-prettier-editor-config](https://github.com/tgmarinho/intro-react-native/tree/aula-04-eslint-prettier-editor-config)
