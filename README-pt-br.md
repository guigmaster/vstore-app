# VStore App

Um maravilhoso aplicativo Ionic/Cordova para a API VStore.

## Traduções

Este README está disponível em outras linguas:

- [README](https://gitlab.com/vstore/vstore-app/blob/master/README.md) (English)

## Pré-requisitos

* [Nodejs](https://nodejs.org/en/download/) versão >= 8.11.3
* [Android Sdk](https://developer.android.com/studio/#download) Android Studio/Android SDK
* Ionic e Cordova - use o comando abaixo

```sh
  npm install -g ionic cordova
```

**Nota**: Em Unix like sistemas use *sudo* antes do comando

## Instalação

1 - Para instalar as dependências execute o comando abaixo

```sh
  npm install

  cordova prepare # instala cordova platforms e plugins
```

2 - Depois disso edite o arquivo *enviroment.ts* dentro do diretório **src/environments**

## Iniciando a aplicação web

Para iniciar a plaicação execute o comando abaixo

```sh
  npm start
```

## Rodando a aplicação em dispositivo android

Habilitar a depuração USB e o modo de desenvolvedor pode variar entre os dispositivos, mas é fácil procurar em uma pesquisa do Google. Você também pode fazer o download da [Ativação de opções de desenvolvedor](https://developer.android.com/studio/run/device#developer-device-options) no dispositivo nos documentos do Android.

```sh
  ionic cordova run android --device
```

## Compilando para produção

```sh
  ionic cordova run android --prod --release
  # ou
  ionic cordova build android --prod --release
```
