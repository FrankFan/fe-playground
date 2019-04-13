## JSONP


### 原理

由于同源策略的限制，浏览器只允许XmlHttpRequest请求当前源（协议、域名、端口只要有一个不一致，就认为是跨域）的资源，而对请求script资源没有限制（`img`资源也没有限制，所以有一种`img Ping`的类似`JSON`技术，只不过是单向通信）。通过请求script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，这种跨域的数据的方式被称为JSONP。

### 简单实现

`JSONP`，全称 JSON with Padding，可以理解为填充式json或者参数式json，用于解决AJAX跨域问题的一种方案。`JSONP` 看起来和 `JSON` 差不多，只不过是被包含在函数调用中的 `JSON`，就像下面这样：

`callback({ name: 'Tony' });`

`JSONP`由两部分组成：回调函数和数据。回调函数就是当响应来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。而数据就是传入回调函数的中的`JSON`数据。例如：

`http://www.test.com/jsonp?callback=handleResponse`

`JSONP`是通过动态创建`<script>`元素来使用的，使用时可以为 `src` 属性指定一个跨域的 URL。 这里的`<script>`与`<img>`元素类似，都有能力不受限制地从其他域中加载资源。

举个简单的例子：

```js
function handleResponse(response) {
  console.log(response);
}

var script = document.createElement('script');
script.src = 'https://api.asilu.com/geoip/?callback=handleResponse';
document.body.appendChild(script);
```

![](https://ws1.sinaimg.cn/large/006tNc79ly1g20xrvzldhj30x20ma0wz.jpg)

![](https://ws1.sinaimg.cn/large/006tNc79ly1g20xs8dejgj30x205kab0.jpg)

这是一个很简单的演示，实现一个用于生产环境的版本有很多细节需要处理的。



