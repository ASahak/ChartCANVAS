import { tabCharts } from "../helpers/constants";

customElements.define('app-header',
    class AppHeader extends HTMLElement{
        constructor () {
            super();
            this._shadowRoot = this.attachShadow({mode: 'open'});
        }
        static get observedAttributes () {
            return ['active-chart'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'active-chart':
                    console.log(`Value changed from ${oldValue} to ${newValue}`);
                    break;
            }
        }
        connectedCallback() {
            this.setLogo(this._shadowRoot)
            console.log(this.activeChart, tabCharts);
        }
        get activeChart () {
            return this.getAttribute('active-chart')
        }
        setLogo (ref) {
            const _logo = document.createElement('IMG');
            _logo.src = './images/logo.png';
            ref.appendChild(_logo);
        }
    }
);