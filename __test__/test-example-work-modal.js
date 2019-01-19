import React from "react";
import {shallow} from "enzyme";
import ExampleWorkModal from "../js/example-work-modal";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

const myExample = {
  'title': "AWS Lambda Snapshot Backup & Prune",
  'href': "rootofpi.co.uk",
  'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  'image': {
    'desc': "example screenshot of a project involving code",
    'source': "images/example1.png",
    'comment': "probably doesn't even compile"
  }
};

describe("ExampleWorkModal component", () => {
  let mockCloseModalFn = jest.fn();

  let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
  let opencomponent = shallow(<ExampleWorkModal example={myExample} open={true} closeModal={mockCloseModalFn}/>);

  let anchors = component.find("a");

  // let closedComponent = shallow(<ExampleWorkModal example={myWork[1]}
  //     openModal={mockCloseModalFn}/>);

  it("should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("should have the modal class set correctly", () => {
    expect(component.find(".background--purple").hasClass("modal--closed")).toBe(true);
    expect(opencomponent.find(".background--purple").hasClass("modal--open")).toBe(true);
  });

  it("Should call the closeModal handler when button is clicked", () => {
    opencomponent.find(".modal__closeButton").simulate('click');
    expect(mockCloseModalFn).toHaveBeenCalled();
  });

});
