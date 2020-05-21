<template>
  <div>
    <section>
      <p>
        <a href="https://reactjs.org/" target="_blank">React</a>
        是一个开源前端 JavaScript 库，用于构建用户界面，尤其是单页应用程序。它用于处理网页和移动应用程序的视图层。
      </p>
      <p>React 是由 Facebook 的软件工程师 Jordan Walke 创建的。在 2011 年 React 应用首次被部署到 Facebook 的信息流中，之后于 2012 年被应用到 Instagram 上</p>
    </section>
    <ol>
      <h4>阅读资源：</h4>
      <li>
        <a href="https://react.docschina.org/docs/hello-world.html" target="_blank">React 中文文档</a>
      </li>
      <li>
        <a href="(https://juejin.im/post/5b481f6b51882519ad6175c2" target="_blank">掘金 - 图解 React</a>
      </li>
      <li>
        <a
          href="https://juejin.im/post/5c0c7304f265da613e22106c"
          target="_blank"
        >掘金 - 200 行代码实现简版 react</a>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      q1: null
    }
  },
  mounted() {
    // import('./lib-that-access-window-on-import').then(module => {
    //   this.demo = module.default
    // })
  }
}
</script>