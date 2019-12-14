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
};
const _legendInfo = {
    info1: null,
    info2: 2019,
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
        this.animateBars = false
        this._strockeColor = [200, 50, 50]
        self._borderColor = [175, 160, 160]
        barFolder.addColor(self, '_borderColor')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
        barFolder.add(self, '_borderOpacity', 0, 1)
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
        barFolder.add(self._bars, 'width', 20, 60)
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });

        // Sub Folders
        const xAxis = barFolder.addFolder('xAxis')
        xAxis.add(self._labelsX, 'display')
            .onChange((e) => {
                xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                requestAnimationFrame(this.__animate.bind(this))
            })
        const xAxisFontSize = xAxis.add(self._labelsX, 'fontSize', 10, 26);
        xAxisFontSize.onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsX.display ? 'auto' : 'none'}; opacity: ${self._labelsX.display ? 1 : 0.5}`);
        const xAxisColor = xAxis.addColor(self._labelsX, 'color');
        xAxisColor.onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsX.display ? 'auto' : 'none'}; opacity: ${self._labelsX.display ? 1 : 0.5}`);

        const yAxis = barFolder.addFolder('yAxis')
        yAxis.add(self._labelsY, 'display')
            .onChange((e) => {
                yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                requestAnimationFrame(this.__animate.bind(this))
            })
        const yAxisFontSize = yAxis.add(self._labelsY, 'fontSize', 10, 26);
        yAxisFontSize.onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsY.display ? 'auto' : 'none'}; opacity: ${self._labelsY.display ? 1 : 0.5}`);
        const yAxisColor = yAxis.addColor(self._labelsY, 'color');
        yAxisColor.onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsY.display ? 'auto' : 'none'}; opacity: ${self._labelsY.display ? 1 : 0.5}`);
        barFolder.open()
    }
    Bar.prototype.__setAxisYLine = function (_displayX) {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        let _heightAxis = null;
        if (self._labelsX.hasOwnProperty('fontSize') && _displayX) {
            _heightAxis = self._labelsX.fontSize * 2;
            self._paddingXBottom = _heightAxis
        } else _heightAxis = self._paddingXBottom;
        self._lineXWidth && (
            self._canvas.moveTo(self._paddingYLeft, self._heightCanvas - _heightAxis),
            self._canvas.lineTo(self._paddingYLeft, self._paddingXTop),
            self._canvas.lineWidth = self._lineYWidth
        );
        if (self._borderColor instanceof Array) {
            self._canvas.strokeStyle = `rgba(${self._borderColor[0]}, ${self._borderColor[1]}, ${self._borderColor[2]}, ${self._borderOpacity})`
        } else {
            self._canvas.strokeStyle = self._borderColor
        }
        self._canvas.stroke();
        self._canvas.closePath();
        self._canvas.resetTransform()
    }
    Bar.prototype.__setAxisXLine = function (_display) {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        self._paddingXBottom = self._labelsX.display ? self._paddingXBottom: 10
        let _heightAxis = null;
        if (self._labelsX.hasOwnProperty('fontSize') && _display) {
            _heightAxis = self._labelsX.fontSize * 2;
            self._paddingXBottom = _heightAxis
        } else _heightAxis = self._paddingXBottom;
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
        self._canvas.stroke();
        self._canvas.closePath();
        self._canvas.resetTransform()
    }
    Bar.prototype.__setAxisY = function (_displayX, _displayY) {
        this.__setAxisYLine(_displayX)
        if (_displayY) {
            self._canvas.font = self._labelsY.fontSize + 'px Arial';
            self._canvas.textAlign = "right";
            self._canvas.fillStyle = self._labelsY.color;
            self._canvas.fillText('0', self._paddingYLeft - 7, self._heightCanvas - self._paddingXBottom)
            self._canvas.clearColor;
        }
    }
    Bar.prototype.__setCoordinatesNet = function (_displayY) {
        let [_maxValue] = [
            self._result.__max_min_values(this._configuration.data.datasets.data).max,
            1
        ];
        let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
        if (self._labelsY.display) {
            console.log(maxCeil)
            if (_maxValue > 999999999999 || _maxValue === Infinity) {
                maxCeil *= 10000;
                _legendInfo.info1 = 'x10000000'
            } else if (_maxValue > 999999999) {
                maxCeil *= 1000;
                _legendInfo.info1 = 'x1000000'
            } else if (_maxValue > 99999999) {
                maxCeil *= 100;
                _legendInfo.info1 = 'x1000000'
            } else if (_maxValue > 9999999) {
                maxCeil *= 10;
                _legendInfo.info1 = 'x1000000'
            } else if (_maxValue > 999999) {
                maxCeil *= 1;
                _legendInfo.info1 = 'x1000000'
            } else if (_maxValue > 99999) {
                maxCeil *= 100;
                _legendInfo.info1 = 'x1000'
            } else if (_maxValue > 9999) {
                maxCeil *= 10;
                _legendInfo.info1 = 'x1000'
            } else if (_maxValue > 999) {
                maxCeil *= 1;
                _legendInfo.info1 = 'x1000'
            } else if (_maxValue > 99) {
                maxCeil *= 100;
                _legendInfo.info1 = 'x1'
            } else if (_maxValue > 9) {
                maxCeil *= 10;
                _legendInfo.info1 = 'x1'
            } else {
                maxCeil *= 1;
                _legendInfo.info1 = 'x1'
            }
        }
        let nextVal = maxCeil
        for (let i = 1; i < 10; i++) {
            self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
            self._canvas.beginPath()
            self._canvas.moveTo(self._paddingYLeft - 5, i * (self._heightCanvas - self._paddingXBottom - self._paddingXTop) / 10 + self._paddingXTop)
            self._canvas.lineTo(self._widthCanvas - self._paddingYRight, i * (self._heightCanvas - self._paddingXBottom - self._paddingXTop) / 10 + self._paddingXTop)
            self._canvas.lineWidth = self._lineXWidth
            if (self._borderColor instanceof Array) {
                self._canvas.strokeStyle = `rgba(${self._borderColor[0]}, ${self._borderColor[1]}, ${self._borderColor[2]}, ${self._borderOpacity})`
            } else {
                self._canvas.strokeStyle = self._borderColor
            }
            self._canvas.stroke();
            self._canvas.resetTransform();
            self._canvas.closePath();
            if (_displayY) {
                nextVal -= maxCeil/10;
                self._canvas.font = self._labelsY.fontSize + 'px Arial';
                self._canvas.textAlign = "right";
                self._canvas.fillStyle = self._labelsY.color;
                self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), self._paddingYLeft - 7, i * (self._heightCanvas - self._paddingXBottom - self._paddingXTop) / 10 + self._paddingXTop + self._labelsY.fontSize / 3)
                self._canvas.clearColor;
            }
        }
        for (let i = 1; i < this._configuration.data.labels.length; i++) {
            self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
            self._canvas.beginPath()
            self._canvas.moveTo(self._paddingYLeft + i * (self._widthCanvas - self._paddingYRight - self._paddingYLeft) / this._configuration.data.labels.length, self._paddingXTop)
            self._canvas.lineTo(self._paddingYLeft + i * (self._widthCanvas - self._paddingYRight - self._paddingYLeft) / this._configuration.data.labels.length, self._heightCanvas - self._paddingXBottom)
            self._canvas.lineWidth = self._lineXWidth;
            if (self._borderColor instanceof Array) {
                self._canvas.strokeStyle = `rgba(${self._borderColor[0]}, ${self._borderColor[1]}, ${self._borderColor[2]}, ${self._borderOpacity})`
            } else {
                self._canvas.strokeStyle = self._borderColor
            }
            self._canvas.stroke();
            self._canvas.resetTransform();
            self._canvas.closePath();
        }
    }
    Bar.prototype.__beforeChanging = function () {
        let [_maxValue] = [
            self._result.__max_min_values(this._configuration.data.datasets.data).max
        ];
        // For Getting current Left Padding
        if (self._labelsY.display) {
            self._canvas.font = self._labelsY.fontSize + 'px Arial';
            if (_maxValue.toString().split('').length > 9) {
                self._paddingYLeft = self._canvas.measureText('0000').width + 10
            } else {
                self._paddingYLeft = self._canvas.measureText('000').width + 10
            }
        } else {
            self._paddingYLeft = 10
        }
        //_____________________
    }
    Bar.prototype.__setAxisX = function (_display) {
        this.__setAxisXLine(_display)
        if (_display) {
            self._canvas.font = self._labelsX.fontSize + 'px Arial';
            let _heightAxis = null
            if (self._labelsX.hasOwnProperty('fontSize')) {
                _heightAxis = self._labelsX.fontSize * 2
                self._paddingXBottom = _heightAxis
            } else _heightAxis = self._paddingXBottom
            let _canvasBadgeWidth = (self._widthCanvas - (self._paddingYLeft + self._paddingYRight)) / this._configuration.data.labels.length
            this._configuration.data.labels.forEach((_, index) => {
                self._canvas.textAlign = "center";
                self._canvas.fillStyle = self._labelsX.color;
                self._canvas.fillText(self._result.__fittingString(self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + self._paddingYLeft) + (_canvasBadgeWidth/2), self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
                self._canvas.clearColor;
            })
        }
    }
    Bar.prototype.__drawBars = function (onChange) {
        let [_maxHeight, _maxValue] = [
                self._heightCanvas - self._paddingXBottom,
                self._result.__max_min_values(this._configuration.data.datasets.data).max
            ]
        let _canvasBadgeWidth = (self._widthCanvas - (self._paddingYLeft + self._paddingYRight)) / this._configuration.data.labels.length
        this._configuration.data.labels.forEach((_, index) => {
            self._canvas.beginPath();
            self._canvas.fillStyle  = self.constructor.__drawLineColor(0, 0, 0, self._heightCanvas, ['#F21103', '#F86300', '#F7C601'])

            const _percentage = (this._configuration.data.datasets.data[index].value * 100) / _maxValue
            if (onChange) {
                if (_maxHeight === _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100)) {
                    self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        _maxHeight,
                        self._bars.width,
                        -1)
                } else {
                    self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        _maxHeight,
                        self._bars.width,
                        -((_maxHeight - self._paddingXTop) * _percentage) / 100)
                }
            } else {
                let customHeight = 0;
                if (_maxHeight === _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100)) {
                    self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        _maxHeight,
                        self._bars.width,
                        -1)
                } else {
                    for (let i = 0; i < Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100); i++) {
                        setTimeout(() => {
                            customHeight++
                            self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                                _maxHeight,
                                self._bars.width,
                                -customHeight)
                        }, 500)
                    }
                }
            }
            self._canvas.closePath();
        })
    }
    Bar.prototype.__setLegend = function (percpective) {
        self._canvas.textAlign = "left";
        self._canvas.fillStyle = self._labelsX.color;
        self._canvas.fillText('Predicted world population ' + `(${percpective}) in ${_legendInfo.info2}`, (() => {
            let text = 'Predicted world population ' + `(${percpective}) in ${_legendInfo.info2}`
            let widthTxt = self._canvas.measureText(text).width
            return (self._widthCanvas / 2  - widthTxt / 2)
        })(), 10)
        self._canvas.clearColor;
    }
    Bar.prototype.__draw = function () {
        this.__beforeChanging();
        this.__setAxisX(self._labelsX.display);
        this.__setAxisY(self._labelsX.display, self._labelsY.display);
        this.__setCoordinatesNet(self._labelsY.display);
        this.__setLegend(_legendInfo.info1);
        this.__drawBars(this.animateBars)
    }
    Bar.prototype.__init = function () {
        setTimeout(() => {
            this.__animate()
        }, 0)
    }
    Bar.prototype.__update = function () {
        self.constructor.__maxValueInit(this._configuration)
        this.__draw()
    }
    Bar.prototype.__animate = function () {
        this.__update()
        this.animateBars = true
    }
    // ****************************

    /******************HELPERS***********/
    Result.prototype.__fittingString = function (c, str, maxWidth) {
        let width = c.measureText(str).width;
        let ellipsis = '…';
        let ellipsisWidth = c.measureText(ellipsis).width;
        if (width<=maxWidth || width<=ellipsisWidth) {
            return str;
        } else {
            let len = str.length;
            while (width>=maxWidth-ellipsisWidth && len-->0) {
                str = str.substring(0, len);
                width = c.measureText(str).width;
            }
            return str+ellipsis;
        }
    }
    Result.prototype.__max_min_values = function (arr) {
        let [max, min] = [Math.max(...arr.map(_ => _ instanceof Object ? _.value : _)),
            Math.min(...arr.map(_ => _ instanceof Object ? _.value : _))]
        return {
            max, min
        }
    }
    this.constructor.__maxValue = function (nest, options) {
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
    /********** ONLY FOR TRANSPARENT COLOR************/
    this.constructor.__drawLineColor = function (xMoveTo, yMoveTo, xLineTo, yLineTo, dataColor) {
        const gradient = self._canvas.createLinearGradient(xMoveTo, yMoveTo, xLineTo, yLineTo);
        let grow = 1 / (dataColor.length - 1);
        dataColor.forEach((_, index)=> {
            gradient.addColorStop( grow * index, _);
        })
        return gradient
    }

    this.constructor.__maxValueInit = function (options) {
        self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
        [{
            nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'fontSize'],
            value: 16,
            emptyProperty: 13
        }, {
            nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'fontSize'],
            value: 16,
            emptyProperty: 13
        }, {
            nesting: ['options', 'padding', 'paddingBottom'],
            value: 30,
            emptyProperty: 20
        }, {
            nesting: ['options', 'padding', 'paddingLeft'],
            value: 50,
            emptyProperty: 10
        }, {
            nesting: ['options', 'bars', 'width'],
            value: 60,
            emptyProperty: 40
        }, {
            nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'display'],
            value: true,
            emptyProperty: true
        }, {
            nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'display'],
            value: true,
            emptyProperty: true
        }].forEach(_ => self.constructor.__maxValue(_, options))
    }
    /*_________________________________*/

    Result.prototype.__init = function (parameters) {
        selector.width                = self._widthCanvas;
        selector.height               = self._heightCanvas;
        self.constructor.__maxValueInit(parameters); /* Set Default Max Values */
        self._bars                    = parameters.options.bars;
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
        self._paddingXBottom = self._labelsX.display ? self._paddingXBottom: 10;
        self._paddingYLeft = self._labelsY.display ? self._paddingYLeft + (50 - self._paddingYLeft): 10;
        self._result = new Result(selector, parameters);
        return self._result[parameters.type]
    }
    return new Result(selector)
}
new ChartArt(canvas).__init({
    type: 'bar',
    data: {
        labels: _dataChart[_legendInfo.info2].map(_ => _.text),
        datasets: {
            data: _dataChart[_legendInfo.info2],
            borderColor: [175, 160, 160],
            borderOpacity: 1
        }
    },
    options: {
        bars: {
            width: 40
        },
        padding: {
            paddingLeft: 10,
            paddingRight: 30,
            paddingBottom: 10
        },
        scales: {
            yAxis: {
                lineWidth: 1,
                tricks: {
                    labels: {
                        display: true,
                        fontSize: 14,
                        color: 'rgb(35,32,32)'
                    }
                }
            },
            xAxis: {
                lineWidth: 1,
                tricks: {
                    labels: {
                        display: true,
                        fontSize: 14,
                        color: 'rgb(35,32,32)'
                    }
                }
            }
        }
    }
})