canvas = document.getElementById("canvas")
context = canvas.getContext('2d')
chart = new Chart(canvas, context)
chart.setRectMargin(5)
chart.setVerticalPeriod(0, 100, 5)
chart.setHorizontalPeriod(0, 100, 5)
chart.drawRectList('black')