import {expect, test} from "@jest/globals";
import {fizzBuzz} from "../src/fizz-buzz";

test("FizzBuzz test", () =>{
    expect(fizzBuzz(2)).toBe("1 2 ");
    expect(fizzBuzz(3)).toBe("1 2 Fizz ");
    expect(fizzBuzz(5)).toBe("1 2 Fizz 4 Buzz ");
    expect(fizzBuzz(15)).toBe("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz ");
});