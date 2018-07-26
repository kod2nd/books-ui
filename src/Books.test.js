import ShallowRenderer from 'react-test-renderer/shallow'
import React, { Component } from 'react';
import Books from './Books'

test('render Books should show a title ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Books />)
    const output = renderer.getRenderOutput()
    expect(output).toMatchSnapshot()
});

test('renders a title and list of books from the mock fetch dat after component mount ', async () => {
    fetch.mockResponseOnce(JSON.stringify([
        {
            title: "Harry Potter",
            _id: "203480580235"
        },
        {
            title: "John wick",
            _id: "230831080124"
        }
    ]
    ))

    const renderer = new ShallowRenderer();
    renderer.render(<Books />)

    const instance = renderer.getMountedInstance()
    await instance.componentDidMount()

    const output = renderer.getRenderOutput()
    // expect(output).toMatchSnapshot()
});