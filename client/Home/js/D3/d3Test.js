document.addEventListener("DOMContentLoaded", function () {
  // code...

  var width = 400,
    height = 400,
    radius = 200,
    innerRadius = 100,
    colors = d3.scale.category20c();

  var pieData = [
    {
      label: "part one",
      value: 50
    },
    {
      label: "part two",
      value: 20
    },
    {
      label: "part three",
      value: 15
    }
  ]

  var pie = d3.layout.pie()
    .value(function (d) {
      return d.value;
    })

  var arc = d3.svg.arc()
    .outerRadius(radius);


  var myChart = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width - radius) + ', ' + (height - radius) + ')')
    .selectAll('path').data(pie(pieData))
    .enter().append('g')
    .attr('class', 'slice');


  var slices = d3.selectAll('g.slice')
    .append('path')
    .attr('fill', function (d, i) {
      return colors(i);
    })
    .attr('d', arc)
    .transition()
    .ease("elastic")
    .duration(2000)
    .attrTween("d", tweenPie);

  function tweenPie(b) {
    var i = d3.interpolate({ startAngle: 1.1 * Math.PI, endAngle: 1.1 * Math.PI }, b);
    return function (t) { return arc(i(t)); };
  }


});