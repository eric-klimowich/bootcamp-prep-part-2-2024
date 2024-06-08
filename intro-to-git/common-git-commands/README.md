# Common Git Commands

## Learning Objective

By the end of this lesson, you'll be able to:

* Use several of the most common Git commands.

## Let's Dive In

For this lesson, we we'll be following the flow outlined below:

* Read about the concepts on the slides.
* Watch animations of what to expect.
* Try it out on your own in the terminal.

This kind of hands-on practice is crucial. After all, we’re pretty certain no one learned to ride a bike just by reading a how-to.

When you see this icon, it means, Let's test it out yourself and come back when you’re done.”

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)

## The Project at Hand

You were just hired to manage all of the blog content for a media company called Gorilla Army. 

To start, create a directory on your desktop called `GA-Blog`. 

To take advantage of Git superpowers, we have to add a hidden directory called `.git/` to our project directory, which contains all of the data Git needs to operate. This is called “initializing.”

Next, navigate to the `GA-Blog` directory you just created and run this command: 

```bash
git init
```

### You Try...

Run `$ git init` in the  `GA-Blog` directory you just created.

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)


**Caution**: Do not execute this command in your **home directory**! It’ll make working with any other repositories very difficult. Use `pwd` to check your location if you’re unsure.

### Can't Find It?

If you navigate to your `GA-Blog` directory in the GUI, you won’t see any additional files. This is because hidden files aren’t visible on your computer by default. To see the `.git/` directory, you need to run `ls -a` from the command line.

## Status Update

Because you just started at Gorilla Army, your `GA-Blog` directory is empty. We can confirm this by running `git status`, which asks Git to give us an update on our project’s status.

```bash
git status
```

We should get a response like this:

![git status response after init](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/git-status.gif)

Each save we make to our repository is called a **commit**; this message is telling us that our project has no unsaved changes.

### You Try...

Go run `$ git status` in your `GA-Blog` directory.

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)

## Make a File

To create a new text file called `post.txt` you'll use the `touch` command:

```bash
touch post.txt
```
Then, check the status again. Git has identified that a change has been made: There is now a file in your repository. 

![git status response after touch](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/git-status-untracked.gif)

### You Try...

Create a new text file called `$ touch post.txt` inside of `GA-Blog` and check the status again.

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)

## Staging

Like the terminal, Git doesn’t make any assumptions about what changes you want to save and when you want to save them. Instead, you need to explicitly tell it what to do.

To add this change to your next commit, you'll use the `git add` command.

```bash
git add post.txt
```

The command is `add`, but we describe the operation by saying that the file has been “staged.” In other words, it has been added to the list of changes that will be officially saved with our next commit. 

The files on this list aren’t final, and any of these changes can be removed, or “unstaged.”

### You Try...

Add the change to your next commit using the `git add` command.

```bash
git add post.txt
```

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)

## Status Update

If we run `git status` again, we’ll see that the addition of `post.txt` is staged and ready to be committed, like this:

![git status response after add](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-2/git-status-staged.gif)

### You Try...

Run `git status` again.

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)

## For Efficiency's Sake

Sometimes, you’ll want to save all of the changes to files that have been made inside your repository. 

Instead of specifying each file, you can write `git add -A`, which will add all of the files in the working directory to the next commit. 

Proceed with caution when using `git add -A`, as you could accidentally add files with sensitive information.

## It's Not Saved Yet

Once we’re ready to officially record this version of our project, type:

```bash
git commit -m "created a new post.txt file"
```

The `-m` option allows you to include a message that describes the changes you made for your collaborators or future you. 

These should be short but descriptive and clearly indicate what changes each commit makes to the project.

**Note:** In some versions of Git CLI, you will be asked to provide configuration details before committing. <a href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration" target="_blank" rel="noreferrer noopener">Here</a> is a link to additional Git configuration directions. 

## Let's Run That Back

Git allows you to add changes to your project in the local repository with two steps:

```bash
git add <your-file-name>
git commit -m "message"
```

This might be a strange concept to non-developers who are used to clicking a save icon and moving on. For developers, a two-step save process provides benefits, such as making incremental edits to a challenging build and reviewing each file before committing it. 

If you’re curious, you can read more about how developers use the two-step saving process to their advantage <a href="https://softwareengineering.stackexchange.com/questions/69178/what-is-the-benefit-of-gits-two-stage-commit-process-staging" target="_blank" rel="noreferrer noopener">here</a>. 

![git add and commit flow](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-2/git-add-commit.png)

## Commit History

Further into a project, after you’ve made many commits, you might want to look back and see a timeline of those changes. 

Git allows developers to view a list of commits, the submission date, the author, the commit message, and a unique number that identifies the commit, called an **SHA**.

## The Commit History

To view the timeline of changes, you can run:

```bash
git log
```

This will yield a list of entries that looks like this:

``` 
commit 6d33f525a09b9918f75188db164ea2722039830b
Author: Sarah <sarah@gmail.com>
Date: Wed Jan 28 17:44:03 2015 -0500
added a new post
```

### You Try...

Run `git log` to see a timeline of the changes you've made. 

![lab tools to try this in your terminal](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/Icon_Test_Flask_2.png)
