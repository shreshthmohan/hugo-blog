const svgParent1 = d3.select('#svg-container-1')

const aspectRatio = 6
const coreChartWidth = 600
const coreChartHeight = coreChartWidth / aspectRatio

const marginTop = 5
const marginRight = 0
const marginBottom = 5
const marginLeft = 0
const bgColor = 'transparent'

const viewBoxHeight = coreChartHeight + marginTop + marginBottom
const viewBoxWidth = coreChartWidth + marginLeft + marginRight

const circleRadius = coreChartHeight / 2
const stickLength = coreChartWidth / 4
const stickWidth = 60

const fillColor = '#FFB727'
const fillOpacity = 1
const strokeOpacity = 0.6

;(function () {
  const svg = svgParent1
    .append('svg')
    .attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
    .style('background', bgColor)

  const gCenter = svg
    .append('g')
    .attr(
      'transform',
      `translate(${
        marginLeft + coreChartWidth / 2 - (stickLength - circleRadius) / 2
      }, ${marginTop + coreChartHeight / 2})`,
    )

  const maceShape = gCenter
    .append('g')
    .attr('class', 'mace')
    .on('mouseover', function () {
      d3.select(this).classed('hovered', true)
    })
    .on('mouseout', function () {
      d3.select(this).classed('hovered', false)
    })

  maceShape
    .append('rect')
    .attr('x', 0)
    .attr('y', -stickWidth / 2)
    .attr('height', stickWidth)
    .attr('width', stickLength)

  maceShape.append('circle').attr('cx', 0).attr('cy', 0).attr('r', circleRadius)
  maceShape
    .append('text')
    .text('Hover me!')
    .attr('stroke', '#333')
    .attr('fill', '#333')
    .attr('dominant-baseline', 'middle')
    // .attr('text-anchor', 'middle')
    .attr('font-size', 12)
})()

function stickRadius(w, l) {
  return Math.sqrt((w / 2) ** 2 + l ** 2)
}
function thetaBy2(w, r) {
  return Math.atan(w / (2 * Math.sqrt(r ** 2 - (w / 2) ** 2)))
}

// SVG PARENT 2
const svgParent2 = d3.select('#svg-container-2')

const svg = svgParent2
  .append('svg')
  .attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
  .style('background', bgColor)

const gCenter = svg
  .append('g')
  .attr(
    'transform',
    `translate(${
      marginLeft + coreChartWidth / 2 - (stickLength - circleRadius) / 2
    }, ${marginTop + coreChartHeight / 2})`,
  )

const maceShape = gCenter.append('g').attr('class', 'mace-empty')

maceShape
  .append('rect')
  .attr('x', 0)
  .attr('y', -stickWidth / 2)
  .attr('height', stickWidth)
  .attr('width', stickLength)

maceShape.append('circle').attr('cx', 0).attr('cy', 0).attr('r', circleRadius)

// gCenter.append('circle').attr('r', 2)
// gCenter
//   .append('text')
//   .text('c(0,0)')
//   .attr('font-size', 10)
//   .attr('dominant-baseline', 'hanging')
//   .attr('text-anchor', 'middle')
//   .attr('y', 5)

const r1 = circleRadius
const r2 = stickRadius(stickWidth, stickLength)

maceShape.append('circle').attr('cx', 0).attr('cy', 0).attr('r', r2)

const smallCircleThetaBy2 = thetaBy2(stickWidth, r1)
const largeCircleThetaBy2 = thetaBy2(stickWidth, r2)

const smallCirclePoints = [
  [smallCircleThetaBy2, r1],
  [-smallCircleThetaBy2, r1],
]

const largeCirclePoints = [
  [largeCircleThetaBy2, r2],
  [-largeCircleThetaBy2, r2],
]

// console.log({ smallCirclePoints, largeCirclePoints })
function polarToCartesian([angle, radius]) {
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) }
}

// const smallCirclePoint1InCart = polarToCartesian(smallCirclePoints[0])
// console.log({ smallCirclePoint1InCart })

const allPointsInCartesian = [
  ...smallCirclePoints,
  ...largeCirclePoints,
  [0, 0],
  [0, r1],
  [0, r2],
].map(d => polarToCartesian(d))

console.log({ allPointsInCartesian })

gCenter
  .selectAll('circle.point')
  .data(allPointsInCartesian)
  .join('circle')
  .attr('class', 'point')
  .attr('r', 1)
  .attr('fill', 'black')
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
