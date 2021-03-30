---
title: "How to make curly brackets with just HTML and CSS"
date: 2021-03-30T04:57:06+05:30
draft: false
---

This is what we want to build.

<div class="my-8 flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center">105</div>
    <div class="flex">
      <div class="w-1/4 h-6"></div>
      <div class="w-1/4 h-6 border-b-4 border-blue-400 rounded-br-2xl"></div>
      <div class="w-1/4 h-6 border-b-4 border-blue-400 rounded-bl-2xl"></div>
    </div>
    <div class="flex mb-2 -mt-1">
      <div class="w-1/4 h-4 border-t-4 border-blue-400 rounded-tl-2xl"></div>
      <div class="w-1/2 h-4"></div>
      <div class="w-1/4 h-4 border-t-4 border-blue-400 rounded-tr-2xl"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>

## When would it be useful?
I have usually found this to be useful inside tables to clerly show totals and sub-totals. TODO examples.

## Central idea: Use Borders
We shall use borders to construct the curly brackets. We can start with a target to build a simpler rounded bracket first. We do that by having borders on the left, top, and right. And giving the the top-left and top-right corners a border-radius.


<div class="my-32 flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="flex mb-2">
      <div style=" border-top-color: rgb(96, 165, 250); border-left-color: rgb(251, 191, 36); border-right-color: rgb(248, 113, 113);" class="w-full h-4 border-t-4 border-l-4 border-r-4 rounded-t-2xl bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>

Now, we can try to acheive a crude alternative of the end result by adding a small vertical line pointing to the total. How I like to do it is add two divs of 50% width above the rounded bracket, left one with a right border and the right one with a left border.

<div class="my-32 flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center mb-2">
    105
    </div>
    <div class="flex">
      <div class="w-1/2 h-2 border-r-2 border-green-400 bg-blue-200 dark:bg-blue-900"></div>
      <div class="w-1/2 h-2 border-l-2 border-green-400 bg-green-200 dark:bg-green-900"></div>
    </div>
    <div class="flex mb-2">
      <div style=" border-top-color: rgb(96, 165, 250); border-left-color: rgb(251, 191, 36); border-right-color: rgb(248, 113, 113);" class="w-full h-4 border-t-4 border-l-4 border-r-4 rounded-t-2xl bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>