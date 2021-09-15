import { render, screen, waitFor, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Search from './Search'
import axios from 'axios'
import React from "react";
jest.mock('axios');


describe("Search testing", () =>{
  test("Should render Search", () => {
    render(<Search/>)
    const search = screen.getByTestId('search')
    expect(search).toBeInTheDocument()
  })

  test("Error test render", async() => {
    await render(<Search/>)
    await act(async () => {
       await userEvent.click(screen.getByTestId('btn_cari'))
    })
    const items = await screen.findByText(/Ada yang error .../i)
    expect(items).toBeInTheDocument()
  })
})

