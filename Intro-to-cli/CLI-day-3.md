[![General Assembly Logo](https://cdn.cookielaw.org/logos/8940117c-e735-4010-9984-0b12ad7dc7fc/cec765fd-1887-4e23-8fe2-24147842eac8/7748ce35-3f26-4dc4-8748-08e679425095/CMYK-Red-Black_Small_GeneralAssembly-Stacked.png)](https://generalassemb.ly/education/web-development-immersive)

# The CLI (Command Line Interface)

## Learning Objectives

- Define and explain the strengths and weaknesses of GUIs and CLIs
- Learn how to access the terminal and break down its components
- Describe the file system and how it relates to the CLI
- Introduce common commands and list unsafe ones
- Learn how to find more information on using commands

## Framing

The majority of our interactions with computers is through a graphical user
interface, or a GUI. A GUI is a great tool -- it adds a level of user experience
that allowed computers to become more popular and mainstream.

The Command Line Interface (CLI) is a text-based way of interacting with your
computer, that gives you more abilities than a GUI has, but with a higher
learning curve.

The CLI works by typing commands (running programs) into a terminal and the
computer executes those commands or gives you a fairly descriptive error
regarding why it did not work.

While the GUI is perfect for the average computer user, there are drawbacks for
users like us. The CLI offers many benefits:

- **Power/Speed.** Most tasks can be completed faster with the cli. Features
  like tab completion, command history (hitting the up arrow in your terminal),
  and piping contribute to this.

- **Precision.** Each command does only one thing and we can read them and
  understand what they do before we run them.

- **Repeatability / Scriptability.** These commands can be saved and reused by
  others. What you did during Installfest was run a script that we shared with
  you!

- **Tools.** There are a lot of open source tools that you can use on the cli,
  you can install them with cli package managers like Advanced Packaging Tool
  (apt) on Linux or Homebrew on MacOS. Because each tool does one specific
  thing, it is possible to chain multiple tools together to automate processes.

- **Debugging.** The errors are better, the errors that you get from a GUI can
  be unhelpful while cli errors are generally more thought out and descriptive.

## CLI Basics

### The Terminal and the Shell

We need to run a terminal application.

The default shell used by terminal is called
**Bash** or **ZSH** on MacOS Catalina or later. There are other shells but all
operate very similarly.

Let's fire up our terminals and get exploring!

### Open Terminal

- `⌘ (Command) + Space`, or open Spotlight
- type "Terminal"
- `Enter`

![](https://i.imgur.com/CvggrYa.png)

When Terminal launches, it will start in your computer's home directory
(whatever you named your computer). Your home directory is denoted by the tilde
`~`.

The prompt is the shell asking for input; when you see `$ <something>` in
documentation, it generally means, input this command into a shell.

If you have a terminal open but do not see a prompt, that means that the shell
is not ready to receive input.

> What is a command?

A command is a program. Some come built into the shell and provide the basics
for interacting with the operating system and some are written by programmers
(like you!) to provide further functionality.

### Basic Commands

#### Print working directory: `pwd`

`pwd` will print the current working directory. It shows you a `path`. This
`path` shows you where you are currently located in the filesystem. It's like
sending up a flare or homing beacon, where you can see how far you have
'traveled' from the root directory.

![](https://i.imgur.com/4aaT88x.png)

You can think of a path as being similar to an address. There are two types of
paths: _absolute_ and _relative_.

<details>

<summary>
Absolute vs Relative 
</summary>

A _relative_ path is similar to giving someone directions to a destination from
their current location. Where is General Assembly? Two blocks up 15th street
from where you are now.

An example of an _absolute_ path to General Assembly could be 1133 15th St NW,
8th Floor, Washington, DC 20005 or a longitude and latitude(38.9048728,
-77.0340283).

An absolute path is comparable to giving someone the direct location from a
universally known starting point. On the command line that known starting point
is the root directory.

</details>

#### List: `ls`

- `ls` - Lists the contents of the current directory. You can see:
  - the immediate _child_ directories (the directories inside this directory)
  - the files in this directory

![](https://i.imgur.com/H2RTUny.png)

Bash commands can take `flags` or options denoted by a dash `-`

- `ls -a` - list content including hidden files and directories. Hidden files
  and directories begin with a period, for example, `.git`.
- `ls -l` - list content and give meta information about each item

Directories (folders) can have directories within them, and there can be
directories inside _those_ directories, ad infinitum. This creates a tree
structure where directories can have many children with many different branches.

![](http://i.imgur.com/M6OgKZJ.png)

#### Change Directory: `cd`

We can navigate to other directories _relative_ to the current working
directory.

- `cd some_directory`
  - navigates into a child directory called `some_directory`. `some_directory`
    is a child of the current directory.
- `cd ..`
  - navigates into the parent of the current directory
  - `..` is shorthand for parent
- `cd` or `cd ~` will take you back home

### Create Files & Folders from Terminal

Now that we can navigate the file system, let's learn how to create, modify, and
delete files and folders.

#### Make Directory: `mkdir`

- Makes a directory (folder) in a location _relative_ to the current directory
- Example:
  - `mkdir directory_name`
    - makes a directory called 'directory_name'`

#### Create File: `touch`

- creates an empty file in a location _relative_ to the current directory
- A file typically will have a **file extension** like `.txt` whereas a
  directory will not.
- Example:
  - `touch file.txt`
    - makes a .txt file

#### Remove: `rm`

- Deletes a file with no confirmation
- There is no `trash` to recover removed files from so use with caution.

#### Remove Directory: `rmdir`

- Deletes a directory. Similarly to `rm`, no confirmation or trash to recover
  from, so proceed cautiously.

### Danger Zone:

#### Remove recursively and forcefully: `rm -rf`

This command deletes files and folders _recursively_ and by _force_. It deletes
all the contents of folders and can be dangerous, so use cautiously!

## Flags

In the `rm -rf` command, the letters `r` and `f` are _flags_. Flags are extra
options you can optionally add to commands. They modify the behavior of the
command.

In the `rm -rf` example, there are two flags

- `-r`: recursive, delete all nested files and directories
- `-f`: force, ignore permissions and do not ask for confirmation

## You do: Create SEB Environment (5 minutes)

To get your hands dirty, use the commands above to build out the following
folders and files. This will be where you store all your work from SEB.

```sh
seb
  ├── labs
  ├── lessons
  ├── projects
  ├── sandbox
```

- **`labs`** - For your lab and homework assignments.
- **`lessons`** - For your class lectures and notes.
- **`projects`** - For your end of program project.
- **`sandbox`** - For quick experimentation.
- _Feel free to add more folders or organize this so it makes the most sense to
  you. The most important thing is that it's orginized so that you can easily
  find and utilize your files efficiently._

<details>

<summary>
Solution
</summary>
  
<hr>
  
Make new directories with `mkdir`
  
<hr>

```sh
  mkdir labs lessons projects sandbox
```

Make file with touch

```sh
  touch lessons/cli_intro.md
```

</details>

## Time to Practice!

There are MANY more CLI commands to learn, more than we could cover in an entire
day. There are two "cheatsheets" linked in this repo
[here](cheatsheets/cli-cheatsheet.md) and
[here](cheatsheets/additional-cli-cheatsheet.md) that are good references for
CLI.

Throughout this course, you'll find that the best way to learn a new skill is to
gain a foothold in the topic, then wrestle with the material on your own and
with the support your teammates and instructors to deepen your understanding.

Labs give us the opportunity to do so, and they will almost always ask you to
look up how to do things we didn't cover in the lecture. This is intentional and
will help grow your meta-developer skills -- belief in your ability to learn new
things and teach yourself, as well as improving your ability to Google and sift
through resources like MDN, W3 Schools, and Stack Overflow.

## Closing

The commands we've covered in this lesson will probably account for 80% of your
CLI usage.

## Additional Practice / Bonus Material

- [Learn You Bash](https://github.com/denysdovhan/learnyoubash)
- [Command Line Power User](https://commandlinepoweruser.com/)
- [Awesome Bash](https://github.com/awesome-lists/awesome-bash)

## More Terminal Keyboard shortcuts

Reduce your reliance on the mouse and get in the habit of using these keyboard
shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` Move cursor by word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U

`cd -` toggle previous directory

There are also video tutorials
[here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx).
