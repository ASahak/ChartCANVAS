import dummyData from './dummyData';
import { Line, ParametersLine } from './Line.js';
import { Bar, ParametersBar } from './Bar.js';
import { Pie, ParametersPie } from './Pie.js';
import { Polar, ParametersPolar } from './Polar.js';
let canvas = document.querySelector('#chart');
const canvasParent = canvas.parentElement;

(async () => {
    let type = 'Line';
    let _legendInfo = {};
    await addEventListener('sendTab', (data) => {
        type = data.detail;
        const new_element = canvas.cloneNode(true);
        canvas.parentNode.replaceChild(new_element, canvas);
        if (document.querySelector('.dg.ac')) {
            document.querySelector('.main').remove()
        }
        canvas = new_element;
        if (type === 'Line') {
            _legendInfo = {
                header: dummyData[type].header,
                info1: null,
                info2: Object.keys(dummyData[type].data)[0],
                keys: [...Object.keys(dummyData[type].data)]
            };
            new ChartArt(canvas).__init(ParametersLine(dummyData[type].data, _legendInfo));
        } else if (type === 'Bar') {
            _legendInfo = {
                header: dummyData[type].header,
                info1: null,
                info2: dummyData[type].data,
            };
            new ChartArt(canvas).__init(ParametersBar(dummyData[type].data, _legendInfo));
        } else if (type === 'Pie') {
            _legendInfo = {
                header: dummyData[type].header,
                info1: null,
                info2: dummyData[type].data,
            };
            new ChartArt(canvas).__init(ParametersPie(dummyData[type].data));
        } else if (type === 'Polar') {
            _legendInfo = {
                header: dummyData[type].header,
                info1: null,
                info2: dummyData[type].data,
            };
            new ChartArt(canvas).__init(ParametersPolar(dummyData[type].data));
        }
    });

    function ChartArt (selector) {
        const self              = this;
        this._result            = null;
        this._canvas            = selector.getContext('2d');
        this._heightCanvas      = 500;
        this._widthCanvas       = 800;

        function Result (elem, options) {
            if (options) {
                if (type === 'Line') {
                    this.line       = new Line(options, canvas, self, _legendInfo);
                    this.line.__initL();
                } else if (type === 'Bar') {
                    this.bar     = new Bar(options, canvas, self, _legendInfo, dummyData[type].data);
                    this.bar.__init();
                } else if (type === 'Pie') {
                    this.pie     = new Pie(canvas, self, _legendInfo, dummyData[type].data);
                    this.pie.__init();
                } else if (type === 'Polar') {
                    this.polar   = new Polar(canvas, self, _legendInfo, dummyData[type].data);
                    Object.assign(this.polar.__proto__, Pie.prototype);
                    this.polar.__initP();
                }

            }
        }


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
        };
        Result.prototype.__max_min_values = function (arr) {
            let [max, min] = [Math.max(...arr.map(_ => _ instanceof Object ? _.value : _)),
                Math.min(...arr.map(_ => _ instanceof Object ? _.value : _))]
            return {
                max, min
            }
        };
        Result.prototype.__setHeader = function (text) {
            if (canvasParent.querySelector('h1')) {
                canvasParent.querySelector('h1').remove();
            }
            const label = document.createElement("H1");
            label.innerText = text;
            label.style.width = self._widthCanvas + 'px';
            label.style.textAlign = 'center';
            canvasParent.querySelector('canvas').insertAdjacentElement('beforeBegin', label)
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
        };

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
            self._borderColorLine         = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || [227, 225, 225];
            self._axisColorLine           = parameters.options.scales && parameters.options.scales.axisColor || 'rgb(85,72,72)';
            self._axisOpacityLine         = 1;
            self._lineColors              = parameters.options.lineColors || [];
            self._borderOpacityLine       = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
            self._labelsXLine             = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
            self._labelsYLine             = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
            self._paddingXBottomLine      = self._labelsXLine.display ? self._paddingXBottomLine: 10;
            self._paddingYLeftLine        = self._labelsYLine.display ? self._paddingYLeftLine + (50 - self._paddingYLeftLine): 10;
            self._lineWidth               = parameters.options.lineWidth || 1;
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            self._result = new Result(selector, parameters);

            return self._result[parameters.type]
        };
        return new Result(selector)
    }

})();