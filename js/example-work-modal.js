import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
          // remember anything in curly braces in jsx can be any js expression
          // so concat 2 strings to get full and dynamic class name
          <div className={"background--purple " + modalClass}>
            <span className="color--cloud modal__closeButton"
            // since we are not passing in any extra data it is much simplier
            // then the openModal onclick handler which needed to delegate a function
            onClick={ this.props.closeModal}
            >
              <i className="fa fa-window-close-o"></i>
            </span>
            <img alt={ example.image.desc }
                 className="modal__image"
                 src={ example.image.src }/>
            <div className="color--cloud modal__text">
              <h2 className="modal__title">
                { example.title }
              </h2>
              <a className="color--purple modal__link"
                 href={ example.href }>
                Check it out
              </a>
              <p className="modal__description">
                { example.desc }
              </p>
            </div>
          </div>
    )
  };
};

export default ExampleWorkModal;
