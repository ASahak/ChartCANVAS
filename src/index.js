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
    Bar.prototype.__setAxisY = function () {
        let _values = this._configuration.data.datasets.data.map(_ => _.value)
        console.log(this._configuration, Math.max(..._values))
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

    Result.prototype.init = function (options) {
        selector.width = self._widthCanvas;
        selector.height = self._heightCanvas;
        self._result = new Result(selector, options);
        return self._result[options.type]
    }
    return new Result(selector)
}
Chart(canvas).init({
    type: 'bar',
    data: {
        labels: _dataChart['2019'].map(_ => _.text),
        datasets: {
            data: _dataChart['2019'],
        }
    },
    options: {}
})
