# VStore App

An awesome Ionic/Cordova application for VStore API.

## Translations

This README is also available in other languages:

- [LEIAME](https://gitlab.com/vstore/vstore-app/blob/master/README-pt-br.md) (Brazilian Portuguese)

## Prerequisites

* [Nodejs](https://nodejs.org/en/download/) version >= 8.11.3
* [Android Sdk](https://developer.android.com/studio/#download) Android Studio/Android SDK
* Ionic and Cordova - use bellow command

```sh
  npm install -g ionic cordova
```

**Note**: In Unix like system use *sudo* before command

## Install

1 - To install the dependencies run below command

```sh
  npm install

  cordova prepare # install cordova platforms and plugins
```

2 - After that edit *enviroment.ts* file inside **src/environments** folder

## Start application web

To start the application run below command

```sh
  npm start
```

## Running application on android device

Enabling USB debugging and Developer Mode can vary between devices, but is easy to look up with a Google search. You can also check out [Enabling On-device Developer Options](https://developer.android.com/studio/run/device#developer-device-options) in the Android docs.


```sh
  ionic cordova run android --device
```

## Production for Build

```sh
  ionic cordova run android --prod --release
  # or
  ionic cordova build android --prod --release
```
