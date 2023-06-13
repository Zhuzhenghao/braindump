## Vitest

[项目地址](https://gitlab.daocloud.cn/guobin.sun/k8s-ui)

### 为什么使用 Vitest

- 对 Jest 非常友好，如果熟悉 Jest 的，很容易上手
- 支持对 Vue/React 框架中的组件进行测试
- 开箱即用的 TS/JSX 支持，无需繁琐的配置
- 中文文档

### 安装配置

#### 第一步（安装依赖）

`npm install vitest -D`

#### 第二步（配置 vite.config.ts）

配置 vitest 我们直接在 vite 的配置文件中进行配置就行（这个也是 vitest 方便的地方）

这里我们使用官方推荐的三斜线命令进行配置

```js
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    // ...
  },
});
```

#### 最后一步（package.json 中配置单元测试命令）

```js
{
  "scripts": {
    "test": "vitest",
    // ....
  }
}

```

### 单元测试，从测试工具方法开始

如果我们没接触过单元测试，那么测试工具方法就是一个很好的切入点，因为对工具方法的测试相对来说会简单很多，我们只需要关注入参和结果就行

#### 开始前我们先了解一下会用到的 API

- describe：在当前上下文中定义一个新的上下文，可以在这个新的上下中定义一组测试（相当于 group 与 item 的区别）
- it：定义一个测试方法，接受一个测试名与一个含有测试预期的函数
- expect：创建断言，用于对结果进行判断
- toBe：判断断言结果是否相等

基本上了解这几个就可以开始使用起来了，如果发现有些情况以上 API 满足不了了，可以再去查询。

#### 我们找一个组件库中的工具方法

getValidateMsg 这个方法主要是根据校验类型与插入的文案，获取我们需要的提示文案

```js
export enum IValidateMsgType {
  EMPTY = 'empty',
  MAX_LENGTH = 'length',
  TYPE_ERROR = 'type_error'
}

// (&&) 为占位符
const validateMsgLabel: { [T in IValidateMsgType]: string } = {
  [IValidateMsgType.EMPTY]: '(&&)是必须的, 请输入(&&)！',
  [IValidateMsgType.MAX_LENGTH]: '(&&)长度不能超过(&&)个字符！',
  [IValidateMsgType.TYPE_ERROR]: '(&&)格式错误！'
}

export const getValidateMsg = (type: IValidateMsgType, insertStr: string | string[] = ''): string => {
  const msg = validateMsgLabel[type]
  let i = 0
  const resStr = msg.replaceAll(/\(&&\)/g, (val) => {
    const str = Array.isArray(insertStr) ? insertStr[i] : insertStr
    i++
    return str || ''
  })
  return resStr
}
```

这里我们先想一下我们怎么根据这个方法设计测试用例（尽量覆盖全面）

- type 为 IValidateMsgType.EMPTY, insertStr 不传
- type 为 IValidateMsgType.EMPTY, insertStr 为 test
- type 为 IValidateMsgType.MAX_LENGTH, insertStr 为 [test, 10]

```js
import { describe, expect, it } from 'vitest';
import { getValidateMsg, IValidateMsgType } from '../common';

// 1. type = IValidateMsgType.EMPTY, insertStr 不传
// 2. type = IValidateMsgType.EMPTY, insertStr = test
// 3. type = IValidateMsgType.MAX_LENGTH, insertStr = [test, 10]
describe('test getValidateMsg', () => {
  it('type empty, no insertStr', () => {
    const result = getValidateMsg(IValidateMsgType.EMPTY);
    expect(result).toBe('是必须的, 请输入！');
  });

  it('type empty, insertStr test', () => {
    const result = getValidateMsg(IValidateMsgType.EMPTY, 'test');
    expect(result).toBe('test是必须的, 请输入test！');
  });

  it('type maxLength, insertStr [test, 10]', () => {
    const result = getValidateMsg(IValidateMsgType.MAX_LENGTH, ['test', '10']);
    expect(result).toBe('test长度不能超过10个字符！');
  });
});
```

### 测试 Vue 项目中的组件

现在我们一般开发都是使用框架，所以项目中我们如果真的需要单元测试，那么对组件进行测试是我们绕不过去的槛，这个时候我们就发现 vitest 不能完全满足，这个时候我们就需要另一个库 **Vue Test Utils**

我们安装一下

`npm i @vue/test-utils -D`

这里我们以组件库中的 namespace 组件为例来讲解接下来的情况

在开始之前我们需要了解一些知识点：

- 渲染组件
  - mount: 会渲染当前组件和所有子组件
  - shallowMount：只会渲染当前组件，不会渲染子组件，好处在于可以让我们只需要关注当前组件的行为，而不用关心子组件的
- 查找
  - find 查找单个元素，语法基本跟 querySelector 类似
  - findAll 查找所有元素
  - findComponent 查找组件
  - findAllComponents 查找所有组件
- 获取
  - get 获取单个元素
  - getComponent 获取组件
- 判断
  - exists 判断一个元素是否存在
  - isVisible 判断一个元素是否隐藏
- 获取 html
  - html
- Props 模拟传入的数据
  - setProps 设置 props
- 触发事件
  - trigger

> 有一个点特别需要注意，就是我们组件中使用的一些库，我们需要手动加入到 config.global.plugin 中，否则可能无法访问到，例如 Element-plus

#### 判断是否渲染

这个里面的 props 其实就是模拟的组件传入的数据

```js
import { shallowMount, mount, config } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Element from 'element-plus'
import { KNamespace } from '..'

const options = [
  {
    value: 'a1',
    label: 'a1'
  },
  {
    value: 'a2',
    label: 'a2'
  },
  {
    value: 'a3',
    label: 'a3'
  },
  {
    value: 'a4',
    label: 'a4'
  },
  {
    value: 'a5',
    label: 'a5'
  }
]

config.global.plugins = [Element]

// 测试是否正常渲染
// 测试 v-model 功能
// 测试 type 属性
// 测试 disabled 属性
// 测试 placeholder 属性
describe('KNamespace', () => {
  test('正常渲染 input', async () => {
    const wrapper = mount(KNamespace, {
      props: {
        type: 'input',
        modelValue: 'abcd',
        filterable: true,
        autofocus: true,
        clearable: true,
        disabled: false,
        placeholder: '请输入'
      }
    })
    expect(wrapper.find('.k-namespace-input').exists()).toBe(true)
  })

  test('正常渲染 select', () => {
    const wrapper = mount(KNamespace, {
      props: {
        type: 'select',
        modelValue: 'Option2',
        options,
        filterable: true,
        autofocus: true,
        clearable: true,
        disabled: false
      }
    })
    expect(wrapper.find('.k-namespace-select').exists()).toBe(true)
  })
```

#### v-model

在 vue 组件中，双向数据绑定是最常见的一种模式，所以我们来看下怎么测试 `v-model`

```js
test('test v-model', async () => {
  const wrapper = mount(KNamespace, {
    props: {
      type: 'input',
      modelValue: 'abcd',
      filterable: true,
      autofocus: true,
      clearable: true,
      disabled: false,
      placeholder: '请输入',
      'onUpdate:modelValue': e => wrapper.setProps({ modelValue: e }),
    },
  });
  expect(wrapper.find('.k-namespace-input').exists()).toBe(true);
  await wrapper.find('input').setValue('efg');
  expect(wrapper.props('modelValue')).toBe('efg');
});
```

#### 测试输入的 props

这里我们将 disabled 设置为 true，测试下是否正确展示

```js
test('test disabled', () => {
  const wrapper = mount(KNamespace, {
    props: {
      type: 'input',
      modelValue: 'abcd',
      filterable: true,
      autofocus: true,
      clearable: true,
      disabled: true,
      placeholder: '请输入',
    },
  });
  expect(wrapper.find('.is-disabled').exists()).toBe(true);
});
```

#### 触发事件

测试组件 必不可少的就是怎么触发事件呢，这里我们就要用到 trigger 方法，可以触发比如 click，submit, keyup 等事件

```js
// component template 片段
<el-button type="primary" @click="submitForm">
        Submit
</el-button>
<span :class="b('test-trigger')">测试 trigger{{ testCount }}</span>
// component js 片段
const testCount = ref(0)
const submitForm = async () => {
  testCount.value++
}

// 测试文件
test('test click trigger', async () => {
    const wrapper = mount(KNamespace, {
      props: {
        type: 'input',
        modelValue: 'abcd',
        filterable: true,
        autofocus: true,
        clearable: true,
        disabled: true,
        placeholder: '请输入'
      }
    })
    expect(wrapper.find('.k-namespace-test-trigger').text()).toBe('测试 trigger0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.k-namespace-test-trigger').text()).toBe('测试 trigger1')
  })
```

#### JSX

有时候我们更希望直接像使用组件的那样直接测试我们需要测试的组件，这个时候我们就可以使用 JSX 语法

`npm i @vitejs/plugin-vue-jsx -D`

然后我们加入配置中

```js
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [
    vueJsx(),
    // ...
  ],
});
```

> 在一些我们需要检查文件格式 例如 include 中，我们也需要加入 .jsx/.tsx, 不然检测不到我们的 jsx/tsx 文件

使用 jsx 的好处就是更加灵活，特别是在组件库这样的项目中，你可以在测试文件中可以根据需要的场景，任意组合组件，而不用局限于某个组件，这样就有点类似 demo 的感觉。

#### http request

正常的项目肯定少不了接口请求了，我们看下如何对接口请求进行模拟

```js
// 组件
<template>
  <button @click="getPosts">Get posts</button>
  <ul>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: null
    }
  },
  methods: {
    async getPosts() {
      this.posts = await axios.get('/api/posts')
    }
  }
}
</script>
```

```js
// 测试文件
import { mount, flushPromises } from '@vue/test-utils'
import { vi } form 'vitest'
import axios from 'axios'
import PostList from './PostList.vue'

const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' }
]

// spyOn: 在对象的方法或 getter/setter 上创建一个监听
// 这里就是在 axios.get 方法上创建一个监听
// mockResolvedValue：异步函数被调用时返回的值
vi.spyOn(axios, 'get').mockResolvedValue(mockPostList)

test('loads posts on button click', async () => {
  const wrapper = mount(PostList)

  await wrapper.get('button').trigger('click')

  // 模拟请求被调用的次数
  expect(axios.get).toHaveBeenCalledTimes(1)
  // 请求需要的参数
  expect(axios.get).toHaveBeenCalledWith('/api/posts')

  // 保证所有 dom 都已经更新完
  await flushPromises()

  const posts = wrapper.findAll('[data-test="post"]')

  expect(posts).toHaveLength(2) // 判断元素个数
  expect(posts[0].text()).toContain('title1') // 判断元素内容
  expect(posts[1].text()).toContain('title2')
})
```
