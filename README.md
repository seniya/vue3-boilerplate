# vue3-boilerplate
> Vue 3 boilerplate for OpenObject (2022.04.14)  

## 1. 기본 구성
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

## 5. 전체 구조

### 5.1. 도식도
```sh
# wrapper

------------ index.html ------------
|                                  |
| ---------- main.ts ------------- |
| |                              | |
| | ------ _container.vue ------ | |
| | |                          | | |
| | | ---- _container.vue ---- | | |
| | | |                      | | | |
| | | | -- menu page.vue --- | | | |
| | | | |                  | | | | |
| | | | |------------------| | | | |
| | | |----------------------| | | |                  
| | |--------------------------| | |
| |------------------------------| |
|----------------------------------|

```

### 5.2. 간략 설명
- 1. index.html : markup 기본 설정. meta, css, font 등 설정  
- 2. main.ts : vue application logic 및 설정  
- 3. App.vue : 최대한 가볍게  
- 4. _container.vue(main) : Site business logic 및 설정  
- 5. _container.vue(menu 별) : 각 메뉴별 기본 설정(필요시 사용)  
- 6. menu > page.vue : 각 페이지 작업


## 6. 코드 규칙
 - 프로젝트 코드 규칙 가이드를 따른다. (추후 업데이트 예정)

### 6.1. 개요
> - 프로젝트의 팀원들은 공통된 개발환경(vscode)과 코딩 컨벤션 강제를 권장합니다.
> - 가능하면 메소드 이름은 [`request`, `prepare`, `on`, `cb`, `action`] 으로 시작하길 권장합니다.
> - 가능하면 부모 컨포넌트와 자식 컨포넌트의 역할을 분리하여 자식 컨포넌트의 재활용을 할 수 있기를 권장합니다.
> - 가능하면 파일이름은 소문자로 권장합니다. (형상관리 대비)
> - 가능하면 `vue` - `watch` 기능을 사용하지 않습니다.
> - 가능하면 모든 비동기는 `async`, `await` 으로 동기적으로 제작하고 그에 따른 렌더링등의 어색함은 로직이 단단하게 완성된 후 하나씩 최적화를 합니다. (예측할수 없는 비동기의 순서가 대부분의 오류의 원인입니다.)
> - 데이터 캐시에 대한 정책은 주요 설계에 영향을 미치므로 미리 확인 되어야 합니다.



### 6.2. router 사용법  
- Lazy 로딩을 효과적으로 사용하기 위하여 메뉴 그룹별로 청크 파일이 생기도록 빌드 옵션을 사용합니다.

```js
// 파일 위치

/src/router
      -- routes
        |-- members.router.ts
        |-- pages.router.ts
        |-- posts.router.ts



// 소스 예제(posts)

// webpackChunkName > 'posts' --> '각 메뉴 그룹 이름' 으로 설정
const container = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/_container.vue')
const postsList = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsList.vue')
const postsRead = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "posts" */ '@/views/posts/postsRead.vue')

export default {
  path: '/posts',
  component: container,
  redirect: '/posts-list',

  children: [
    {
      path: '/posts-list',
      component: postsList,
      meta: {
        title: 'postsList'
      }
    },
    {
      name: 'postsRead',
      component: postsRead,
      path: '/posts-read/:id',
      meta: {
        title: 'postsRead'
      }
    },
  ]
}

```


### 6.3. service 작성법  

 - interface 정의 파일은 model 폴더 밑으로 구성
 - 외부 통신을 위한 API 정의는 xxx.api.ts 에 기술
 - vue 내부에서 사용할 store 정의는 xxx.module.ts 에 기술

```js
// 파일 구조(posts)

/src/service
      -- posts
          |-- meodel
             |-- posts.interface.ts
          posts.api.ts
          posts.module.ts
```

#### 6.3.1. model 정의 가이드
 - `interface` 파일에는 API Response 모습과 VO 모습을 정의합니다.

```js
// 파일 예시 : posts.interface.ts

/**
 * @description: 게시글 정보 --> VO 모습
 * PostInterface
 */
export interface PostInterface {
  id: string
  title: string
  content: string
  image: string
  animals: string
  author: string
  createAt: Date | null
}

/**
 * @description: 게시글 list API 응답 --> API Response 모습
 * PostsResponseInterface
 */
export interface PostsResponseInterface extends HttpResponseInterface{
  result: {
    items: PostInterface[]
  }
}

/**
 * @description: 게시글 detail API 응답 --> API Response 모습
 * PostInfoResponseInterface
 */
export interface PostInfoResponseInterface extends HttpResponseInterface{
  result: {
    item: PostInterface
  }
}

```

#### 6.3.2. `.api` 파일 정의 가이드
 - axios를 사용하여 export 되는 함수 이름은 `http` 이름을 앞에 붙입니다.  
 - 추후 Native에 연동되어 export 되는 함수 이름은 `Native` 이름을 앞에 붙입니다.

```js
// 파일 예시 : posts.api.ts

enum Api {
  posts = '/posts',
  postInfo = '/postInfo',
}

/**
 * @description: httpPosts
 */
export const httpPosts = (): AxiosPromise<PostsResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.posts
  })
}

/**
 * @description: httpPostInfo
 */
export const httpPostInfo = (): AxiosPromise<PostInfoResponseInterface> => {
  return axiosInstance({
    method: RequestEnum.GET,
    url: Api.postInfo
  })
}

```

#### 6.3.3. `.moudle` 파일 사용 가이드
 - 비동기 행위가 일어나는 객체는 `loding`, `done`, `error`, 의 상태 변수와 그리고 정보 객체를 `저장할 변수`를 가집니다. --> 총 4개의 변수를 가집니다. (각각은 로딩중 여부, 완료 여부, 에러의 존재여부, 응답 데이터 로 정의 합니다.)
 - 통신은 async / await 구문을 사용하여 동기적으로 처리합니다. 

```js
// 파일 예시 : posts.module.ts

// 현재 모듈파일내에서 사용될 인터페이스 정의
interface postsState {
  posts: PostInterface[]
  isLodingPosts: boolean
  isDonePosts: boolean
  errorPosts: string | null
}

// 기본값 세팅
export const postInfoInit = {
  id: '',
  title: '',
  content: '',
  image: '',
  animals: '',
  author: '',
  createAt: null
}

export const usePostStore = defineStore({
  id: 'post-store',

  state: (): postsState => ({
    posts: [],
    isLodingPosts: false,
    isDonePosts: false,
    errorPosts: null
  }),

  getters: {
    getPosts (): PostInterface[] {
      // 데이터 가공
      return this.posts
    }
  },
  actions: {
    async actionHttpPosts () {
      this.posts = []
      this.isLodingPosts = true
      this.isDonePosts = false
      this.errorPosts = null
      try {
        const res = await httpPosts()
        if (res.data) {
          if (res.data.result.items) {
            this.posts = res.data.result.items
          }
        }
        this.isLodingPosts = false
        this.isDonePosts = true
        return res.data
      } catch (error) {
        this.isLodingPosts = false
        this.isDonePosts = false
        this.errorPosts = '에러가 발생했습니다. #1'
        return Promise.reject(error)
      }
    },
  }
})


```

### 6.4. vue 파일 작성법

#### 6.4.1. 메뉴 단위로 폴더를 구성합니다.
```js
// 패키지 구조(posts)

/src/views
      -- posts
          |-- components
             |-- viewCreate.vue
             |-- viewList.vue
             |-- viewRead.vue
          _container.vue
          postsCreate.vue
          postsList.vue
          postsRead.vue
      -- menu2
      -- menu3
      -- ...
      _container.vue
```


#### 6.4.2. vue 파일 작성 설명
 - `example.vue` 예시  
 - 메소드 이름은 [ request, prepare, action, on, cb ] 으로 시작하길 권장합니다.  
    - request_ : API 등을 호출하는 함수에서 사용합니다.
    - prepare_ : 데이터 가공을 위한 함수에서 사용합니다.
    - action_ : 로직 진행등을 위한 함수에서 사용합니다.
    - on_ : 이벤트 정의를 위한 함수에서 사용합니다. (onClick_, onTouch_ ...)
    - cb_ : 콜백 정의를 위한 함수에서 사용합니다.
 - 페이지에 해당하는 vue 파일에서는 `store` 를 이용하여 비지니스 로직을 구성하고 컨포넌트에 해당하는 vue 파일에서는 `props`를 이용하여 단순한 기능을 구성하도록 권장합니다.


```js
export default defineComponent({
  // --> 각 파일별 고유한 이름
  name: 'example',  
  components: {
    subview1,
    subview2,
  },
  setup() {
    // --> getCurrentInstance() : vue 객체를 지칭함
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    // --> 사용할 store 모듈 정의
    const memberStore = useMemberStore();
    // --> 사용할 state 정의
    const state: stateType = reactive({ memberInfos: [] });

    // --> life 사이클: mount 되는 시점 
    // --> 뒤에 나오는 init 시점 보다 늦게 실행된다.
    // --> 현재 페이지에 포함된 자녀 컨포넌트가 모두 mount 된 후 실행된다.
    onMounted(() => {
      console.log('mounted staff-example');
    });

    // --> life 사이클: unmount 되는 시점
    onUnmounted(() => {
      console.log('unmounted staff-example');
    });

    // --> API 를 요청한다
    async function requestApiMembers() {
      await memberStore.actionHttpMembers();
    }

    // --> API 를 요청한다
    async function requestApiAllDeptMembers(id: string) {
      await memberStore.actionHttpAllDeptMembers(id);
    }

    // --> DATA를 가공한다. (포멧팅, 그룹화, 정렬)
    // --> DATA를 가공할때에는 store의 원본 데이터를 가공하지 않고,
    //     깊은 복사를 통하여 새로운 객체를 만든 후 이용한다.
    function prepareDataMembers() {
      state.memberInfos = [];
      if (memberStore.memberInfos.length > 0) {
        const memberInfos_ = cloneDeep(memberStore.memberInfos);
        /*
          데이터 가공
        */
        state.memberInfos = memberInfos_;
      }
    }

    // --> 로직 진행을 기술한다.
    async function actionRequestApi() {
      await requestApiMembers();
      prepareDataMembers();
    }

    // --> 이벤트 내용을 기술한다.
    async function onClickReqMembers() {
      await requestApiMembers();
      prepareDataMembers();
    }

    // --> 이벤트 내용을 기술한다.
    async function onClickReqAllDeptMembers(id: string) {
      await requestApiAllDeptMembers(id);
    }

    // --> 이벤트 내용을 기술한다.
    function onClickMovetoMain() {
      proxy.$router.push('/staff/main');
    }

    // --> 비동기 구문이 필요한 initailize
    (async () => {
      console.log('staff-example initailize..1');
      actionRequestApi();
    })();

    // --> 기본 initailize
    (() => {
      console.log('staff-example initailize..2');
    })();

    // --> 내부 데이터(state)와 store, 그리고 이벤트 함수 등을
    //     template 구문에서 사용할 수 있도록 리턴한다.
    return {
      state,
      memberStore,
      onClickReqMembers,
      onClickReqAllDeptMembers,
      onClickMovetoMain,
    };
  },
});


```

