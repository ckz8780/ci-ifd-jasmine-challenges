describe("Drink Test", function() {
    describe("whatCanIDrink() function", function() {
        it('should return "Sorry. I can’t tell what drink because that age is incorrect!" if age is less than 0', function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it('should return "Drink Toddy" if age is between 0 and 13', function() {
            expect(whatCanIDrink(0)).toBe("Drink Toddy");
        });
        
        it('should return "Drink Coke" if age is between 14 and 17', function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });
        
        it('should return "Drink Beer" if age is between 18 and 20', function() {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        });
        
        it('should return "Drink Whiskey" if age is between 21 and 129', function() {
            expect(whatCanIDrink(22)).toBe("Drink Whiskey");
        });
        
        it('should return "Sorry. I can’t tell what drink because that age is incorrect!" if age is 130 or greater', function() {
            expect(whatCanIDrink(131)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});

describe("FizzBuzz Test", function() {
    describe("The fizzBuzz() function", function() {
        it('Should return "Fizz" if the number is evenly divisible by 3.', function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        
        it('Should return "Buzz" if the number is evenly divisible by 5.', function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        
        it('Should return "FizzBuzz" if the number is evenly divisible by both 3 and 5.', function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        
        it('Should return the submitted number if the number is evenly divisible by neither 3 nor 5.', function() {
            expect(fizzBuzz(16)).toBe(16);
        });
        
        it('Should return "The argument you submit must be a number!" if the type of argument submitted is anything other than a number.', function() {
            expect(fizzBuzz("bacon")).toBe("The argument you submit must be a number!");
        });
    });
});