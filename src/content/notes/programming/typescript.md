---
title: 用类型描述你的想法
description: 从日常 JavaScript 出发，理解 TypeScript 的联合类型和类型收窄。
date: 2026-10-01
tags: [TypeScript, 编程]
category: 编程知识
sample: true
---

## 类型是一种约定

写一个函数时，我们其实已经在心里约定了输入和输出。TypeScript 让这个约定变得明确，并在运行前帮助我们发现不匹配的用法。

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

greet('windyx3');
```

这里的 `string` 不会改变 JavaScript 的运行方式，它描述的是我们希望代码遵守的规则。

## 用联合类型表达状态

假设一个任务有三种状态，与其使用任意字符串，不如直接列出可能的值：

```ts
type TaskState = 'todo' | 'doing' | 'done';
const state: TaskState = 'doing';
```

进一步，可以把状态与对应的数据绑定起来：

```ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function describe(result: Result<number>) {
  if (result.ok) {
    return result.value.toFixed(2);
  }
  return result.error;
}
```

### 类型收窄

当 `result.ok` 为真时，TypeScript 能够确认对象包含 `value`。这种根据条件减少可能类型的过程就是类型收窄。

| 写法 | 适合的场景 |
| --- | --- |
| `string` | 任意文本 |
| 字面量联合 | 有限的状态集合 |
| 可辨识联合 | 不同状态携带不同数据 |

## 给未来的自己

> 好的类型能够解释代码的意图，而不只是让检查器安静下来。

- 从函数边界开始补充类型。
- 用联合类型表达真实状态。
- 遇到 `any` 时，先想想是否可以使用 `unknown` 并验证输入。

相关：[二分查找的边界](/notes/leetcode/binary-search/) · [为什么选择静态网站](/blog/static-site/)
