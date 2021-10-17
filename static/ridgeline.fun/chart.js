// Dimension Mapping
// eslint-disable-next-line no-unused-vars
const dimensions = {
  seriesField: 'chart_desc',
  xField: 'date',
  yField: 'readers',
  // colorField: "group",
  colorField: 'chart_desc',
}

const screenHeight = window.screen.height
const screenWidth = window.screen.width

// Chart Options
// eslint-disable-next-line no-unused-vars
const options = {
  // headers
  heading:
    'Ridgline is used to compare relative distribution of a metric across various topics.',
  subheading:
    'Below chart shows readership (in hours) across relevant news articles',

  /* Chart made responsive. 
  Hence width & height is redundant. 
  Container width cannot be chaged right now. 
  We might give an option to change it later */
  // width / height;
  aspectRatio: screenWidth / screenHeight, // decrease this value to increase height

  // Margins
  // Margins are with respect to the core chart region
  // Core chart region doesn't include axes, or labels
  // So if you set all margins to 0, axes, or labels might not be visible
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,

  // background-color
  // bgColor: 'transparent',
  bgColor: '#fafafa',

  overlap: 7,
}

const {
  heading = '{{ heading }}',
  subheading = '{{ subheading }}',

  aspectRatio = 0.8,

  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,

  bgColor = '#eee',
  overlap = 1,
} = options
const {
  seriesField = 'chart_desc',
  xField = 'date',
  yField = 'readers',
  colorField = 'group',
} = dimensions

const coreChartWidth = screenWidth
const coreChartHeight = coreChartWidth / aspectRatio

const viewBoxHeight = coreChartHeight + marginTop + marginBottom
const viewBoxWidth = coreChartWidth + marginLeft + marginRight

const svgParentNodeSelector = '#svg-container'

const svgParent = d3.select(svgParentNodeSelector)

const svg = svgParent
  .append('svg')
  .attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
  .style('background', bgColor)
  .attr('width', screenWidth)
  .attr('height', screenHeight)

const chartCore = svg
  .append('g')
  .attr('transform', `translate(${marginLeft}, ${marginTop})`)

d3.csv('/ridgeline.fun/data.csv').then(data => {
  const parsedData = data.map(d => ({
    ...d,
    [yField]: Number.parseFloat(d[yField]),
  }))

  parsedData.sort((a, b) => a[xField] - b[xField])

  const nestedData = d3
    .groups(parsedData, d => d[seriesField])
    .map(([key, values]) => ({
      [seriesField]: key,
      values,
      [colorField]: values[0][colorField],
    }))

  const parseDate = dt => {
    const yy = Number.parseInt(dt.slice(0, 2), 10) + 2000 // 18 -> 2018
    const mm = Number.parseInt(dt.slice(2, 4), 10) - 1 // 01; 0 is Jan, 1 is Feb
    const dd = Number.parseInt(dt.slice(4, 6), 10) // 01

    return new Date(yy, mm, dd)
  }

  const xDomain = d3.extent(
    _.chain(parsedData)
      .map(xField)
      .uniq()
      .value()
      .map(d => parseDate(d)),
  )

  const xScale = d3.scaleTime([0, coreChartWidth]).domain(xDomain)

  const categoryDomain = nestedData.map(d => d[seriesField])
  const categoryScale = d3
    .scaleBand()
    .range([0, coreChartHeight])
    .domain(categoryDomain)
    .paddingInner(0)
    .paddingOuter(0)

  const yDomain = d3.extent(parsedData, d => d[yField])
  const yScale = d3
    .scaleLinear()
    .range([0, -(1 + overlap) * categoryScale.step()])
    .domain(yDomain)
  const colorDomain = _.chain(parsedData).map(colorField).uniq().value()

  const numberOfColors = colorDomain.length
  const colorRange = d3.quantize(d3.interpolateViridis, numberOfColors)

  const fillColorScale = d3.scaleOrdinal().range(colorRange).domain(colorDomain)

  chartCore
    .append('rect')
    .attr('width', coreChartWidth)
    .attr('height', coreChartHeight)
    .attr('x', 0)
    .attr('y', -20)
    .attr('fill', d3.rgb(colorRange[0]).darker(0.2))

  const seriesGroup = chartCore
    .append('g')
    .selectAll('.series')
    .data(nestedData)
    .join('g')
    .attr(
      'transform',
      d =>
        `translate(0, ${
          categoryScale(d[seriesField]) + categoryScale.bandwidth()
        })`,
    )

  const area = d3
    .area()
    .curve(d3.curveBasis)
    .x(d => xScale(parseDate(d[xField])))
    .y1(d => yScale(d[yField]))
    .y0(yScale(0) + categoryScale.bandwidth() + 20)

  // eslint-disable-next-line unicorn/no-array-callback-reference
  seriesGroup
    .append('path')
    .attr('fill', d => {
      return d3.rgb(fillColorScale(d[colorField])).brighter(0.2)
    })
    .datum(d => d.values)
    .attr('d', area)

  seriesGroup
    .append('path')
    // .attr('stroke-width', 2)
    .attr('fill', 'none')
    .datum(d => d.values)
    .attr('d', area.lineY1())
    .attr('stroke', d => {
      return d3.rgb(fillColorScale(d[0][colorField])).darker(0.2)
    })

  window.downloadImage = () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const svgo = svg.node().outerHTML
    v = canvg.Canvg.fromString(ctx, svgo)

    // Start SVG rendering with animations and mouse handling.
    v.start()

    var link = document.createElement('a')
    link.download = 'filename.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
})
