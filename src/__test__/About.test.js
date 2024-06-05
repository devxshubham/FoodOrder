import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import { About } from "../pages/About"

test("test for heading", ()=>{
    render( <About />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
}) 

test("for button in about" , ()=>{
    render( <About/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})