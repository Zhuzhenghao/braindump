---
author: "Hugo Authors"
title: WebAssembly (WASM) Presentation
date: 2021-07-13
description: "Lorem Ipsum Dolor Si Amet"
tags: ["markdown", "text"]
thumbnail: /blog-post.jpg
---

## Introduction

### What is WebAssembly?

WebAssembly is a new type of code that can be run in modern web browsers and provides new features and major gains in performance. It is not primarily intended to be written by hand, rather it is designed to be an effective compilation target for source languages like C, C++, Rust, etc.

This has huge implications for the web platform — it provides a way to run code written in multiple languages on the web at near-native speed, with client apps running on the web that previously couldn't have done so.

What's more, you don't even have to know how to create WebAssembly code to take advantage of it. WebAssembly modules can be imported into a web (or Node.js) app, exposing WebAssembly functions for use via JavaScript. JavaScript frameworks could make use of WebAssembly to confer massive performance advantages and new features while still making functionality easily available to web developers.

### WebAssembly goals

WebAssembly is being created as an open standard inside the
[W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
with the following goals:

- **Be fast, efficient, and portable** — WebAssembly code can be executed at near-native speed across different platforms by taking advantage of common hardware capabilities.
- **Be readable and debuggable** — WebAssembly is a low-level assembly language, but it does have a human-readable text format (the specification for which is still being finalized) that allows code to be written, viewed, and debugged by hand.
- **Keep secure** — WebAssembly is specified to be run in a safe, sandboxed execution environment. Like other web code, it will enforce the browser's same-origin and permissions policies.
- **Don't break the web** — WebAssembly is designed so that it plays nicely with other web technologies and maintains backwards compatibility.

## Getting Started

When you've written a new code module in a language like C/C++, you can compile it into WebAssembly using a tool like [Emscripten](https://emscripten.org/). Let's look at how it works.

### Emscripten Environment Setup

```shell
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Fetch the latest version of the emsdk (not needed the first time you clone)
git pull

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh

emcc -v
```

If you don't want to execute this every time, you can add the following to your .zshrc (or .bashrc):

```shell
# Absolute path to the emsdk_env.sh file is required
source ~/emsdk/emsdk_env.sh &> /dev/null
```

### Hello World

1. [Compiling a New C/C++ Module to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm#creating_html_and_javascript)
2. Sobel filter (WASM)

## Challenges and Considerations

### 1. Debugging

- Debugging WASM code can be challenging.
- Explore tools and techniques for effective debugging.

### 2. Security

- Be aware of potential security risks associated with running untrusted WebAssembly code.
- Implement best practices to mitigate security concerns.

## Conclusion

- Recap the benefits and use cases of WebAssembly.
- Encourage exploration and experimentation with WebAssembly in your projects.

## Disadvantages & challenges

While WebAssembly (WASM) offers numerous advantages, it also has some potential disadvantages and challenges. It's essential to consider these aspects when deciding whether to use WebAssembly in a particular context. Here are some of the disadvantages of WebAssembly:

1. **Debugging Complexity:**

   - Debugging WebAssembly code can be more challenging than debugging traditional JavaScript. Source maps can help, but the debugging experience may not be as seamless.

2. **Lack of DOM Access:**

   - WebAssembly code doesn't have direct access to the DOM. Interaction with the web page's document object model (DOM) often requires communication through JavaScript, which can introduce overhead.

3. **Cold Start Performance:**

   - The initial load time of a WebAssembly module can be slower than executing equivalent JavaScript code, particularly for small and simple tasks. This is known as the "cold start" problem.

4. **Limited Browser Support:**

   - While major browsers support WebAssembly, some older or less common browsers may not fully support it. Always check for browser compatibility if broad user accessibility is a concern.

5. **Increased Binary Size:**

   - WebAssembly binaries can be larger than equivalent JavaScript code. This may impact page load times, especially if there are multiple and substantial WebAssembly modules.

6. **Security Concerns:**

   - Running code from untrusted sources as WebAssembly may pose security risks. Developers need to be cautious when executing WebAssembly code obtained from external or untrusted sources.

7. **Learning Curve:**

   - Developers accustomed to working with traditional web technologies may face a learning curve when transitioning to WebAssembly and integrating it into their workflows.

8. **Limited Ecosystem for Some Languages:**

   - While there is good support for languages like C, C++, and Rust, the ecosystem for other languages may be more limited. This can affect the availability of libraries and tools.

9. **Not a Silver Bullet:**
   - WebAssembly is not a one-size-fits-all solution. It is most beneficial for specific use cases, such as performance-critical tasks, and may not be necessary for all web applications.

Despite these challenges, WebAssembly has proven to be a valuable tool for enhancing web application performance and enabling new possibilities. It's crucial to carefully assess whether the benefits outweigh the drawbacks based on the specific requirements of your project.

## Resources

- [Official WebAssembly Website](https://webassembly.org/)
- [Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/en-US/docs/WebAssembly)
