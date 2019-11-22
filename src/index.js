import * as dat from 'dat.gui';
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
function ChartArt (selector) {
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

    /***************Bar Chart ******************/
    function Bar (options) {
        this._gui = new dat.GUI();
        const barFolder = this._gui.addFolder('Bar')
        this._configuration = options
        this._strockeColor = [200, 50, 50]
        self._borderColor = [175, 160, 160]
        barFolder.addColor(self, '_borderColor').onChange(() => {
            console.log(self._borderColor)
        })
        barFolder.add(self, '_borderOpacity', 0, 1)
        barFolder.add(self._labelsX, 'fontSize', 10, 26)
        barFolder.addColor(self._labelsX, 'color')
        // const strockeFolder = this._gui.addFolder('Stroke')
    }
    Bar.prototype.__setAxisYLine = function () {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        let _heightAxis = null
        if (self._labelsX.hasOwnProperty('fontSize')) {
            _heightAxis = (self._labelsX.fontSize < self._paddingXBottom) ? self._paddingXBottom : self._labelsX.fontSize * 2
        }
        self._lineYWidth && (
            self._canvas.moveTo(self._paddingYLeft, self._heightCanvas - _heightAxis),
            self._canvas.lineTo(self._paddingYLeft, self._paddingXTop),
            self._canvas.lineWidth = self._lineYWidth
        )
        if (self._borderColor instanceof Array) {
            self._canvas.strokeStyle = `rgba(${self._borderColor[0]}, ${self._borderColor[1]}, ${self._borderColor[2]}, ${self._borderOpacity})`
        } else {
            self._canvas.strokeStyle = self._borderColor
        }
        self._canvas.stroke()
    }
    Bar.prototype.__setAxisXLine = function () {
        self._canvas.beginPath();
        let _heightAxis = null
        if (self._labelsX.hasOwnProperty('fontSize')) {
            _heightAxis = (self._labelsX.fontSize < self._paddingXBottom) ? self._paddingXBottom : self._labelsX.fontSize * 2
        }
        self._lineXWidth && (
            self._canvas.moveTo(self._paddingYLeft, self._heightCanvas - _heightAxis),
            self._canvas.lineTo(self._widthCanvas - self._paddingYRight, self._heightCanvas - _heightAxis),
            self._canvas.lineWidth = self._lineYWidth
        )
        if (self._borderColor instanceof Array) {
                self._canvas.strokeStyle = `rgba(${self._borderColor[0]}, ${self._borderColor[1]}, ${self._borderColor[2]}, ${self._borderOpacity})`
        } else {
            self._canvas.strokeStyle = self._borderColor
        }
        self._canvas.stroke()
    }
    Bar.prototype.__setAxisY = function () {
        let _values = this._configuration.data.datasets.data.map(_ => _.value)
        // console.log(this._configuration, Math.max(..._values))
        this.__setAxisYLine()
    }
    Bar.prototype.__setAxisX = function () {
        this.__setAxisXLine()
        self._canvas.font = self._labelsX.fontSize + 'px Arial';
        let _canvasBadgeWidth = (self._widthCanvas - (self._paddingYLeft + self._paddingYRight)) / this._configuration.data.labels.length
        this._configuration.data.labels.forEach((_, index) => {
            self._canvas.textAlign = "center";
            self._canvas.fillText(self._result.__fittingString(self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + self._paddingYLeft) + (_canvasBadgeWidth/2), self._heightCanvas - (((self._labelsX.fontSize * 2) - (self._labelsX.fontSize * 2) / 3) / 2))
            self._canvas.fillStyle = self._labelsX.color
        })
    }
    Bar.prototype.__draw = function () {
        this.__setAxisY()
        this.__setAxisX()
    }
    Bar.prototype.__init = function () {
        setTimeout(() => {
            this.__animate()
        }, 0)
    }
    Bar.prototype.__update = function () {
        self._result.__maxValueInit(this._configuration)
        this.__draw()
    }
    Bar.prototype.__animate = function () {
        requestAnimationFrame(this.__animate.bind(this))
        this.__update()
    }
    // ****************************

    /******************HELPERS***********/
    Result.prototype.__fittingString = function (c, str, maxWidth) {
        var width = c.measureText(str).width;
        var ellipsis = '…';
        var ellipsisWidth = c.measureText(ellipsis).width;
        if (width<=maxWidth || width<=ellipsisWidth) {
            return str;
        } else {
            var len = str.length;
            while (width>=maxWidth-ellipsisWidth && len-->0) {
                str = str.substring(0, len);
                width = c.measureText(str).width;
            }
            return str+ellipsis;
        }
    }
    Result.prototype.__maxValueInit = function (options) {
        self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
        [{
            nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'fontSize'],
            value: 16,
            emptyProperty: 13
        }, {
            nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'fontSize'],
            value: 16,
            emptyProperty: 13
        }].forEach(_ => self._result.__maxValue(_, options))
    }
    Result.prototype.__maxValue = function (nest, options) {
        let res;
        nest.nesting.forEach((_, index) => {
            if (index < nest.nesting.length - 1){
                try {
                    res = options[_]
                    options = res
                } catch (err) {
                    options = res
                }
            } else {
                let _last = nest.nesting.pop()
                if (!res.hasOwnProperty(_)) {
                    res[_] = nest.emptyProperty
                } else if (res instanceof Object) {
                    options[_last] = (options[_last] > nest.value) ? nest.value : res[_last]
                }
            }
        })
    }
    /********** ONLY FOR TRANSPARENT COLOR************
    Result.prototype.__drawLine = function (xMoveTo, yMoveTo, xLineTo, yLineTo, dataColor) {
        const gradient = self._canvas.createLinearGradient(xMoveTo, yMoveTo, xLineTo, yLineTo);
        let grow = 1 / (dataColor.length - 1);
        dataColor.forEach((_, index)=> {
            gradient.addColorStop( grow * index, _);
        })
        return gradient
    }*/
    /*_________________________________*/

    Result.prototype.__init = function (parameters) {
        selector.width                = self._widthCanvas;
        selector.height               = self._heightCanvas;
        self._paddingYLeft            = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
        self._paddingXBottom          = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
        self._paddingYRight           = parameters.options.padding && parameters.options.padding.paddingRight || 10;
        self._paddingXTop             = parameters.options.padding && parameters.options.padding.paddingTop || 10;
        self._lineYWidth              = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
        self._lineXWidth              = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
        self._borderColor             = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || '#000';
        self._borderOpacity           = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
        self._labelsX                 = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
        self._labelsY                 = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
        self._result = new Result(selector, parameters);
        return self._result[parameters.type]
    }
    return new Result(selector)
}
new ChartArt(canvas).__init({
    type: 'bar',
    data: {
        labels: _dataChart['2019'].map(_ => _.text),
        datasets: {
            data: _dataChart['2019'],
            borderColor: [175, 160, 160],
            borderOpacity: 1
        }
    },
    options: {
        padding: {
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10
        },
        scales: {
            yAxis: {
                lineWidth: 1,
                tricks: {
                    labels: {
                        fontSize: 13,
                        color: 'rgb(35,32,32)'
                    }
                }
            },
            xAxis: {
                lineWidth: 1,
                tricks: {
                    labels: {
                        fontSize: 13,
                        color: 'rgb(35,32,32)'
                    }
                }
            }
        }
    }
})