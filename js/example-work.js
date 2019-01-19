import React from "react";
import ExampleWorkModal from "./example-work-modal";

class ExampleWork extends React.Component {
  constructor(props) {
    // constructor takes props and pass to react component class using super
    super(props);

    // value of this.state should always be a js object
    this.state = {
      // is the modal open or not and what example work was selected
      // default is false so it starts closed
      modalOpen: false,
      // select first element as default
      selectedExample: this.props.work[0]
    };

    // give the open and close functions access to my object (this)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }

  render() {
    return (
      <span>
        <section className="section section--alignCentered section--description">
          {/* every array in javascript comes with a map
       map is a function that takes another function as an argument
       call x times for x number of items in the array */}
          {this.props.work.map((example, idx) => {
            return <ExampleWorkBubbles example={example} key={idx}
            // pass it in as a prop since stand alone component does not have access yet
            // pass the openModal function down as a property so that ExampleWorkBubble has access
            openModal={this.openModal} />;
          })}
        </section>

        <ExampleWorkModal
          example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal}
        />
      </span>
    );
  }
}
class ExampleWorkBubbles extends React.Component {
  render() {
    let example = this.props.example;
    return (
      // remember class is a reserved word in javascript, so we can't use in jsx
      <div className="section__exampleWrapper"
        // to deal with evt parameter from browser AND example
        // wrap the openModal function in another function
        // passing the event and example to openModal function call
        // in a sense the ExampleWorkBubbles class knows which example it represents
        // and sends that to the openModal function
        onClick={ (evt) => this.props.openModal(evt, example) } >
        <div className="section__example">
          <img
            alt={example.image.desc}
            className="section__exampleImage"
            src={example.image.source}
          />
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              {example.title}
            </dt>
            <dd />
          </dl>
        </div>
      </div>
    );
  }
}
// in order to import in main.js we first need to export
// each file can have ONE default export
export default ExampleWork;
export { ExampleWorkBubbles };
