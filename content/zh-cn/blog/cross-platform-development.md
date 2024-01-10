---
author: 司琴
title: '跨端技术'
date: 2021-07-13
description:
tags: ['跨端技术']
thumbnail: https://picsum.photos/id/121/800/400
---

跨端技术从计算机软件出现以来，一直是个经久不衰的话题，尤其在近十年来，跨端在前端领域是一个频繁出现的词汇，国内外互联网厂商的跨端框架不断推陈出新，此起彼伏。我想前端开发者都会产生一些疑问：什么是跨端技术？它解决了什么问题？表现形式和基本原理是什么？在不同的场景下应该如何选型？本次分享尝试对这些问题进行简单的解答（因为笔者对跨端开发并不算深入，有不准确的地方请斧正）。

## 跨端技术简介

### 什么是跨端技术？

首先理解一下**什么是端**？像 Andriod、iOS、Pad、PC、车机、各种嵌入式等设备，我们称之为终端，它们作为应用的承载平台，为用户提供多样功能的应用托管和运行环境。不同的端上可能会有硬件的差异、不同的操作系统和底层 API，不同的终端或系统有排他性，一般无法直接运行同一套代码编译产物。甚至相同的硬件和系统中，也存在应用层的运行平台隔离（例如各种厂商的小程序），如此一来，想要简单的通过一套代码在多个端、系统、平台上运行，其难度可想而知。

**跨端技术**，则是为了实现“**一次编写、到处运行**”这一解放软件开发生产力的理想目标。跨端字面含义是指跨终端（设备），例如跨 iOS、安卓、PC、其他各种设备等，但目前广义上的跨端一般不仅需要跨设备，还需要涉及到跨系统平台、跨应用等目标。而“**一次编写，到处运行**”的口号，也可能会调整为“**Learning once, write anywhere**”（React Native）。狭义上的跨端有多种类型：

1. 以 Web 为基础的 H5 Hybrid 方案，例如 WebView、Electron.js、NW.js、Tauri、Cordova(PhoneGap) 等；
2. 跨端应用框架 + 原生 UI 渲染，指在不同平台间的原生应用中（例如淘宝、抖音），通过动态化的跨端技术，提供接近原生应用体验的容器，具有独立的渲染和 JS 进程，以及布局引擎，其渲染的 UI 组件为系统原生。代表性的技术为 React Native、Weex（阿里）、Lynx（字节）；
3. 跨端应用框架 + 自渲染引擎，和上述方案类似，区别在于没有直接使用系统原生 UI 能力去渲染组件，而是利用了更底层的自定义画布渲染能力，通常比上述方案性能更好，同时在多端渲染一致性上也会更加优秀，且具有更强的自定义能力，代表性的技术为 Google 的 Flutter；
4. 小程序，通常是在特定应用内的生态应用，由应用层磨平平台差异，提供基本一致的 API，也包含独立的渲染和 JS 进程，组件采用 Web + 原生混合的方案。代表技术为微信小程序、支付宝小程序等，在此基础之上还有跨小程序平台的框架，例如 Taro、uni-app；
   > _目标：一次编写，多端运行_
   >
   > - **硬件形态** 也就是设备，如 PC 电脑，移动设备、物联网设备等
   > - **相同硬件形态下的不同平台** 也就是是跨操作系统，如 PC 下的 Mac、Windows、Linux 等；移动设备下的 iOS、Android 等
   > - **相同平台下不同的应用或应用中的衍生应用** 如 iOS 平台下浏览器应用（H5），微信小程序，支付宝小程序，抖音小程序等

### 跨端技术发展史

**“一次编写，到处运行”的出现**

![跨端时间线图](images/cross-platform-development/cross-platform-development-1.png '跨端时间线图')

#### 早期阶段

2008 年，移动设备基本基于 iOS 和 Android 系统，那个时期所有应用的开发，基本都以原生技术为主，iOS 系统应用的开发语言为 Objective-C，Android 系统应用的开发语言为 Java。开发同一款 APP 应用程序需要同时投入 Objective-C 和 Java 的原生开发人员。纯原生开发技术，不仅需要花费大量的精力来保持 iOS 和 Android 两端应用的开发效率和内容表现同步，并且需要的迭代周期比较长，不具备热更新能力。每一次功能的改动，都需要重新向应用商店提交审核，不利于业务初期的快速发展，此刻迫切需要原生技术与 Web 技术的融合。

于是催生了 PhoneGap，2009 年 Nitobi 的工程师在 iPhoneDevCamp 大会上展示了在 iOS 系统内架设起 Web 接口和 Objective-C 之间的桥梁，开发人员可以使用 HTML5、JavaScript、CSS 等 Web 标准技术来便捷的开发原生程序，实现了“一次编译，到处执行”的能力。2011 年 10 月 Adobe 正式宣布收购 Nitobi 软件，随即 PhoneGap 被正式改名为 Apache Cordova。

所以 PhoneGap 和 Cordova 这两个技术方案本质就是针对不同平台的 WebView 做了扩展和封装，是同源的，使得 WebView 这个原生组件，变成了可访问设备本地 API 的强大浏览器。Cordova 打开了跨端领域的一个新大门，Bridge 的思想被广泛传播。

![PhoneGap](images/cross-platform-development/cross-platform-development-2.png 'PhoneGap') ![Cordova](images/cross-platform-development/cross-platform-development-3.png 'Cordova')

#### 中期阶段

2015 年 4 月 Facebook 开源了跨平台移动应用开发框架 React Native (简称 RN) 。它是 React 在原生移动应用平台的衍生产物，支持 iOS 和安卓两大平台。RN 使用 Javascript 语言和 CSS 来开发移动应用，因此熟悉 Web 前端开发的技术人员只需很少的学习成本，就可以进入移动应用开发领域。与 React Native 类似，2016 年 6 月阿里巴巴开源了跨平台移动应用开发框架 Weex 。

React Native 和 Weex 技术的出现都是为了解决 Web 容器加载、解析和渲染慢的问题，都是放弃了采用浏览器控件渲染，而由原生来接管绘制，响应式编程方式（为你应用的每一个状态设计简洁的视图，当数据变动时，框架能高效更新并渲染合适的组件）让开发者创建交互式 UI 变得轻而易举。

使用 React Native 和 Weex 跨端技术开发的 APP 应用，交互体验与原生 APP 相差不大，开发效率非常高。伴随着该类技术的出现，国内外的公司为了抢占市场先机，各大应用商店上架的 APP 数量出现了爆发式的增长，各种混合包，马甲包层出不穷，大大降低了应用商店的产品质量。于是各大应用商店采取了相应的措施，对这部分用 RN、Weex 混合技术开发的应用，提高了审核通过的要求。这导致了大量的 APP 上不了架，严重的影响了各家业务的发展。于是，有心人就开始思考，能不能自己做应用市场，那就不再受限于 APP 审核。

2017 微信小程序正式发布，而它是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户通过扫一扫或搜一下即可打开应用。小程序不仅解决了用户想在短时间内获取服务并且不需要下载 APP 的问题，还开发了一个新的商业模式，借助微信 APP 本身的大流量很方便的帮助商家从线上引流，扩大营销渠道，沉淀用户的需求。小程序的成功让那些拥有巨大流量 APP 的背后巨头也纷纷开始效仿，开发出了自己的小程序平台。

![各个平台小程序分布图](images/cross-platform-development/cross-platform-development-4.png '各个平台小程序分布图')

2018 年，阿里、百度、字节跳动、手机厂商等各大巨头纷纷发布自己的小程序。同年 12 月，Flutter 1.0 在 Flutter Live 活动中发布，是该框架的第一个“稳定”版本，不过因为在小程序快速发展时期，它在国内没有得到应有的热度。2019 年，QQ 也加入小程序队列，各家小程序全面开花，从此正式进入终端碎片化时代。

这个时期，市面上端的形态多种多样，Web、React Native、微信小程序、支付宝小程序、快应用等各种端大行其道。这让很多开发者也苦不堪言，一会写微信小程序语法，一会写快应用语法，一会又写 Web 和 React Native，可能自己都不清楚自己到底擅长哪个技术了。

这时候只编写一套代码就能够适配到多端的能力就显得极为需要。于是，各种基于 react、vue、原生小程序或者自定义 DSL 语法的跨端框架如雨后春笋般出现。

各种跨端框架（此处只列举部分热度较高框架），按照出现的时间排列如下：

> - **WePY**，一款类 vue 语法规范的小程序框架，第一个版本是腾讯团队在 2016 年 12 发布。
> - **Mpvue**，是一个使用 Vue.js 开发小程序的前端框架，由美团团队在 2018 年 3 月开源。
> - **Taro**，是一个开放式跨端跨框架解决方案，由京东的凹凸实验室团队在 2018 年 6 月开源。
> - **Uni-app**，是一个使用 Vue.js 开发所有前端应用的框架，由 DCloud 团队在 2018 年 7 月开源。
> - **Mpx**， 是一款具有优秀开发体验和深度性能优化的增强型跨端小程序框架，由滴滴团队在 2018 年 12 月开源。
> - **Chameleon**，是一个有理想的能适应不同环境的跨端整体解决方案，由滴滴团队在 2019 年 8 月开源。
> - **Remax**，是使用 React 构建跨平台小程序的框架，由蚂蚁金服在 2019 年 8 月开源。

大概经过了 3~4 年的跨端技术发展，目前较为活跃的跨端框架还剩下 Taro 和 uni-app。

#### 后期阶段

在移动互联网后期，很多框架技术也开始归于稳定了。

在国外的环境下，移动端跨端技术目前还在保持高度活跃的，只剩下 React Native 和 Flutter 了。

Flutter 是性能与构建思路几乎最接近原生开发的框架，又能够满足跨端开发的需求，所以社区一直对它保持着持续的关注（虽然在国内不够火）。React Native 虽然它的热度已经大不如前，期间还爆出 Airbnb 要放弃 React Native ，回归原生技术开发的各种猜测，但是 RN 积累的开发者数量是极其巨大的，而且技术背靠 Facebook ，所以 React Native 技术依然有很多使用者。

在国内的环境下，当下最火的无疑是小程序技术，各个巨头也都是打着全民拥抱小程序的口号，各个头部 APP 也不停的衍生出各类的小程序应用。毫无疑问，Taro 和 uni-app 这两个一直保持着较高热度的小程序跨端开发框架，是小程序时代的明星。

### 方案横向对比

| 方案类型 | 优点 | 缺点 |
| --- | --- | --- |
| 以 Web 为基础的 H5 Hybrid（WebView、Cordova(PhoneGap)） | 跨端应用框架 + 原生 UI 渲染（React Native、Weex） | 跨端应用框架 + 自渲染引擎（Flutter）DSL 编译 + 混合渲染（Taro、uni-app） |
| 接入成本极低，基本可以复用前端的技术栈和生态 | 使用原生组件渲染，可获得与 native 一致的体验 | 采用自渲染引擎，具有极好的多端一致性，定制性好 |
| 开发效率高，节约时间 | 首屏性能和运行内存占用更有优势 | 性能好，更接近原生 |
| 更新和部署比较方便 | 可以通过 JSBundle 即时更新 App，能快速发布 | 可以实时查看代码变更对应用程序的改动，可以预览，能提高开发效率 |
| 代码维护方便、版本更新快，节省产品成本 | 简单易学 | 提供了丰富的可自定义的组件，用于创建美观且用户友好的界面，强调视觉效果 |
| 比 web 版实现功能多 | 热加载的即时编译方式能快速编译  | 提供快速流畅的动画和过渡效果，在旧设备上也可以流畅运行，性能高 |
| 可离线运行 | JS 和 Native 之间需要通信，动画性能在动画效率和性能的支持还存在一些问题，性能上不如原生 API | 同时支持 JIT 和 AOT 两种编译方式的特性，在不同场景下可以使用不同的编译方式 |
| 功能/界面无法自定 | 第三方依赖，严重依赖于大厂的维护 | UI 跨平台，但原生能力没有，脱离不开原生，开发人员需要具备原生（Android、iOS）基础开发能力，兼容适配性较差 |
| 受限于 webview 等原因，动画复杂、无限流类的页面性能较差 | 不能完全屏蔽原生平台，对于不同的平台特性的内容，需要有一些兼容的写法，甚至各平台各写一套 | 第三方库较少，且生态中的 SDK，各种第三方包鱼龙混杂，没有一个官方的标准 |
| 加载缓慢/网络要求高，流畅度不如原生平台，首开等对时间要求高的场景不能很好地做到极致 | 由于没有渲染引擎，使用各端的原生组件渲染，相同代码渲染效果可能不一致性 | 需要使用 Dart，Dart 算是比较偏门的编程语言，所以学习曲线较陡 |
| 运行内存消耗大 | | 企业用户不多 |

## 基本技术原理

跨端方案整体可以做如下分层：

- 开发框架层：DSL（例如 React、WXML、JS、CSS）、开发工具、组件库
- 逻辑层：包括 JS 引擎、Bridge
- 视图层：包括布局引擎（支持 Flex、Grid）、渲染引擎（VDOM、原生组件、Skia）

整体过程为：开发构建完代码后，由跨端运行时加载并执行，首先进行 JS 业务逻辑执行，在 JS 引擎中可以通过调用 JS Bridge（一种将 Native 能力通过 JS 对象暴露给 JS 代码调用的技术）实现原生功能的调用（例如扫码、通知），产生 UI 相关的变更后，通过模板渲染 VM（或者其他类似的模块）生成 VDOM，传递给布局引擎进行 UI 的布局更新，再交由渲染引擎调用原生组件或自渲染引擎进行 UI 绘制。逻辑层和视图层会双向通信，执行 UI 更新或事件回调，这个过程由于在不同的线程或进程中进行，因此需要跨线程通信，涉及到数据的序列化和反序列化，这个过程有性能消耗，因此频繁 set 大量的数据会显著影响跨端 UI 的性能。

![image.png](images/cross-platform-development/cross-platform-development-5.png)

## 跨端框架介绍

### [React Native](https://reactnative.dev/)

#### 简介

React Native 是 Facebook 于 2015 年在 F8 大会开源的 JavaScript 跨端框架，可以让广大开发者使用 JavaScript 和 React 开发跨平台的移动应用。是目前比较具有影响力的跨端方案。它充分利用了 Facebook 现有的技术能力，既拥有 Native 的用户体验，又保留了 React 的开发效率，基本完成了对多端的支持。

#### 技术架构

使用了 Virtual DOM（虚拟 DOM），只需编写一套代码，便可以将代码打包成不同平台的 App。React Native 放弃了采用浏览器控件渲染，采用了由原生接管绘制的方案。原生端和 JavaScript 交互是通过 Bridge 进行的，Bridge 的作用就是给 React Native 内嵌的 JS Engine 提供原生接口的扩展供 JS 调用。所有的本地存储、图片资源访问、图形图像绘制、3D 加速、网络访问、震动效果、NFC、原生控件绘制、地图、定位、通知等都是通过 Bridge 封装成 JS 接口以后注入 JS Engine 供 JS 调用。理论上，任何原生代码能实现的效果都可以通过 Bridge 封装成 JS 可以调用的组件和方法, 以 JS 模块的形式提供给 RN 使用。

![React Native 技术架构](images/cross-platform-development/cross-platform-development-6.png 'React Native 技术架构')

> 绿色的是我们应用开发的部分，我们写的代码基本上都是在这一层；
> 蓝色代表公用的跨平台的代码和工具引擎，一般我们不会动蓝色部分的代码；
> 黄色代表平台相关的 bridge 代码，做定制化的时候会添加修改代码；
> 红色代表系统平台的功能，另外红色上面有一个虚线，表示所有平台相关的东西都通过 bridge 隔离开来了，红色部分是独立于 React Native 的；

![React Native 三线程模式](images/cross-platform-development/cross-platform-development-7.png 'React Native 三线程模式')

**渲染器在多个线程之间分配渲染流水线**

- JS thread。是读取和编译所有 JavaScript 代码、处理应用程序大部分业务逻辑的地方。
  - Metro（打包工具）将 React 源码打包成一个单一 JS 文件(就是图中 JSBundle)。然后传给 JS 引擎执行（现在 IOS 和 Android 统一用的是 JSC）；
  - JS thread 负责 JS 和原生代码的交互，因为 JS 是单线程模型，所以需要一个单独的线程来驱动，并且 JS 和 Native 交互 (Bridge) 是异步的；
- UI Thread(Main Thread/Native thread)。这个线程主要负责两部分：
  - 原生渲染（Native UI）：负责页面的交互，以及当显示、更改 UI 时，完成控件绘制逻辑；
  - 调用原生功能(Native Modules)：比如蓝牙等。当我们使用应用程序时，所有本地模块都会启动。这意味着即使不需要使用蓝牙模块，React Native 也将始终激活它；
- Shadow Thread。 是 React Native 计算布局的地方。
  - 这个线程会创建 Shadow Tree 来模拟 React 结构树。Shadow Tree 可以类似虚拟 dom；
  - 它使用 Facebook 自己的名为 Yoga 的布局引擎来计算 flexbox 布局，然后将结果发送到 Native UI（RN 使用 Flexbox 布局，但是原生是不支持，所以 Yoga 就是用来将 Flexbox 布局转换为原生平台的布局方式）；

#### DSL & 开发套件

使用 React + JS + CSS 进行开发，体验与 React 类似，支持快速刷新等开发能力：

```jsx
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default YourApp;
```

![预览效果](images/cross-platform-development/cross-platform-development-8.png '预览效果')![可使用 React 调试器](images/cross-platform-development/cross-platform-development-9.png '可使用 React 调试器')

![支持端内调试](images/cross-platform-development/cross-platform-development-10.gif '支持端内调试')

#### 原生模块

React Native 的 JS Bridge，叫做原生模块，用于调用系统能力，例如 Apple Pay。不同平台具有不同的原生模块，可以结合 Platform 来区别调用。

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```

#### 架构升级

![0.68 之后的新架构图](images/cross-platform-development/cross-platform-development-11.png '0.68 之后的新架构图')

在通信方式、渲染器、NativeModules 等都发生了改变：

- 最左侧 JS 层除了 React 之外，还引入了一个**静态类型定义 Static Typs**
- JS 打包成 JS Bundle 这步操作也**不再强依赖 JS Core，任何 JS 引擎都可以实现**
- JS 打包成 JS Bundle 后，不再是简单的通过 JSBridge 与 Native 层进行交互，而是要经过 **JSI、Fabric、Turbo Modules** 这三个新模块来实现与 Native 层的交互
- 在 JS 层和 JSI 之间，还有一个新东西叫 **CodeGen**
- JS 线程 与 用于布局的 Shadow 线程 之间的交互也不再需要经过 Native/UI 线程，直接通过 JSI 就可以完成交互

#### 案例

[Showcase · React Native](https://reactnative.dev/showcase)

![image.png](images/cross-platform-development/cross-platform-development-12.png)![image.png](images/cross-platform-development/cross-platform-development-13.png)

![image.png](images/cross-platform-development/cross-platform-development-14)![image.png](images/cross-platform-development/cross-platform-development-15.png)

### [Taro](https://docs.taro.zone/docs/)

#### 简介

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信/ 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

现如今市面上端的形态多种多样，Web、React Native、微信小程序等各种端大行其道。当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。最新的 Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。

#### 技术架构

**Taro 3 之前的架构**

编译时是使用 **babel-parser** 将 Taro 代码解析成抽象语法树，然后通过 **babel-types** 对抽象语法树进行一系列修改、转换操作，最后再通过 **babel-generate** 生成对应的目标代码；

- 错误栈复杂，并且没有 source-map。Taro 对源代码进⾏了⼀系列的转换操作，不⽀持 source-map；
- 和 React DSL 强绑定，React 新特性需要手动对接；
- JSX 适配工作量大，限制多；
- 维护和迭代比较困难。Taro 编译时代码⾮常的复杂且离散，维护迭代都⾮常的困难；

![Taro 2 架构图](images/cross-platform-development/cross-platform-development-16.png 'Taro 2 架构图')

**Taro 3**

Taro 3 的基本原理是直接模拟了一套类似浏览器 BOM/DOM 的 API，下层通过适配各个小程序平台 API 抹平差异，如此，和浏览器的 API 类似，则可以直接在上层支持 React、Vue 等 DSL。例如 React 通过 react-reconciler（实现了 VDOM、diff/fiber 算法）连接 Render（在这层调用浏览器 BOM/DOM），而 Taro 3 自己实现了一个类似的 Render，叫做 taro-react，内部则是实用 Taro 自己的那一套 BOM/DOM API。同时配套提供了统一抽象的标准组件库和 API，也是为了抹平小程序平台间的差异。

![image.png](images/cross-platform-development/cross-platform-development-17.png)

⽤户的 React 或 Vue 的代码会通过 CLI 进⾏ Webpack 打包，在运⾏时会提供 React 和 Vue 对应的适配器进⾏适配，然后调⽤ Taro 提供的 DOM 和 BOM API， 最后把整个程序渲染到所有的⼩程序端上⾯。

![image.png](images/cross-platform-development/cross-platform-development-18.png)![image.png](images/cross-platform-development/cross-platform-development-19.png)

#### DSL & 开发套件

Taro 3 支持将 Web 框架直接运行在各平台，在 Taro 3 中可以使用完整的 **React / Vue / Vue3 / Nerv** 开发体验，开发者使用的是真实的 React 和 Vue 等框架，支持 Typescript。比如，可以使用 React + JS + CSS 进行开发，体验与 React 类似：

```jsx
import { Swiper, SwiperItem } from '@tarojs/components';

function Index() {
  return (
    <Swiper
      className='box'
      autoplay
      interval={1000}
      indicatorColor='#999'
      onClick={() => {}}
      onAnimationFinish={() => {}}
    >
      <SwiperItem>
        <View className='text'>1</View>
      </SwiperItem>
      <SwiperItem>
        <View className='text'>2</View>
      </SwiperItem>
      <SwiperItem>
        <View className='text'>3</View>
      </SwiperItem>
    </Swiper>
  );
}
```

## 跨端的发展猜想

从早期的纯原生到纯 Web 技术演变为 Web 容器技术，再到后来的泛 Web 容器技术，直至重回原生渲染技术以及小程序技术。可以发现在早期我们更注重的是开发效率，到后面越来越重视交互和性能，直至现在因为各种端的精细化，同时需要开发效率与应用性能的整体提升。

### 将覆盖更多的终端-IoT 方向前景

> IoT 是由互联互通的设备所组成的网络，网络中的设备通过传感器、软件或其他技术的嵌入，能够与其他设备和系统进行数据交换。而现阶段，IoT 行业正在加速演化发展。
> 得益于技术爆炸和市场需求的不断扩大，IoT 拥有可观的市场前景。根据 IDC 预测，到 2025 年，全球 IoT 设备数量将达到 416 亿个，并产生 79.4 ZB（泽字节）的数据，在 2018-2025 年，IoT 设备数据量的复合年增长率（CAGR）预计将高达 28.7%。Gartner 物联网研究副总兼分析师 Alfonso Velosa 认为，在未来几年里，IoT 的增长率将持续高于 30%。

对于开发者来说，端的概念不再局限于手机和电脑端，端的概念会覆盖到 TV、车载、家用电器等等。JavaScript 作为一门前端脚本语言，它在各种端、各种平台上面都有一致性的实现，在服务端、网页、无线客户端、嵌入式里面都可以一致的使用，目前热度比较高的是 ruff 技术（支持 JavaScript 开发应用的物联网操作系统）。未来的 IoT 方向在发展过程中，跨端技术一定占据一席之地。

Ruff 开发板接入物联网平台：

![空气质量监控应用](images/cross-platform-development/cross-platform-development-20.png '空气质量监控应用')

### 桌面端小程序

桌面设备在很多情况下已经成了生产力工具，如果在工作场景下能够不需要在手机和其他设备之间来回切换，体验会更加顺畅。

微信桌面端提供了小程序功能后，对于经常使用电脑的办公族来说，微信小程序在 PC 电脑端运行的场景非常多，打卡、签到、协同文档等小程序在电脑上操作的频次非常高。

为了适应快节奏的社会提高效率，移动终端和桌面设备的数据同步变得越来越重要，在移动终端上的应用功能也希望能够在桌面终端上同步且同时能使用。我们可以合理预测未来会产生大量的桌面端小程序，而框架开发者需要将支持功能同步生效到移动端和桌面端，业务开发者则需要多覆盖桌面应用一端。

### 更多中大型 APP 支持小程序形态

在国内市场环境的影响下，各个头部 APP 利用小程序技术已经收获了大量的红利。那么，接下来必然有更多的中大型 APP 团队，会相继发布自己的小程序技术平台，例如：小红书、知乎、大众点评，携程等等。

### 注重更高的性能

随着互联网的不断发展，我们对跨端的要求也一直在变化。传统的 RN、Weex 等技术，都是采用了 JS 逻辑引擎计算，原生渲染引擎再次渲染绘制的方式。如果通信的数据量极大，又或者通信数据频率极高，就会面临通讯阻塞或者缓慢的问题，一定程度上会导致 APP 使用卡顿。所以在渲染引擎，或是逻辑引擎的算法和通信架构设计上急需一次突破。
