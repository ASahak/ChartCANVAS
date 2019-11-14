require('./styles/style.css');
const canvas = document.querySelector('#chart');
const _dataChart = {
    2009: [
        { value: 704000000, text: 'Africa'},
        { value: 506000000, text: 'North America'},
        { value: 338000000, text: 'South America'},
        { value: 0, text: 'Antarctica'},
        { value: 3150000000, text: 'Asia'},
        { value: 696000000, text: 'Europa'},
        { value: 17000000, text: 'Australia'},
    ],
    2014: [
        { value: 780000000, text: 'Africa'},
        { value: 560000000, text: 'North America'},
        { value: 350000000, text: 'South America'},
        { value: 0, text: 'Antarctica'},
        { value: 3600000000, text: 'Asia'},
        { value: 727000000, text: 'Europa'},
        { value: 20000000, text: 'Australia'},
    ],
    2019: [
        { value: 788000000, text: 'Africa'},
        { value: 578000000, text: 'North America'},
        { value: 398000000, text: 'South America'},
        { value: 0, text: 'Antarctica'},
        { value: 3780000000, text: 'Asia'},
        { value: 769000000, text: 'Europa'},
        { value: 27000000, text: 'Australia'},
    ]
}
function Chart (selector) {
    const self              = this;
    this._result            = null;
    this._canvas            = selector.getContext('2d');
    this._heightCanvas      = 500;
    this._widthCanvas       = 800;
    function Result (elem, options) {
        if (options) {
            this.bar = new Bar(options).__init();
        }
    }

    // Bar Chart ******************
    function Bar (options) {
        this._configuration = options
    }
    Bar.prototype.__setAxisYLine = function () {
        self._canvas.beginPath();
        self._canvas.translate(0.5,0.5),
        self._lineYWidth && (
            self._canvas.moveTo(self._paddingYLeft, self._heightCanvas - self._paddingXBottom),
            self._canvas.lineTo(self._paddingYLeft, self._paddingXTop),
            self._canvas.lineWidth = self._lineYWidth
        )
        if (self._borderColor instanceof Array) {
            self._canvas.strokeStyle = self._result.__drawLine(self._paddingYLeft, self._heightCanvas - self._paddingXBottom, self._paddingYLeft, self._paddingXTop, self._borderColor)
        } else {
            console.log(self._borderColor)
            self._canvas.strokeStyle = self._borderColor
        }
        self._canvas.stroke()
    }
    Bar.prototype.__setAxisY = function () {
        let _values = this._configuration.data.datasets.data.map(_ => _.value)
        console.log(this._configuration, Math.max(..._values))
        this.__setAxisYLine()
    }
    Bar.prototype.__setAxisX = function () {
        self._canvas.font = '14px Arial';
        self._canvas.fillStyle = '0,0,0';
        this._configuration.data.labels.forEach((_, index) => {
            self._canvas.fillText(_, index * 100 + 100, self._heightCanvas)
        })
    }
    Bar.prototype.__draw = function () {
        this.__setAxisY()
        this.__setAxisX()
    }
    Bar.prototype.__init = function () {
        setTimeout(() => {
            this.__draw()
        }, 0)
    }
    // ****************************

    /******************HELPERS***********/
    Result.prototype.__drawLine = function (xMoveTo, yMoveTo, xLineTo, yLineTo, dataColor) {
        const gradient = self._canvas.createLinearGradient(xMoveTo, yMoveTo, xLineTo, yLineTo);
        let grow = 1 / (dataColor.length - 1);
        dataColor.forEach((_, index)=> {
            gradient.addColorStop( grow * index, _);
        })
        return gradient
    }
    /*_________________________________*/

    Result.prototype.init = function (parameters) {
        selector.width                = self._widthCanvas;
        selector.height               = self._heightCanvas;
        self._paddingYLeft            = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
        self._paddingXBottom          = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
        self._paddingYRight           = parameters.options.padding && parameters.options.padding.paddingRight || 10;
        self._paddingXTop             = parameters.options.padding && parameters.options.padding.paddingTop || 10;
        self._lineYWidth              = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
        self._lineXWidth              = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
        self._borderColor             = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || '#000';
        self._result = new Result(selector, parameters);
        return self._result[parameters.type]
    }
    return new Result(selector)
}
Chart(canvas).init({
    type: 'bar',
    data: {
        labels: _dataChart['2019'].map(_ => _.text),
        datasets: {
            data: _dataChart['2019'],
            borderColor: ['red', 'blue']
        }
    },
    options: {
        padding: {
            paddingLeft: 30,
            paddingBottom: 30
        },
        scales: {
            yAxis: {
                lineWidth: 1
            },
            xAxis: {
                lineWidth: 1
            }
        }
    }
})