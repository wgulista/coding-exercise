# THE CODING EXERCISE

You will write a program which takes a text file as input, extracts
data, computes some stuff, and then outputs that stuff.

# THE INPUT

The input file contains people's names as well as some other data.
Here's an example of the input:

Schuppe, Suzanne -- velit
Expedita nihil ad aut similique facilis numquam blanditiis.
Cronin, Bella -- tempore
Omnis quos veritatis ea sequi est nostrum.
Ex eum architecto ab vel non pariatur.
Runolfsson, Dayna -- molestias
Maiores facilis ut consequatur.
Robel, Deshawn -- quisquam
Rerum sit aut et.

The names are in Lastname, Firstname format. You can make a
simplifying assumption that all names contain only letters. (Names
which don't conform to this assumption can be ignored.)

After each line with a name, there will be one or more lines with
random prose.

Along with this problem statement you will have also received a sample
data file which you can use during the exercise. (We will run your
program against a number of data files.)

# THE OUTPUT

Output should be written to standard out. The answers to these four
questions should be output.

## Question #1

Print out the number of unique full names, first names and last names,
like so:

There are 482 unique full names.
There are 188 unique first names.
There are 46 unique last names.

## Question #2

Print to standard out the 10 most common first names along with the
number of times the name appeared in the file in descending order.
Don't worry about tie scores.

The ten most common first names are:
Robert (12)
Alessandro (11)
Burnice (11)
Ara (10)
Evalyn (10)
Bailee (10)
Sonia (10)
Zoie (9)
Claudie (9)
Nasir (9)

## Question #3

Print to standard out the 10 most common last names along with the
number of times the name appeared in the file in descending order.
Don't worry about tie scores.

The ten most common last names are:
Kuhic (7)
Rosenbaum (7)
Marks (6)
Denesik (5)
Ernser (5)
Balistreri (4)
Beer (4)
Harber (4)
Kuvalis (4)
Reynolds (4)

## Question #4

A) This one is a little more complicated. The first step is to identify
the first 25 completely unique names in the file.

For example (for this list):

Smith, Fred // Unique! We haven't seen "Fred" or "Smith" yet
Patel, Fred // Not unique. We've seen "Fred"
Patel, Betty // Not unique. We've seen "Patel"
Chang, Sarah // Unique! We haven't seen "Sarah" or "Chang" yet

So, from the list above, the first 2 unique first and last names are:

Smith, Fred
Chang, Sarah

B) Next, we want to generate 25 new unique combination of names (first and last name)
using the names we gathered in the step A (using any method).  
These names must be new and unique and not appear in the original set of 25 names.

The output should look like:

The new 25 unique names are:
Auer, Korey
Harvey, Elta
Grady, Marcella
// And so on ...

# Use

-   yarn install
-   yarn start

# Version 2 Refactor

-   cd version2
-   yarn install
-   yarn start
-   cat output.txt
