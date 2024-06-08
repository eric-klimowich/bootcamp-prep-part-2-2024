# Local and Remote Repositories

## Learning Objectives

By the end of this lesson, you'll be able to:

* Define GitHub and its benefits.

## Local vs. Remote

So far, we’ve been making changes locally by editing files and repositories on our computers. That’s all well and good, but what if we want to collaborate with others or back up our files just in case our computer dies? For that, we need to connect our local repository to a remote one.

Enter GitHub.

![local vs remote repositories](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/github-local-remote.png)

## What is Github?

GitHub is a company that’s famous for the platform it built to manage Git repositories in the cloud. 

On GitHub, developers can share their code, comment on it, and review changes. It’s an implementation of the same Git software you installed on your computer, but it also comes with some additional features.

In a lot of ways, GitHub is like Dropbox.

You have a folder in the cloud — your remote repository — that syncs with your computer. You can share this remote repository with others, grant them special permissions, and view different versions of your files.

It also safeguards against data loss due to hardware failures or other issues and is essential for collaboration, enabling developers worldwide to jointly create remarkable projects by sharing their Git repositories.

![github octocat logos](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/github_logo.jpg)

## So, How Do Developers Do This?

Consider a project like Node.js, a JavaScript framework. Node.js is completely open source, which means that anyone can read (and even copy) the code that makes it work — including you! 

The source code is publicly available <a href="https://github.com/nodejs/node" target="_blank" rel="noreferrer noopener">here</a> on GitHub. If you visit the main repository, you’ll see that there are more than 2,000 contributors who have committed changes to Node.js.

Although it’s open source and anyone can read or contribute to its code, Node.js is maintained by a company called Joyent. These contributors don’t have the ability to edit the original Joyent repository — that wouldn’t be very efficient or safe. Someone could accidentally make a change that conflicts with someone else’s contributions, causing the code to break. Changes need to be inspected and approved by Joyent before they can officially be added to the project.

## How are Git and GitHub different?

Git is a CLI tool that provides us with local repositories for tracking changes to our code on our own computers 💻
GitHub is an online web service that provides us with remote repositories stored in the cloud.  We can use it as a place to back up and share our the Git repositories on our own computers. ☁️