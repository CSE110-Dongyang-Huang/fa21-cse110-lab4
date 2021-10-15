1. 20
2. 20
3. 20
4. Error returned. This is because `let` variables are only effective in that specific scope. Line 13 is out of that scope, so error is triggered.
5. Error returned because we modify `const` variables, but they should not be assigned new values once they are initialized a value.
6. Since Line 9 has triggered an error, this line will not be executed. However, if we comment out Line 9, error will still happen because `result` is out of the scope where it declares.