import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';

import FancyBox from './FancyBox';
import FancyModal from './FancyModal';

class WCFancyBox extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<FancyBox />, this);
  }
}

class WCFancyModal extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<FancyModal />, this);
  }
}

window.customElements.define('wc-fancy-box', WCFancyBox);
window.customElements.define('wc-fancy-modal', WCFancyModal);
