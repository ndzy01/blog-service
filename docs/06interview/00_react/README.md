# React 面试题 & 回答

## Core React

### 什么是 React?

<interview-react-q1/>

# react key 作用 为什么不使用 index 做 key 值

react 使用 key 来标识组件，每个 key 对应一个组件，在一定范围内组件的 key 是唯一稳定的，如果 key 值相同 react 会认为他们是同一个组件，后续的组件 react 将不会去创建。

常用场景 数组动态创建组件

涉及到数组的动态变更，例如数组新增元素、删除元素或者重新排序等，使用 index 作为 key 会导致数据错误的展示
