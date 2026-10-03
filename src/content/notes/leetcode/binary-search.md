---
title: "Binary search: define the boundaries first"
description: Make binary search boundaries easier to reason about with a half-open interval.
date: 2026-09-29
tags: [LeetCode, Algorithms, TypeScript]
category: LeetCode
sample: true
draft: true
---

## Define the search interval

This version uses `[left, right)`: inclusive on the left, exclusive on the right. The `right` boundary points just past the interval, rather than at its final element.

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

## Why the boundaries move this way

1. If the middle value is too small, exclude `mid` and everything to its left.
2. If it is too large, set the right boundary to `mid`, excluding that element.
3. When `left === right`, the interval is empty and the search ends.

| Property        | Value                           |
| --------------- | ------------------------------- |
| Requirement     | Array sorted in ascending order |
| Time complexity | O(log n)                        |
| Extra space     | O(1)                            |

## Cases to check

- Empty and single-element arrays.
- A target at the first or last position.
- A target smaller or larger than every element.
- With duplicates, this function returns one matching position.

> Keep the interval definition and boundary updates consistent. Half-open and fully inclusive intervals use different rules.
