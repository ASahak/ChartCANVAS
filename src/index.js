import * as dat from 'dat.gui';
require('./styles/style.css');
const canvas = document.querySelector('#chart');
const _dataChart = {
    2009: [
        { value: 704000000, text: 'Africa'},
        { value: 506000000, text: 'N. America'},
        { value: 338000000, text: 'S. America'},
        { value: 0, text: 'Antarctica'},
        { value: 3150000000, text: 'Asia'},
        { value: 696000000, text: 'Europa'},
        { value: 17000000, text: 'Australia'},
    ],
    2014: [
        { value: 780000000, text: 'Africa'},
        { value: 560000000, text: 'N. America'},
        { value: 350000000, text: 'S. America'},
        { value: 0, text: 'Antarctica'},
        { value: 3600000000, text: 'Asia'},
        { value: 727000000, text: 'Europa'},
        { value: 20000000, text: 'Australia'},
    ],
    2019: [
        { value: 788000000, text: 'Africa'},
        { value: 578000000, text: 'N. America'},
        { value: 398000000, text: 'S. America'},
        { value: 0, text: 'Antarctica'},
        { value: 3780000000, text: 'Asia'},
        { value: 769000000, text: 'Europa'},
        { value: 27000000, text: 'Australia'},
    ]
};
const _legendInfo = {
    info1: null,
    info2: 2019,
};
function ChartArt (selector) {
    const self              = this;
    this._result            = null;
    this._canvas            = selector.getContext('2d');
    this._heightCanvas      = 500;
    this._widthCanvas       = 800;
    function Result (elem, options) {
        if (options) {
            // this.bar     = new Bar(options);
            // this.bar.__init();
            // this.pie     = new Pie(options);
            // this.pie.__init();
            // this.polar   = new Polar(options);
            // Object.assign(this.polar.__proto__, Pie.prototype);
            // this.polar.__initP();

            this.line       = new Line(options);
            this.line.__initL();
        }
    }

    /***************Bar Chart ******************/
    function Bar (options) {
        this._barsPositions  = {};
        this._gui            = new dat.GUI();
        const barFolder      = this._gui.addFolder('Bar');
        this._configuration  = options;
        this.animateBars     = false;
        self._borderColor    = [175, 160, 160];
        barFolder.addColor(self, '_borderColor').name('Border Color')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
        barFolder.add(self, '_borderOpacity', 0, 1).name('Border Opacity')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
        barFolder.addColor(self, '_axisColor').name('Axis Color')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        barFolder.add(self, '_axisOpacity', 0, 1).name('Axis Opacity')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        const _bars = barFolder.addFolder('Bars');
        _bars.add(self._bars, 'width', 20, 60).name('Width')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.add(self, '_barTooltip').name(`Bar's Tooltip`)
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        // Bars Colors ______________
        _bars.addColor(self._barsColors, 'one').name('One')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.addColor(self._barsColors, 'two').name('Two')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        _bars.addColor(self._barsColors, 'three').name('Three')
            .onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            });
        //_________________

        // Sub Folders
        const xAxis = barFolder.addFolder('XAxis')
        xAxis.add(self._labelsX, 'display').name('Display')
            .onChange((e) => {
                xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                requestAnimationFrame(this.__animate.bind(this))
            })
        const xAxisFontSize = xAxis.add(self._labelsX, 'fontSize', 10, 26).name('Font Size');
        xAxisFontSize.onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsX.display ? 'auto' : 'none'}; opacity: ${self._labelsX.display ? 1 : 0.5}`);
        const xAxisColor = xAxis.addColor(self._labelsX, 'color').name('Color');
        xAxisColor.onChange(() => {
                requestAnimationFrame(this.__animate.bind(this))
            })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsX.display ? 'auto' : 'none'}; opacity: ${self._labelsX.display ? 1 : 0.5}`);

        const yAxis = barFolder.addFolder('YAxis')
        yAxis.add(self._labelsY, 'display')
            .onChange((e) => {
                yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                requestAnimationFrame(this.__animate.bind(this))
            })
        const yAxisFontSize = yAxis.add(self._labelsY, 'fontSize', 10, 26).name('Font Size');
        yAxisFontSize.onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        })
            .domElement.parentElement.setAttribute('style', `pointer-events: ${self._labelsY.display ? 'auto' : 'none'}; opacity: ${self._labelsY.display ? 1 : 0.5}`);
        const yAxisColor = yAxis.addColor(self._labelsY, 'color').name('Color');
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
    };
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
    };
    Bar.prototype.__setAxisY = function (_displayX, _displayY) {
        this.__setAxisYLine(_displayX)
        if (_displayY) {
            self._canvas.font = self._labelsY.fontSize + 'px Arial';
            self._canvas.textAlign = "right";
            self._canvas.fillStyle = self._labelsY.color;
            self._canvas.fillText('0', self._paddingYLeft - 7, self._heightCanvas - self._paddingXBottom);
            self._canvas.clearColor;
        }
    };
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
        let nextVal = maxCeil;
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
    };
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
    };
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
    };
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
        };
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
    };
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
    };
    Bar.prototype.__draw = function () {
        this.__beforeChanging();
        this.__setAxisX(self._labelsX.display);
        this.__setAxisY(self._labelsX.display, self._labelsY.display);
        this.__setCoordinatesNet(self._labelsY.display);
        this.__setLegend(_legendInfo.info1);
        this.__drawBars(this.animateBars);
    };
    Bar.prototype.__update = function () {
        self.constructor.__maxValueInit(this._configuration);
        this.__draw();
    };
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
    };
    Bar.prototype.__init = function () {
        setTimeout(() => {
            this.__animate()
        }, 0)
    };
    // ***************Bar End*************

    /*******************Pie Chart**********************/
    function Pie () {
        this._gui            = new dat.GUI();
        this._values         = [];
        this._radius         = 150;
        this._colors         = [];
        this._angles         = {
            begin:[],
            end:[]
        };
        this._betweenAngles  = [];
        this._totalValues    = 0;
        this._labels         = [];
        this._legendSize     = null;
        this._cx             = this._radius;
        this._cy             = this._radius;
        _dataChart[_legendInfo.info2].map(_ => {
            this._labels.push(_.text);
            this._values.push(_.value);
            this._totalValues += _.value
        });
        [this._divider, this._dividerText] = self.constructor.__valuesIntegration(this._values);
        this._pieParts       = [];
        this._labelsPosition = [];
        this._prevId         = null;
        this._prevColor      = null;
        const _pieFolder     = this._gui.addFolder('Pie');
        _pieFolder.add(self, '_lineWidth_pie', 0.1, 3).name('Space of Pies')
            .onChange(() => {
                this._pieParts.map(_class => {
                    _class.__draw()
                })
            });
        const _legends = _pieFolder.addFolder('Legends');
        _legends.add(self._legends_pie, 'display').name('Display')
            .onChange((e) => {
                _legendsPosition.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                this.__init()
            });
        let fakePosition = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
        fakePosition[self._legends_position_pie] = true;
        const _legendsPosition = _legends.addFolder('Position');
        _legendsPosition.add(fakePosition, 'top').name('Top').listen()
            .onChange((e) => {
                setChecked("top");
                if (e) {
                    self._legends_position_pie = 'top'
                    this.__init()
                }
            });
        _legendsPosition.add(fakePosition, 'left').name('Left').listen()
            .onChange((e) => {
                setChecked("left");
                if (e) {
                    self._legends_position_pie = 'left'
                    this.__init()
                }
            });
        _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
            .onChange((e) => {
                setChecked("bottom");
                if (e) {
                    self._legends_position_pie = 'bottom'
                    this.__init()
                }
            });
        _legendsPosition.add(fakePosition, 'right').name('Right').listen()
            .onChange((e) => {
                setChecked("right");
                if (e) {
                    self._legends_position_pie = 'right'
                    this.__init()
                }
            });
        function setChecked( prop ){
            for (let param in fakePosition){
                fakePosition[param] = false;
            }
            fakePosition[prop] = true;
        }
        _pieFolder.add(self, '_onHover_pie').name('Hover Pie')
            .onChange(() => {
                this._pieParts.map(_class => {
                    _class.__draw()
                })
            });
        _pieFolder.add(self, '_tooltip_pie').name('Hover Tooltip')
            .onChange(() => {
                this._pieParts.map(_class => {
                    _class.__draw()
                })
            });
        _pieFolder.open();
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
    /*****this one is one of the some animation examples (from arc to center)*****/
    Pie.prototype.__movingPies = function () {
        const _newCoords = this.__findPointOnCircle(
            this._cx,
            this._cy,
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
        //     if (this.movingX < this._cx) {
        //         this.movingX+=Math.abs(this.everyX);
        //     } else {
        //         this.movingX-=this.everyX;
        //     }
        //     if (this.movingY < this._cy) {
        //         this.movingY+=Math.abs(this.everyY);
        //     } else {
        //         this.movingY-=this.everyY;
        //     }
        //     this.color = self._result.__convertHex(color, this._opacity);
        //     this.__draw()
        // }
    };
    Pie.prototype.__clearCircle = function (context, x, y, radius) {
        context.save();
        context.beginPath();
        context.arc(x, y, radius, 0, 2*Math.PI, true);
        context.clip();
        context.clearRect(x-radius,y-radius,radius*2,radius*2);
        context.restore();
    };
    function SinglePies (_x, _y, everyAngle, startAngle, endAngle, radius, color, index, hoverColor) {
        this._everyAngle    = everyAngle;
        this._endAngle      = endAngle;
        this._x             = _x;
        this._y             = _y;
        this._startAngle    = startAngle;
        this._limitAngle    = startAngle;
        this._index         = index;
        this._radius        = radius;
        this._color         = color;
        this._leaveColor    = color;
        this._hoverColor    = hoverColor;
    }
    SinglePies.prototype.__update = function () {
        const $interval = window.setInterval(() => {
            if (this._limitAngle >= this._endAngle) {
                window.clearInterval($interval);
            } else {
                this._limitAngle+=this._everyAngle
                this.__draw()
            }
        }, 30);
    };
    SinglePies.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
        self._canvas.beginPath();
        self._canvas.rect(x, y, widthText + widthValue, 18);
        self._canvas.fillStyle = 'rgb(0,0,0)';
        self._canvas.globalAlpha = .8
        self._canvas.fill();
        self._canvas.strokeStyle = '#fff';
        self._canvas.fillStyle = '#fff';
        self._canvas.fillText(self._result.__fittingString(self._canvas, text + ' ' + values, widthText + widthValue), x + 20, y + 12);
        self._canvas.clearColor;
        self._canvas.stroke();
        self._canvas.closePath();

        self._canvas.beginPath();
        self._canvas.lineWidth = 2;
        self._canvas.rect(x + 5, y + 4, 10, 10);
        self._canvas.fillStyle = quadroFill;
        self._canvas.globalAlpha = 1;
        self._canvas.fill();
        self._canvas.closePath();
    };
    SinglePies.prototype.__draw = function () {
        self._canvas.fillStyle = this._color;
        self._canvas.lineWidth = self._lineWidth_pie;

        self._canvas.moveTo(this._x, this._y);
        self._canvas.arc(this._x, this._y, this._radius / 2, this._startAngle, this._limitAngle, false);
        self._canvas.lineTo(this._x, this._y);

        self._canvas.beginPath();
        self._canvas.moveTo(this._x, this._y);
        self._canvas.arc(this._x, this._y, this._radius, this._startAngle, this._limitAngle, false);
        self._canvas.lineTo(this._x, this._y);
        self._canvas.fill('evenodd');
        self._canvas.strokeStyle = '#fff';
        self._canvas.stroke();
        self._canvas.beginPath();
        self._canvas.save();
        self._canvas.translate(this._x, this._y);
        self._canvas.restore();
    };
    Pie.prototype.__pointInCircleSQRT = function (x, y, cx, cy, radius) {
        const distSq = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        return distSq <= radius;
    };
    Pie.prototype.__mouseEnterArea = function (realAngle, _index, _hint, _constructor, type, _condition, _legendsDisplay) {
        if (_constructor._prevId !== 'arc_' + _index) {
            _constructor._prevColor = _constructor[_hint][+('arc_' + _index).split('_')[1]]._color;
            if (self['_onHover_' + type]) {
                _constructor[_hint][+('arc_' + _index).split('_')[1]]._color = _constructor[_hint][+('arc_' + _index).split('_')[1]]._hoverColor;
                _constructor[_hint][+('arc_' + _index).split('_')[1]].__draw();
                if (_constructor._prevId) {
                    _constructor[_hint][+_constructor._prevId.split('_')[1]]._color = _constructor[_hint][+_constructor._prevId.split('_')[1]]._leaveColor;
                    _constructor[_hint][+_constructor._prevId.split('_')[1]].__draw();
                }
            }

            const MesureText = (arr, _index, type) => {
                if (type === 'integer') {
                    let text = _constructor._divider ? Math.round(arr[_index] / _constructor._divider) + ' ' + _constructor._dividerText : arr[_index];
                    return {
                        text: text,
                        width : self._canvas.measureText(text).width > (2 * _constructor._radius) - 40
                        ? (2 * _constructor._radius) - 40 : self._canvas.measureText(text).width
                    }
                } else {
                    return {
                        text: arr[_index],
                        width: self._canvas.measureText(arr[_index]).width > (2 * _constructor._radius) - 40
                            ? (2 * _constructor._radius) - 40 : self._canvas.measureText(arr[_index]).width + 30
                    }
                }
            };
            //Rendering if tooltip is true
            if (self['_tooltip_' + type]) {
                let _angle = (_constructor._betweenAngles[_index][0] + _constructor._betweenAngles[_index][1]) / 2;
                self._canvas.font = '11px Arial';
                self._canvas.textAlign = 'left';
                const tooltipX = _constructor._cx + Math.cos(_angle) * _constructor[_hint][_index]._radius / 2 - MesureText(_constructor._labels, _index, 'string').width / 2;
                const tooltipY = _constructor._cy + Math.sin(_angle) * _constructor[_hint][_index]._radius / 2 - 10;
                self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
                type === 'polar' && _constructor.__drawNet();
                _constructor[_hint].map(_class => {
                    _class.__draw()
                });
                self._canvas.save();
                _constructor[_hint][+('arc_' + _index).split('_')[1]].__tooltip(
                    tooltipX,
                    tooltipY,
                    MesureText(_constructor._labels, _index, 'string').width,
                    MesureText(_constructor._values, _index, 'integer').width,
                    MesureText(_constructor._labels, _index, 'string').text,
                    MesureText(_constructor._values, _index, 'integer').text,
                    _constructor._prevColor
                );
                self._canvas.restore();
                _legendsDisplay.display && this.__generateLabelsAfterClearing(this, _condition);
            }
            //_____________
        }
        _constructor._prevId = 'arc_' + _index;
    };
    Pie.prototype.__mouseLeaveArea = function (_constructor, _hint, _condition, type, _legendsDisplay) {
        canvas.style.cursor = 'default';
        if (_constructor._prevId) {
            self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
            type === 'polar' && _constructor.__drawNet();
            _constructor[_hint][+_constructor._prevId.split('_')[1]]._color = _constructor._prevColor;
            _constructor[_hint].map(_class => {
                _class.__draw()
            });
            _legendsDisplay.display && this.__generateLabelsAfterClearing(this, _condition);
        }
        _constructor._prevId = null
    };
    Pie.prototype.__generateLabelsAfterClearing = function (_constructor, _condition) {
        _constructor._legendSize = 13;
        if (_condition === 'top') {
            this.__drawLegendsByPositionVertical(_constructor,'top');
        } else if (_condition === 'bottom') {
            this.__drawLegendsByPositionVertical(_constructor,'bottom');
        } else if (_condition === 'right') {
            this.__drawLegendsByPositionHorizontal(_constructor,'right');
        } else if (_condition === 'left') {
            this.__drawLegendsByPositionHorizontal(_constructor, 'left');
        }
    };
    Pie.prototype. __drawLegendsByPositionVertical = function (_constructor, position) {
        _constructor._labelsPosition = [];
        let _topCY = 0;
        _constructor._cx = self._widthCanvas / 2;
        self._canvas.font = this._legendSize + 'px Arial';
        let _levels = [[]];
        let _levelsCount = 0;
        let _mainRowWidth = [0];
        _constructor._labels.map((item, index) => {
            let _x = index === 0 ? 15 : 25;
            if (_constructor._labels[index + 1] && _mainRowWidth[_levelsCount] + self._canvas.measureText(_constructor._labels[index + 1]).width + _x > 2 * _constructor._radius) {
                _levelsCount++;
                _mainRowWidth[_levelsCount] = 0;
                _levels[_levelsCount] = [];
                _x = 15;
            }
            _mainRowWidth[_levelsCount]+=self._canvas.measureText(_constructor._labels[index]).width + _x;
            _levels[_levelsCount].push(item);
        });
        let _fakeIndex = -1;
        _levels.forEach((items, index) => {
            items.map((text, ind) => {
                _fakeIndex++;
                let _everyX = 0;
                for (let i = 0; i <= ind; i++) {
                    let _x = i === 0 ? 15 : 25;
                    _everyX+=self._canvas.measureText(items[i]).width + _x;
                }
                const [_x, _y] = [_constructor._cx - (_mainRowWidth[index] / 2 - (_everyX - self._canvas.measureText(text).width)),
                    (25 * (index + 1) + _constructor._legendSize) +
                    ((position === 'bottom') ? 2 * _constructor._radius + _constructor._legendSize : 0)];
                self._canvas.beginPath();
                self._canvas.lineWidth = 2;
                self._canvas.rect(_x - 15, _y - 10, 10, 10);
                self._canvas.fillStyle = _constructor._colors[_fakeIndex];
                self._canvas.globalAlpha = 1;
                self._canvas.fill();
                self._canvas.closePath();

                self._canvas.fillStyle = '#000';
                _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: self._canvas.measureText(text).width + 15});
                self._canvas.fillText(text, _x, _y);
            })
            if (position === 'top') _topCY = 25 * (index + 1) + _constructor._legendSize + 20/* just paddingTop 20px */
            else _topCY = 20/* just paddingTop 20px */
        });
        this._cy = _topCY + this._radius;
    };
    Pie.prototype.__drawLegendsByPositionHorizontal = function (_constructor, position) {
        _constructor._labelsPosition = [];
        _constructor._cy = self._heightCanvas / 2;
        self._canvas.font = _constructor._legendSize + 'px Arial';
        let _mainLabelsHeight = 0;
        let _widthTexts = [];
        let _cx = null;
        _constructor._labels.map(_ => {
            _mainLabelsHeight+=_constructor._legendSize + 10;
            _widthTexts.push(self._canvas.measureText(_).width + 15)
        });
        if (position === 'right') {
            _cx = self._widthCanvas / 2 - (25 + Math.max(..._widthTexts) / 2)
        } else if (position === 'left') {
            _cx = self._widthCanvas / 2 + (25 + Math.max(..._widthTexts) / 2)
        }
        const _beginY = self._heightCanvas / 2 - _mainLabelsHeight / 2;
        _constructor._labels.map((item, index) => {
            const [_x, _y] = [
                position === 'left' ? (_cx - (_constructor._radius + Math.max(..._widthTexts) + 30)) : _cx + (_constructor._radius + 60/* + 15 for square width */),
                _beginY + (index + 1) * (_constructor._legendSize + 10)];
            self._canvas.beginPath();
            self._canvas.lineWidth = 2;
            self._canvas.rect(_x - 15, _y - 10, 10, 10);
            self._canvas.fillStyle = _constructor._colors[index];
            self._canvas.globalAlpha = 1;
            self._canvas.fill();
            self._canvas.closePath();
            _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: self._canvas.measureText(item).width + 15});
            self._canvas.fillStyle = '#000';
            self._canvas.fillText(item, _x, _y);
        });
        _constructor._cx = _cx;
    };
    Pie.prototype.__init = async function () {
        this._pieParts = [];
        this._betweenAngles = [];
        this._labelsPosition = [];
        this._colors = [];
        self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
        await setTimeout(() => {
            this._labels.map(_j => this._colors.push(self._result.__getRandomColor()));
            (() => {
                if (self._legends_pie.display) {
                    this.__generateLabelsAfterClearing(this, self._legends_position_pie);
                } else {
                    this._cx = self._widthCanvas / 2;
                    this._cy = self._heightCanvas / 2;
                }
            })();
            this._values.forEach((_, index)=> {
                this.__generatePieAngles(index);
                this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]])
                this._pieParts.push(new SinglePies(
                    this._cx, this._cy,
                    (this._angles.end[index] - this._angles.begin[index]) / 30,
                    this._angles.begin[index],
                    this._angles.end[index],
                    this._radius,
                    this._colors[index % this._colors.length],
                    index,
                    self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/)
                ));
                this._pieParts[index].__update()
            });
        }, 0);
        await canvas.addEventListener('mousemove', (event) => {
            const diffX = event.pageX - this._cx;
            const diffY = event.pageY - this._cy;
            let angle = Math.atan2(diffY, diffX);
            let _allowAreaForHover = false;
            let realAngle = angle;
            if (angle < 0) {
                realAngle = (Math.PI - Math.abs(angle)) + Math.PI
            }
            if (self._legends_pie.display) {
                for (let i = 0; i < this._labelsPosition.length; i++) {
                    if (event.pageX >= this._labelsPosition[i].left && event.pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                        event.pageY >= this._labelsPosition[i].top && event.pageY <= this._labelsPosition[i].top + 13
                    ) {
                        _allowAreaForHover = true;
                        canvas.style.cursor = 'pointer';
                        this.__mouseEnterArea(realAngle, i, '_pieParts', this, 'pie', self._legends_position_pie, self._legends_pie);
                    }
                }
            }
            if (this.__pointInCircleSQRT(event.pageX, event.pageY, this._cx, this._cy, this._radius)){
                this._betweenAngles.map((_angles, _index) => {
                    if (realAngle >= _angles[0] && realAngle <= _angles[1]) {
                        _allowAreaForHover = true;
                        canvas.style.cursor = 'pointer';
                        this.__mouseEnterArea(realAngle, _index, '_pieParts', this, 'pie', self._legends_position_pie, self._legends_pie);
                    }
                })
            } else if (self._onHover_pie || this._prevId) {
                !_allowAreaForHover && this.__mouseLeaveArea(this, '_pieParts', self._legends_position_pie, 'pie', self._legends_pie);
            }
        });
    };

    /***************Pie End******************/

    /*************** Polar Chart **********/
    function Polar () {
        this._gui            = new dat.GUI();
        this._values         = [];
        this._radius         = 150;
        this._colors         = [];
        this._angles         = {
            begin:[],
            end:[]
        };
        this._betweenAngles  = [];
        this._countPolars    = -1;
        this._totalValues    = 0;
        this._labels         = [];
        this._legendSize     = null;
        this._cx             = this._radius;
        this._cy             = this._radius;
        _dataChart[_legendInfo.info2].map(_ => {
            this._labels.push(_.text);
            this._values.push(_.value);
            this._totalValues += _.value
        });
        [this._divider, this._dividerText] = self.constructor.__valuesIntegration(this._values);
        this._polarParts     = [];
        this._labelsPosition = [];
        this._prevId         = null;
        this._prevColor      = null;

        const _polarFolder   = this._gui.addFolder('Polar');
        _polarFolder.add(self, '_lineWidth_polar', 0.1, 3).name('Space of Polars')
            .onChange(() => {
                this._polarParts.map(_class => {
                    _class.__draw()
                })
            });
        const _legends = _polarFolder.addFolder('Legends');
        _legends.add(self._legends_polar, 'display').name('Display')
            .onChange((e) => {
                _legendsPosition.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
                this.__initP()
            });
        let fakePosition = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
        fakePosition[self._legends_position_polar] = true;
        const _legendsPosition = _legends.addFolder('Position');
        _legendsPosition.add(fakePosition, 'top').name('Top').listen()
            .onChange((e) => {
                setChecked("top");
                if (e) {
                    self._legends_position_polar = 'top';
                    this.__initP()
                }
            });
        _legendsPosition.add(fakePosition, 'left').name('Left').listen()
            .onChange((e) => {
                setChecked("left");
                if (e) {
                    self._legends_position_polar = 'left';
                    this.__initP()
                }
            });
        _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
            .onChange((e) => {
                setChecked("bottom");
                if (e) {
                    self._legends_position_polar = 'bottom';
                    this.__initP()
                }
            });
        _legendsPosition.add(fakePosition, 'right').name('Right').listen()
            .onChange((e) => {
                setChecked("right");
                if (e) {
                    self._legends_position_polar = 'right';
                    this.__initP()
                }
            });
        function setChecked( prop ){
            for (let param in fakePosition){
                fakePosition[param] = false;
            }
            fakePosition[prop] = true;
        }
        _polarFolder.add(self, '_onHover_polar').name('Hover Polar')
            .onChange(() => {
                this._polarParts.map(_class => {
                    _class.__draw()
                })
            });
        _polarFolder.add(self, '_tooltip_polar').name('Hover Tooltip')
            .onChange(() => {
                this._polarParts.map(_class => {
                    _class.__draw()
                })
            });
        _polarFolder.open();
    }
    function SinglePolars (movingX, movingY, startAngle, endAngle, radius, color, index, hoverColor, value) {
        this._movingX    = movingX;
        this._movingY    = movingY;
        this._color      = color;
        this._leaveColor = color;
        this._hoverColor = hoverColor;
        this._startAngle = startAngle;
        this._endAngle   = endAngle;
        this._radius     = 0;
        this._index      = index;
        this._value      = value;
    }
    SinglePolars.prototype.__draw = function () {
        self._canvas.fillStyle = this._color;
        self._canvas.lineWidth = self._lineWidth_polar;
        self._canvas.beginPath();
        self._canvas.moveTo(this._movingX, this._movingY);
        self._canvas.arc(this._movingX, this._movingY, this._radius, this._startAngle, this._endAngle, false);
        self._canvas.lineTo(this._movingX, this._movingY);
        self._canvas.fill();
        self._canvas.strokeStyle = '#fff';
        self._canvas.stroke();
        self._canvas.beginPath();
        self._canvas.save();
        self._canvas.translate(this._movingX, this._movingY);
        self._canvas.restore();
    };
    SinglePolars.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
        self._canvas.beginPath();
        self._canvas.rect(x, y, widthText +  widthValue, 18);
        self._canvas.fillStyle = 'rgb(0,0,0)';
        self._canvas.globalAlpha = .8
        self._canvas.fill();
        self._canvas.strokeStyle = '#fff';
        self._canvas.fillStyle = '#fff';
        self._canvas.fillText(self._result.__fittingString(self._canvas, text + ' ' + values, widthText + widthValue), x + 20, y + 12);
        self._canvas.clearColor;
        self._canvas.stroke();
        self._canvas.closePath();

        self._canvas.beginPath();
        self._canvas.lineWidth = 2;
        self._canvas.rect(x + 5, y + 4, 10, 10);
        self._canvas.fillStyle = quadroFill;
        self._canvas.globalAlpha = 1;
        self._canvas.fill();
        self._canvas.closePath();
    };
    SinglePolars.prototype.__update = function (_constructor) {
        const _maxPoint = (self._result.polar._radius * (_constructor._value * 100) / Math.max(...self._result.polar._values)) / 100;
        const $interval = window.setInterval(() => {
            if (this._radius + 2 >= _maxPoint) {
                this._radius = _maxPoint;
                this.__draw();
                window.clearInterval($interval);
            } else {
                this._radius+=2;
                this.__draw()
            }
        }, 10);
    };
    Polar.prototype.__polarAngles = function (count) {
        this._angles.begin.push(count * (Math.PI * 2) / this._values.length);
        this._angles.end.push((count * (Math.PI * 2) / this._values.length) + (Math.PI * 2) / this._values.length);
    };
    Polar.prototype.__animate = function () {
        this._countPolars++;
        this._polarParts[this._countPolars].__update(this._polarParts[this._countPolars]);
    };
    Polar.prototype.__drawNet = function () {
        for (let i = 0; i < 8; i++) {
            self._canvas.lineWidth = 1;
            self._canvas.beginPath();
            self._canvas.arc(this._cx, this._cy, this._radius - (i * (this._radius / 7)), 0, 2 * Math.PI, false);
            self._canvas.strokeStyle = self._colorAxis_polar;
            self._canvas.stroke();
            self._canvas.beginPath();
        }
    };
    Polar.prototype.__initP = async function () {
        this._polarParts = [];
        this._betweenAngles = [];
        this._labelsPosition = [];
        this._colors = [];
        this._countPolars = -1;
        self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
        await setTimeout(() => {
            this._labels.map(_j => this._colors.push(self._result.__getRandomColor()));
            (() => {
                if (self._legends_polar.display) {
                    this.__generateLabelsAfterClearing(this, self._legends_position_polar);
                } else {
                    this._cx = self._widthCanvas / 2;
                    this._cy = self._heightCanvas / 2;
                }
            })();
            this.__drawNet();
            this._values.forEach((_value, index)=> {
                // Becomes from Pie Prototype ~~~~
                this.__polarAngles(index);
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~
                this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]]);
                this._polarParts.push(new SinglePolars(
                    this._cx, this._cy,
                    this._angles.begin[index],
                    this._angles.end[index],
                    this._radius,
                    this._colors[index % this._colors.length],
                    index,
                    self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/),
                    _value
                ));
            });
            const $syncInterval = setInterval(() => {
                if (this._countPolars < this._polarParts.length - 1) {
                    this.__animate();
                } else {
                    clearInterval($syncInterval);
                    setTimeout(() => {
                        this._polarParts.map(_class => {
                            _class.__draw()
                        })
                    }, 500)
                }
            }, 200)
        }, 0);
        await canvas.addEventListener('mousemove', (event) => {
            const diffX = event.pageX - this._cx;
            const diffY = event.pageY - this._cy;
            let angle = Math.atan2(diffY, diffX);
            let _allowAreaForHover = false;
            let realAngle = angle;
            if (angle < 0) {
                realAngle = (Math.PI - Math.abs(angle)) + Math.PI
            }
            if (self._legends_polar.display) {
                for (let i = 0; i < this._labelsPosition.length; i++) {
                    if (event.pageX >= this._labelsPosition[i].left && event.pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                        event.pageY >= this._labelsPosition[i].top && event.pageY <= this._labelsPosition[i].top + 13
                    ) {
                        _allowAreaForHover = true;
                        canvas.style.cursor = 'pointer';
                        this.__mouseEnterArea(realAngle, i, '_polarParts', this, 'polar', self._legends_position_polar, self._legends_polar);
                    }
                }
            }
            if (this.__pointInCircleSQRT(event.pageX, event.pageY, this._cx, this._cy, this._radius)){
                for (let _index = 0; _index < this._betweenAngles.length; _index++) {
                    if (realAngle >= this._betweenAngles[_index][0] && realAngle <= this._betweenAngles[_index][1] &&
                        this.__pointInCircleSQRT(event.pageX, event.pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                        _allowAreaForHover = true;
                        canvas.style.cursor = 'pointer';
                        this.__mouseEnterArea(realAngle, _index, '_polarParts', this, 'polar', self._legends_position_polar, self._legends_polar);
                        break;
                    } else if ((self._onHover_polar || this._prevId) &&
                        !this.__pointInCircleSQRT(event.pageX, event.pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                        !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', self._legends_position_polar, 'polar', self._legends_polar);
                    }
                }
            } else if (self._onHover_polar || this._prevId) {
                !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', self._legends_position_polar, 'polar', self._legends_polar);
            }
        })
    };
    /****************Polar End ***********/

    /*************** Line Chart **********/
    function Line (options) {
        this._gui             = new dat.GUI();
        const lineFolder      = this._gui.addFolder('Line');
        this._configuration   = options;
        self._borderColorLine = [175, 160, 160];
    };
    Line.prototype.__setCoordinatesNet = function (_displayY) {
        let [_maxValue] = [
            self._result.__max_min_values(this._configuration.data.datasets.data).max,
            1
        ];
        let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
        if (self._labelsYLine.display) {
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
        let nextVal = maxCeil;
        for (let i = 1; i < 10; i++) {
            self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
            self._canvas.beginPath();
            self._canvas.moveTo(self._paddingYLeftLine - 5, i * (self._heightCanvas - self._paddingXBottomLine - self._paddingXTopLine) / 10 + self._paddingXTopLine)
            self._canvas.lineTo(self._widthCanvas - self._paddingYRightLine, i * (self._heightCanvas - self._paddingXBottomLine - self._paddingXTopLine) / 10 + self._paddingXTopLine)
            self._canvas.lineWidth = self._lineXWidthLine;
            if (self._borderColorLine instanceof Array) {
                self._canvas.strokeStyle = `rgba(${self._borderColorLine[0]}, ${self._borderColorLine[1]}, ${self._borderColorLine[2]}, ${self._borderOpacityLine})`
            } else {
                self._canvas.strokeStyle = self._borderColorLine
            }
            self._canvas.stroke();
            self._canvas.resetTransform();
            self._canvas.closePath();
            if (_displayY) {
                nextVal -= maxCeil/10;
                self._canvas.font = self._labelsYLine.fontSize + 'px Arial';
                self._canvas.textAlign = "right";
                self._canvas.fillStyle = self._labelsYLine.color;
                self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), self._paddingYLeftLine - 7, i * (self._heightCanvas - self._paddingXBottomLine - self._paddingXTopLine) / 10 + self._paddingXTopLine + self._labelsYLine.fontSize / 3)
                self._canvas.clearColor;
            }
        }
        for (let i = 1; i < this._configuration.data.labels.length; i++) {
            self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
            self._canvas.beginPath();
            self._canvas.moveTo(self._paddingYLeftLine + i * (self._widthCanvas - self._paddingYRightLine - self._paddingYLeftLine) / this._configuration.data.labels.length, self._paddingXTopLine)
            self._canvas.lineTo(self._paddingYLeftLine + i * (self._widthCanvas - self._paddingYRightLine - self._paddingYLeftLine) / this._configuration.data.labels.length, self._heightCanvas - self._paddingXBottomLine)
            self._canvas.lineWidth = self._lineXWidthLine;
            if (self._borderColorLine instanceof Array) {
                self._canvas.strokeStyle = `rgba(${self._borderColorLine[0]}, ${self._borderColorLine[1]}, ${self._borderColorLine[2]}, ${self._borderOpacityLine})`
            } else {
                self._canvas.strokeStyle = self._borderColorLine
            }
            self._canvas.stroke();
            self._canvas.resetTransform();
            self._canvas.closePath();
        }
    };
    Line.prototype.__setAxisYLine = function (_displayX) {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        let _heightAxis = null;
        if (self._labelsXLine.hasOwnProperty('fontSize') && _displayX) {
            _heightAxis = self._labelsXLine.fontSize * 2;
            self._paddingXBottomLine = _heightAxis
        } else _heightAxis = self._paddingXBottomLine;
        self._lineXWidthLine && (
            self._canvas.moveTo(self._paddingYLeftLine, self._heightCanvas - _heightAxis),
                self._canvas.lineTo(self._paddingYLeftLine, self._paddingXTopLine),
                self._canvas.lineWidth = self._lineYWidthLine
        );
        if (self._axisOpacityLine !== 1) {
            self._canvas.strokeStyle = self._axisColorLine.replace(')', ', ' + self._axisOpacityLine + ')').replace('rgb', 'rgba')
        } else {
            self._canvas.strokeStyle = self._axisColorLine
        }
        self._canvas.stroke();
        self._canvas.closePath();
        self._canvas.resetTransform()
    };
    Line.prototype.__setAxisXLine = function (_display) {
        self._canvas.beginPath();
        self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        self._paddingXBottomLine = self._labelsXLine.display ? self._paddingXBottomLine: 10;
        let _heightAxis = null;
        if (self._labelsXLine.hasOwnProperty('fontSize') && _display) {
            _heightAxis = self._labelsXLine.fontSize * 2;
            self._paddingXBottomLine = _heightAxis
        } else _heightAxis = self._paddingXBottomLine;
        self._lineXWidthLine && (
            self._canvas.moveTo(self._paddingYLeftLine, self._heightCanvas - _heightAxis),
                self._canvas.lineTo(self._widthCanvas - self._paddingYRightLine, self._heightCanvas - _heightAxis),
                self._canvas.lineWidth = self._lineYWidthLine
        );
        if (self._axisOpacityLine !== 1) {
            self._canvas.strokeStyle = self._axisColorLine.replace(')', ', ' + self._axisOpacityLine + ')').replace('rgb', 'rgba')
        } else {
            self._canvas.strokeStyle = self._axisColorLine
        }
        self._canvas.stroke();
        self._canvas.closePath();
        self._canvas.resetTransform()
    };
    Line.prototype.__beforeChanging = function () {
        if (self._legendLine) {
            self._paddingXTopLine = 30
        } else {
            self._paddingXTopLine = 10
        }

        let [_maxValue] = [
            self._result.__max_min_values(this._configuration.data.datasets.data).max
        ];
        // For Getting current Left Padding
        if (self._labelsYLine.display) {
            self._canvas.font = self._labelsYLine.fontSize + 'px Arial';
            if (_maxValue.toString().split('').length > 9) {
                self._paddingYLeftLine = self._canvas.measureText('0000').width + 10
            } else {
                self._paddingYLeftLine = self._canvas.measureText('000').width + 10
            }
        } else {
            self._paddingYLeftLine = 10
        }
        //_____________________
    };
    Line.prototype.__setAxisX = function (_display) {
        this.__setAxisXLine(_display);
        if (_display) {
            self._canvas.font = self._labelsXLine.fontSize + 'px Arial';
            let _heightAxis = null;
            if (self._labelsXLine.hasOwnProperty('fontSize')) {
                _heightAxis = self._labelsXLine.fontSize * 2;
                self._paddingXBottomLine = _heightAxis
            } else _heightAxis = self._paddingXBottomLine
            let _canvasBadgeWidth = (self._widthCanvas - (self._paddingYLeftLine + self._paddingYRightLine)) / this._configuration.data.labels.length;
            this._configuration.data.labels.forEach((_, index) => {
                self._canvas.textAlign = "center";
                self._canvas.fillStyle = self._labelsXLine.color;
                self._canvas.fillText(self._result.__fittingString(self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + self._paddingYLeftLine) + (_canvasBadgeWidth/2), self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
                self._canvas.clearColor;
            })
        }
    };
    Line.prototype.__setAxisY = function (_displayX, _displayY) {
        this.__setAxisYLine(_displayX);
        if (_displayY) {
            self._canvas.font = self._labelsYLine.fontSize + 'px Arial';
            self._canvas.textAlign = "right";
            self._canvas.fillStyle = self._labelsYLine.color;
            self._canvas.fillText('0', self._paddingYLeftLine - 7, self._heightCanvas - self._paddingXBottomLine);
            self._canvas.clearColor;
        }
    };
    Line.prototype.__draw = function () {
        this.__beforeChanging();
        this.__setAxisX(self._labelsXLine.display);
        this.__setAxisY(self._labelsXLine.display, self._labelsYLine.display);
        this.__setCoordinatesNet(self._labelsYLine.display);
    };
    Line.prototype.__update = function () {
        self.constructor.__maxValueInit(this._configuration);
        this.__draw()
    };
    Line.prototype.__initL = async function () {
        setTimeout(() => {
            this.__update()
        })
    };
    /***************Line Chart End *******/

    /******************HELPERS***********/
    this.constructor.__valuesIntegration = function(_values) {
        const [min, max] = [Math.min(..._values), Math.max(..._values)];
        if (max > 1000000) {
            return [1000000, 'M'];
        } else if (max > 10000 && max < 1000000) {
            return [1000, 'K'];
        } else {
            return [null, null]
        }
    };
    Result.prototype.__convertHex = function (hex,opacity){
        let hexCode = hex.replace('#',''),
        r = parseInt(hexCode.substring(0,2), 16),
        g = parseInt(hexCode.substring(2,4), 16),
        b = parseInt(hexCode.substring(4,6), 16);
        const result = 'rgba('+r+','+g+','+b+','+opacity+')';
        return result;
    };
    Result.prototype.__getRandomColor = function () {
        return '#'+Math.random().toString(16).substr(2,6);
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
    };
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
        if (options.type === 'bar' || options.type === 'line') {
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
                nesting: ['options', 'padding', 'paddingRight'],
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
        } else if (options.type === 'pie' || options.type === 'polar') {
            [{
                nesting: ['data', 'datasets', 'legends', 'display'],
                value: true,
                emptyProperty: true
            }, {
                nesting: ['data', 'datasets', 'legends', 'position'],
                value: 'top',
                emptyProperty: 'top'
            }, {
                nesting: ['options', 'onHover', 'tooltip'],
                value: true,
                emptyProperty: true
            }, {
                nesting: ['options', 'onHover', 'event'],
                value: true,
                emptyProperty: true
            }, {
                nesting: ['options', 'lineWidth'],
                value: 3,
                emptyProperty: 0.1
            }, {
                nesting: ['options', 'axisColor'],
                value: '#ccc',
                emptyProperty: '#ccc'
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
        self._lineWidth_pie           = parameters.options.lineWidth || 0.1;
        self._onHover_pie             = parameters.options.onHover && parameters.options.onHover.event;
        self._tooltip_pie             = parameters.options.onHover && parameters.options.onHover.tooltip;
        self._legends_pie             = parameters.data.datasets.legends;
        self._legends_position_pie    = parameters.data.datasets.legends && parameters.data.datasets.legends.position;
        //~~~~~~~~~~~~~~~~~~~~~~

        // For Polar Chart ~~~~~~~~~~~~~~~~~
        self._colorAxis_polar         = parameters.options.axisColor || '#ccc';
        self._lineWidth_polar         = parameters.options.lineWidth || 0.1;
        self._onHover_polar           = parameters.options.onHover && parameters.options.onHover.event;
        self._tooltip_polar           = parameters.options.onHover && parameters.options.onHover.tooltip;
        self._legends_polar           = parameters.data.datasets.legends;
        self._legends_position_polar  = parameters.data.datasets.legends && parameters.data.datasets.legends.position;
        // ~~~~~~~~~~~~~~~~~~~~~

        // For Line Chart ~~~~~~~~~~~~~~~~~~~~~~~
        self._pointTooltip            = (parameters.options.points && parameters.options.points.mouseMove && parameters.options.points.mouseMove.hasOwnProperty('tooltip')) ? parameters.options.points.mouseMove.tooltip : true;
        self._legendLine              = parameters.options.legend;
        self._paddingYLeftLine        = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
        self._paddingXBottomLine      = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
        self._paddingYRightLine       = parameters.options.padding && parameters.options.padding.paddingRight || 10;
        self._paddingXTopLine         = parameters.options.padding && parameters.options.padding.paddingTop || 10;
        self._lineYWidthLine          = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
        self._lineXWidthLine          = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
        self._borderColorLIne         = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || '#000';
        self._axisColorLine           = parameters.options.scales && parameters.options.scales.axisColor || 'rgb(85,72,72)';
        self._axisOpacityLine         = 1;
        self._borderOpacityLine       = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
        self._labelsXLine             = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
        self._labelsYLine             = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
        self._paddingXBottomLine      = self._labelsXLine.display ? self._paddingXBottomLine: 10;
        self._paddingYLeftLine        = self._labelsYLine.display ? self._paddingYLeftLine + (50 - self._paddingYLeftLine): 10;
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        self._result = new Result(selector, parameters);

        return self._result[parameters.type]
    };
    return new Result(selector)
}

// For Line Chart
new ChartArt(canvas).__init({
    type: 'line',
    data: {
        labels: _dataChart[_legendInfo.info2].map(_ => _.text),
        datasets: {
            data: _dataChart[_legendInfo.info2]
        }
    },
    options: {
        legend: true,
        points: {
            mouseMove: {
                tooltip: true,
                set callback (element) {}
            },
        },
        padding: {
            paddingLeft: 70,
            paddingRight: 30,
            paddingBottom: 10
        },
        scales: {
            axisColor: 'rgb(85,72,72)',
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
});

// For Polar Chart
// new ChartArt(canvas).__init({
//     type: 'polar',
//     data: {
//         labels: _dataChart[_legendInfo.info2].map(_ => _.text),
//         datasets: {
//             legends: {
//                 display: true,
//                 position: 'bottom'
//             },
//             data: _dataChart[_legendInfo.info2],
//         }
//     },
//     options: {
//         axisColor: '#ccc',
//         lineWidth: 1,
//         onHover: {
//             event: true,
//             tooltip: true
//         }
//     }
// });


// For Pie Chart
// new ChartArt(canvas).__init({
//     type: 'pie',
//     data: {
//         labels: _dataChart[_legendInfo.info2].map(_ => _.text),
//         datasets: {
//             legends: {
//                 display: true,
//                 position: 'bottom'
//             },
//             data: _dataChart[_legendInfo.info2],
//         }
//     },
//     options: {
//         lineWidth: 1,
//         onHover: {
//             event: true,
//             tooltip: true
//         }
//     }
// });

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
//             paddingLeft: 70,
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