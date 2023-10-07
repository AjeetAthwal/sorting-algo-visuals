document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from data.json
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            // Display the message in the HTML
            document.getElementById('hello-message').innerText = data.numbers;
        })
        .catch(error => console.error('Error fetching data:', error));

    var chartData = {
        datasets: [
            {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                data:     fetch('data/data.json')
                .then(response => response.json())
            }
        ]
    };
    
    var ctx = document.getElementById("myChart").getContext("2d");
    var myBar = new Chart(ctx).Bar(chartData, {
        showTooltips: false,
        onAnimationComplete: function () {
    
            var ctx = this.chart.ctx;
            ctx.font = this.scale.font;
            ctx.fillStyle = this.scale.textColor
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
    
            this.datasets.forEach(function (dataset) {
                dataset.bars.forEach(function (bar) {
                    ctx.fillText(bar.value, bar.x, bar.y - 5);
                });
            })
        }
    });
});

