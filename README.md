# React Firebase Template

Template destinado a projetos básicos que serão iniciados com firebase.

![react-firebase](https://miro.medium.com/max/3000/1*ytMIcp6uu6UIZpApG1LFYg.png)

## Utilizar

Para utilizar o projeto, acesse seu terminal e:
* `git clone https://github.com/GiovaniBiagi/react-firebase-template` para clonar o projeto;
* `cd react-firbease-template` para acessar o diretório do projeto;
* `yarn` ou `npm install` para instalar as dependências;
* `yarn start` ou `npm run start` para iniciar o projeto.

**Lembrete**: Antes de inicia-lo preencha o valor das variáveis de ambiente no arquivo `.env`, com os valores gerados no registro de sua aplicação no Firebase (https://firebase.google.com/docs/web/setup?hl=pt-br).

## Componentes

O diretório `Components` é destinados aos componentes básicos da aplicação. Existem alguns componentes básicos criados para o funcionamento básico do template, sendo eles:

* `Input` - Este input foi criado utilizando a biblioteca `unform da Rocketseat` (docs: https://unform.dev/). Para utilizar inputs customizados de outras libs, basta trocar a tag HTML `<input />` pelo input da lib desejada. O exemplo abaixo demonstra esta troca para um input do `Material-ui`:

* Formato atual
```jsx
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <>
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
            {error && <span>{error}</span>}
        </>
    )
}
```

* Utilizando Material-ui
```jsx
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextField } from '@material-ui/core';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <>
            <TextField ref={inputRef} defaultValue={defaultValue} {...rest} />
            {error && <span>{error}</span>}
        </>
    )
}
```

## Layouts

O diretótio `Layouts` foi criado para o armazenamento de layouts da aplicação.

* `Main` - Utilzado como layout principal da aplicação, responsável por renderizar as rotas e componentes internos da aplicação após o login.

## Services

Responsável por armazenar as configurações de serviços externos à aplicação.

* `api.js` - Configurações basicas da lib `axios` (docs: https://github.com/axios/axios#axios) para chamadas à APIs. Todas as configurações feitas neste arquivos estão disponíveis na documentação da lib.

* `HttpResponseErrorHandler.js` - Responsável pelo tratamento de erros das requests HTTP. Expemplo de tratamento básico:

```jsx
const HttpResponseErrorHandler = (error) => {
  switch (error.response?.status) {
    case 400:
      error.response.statusText = "Os dados que você digitou estão incorretos ou não existem.";
      throw error;
    case 503:
      error.response.statusText = "O serviço está temporariamente indisponível";
      throw error;
  }
}
    
export default HttpResponseErrorHandler;
```

* `HttpResponseSuccessHandler.js` - Responsável pelo tratamento de respostas bem sucedidas de requests HTTP. Exemplo de tratamento:

```jsx
const HttpResponseSuccessHandler = (response) => ({
    response,
    data: response.data,
});

export default HttpResponseSuccessHandler;
```

* `firebase.js` - Arquivo que contém o setup básico do firebase. Existe um pacote básico importado para o funcionamento básico deste template:

```jsx
import "firebase/auth";
```

para utilizar outros pacotes do firebase por exemplo `firebase/firestore` ou `firebase/storage` basta importa-los dentro deste arquivo.

## Views

Diretório que armazena as telas da aplicação.

* `index.js` - Arquivo de rotas das views.
* `constants` - Armazena as constants das views, mensagens estáticas, códigos de erro e etc.
* `validations` - Aramazena arquvios de validação de erros genéricos das views.
* `functions` - As funções utilizadas nas views estarão neste diretório, como exemplo ja criado, existe o arquivo `firebaseFunctions.js`, que contém as funções do firebase.
* `Dashboard` - Uma das views criadas para ser utilizada no sistema de rotas da aplicação.
* `Home` - Tela inicial da aplicação.
* `Login` - Login da aplicação.
* `Register` - Tela de registro da aplicação.
* `ResetPassword` - Tela para resetar senha.

## App.js

Arquivo que contém as rotas externas da aplicação como Login, ResetPassword e Register.

## global.css

Contém o estilo global da aplicação.

## Próximos passos

Os proximos passos planejados são:

* Adicionar testes utilizando `JEST + Enzyme`.
* Implementar `Typescript`.
