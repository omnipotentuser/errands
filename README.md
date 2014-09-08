errands.io
=======

### Based on Node.js

Runs a list of console tools and prints result of each tool either asynchronously or synchronously

Relies on github.com/chevex/yargs and Nodejs's process and child_process package.

args:
> -h  Help manu.

> -a  Asynchronous handling of commands. Runs sequentially by default.

> -q  Runs commands silently.

> -f  Child process returns error causing errands to abort immediately. Does not affect asynchronous operation.
list output from file descriptor stdout per proc

if a proc failed, print err desc at outcome sync or async

example
-------

`./errands -h  // prints the menu`

`./errands -f bogus 'ps aux'  // exits at bogus`

`./errands -a 'sleep 2' 'echo wake up!' w  // sleeps for 2 seconds, echo wake up! and runs w all asynchronously`
