import * as dat from "dat.gui";

export function Pie (canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
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
    this._dataChart.map(_ => {
        this._labels.push(_.text);
        this._values.push(_.value);
        this._totalValues += _.value
    });
    [this._divider, this._dividerText] = this._self.constructor.__valuesIntegration(this._values);
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
    _legends.add(this._self._legends_pie, 'display').name('Display')
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
    fakePosition[this._self._legends_position_pie] = true;
    const _legendsPosition = _legends.addFolder('Position');
    _legendsPosition.add(fakePosition, 'top').name('Top').listen()
        .onChange((e) => {
            setChecked("top");
            if (e) {
                this._self._legends_position_pie = 'top'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'left').name('Left').listen()
        .onChange((e) => {
            setChecked("left");
            if (e) {
                this._self._legends_position_pie = 'left'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
        .onChange((e) => {
            setChecked("bottom");
            if (e) {
                this._self._legends_position_pie = 'bottom'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'right').name('Right').listen()
        .onChange((e) => {
            setChecked("right");
            if (e) {
                this._self._legends_position_pie = 'right'
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
        this._angles.end.push(+(Math.PI * 2) * (this._values[0] / this._totalValues).toFixed(4))
    } else {
        this._angles.begin.push((() =>  {
            let a = 0;
            a += +(this._angles.begin[count - 1] + (Math.PI * 2) * (this._values[count - 1] / this._totalValues)).toFixed(4);
            return a
        })());
        this._angles.end.push((() =>  {
            let a = 0;
            a += +(this._angles.end[count -1] + (Math.PI * 2) * (this._values[count] / this._totalValues)).toFixed(4);
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
    // if (Math.round(this.movingX) === this._self._widthCanvas / 2 && Math.round(this.movingY) === this._self._heightCanvas / 2) {
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
    //     this.color = this._self._result.__convertHex(color, this._opacity);
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
function SinglePies (self, _x, _y, everyAngle, startAngle, endAngle, radius, color, index, hoverColor) {
    this._self          = self;
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
        this._limitAngle+= +this._everyAngle;
        if (+this._limitAngle.toFixed(4) >= +this._endAngle.toFixed(4)) {
            this._limitAngle = +this._endAngle.toFixed(4);
            window.clearInterval($interval);
            this.__draw();
        } else {
            this.__draw()
        }
    }, 30);
};
SinglePies.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
    this._self._canvas.beginPath();
    this._self._canvas.rect(x, y, widthText + widthValue, 18);
    this._self._canvas.fillStyle = 'rgb(0,0,0)';
    this._self._canvas.globalAlpha = .8
    this._self._canvas.fill();
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.fillStyle = '#fff';
    this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, text + ' ' + values, widthText + widthValue), x + 20, y + 12);
    this._self._canvas.clearColor;
    this._self._canvas.stroke();
    this._self._canvas.closePath();

    this._self._canvas.beginPath();
    this._self._canvas.lineWidth = 2;
    this._self._canvas.rect(x + 5, y + 4, 10, 10);
    this._self._canvas.fillStyle = quadroFill;
    this._self._canvas.globalAlpha = 1;
    this._self._canvas.fill();
    this._self._canvas.closePath();
};
SinglePies.prototype.__draw = function () {
    this._self._canvas.fillStyle = this._color;
    this._self._canvas.lineWidth = this._self._lineWidth_pie;

    this._self._canvas.moveTo(this._x, this._y);
    this._self._canvas.arc(this._x, this._y, this._radius / 2, this._startAngle, this._limitAngle, false);
    this._self._canvas.lineTo(this._x, this._y);

    this._self._canvas.beginPath();
    this._self._canvas.moveTo(this._x, this._y);
    this._self._canvas.arc(this._x, this._y, this._radius, this._startAngle, this._limitAngle, false);
    this._self._canvas.lineTo(this._x, this._y);
    this._self._canvas.fill('evenodd');
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.stroke();
    this._self._canvas.beginPath();
    this._self._canvas.save();
    this._self._canvas.translate(this._x, this._y);
    this._self._canvas.restore();
};
Pie.prototype.__pointInCircleSQRT = function (x, y, cx, cy, radius) {
    const distSq = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
    return distSq <= radius;
};
Pie.prototype.__mouseEnterArea = function (realAngle, _index, _hint, _constructor, type, _condition, _legendsDisplay) {
    if (_constructor._prevId !== 'arc_' + _index) {
        _constructor._prevColor = _constructor[_hint][+('arc_' + _index).split('_')[1]]._color;
        if (this._self['_onHover_' + type]) {
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
                    width : this._self._canvas.measureText(text).width > (2 * _constructor._radius) - 40
                        ? (2 * _constructor._radius) - 40 : this._self._canvas.measureText(text).width
                }
            } else {
                return {
                    text: arr[_index],
                    width: this._self._canvas.measureText(arr[_index]).width > (2 * _constructor._radius) - 40
                        ? (2 * _constructor._radius) - 40 : this._self._canvas.measureText(arr[_index]).width + 30
                }
            }
        };
        //Rendering if tooltip is true
        if (this._self['_tooltip_' + type]) {
            let _angle = (_constructor._betweenAngles[_index][0] + _constructor._betweenAngles[_index][1]) / 2;
            this._self._canvas.font = '11px Arial';
            this._self._canvas.textAlign = 'left';
            const tooltipX = _constructor._cx + Math.cos(_angle) * _constructor[_hint][_index]._radius / 2 - MesureText(_constructor._labels, _index, 'string').width / 2;
            const tooltipY = _constructor._cy + Math.sin(_angle) * _constructor[_hint][_index]._radius / 2 - 10;
            this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
            type === 'polar' && _constructor.__drawNet();
            _constructor[_hint].map(_class => {
                _class.__draw()
            });
            this._self._canvas.save();
            _constructor[_hint][+('arc_' + _index).split('_')[1]].__tooltip(
                tooltipX,
                tooltipY,
                MesureText(_constructor._labels, _index, 'string').width,
                MesureText(_constructor._values, _index, 'integer').width,
                MesureText(_constructor._labels, _index, 'string').text,
                MesureText(_constructor._values, _index, 'integer').text,
                _constructor._prevColor
            );
            this._self._canvas.restore();
            _legendsDisplay.display && this.__generateLabelsAfterClearing(this, _condition);
        }
        //_____________
    }
    _constructor._prevId = 'arc_' + _index;
};
Pie.prototype.__mouseLeaveArea = function (_constructor, _hint, _condition, type, _legendsDisplay) {
    this._canvasElement.style.cursor = 'default';
    if (_constructor._prevId) {
        this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
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
    _constructor._cx = this._self._widthCanvas / 2;
    this._self._canvas.font = this._legendSize + 'px Arial';
    let _levels = [[]];
    let _levelsCount = 0;
    let _mainRowWidth = [0];
    _constructor._labels.map((item, index) => {
        let _x = index === 0 ? 15 : 25;
        if (_constructor._labels[index + 1] && _mainRowWidth[_levelsCount] + this._self._canvas.measureText(_constructor._labels[index + 1]).width + _x > 2 * _constructor._radius) {
            _levelsCount++;
            _mainRowWidth[_levelsCount] = 0;
            _levels[_levelsCount] = [];
            _x = 15;
        }
        _mainRowWidth[_levelsCount]+=this._self._canvas.measureText(_constructor._labels[index]).width + _x;
        _levels[_levelsCount].push(item);
    });
    let _fakeIndex = -1;
    _levels.forEach((items, index) => {
        items.map((text, ind) => {
            _fakeIndex++;
            let _everyX = 0;
            for (let i = 0; i <= ind; i++) {
                let _x = i === 0 ? 15 : 25;
                _everyX+=this._self._canvas.measureText(items[i]).width + _x;
            }
            const [_x, _y] = [_constructor._cx - (_mainRowWidth[index] / 2 - (_everyX - this._self._canvas.measureText(text).width)),
                (25 * (index + 1) + _constructor._legendSize) +
                ((position === 'bottom') ? 2 * _constructor._radius + _constructor._legendSize : 0)];
            this._self._canvas.beginPath();
            this._self._canvas.lineWidth = 2;
            this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
            this._self._canvas.fillStyle = _constructor._colors[_fakeIndex];
            this._self._canvas.globalAlpha = 1;
            this._self._canvas.fill();
            this._self._canvas.closePath();

            this._self._canvas.fillStyle = '#000';
            _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: this._self._canvas.measureText(text).width + 15});
            this._self._canvas.fillText(text, _x, _y);
        })
        if (position === 'top') _topCY = 25 * (index + 1) + _constructor._legendSize + 20/* just paddingTop 20px */
        else _topCY = 20/* just paddingTop 20px */
    });
    this._cy = _topCY + this._radius;
};
Pie.prototype.__drawLegendsByPositionHorizontal = function (_constructor, position) {
    _constructor._labelsPosition = [];
    _constructor._cy = this._self._heightCanvas / 2;
    this._self._canvas.font = _constructor._legendSize + 'px Arial';
    let _mainLabelsHeight = 0;
    let _widthTexts = [];
    let _cx = null;
    _constructor._labels.map(_ => {
        _mainLabelsHeight+=_constructor._legendSize + 10;
        _widthTexts.push(this._self._canvas.measureText(_).width + 15)
    });
    if (position === 'right') {
        _cx = this._self._widthCanvas / 2 - (25 + Math.max(..._widthTexts) / 2)
    } else if (position === 'left') {
        _cx = this._self._widthCanvas / 2 + (25 + Math.max(..._widthTexts) / 2)
    }
    const _beginY = this._self._heightCanvas / 2 - _mainLabelsHeight / 2;
    _constructor._labels.map((item, index) => {
        const [_x, _y] = [
            position === 'left' ? (_cx - (_constructor._radius + Math.max(..._widthTexts) + 30)) : _cx + (_constructor._radius + 60/* + 15 for square width */),
            _beginY + (index + 1) * (_constructor._legendSize + 10)];
        this._self._canvas.beginPath();
        this._self._canvas.lineWidth = 2;
        this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
        this._self._canvas.fillStyle = _constructor._colors[index];
        this._self._canvas.globalAlpha = 1;
        this._self._canvas.fill();
        this._self._canvas.closePath();
        _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: this._self._canvas.measureText(item).width + 15});
        this._self._canvas.fillStyle = '#000';
        this._self._canvas.fillText(item, _x, _y);
    });
    _constructor._cx = _cx;
};
Pie.prototype.__init = async function () {
    this._pieParts = [];
    this._betweenAngles = [];
    this._labelsPosition = [];
    this._colors = [];
    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
    await setTimeout(() => {
        this._self._result.__setHeader(this._legendInfo.header)
        this._labels.map(_j => this._colors.push(this._self._result.__getRandomColor()));
        (() => {
            if (this._self._legends_pie.display) {
                this.__generateLabelsAfterClearing(this, this._self._legends_position_pie);
            } else {
                this._cx = this._self._widthCanvas / 2;
                this._cy = this._self._heightCanvas / 2;
            }
        })();
        this._values.forEach((_, index)=> {
            this.__generatePieAngles(index);
            this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]]);
            this._pieParts.push(new SinglePies(
                this._self,
                this._cx, this._cy,
                +((this._angles.end[index] - this._angles.begin[index]) / 30).toFixed(4),
                this._angles.begin[index],
                this._angles.end[index],
                this._radius,
                this._colors[index % this._colors.length],
                index,
                this._self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/)
            ));
        });
        this._values.map((_, index)=>{
            this._pieParts[index].__update()
        })
    }, 0);
    await this._canvasElement.addEventListener('mousemove', (event) => {
        const pageY = event.pageY - this._canvasElement.offsetTop;
        const pageX = event.pageX - this._canvasElement.offsetLeft;
        const diffX = pageX - this._cx;
        const diffY = pageY - this._cy;
        let angle = Math.atan2(diffY, diffX);
        let _allowAreaForHover = false;
        let realAngle = angle;
        if (angle < 0) {
            realAngle = (Math.PI - Math.abs(angle)) + Math.PI
        }
        if (this._self._legends_pie.display) {
            for (let i = 0; i < this._labelsPosition.length; i++) {
                if (pageX >= this._labelsPosition[i].left && pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                    pageY >= this._labelsPosition[i].top && pageY <= this._labelsPosition[i].top + 13
                ) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, i, '_pieParts', this, 'pie', this._self._legends_position_pie, this._self._legends_pie);
                }
            }
        }
        if (this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._radius)){
            this._betweenAngles.map((_angles, _index) => {
                if (realAngle >= _angles[0] && realAngle <= _angles[1]) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, _index, '_pieParts', this, 'pie', this._self._legends_position_pie, this._self._legends_pie);
                }
            })
        } else if (this._self._onHover_pie || this._prevId) {
            !_allowAreaForHover && this.__mouseLeaveArea(this, '_pieParts', this._self._legends_position_pie, 'pie', this._self._legends_pie);
        }
    });
};

export const ParametersPie = (_dataChart) => {
    return {
        type: 'pie',
        data: {
            labels: _dataChart.map(_ => _.text),
            datasets: {
                legends: {
                    display: true,
                    position: 'bottom'
                },
                data: _dataChart,
            }
        },
        options: {
            lineWidth: 1,
            onHover: {
                event: true,
                tooltip: true
            }
        }
    }
};