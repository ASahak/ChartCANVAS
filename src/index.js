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
            // this.bar = new Bar(options);
            // this.bar.__init();
            this.pie = new Pie(options);
            this.pie.__init();
        }
    }

    /***************Bar Chart ******************/
    function Bar (options) {
        this._barsPositions = {};
        this._gui = new dat.GUI();
        const barFolder = this._gui.addFolder('Bar');
        this._configuration = options;
        this.animateBars = false;
        self._borderColor = [175, 160, 160];
        barFolder.addColor(self, '_borderColor')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
        barFolder.add(self, '_borderOpacity', 0, 1)
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
        barFolder.addColor(self, '_axisColor')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
        barFolder.add(self, '_axisOpacity', 0, 1)
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
        const _bars = barFolder.addFolder('bars');
        _bars.add(self._bars, 'width', 20, 60)
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.add(self, '_barTooltip')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        // Bars Colors ______________
        _bars.addColor(self._barsColors, 'one')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.addColor(self._barsColors, 'two')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.addColor(self._barsColors, 'three')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        //_________________

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
        const legendBar = barFolder.addFolder('Legend');
        legendBar.add(self, '_legend')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
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
        if (self._axisOpacity !== 1) {
            self._canvas.strokeStyle = self._axisColor.replace(')', ', ' + self._axisOpacity + ')').replace('rgb', 'rgba')
        } else {
            self._canvas.strokeStyle = self._axisColor
        }
        self._canvas.stroke();
        self._canvas.closePath();
        self._canvas.resetTransform()
    }
    Bar.prototype.__setAxisXLine = function (_display) {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        self._paddingXBottom = self._labelsX.display ? self._paddingXBottom: 10;
        let _heightAxis = null;
        if (self._labelsX.hasOwnProperty('fontSize') && _display) {
            _heightAxis = self._labelsX.fontSize * 2;
            self._paddingXBottom = _heightAxis
        } else _heightAxis = self._paddingXBottom;
        self._lineXWidth && (
            self._canvas.moveTo(self._paddingYLeft, self._heightCanvas - _heightAxis),
            self._canvas.lineTo(self._widthCanvas - self._paddingYRight, self._heightCanvas - _heightAxis),
            self._canvas.lineWidth = self._lineYWidth
        );
        if (self._axisOpacity !== 1) {
            self._canvas.strokeStyle = self._axisColor.replace(')', ', ' + self._axisOpacity + ')').replace('rgb', 'rgba')
        } else {
            self._canvas.strokeStyle = self._axisColor
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
            self._canvas.fillText('0', self._paddingYLeft - 7, self._heightCanvas - self._paddingXBottom);
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
            self._canvas.beginPath();
            self._canvas.moveTo(self._paddingYLeft - 5, i * (self._heightCanvas - self._paddingXBottom - self._paddingXTop) / 10 + self._paddingXTop)
            self._canvas.lineTo(self._widthCanvas - self._paddingYRight, i * (self._heightCanvas - self._paddingXBottom - self._paddingXTop) / 10 + self._paddingXTop)
            self._canvas.lineWidth = self._lineXWidth;
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
            self._canvas.beginPath();
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
        if (self._legend) {
          self._paddingXTop = 30
        } else {
            self._paddingXTop = 10
        }

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
        this.__setAxisXLine(_display);
        if (_display) {
            self._canvas.font = self._labelsX.fontSize + 'px Arial';
            let _heightAxis = null;
            if (self._labelsX.hasOwnProperty('fontSize')) {
                _heightAxis = self._labelsX.fontSize * 2;
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
        const _setProperties = (_index, _x1, _x2, _y1, _y2) => {
            Object.defineProperty(this._barsPositions, _index, {
                value: {
                    x1: {x: _x1, y: _y1},
                    x2: {x: _x1, y: _y2},
                    y1: {x: _x2, y: _y1},
                    y2: {x: _x2, y: _y2}
                },
                enumerable: true,
                configurable: true,
                writable: false
            })
        }
        this._configuration.data.labels.forEach((_, index) => {
            self._canvas.beginPath();
            self._canvas.fillStyle  = self.constructor.__drawLineColor(0, 0, 0, self._heightCanvas, [self._barsColors.one, self._barsColors.two, self._barsColors.three])
            const _percentage = (this._configuration.data.datasets.data[index].value * 100) / _maxValue
            if (onChange) {
                if (_maxHeight === _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100)) {
                    _setProperties(
                        index,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2 + self._bars.width,
                        _maxHeight - 1,
                        _maxHeight
                    );
                    self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        _maxHeight,
                        self._bars.width,
                        -1)
                } else {
                    _setProperties(
                        index,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2 + self._bars.width,
                        _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100),
                        _maxHeight
                    );
                    self._canvas.fillRect(index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        _maxHeight,
                        self._bars.width,
                        -((_maxHeight - self._paddingXTop) * _percentage) / 100)
                }
            } else {
                let customHeight = 0;
                if (_maxHeight === _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100)) {
                    _setProperties(
                        index,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2 + self._bars.width,
                        _maxHeight - 1,
                        _maxHeight
                    );
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
                    _setProperties(
                        index,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2,
                        index * _canvasBadgeWidth + self._paddingYLeft + (_canvasBadgeWidth - self._bars.width) / 2 + self._bars.width,
                        _maxHeight - Math.round(((_maxHeight - self._paddingXTop) * _percentage) / 100),
                        _maxHeight
                        );
                }
            }
            self._canvas.closePath();
        })
    }
    Bar.prototype.__setLegend = function (percpective) {
        if (self._legend) {
            self._canvas.font = '16px Arial';
            self._canvas.textAlign = "left";
            self._canvas.fillStyle = 'rgb(20, 17, 17)';
            self._canvas.fillText('Predicted world population ' + `(${percpective}) in ${_legendInfo.info2}`, (() => {
                let text = 'Predicted world population ' + `(${percpective}) in ${_legendInfo.info2}`
                let widthTxt = self._canvas.measureText(text).width
                return (self._widthCanvas / 2  - widthTxt / 2)
            })(), 15);
            self._canvas.clearColor;
        }
    }
    Bar.prototype.__draw = function () {
        this.__beforeChanging();
        this.__setAxisX(self._labelsX.display);
        this.__setAxisY(self._labelsX.display, self._labelsY.display);
        this.__setCoordinatesNet(self._labelsY.display);
        this.__setLegend(_legendInfo.info1);
        this.__drawBars(this.animateBars);
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
        this.__update();
        this.animateBars = true;
        // adding tooltip effect for Bar Chart _______________
        let _tooltipElement = null;
        if (self._barTooltip) {
            const canvasMove = (e) => {
                if (self._barTooltip) {
                    let moveBar = false;
                    Array.from(Object.keys(self._result.bar._barsPositions)).forEach((_, index) => {
                        if (e.offsetX >= self._result.bar._barsPositions[_].x1.x &&
                            e.offsetX <= self._result.bar._barsPositions[_].y1.x &&
                            e.offsetY >= self._result.bar._barsPositions[_].x1.y &&
                            e.offsetY <= self._result.bar._barsPositions[_].y2.y) {
                            moveBar = true;
                            let [heightBar, maxHeight, tooltipHeight, tooltipWidth] = [
                                self._result.bar._barsPositions[_].x2.y - self._result.bar._barsPositions[_].x1.y,
                                self._result.bar._barsPositions[_].x2.y,
                                _tooltipElement.getBoundingClientRect().height,
                                _tooltipElement.getBoundingClientRect().width
                            ];
                            let [_top, _left, className] = [0, 0, null];
                            _top = maxHeight - heightBar + canvas.offsetTop;
                            _left = self._result.bar._barsPositions[_].x1.x + canvas.offsetLeft + self._bars.width + 10
                            className = 'to-left';
                            if (heightBar < tooltipHeight) {
                                _top = maxHeight - tooltipHeight + canvas.offsetTop;
                                className = 'to-left-bottom';
                            }
                            if (self._result.bar._barsPositions[_].x1.x + self._bars.width + tooltipWidth > self._widthCanvas - self._paddingYRight) {
                                _left = self._result.bar._barsPositions[_].x1.x + canvas.offsetLeft - tooltipWidth - 10
                                className = (heightBar < tooltipHeight) ? 'to-right-bottom' : 'to-right';
                            }
                            _tooltipElement.setAttribute('id', className);
                            _tooltipElement.innerHTML = `
                                <p>${_dataChart[_legendInfo.info2][Number(_)].text}</p>
                                <p>${_dataChart[_legendInfo.info2][Number(_)].value}</p>
                            `;
                            _tooltipElement.style.cssText = `
                                top: ${_top}px;
                                left: ${_left}px;
                            `;
                            _tooltipElement.style.cssText += 'opacity: 1'
                            _tooltipElement.classList.add('show_tooltip')
                        }
                    })
                    if (!moveBar) {
                        _tooltipElement.style.cssText += 'opacity: 0'
                        _tooltipElement.classList.remove('show_tooltip')
                    }
                    /*>>>>> For Setter <<<<<<*/
                    self._bars.mouseMove.callback = _tooltipElement;
                    //_____________
                }
            };
            canvas.removeEventListener('mousemove', canvasMove, false);
            if (document.querySelector('.tooltip-element-bar')) {
                document.querySelectorAll('.tooltip-element-bar').forEach(_ => _.remove())
            }
            _tooltipElement = document.createElement('DIV');
            _tooltipElement.className = 'tooltip-element-bar'
            canvas.insertAdjacentElement('afterend', _tooltipElement);
            canvas.addEventListener('mousemove', canvasMove)
        }
        //______________________________________
    }
    // ****************************

    /*******************Pie Chart**********************/
    function Pie (options) {
        this._gui = new dat.GUI();
        const _pieFolder = this._gui.addFolder('Pie');
        this._configuration = options;
        this._animateRadius = false;
        this._values = [];
        this._radius = 150;
        this._colors = [];
        this._angles = {
            begin:[],
            end:[]
        };
        this._countPies = -1;
        this._totalValues = 0;
        _dataChart[_legendInfo.info2].map(_ => {
            this._values.push(_.value);
            this._totalValues += _.value
        });
        this._pieParts = [];
        this._mouse = {x :0, y:0, oldx: 0, oldy:0};
    }
    Pie.prototype.__findPointOnCircle = function (originX, originY , radius, angleRadians) {
        const destX = radius * Math.cos(angleRadians) + originX;
        const destY = radius * Math.sin(angleRadians) + originY;
        return {x : destX, y : destY}
    };
    Pie.prototype.__generatePieAngles = function (count) {
        if (count === 0) {
            this._angles.begin.push(0)
            this._angles.end.push((Math.PI * 2) * (this._values[0] / this._totalValues))
        } else {
            this._angles.begin.push((() =>  {
                let a = 0;
                a += this._angles.begin[count - 1] + (Math.PI * 2) * (this._values[count - 1] / this._totalValues);
                return a
            })());
            this._angles.end.push((() =>  {
                let a = 0;
                a += this._angles.end[count -1] + (Math.PI * 2) * (this._values[count] / this._totalValues);
                return a
            })())
        }
    };
    function SinglePies (movingX, movingY, startAngle, endAngle, radius, color, index, hoverColor) {
        this.movingX = movingX;
        this.movingY = movingY;
        this.opacity = 1;
        this.color = color;
        this.leaveColor = color;
        this.hoverColor = hoverColor;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius = 0;
        this.index = index;
    }
    /*****this one is one of the some animation examples (from arc to center)*****/
    Pie.prototype.__movingPies = function () {
        const _newCoords = this.__findPointOnCircle(
            self._widthCanvas / 2,
            self._heightCanvas / 2,
            this._radius / 2, /*distance from center*/
            this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
        const _everyX = Math.cos(this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
        const _everyY = Math.sin(this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
        let _movingX = _newCoords.x;
        let _movingY = _newCoords.y;

        /******this code should be only in the singlePie prototype***/
        // if (Math.round(this.movingX) === self._widthCanvas / 2 && Math.round(this.movingY) === self._heightCanvas / 2) {
        //     window.clearInterval($interval);
        // } else {
        //     this._opacity += this._opacity > 1 ? 0: 0.07;
        //     if (this.movingX < self._widthCanvas / 2) {
        //         this.movingX+=Math.abs(this.everyX);
        //     } else {
        //         this.movingX-=this.everyX;
        //     }
        //     if (this.movingY < self._heightCanvas / 2) {
        //         this.movingY+=Math.abs(this.everyY);
        //     } else {
        //         this.movingY-=this.everyY;
        //     }
        //     this.color = self._result.__convertHex(color, this._opacity);
        //     this.__draw()
        // }
    }
    Pie.prototype.__clearCircle = function (context,x,y,radius) {
        context.save();
        context.beginPath();
        context.arc(x, y, radius, 0, 2*Math.PI, true);
        context.clip();
        context.clearRect(x-radius,y-radius,radius*2,radius*2);
        context.restore();
    };
    SinglePies.prototype.__draw = function () {
        self._canvas.fillStyle = this.color;
        self._canvas.lineWidth = 1;
        self._canvas.beginPath();
        self._canvas.moveTo(this.movingX, this.movingY);
        self._canvas.arc(this.movingX, this.movingY, this.radius, this.startAngle, this.endAngle, false);
        // self._canvas.closePath();
        self._canvas.lineTo(this.movingX, this.movingY);
        self._canvas.fill();
        self._canvas.addHitRegion({id: 'arc_' + this.index});
        self._canvas.strokeStyle = '#fff';
        self._canvas.stroke();
        self._canvas.beginPath();
        self._canvas.save();
        self._canvas.translate(this.movingX, this.movingY);
        // ctx.font = middle.radius / 10 + "px Arial";
        // ctx.rotate(previousRadian + obj.radian);
        self._canvas.restore();
        // var labelText = "'" + obj.label + "' " + parseInt((values[i] / total) * 100) + "%";
        // self._canvas.fillText(labelText, self._canvas.measureText(labelText).width/2, 0);
    };
    SinglePies.prototype.__update = function (_constructor) {
        // self.constructor.__maxValueInit(this._configuration)
        const $interval = window.setInterval(() => {
            if (this.radius >= self._result.pie._radius) {
                window.clearInterval($interval);
            } else {
                this.radius+=3;
                this.__draw()
            }
        }, 10);
    };
    Pie.prototype.__animate = function () {
        this._countPies++;
        this._pieParts[this._countPies].__update(this._pieParts[this._countPies]);
    };
    Pie.prototype.__init = async function () {
        await setTimeout(() => {
            this._values.forEach((_, index)=> {
                this.__generatePieAngles(index);
                this._colors.push(self._result.__getRandomColor());
                this._pieParts.push(new SinglePies(
                    self._widthCanvas / 2, self._heightCanvas / 2,
                    this._angles.begin[index],
                    this._angles.end[index],
                    this._radius,
                    this._colors[index % this._colors.length],
                    index,
                    self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns tru color; [0.2] -- returns lighter; [-0.2] -- returns darker*/)
                ));
            });
            const $syncInterval = setInterval(() => {
                if (this._countPies < this._pieParts.length - 1) {
                    this.__animate();
                } else {
                    clearInterval($syncInterval);
                    setTimeout(() => {
                        this._pieParts.map(_class => {
                            _class.__draw()
                        })
                    }, 500)
                }
            }, 200)
        }, 0);
        let _prevId = null;
        let _prevColor = null;
        await canvas.addEventListener('mousemove', (event) => {
            if (event.region) {
                if (_prevId !== event.region) {
                    _prevColor = this._pieParts[+event.region.split('_')[1]].color;
                    this._pieParts[+event.region.split('_')[1]].color = this._pieParts[+event.region.split('_')[1]].hoverColor;
                    this._pieParts[+event.region.split('_')[1]].__draw();
                    if (_prevId) {
                        this._pieParts[+_prevId.split('_')[1]].color = this._pieParts[+_prevId.split('_')[1]].leaveColor;
                        this._pieParts[+_prevId.split('_')[1]].__draw();
                    }
                }
                _prevId = event.region;
            } else {
                if (_prevId) {
                    this._pieParts[+_prevId.split('_')[1]].color = _prevColor;
                    this._pieParts[+_prevId.split('_')[1]].__draw();
                }
                _prevId = null
            }
            // this._mouse.x = event.clientX;
            // this._mouse.y = event.clientY;
        });
    };
    /*********************************/

    /******************HELPERS***********/
    Result.prototype.__convertHex = function (hex,opacity){
        let hexCode = hex.replace('#',''),
        r = parseInt(hexCode.substring(0,2), 16),
        g = parseInt(hexCode.substring(2,4), 16),
        b = parseInt(hexCode.substring(4,6), 16);

        const result = 'rgba('+r+','+g+','+b+','+opacity+')';
        return result;
    };
    Result.prototype.__getRandomColor = function () {
        return '#'+Math.random().toString(16).substr(2,6);;
    };
    /*___For some color to change more lighter or darker ____*/
    Result.prototype.__colorLuminance = function (hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        let rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    };
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
                if (res && !res.hasOwnProperty(_)) {
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
        if (options.type === 'bar') {
            [{
                nesting: ['options', 'scales', 'axisColor'],
                value: 'rgb(85,72,72)',
                emptyProperty: 'rgb(85,72,72)'
            }, {
                nesting: ['options', 'bars', 'mouseMove', 'tooltip'],
                value: true,
                emptyProperty: true
            }, {
                nesting: ['options', 'legend'],
                value: true,
                emptyProperty: true
            }, {
                nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'fontSize'],
                value: 16,
                emptyProperty: 13
            }, {
                nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'fontSize'],
                value: 16,
                emptyProperty: 13
            }, {
                nesting: ['options', 'padding', 'paddingTop'],
                value: 40,
                emptyProperty: 10
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
        } else if (options.type === 'pie' || options.type === 'doughnut') {
            [{
                nesting: ['options', 'centerSize'],
                value: 100,
                emptyProperty: 50
            }].forEach(_ => self.constructor.__maxValue(_, options))
        }
    }
    /*_________________________________*/

    Result.prototype.__init = function (parameters) {
        selector.width                = self._widthCanvas;
        selector.height               = self._heightCanvas;
        self.constructor.__maxValueInit(parameters); /* Set Default Max Values */
        // For Bar Chart ~~~~~~~~~
        self._bars                    = parameters.options.bars;
        self._barsColors              = parameters.options.bars && parameters.options.bars.backgroundColors || { one: '#F21103', two: '#F86300', three: '#F7C601'};
        self._barTooltip              = (parameters.options.bars && parameters.options.bars.mouseMove && parameters.options.bars.mouseMove.hasOwnProperty('tooltip')) ? parameters.options.bars.mouseMove.tooltip : true;
        self._legend                  = parameters.options.legend;
        self._paddingYLeft            = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
        self._paddingXBottom          = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
        self._paddingYRight           = parameters.options.padding && parameters.options.padding.paddingRight || 10;
        self._paddingXTop             = parameters.options.padding && parameters.options.padding.paddingTop || 10;
        self._lineYWidth              = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
        self._lineXWidth              = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
        self._borderColor             = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || '#000';
        self._axisColor               = parameters.options.scales && parameters.options.scales.axisColor || 'rgb(85,72,72)';
        self._axisOpacity             = 1;
        self._borderOpacity           = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
        self._labelsX                 = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
        self._labelsY                 = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
        self._paddingXBottom          = self._labelsX.display ? self._paddingXBottom: 10;
        self._paddingYLeft            = self._labelsY.display ? self._paddingYLeft + (50 - self._paddingYLeft): 10;
        //~~~~~~~~~~~~~~~~~~~~~~

        // For Pie Chart ~~~~~~~~~~~~~~~~~~~

        //~~~~~~~~~~~~~~~~~~~~~~
        self._result = new Result(selector, parameters);

        return self._result[parameters.type]
    }
    return new Result(selector)
}
// For Pie Chart
new ChartArt(canvas).__init({
    type: 'pie',
    data: {
        labels: _dataChart[_legendInfo.info2].map(_ => _.text),
        datasets: {
            legends: {
                display: true
            },
            data: _dataChart[_legendInfo.info2],
        }
    },
    options: {
        centerSize: 50
    }
});
// For Bar Chart
// new ChartArt(canvas).__init({
//     type: 'bar',
//     data: {
//         labels: _dataChart[_legendInfo.info2].map(_ => _.text),
//         datasets: {
//             data: _dataChart[_legendInfo.info2],
//             borderColor: [175, 160, 160],
//             borderOpacity: 1
//         }
//     },
//     options: {
//         legend: true,
//         bars: {
//             backgroundColors: { one: '#F21103', two: '#F86300', three: '#F7C601'},
//             mouseMove: {
//                 tooltip: true,
//                 set callback (element) {}
//             },
//             width: 40
//         },
//         padding: {
//             paddingLeft: 10,
//             paddingRight: 30,
//             paddingBottom: 10
//         },
//         scales: {
//             axisColor: 'rgb(85,72,72)',
//             yAxis: {
//                 lineWidth: 1,
//                 tricks: {
//                     labels: {
//                         display: true,
//                         fontSize: 14,
//                         color: 'rgb(35,32,32)'
//                     }
//                 }
//             },
//             xAxis: {
//                 lineWidth: 1,
//                 tricks: {
//                     labels: {
//                         display: true,
//                         fontSize: 14,
//                         color: 'rgb(35,32,32)'
//                     }
//                 }
//             }
//         }
//     }
// })


// let values = [788000000, 578000000, 398000000, 0, 3780000000, 769000000, 27000000];
// function draw() {
//     var canvas2 = document.getElementById("canvas");
//     var ctx = canvas2.getContext("2d");
//     let previousRadian = 0;
//     var colors = ['#4CAF50', '#00BCD4', '#E91E63','#FFC107', '#9E9E9E'];
//     var angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.5, Math.PI * 0.5];
//     let total = 788000000+ 578000000+ 398000000+ 0+ 3780000000+ 769000000+ 27000000;
//     var middle = {
//         x: canvas2.width / 2,
//         y: canvas2.height / 2,
//         radius: canvas2.height / 2
//     };
//     let obj = {};
//     let anglePI = previousRadian;
//     let count = -1;
//     let firstRequest = true;
//
//     function intervalArcs (startAngle, endAngle, movingX, movingY) {
//         // obj.radian = (Math.PI * 2) * (values[count] / total);
//         // ctx.clearRect(0,0,300, 300);
//         ctx.fillStyle = colors[count % colors.length];
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.moveTo(movingX, movingY);
//         ctx.arc(movingX, movingY, middle.radius - 2, startAngle, endAngle, false);
//         ctx.closePath();
//         ctx.lineTo(movingX, movingY);
//         ctx.fill();
//         ctx.strokeStyle = '#fff';
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.save();
//         ctx.translate(movingX, movingY);
//         // ctx.font = middle.radius / 10 + "px Arial";
//         // ctx.rotate(previousRadian + obj.radian);
//         ctx.restore();
//         // previousRadian += obj.radian
//         // if (count < 3) {
//         //     startAnimation()
//         // }
//         // var labelText = "'" + obj.label + "' " + parseInt((values[i] / total) * 100) + "%";
//         // ctx.fillText(labelText, ctx.measureText(labelText).width/2, 0);
//
//     }
//     let animationStep = 10;
//     let mocke = {
//         begin:[],
//         end:[]
//     }
//     function startAnimation () {
//         count++;
//         if (count === 0) {
//             mocke.begin.push(0)
//             mocke.end.push((Math.PI * 2) * (values[0] / total))
//         } else {
//             mocke.begin.push((() =>  {
//                 let a = 0;
//                 a += mocke.begin[count -1] + (Math.PI * 2) * (values[count-1] / total)
//                 return a
//             })())
//             mocke.end.push((() =>  {
//                 let a = 0;
//                 a += mocke.end[count -1] + (Math.PI * 2) * (values[count] / total)
//                 return a
//             })())
//         }
//         callDraw()
//     }
//     function findPointOnCircle(originX, originY , radius, angleRadians) {
//         var newX = radius * Math.cos(angleRadians) + originX
//         var newY = radius * Math.sin(angleRadians) + originY
//         return {"x" : newX, "y" : newY}
//     }
//     function callDraw () {
//         const newCoords = findPointOnCircle(150, 150, 150, mocke.begin[count]+(mocke.end[count]-mocke.begin[count])/2);
//         const everyX = Math.cos(mocke.begin[count]+(mocke.end[count]-mocke.begin[count])/2);
//         const everyY = Math.sin(mocke.begin[count]+(mocke.end[count]-mocke.begin[count])/2);
//         let movingX = newCoords.x;
//         let movingY = newCoords.y;
//         const $interval = window.setInterval(() => {
//             if (Math.round(movingX) === middle.x && Math.round(movingY) === middle.y) {
//                 window.clearInterval($interval);
//                 if (count < 6) {
//                     setTimeout(() => startAnimation(), 0)
//                 }
//             } else {
//                 if (movingX < middle.x) {
//                     movingX+=Math.abs(everyX);
//                 } else {
//                     movingX-=everyX;
//                 }
//                 if (movingY < middle.y) {
//                     movingY+=Math.abs(everyY);
//                 } else {
//                     movingY-=everyY;
//                 }
//                 intervalArcs(mocke.begin[count], mocke.end[count], movingX, movingY);
//             }
//         }, animationStep / 10)
//     }
//     startAnimation()
// }
//
// window.onload = draw