import { compute } from ’./compute’ ;
describe ( ’compute’, () => { // suite
     it (’shouldreturn 0 if input is negative’, () => {
          constresult = compute (−1);
          expect (result).toBe(0);
     })
     it (’should increment if input is positive’, () => {
          constresult = compute (1);
          expect (result).toBe(2);
     })
})

