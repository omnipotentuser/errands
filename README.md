errands.io
=======

### Based on Node.js

Runs a list of console tools and prints result of each tool either asynchronously or synchronously

Relies on github.com/chevex/yargs and Nodejs's process module.

yargs extracts the command line args.

args:
> -h = help
> -a = async // sequentially by default
> -q = quiet
> -f = stop on fail. In other words, Sepquential only. By default, does not fail if at least one proc aborts.
list output from file descriptor stdout per proc
> if a proc failed, print err desc at outcome sync or async
