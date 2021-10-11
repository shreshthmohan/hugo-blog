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
const stickLength = coreChartWidth / 2
const stickWidth = 30

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

gCenter.append('circle').attr('r', 2)
gCenter
  .append('text')
  .text('c(0,0)')
  .attr('font-size', 10)
  .attr('dominant-baseline', 'hanging')
  .attr('text-anchor', 'middle')
  .attr('y', 5)
