
# Hooks

## 什么是Hooks

1. Hooks是React 16.8 新增的特性，可以在不编写class 的情况下使用state 以及其他React 特性
2. 凡是use 开头的React API 都是Hooks

## Hooks 解决的问题





组件类：缺点

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。



**组件的最佳写法是函数而不是类**

**React Hooks 设计的目的，加强函数组件，不使用类就可以实现一个全功能的组件**

**React Hooks 的意思是组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码钩进来。**

React Hooks 就是那些钩子

所有的钩子都是为函数组件**引入外部功能，**React 约定钩子都用use做前缀



react 提供的四个常用的hook

- useState()
- useContext()
- useReducer()
- useEffect()

React Hooks 是react推出的新特性

要解决状态共享的问题

## useState

~~~react
function TestUseState() {
  const [testUseState, setTestUseState] = React.useState('TestUseState')
  return (
    <h1
      onClick={() => {
        setTestUseState('This is a test')
      }}
    >
      {testUseState}
    </h1>
  )
}
const element = <TestUseState></TestUseState>
ReactDOM.render(element, document.getElementById('root'))


~~~

