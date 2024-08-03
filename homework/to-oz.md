# To Oz? To Oz!

Practice working with the command line by helping Dorothy and her gang navigate
their way through Oz!

## Prerequisites

- Working with the command line

## Instructions

* Work through the prompts below, adding the solution to each prompt to the
   body of your issue
* When you finish, submit your issue.

## Requirements

Work through the following prompts:

### Part 1: Setup

1. Create a directory called `cli-practice-lab`
2. Navigate into the `cli-practice-lab` directory
3. Create directory `kansas/`
4. Add files: `farm` and `family` to `kansas/`
5. Create directory `oz/`
6. Add the files `dorothy` and `toto` to `oz`
7. Add files for the 4 Witches to `oz/`...
   - `good_witch_of_the_north`
   - `wicked_witch_of_the_east`
   - `good_witch_of_the_south`
   - `wicked_witch_of_the_west`

<br>

---

### Part 2: Ding! Dong! The Witch is Dead

8. Delete: `wicked_witch_of_the_east`
9. List out everything in `oz` to see who's all there.

---

### Part 3: Follow the Yellow Brick Road

In the directory `oz/`...

10. Add file for `scarecrow`
11. Add file for `tin_man`
12. Add file for `cowardly_lion`
13. Create directory `emerald_city/`
14. Add `wizard` to `emerald_city/`

<br>

---

### Part 4: You Must Win Against the Witch

15. Add `flying_monkeys` to `oz/`
16. Remove `wicked_witch_of_the_west`

<br>


### BONUS: Give Gifts and Learn "There's No Place Like Home"

These next couple of steps are a little more advanced, but give it a try!


17. Now, it's time to give the gifts to the gang! 🎁
      - Give `scarecrow` a `"diploma"`
      - Give `tin_man` a `"heart shaped watch"`
      - Give `cowardly_lion` a `"medal"`
      - Give `dorothy` a pair of `ruby_slippers`
 
**Hints:**
- To give gifts, `echo` the gift name into the appropriate file.
- Google "how to redirect output of echo to a file"
<br>


18. Now, Dorothy is homesick, let's get her back to Kansas. 🏠
    - Move `dorothy` and `toto` back to `kansas/`

**Hints:** 
- Google and use the `mv` command to move files between directories
- Navigate to the `cli-practice-lab` directory before moving the files
<br>


## Solution

Try not to peek!

<details>

<summary> 🔎 Possible Solution</summary>
   
```markdown

## Part 1: Setup

1.  mkdir cli-practice-lab
2.  cd cli-practice-lab
3.  mkdir kansas
4.  touch kansas/farm kansas/family
5.  mkdir oz
6.  touch oz/dorothy oz/toto
7.  touch oz/good_witch_of_the_north oz/wicked_witch_of_the_east oz/good_witch_of_the_south oz/wicked_witch_of_the_west

> question 7 can also be done in 4 seperate commands, one for each witch.

## Part 2: Ding! Dong! The Witch is Dead

8.  rm oz/wicked_witch_of_the_east
9.  ls oz

## Part 3: Follow the Yellow Brick Road

> cd into the directory oz

10. touch scarecrow
11. touch tin_man
12. touch cowardly_lion
13. mkdir emerald_city
14. touch emerald_city/wizard

## Part 4: You Must Win Against the Witch

> if you are not already in the oz directory, cd into it

15. touch flying_monkeys
16. rm wicked_witch_of_the_west

## Part 5: Give Gifts and Learn "There's No Place Like Home"

17a. echo "diploma" > scarecrow
17b. echo "heart shaped watch" > tin_man
17c. echo "medal" > cowardly_lion
17d. echo "ruby_slippers" > dorothy

> You can check the contents of the files with `cat`. For Example, `cat scarecrow`.

18. cd cli-practice-lab  
    mv oz/dorothy oz/toto kansas/

```
</details>


