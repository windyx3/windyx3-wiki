---
title: 二分查找：先想清楚边界
description: 用左闭右开区间，把二分查找里的边界问题整理清楚。
date: 2026-09-29
tags: [LeetCode, 算法, TypeScript]
category: LeetCode
sample: true
---

## 先定义搜索区间

下面使用 `[left, right)`，也就是左闭右开的区间。`right` 指向区间之后的位置，不是最后一个元素。

```ts
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return -1;
}
```

## 为什么这样更新

1. 中间值太小时，`mid` 和它左边的元素都可以排除。
2. 中间值太大时，右边界设为 `mid`，让它退出搜索区间。
3. `left === right` 时区间为空，搜索结束。

| 项目 | 结果 |
| --- | --- |
| 前提 | 数组按升序排列 |
| 时间复杂度 | O(log n) |
| 额外空间 | O(1) |

## 需要检查的情况

- 空数组与单元素数组。
- 目标在第一个或最后一个位置。
- 目标比所有元素都小或都大。
- 存在重复元素时，这个函数只返回一个匹配位置。

> 不要混用左闭右开区间和两端闭合区间的更新规则。
