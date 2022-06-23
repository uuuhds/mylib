import React from 'react';
import renderer, { act } from 'react-test-renderer';
// import '@testing-library/jest-dom/extend-expect';
import { DefaultMenu } from './AyMenu.stories';
import { AyMenuProps } from './ay-menu';

// const delay = async (miliseconds = 0) => {
//   await new Promise(resolve => {
//     setTimeout(resolve, miliseconds);
//   });
// };

it('renders ay menu', async () => {
  const props = DefaultMenu.args as AyMenuProps;
  await act(async () => {
    const component = await renderer.create(<DefaultMenu {...props} />);
    let tree = component.toJSON();
    // await delay(2000);
    // console.log('tree', tree);
    expect(tree).toMatchSnapshot();
  });
});
