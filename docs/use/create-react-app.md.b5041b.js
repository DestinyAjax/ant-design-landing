(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{931:function(n,a){n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," 是业界最优秀的 React 应用开发工具之一，本文会在 create-react-app 创建的工程中使用 Ant Design Landing 的模板。"],["p","使用 demo 地址请查看 ",["a",{title:null,href:"https://github.com/ant-motion/landing-create-react-app-example"},"landing-create-react-app-example"],";"],["h2","安装与初始化"],["p",["code","create-react-app"]," 的安装和初始化请查看 ",["a",{title:null,href:"https://github.com/facebook/create-react-app"},"create-react-app"]," 或者查看 antd 的 ",["a",{title:null,href:"https://ant.design/docs/react/use-with-create-react-app-cn#%E5%AE%89%E8%A3%85%E5%92%8C%E5%88%9D%E5%A7%8B%E5%8C%96"},"use-with-create-react-app"],";"],["p","安装完成后，目录结构:"],["pre",{lang:null,highlighted:'├── README<span class="token punctuation">.</span>md\n├── node_modules\n├── package<span class="token punctuation">.</span>json\n├── <span class="token punctuation">.</span>gitignore\n├── public\n│   ├── favicon<span class="token punctuation">.</span>ico\n│   ├── index<span class="token punctuation">.</span>html\n│   └── manifest<span class="token punctuation">.</span>json\n│── src\n│   ├── App<span class="token punctuation">.</span>css\n│   ├── App<span class="token punctuation">.</span>js\n│   ├── App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n│   ├── index<span class="token punctuation">.</span>css\n│   ├── index<span class="token punctuation">.</span>js\n│   ├── logo<span class="token punctuation">.</span>svg\n│   └── serviceWorker<span class="token punctuation">.</span>js'},["code","├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   ├── favicon.ico\n│   ├── index.html\n│   └── manifest.json\n│── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   ├── logo.svg\n│   └── serviceWorker.js"]],["h2","文件路径"],["p","我们直接将从 ",["code","Landing"]," 上下载的 ",["code","Home"]," 文件夹直接拷贝到 ",["code","src"]," 文件包里;"],["pre",{lang:"diff",highlighted:'├── README.md\n├── ...\n├── public\n│   ├── ...\n│── src\n<span class="token inserted">+   ├── Home</span>\n<span class="token inserted">+   │    ├── less</span>\n<span class="token inserted">+   │    ├── index.js</span>\n<span class="token inserted">+   │    ├── ...</span>\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   ├── logo.svg\n│   └── serviceWorker.js'},["code","├── README.md\n├── ...\n├── public\n│   ├── ...\n│── src\n+   ├── Home\n+   │    ├── less\n+   │    ├── index.js\n+   │    ├── ...\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   ├── logo.svg\n│   └── serviceWorker.js"]],["h2","安装依赖"],["p","详细参考",["a",{title:null,href:"docs/use/getting-started-cn#安装依赖"},"开始使用里的安装依赖"],";"],["h3","less 加载"],["pre",{lang:null,highlighted:'npm install react<span class="token operator">-</span>app<span class="token operator">-</span>rewired customize<span class="token operator">-</span>cra less less<span class="token operator">-</span>loader'},["code","npm install react-app-rewired customize-cra less less-loader"]],["h2","配置加载 less"],["p","安装完 ",["code","less 加载"]," 后， 我们还需要修改 package.json 里的启动配置。"],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test",</span>\n<span class="token inserted">+   "test": "react-app-rewired test",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test",\n}']],["h3","创建 ",["code","config-overrides.js"]],["p","然后在项目根目录创建一个 ",["code","config-overrides.js"]," 用于修改默认配置。"],["pre",{lang:"diff",highlighted:'├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n<span class="token inserted">+── config-overrides.js</span>\n├── public\n│   ├── ...\n│── src\n│   ├── Home\n│   └── ...'},["code","├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n+── config-overrides.js\n├── public\n│   ├── ...\n│── src\n│   ├── Home\n│   └── ..."]],["h3","config-overrides.js"],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> fixBabelImports<span class="token punctuation">,</span> addLessLoader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'customize-cra\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>\n  <span class="token comment" spellcheck="true">// 按需加载 antd</span>\n  <span class="token function">fixBabelImports</span><span class="token punctuation">(</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    libraryName<span class="token punctuation">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n    libraryDirectory<span class="token punctuation">:</span> <span class="token string">\'es\'</span><span class="token punctuation">,</span>\n    style<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token comment" spellcheck="true">// 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。</span>\n  <span class="token function">addLessLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    javascriptEnabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    modifyVars<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'@primary-color\'</span><span class="token punctuation">:</span> <span class="token string">\'#1DA57A\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const { override, fixBabelImports, addLessLoader } = require('customize-cra');\n\nmodule.exports = override(\n  // 按需加载 antd\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n    style: true,\n  }),\n  // 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。\n  addLessLoader({\n    javascriptEnabled: true,\n    modifyVars: { '@primary-color': '#1DA57A' },\n  }),\n);"]],["blockquote",["p","本文只引用 antd 的",["a",{title:null,href:"https://ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE"},"高级配置"],"，同样 ",["code","eject"]," 不在本文的讨论范围，",["code","eject"]," 可以参考 ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup"},"yarn run eject"],"。"]],["h2","修改入口文件"],["p","更改的 ",["code","src"]," 里的 ",["code","index.js"]," 页面，打开 ",["code","index.js"],"，引入 ",["code","Home"]," 文件包并渲染。"],["h4","src/index.js"],["pre",{lang:"diff",highlighted:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\n<span class=\"token deleted\">- import App from './App';</span>\n<span class=\"token inserted\">+ import App from './Home';</span>\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(&lt;App />, document.getElementById('root'));\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: http://bit.ly/CRA-PWA\nserviceWorker.unregister();"},["code","import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\n- import App from './App';\n+ import App from './Home';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: http://bit.ly/CRA-PWA\nserviceWorker.unregister();"]],["h2","完成"],["p","完成以上步骤之后，我们再启动 ",["code","npm start"]," 即可查看在 landing 上下载的模板。"],["div",{style:"width: 100%; height: 1px; background: rgb(233, 233, 233);"}],["h2","额外内容"],["p","如果是单个页面的不必要往下看。"],["h3","多页面路由"],["p",["strong","带 router 的 demo 地址",["a",{title:null,href:"https://github.com/ant-motion/landing-create-react-app-example/tree/router"},"landing-create-react-app-example#router"]]],["p",["code","create react app"]," 并没有路由配置，所以我们需要安装 ",["code","react-router-dom"],"。"],["h4","安装"],["pre",{lang:null,highlighted:'npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom <span class="token operator">-</span><span class="token operator">-</span>save'},["code","npm install react-router-dom --save"]],["h4","配置路由"],["blockquote",["p","react-router 基本使用方法可参考 ",["a",{title:null,href:"https://reacttraining.com/react-router/web/example/basic"},"Basic Example"],";"]],["p","将上述的 ",["a",{title:null,href:"#修改入口文件"},"修改入口文件"]," 更改回原始状态，然后对 ",["code","APP.js"]," 进行修改, 详细参考: "],["h5","App.js"],["p","添加 ",["code","Router"]," 入口和提取 ",["code","Header"]," 和 ",["code","Footer。"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> enquireScreen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enquire-js\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">\'./Home/Nav0\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">\'./Home/Footer0\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Nav00DataSource<span class="token punctuation">,</span>\n  Footer00DataSource<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./Home/data.source.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> isMobile<span class="token punctuation">;</span>\n<span class="token function">enquireScreen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  isMobile <span class="token operator">=</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      isMobile<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 适配手机屏幕;</span>\n    <span class="token function">enquireScreen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> isMobile<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token operator">!</span>b <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Nav00DataSource<span class="token punctuation">}</span></span> <span class="token attr-name">isMobile</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>isMobile<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Footer00DataSource<span class="token punctuation">}</span></span> <span class="token attr-name">isMobile</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>isMobile<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { BrowserRouter as Router, Route, Link } from \"react-router-dom\";\nimport { enquireScreen } from 'enquire-js';\nimport Header from './Home/Nav0';\nimport Footer from './Home/Footer0';\nimport Home from './Home';\n\nimport {\n  Nav00DataSource,\n  Footer00DataSource,\n} from './Home/data.source.js';\n\nlet isMobile;\nenquireScreen((b) => {\n  isMobile = b;\n});\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isMobile,\n    };\n  }\n  componentDidMount() {\n    // 适配手机屏幕;\n    enquireScreen((b) => {\n      this.setState({ isMobile: !!b });\n    });\n  }\n  render() {\n    return (\n      <Router>\n        <div>\n          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />\n          <Route exact path=\"/\" component={Home} />\n          <Footer dataSource={Footer00DataSource} isMobile={this.isMobile} />\n        </div>\n      </Router>\n    );\n  }\n}\n\nexport default App;"]],["blockquote",["p","注： 如果觉得 enquireScreen 多次出现比较不舒服，可以选择用 React Context 或其它来传递，",["a",{title:null,href:"https://reactjs.org/docs/context.html"},"React Context 详细参考"]]],["h3","添加面页"],["p","将 ",["code","Landing"]," 上下载的另一个页面换个名称，如 ",["code","Page2"],", 拷贝到 ",["code","src"]," 文件包里, 注: 不需要 ",["code","Nav"]," 和 ",["code","Footer"],"， 然后再在 ",["code","App.js"]," 增加入口。"],["h5","App.js"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span><span class="token punctuation">;</span>\n<span class="token operator">+</span> <span class="token keyword">import</span> Page2 <span class="token keyword">from</span> <span class="token string">\'./Page2\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span><span class="token punctuation">.</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Nav00DataSource<span class="token punctuation">}</span></span> <span class="token attr-name">isMobile</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>isMobile<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token operator">+</span>         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/page2<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Page2<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Footer00DataSource<span class="token punctuation">}</span></span> <span class="token attr-name">isMobile</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>isMobile<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\n...\nimport Home from './Home';\n+ import Page2 from './Page2';\n\n....\n\nclass App extends Component {\n  ...\n  render() {\n    return (\n      <Router>\n        <div>\n          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />\n          <Route exact path=\"/\" component={Home} />\n+         <Route exact path=\"/page2\" component={Page2} />\n          <Footer dataSource={Footer00DataSource} isMobile={this.isMobile} />\n        </div>\n      </Router>\n    );\n  }\n}\n\nexport default App;"]],["h4","修改 Nav0 相关参数"],["p","先修改 ",["code","Home"]," 里的 ",["code","Nav0"]," 文件的标签"],["blockquote",["p","也可以将 ",["code","Nav0"]," 和 ",["code","Footer0"]," 提出放至一个文件包里，，如 ",["code","Layout"],";"]],["h5","./src/Home/Nav0"],["pre",{lang:"diff",highlighted:'import React from \'react\';\n...\nimport { Menu } from \'antd\';\n<span class="token inserted">+import { Link } from "react-router-dom";</span>\n\nconst Item = Menu.Item;\n\nclass Header extends React.Component {\n  ....\n    const navChildren = Object.keys(navData).map((key, i) => (\n      &lt;Item key={i.toString()} {...navData[key]}>\n<span class="token deleted">-       &lt;a</span>\n<span class="token inserted">+       &lt;Link</span>\n          {...navData[key].a}\n<span class="token inserted">+         href={navData[key].a.href}</span>\n<span class="token inserted">+         to={navData[key].a.href}</span>\n          target={navData[key].a.target}\n        >\n          {navData[key].a.children}\n<span class="token deleted">-       &lt;/a></span>\n<span class="token inserted">+       &lt;/Link></span>\n      &lt;/Item>\n  ...\n}\n\nexport default Header;'},["code","import React from 'react';\n...\nimport { Menu } from 'antd';\n+import { Link } from \"react-router-dom\";\n\nconst Item = Menu.Item;\n\nclass Header extends React.Component {\n  ....\n    const navChildren = Object.keys(navData).map((key, i) => (\n      <Item key={i.toString()} {...navData[key]}>\n-       <a\n+       <Link\n          {...navData[key].a}\n+         href={navData[key].a.href}\n+         to={navData[key].a.href}\n          target={navData[key].a.target}\n        >\n          {navData[key].a.children}\n-       </a>\n+       </Link>\n      </Item>\n  ...\n}\n\nexport default Header;"]],["p","再修改 ",["code","data.source.js"]," 里的 ",["code","href"]," 值;"],["pre",{lang:"diff",highlighted:"export const Nav00DataSource = {\n  ...\n  Menu: {\n    className: 'header0-menu',\n    children: [\n<span class=\"token deleted\">-     { name: 'item0', a: { children: '导航一', href: '' } },</span>\n<span class=\"token inserted\">+     { name: 'item0', a: { children: '导航一', href: '/' } },</span>\n<span class=\"token deleted\">-     { name: 'item1', a: { children: '导航二', href: '' } },</span>\n<span class=\"token inserted\">+     { name: 'item1', a: { children: '导航二', href: '/page2' } },</span>\n      { name: 'item2', a: { children: '导航三', href: '' } },\n      { name: 'item3', a: { children: '导航四', href: '' } },\n    ],\n  },\n  ...\n};"},["code","export const Nav00DataSource = {\n  ...\n  Menu: {\n    className: 'header0-menu',\n    children: [\n-     { name: 'item0', a: { children: '导航一', href: '' } },\n+     { name: 'item0', a: { children: '导航一', href: '/' } },\n-     { name: 'item1', a: { children: '导航二', href: '' } },\n+     { name: 'item1', a: { children: '导航二', href: '/page2' } },\n      { name: 'item2', a: { children: '导航三', href: '' } },\n      { name: 'item3', a: { children: '导航四', href: '' } },\n    ],\n  },\n  ...\n};"]],["h3","Router 完成"],["p","完成以上步骤之后，我们再启动 ",["code","npm start"]," 即可查看在 landing 上下载的模板, 通过导航切换的可查看多个页面了。"]],meta:{order:1,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"create-react-app 里使用","en-US":"Use in create-react-app"},filename:"docs/use/create-react-app.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装与初始化",title:"安装与初始化"},"安装与初始化"]],["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装依赖",title:"安装依赖"},"安装依赖"]],["li",["a",{className:"bisheng-toc-h2",href:"#配置加载-less",title:"配置加载 less"},"配置加载 less"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改入口文件",title:"修改入口文件"},"修改入口文件"]],["li",["a",{className:"bisheng-toc-h2",href:"#完成",title:"完成"},"完成"]],["li",["a",{className:"bisheng-toc-h2",href:"#额外内容",title:"额外内容"},"额外内容"]]]}}}]);