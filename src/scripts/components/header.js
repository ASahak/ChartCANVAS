import { tabCharts } from "../helpers/constants";

customElements.define('app-header',
    class AppHeader extends HTMLElement{
        constructor () {
            super();
            this._shadowRoot    = this.attachShadow({mode: 'open'});
            this._header        = document.createElement('HEADER');
            const style         = document.createElement('style');
            style.textContent = `
                header {     
                    display: flex;
                    background-color: #121212;
                    padding: 15px 7vw;
                    justify-content: space-between;
                    color: #fff;
                    position: relative;
                    z-index: 222;
                }
                header > img { width: 45px; height: 40px; }
                header nav {}
                header nav > ul { 
                    padding: 0px;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                header nav > ul li{ 
                    margin: 0 10px;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: .4s;
                    position: relative;
                }
                .active-chart { font-weight: 600 } 
                .active-chart:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    width: 100%;
                    height: 1px;
                    background-color: #fff;
                }
              `;
            this._shadowRoot.appendChild(style);
        }
        static get observedAttributes () {
            return ['active-chart'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'active-chart':
                    dispatchEvent(new CustomEvent("sendTab", {
                        detail: newValue
                    }));
                    console.log(`Value changed from ${oldValue} to ${newValue}`);
                    break;
            }
        }
        connectedCallback() {
            this.__setLogo(this._header);
            this.__drawTabs();
            this._shadowRoot.appendChild(this._header);
        }
        get activeChart () {
            return this.getAttribute('active-chart')
        }
        set activeChart (value) {
            this.setAttribute('active-chart', value);
        }

        __drawTabs () {
            const _nav = document.createElement("NAV");
            _nav.innerHTML = '<ul type="none"></ul>';
            tabCharts.forEach(tab => {
                const _navItem = document.createElement('LI');
                _navItem.innerText = tab;
                if (this.activeChart === tab) {
                    _navItem.classList.add('active-chart')
                }
                _navItem.onclick = () => this.__changeChart(tab, _navItem);
                _nav.querySelector('ul').appendChild(_navItem);
            });
            this._header.appendChild(_nav);
        }

        __setLogo (ref) {
            const _logo = document.createElement('IMG');
            _logo.src = './images/logo.png';
            ref.appendChild(_logo);
        }

        __changeChart (tab, li) {
            if (this._header.querySelector('.active-chart')) {
                this._header.querySelector('.active-chart').classList.remove('active-chart');
            }
            li.classList.add('active-chart');
            this.activeChart = tab;
        }
    }
);
