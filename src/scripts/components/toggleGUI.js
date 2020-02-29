customElements.define('toggle-gui',
    class ToggleGUI extends HTMLElement {
        constructor () {
            super();
            this._shadowRoot    = this.attachShadow({mode: 'open'});
            this._button        = document.createElement('BUTTON');
            const style         = document.createElement('style');
            style.textContent = `
                button {
                    position: fixed;
                    right: 0;
                    background: #000;
                    border: 0;
                    color: #fff;
                    font-size: 19px;
                    padding: 5px;
                    outline: none;
                    cursor: pointer;
                    transition: .4s;
                }
            `;
            this._guiControl    = document.querySelector('.dg.ac');
            this._shadowRoot.appendChild(style);
            this._shadowRoot.innerHTML += '<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">';
        }
        static get observedAttributes () {
            return ['toggle-gui'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'toggle-gui':
                    this._guiControl = document.querySelector('.dg.ac');
                    this._button.innerHTML = newValue === 'close' ? '<span class="lnr lnr-cross"></span>' : '<span class="lnr lnr-menu"></span>';
                    this._guiControl.style.right = this.toggleGuiAttr === 'open' ? '-245px' : '0';
                    break;
            }
        }
        connectedCallback () {
            this._guiControl.style.opacity = '0';
            this._guiControl.style.transitionProperty = 'opacity 0s';
            this._button.onclick = () => this._toggleGUI();
            this._shadowRoot.appendChild(this._button);
        }
        get toggleGuiAttr () {
            return this.getAttribute('toggle-gui')
        }
        set toggleGuiAttr (value) {
            this.setAttribute('toggle-gui', value);
        }
        _toggleGUI () {
            this._guiControl.style.opacity = '1';
            this.toggleGuiAttr = this.toggleGuiAttr === 'open' ? 'close' : 'open';
            this._button.style.right = this.toggleGuiAttr === 'close' ? '245px' : '0';
        }
    });