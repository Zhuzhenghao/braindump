---
author: '张鹏胜'
title: '什么是 e2e 测试'
date: 2021-07-15
description: 'Guide to emoji usage in Hugo'
tags: ['emoji']
thumbnail: https://picsum.photos/id/1050/400/250
---

其实 e2e 测试是自动化测试的一种，他是将程序当作一个黑盒子，以用户的视角对真实系统的访问行为进行仿真，对测试的输入（用户行为/模拟数据），看能否得到预期得到的结果。

### 为什么要进行 e2e 测试

通常情况下，单元测试确实能够帮助我们发现大部分的问题，但是在复杂的前端交互或者可视化项目测试中，单纯的单元测试并不能满足真实测试需求，这时候 e2e 测试的优势就显得尤其显著。

他的优势主要集中体现在几个方面：

- 模拟真实的用户行为
- 模拟真实的环境
- 减少开发或者 QA 回归的人力成本
- 增强项目的稳定性，避免修复一个问题，引入其他问题

### 什么是 cypress

一个 Javascript 端到端测试框架。让 e2e 测试更加的快捷，方面，提升自动化开发效率。

### 如何使用 cypress

[文档地址](https://docs.cypress.io/guides/overview/why-cypress)

#### 安装

`yarn add cypress --save-dev `

#### 运行

`yarn run cypress open`

当然你也可以在你的项目的 package.json 添加指令：

```js
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

这样你就可以这样使用
`npm run cypress:open`

其实最简单的方法还是在使用 vue-cli 新建项目的时候， 让教授叫帮助你集成 cypress

#### 基本语法

##### 访问远程链接

使用关键字 visit

```js
cy.visit('/'); // 访问相对路径
cy.visit('index.html'); // 访问本地文件
cy.visit('http://localhost:3000'); // 访问完整路径
// 访问远程静态资源
cy.visit({
  url: '/pages/hello.html',
  method: 'GET',
});
```

##### 查找节点

使用 get 关键字

```js
// 访问一个 dom 元素
cy.get('.app');
// 访问多个
// cy.get('.list > li')
// 访问别名
cy.get('button[type=submit]').as('submitBtn');
cy.get('@submitBtn').click();
```

- 断言
  使用 should 关键字

```js
cy.get('nav').should('be.visible');
cy.get(':checkbox').should('be.disabled');
cy.get('option:first')
  .should('be.selected')
  .then($option => {
    // $option is yielded
  });

cy.get('form').should('have.class', 'form-family');
cy.get('input').should('not.have.value', 'Jane');
cy.get('button')
  .should('have.id', 'new-user')
  .then($button => {
    // $button is yielded
  });
```

##### 事件

- click
- dbclick
- check
- select
- scrollTo
- 等等

##### 一些命令（其实就是一些行为的集合）

- clearAllCookies 清楚所有浏览器 cookie
- clearAllLocalStorage 清楚所有的 localStorage
- debug 设置 debug
- each 遍历
- go 后退或前进 浏览器历史
- mount 加载组件，这个是专门为测试组件而设计的
- request 请求接口
  等等

并且 cypress 框架内部还允许你自定义一些指令，方便你对一些重复行为的复用。

```js
// 定义一个登录指令
Cypress.Commands.add('login', (name, pw) => {
    ....
})
// 点击链接
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})
// 使用
cy.clickLink('a link label')
```

##### 接口请求，mock 数据

接口请求 可以使用 request 关键字， 这个就不重点介绍了， 跟常规的请求接口一样的， 这里我们重点说下，接口拦截与返回数据 mock

拦截接口可以使用 intercept 关键字

```js
cy.intercept('/users/**');
cy.intercept('GET', '/users*');
cy.intercept({
  method: 'GET',
  url: '/users*',
  hostname: 'localhost',
});

// spying and response stubbing
cy.intercept('POST', '/users*', {
  statusCode: 201,
  body: {
    name: 'Peter Pan',
  },
});

// spying, dynamic stubbing, request modification, etc.
cy.intercept('/users*', { hostname: 'localhost' }, req => {
  /* do something with request and/or response */
});
```

mock 数据

```js
// 自己定义一个 json 数据
cy.intercept('/projects', {
  body: [{ projectId: '1' }, { projectId: '2' }],
});

// 这里其实推荐 在 fixture 中定义 json 数据文件  统一进行管理
cy.intercept('/mock/api/test', {
  fixture: 'data.json',
});
```

#### 常见场景

##### 表单输入与提交

```js
describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.get(`input[name="name"]`).type('admin');
    cy.get(`input[name="name"]`).should('have.value', 'admin');
    cy.get(`input[name="password"]`).type('123');
    cy.get(`input[name="password"]`).should('have.value', '123');
    cy.get('button').click();
  });
});
```

##### 请求接口

```js
describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.get(`input[name="name"]`).type('admin');
    cy.get(`input[name="name"]`).should('have.value', 'admin');
    cy.get(`input[name="password"]`).type('123');
    cy.get(`input[name="password"]`).should('have.value', '123');
    cy.request({
      url: '/api/login', // assuming you've exposed a seeds route
      method: 'POST',
      body: user,
    })
      .its('body')
      .then(body => {
        if (body.code === 0) {
          window.localStorage.setItem('isAuthenticated', 'true');
          cy.visit('/home');
        } else {
          window.localStorage.setItem('isAuthenticated', 'false');
        }
      });
  });
});
```

##### mock

```js
describe('Event Test', () => {
  beforeEach(() => {
    cy.loginApi('admin', '123');
  });
  it('click', () => {
    cy.visit('/list');
    cy.intercept('POST', '/api/getList', {
      fixture: 'list.json',
    });
  });
});
```

### demo 项目

- server 服务端项目， 为了提供接口服务 启动命令 `node app.js`
- web 客户端项目
