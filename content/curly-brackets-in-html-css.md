---
title: "How to make curly brackets with just HTML and CSS"
date: 2021-03-30T04:57:06+05:30
draft: false
---

This is what we want to build. A curly bracket. 👇🏽

<div class="flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center">105</div>
    <div class="flex mb-px">
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

<!-- ## When would it be useful?
I have usually found this to be useful inside tables to clearly show totals and sub-totals.
TODO examples. -->

We shall walkthrough the steps below, but you can simply watch the video to understand how we can build this.

<div class="sm-youtube-embed-container">
  <iframe src="https://www.youtube.com/embed/DzXoMW2nvr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Central idea: Use Borders
We shall use borders to construct the curly brackets. We can start with a target to build a simpler rounded bracket first. We do that by having <span class="bg-gray-200 dark:bg-gray-700">borders</span> on the <span class="bg-yellow-200 dark:bg-yellow-800">left</span>, <span class="bg-blue-200 dark:bg-blue-800">top</span>, and <span class="bg-red-200 dark:bg-red-800">right</span>. And we shall <span class="bg-gray-200 dark:bg-gray-700">round the top-left and top-right corners</span> using the `border-radius` CSS property.


<div class="flex items-center justify-center text-4xl">
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

<div class="flex items-center justify-center text-4xl">
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

If you like this version (it's not really a curly bracket) you can use this because it's easier to make than a curly bracket.

We almost already have extreme ends done. What we want to build is the curly thing in the middle. To do that we will use a similar approach. We shall have two separate divs, left one with its right corner rounded and the right one with its left corner rounded.

<div class="flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center mb-2">
    105
    </div>
    <div class="flex mb-2">
      <div class="w-1/2 h-4 border-r-4 border-b-4 border-green-400 bg-blue-200 dark:bg-blue-900 rounded-br-2xl"></div>
      <div class="w-1/2 h-4 border-l-4 border-b-4 border-green-400 bg-green-200 dark:bg-green-900 rounded-bl-2xl"></div>
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

Now if I merge the two parts together using a negative margin, this is what we get.

<div class="flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center mb-2">
    105
    </div>
    <div class="flex -mb-1">
      <div class="w-1/2 h-4 border-r-4 border-b-4 border-green-400 bg-blue-200 dark:bg-blue-900 rounded-br-2xl"></div>
      <div class="w-1/2 h-4 border-l-4 border-b-4 border-green-400 bg-green-200 dark:bg-green-900 rounded-bl-2xl"></div>
    </div>
    <div class="flex mb-2 mt-px">
      <div style=" border-top-color: rgb(96, 165, 250); border-left-color: rgb(251, 191, 36); border-right-color: rgb(248, 113, 113);" class="w-full h-4 border-t-4 border-l-4 border-r-4 rounded-t-2xl bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>

Close enough, but there are two problems. 

1. Borders from the top section are hanging off on the sides. We can fix that by reducing the width of the two divs and adding an empty div on the left. 
2. In the middle we have border going all the way, where we want and empty gap. We shall fix that by splitting the bottom section in two parts and adding an empty div in the middle.


<div class="flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center mb-2">
    105
    </div>
    <div class="flex -mb-1">
    <div class="w-1/4 h-4 bg-gray-200 dark:bg-gray-700"></div>
      <div class="w-1/4 h-4 border-r-4 border-b-4 border-green-400 bg-blue-200 dark:bg-blue-900 rounded-br-2xl"></div>
      <div class="w-1/4 h-4 border-l-4 border-b-4 border-green-400 bg-green-200 dark:bg-green-900 rounded-bl-2xl"></div>
    </div>
    <div class="flex mb-2 mt-px">
      <div class="w-1/4 border-t-4 border-l-4 border-yellow-400 h-4 rounded-tl-2xl bg-yellow-200 dark:bg-yellow-900"></div>
      <div class="w-1/2 h-4"></div>
      <div class="w-1/4 border-t-4 border-r-4 border-red-400 h-4 rounded-tr-2xl bg-red-200 dark:bg-red-900"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>

Almost there! You can use this version if you like, but I like tapered ends. To acheive that we can simply remove the left and right border. When we do that, the border width tapers down from 4px at the top (or bottom) to 0px on the left (or right), which gives us a nice clean look.

<div class="my-32 flex items-center justify-center text-4xl">
  <div class="flex flex-col">
    <div class="text-center mb-2">
    105
    </div>
    <div class="flex -mb-1">
    <div class="w-1/4 h-4 bg-gray-200 dark:bg-gray-700"></div>
      <div class="w-1/4 h-4 border-b-4 border-green-400 bg-blue-200 dark:bg-blue-900 rounded-br-2xl"></div>
      <div class="w-1/4 h-4 border-b-4 border-green-400 bg-green-200 dark:bg-green-900 rounded-bl-2xl"></div>
    </div>
    <div class="flex mb-2 mt-px">
      <div class="w-1/4 border-t-4 border-yellow-400 h-4 rounded-tl-2xl bg-yellow-200 dark:bg-yellow-900"></div>
      <div class="w-1/2 h-4"></div>
      <div class="w-1/4 border-t-4 border-red-400 h-4 rounded-tr-2xl bg-red-200 dark:bg-red-900"></div>
    </div>
    <div class="flex">
      <div class="border border-gray-500 px-6 py-2">23</div>
      <div class="border border-gray-500 px-6 py-2">45</div>
      <div class="border border-gray-500 px-6 py-2">37</div>
    </div>
  </div>
</div>

And it's done! ✅

P.S. You can check out the code on <a class="underline" href="https://play.tailwindcss.com/tLkC7F6pUR" target="_blank">Tailwind Play</a>, <a class="underline" href="https://codepen.io/shreshthmohan/pen/dyNpLRY?editors=1100" target="_blank">CodePen</a> or you can simply open the developer console in the browser on this page! For a live build walkthrough look at the <a class="underline" href="https://www.youtube.com/watch?v=DzXoMW2nvr8" target="_blank">YouTube video</a>, maybe watch it at 1.5x speed or more. If you have any questions, either post comments on the video or send me a <a class="dark:text-blue-400 underline" href="https://twitter.com/shreshthmohan">direct message on Twitter</a>.
