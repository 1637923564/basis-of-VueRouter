# 关于Vue Router
## 基本用法
* /views 目录下新建一个路由文件(如：Demo.vue)
* router.js中
```javaScript
import Demo from "./vuews/Demo"
{
  path: "/demo/:option",
  name: "demo",
  component: Demo
}
```
* 跟组件中
```html
<router-link to="/demo/这是一个路由参数">The page of Demo</router-link>
<router-view />
```
## 更多用法
* router对象的实例: this.$router
>* push(): 访问某路径，同html中router-link的to属性
```javaScript
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
>* replace(): 与 push() 用法相同
>* go(): 类似于 window.history.go(n)
```javascript
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```
* route: this.$route
>* params.option: 获取路由参数 option 的值
>* query.page: 获取选项参数 page 的值

* props：在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。使用 props 将组件和路由解耦：
>* main.js中
```javascript
import Demo from "./vuews/Demo"
{
  path: "/demo/:option",
  name: "demo",
+ props: true, 
  component: Demo
}
```
>* Demo.vue中
```html
<template>
  <div class="demo">
    {{ option }}  <!-- 可以直接使用了 -->
  </div>
</template>

<script>
export default {
  name: "demo",
+ props: ["option"]
}
</script>
```