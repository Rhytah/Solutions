Hello Student,
Great progress so far on the task. Just a couple of issues we need to clean up in order for you to implement the class methods.

1. We need to ensure that the code syntax and indentation is correct.
- A handy python package I use to check these, I use `pycodestyle`
```
./code_submission.py:3:1: E302 expected 2 blank lines, found 0
./code_submission.py:3:18: E231 missing whitespace after ','
./code_submission.py:3:30: E231 missing whitespace after ','
./code_submission.py:3:42: E231 missing whitespace after ','
./code_submission.py:5:1: E305 expected 2 blank lines after class or function definition, found 0
./code_submission.py:6:1: E302 expected 2 blank lines, found 0
./code_submission.py:9:1: E302 expected 2 blank lines, found 0
./code_submission.py:10:1: E112 expected an indented block
./code_submission.py:11:1: E112 expected an indented block
./code_submission.py:12:1: E112 expected an indented block
./code_submission.py:13:1: E112 expected an indented block
./code_submission.py:14:1: E112 expected an indented block
./code_submission.py:14:1: E305 expected 2 blank lines after class or function definition, found 0
./code_submission.py:20:1: E128 continuation line under-indented for visual indent
./code_submission.py:23:1: E112 expected an indented block
./code_submission.py:24:9: E117 over-indented
./code_submission.py:25:5: E901 IndentationError: unindent does not match any outer indentation level
```
- For every variable declared. You need to put on a new line
line 2 `hasBeenRead = False messageText = text fromNumber = number`

Indentation is paramount in python. 
- Line 3 should be indented further into the `class SMSMessage(object):`
  
- Line 5 is out-indented. It needs to be aligned with line 4
```
def __init__(self,hasBeenRead,messageText,fromNumber):
    self.hasBeenRead = False self.messageText = text
self.fromNumber = number
```
- Line 6,
def MarkAsRead is a class method so it needs to be defined within the class
An example of this put together  indentation

```
class SMSMessage(object):

    def __init__(self,hasBeenRead,messageText,fromNumber):
        .....
    def MarkASRead(self):
        .....
def add_sms():
    .....
```

- From line 9 - 13, The method definitions need to be adjusted to have proper syntax. For instance
```
def add_sms():
    #add function logic here
    return
```

- line 19 - line 20 need to be on the same line. Alternatively use the back slash  `\` to indicate that the string continues to the new line.
```
    userChoice = input("What would you like to do \
     -read/send/quit?")
```

2. commenting code
 - Make use of comments to make your code self-documenting. It makes it easier for one to follow your line of thought

3. Declare the class appropriately
- This needs to be done on line 2. Remember to indent the following logic as mention in `1` above.

