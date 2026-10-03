---
title: Describe your ideas with types
description: Understand unions and type narrowing, starting with everyday JavaScript.
date: 2026-10-01
tags: [TypeScript, Programming]
category: Programming
sample: true
draft: true
---

## Types are a contract

When we write a function, we already have an expectation about its inputs and outputs. TypeScript makes that expectation explicit and helps catch mismatches before the code runs.

```ts
function greet(name: string): string {
  return "Hello, " + name;
}

greet("windyx3");
```

The `string` annotation does not change how JavaScript runs. It describes the rules we expect the code to follow.

## Express states with unions

If a task can have three states, list those possibilities rather than accepting any string:

```ts
type TaskState = "todo" | "doing" | "done";
const state: TaskState = "doing";
```

We can also connect each state to the data that belongs to it:

```ts
type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function describe(result: Result<number>) {
  if (result.ok) {
    return result.value.toFixed(2);
  }
  return result.error;
}
```

### Type narrowing

When `result.ok` is true, TypeScript knows the object contains `value`. Using a condition to reduce the possible types is called narrowing.

| Approach            | Useful for                            |
| ------------------- | ------------------------------------- |
| `string`            | Arbitrary text                        |
| Literal union       | A finite set of states                |
| Discriminated union | States with different associated data |

## A note to my future self

> Good types explain what the code means, beyond satisfying the checker.

- Start by describing function boundaries.
- Use unions to represent real states.
- Before reaching for `any`, consider `unknown` and validate the input.

Related: [Binary search boundaries](/notes/leetcode/binary-search/) · [A personal website can stay simple](/blog/static-site/)
