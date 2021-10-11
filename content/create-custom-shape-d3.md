---
title: 'Create Custom Shape D3'
date: 2021-10-10T23:01:00+05:30
draft: false
---

<style>
  .mace {
    fill: #FFB727;
    stroke: #FFB727; 
  }
  .mace.hovered {
    fill-opacity: 0.3;
    stroke-opacity: 0.8;
    
  }
  .mace.hovered  :not(text){
    stroke-width: 3;
  }



  .mace-empty {
    fill: transparent;
    stroke: #ccc;
    stroke-width: 2;
  }
</style>

This is a simple shape I had to make in D3.js for a chart. One circle and a rectangle, and you have it. The end.

<div id="svg-container-1"></div>

Not so fast! There's a catch. I was supposed to add a stroke on `mouseover` too. Hover on the shape above and see what's up.

So our hack is revealed and it's clear that this shape is composed of two different shapes.

To tackle this issue we shall create a custom shape using SVG `<path>` element.

<div id="svg-container-2"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js" integrity="sha512-COTaPOlz12cG4fSfcBsxZsjauBAyldqp+8FQUM/dZHm+ts/jR4AFoJhCqxy8K10Jrf3pojfsbq7fAPTb1XaVkg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/d3-custom-shape.js"></script>
