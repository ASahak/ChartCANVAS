import * as dat from "dat.gui";

export function Line (options, canvas, self, _legendInfo) {
    this._canvasElement   = canvas;
    this._legendInfo      = _legendInfo;
    this._self            = self;
    this._gui             = new dat.GUI();
    const lineFolder      = this._gui.addFolder('Line');
    this._configuration   = options;
    this._data            = this._configuration.data.datasets.data;
    this._points2D        = [];
    this._legends2D       = [];
    this._positionPoints  = [];
    this._positionLine    = [];
    this._lineIndexes     = [];
    this._animationDraw   = true;
    this._clickedLegends  = this._data.map(_ => true);
    this._canvasBadgeWidth= (this._self._widthCanvas - (this._self._paddingYLeftLine + this._self._paddingYRightLine)) / this._configuration.data.labels.length;

    lineFolder.open();
    lineFolder.addColor(this._self, '_borderColorLine').name('Border Color')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_borderOpacityLine', 0, 1).name('Border Opacity')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.addColor(this._self, '_axisColorLine').name('Axis Color')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_axisOpacityLine', 0, 1).name('Axis Opacity')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_pointTooltip').name(`Point's Tooltip`)
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const linesFolder = lineFolder.addFolder('Lines');
    linesFolder.open();
    let TimeoutLineWidth = null;
    linesFolder.add(this._self, '_lineWidth', 1, 3).name('Line Width')
        .onChange(() => {
            if (TimeoutLineWidth) {
                cancelAnimationFrame(this.__update.bind(this))
                clearTimeout(TimeoutLineWidth);
            }
            this._animationDraw = true;
            TimeoutLineWidth = setTimeout(() => {
                requestAnimationFrame(this.__update.bind(this))
            }, 500)
        });
    setTimeout(() => {
        this._self._lineColors.forEach((color, index) => {
            linesFolder.addColor(this._self._lineColors, [index]).name('Line Color ' + (index + 1))
                .onChange(() => {
                    this._animationDraw = false;
                    requestAnimationFrame(this.__update.bind(this))
                });
        })
    }, 100);

    // Sub Folders
    const linesXaxis = lineFolder.addFolder('XAxis');
    linesXaxis.add(this._self._labelsXLine, 'display').name('Display')
        .onChange((e) => {
            xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const xAxisFontSize = linesXaxis.add(this._self._labelsXLine, 'fontSize', 10, 26).name('Font Size');
    xAxisFontSize.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsXLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsXLine.display ? 1 : 0.5}`);
    const xAxisColor = linesXaxis.addColor(this._self._labelsXLine, 'color').name('Color');
    xAxisColor.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsXLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsXLine.display ? 1 : 0.5}`);

    const linesYAxis = lineFolder.addFolder('YAxis')
    linesYAxis.add(this._self._labelsYLine, 'display')
        .onChange((e) => {
            yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const yAxisFontSize = linesYAxis.add(this._self._labelsYLine, 'fontSize', 10, 26).name('Font Size');
    yAxisFontSize.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsYLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsYLine.display ? 1 : 0.5}`);
    const yAxisColor = linesYAxis.addColor(this._self._labelsYLine, 'color').name('Color');
    yAxisColor.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsYLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsYLine.display ? 1 : 0.5}`);
    const legendBar = lineFolder.addFolder('Legend');
    legendBar.add(this._self, '_legendLine').name('Display')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    legendBar.open()
};
Line.prototype.__setCoordinatesNet = function (_displayY) {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._data.flat(Infinity)).max,
        1
    ];
    let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
    if (this._self._labelsYLine.display) {
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
            maxCeil *= 1;
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
        this._self._canvas.moveTo(this._self._paddingYLeftLine - 5, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine)
        this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRightLine, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine)
        this._self._canvas.lineWidth = this._self._lineXWidthLine;
        if (this._self._borderColorLine instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColorLine[0]}, ${this._self._borderColorLine[1]}, ${this._self._borderColorLine[2]}, ${this._self._borderOpacityLine})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColorLine
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
        if (_displayY) {
            nextVal -= maxCeil/10;
            this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
            this._self._canvas.textAlign = "right";
            this._self._canvas.fillStyle = this._self._labelsYLine.color;
            this._self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), this._self._paddingYLeftLine - 7, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine + this._self._labelsYLine.fontSize / 3)
            this._self._canvas.clearColor;
        }
    }
    for (let i = 1; i < this._configuration.data.labels.length; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeftLine + i * (this._self._widthCanvas - this._self._paddingYRightLine - this._self._paddingYLeftLine) / this._configuration.data.labels.length, this._self._paddingXTopLine)
        this._self._canvas.lineTo(this._self._paddingYLeftLine + i * (this._self._widthCanvas - this._self._paddingYRightLine - this._self._paddingYLeftLine) / this._configuration.data.labels.length, this._self._heightCanvas - this._self._paddingXBottomLine)
        this._self._canvas.lineWidth = this._self._lineXWidthLine;
        if (this._self._borderColorLine instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColorLine[0]}, ${this._self._borderColorLine[1]}, ${this._self._borderColorLine[2]}, ${this._self._borderOpacityLine})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColorLine
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
    }
};
Line.prototype.__setAxisYLine = function (_displayX) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    let _heightAxis = null;
    if (this._self._labelsXLine.hasOwnProperty('fontSize') && _displayX) {
        _heightAxis = this._self._labelsXLine.fontSize * 2;
        this._self._paddingXBottomLine = _heightAxis
    } else _heightAxis = this._self._paddingXBottomLine;
    this._self._lineXWidthLine && (
        this._self._canvas.moveTo(this._self._paddingYLeftLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._paddingYLeftLine, this._self._paddingXTopLine),
            this._self._canvas.lineWidth = this._self._lineYWidthLine
    );
    if (this._self._axisOpacityLine !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColorLine.replace(')', ', ' + this._self._axisOpacityLine + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColorLine
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Line.prototype.__setAxisXLine = function (_display) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    this._self._paddingXBottomLine = this._self._labelsXLine.display ? this._self._paddingXBottomLine: 10;
    let _heightAxis = null;
    if (this._self._labelsXLine.hasOwnProperty('fontSize') && _display) {
        _heightAxis = this._self._labelsXLine.fontSize * 2;
        this._self._paddingXBottomLine = _heightAxis
    } else _heightAxis = this._self._paddingXBottomLine;
    this._self._lineXWidthLine && (
        this._self._canvas.moveTo(this._self._paddingYLeftLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRightLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineWidth = this._self._lineYWidthLine
    );
    if (this._self._axisOpacityLine !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColorLine.replace(')', ', ' + this._self._axisOpacityLine + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColorLine
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Line.prototype.__beforeChanging = function () {
    if (this._self._legendLine) {
        this._self._paddingXTopLine = 30
    } else {
        this._self._paddingXTopLine = 10
    }

    let [_maxValue] = [
        this._self._result.__max_min_values(this._data.flat(Infinity)).max
    ];
    // For Getting current Left Padding
    if (this._self._labelsYLine.display) {
        this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
        if (_maxValue.toString().split('').length > 9) {
            this._self._paddingYLeftLine = this._self._canvas.measureText('0000').width + 10
        } else {
            this._self._paddingYLeftLine = this._self._canvas.measureText('000').width + 10
        }
    } else {
        this._self._paddingYLeftLine = 10
    }
    //_____________________
};
Line.prototype.__setAxisX = function (_display) {
    this.__setAxisXLine(_display);
    if (_display) {
        this._self._canvas.font = this._self._labelsXLine.fontSize + 'px Arial';
        let _heightAxis = null;
        if (this._self._labelsXLine.hasOwnProperty('fontSize')) {
            _heightAxis = this._self._labelsXLine.fontSize * 2;
            this._self._paddingXBottomLine = _heightAxis
        } else _heightAxis = this._self._paddingXBottomLine;
        let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeftLine + this._self._paddingYRightLine)) / this._configuration.data.labels.length;
        this._configuration.data.labels.forEach((_, index) => {
            this._self._canvas.textAlign = "center";
            this._self._canvas.fillStyle = this._self._labelsXLine.color;
            this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + this._self._paddingYLeftLine) + (_canvasBadgeWidth/2), this._self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
            this._self._canvas.clearColor;
        })
    }
};
Line.prototype.__setAxisY = function (_displayX, _displayY) {
    this.__setAxisYLine(_displayX);
    if (_displayY) {
        this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
        this._self._canvas.textAlign = "right";
        this._self._canvas.fillStyle = this._self._labelsYLine.color;
        this._self._canvas.fillText('0', this._self._paddingYLeftLine - 7, this._self._heightCanvas - this._self._paddingXBottomLine);
        this._self._canvas.clearColor;
    }
};
Line.prototype.__getPositionPoints = function () {
    const _maxPoint = Math.max.apply(Math, this._data.flat(Infinity).map(function(o) { return o.value; }));
    this._data.map((elem, index) => {
        this._lineIndexes.push(0);
        if (this._clickedLegends[index]) {
            this._positionPoints[index] = [];
            for (let i = 0; i < elem.length; i++) {
                const _point = new Path2D();
                const _x = (i * this._canvasBadgeWidth + this._self._paddingYLeftLine) + (this._canvasBadgeWidth / 2);
                const _y = this._self._heightCanvas - this._self._paddingXBottomLine - ((this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) * elem[i].value * 100 / _maxPoint) / 100;
                _point.arc(_x, _y, this._self._lineWidth * 1.5, 0, 2 * Math.PI);
                this._positionPoints[index].push({x: _x, y: _y});
                this._self._canvas.fillStyle = this._self._lineColors[index];
                this._self._canvas.fill(_point);
                this._points2D.push({
                    x: _x,
                    y: _y,
                    point: _point
                });
            }
        }
    })
};
Line.prototype.__drawLine = function (indexMain) {
    this._lineIndexes[indexMain]++;
    this._self._canvas.beginPath();
    this._self._canvas.lineWidth = this._self._lineWidth;
    this._self._canvas.moveTo(this._positionLine[indexMain].x[this._lineIndexes[indexMain] - 1], this._positionLine[indexMain].y[this._lineIndexes[indexMain] - 1]);
    this._self._canvas.lineTo(this._positionLine[indexMain].x[this._lineIndexes[indexMain]], this._positionLine[indexMain].y[this._lineIndexes[indexMain]]);
    this._self._canvas.strokeStyle = this._self._lineColors[indexMain];
    this._self._canvas.stroke();
    if (this._lineIndexes[indexMain] > this._positionLine[indexMain].x.length - 1) {
        cancelAnimationFrame(this.__drawLine.bind(this));
    } else {
        requestAnimationFrame(this.__drawLine.bind(this, indexMain));
    }

};
Line.prototype.__drawLegend = function () {
    if (this._self._legendLine) {
        this._self._canvas.font = '13px Arial';
        let _fakeIndex = -1;
        const _cx = (this._self._widthCanvas - this._self._paddingYLeftLine - this._self._paddingYRightLine) / 2 + this._self._paddingYLeftLine;
        let _mainRowWidth = 0;
        this._legendInfo['keys'].forEach((items, ind)=> {
            let _x = ind === 0 ? -10 : 25;
            _mainRowWidth += this._self._canvas.measureText(items.toString()).width + _x;
        });
        this._legendInfo['keys'].map((text, ind) => {
            _fakeIndex++;
            let _everyX = 0;
            let _everyItemX = 0;
            for (let i = 0; i < ind; i++) {
                _everyItemX+=this._self._canvas.measureText(this._legendInfo['keys'][i].toString()).width + 25;
            }
            _everyX = ind === 0 ? 0 : _everyItemX;

            const [_x, _y] = [_cx - (_mainRowWidth / 2 - _everyX ), this._self._paddingXTopLine - 10];
            let _legend2D = new Path2D();
            // Overline
            if (!this._clickedLegends[ind]) {
                this._self._canvas.beginPath();
                this._self._canvas.moveTo(_x, _y - 5);
                this._self._canvas.lineTo(_x + this._self._canvas.measureText(text.toString()).width, _y - 5);
                this._self._canvas.globalAlpha = 1;
                this._self._canvas.lineWidth = 2;
                this._self._canvas.strokeStyle = this._self._labelsX.color;
                this._self._canvas.stroke();
                this._self._canvas.closePath();
            }
            //~~~~~~~~~~

            this._self._canvas.beginPath();
            this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
            this._self._canvas.fillStyle = this._self._lineColors[_fakeIndex];
            this._self._canvas.globalAlpha = 1;
            this._self._canvas.fill();
            this._self._canvas.clearColor;
            this._self._canvas.closePath();

            this._self._canvas.beginPath();
            this._self._canvas.fillStyle = this._self._labelsX.color;
            this._self._canvas.textAlign = 'left';
            this._self._canvas.fillText(text.toString(), _x, _y);
            this._self._canvas.closePath();

            this._self._canvas.beginPath();
            _legend2D.rect(_x - 15, _y - 10, this._self._canvas.measureText(text.toString()).width + 15, 10);
            this._self._canvas.strokeStyle = 'transparent';
            this._self._canvas.stroke(_legend2D);
            this._legends2D.push({
                x: _x - 15,
                y: _y - 10,
                key: ind,
                width: this._self._canvas.measureText(text.toString()).width + 15,
                point: _legend2D
            });
        });
    }
};
Line.prototype.__draw = function () {
    this._positionPoints = [];
    this._lineIndexes = [];
    this._legends2D = [];
    this._points2D = [];
    const _everyStep = this._animationDraw ? 20 : 1;
    this.__beforeChanging();
    this.__setAxisX(this._self._labelsXLine.display);
    this.__setAxisY(this._self._labelsXLine.display, this._self._labelsYLine.display);
    this.__getPositionPoints();
    this.__setCoordinatesNet(this._self._labelsYLine.display);
    this.__drawLegend();
    this._data.forEach((_, indexMain) => {
        if (this._clickedLegends[indexMain]) {
            this._positionLine[indexMain] = {
                x: [],
                y: []
            };
            this._positionPoints[indexMain].map((elem, index) => {
                if (index < this._positionPoints[indexMain].length - 1) {
                    const _height = this._positionPoints[indexMain][index + 1].y - elem.y;
                    const _width = this._positionPoints[indexMain][index + 1].x - elem.x;
                    let _heightLoop = elem.y - _height / _everyStep;
                    let _widthLoop = elem.x - _width / _everyStep;
                    for (let i = 0; i < _everyStep; i++) {
                        _heightLoop += _height / _everyStep;
                        _widthLoop += _width / _everyStep;
                        this._positionLine[indexMain].y.push(_heightLoop);
                        this._positionLine[indexMain].x.push(_widthLoop)
                    }
                } else {
                    this._positionLine[indexMain].y.push(this._positionPoints[indexMain][index].y);
                    this._positionLine[indexMain].x.push(this._positionPoints[indexMain][index].x)
                }
            });
            if (this._animationDraw) {
                this.__drawLine(indexMain);
            } else {
                this._positionPoints[indexMain].map((elem, index) => {
                    if (index < this._positionPoints[indexMain].length - 1) {
                        this._self._canvas.beginPath();
                        this._self._canvas.lineWidth = this._self._lineWidth;
                        this._self._canvas.moveTo(this._positionLine[indexMain].x[index], this._positionLine[indexMain].y[index]);
                        this._self._canvas.lineTo(this._positionLine[indexMain].x[index + 1], this._positionLine[indexMain].y[index + 1]);
                        this._self._canvas.strokeStyle = this._self._lineColors[indexMain];
                        this._self._canvas.stroke();
                    }
                });
            }
        }
    })
};
Line.prototype.__tooltip = function (x, y, data) {
    this._self._canvas.font = '13px Arial';
    const _width = this._self._canvas.measureText(data).width + 20;
    this._self._canvas.beginPath();
    this._self._canvas.rect(x - _width / 2, y - 28, _width, 20);
    this._self._canvas.fillStyle = 'rgb(20, 17, 17)';
    this._self._canvas.fill();
    this._self._canvas.clearColor;
    this._self._canvas.textAlign = "left";
    this._self._canvas.fillStyle = '#fff';
    this._self._canvas.fillText(data, x - _width / 2 + 10, y - 14);
    this._self._canvas.closePath();
};
Line.prototype.__update = function () {
    let years = this._data.map((year, index) => {
        return this._clickedLegends[index] ? this._legendInfo.keys[index] : ''
    });
    this._self._result.__setHeader('Predicted world population in ' + years.join(' '));
    this._self.constructor.__maxValueInit(this._configuration);
    this.__draw(this._data)
};
Line.prototype.__initL = async function () {
    setTimeout(() => {
        this._data.forEach(() => {
            this._self._lineColors.push(this._self._result.__getRandomColor())
        });
        this.__update();
        this._canvasElement.addEventListener('click', (event) => {
            this._legends2D.forEach((path2D, index) => {
                if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                    this._animationDraw = false;
                    this._clickedLegends[index] = !this._clickedLegends[index];
                    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                    this.__update();
                }
            })
        });
        let isPointAreaIndex = null;
        let isPointArea = false;
        this._canvasElement.addEventListener('mousemove', (event) => {
            // Legends hover pointer
            let isLegendPosition = true;
            this._legends2D.forEach((path2D, index) => {
                if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                    this._canvasElement.style.cursor = 'pointer';
                    isLegendPosition = false;
                }
                if (isLegendPosition) {
                    this._canvasElement.style.cursor = 'default';
                }
            });

            if (this._self._pointTooltip) {
                this._points2D.forEach((path2D, index) => {
                    if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                        this._canvasElement.style.cursor = 'pointer';
                        isPointArea = true;
                        this._animationDraw = false;
                        isPointAreaIndex = index;
                        this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                        this.__draw();
                        this.__tooltip(event.offsetX, event.offsetY, this._data[~~(index / this._positionPoints[0].length)][index - (~~(index / this._positionPoints[0].length)) * this._positionPoints[0].length].value);
                        this._self._canvas.beginPath();
                        this._self._canvas.arc(path2D.x, path2D.y, 5, 0, 2 * Math.PI)
                        this._self._canvas.fillStyle = this._self._lineColors[~~(index / this._positionPoints[0].length)];
                        this._self._canvas.fill();
                        this._self._canvas.closePath();
                    }
                });
                if (isPointAreaIndex !== null && isPointArea && !this._self._canvas.isPointInPath(this._points2D[isPointAreaIndex].point, event.offsetX, event.offsetY)){
                    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                    this._animationDraw = false;
                    this.__draw();
                    isPointArea = false;
                    this._canvasElement.style.cursor = 'default';
                }
            }
        })
    }, 0)
};
export const ParametersLine = (_dataChart, _legendInfo) => {
    return {
        type: 'line',
        data: {
            labels: _dataChart[_legendInfo.info2].map(_ => _.text),
            datasets: {
                data: [
                    _dataChart['2009'],
                    _dataChart['2014'],
                    _dataChart[_legendInfo.info2],
                ]
            }
        },
        options: {
            lineColors: [],
            legend: true,
            lineWidth: 1.5,
            points: {
                mouseMove: {
                    tooltip: true,
                    set callback (element) {}
                },
            },
            padding: {
                paddingLeft: 70,
                paddingRight: 30,
                paddingTop: 10,
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