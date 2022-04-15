# vue3-boilerplate
> Vue 3 boilerplate for OpenObject (2022.04.14)  

## 1. 기본 구성 환경
### 1-1. 주요 라이브러리
```
- Node v16.14.2
- npm 8.3.1
- @vue/cli 5.0.0
- vue 3.23.13
- eslint 7.32.0
- typescript 4.5.5
- sass 1.32.7
- pinia 2.0.12
- mitt 3.0.0
```

### 1-2. 개발 도구
```
- Visual Studio Code 1.66.0
- plugins: Auto Close Tag
- plugins: Auto Rename Tag
- plugins: ESLint
- plugins: Git Graph
- plugins: GitLens
- plugins: Korean Language Pack
- plugins: Live Server
- plugins: TSLint
- plugins: Vue 3 Snippets
- plugins: Vue VSCode Snippets
```

## 2. 프로젝트 설치
```sh
git clone 깃 주소

# 이동
cd vue-boilerplate

# 모듈 설치
npm install

# 실행
npm run serveBe 
npm run serveFe 

# 빌드
npm run build
```


## 3. Source Structure
```
- .vscode
  - settings.json : 현재 프로젝트 내에서 사용되는 vscode  설정

- node_modules
  - ** : 프로젝트 내에서 사용되는 node 모듈 모음

- public 
  - index.html : 빌드 후 웹서버에서 응답하는 파일(사용자 엔트리 포인트)

- src 
  - assets : css, fonts, images 등 파일 위치

  - components : APP 내 공통으로 사용되는 컨포넌트 위치(uu-components, 공통 메뉴 등)
    
  - router 
    - routes 
      - menu*.router.ts : 메뉴별 실제 라우트 주소 정의
    - guard.config.ts : 권한 처리등 라우트 전/후 처리를 위한 설정
    - index.js : routes 폴더 이하 모듈로 큰 메뉴 단위로 관리

  - service : 
    - auth (인증 모듈 예제)
      - model : 현재 모듈에 사용될 인터페이스들을 정의
        - auth.interface.ts
      auth.api.ts : API 서버와 통신을 위한 axios 인스턴스 설정.(Server API 또는 Native API 구현)
      auth.module.ts : pinia 라이브러리를 이용한 store (상태관리 모듈) 정의
    - posts (게시판 모듈 예제)
    - index.ts : pinia 객체 생성(vue stroe와 같은 역할)

  - utils
    - @types : 타입이 정의되지 않는 외부라이브러리 타입을 정의
      - shims-vue.d.ts : vue 를 위한 typescript helper 파일
      - ...
    - common.constants.ts : 어플리케이션 전반에 사용될 상수를 정의
    - common.function.ts : 어플리케이션 전반에 사용될 함수를 정의
    - common.interface.ts : 어플리케이션 전반에 사용될 인터페이스를 정의
    - instance.axios.ts : axios 인스턴스 생성. interceptors 설정. 토큰 및 공통 에러 처리(선택) 
    - instance.eventBus.ts : eventBus 기법 사용을 위한 인스턴스 정의(mitt 라이브러리 이용)
    - instance.logger.ts : 어플리케이션 내 로그 사용을 위한 인스턴스 정의
  
  - views :
    - members (회원 화면 예제)      
    - pages (일반 페이지 예제)
    - posts (게시판 화면 예제)
      - components 
        ... : 각 module 에서 사용되는 component 정의
      _container.vue : 각 module wrap 페이지
      ...
    _container.vue : app wrap 페이지

  App.vue : app 부모 페이지
  main.ts : 개발 엔트리 포인트

  - .browserslistrc
  - .editorconfig
  - .evn.development(production) : 빌드 환경에 따른 변수설정
  - .eslintrc.js : 코딩 컨벤션 설정 (standrad 추천)
  - .babel.config.js
  - tsconfig.json
  - vue.config.js
  ...

```


## 4. 프로젝트 주요 설정

### 4.1. VScode IDE 설정

```js
// .vscode/settings.json

{  
  "eslint.workingDirectories": [
    { "mode": "auto" }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.format.enable": true,
  "editor.tabSize": 2,
  "editor.wordWrapColumn": 100,
}
```

### 4.2. 코드 검사 및 포멧팅 - ESLint

```js
// .eslintrc.js

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  }
}
```

### 4.3. typescript 설정

```js
// tsconfig.json

{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "../node_modules/@types",
      "src/utils/@types"
    ],
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"],
  "exclude": [ "node_modules" ]
}


```

### 4.4. Vue CLI 초기 설정

``` sh

vue create vue3-bolierplate

-->                                                          
Vue CLI v5.0.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files

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

### Customize configuration
```sh

Vue CLI v5.0.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)

```
