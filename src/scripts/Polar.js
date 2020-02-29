import * as dat from "dat.gui";

export function Polar (canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
    this._gui            = new dat.GUI({resizable : false});
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
    this._dataChart.map(_ => {
        this._labels.push(_.text);
        this._values.push(_.value);
        this._totalValues += _.value
    });
    [this._divider, this._dividerText] = this._self.constructor.__valuesIntegration(this._values);
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
    _legends.add(this._self._legends_polar, 'display').name('Display')
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
    fakePosition[this._self._legends_position_polar] = true;
    const _legendsPosition = _legends.addFolder('Position');
    _legendsPosition.add(fakePosition, 'top').name('Top').listen()
        .onChange((e) => {
            setChecked("top");
            if (e) {
                this._self._legends_position_polar = 'top';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'left').name('Left').listen()
        .onChange((e) => {
            setChecked("left");
            if (e) {
                this._self._legends_position_polar = 'left';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
        .onChange((e) => {
            setChecked("bottom");
            if (e) {
                this._self._legends_position_polar = 'bottom';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'right').name('Right').listen()
        .onChange((e) => {
            setChecked("right");
            if (e) {
                this._self._legends_position_polar = 'right';
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
}
function SinglePolars (self, movingX, movingY, startAngle, endAngle, radius, color, index, hoverColor, value) {
    this._self       = self;
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
    this._self._canvas.fillStyle = this._color;
    this._self._canvas.lineWidth = this._self._lineWidth_polar;
    this._self._canvas.beginPath();
    this._self._canvas.moveTo(this._movingX, this._movingY);
    this._self._canvas.arc(this._movingX, this._movingY, this._radius, this._startAngle, this._endAngle, false);
    this._self._canvas.lineTo(this._movingX, this._movingY);
    this._self._canvas.fill();
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.stroke();
    this._self._canvas.beginPath();
    this._self._canvas.save();
    this._self._canvas.translate(this._movingX, this._movingY);
    this._self._canvas.restore();
};
SinglePolars.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
    this._self._canvas.beginPath();
    this._self._canvas.rect(x, y, widthText +  widthValue, 18);
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
SinglePolars.prototype.__update = function (_constructor) {
    const _maxPoint = (this._self._result.polar._radius * (_constructor._value * 100) / Math.max(...this._self._result.polar._values)) / 100;
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
        this._self._canvas.lineWidth = 1;
        this._self._canvas.beginPath();
        this._self._canvas.arc(this._cx, this._cy, this._radius - (i * (this._radius / 7)), 0, 2 * Math.PI, false);
        this._self._canvas.strokeStyle = this._self._colorAxis_polar;
        this._self._canvas.stroke();
        this._self._canvas.beginPath();
    }
};
Polar.prototype.__initP = async function () {
    this._polarParts = [];
    this._betweenAngles = [];
    this._labelsPosition = [];
    this._colors = [];
    this._countPolars = -1;
    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
    await setTimeout(() => {
        this._self._result.__setHeader(this._legendInfo.header);
        this._labels.map(_j => this._colors.push(this._self._result.__getRandomColor()));
        (() => {
            if (this._self._legends_polar.display) {
                this.__generateLabelsAfterClearing(this, this._self._legends_position_polar);
            } else {
                this._cx = this._self._widthCanvas / 2;
                this._cy = this._self._heightCanvas / 2;
            }
        })();
        this.__drawNet();
        this._values.forEach((_value, index)=> {
            // Becomes from Pie Prototype ~~~~
            this.__polarAngles(index);
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~
            this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]]);
            this._polarParts.push(new SinglePolars(
                this._self,
                this._cx, this._cy,
                this._angles.begin[index],
                this._angles.end[index],
                this._radius,
                this._colors[index % this._colors.length],
                index,
                this._self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/),
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
        if (this._self._legends_polar.display) {
            for (let i = 0; i < this._labelsPosition.length; i++) {
                if (pageX >= this._labelsPosition[i].left && pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                    pageY >= this._labelsPosition[i].top && pageY <= this._labelsPosition[i].top + 13
                ) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, i, '_polarParts', this, 'polar', this._self._legends_position_polar, this._self._legends_polar);
                }
            }
        }
        if (this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._radius)){
            for (let _index = 0; _index < this._betweenAngles.length; _index++) {
                if (realAngle >= this._betweenAngles[_index][0] && realAngle <= this._betweenAngles[_index][1] &&
                    this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, _index, '_polarParts', this, 'polar', this._self._legends_position_polar, this._self._legends_polar);
                    break;
                } else if ((this._self._onHover_polar || this._prevId) &&
                    !this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                    !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', this._self._legends_position_polar, 'polar', this._self._legends_polar);
                }
            }
        } else if (this._self._onHover_polar || this._prevId) {
            !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', this._self._legends_position_polar, 'polar', this._self._legends_polar);
        }
    })
};
export const ParametersPolar = (_dataChart) => {
    return{
        type: 'polar',
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
            axisColor: '#ccc',
            lineWidth: 1,
            onHover: {
                event: true,
                tooltip: true
            }
        }
    }
};