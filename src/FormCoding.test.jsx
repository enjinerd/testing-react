import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormCoding from './FormCoding.jsx'

describe("FormCoding Testing", () => {
  beforeEach(() => {
    render(<FormCoding />)
  })

  it("Should show form", () => {
    const form = screen.getByTestId("form_regis")
    expect(form).toBeInTheDocument()
  })  

  it('Should show form title', () => {
    const title = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i)
    expect(title).toBeInTheDocument()
  })

  it("Onchange input function", () => {
    const input = screen.getByTestId("input_nama")
    expect(input).toHaveValue("")
    userEvent.type(input, "Roni")
    expect(input).toHaveValue("Roni")
  })

  it("Check submit alert", () => {
    const alert =  jest.spyOn(window, 'alert').mockImplementation()
    const button = screen.getByTestId("btn_submit")
    userEvent.click(button)
    expect(alert).toBeCalled()
  })

})
