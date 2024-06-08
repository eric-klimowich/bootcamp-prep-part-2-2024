# Version Control with Git

## Learning Objective

By the end of this lesson, you'll be able to:

* Describe the phases of Git tracking.

## Putting it All Together: Prep


* Open your terminal and navigate to the directory you’ve been using to store information about this course. If you don’t have one yet, make one. 
* Create a directory inside of that called `git-practice`.
* Navigate into that new directory. You can make sure you’re in the right place using the `pwd` command.
* Use `git init` to create a Git repository in the `git-practice` directory.

**Note**: Before running `git init`, make sure you’re not already inside another Git repository. Type `git status`. If you see `fatal: Not a git repository (or any of the parent directories): .git`, then you know you’re good to go and you can safely run `git init` within this folder.


## Putting it All Together: Add and Commit

* Staying in the `git-practice` directory, run the `ls -a` command to see the `.git` directory you’ve just created.
* Create a new file called `README.txt` and run `git status`. What output do you get?
* Use the `git add README.txt` command to add the new file to the staging area. 
* Run `git status` again. **How has the output changed?**
* Now, commit the changes you made using `git commit -m "..."`. Give the commit an appropriate message. Remember, it should be short but descriptive.

You did it! In due time you’ll be able to complete this process with your eyes closed (although we don’t recommend it).

## Check out these resources from Git:

* <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" target="_blank">Version Control: Getting Started</a>
* <a href="https://git-scm.com/book/en/v1/Git-Basics" target="_blank">Git Basics</a>
* <a href="https://softwareengineering.stackexchange.com/questions/69178/what-is-the-benefit-of-gits-two-stage-commit-process-staging" target="_blank">Read</a> how developers use the two-step saving process to their advantage. 