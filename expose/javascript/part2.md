1. It will print `3` This is because `price.length = 3`. So when the for loop ends, `i` would have a value of `3`. And since `var` supports function scope, it can still be accessed. So, `3` would be printed.
2. `150` will be printed. This is because when the for loop ends, `discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150`. Since `var` is function scope, it can still be accessed. So, `150` would be printed.
3. `150` will be printed. This is because when the for loop ends, `finalPrice = Math.round(150 * 100) / 100 = 150`. Since `var` is function scope, it can still be accessed. So, `150` would be printed.
4. The function will return the discounted prices of `prices` which is a list consisting `[50, 100, 150]`. This is because the returned list `discounted` is pushed by values after calculating discounts for `prices` (i.e. `finalPrice`). Based on the updated values of `finalPrice`, we got `[50, 100, 150]` held in `discounted` which will be returned.
5. Error *ReferenceError: i is not defined* is triggered because the `i` was declared within the for loop scope. Notice that `let` is block scope, and line 12 is out of that scope so an error happens.
6. Error *ReferenceError: discountedPrice is not defined* is caused because the `discountedPrice` was declared within the for loop scope. Notice that `let` is block scope, and line 13 is out of that scope so an error happens.
7. `150` is printed because firstly it is within the scope it defines. Other than that, when the for loop ends, `finalPrice = Math.round(150 * 100) / 100 = 150`. So `150` is printed.
8. The function will return the discounted prices of `prices` which is a list consisting `[50, 100, 150]`. This is because the returned list `discounted` is pushed by values after calculating discounts for `prices` (i.e. `finalPrice`). Based on the updated values of `finalPrice`, we got `[50, 100, 150]` held in `discounted` which will be returned.
9. Error *ReferenceError: i is not defined* is triggered because the `i` was declared within the for loop scope. Notice that `let` is block scope, and line 12 is out of that scope so an error happens.
10. `3` is printed because `length = prices.length = 3`. It is in scope and `length` is not modified anymore once it is initialized. So, `3` is printed.
11. The function will return the discounted prices of `prices` which is a list consisting `[50, 100, 150]`. This is because the returned list `discounted` is pushed by values after calculating discounts for `prices` (i.e. `finalPrice`). Based on the updated values of `finalPrice`, we got `[50, 100, 150]` held in `discounted` which will be returned.
12. 
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting()
    - D. student["Favorite Teacher"].name
    - E. student.courseLoad[0]
13. 
    - A. 32. `2` is converted to string and concatenated to `3`.
    - B. 1. `3` is converted to number and do the subtraction.
    - C. 3. Since `null = 0`, then 3 + 0 = 3.
    - D. 3null. `null` is concatenated to `3`.
    - E. 4. Since `True = 1`, then 3 + 1 = 4.
    - F. 0. Because `False = null = 0`, then 0 + 0 = 0.
    - G. 3undefined. `undefined` is concatenated to `3`.
    - H. NaN. Subtraction between string and undefined are not supported, so NaN is printed.
14. 
    - A. True. `2` becomes number so `2 > 1` is valid.
    - B. False. String comparion is based on indexing starting at the beginning of the strings. Since `'2' > '1'` at the first index, it is false.
    - C. True. The '2' at the right side becomes number. So, `2 == 2` is valid.
    - D. False. `===` is strict camparison which also checks datatypes. Since 2 and '2' are not as the same datatype, it is false.
    - E. False. The numerical expression of `true` is 1. Since `1 != 2`, it becomes false.
    - F. True. `Boolean(2) = 1` and `true = 1` so that `1 == 1`. It returns true.
15. `==` is a non-strict equality which automatically tries to match datatypes of two sides, so it will return true as long as they hold the same value. `===` is a strict equality which also considers datatypes. It would return true if they are exactly having same datatypes and values.
17. `[2, 4, 6]` will be returned from the function `modifyArray`. When we pass `doSomething` to `modifyArray`, it does not have any parameters. The time we call `doSomething` with parameters is when we push values into `newArr` which will later be returned. Since `doSomething` will return the doubled value as it passes in, `newArr` will have values that are doubled as the original one. Since the old array has values `[1, 2, 3]`, we now have `[2, 4, 6]`.
19. It would print `1`, `4`, and `3` shorly at the same time. After 1 second, it prints `2`.