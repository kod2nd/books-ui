import ShallowRenderer from 'react-test-renderer/shallow'
import React, { Component } from 'react';
import Books from './Books'

test('render Books should show a title ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Books />)
    const output = renderer.getRenderOutput()
    expect(output).toMatchSnapshot()
});

test('renders a title and list of books after component mount ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Books />)
    const instance = renderer.getMountedInstance()
    instance.componentDidMount()

    const output = renderer.getRenderOutput()
    expect(output).toMatchSnapshot()
});