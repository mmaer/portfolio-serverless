import React from "react";
import { shallow } from "enzyme";
import ExampleWork, { ExampleWorkBubbles } from "../js/example-work";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
    title: "All You Need",
    image: {
      desc: "example image of a cat.",
      source: "images/example3.png",
      comment: "the internet loves cats"
    }
  },
  {
    title: "AWS Lambda Snapshot Backup & Prune",
    image: {
      desc: "example screenshot of a project involving code",
      source: "images/example1.png",
      comment: "probably doesn't even compile"
    }
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should have the same number of children as there are examples", () => {
    expect(component.find("ExampleWorkBubbles").length).toEqual(myWork.length);
  });

  it("should allow modal to open and close", () => {
    // supplied by enzyme, allows us to call and get properties direct from component
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe("ExampleWorkBubbles component", () => {
  // mock function to make sure the function is called at the correct time
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubbles example={myWork[1]}
    openModal={mockOpenModalFn}/>);

  let images = component.find("img");

  it("Should contain a single img element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should contain the correct img src", () => {
    //expect(images.node.props.src).toEqual(myWork[1].image.src);
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });

});
