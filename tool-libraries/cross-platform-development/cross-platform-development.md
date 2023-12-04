跨端技术从计算机软件出现以来，一直是个经久不衰的话题，尤其在近十年来，跨端在前端领域是一个频繁出现的词汇，国内外互联网厂商的跨端框架不断推陈出新，此起彼伏。我想前端开发者都会产生一些疑问：什么是跨端技术？它解决了什么问题？表现形式和基本原理是什么？在不同的场景下应该如何选型？本次分享尝试对这些问题进行简单的解答（因为笔者对跨端开发并不算深入，有不准确的地方请斧正）。
<a name="z8TZg"></a>
## 跨端技术简介
<a name="fgwS7"></a>
### 什么是跨端技术？
首先理解一下**什么是端**？像 Andriod、iOS、Pad、PC、车机、各种嵌入式等设备，我们称之为终端，它们作为应用的承载平台，为用户提供多样功能的应用托管和运行环境。不同的端上可能会有硬件的差异、不同的操作系统和底层 API，不同的终端或系统有排他性，一般无法直接运行同一套代码编译产物。甚至相同的硬件和系统中，也存在应用层的运行平台隔离（例如各种厂商的小程序），如此一来，想要简单的通过一套代码在多个端、系统、平台上运行，其难度可想而知。<br />**跨端技术**，则是为了实现“**一次编写、到处运行**”这一解放软件开发生产力的理想目标。跨端字面含义是指跨终端（设备），例如跨 iOS、安卓、PC、其他各种设备等，但目前广义上的跨端一般不仅需要跨设备，还需要涉及到跨系统平台、跨应用等目标。而“**一次编写，到处运行**”的口号，也可能会调整为“**Learning once, write anywhere**”（React Native）。狭义上的跨端有多种类型：

1. 以 Web 为基础的 H5 Hybrid 方案，例如 WebView、Electron.js、NW.js、Tauri、Cordova(PhoneGap) 等；
2. 跨端应用框架 + 原生 UI 渲染，指在不同平台间的原生应用中（例如淘宝、抖音），通过动态化的跨端技术，提供接近原生应用体验的容器，具有独立的渲染和 JS 进程，以及布局引擎，其渲染的 UI 组件为系统原生。代表性的技术为 React Native、Weex（阿里）、Lynx（字节）；
3. 跨端应用框架 + 自渲染引擎，和上述方案类似，区别在于没有直接使用系统原生 UI 能力去渲染组件，而是利用了更底层的自定义画布渲染能力，通常比上述方案性能更好，同时在多端渲染一致性上也会更加优秀，且具有更强的自定义能力，代表性的技术为 Google 的 Flutter；
4. 小程序，通常是在特定应用内的生态应用，由应用层磨平平台差异，提供基本一致的 API，也包含独立的渲染和 JS 进程，组件采用 Web + 原生混合的方案。代表技术为微信小程序、支付宝小程序等，在此基础之上还有跨小程序平台的框架，例如 Taro、uni-app；
> _目标：一次编写，多端运行_
> - **硬件形态** 也就是设备，如 PC 电脑，移动设备、物联网设备等
> - **相同硬件形态下的不同平台** 也就是是跨操作系统，如 PC 下的 Mac、Windows、Linux 等；移动设备下的 iOS、Android 等
> - **相同平台下不同的应用或应用中的衍生应用**  如 iOS 平台下浏览器应用（H5），微信小程序，支付宝小程序，抖音小程序等

<a name="OxEHG"></a>
### 跨端技术发展史
**“一次编写，到处运行”的出现**<br />![跨端时间线图](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697011973613-d1d790c2-cbe2-4cfe-ab08-5dac225e707e.png#averageHue=%23bbb40c&clientId=u3f7aebeb-ae5b-4&from=paste&height=930&id=u560fb268&originHeight=1860&originWidth=3868&originalType=binary&ratio=2&rotation=0&showTitle=true&size=574642&status=done&style=none&taskId=u0abca6a5-dd1f-4c5e-a0cb-33d347ce597&title=%E8%B7%A8%E7%AB%AF%E6%97%B6%E9%97%B4%E7%BA%BF%E5%9B%BE&width=1934 "跨端时间线图")
<a name="uZDrE"></a>
#### 早期阶段
2008 年，移动设备基本基于 iOS 和 Android系统，那个时期所有应用的开发，基本都以原生技术为主，iOS 系统应用的开发语言为 Objective-C，Android 系统应用的开发语言为 Java。开发同一款 APP 应用程序需要同时投入 Objective-C 和 Java 的原生开发人员。纯原生开发技术，不仅需要花费大量的精力来保持 iOS 和 Android 两端应用的开发效率和内容表现同步，并且需要的迭代周期比较长，不具备热更新能力。每一次功能的改动，都需要重新向应用商店提交审核，不利于业务初期的快速发展，此刻迫切需要原生技术与 Web 技术的融合。<br />于是催生了 PhoneGap，2009年 Nitobi 的工程师在 iPhoneDevCamp 大会上展示了在 iOS 系统内架设起 Web 接口和 Objective-C 之间的桥梁，开发人员可以使用 HTML5、JavaScript、CSS 等 Web 标准技术来便捷的开发原生程序，实现了“一次编译，到处执行”的能力。2011 年 10 月 Adobe 正式宣布收购 Nitobi 软件，随即 PhoneGap 被正式改名为 Apache Cordova。<br />所以 PhoneGap 和 Cordova 这两个技术方案本质就是针对不同平台的 WebView 做了扩展和封装，是同源的，使得 WebView 这个原生组件，变成了可访问设备本地 API 的强大浏览器。Cordova 打开了跨端领域的一个新大门，Bridge 的思想被广泛传播。

![PhoneGap](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696779758593-8f8fc8e8-d894-4d60-ba38-16ca731a2cab.png#averageHue=%23f0efef&clientId=u0c4bfe9d-c5b1-4&from=paste&height=244&id=u0a967a87&originHeight=648&originWidth=870&originalType=binary&ratio=2&rotation=0&showTitle=true&size=314947&status=done&style=none&taskId=u885b562a-d91a-43de-acaf-b43c94f698d&title=PhoneGap&width=327 "PhoneGap")  ![Cordova](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696779792520-f2b99552-f91b-468b-b72d-6defb1e4efdc.png#averageHue=%23c9c168&clientId=u0c4bfe9d-c5b1-4&from=paste&height=255&id=xBZyr&originHeight=980&originWidth=1240&originalType=binary&ratio=2&rotation=0&showTitle=true&size=267588&status=done&style=none&taskId=u476b3c97-05b9-449a-bc76-ba055e6eaef&title=Cordova&width=323 "Cordova")
<a name="ow0bK"></a>
#### 中期阶段
2015 年 4 月 Facebook 开源了跨平台移动应用开发框架 React Native (简称 RN) 。它是 React 在原生移动应用平台的衍生产物，支持 iOS 和安卓两大平台。RN 使用 Javascript 语言和 CSS 来开发移动应用，因此熟悉 Web 前端开发的技术人员只需很少的学习成本，就可以进入移动应用开发领域。与 React Native 类似，2016 年 6 月阿里巴巴开源了跨平台移动应用开发框架 Weex 。<br />React Native 和 Weex 技术的出现都是为了解决 Web 容器加载、解析和渲染慢的问题，都是放弃了采用浏览器控件渲染，而由原生来接管绘制，响应式编程方式（为你应用的每一个状态设计简洁的视图，当数据变动时，框架能高效更新并渲染合适的组件）让开发者创建交互式 UI 变得轻而易举。<br />使用 React Native 和 Weex 跨端技术开发的 APP 应用，交互体验与原生 APP 相差不大，开发效率非常高。伴随着该类技术的出现，国内外的公司为了抢占市场先机，各大应用商店上架的 APP 数量出现了爆发式的增长，各种混合包，马甲包层出不穷，大大降低了应用商店的产品质量。于是各大应用商店采取了相应的措施，对这部分用 RN、Weex 混合技术开发的应用，提高了审核通过的要求。这导致了大量的 APP 上不了架，严重的影响了各家业务的发展。于是，有心人就开始思考，能不能自己做应用市场，那就不再受限于 APP 审核。<br />2017 微信小程序正式发布，而它是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户通过扫一扫或搜一下即可打开应用。小程序不仅解决了用户想在短时间内获取服务并且不需要下载 APP 的问题，还开发了一个新的商业模式，借助微信 APP 本身的大流量很方便的帮助商家从线上引流，扩大营销渠道，沉淀用户的需求。小程序的成功让那些拥有巨大流量 APP 的背后巨头也纷纷开始效仿，开发出了自己的小程序平台。<br />![各个平台小程序分布图](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696781244576-b67d41bf-8d9f-4de9-9680-a33dd6022cbe.png#averageHue=%23f3c42a&clientId=u32647b40-8d6f-4&from=paste&height=385&id=u16cc81b0&originHeight=770&originWidth=2634&originalType=binary&ratio=2&rotation=0&showTitle=true&size=599444&status=done&style=none&taskId=ud3109a58-c79a-4f9b-b3db-a69bc75b7e2&title=%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%88%86%E5%B8%83%E5%9B%BE&width=1317 "各个平台小程序分布图")<br />2018 年，阿里、百度、字节跳动、手机厂商等各大巨头纷纷发布自己的小程序。同年 12 月，Flutter 1.0 在 Flutter Live 活动中发布，是该框架的第一个“稳定”版本，不过因为在小程序快速发展时期，它在国内没有得到应有的热度。2019 年，QQ 也加入小程序队列，各家小程序全面开花，从此正式进入终端碎片化时代。<br />这个时期，市面上端的形态多种多样，Web、React Native、微信小程序、支付宝小程序、快应用等各种端大行其道。这让很多开发者也苦不堪言，一会写微信小程序语法，一会写快应用语法，一会又写 Web 和 React Native，可能自己都不清楚自己到底擅长哪个技术了。<br />这时候只编写一套代码就能够适配到多端的能力就显得极为需要。于是，各种基于 react、vue、原生小程序或者自定义 DSL 语法的跨端框架如雨后春笋般出现。<br />各种跨端框架（此处只列举部分热度较高框架），按照出现的时间排列如下：
> - **WePY**，一款类 vue 语法规范的小程序框架，第一个版本是腾讯团队在 2016 年 12 发布。
> - **Mpvue**，是一个使用 Vue.js 开发小程序的前端框架，由美团团队在 2018 年 3 月开源。
> - **Taro**，是一个开放式跨端跨框架解决方案，由京东的凹凸实验室团队在 2018 年 6 月开源。
> - **Uni-app**，是一个使用 Vue.js 开发所有前端应用的框架，由 DCloud 团队在 2018 年 7 月开源。
> - **Mpx**， 是一款具有优秀开发体验和深度性能优化的增强型跨端小程序框架，由滴滴团队在 2018 年 12 月开源。
> - **Chameleon**，是一个有理想的能适应不同环境的跨端整体解决方案，由滴滴团队在 2019 年 8 月开源。
> - **Remax**，是使用 React 构建跨平台小程序的框架，由蚂蚁金服在 2019 年 8 月开源。

大概经过了 3~4 年的跨端技术发展，目前较为活跃的跨端框架还剩下 Taro 和 uni-app。
<a name="GD8gh"></a>
#### 后期阶段
在移动互联网后期，很多框架技术也开始归于稳定了。<br />在国外的环境下，移动端跨端技术目前还在保持高度活跃的，只剩下 React Native 和 Flutter 了。<br />Flutter 是性能与构建思路几乎最接近原生开发的框架，又能够满足跨端开发的需求，所以社区一直对它保持着持续的关注（虽然在国内不够火）。React Native 虽然它的热度已经大不如前，期间还爆出 Airbnb 要放弃 React Native ，回归原生技术开发的各种猜测，但是 RN 积累的开发者数量是极其巨大的，而且技术背靠 Facebook ，所以 React Native 技术依然有很多使用者。<br />在国内的环境下，当下最火的无疑是小程序技术，各个巨头也都是打着全民拥抱小程序的口号，各个头部 APP 也不停的衍生出各类的小程序应用。毫无疑问，Taro 和 uni-app 这两个一直保持着较高热度的小程序跨端开发框架，是小程序时代的明星。
<a name="NhaNu"></a>
### 方案横向对比
| 方案类型 | 优点 | 缺点 |
| --- | --- | --- |
| 以 Web 为基础的 H5 Hybrid<br />（WebView、Cordova(PhoneGap) ） | <br />- 接入成本极低，基本可以复用前端的技术栈和生态；<br />- 开发效率高，节约时间；<br />- 更新和部署比较方便；<br />- 代码维护方便、版本更新快，节省产品成本<br />- 比web版实现功能多；<br />- 可离线运行；<br /> | <br />- 功能/界面无法自定；<br />- 受限于 webview 等原因，动画复杂、无限流类的页面性能较差；<br />- 加载缓慢/网络要求高，流畅度不如原生平台，首开等对时间要求高的场景不能很好地做到极致；<br />- 运行内存消耗大；<br /> |
| 跨端应用框架 + 原生 UI 渲染<br />（React Native、 Weex） | <br />- 使用原生组件渲染，可获得与 native 一致的体验；<br />- 首屏性能和运行内存占用更有优势；<br />- 可以通过 JSBundle 即时更新 App，能快速发布；<br />- 简单易学；<br />- 热加载的即时编译方式能快速编译 ；<br /> | <br />- JS 和 Native 之间需要通信，动画性能在动画效率和性能的支持还存在一些问题，性能上不如原生 API；<br />- 第三方依赖，严重依赖于大厂的维护；<br />- 不能完全屏蔽原生平台，对于不同的平台特性的内容，需要有一些兼容的写法，甚至各平台各写一套；<br />- 由于没有渲染引擎，使用各端的原生组件渲染，相同代码渲染效果可能不一致性；<br /> |
| 跨端应用框架 + 自渲染引擎<br />（Flutter） | <br />- 采用自渲染引擎，具有极好的多端一致性，定制性好；<br />- 性能好，更接近原生；<br />- 可以实时查看代码变更对应用程序的改动，可以预览，能提高开发效率；<br />- 提供了丰富的可自定义的组件，用于创建美观且用户友好的界面，强调视觉效果；<br />- 提供快速流畅的动画和过渡效果，在旧设备上也可以流畅运行，性能高；<br />- 同时支持 JIT 和 AOT 两种编译方式的特性，在不同场景下可以使用不同的编译方式；<br /> | <br />- UI 跨平台，但原生能力没有，脱离不开原生，开发人员需要具备原生（Android、iOS）基础开发能力，兼容适配性较差；<br />- 第三方库较少，且生态中的 SDK，各种第三方包鱼龙混杂，没有一个官方的标准；<br />- 需要使用 Dart，Dart 算是比较偏门的编程语言，所以学习曲线较陡；<br />- 企业用户不多；<br /> |
| DSL 编译 + 混合渲染<br />（Taro、uni-app） | <br />- 易于使用，开发成本低、学习成本小，本质上就是在写前端；<br />- 基于原生组件；<br />- 插件多；<br />- 适用于小型应用程序；<br /> | <br />- 什么都想要，而什么都没有到极致，如果只是做一个能用的应用，是合适的，如果对于性能要求高，或者有比较复杂的交互，需要谨慎调研考虑一下；<br />- 虽然插件多，但是以个人开发者居多，质量参差不齐，没有保证；<br />- 兼容性问题依然有很多小细节问题，存在多端同时上线，某一端存在 bug 的情况；<br />- 缺乏扩展性，比如 uni-app 原生功能依赖于 nvue ，对于没有提供的原生功能，需要对应的原生开发同学来开发；<br /> |

<a name="UbJNw"></a>
## 基本技术原理
跨端方案整体可以做如下分层：

- 开发框架层：DSL（例如 React、WXML、JS、CSS）、开发工具、组件库
- 逻辑层：包括 JS 引擎、Bridge
- 视图层：包括布局引擎（支持 Flex、Grid）、渲染引擎（VDOM、原生组件、Skia）

整体过程为：开发构建完代码后，由跨端运行时加载并执行，首先进行 JS 业务逻辑执行，在 JS 引擎中可以通过调用 JS Bridge（一种将 Native 能力通过 JS 对象暴露给 JS 代码调用的技术）实现原生功能的调用（例如扫码、通知），产生 UI 相关的变更后，通过模板渲染 VM（或者其他类似的模块）生成 VDOM，传递给布局引擎进行 UI 的布局更新，再交由渲染引擎调用原生组件或自渲染引擎进行 UI 绘制。逻辑层和视图层会双向通信，执行 UI 更新或事件回调，这个过程由于在不同的线程或进程中进行，因此需要跨线程通信，涉及到数据的序列化和反序列化，这个过程有性能消耗，因此频繁 set 大量的数据会显著影响跨端 UI 的性能。<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696905230984-dc1b7b48-56fc-4752-a3ac-352389728122.png#averageHue=%23797a79&clientId=udedaffd5-ea0d-4&from=paste&height=503&id=u4e1e2f92&originHeight=1114&originWidth=1418&originalType=binary&ratio=2&rotation=0&showTitle=false&size=139739&status=done&style=none&taskId=udfb27b90-72bc-4aa0-bdbb-958878101fa&title=&width=640)
<a name="cw2ew"></a>
## 跨端框架介绍
<a name="ZC336"></a>
### [React Native](https://reactnative.dev/)
<a name="TZwh4"></a>
#### 简介
React Native 是 Facebook 于 2015 年在 F8 大会开源的 JavaScript 跨端框架，可以让广大开发者使用JavaScript 和 React 开发跨平台的移动应用。是目前比较具有影响力的跨端方案。它充分利用了 Facebook 现有的技术能力，既拥有 Native 的用户体验，又保留了 React 的开发效率，基本完成了对多端的支持。
<a name="K2qR9"></a>
#### 技术架构
使用了 Virtual DOM（虚拟 DOM），只需编写一套代码，便可以将代码打包成不同平台的 App。React Native 放弃了采用浏览器控件渲染，采用了由原生接管绘制的方案。原生端和 JavaScript 交互是通过 Bridge 进行的，Bridge 的作用就是给 React Native 内嵌的 JS Engine 提供原生接口的扩展供 JS 调用。所有的本地存储、图片资源访问、图形图像绘制、3D 加速、网络访问、震动效果、NFC、原生控件绘制、地图、定位、通知等都是通过 Bridge 封装成 JS 接口以后注入 JS Engine 供 JS 调用。理论上，任何原生代码能实现的效果都可以通过 Bridge 封装成 JS 可以调用的组件和方法, 以 JS 模块的形式提供给 RN 使用。<br />![React Native 技术架构](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697031320099-a7283b9d-e6bf-4105-8108-a1ab44d69e35.png#averageHue=%23f0a30b&clientId=u3f7aebeb-ae5b-4&from=paste&height=860&id=u11a93f84&originHeight=1720&originWidth=3204&originalType=binary&ratio=2&rotation=0&showTitle=true&size=206764&status=done&style=none&taskId=u094daa1d-7ccc-495c-88ee-7c962cf0b42&title=React%20Native%20%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84&width=1602 "React Native 技术架构")
> 绿色的是我们应用开发的部分，我们写的代码基本上都是在这一层；
> 蓝色代表公用的跨平台的代码和工具引擎，一般我们不会动蓝色部分的代码；
> 黄色代表平台相关的 bridge 代码，做定制化的时候会添加修改代码；
> 红色代表系统平台的功能，另外红色上面有一个虚线，表示所有平台相关的东西都通过 bridge 隔离开来了，红色部分是独立于 React Native 的；

![React Native 三线程模式](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697034557124-abff9953-8945-4927-90d7-eb798608f891.png#averageHue=%23e3c800&clientId=u3f7aebeb-ae5b-4&from=paste&height=736&id=uf75333e1&originHeight=1472&originWidth=3240&originalType=binary&ratio=2&rotation=0&showTitle=true&size=204067&status=done&style=none&taskId=u26abd11e-3aa5-484c-ad3d-90be58a46b0&title=React%20Native%20%E4%B8%89%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%BC%8F&width=1620 "React Native 三线程模式")<br />**渲染器在多个线程之间分配渲染流水线**

- JS thread。是读取和编译所有 JavaScript 代码、处理应用程序大部分业务逻辑的地方。 
   - Metro（打包工具）将React源码打包成一个单一JS文件(就是图中JSBundle)。然后传给JS引擎执行（现在 IOS 和 Android 统一用的是JSC）；
   - JS thread 负责 JS 和原生代码的交互，因为 JS 是单线程模型，所以需要一个单独的线程来驱动，并且 JS 和 Native 交互 (Bridge) 是异步的；
- UI Thread(Main Thread/Native thread)。这个线程主要负责两部分： 
   - 原生渲染（Native UI）：负责页面的交互，以及当显示、更改UI时，完成控件绘制逻辑；
   - 调用原生功能(Native Modules)：比如蓝牙等。当我们使用应用程序时，所有本地模块都会启动。这意味着即使不需要使用蓝牙模块，React Native 也将始终激活它；
- Shadow Thread。 是 React Native 计算布局的地方。 
   - 这个线程会创建 Shadow Tree 来模拟React结构树。Shadow Tree可以类似虚拟dom；
   - 它使用 Facebook 自己的名为 Yoga 的布局引擎来计算 flexbox 布局，然后将结果发送到 Native UI（RN使用Flexbox布局，但是原生是不支持，所以 Yoga 就是用来将 Flexbox 布局转换为原生平台的布局方式）；
<a name="V4a1G"></a>
#### DSL & 开发套件
使用 React + JS + CSS 进行开发，体验与 React 类似，支持快速刷新等开发能力：
```jsx
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

export default YourApp;
```
![预览效果](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696867211015-94df5848-81a7-4071-80ed-7c7ee0e855c4.png#averageHue=%23e3e3e3&clientId=u4540c50c-ddd0-4&from=paste&height=398&id=fu4pb&originHeight=928&originWidth=580&originalType=binary&ratio=2&rotation=0&showTitle=true&size=56768&status=done&style=none&taskId=u012a1f72-abcf-4c87-bae6-27ddb7c968e&title=%E9%A2%84%E8%A7%88%E6%95%88%E6%9E%9C&width=249 "预览效果")![可使用 React 调试器](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696867375262-663aac0d-2d5d-4460-8c34-61d0f0bd37bd.png#averageHue=%23b2b1b1&clientId=u4540c50c-ddd0-4&from=paste&height=383&id=u68d2e852&originHeight=1424&originWidth=1824&originalType=binary&ratio=2&rotation=0&showTitle=true&size=599079&status=done&style=none&taskId=u46923ad4-26eb-4e72-bfd4-880b4c21c5f&title=%E5%8F%AF%E4%BD%BF%E7%94%A8%20React%20%E8%B0%83%E8%AF%95%E5%99%A8&width=491 "可使用 React 调试器")<br />![支持端内调试](https://cdn.nlark.com/yuque/0/2023/gif/22899992/1696867514115-2639a7c4-18b0-4e89-a280-e8f34a54f9a5.gif#averageHue=%23f1f1f1&clientId=u4540c50c-ddd0-4&from=ui&id=ub22dc5a0&originHeight=589&originWidth=318&originalType=binary&ratio=2&rotation=0&showTitle=true&size=1131627&status=done&style=none&taskId=uba07fd49-ba92-4475-8b5b-1be4bfc7ca0&title=%E6%94%AF%E6%8C%81%E7%AB%AF%E5%86%85%E8%B0%83%E8%AF%95 "支持端内调试")
<a name="UFXAj"></a>
#### 原生模块
React Native 的 JS Bridge，叫做原生模块，用于调用系统能力，例如 Apple Pay。不同平台具有不同的原生模块，可以结合 Platform 来区别调用。
```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```
<a name="IBjS9"></a>
#### 架构升级
![0.68 之后的新架构图](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697094267257-e9a00af3-f4b9-4c26-822f-f33ac65a559a.png#averageHue=%23fcfcfc&clientId=u99ca9a6f-bcfe-4&from=paste&height=403&id=il1D9&originHeight=805&originWidth=1512&originalType=binary&ratio=2&rotation=0&showTitle=true&size=217907&status=done&style=none&taskId=uef9d4a1b-5d54-4b6b-bfdb-12cd0a96d0b&title=0.68%20%E4%B9%8B%E5%90%8E%E7%9A%84%E6%96%B0%E6%9E%B6%E6%9E%84%E5%9B%BE&width=756 "0.68 之后的新架构图")<br />在通信方式、渲染器、NativeModules等都发生了改变：

- 最左侧 JS 层除了 React 之外，还引入了一个**静态类型定义 Static Typs**
- JS 打包成 JS Bundle 这步操作也**不再强依赖 JS Core，任何 JS 引擎都可以实现**
- JS 打包成 JS Bundle 后，不再是简单的通过 JSBridge 与 Native 层进行交互，而是要经过 **JSI、Fabric、Turbo Modules** 这三个新模块来实现与 Native 层的交互
- 在 JS 层和 JSI 之间，还有一个新东西叫 **CodeGen**
- JS 线程 与 用于布局的 Shadow 线程 之间的交互也不再需要经过 Native/UI 线程，直接通过 JSI 就可以完成交互
<a name="nsOBW"></a>
#### 案例
[Showcase · React Native](https://reactnative.dev/showcase)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696868700543-a9083ad7-7972-4252-a121-dab61c6df015.png#averageHue=%23fcfbf5&clientId=u4540c50c-ddd0-4&from=paste&height=264&id=u8d1e1138&originHeight=1148&originWidth=1036&originalType=binary&ratio=2&rotation=0&showTitle=false&size=873762&status=done&style=none&taskId=ud6fac4e3-31ba-4ddd-9c12-8a6486caeab&title=&width=238)![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696868723717-4bd643e9-2ba4-48e8-84ef-2aa2047ea895.png#averageHue=%23fbfcfb&clientId=u4540c50c-ddd0-4&from=paste&height=267&id=uaccf2e39&originHeight=1144&originWidth=1544&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1213369&status=done&style=none&taskId=u09433125-0478-46db-8136-63360f8f634&title=&width=360)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696868813044-3a404031-d174-4d63-8865-e0581ca81634.png#averageHue=%23f9faf9&clientId=u4540c50c-ddd0-4&from=paste&height=139&id=u45138705&originHeight=570&originWidth=524&originalType=binary&ratio=2&rotation=0&showTitle=false&size=221194&status=done&style=none&taskId=ue105cc44-c58a-4070-b00a-a5f4f514875&title=&width=128)![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696868787191-92834f16-26af-4431-8f8e-9a34a78d3936.png#averageHue=%23fdfdfc&clientId=u4540c50c-ddd0-4&from=paste&height=133&id=u6f7b1c88&originHeight=582&originWidth=1046&originalType=binary&ratio=2&rotation=0&showTitle=false&size=405214&status=done&style=none&taskId=udc122e3a-e15a-478a-abab-93a9bf33d98&title=&width=239)
<a name="iwL7M"></a>
### [Taro](https://docs.taro.zone/docs/)
<a name="STvhw"></a>
#### 简介
Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信/ 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。<br />现如今市面上端的形态多种多样，Web、React Native、微信小程序等各种端大行其道。当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。最新的 Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。
<a name="JSvw1"></a>
#### 技术架构
**Taro 3 之前的架构**<br />编译时是使用 **babel-parser** 将 Taro 代码解析成抽象语法树，然后通过 **babel-types** 对抽象语法树进行一系列修改、转换操作，最后再通过 **babel-generate** 生成对应的目标代码；

- 错误栈复杂，并且没有 source-map。Taro 对源代码进⾏了⼀系列的转换操作，不⽀持 source-map；
- 和 React DSL 强绑定，React 新特性需要手动对接；
- JSX 适配工作量大，限制多；
- 维护和迭代比较困难。Taro 编译时代码⾮常的复杂且离散，维护迭代都⾮常的困难；

![Taro 2 架构图](https://cdn.nlark.com/yuque/0/2023/png/22899992/1696902579733-e4ce491e-6be4-4b9b-b568-59f33fdd711d.png#averageHue=%23e6eace&clientId=udedaffd5-ea0d-4&from=paste&height=573&id=aCaSz&originHeight=1146&originWidth=1314&originalType=binary&ratio=2&rotation=0&showTitle=true&size=452433&status=done&style=none&taskId=u216ed2dc-1ad9-4d76-835e-f27ba58dd98&title=Taro%202%20%E6%9E%B6%E6%9E%84%E5%9B%BE&width=657 "Taro 2 架构图")<br />**Taro 3**<br />Taro 3 的基本原理是直接模拟了一套类似浏览器 BOM/DOM 的 API，下层通过适配各个小程序平台 API 抹平差异，如此，和浏览器的 API 类似，则可以直接在上层支持 React、Vue 等 DSL。例如 React 通过 react-reconciler（实现了 VDOM、diff/fiber 算法）连接 Render（在这层调用浏览器 BOM/DOM），而 Taro 3 自己实现了一个类似的 Render，叫做 taro-react，内部则是实用 Taro 自己的那一套 BOM/DOM API。同时配套提供了统一抽象的标准组件库和 API，也是为了抹平小程序平台间的差异。<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697039674802-02b9d2e9-2796-4d51-a354-1f47d91849f2.png#averageHue=%23f5e8e2&clientId=u3f7aebeb-ae5b-4&from=paste&height=323&id=u0b3a5408&originHeight=646&originWidth=1512&originalType=binary&ratio=2&rotation=0&showTitle=false&size=250357&status=done&style=none&taskId=uc5e33a4c-1643-4e5b-a3aa-491d848b49e&title=&width=756)<br />⽤户的 React 或 Vue 的代码会通过 CLI 进⾏ Webpack 打包，在运⾏时会提供 React 和 Vue 对应的适配器进⾏适配，然后调⽤ Taro 提供的 DOM 和 BOM API， 最后把整个程序渲染到所有的⼩程序端上⾯。<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697039681890-85b0a3e6-3a78-44fe-943e-7cdcf04f5f8d.png#averageHue=%23f8f7f6&clientId=u3f7aebeb-ae5b-4&from=paste&height=305&id=udef6421a&originHeight=610&originWidth=654&originalType=binary&ratio=2&rotation=0&showTitle=false&size=103150&status=done&style=none&taskId=udc62fb77-6e2f-4032-a451-cf47fe15c6f&title=&width=327)![image.png](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697039693309-56a21360-d7f3-4ded-b432-29a185b49260.png#averageHue=%23fefefc&clientId=u3f7aebeb-ae5b-4&from=paste&height=297&id=u88a20d20&originHeight=594&originWidth=742&originalType=binary&ratio=2&rotation=0&showTitle=false&size=106305&status=done&style=none&taskId=u6a02fb65-940e-4d1e-b807-c2339d150d9&title=&width=371)
<a name="OoNMi"></a>
#### DSL & 开发套件
Taro 3 支持将 Web 框架直接运行在各平台，在 Taro 3 中可以使用完整的 **React / Vue / Vue3 / Nerv** 开发体验，开发者使用的是真实的 React 和 Vue 等框架，支持 Typescript。比如，可以使用 React + JS + CSS 进行开发，体验与 React 类似：
```jsx
import { Swiper, SwiperItem } from '@tarojs/components'

function Index() {
  return (
    <Swiper
      className="box"
      autoplay
      interval={1000}
      indicatorColor="#999"
      onClick={() => {}}
      onAnimationFinish={() => {}}
    >
      <SwiperItem>
        <View className="text">1</View>
      </SwiperItem>
      <SwiperItem>
        <View className="text">2</View>
      </SwiperItem>
      <SwiperItem>
        <View className="text">3</View>
      </SwiperItem>
    </Swiper>
  )
}
```
<a name="dzl71"></a>
## 跨端的发展猜想
从早期的纯原生到纯 Web 技术演变为 Web 容器技术，再到后来的泛 Web 容器技术，直至重回原生渲染技术以及小程序技术。可以发现在早期我们更注重的是开发效率，到后面越来越重视交互和性能，直至现在因为各种端的精细化，同时需要开发效率与应用性能的整体提升。
<a name="UoS0L"></a>
### **将覆盖更多的终端-IoT 方向前景**
> IoT 是由互联互通的设备所组成的网络，网络中的设备通过传感器、软件或其他技术的嵌入，能够与其他设备和系统进行数据交换。而现阶段，IoT 行业正在加速演化发展。
> 得益于技术爆炸和市场需求的不断扩大，IoT 拥有可观的市场前景。根据 IDC 预测，到 2025 年，全球 IoT 设备数量将达到 416 亿个，并产生 79.4 ZB（泽字节）的数据，在 2018-2025 年，IoT 设备数据量的复合年增长率（CAGR）预计将高达 28.7%。Gartner 物联网研究副总兼分析师 Alfonso Velosa 认为，在未来几年里，IoT 的增长率将持续高于 30%。

对于开发者来说，端的概念不再局限于手机和电脑端，端的概念会覆盖到 TV、车载、家用电器等等。JavaScript 作为一门前端脚本语言，它在各种端、各种平台上面都有一致性的实现，在服务端、网页、无线客户端、嵌入式里面都可以一致的使用，目前热度比较高的是 ruff 技术（支持 JavaScript 开发应用的物联网操作系统）。未来的 IoT 方向在发展过程中，跨端技术一定占据一席之地。<br />Ruff开发板接入物联网平台：<br />![空气质量监控应用](https://cdn.nlark.com/yuque/0/2023/png/22899992/1697038903143-1243a662-2f8a-4df6-b413-38d8d983d64b.png#averageHue=%23eae3d9&clientId=u3f7aebeb-ae5b-4&from=paste&height=337&id=uc8b0d165&originHeight=414&originWidth=735&originalType=binary&ratio=2&rotation=0&showTitle=true&size=198028&status=done&style=none&taskId=u6d02fa63-7e9b-4cff-ab4a-10e73fa97cf&title=%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%E7%9B%91%E6%8E%A7%E5%BA%94%E7%94%A8&width=598.5 "空气质量监控应用")
<a name="BXcJT"></a>
### 桌面端小程序
桌面设备在很多情况下已经成了生产力工具，如果在工作场景下能够不需要在手机和其他设备之间来回切换，体验会更加顺畅。<br />微信桌面端提供了小程序功能后，对于经常使用电脑的办公族来说，微信小程序在PC电脑端运行的场景非常多，打卡、签到、协同文档等小程序在电脑上操作的频次非常高。<br />为了适应快节奏的社会提高效率，移动终端和桌面设备的数据同步变得越来越重要，在移动终端上的应用功能也希望能够在桌面终端上同步且同时能使用。我们可以合理预测未来会产生大量的桌面端小程序，而框架开发者需要将支持功能同步生效到移动端和桌面端，业务开发者则需要多覆盖桌面应用一端。
<a name="wEBJW"></a>
### 更多中大型 APP 支持小程序形态
在国内市场环境的影响下，各个头部 APP 利用小程序技术已经收获了大量的红利。那么，接下来必然有更多的中大型 APP 团队，会相继发布自己的小程序技术平台，例如：小红书、知乎、大众点评，携程等等。
<a name="wsGDU"></a>
### 注重更高的性能
随着互联网的不断发展，我们对跨端的要求也一直在变化。传统的 RN、Weex 等技术，都是采用了 JS 逻辑引擎计算，原生渲染引擎再次渲染绘制的方式。如果通信的数据量极大，又或者通信数据频率极高，就会面临通讯阻塞或者缓慢的问题，一定程度上会导致 APP 使用卡顿。所以在渲染引擎，或是逻辑引擎的算法和通信架构设计上急需一次突破。

