import * as dat from "dat.gui";

export function Bar (options, canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
    this._barsPositions  = {};
    this._gui            = new dat.GUI({resizable : false});
    const barFolder      = this._gui.addFolder('Bar');
    this._configuration  = options;
    this.animateBars     = false;
    this._self._borderColor    = [175, 160, 160];

    barFolder.addColor(this._self, '_borderColor').name('Border Color')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.add(this._self, '_borderOpacity', 0, 1).name('Border Opacity')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.addColor(this._self, '_axisColor').name('Axis Color')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.add(this._self, '_axisOpacity', 0, 1).name('Axis Opacity')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    const _bars = barFolder.addFolder('Bars');
    _bars.add(this._self._bars, 'width', 20, 60).name('Width')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.add(this._self, '_barTooltip').name(`Bar's Tooltip`)
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    // Bars Colors ______________
    _bars.addColor(this._self._barsColors, 'one').name('One')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.addColor(this._self._barsColors, 'two').name('Two')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.addColor(this._self._barsColors, 'three').name('Three')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    //_________________

    // Sub Folders
    const xAxis = barFolder.addFolder('XAxis')
    xAxis.add(this._self._labelsX, 'display').name('Display')
        .onChange((e) => {
            xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            requestAnimationFrame(this.__animate.bind(this))
        })
    const xAxisFontSize = xAxis.add(this._self._labelsX, 'fontSize', 10, 26).name('Font Size');
    xAxisFontSize.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsX.display ? 'auto' : 'none'}; opacity: ${this._self._labelsX.display ? 1 : 0.5}`);
    const xAxisColor = xAxis.addColor(this._self._labelsX, 'color').name('Color');
    xAxisColor.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsX.display ? 'auto' : 'none'}; opacity: ${this._self._labelsX.display ? 1 : 0.5}`);

    const yAxis = barFolder.addFolder('YAxis')
    yAxis.add(this._self._labelsY, 'display')
        .onChange((e) => {
            yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            requestAnimationFrame(this.__animate.bind(this))
        })
    const yAxisFontSize = yAxis.add(this._self._labelsY, 'fontSize', 10, 26).name('Font Size');
    yAxisFontSize.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsY.display ? 'auto' : 'none'}; opacity: ${this._self._labelsY.display ? 1 : 0.5}`);
    const yAxisColor = yAxis.addColor(this._self._labelsY, 'color').name('Color');
    yAxisColor.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsY.display ? 'auto' : 'none'}; opacity: ${this._self._labelsY.display ? 1 : 0.5}`);
}
Bar.prototype.__setAxisYLine = function (_displayX) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    let _heightAxis = null;
    if (this._self._labelsX.hasOwnProperty('fontSize') && _displayX) {
        _heightAxis = this._self._labelsX.fontSize * 2;
        this._self._paddingXBottom = _heightAxis
    } else _heightAxis = this._self._paddingXBottom;
    this._self._lineXWidth && (
        this._self._canvas.moveTo(this._self._paddingYLeft, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._paddingYLeft, this._self._paddingXTop),
            this._self._canvas.lineWidth = this._self._lineYWidth
    );
    if (this._self._axisOpacity !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColor.replace(')', ', ' + this._self._axisOpacity + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColor
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Bar.prototype.__setAxisXLine = function (_display) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    this._self._paddingXBottom = this._self._labelsX.display ? this._self._paddingXBottom: 10;
    let _heightAxis = null;
    if (this._self._labelsX.hasOwnProperty('fontSize') && _display) {
        _heightAxis = this._self._labelsX.fontSize * 2;
        this._self._paddingXBottom = _heightAxis
    } else _heightAxis = this._self._paddingXBottom;
    this._self._lineXWidth && (
        this._self._canvas.moveTo(this._self._paddingYLeft, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRight, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineWidth = this._self._lineYWidth
    );
    if (this._self._axisOpacity !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColor.replace(')', ', ' + this._self._axisOpacity + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColor
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Bar.prototype.__setAxisY = function (_displayX, _displayY) {
    this.__setAxisYLine(_displayX)
    if (_displayY) {
        this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
        this._self._canvas.textAlign = "right";
        this._self._canvas.fillStyle = this._self._labelsY.color;
        this._self._canvas.fillText('0', this._self._paddingYLeft - 7, this._self._heightCanvas - this._self._paddingXBottom);
        this._self._canvas.clearColor;
    }
};
Bar.prototype.__setCoordinatesNet = function (_displayY) {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max,
        1
    ];
    let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
    if (this._self._labelsY.display) {
        if (_maxValue > 999999999999 || _maxValue === Infinity) {
            maxCeil *= 10000;
            this._legendInfo.info1 = 'x10000000'
        } else if (_maxValue > 999999999) {
            maxCeil *= 1000;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 9999999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 999999) {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 9999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 999) {
            maxCeil *= 1000;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 99) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1'
        } else if (_maxValue > 9) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1'
        } else {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1'
        }
    }
    let nextVal = maxCeil;
    for (let i = 1; i < 10; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeft - 5, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop)
        this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRight, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop)
        this._self._canvas.lineWidth = this._self._lineXWidth;
        if (this._self._borderColor instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColor[0]}, ${this._self._borderColor[1]}, ${this._self._borderColor[2]}, ${this._self._borderOpacity})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColor
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
        if (_displayY) {
            nextVal -= maxCeil/10;
            this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
            this._self._canvas.textAlign = "right";
            this._self._canvas.fillStyle = this._self._labelsY.color;
            this._self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), this._self._paddingYLeft - 7, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop + this._self._labelsY.fontSize / 3)
            this._self._canvas.clearColor;
        }
    }
    for (let i = 1; i < this._configuration.data.labels.length; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeft + i * (this._self._widthCanvas - this._self._paddingYRight - this._self._paddingYLeft) / this._configuration.data.labels.length, this._self._paddingXTop)
        this._self._canvas.lineTo(this._self._paddingYLeft + i * (this._self._widthCanvas - this._self._paddingYRight - this._self._paddingYLeft) / this._configuration.data.labels.length, this._self._heightCanvas - this._self._paddingXBottom)
        this._self._canvas.lineWidth = this._self._lineXWidth;
        if (this._self._borderColor instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColor[0]}, ${this._self._borderColor[1]}, ${this._self._borderColor[2]}, ${this._self._borderOpacity})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColor
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
    }
};
Bar.prototype.__beforeChanging = function () {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max
    ];
    // For Getting current Left Padding
    if (this._self._labelsY.display) {
        this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
        if (_maxValue.toString().split('').length > 9) {
            this._self._paddingYLeft = this._self._canvas.measureText('00000').width + 10
        } else {
            this._self._paddingYLeft = this._self._canvas.measureText('0000').width + 10
        }
    } else {
        this._self._paddingYLeft = 10
    }
    //_____________________
};
Bar.prototype.__setAxisX = function (_display) {
    this.__setAxisXLine(_display);
    if (_display) {
        this._self._canvas.font = this._self._labelsX.fontSize + 'px Arial';
        let _heightAxis = null;
        if (this._self._labelsX.hasOwnProperty('fontSize')) {
            _heightAxis = this._self._labelsX.fontSize * 2;
            this._self._paddingXBottom = _heightAxis
        } else _heightAxis = this._self._paddingXBottom
        let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeft + this._self._paddingYRight)) / this._configuration.data.labels.length
        this._configuration.data.labels.forEach((_, index) => {
            this._self._canvas.textAlign = "center";
            this._self._canvas.fillStyle = this._self._labelsX.color;
            this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + this._self._paddingYLeft) + (_canvasBadgeWidth/2), this._self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
            this._self._canvas.clearColor;
        })
    }
};
Bar.prototype.__drawBars = function (onChange) {
    let [_maxHeight, _maxValue] = [
        this._self._heightCanvas - this._self._paddingXBottom,
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max
    ]
    let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeft + this._self._paddingYRight)) / this._configuration.data.labels.length
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
        this._self._canvas.beginPath();
        this._self._canvas.fillStyle  = this._self.constructor.__drawLineColor(0, 0, 0, this._self._heightCanvas, [this._self._barsColors.one, this._self._barsColors.two, this._self._barsColors.three])
        const _percentage = (this._configuration.data.datasets.data[index].value * 100) / _maxValue
        if (onChange) {
            if (_maxHeight === _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100)) {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - 1,
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -1)
            } else {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100),
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -((_maxHeight - this._self._paddingXTop) * _percentage) / 100)
            }
        } else {
            let customHeight = 0;
            if (_maxHeight === _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100)) {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - 1,
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -1)
            } else {
                for (let i = 0; i < Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100); i++) {
                    setTimeout(() => {
                        customHeight++
                        this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                            _maxHeight,
                            this._self._bars.width,
                            -customHeight)
                    }, 500)
                }
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100),
                    _maxHeight
                );
            }
        }
        this._self._canvas.closePath();
    })
};
Bar.prototype.__draw = function () {
    this.__beforeChanging();
    this.__setAxisX(this._self._labelsX.display);
    this.__setAxisY(this._self._labelsX.display, this._self._labelsY.display);
    this.__setCoordinatesNet(this._self._labelsY.display);
    this._self._result.__setHeader(this._legendInfo.header);
    this.__drawBars(this.animateBars);
};
Bar.prototype.__update = function () {
    this._self.constructor.__maxValueInit(this._configuration);
    this.__draw();
};
Bar.prototype.__animate = function () {
    this.__update();
    this.animateBars = true;
    // adding tooltip effect for Bar Chart _______________
    let _tooltipElement = null;
    if (this._self._barTooltip) {
        const canvasMove = (e) => {
            if (this._self._barTooltip) {
                let moveBar = false;
                Array.from(Object.keys(this._self._result.bar._barsPositions)).forEach((_, index) => {
                    if (e.offsetX >= this._self._result.bar._barsPositions[_].x1.x &&
                        e.offsetX <= this._self._result.bar._barsPositions[_].y1.x &&
                        e.offsetY >= this._self._result.bar._barsPositions[_].x1.y &&
                        e.offsetY <= this._self._result.bar._barsPositions[_].y2.y) {
                        moveBar = true;
                        let [heightBar, maxHeight, tooltipHeight, tooltipWidth] = [
                            this._self._result.bar._barsPositions[_].x2.y - this._self._result.bar._barsPositions[_].x1.y,
                            this._self._result.bar._barsPositions[_].x2.y,
                            _tooltipElement.getBoundingClientRect().height,
                            _tooltipElement.getBoundingClientRect().width
                        ];
                        let [_top, _left, className] = [0, 0, null];
                        _top = maxHeight - heightBar + this._canvasElement.offsetTop;
                        _left = this._self._result.bar._barsPositions[_].x1.x + this._canvasElement.offsetLeft + this._self._bars.width + 10
                        className = 'to-left';
                        if (heightBar < tooltipHeight) {
                            _top = maxHeight - tooltipHeight + this._canvasElement.offsetTop;
                            className = 'to-left-bottom';
                        }
                        if (this._self._result.bar._barsPositions[_].x1.x + this._self._bars.width + tooltipWidth > this._self._widthCanvas - this._self._paddingYRight) {
                            _left = this._self._result.bar._barsPositions[_].x1.x + this._canvasElement.offsetLeft - tooltipWidth - 10
                            className = (heightBar < tooltipHeight) ? 'to-right-bottom' : 'to-right';
                        }
                        _tooltipElement.setAttribute('id', className);
                        _tooltipElement.innerHTML = `
                                <p>${this._dataChart[Number(_)].text}</p>
                                <p>${this._dataChart[Number(_)].value}</p>
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
                this._self._bars.mouseMove.callback = _tooltipElement;
                //_____________
            }
        };
        this._canvasElement.removeEventListener('mousemove', canvasMove, false);
        if (document.querySelector('.tooltip-element-bar')) {
            document.querySelectorAll('.tooltip-element-bar').forEach(_ => _.remove())
        }
        _tooltipElement = document.createElement('DIV');
        _tooltipElement.className = 'tooltip-element-bar'
        this._canvasElement.insertAdjacentElement('afterend', _tooltipElement);
        this._canvasElement.addEventListener('mousemove', canvasMove)
    }
    //______________________________________
};
Bar.prototype.__init = function () {
    setTimeout(() => {
        this.__animate()
    }, 0)
};
export const ParametersBar = (_dataChart) => {
    return {
        type: 'bar',
        data: {
            labels: _dataChart.map(_ => _.text),
            datasets: {
                data: _dataChart,
                borderColor: [175, 160, 160],
                borderOpacity: 1
            }
        },
        options: {
            bars: {
                backgroundColors: { one: '#F21103', two: '#F86300', three: '#F7C601'},
                mouseMove: {
                    tooltip: true,
                    set callback (element) {}
                },
                width: 40
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
    }
};