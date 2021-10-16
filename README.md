# online-dating-app

## 概要

オンラインの学習プラットフォームであるRecursion内での課題作品。  
簡易なチャットアプリです。[外部API](https://randomuser.me/)を用いてランダムなユーザーを表示し、それぞれのユーザーに対してメッセージを送信することができる。今回はこちらからメッセージを送信すると自動で特定のメッセージが相手から送信される仕様にした。

Vue Cliを用いて開発を行った。状態管理、ルーティングはそれぞれvue.jsのVuex、Routerを用いて行い、SPAとした。

実装は基本的に自力で行い、不明点が出た際は書籍やQiitaの記事を参考に実装を行なった。

## ページ構成

* ユーザー一覧ページ
* ユーザー詳細ページ(ユーザーの詳細情報を閲覧機能)
* ユーザーごとのチャットページ(メッセージのやりとり機能)
* メッセージ履歴一覧ページ(メッセージのやりとりをしたユーザーの履歴を閲覧機能)

## URL

https://tomo1818.github.io/OnlineDatingApp/

## 使用言語

* HTML
* CSS
* JavaScript  

## フレームワーク

* Vue.js
  * Router
  * Vuex
* Bootstrap

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
