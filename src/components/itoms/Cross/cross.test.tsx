import {render} from '@testing-library/react';
import Cross from './index';

it("prerender correctly", () =>{
     render(<Cross />)
  const iconElement = document.querySelector('svg')
  const pathElement = document.querySelector('path')
  expect(iconElement ).toBeInTheDocument()
  expect( pathElement).toBeInTheDocument()
})