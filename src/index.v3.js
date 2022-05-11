import React from 'react';
import ReactDOM from 'react-dom';

import FancyModal from './FancyModal';
import FancyBox from './FancyBox';

const withWCV2 = (config) => (Component) => {
  const EnhanceComponent = () => {
    const [props, setProps] = useState();
    return ReactDOM.createPortal(<Component {...props} />);
  };
  return EnhanceComponent;
};
const WCFancyModal = withWCV2({
  tagName: 'wc-fancy-modal'
})(FancyModal);

const WCFancyBox = withWCV2({
  tagName: 'wc-fancy-box'
})(FancyBox);

const App = () => {
  return (
    <React.Fragment>
      <WCFancyModal />
      <WCFancyBox />
    </React.Fragment>
  );
};

const mountDynamicRootAppNode = () => {
  const rootNode = document.createElement('div');
  rootNode.id = 'the-root-react-web-component-demno-app';
  document.body.appendChild(rootNode);
  return rootNode;
};

(() => {
  const rootNode = mountDynamicRootAppNode();
  ReactDOM.render(<App />, rootNode);
})();
