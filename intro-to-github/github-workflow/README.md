# The GitHub Workflow

## Learning Objectives

By the end of this lesson, you'll be able to:

* Describe each step of the GitHub flow.

## Steps to the Flow

The workflow for contributing to an open-source product or your dev team’s project comprises the following steps: 

1. Forking
2. Cloning
3. Editing
4. Adding/committing
5. Pushing
6. Submitting a pull request

![flow of repositories](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/github-flow.gif)

---

### Forking

To add a copy of someone else’s GitHub repository to your GitHub account, fork it by clicking the Fork button in the upper right-hand corner. 

This forked repository is not perfectly identical, but it includes all of the same source files, issues, and commit history.

By forking Joyent’s repository, for example, you now have a full working copy of the Node.js source code to play with. This way, when you break something (which you will), the main repository won’t be affected.

---

### Cloning

To make a local copy of a fork, you’ll clone the repository. This will save the code on your machine so you can edit it.

To do so, open your terminal, navigate to where you’d like to store the repository, then type:

```
git clone https://url-to-clone
```

You can find the URL to clone by clicking the green button that says “Clone or download.”

**Hint**: If you’re following along in Git Bash on Windows, the commands to copy and paste a repository are a little different than the default Windows copy/paste commands. Use `control + insert` to copy and `shift + insert` to paste.

![cloning button in github](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/node-clone.png)

---

### Editing

This is when you make your revolutionary edits to the code and reimagine how Node.js works. Be bold — it's your time to shine!

You’ll do this using a text editor of your choice. <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> is what we will be using. <a href="https://atom.io/" target="_blank">Atom</a> and <a href="https://www.sublimetext.com/" target="_blank">Sublime</a> are also very popular.

---

### Adding and Committing

Once you've cloned a project, you're free to make changes on your computer and manage your **local** version of it: the one living in your computer.

Remember, you’re editing the code on your *local* copy of the repository. We know that any time we do this, we need to use our normal git commands so that our local copy is protected if we goof up. 

Recall these commands: 

```bash
git add <your-file-name>
git commit -m "message"
```

---

### Pushing (Local to Remote)

Once you’ve committed these changes, your local repository will differ from your remote repository. 

To update your remote repository on GitHub, you have to **push** those changes using the `git push origin master` command.

You don't need to worry about the `origin` and `master` part just yet. However, if you’re curious, here’s a brief overview:

* `origin` is a shortcut for the URL of your default remote repository (in this case, the repository on GitHub). You can have many remotes if you want, but we’re only going to work with one for now.
* `master` refers to the **branch** on your remote repository where you are currently adding your changes. Again, for now, we’re just going to be working on the `master` branch.

![local vs remote repositories](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/github-local-remote.png)

---

### Submitting a Pull Request

At this point, your local and remote repositories contain the changes you’ve made. If you want to share these changes with the original repository owner, Joyent, you can submit a **pull request**.

A pull request effectively says, “Hello, maintainer of Project X. I made some changes here in my forked copy, and I think they’re good ones. You should add them to your repository.”   
  
Pull requests are a GitHub feature, so you’ll need to head back to the browser to submit them. 

![pull request button in github](https://ga-instruction.s3.amazonaws.com/assets/tech/developer-tools/intro-to-git-hub/node-pull-final.png)

## Terms Review

That was a lot of new terms, so let's review the main commands involved with tracking work between local and remote repositories:

<details>
  <summary>clone</summary>
  Downloads a repository hosted on a remote server (like github) onto your local machine
</details>

<details>
  <summary>push</summary>
  Moves changes that you've made locally, on your own machine, to the remote version of the repository.
</details>

<details>
  <summary>pull</summary>
  Sets up a request for a repository owner to combine your personal version with the main version of a repository.
</details>

<details>
  <summary>local</summary>
  Your own computer.
</details>

<details>
  <summary>remote</summary>
  A server hosted somewhere other than your own computer, typically Github or other web-hosted service.
</details>

## Knowledge Check

In which step of the GitHub workflow do you initiate a transfer of information **from** your local repository **to** your remote repository? 

<fieldset>
    <legend>Please select one of the following</legend>
    <input type='radio' name='answers' id='answer1' value='answer1'/><label for='answer1'>fork</label><br />
    <input type='radio' name='answers' id='answer2' value='answer2' /><label for='answer2'>clone</label><br />
    <input type='radio' name='answers' id='answer3' value='answer3'  correct='true' /><label for='answer3'>push</label><br />
    <input type='radio' name='answers' id='answer4' value='answer4' /><label for='answer4'>pull</label><br />
</fieldset>

## Resources

* <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control " target="_blank" rel="noreferrer noopener">Version Control: Getting Started</a>
* <a href="https://git-scm.com/book/en/v1/Git-Basics" target="_blank" rel="noreferrer noopener">Git Basics</a>
* <a href="https://softwareengineering.stackexchange.com/questions/69178/what-is-the-benefit-of-gits-two-stage-commit-process-staging" target="_blank" rel="noreferrer noopener">Read</a> how developers use the two-step saving process to their advantage. 
