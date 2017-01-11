import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import App from '../../src/App.js';

//it should call componentDidMount when loading
//it should have an initial state.
//it should have a list.
describe('<App />', ()=>{
  it('should have an initial state', ()=> {
    const wrapper = mount(App);
    expect(wrapper.state.photos).to.equal({});
  });
  it('should call componentDidMount', () => {
    const wrapper = mount(App);
    sinon.spy(App.protype, 'componentDidMount');
    expect(App.prototype.componentDidMount.calledOnce).to.be.true;
  });
  it('should have a list component', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('List')).to.be.true;
  });
})
