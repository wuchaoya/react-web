## 技术栈

react + redux + react-router + webpack + ES6/7 + fetch + styledComponents + flex + eslint

## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 建议高版本 我使用的
>  node -v v8.1.2
> npm -v 5.0.4
> yarn -v 0.27.5
> 由于新版本的npm不太稳定，就用了yarn做下载工具，用起来还不错
```

git clone https://github.com/wuchaoya/react-web.git  

cd react-web

npm install 或者 yarn

npm start 或者 yarn start

npm run build 或者 yarn run build

```

## 功能一览
- [√] react-router4.0路由跳转
- [√] rem+fetch页面宽高自适应
- [√] fetch数据跨域代理
- [√] 实时的webpack预览
- [√] eslint代码检测
- [√] styledComponents组件封装

## 项目结构
```
├── package-lock.json
├── package.json
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets //静态文件
│   │   └── bg.png
│   ├── common //公共方法
│   │   └── WebHost.js
│   ├── components //组件
│   │   ├── PlayGameButton.js
│   │   ├── PlayGameItem.js
│   │   ├── PlayGameText.js
│   │   ├── PureComponent.js
│   │   ├── TextComponent.js
│   │   ├── TitleComponent.js
│   │   └── playGameIcon.js
│   ├── constants
│   │   └── ActionTypes.js
│   ├── containers //容器
│   │   ├── BackgroundContainer.js
│   │   ├── CloudPlayContainer.js
│   │   ├── PlayGameContainer.js
│   │   └── PlayGameItemContainer.js
│   ├── data
│   │   └── gameDataList.js
│   ├── index.js //入口
│   ├── reducers
│   │   ├── PlayGame.js
│   │   └── index.js
│   ├── registerServiceWorker.js
│   ├── router
│   │   └── Base.js
│   ├── styles //样式
│   │   ├── colorStyle.js
│   │   └── cssRest.css
│   └── utils //工具
│       ├── HttpRequest.js
│       ├── HttpUitl.js
│       └── flexible.js
└── yarn.lock


```