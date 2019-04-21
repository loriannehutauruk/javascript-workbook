* get user input (startStack, endStack) and then check the rules of the game based on the current stack object and user input.

* whenever we want to move a # we must check its value to make sure it is less than the # you are trying to place it on.

* to move a number we need to update the stacks object using our user input (startStack, endStack)

* check that 'a' is not a winner at all (test1)

* to determine that the game has been won, check that either 'b' or 'c' has all the numbers in descending order (greatest to least) (test)

* should only be ale to remove a number from the ends or an array and place it on the end of antoher array

* we can always move numbers into an empty array

* if you choose from an empty stack or one that doesn't exist, the stacks won't be updated and message will be console logged out saying "choose a valid stack"

* add the three tests that you want to run  