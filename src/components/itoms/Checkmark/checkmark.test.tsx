import Checkmark from "./index";
import {render} from '@testing-library/react'

it("prerender correctly", ()=>{
render(<Checkmark />);
const svg = document.querySelector('svg');
const path = document.querySelector('path')
expect(svg).toBeInTheDocument();
expect(path).toBeInTheDocument()
})