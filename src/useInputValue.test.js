import { renderHook } from '@testing-library/react-hooks';
import useInputValue from './useInputValue'

describe('Testing useInputValue', () => {
  it('should have value', () => {
    const {result, rerender} = renderHook(() => useInputValue(12));
    console.log(result.current.value) 
  });
})
