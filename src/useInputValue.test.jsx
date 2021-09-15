import { renderHook, act } from '@testing-library/react-hooks';
import {useInputValue} from './useInputValue'

describe('Testing useInputValue', () => {
  it('should have value', () => {
    const {result, rerender} = renderHook(() => useInputValue('ROni'))
    act(() => result.current.onChange({target: {value: 'succes'}}))
    expect(result.current.value).toEqual('succes')
  });
})
