Calculator that meets the following requirements:
● We expect the calculator to evaluate the following expressions. You can use
the examples of input -> output for testing.
○ Value, e.g. “3.2” -> “3.2”
○ Factorial, e.g. “factorial 5” -> “120”
○ Highest prime number under a given value, e.g. “prime 10” -> “7”
○ Highest Fibonacci number under a given value, e.g. “fibonacci 12” ->
“8”
○ Addition, e.g. “+ 12.5 12.5” -> “25”
○ Subtraction, e.g. “- 43.7 50” -> “-6.3”
○ Multiplication, e.g. “* 6 -12” -> “72”
○ Division, e.g. “/ 20 10” -> “2”
○ Long arithmetic expressions, e.g. “+ 2 3 4 10” -> “19”
○ Nested expressions where parentheses surround subexpressions,
e.g. “/ (factorial (* 2 2 5)) 600” -> “12096”
○ Expressions with contiguous whitespace, e.g. “\t 3.22 “ -> “3.22”
● The input is a string and the output is a string.
● Operators prefix their operands in expressions.
● It handles integers, floating-point numbers and negative numbers.
● It removes the fractional part of the result if the said fractional part is
equivalent to 0, e.g. 4.0 becomes 4.
● It gracefully handles overflows.