# Version Control

## Learning Objective

By the end of this lesson, you'll be able to:

* Explain why Git is an important tool for developers.

## Git on the CLI

At this point, you’re capable of navigating your file structure and interacting with your computer via the Command Line. 

This is an important skill for a developer to have, but we should expand a bit on the developer-specific capabilities the CLI offers. In particular, the ability to share and manage the codebase of programming projects using `git`.

Let’s dive in.

## Making Copies

You’re on your computer plugging away at a research project, and it’s all going well. You make some changes and hit “Save.” Then you realize: Those last changes you made? They were all wrong. You need to undo them, but you can’t. The previous version is already gone for good. 

You might already have a system in place for avoiding such a mishap — maybe you save your document multiple times under different names so you can return to a previous stage of the project. Smart!

Developers call this process **version control**.

![multiple txt files](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/git-for-version-control/version-control.gif)

## Let's Drive That Home

This kind of capability may be a foreign concept, as most of us get by without version control in other industries; however, version control is non-negotiable for developers. 

### Why?

As developers, version control lets us:

* Review changes made over time and see who did what.
* Work with others.
* Experiment without impacting the main codebase. If the new idea works, it can be added to the main project.
* Return to an older version, particularly useful if a bug has been introduced into the code.
* Work offline, then sync later when reconnected.

Development is an iterative process with a lot of dependencies. Imagine if a sentence you wrote on the first page of that research paper impacted a sentence on Page 15 — as in, ruined it. 

Lines of code do not live independently like sentences in a document. Any line of code that is added or removed could make major changes to the program as a whole. Hence, the emphasis on version control for developers.

## Git repository

A Git repository (aka Git repo, or just repo) is essentially a copy of a project. What makes the repo special is that it holds key details for every line of code in a project regarding:

- Who touched which part of the code.
- What they changed.
- When it happened.

This information helps developers use Git to collaborate, track changes through time, or even revert to previous versions when necessary.

Git repositories can be stored locally on a developer's machine or hosted on remote servers like GitHub.

## Getting On Board with Git

Software developers have created a number of tools to solve this version control problem for their own projects: Subversion, CVS, Perforce, and many others.

In fact, some companies, like Google, have developed their own special kinds of version control.

 In this course, we’ll focus on one particularly popular program that's accessed via the Command Line Interface called **Git**.

Git offers a variety of advantages to its users, including:

* Rolling back changes.
* Rolling forward changes.
* Mitigating competing versions of the same file.
* Tracking changes for multiple files.
* Recording only the *changes* made rather than saving entire separate versions of each file.
* And many more...
