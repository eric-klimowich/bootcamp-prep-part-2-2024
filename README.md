<img src="https://i.imgur.com/XseXU8J.png" width="900">

<br>

# General Assembly Bootcamp Prep - Part 2

### Contents

- [👋 Welcome back to Bootcamp Prep and Introductions](#-welcome-to-bootcamp-prep---part-2--introductions)
- [🏫 Link to the Topics](#-topics)
- [📋 Link to the Class Zoom Room](#-link-to-the-class-zoom-room)
- [🧑‍🏫 Instructional Team / Contact Info](#-instructional-team-contact-information)
- [📝 Additional Coding Practice Resources](#-additional-coding-practice-resources)
- [🪴 Becoming Familiar With the GitHub Workflow](#-becoming-familiar-with-the-seb-github-workflow)
- [🏆 How to Succeed in SEBR](#-how-to-succeed-in-sebr)
- [📈 Growth Mindset](#-growth-mindset)

### 👋 Welcome to Bootcamp Prep - Part 2 & Introductions

Welcome to Part 2 of General Assembly's Software Engineering Bootcamp Prep! Let's all introduce ourselves! 
Say your:
- Name (preferred name)
- Your pronouns
- Where you're located
- What you were doing before this 
- What brought you here to GA

### 📋 Topics

| Lesson | Skills & Learning Objectives |
| ------ | ---------------------------- |
| [Installfest](./installfest/README.md)         | Your first hands-on experience in setting up a development environment as an aspiring developer!  |
| [Intro to GitHub](./intro-to-github/README.md) | Define GitHub, its benefits, and its workflow.                                                    |
| [Intro to Git](./intro-to-git/README.md)       | Why is Git such an important too for developers?                                                  |
| [Intro to the CLI](./Intro-to-cli/README.md)   | Access your computer’s command line interface (CLI) and start using it to navigate your computer. |
| [Control Flow](./control-flow/README.md)       | Have your applications make decisions based on certain conditions using logic.                    |
| [Functions](./functions/README.md)             | Write blocks of code you can run on command to perform a specific routine.                        |
| [Advanced HTML](./advanced-html/README.md)             |  Build well-organized web pages using foundational tags and semantic elements for better accessibility and SEO.                       |
| [Advanced CSS](./advanced-css/README.md)             | Master the use of CSS files to style web pages, manage layouts, and implement responsive design.                        |
| [Responsive Design](./responsive-design/README.md)             | Create layouts that adapt to different screen sizes using flexible grids, media queries, and relative units.                        |
| [DOM](./dom/README.md)             | Understand the DOM to interact with, update, and dynamically create HTML elements using JavaScript.                        |
| [DOM Events](./dom-events/README.md)             |  Enhance web interactivity, master event listener syntax, and create in-memory elements for dynamic addition to the DOM.                     |
| [Pokemon Game](./gameboy/README.md)             | Engage in a comprehensive exercise to master JavaScript and DOM manipulation by creating a dynamic web game.                       |

This will be your shared class repo!


### 🏫 Link to the Class Zoom Room

[Link to join the class Zoom Room](https://generalassembly.zoom.us/j/91398072480?pwd=zPp7E0UonktALaaqUtmznltqU4dHsc.1)

### 🧑‍🏫 Instructional Team Contact Information

| Role | Name | Email |
| :--- | :--- | :---- |
| Senior Instructional Associate | Raul Jiminian     | raul.jiminian@generalassemb.ly     |
| Senior Instructional Associate | Megan Hawkins     | megan.hawkins@generalassemb.ly     |
| Instructional Associate        | Megan Barber      | megan.barber@generalassemb.ly      |
| Senior Instructional Associate | Keith Baskerville | keith.baskerville@generalassemb.ly |
| Lead Instructor                | Eric Klimowich    | eric.klimowich@generalassemb.ly    |

### 📝 Additional Coding Practice Resources

If/when you find yourself with extra time, look into these external resources:

#### *edabit*

[edabit](https://edabit.com/challenges/javascript) is a great practice site and has lots of challenges designed for beginners!

#### *codewars*

[codewars](https://www.codewars.com/) is an excellent source of coding challenges for numerous programming languages.

It's free, so be sure to create an account so that you can track your progress.

Code challenges (called _Kata_) vary in difficulty from "8kyu" (easiest) to "1kyu".

#### *Interview Cake*

Designed to prep you for technical interviews, [Interview Cake](https://www.interviewcake.com/) comes highly recommended.

It's *not free*, however, so you should take advantage of its free 7-day email crash course and decide if it's worth the bucks to you.

### 🪴 Becoming Familiar With the GitHub Workflow

#### Forking (copying) the GA Class Repo to Your GitHub Account

You will have read-only access to the GA class repo.  However, you most certainly will want to be able to make changes (e.g., add notes, save code exercises, etc).  These changes will be saved to your own personal copy of GA's Student repo - known as a **fork**. To get this fork do the following:

1. Make sure that you're logged in to your GitHub account.
2. In another tab, browse to the GA class repo.
3. In the top-right corner of the page, click the `Fork` button.
You now have a copy of the repo in **your** GitHub account!

#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the class repo in your GitHub account, it's time to bring the contents of that repo onto your computer - this process is known as **cloning** and it only needs to be done once:

1. On your GitHub account, browse to your fork of the GitHub class repo and under the repository name click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to your `~/code` folder - you may choose a different folder if you wish, however these instructions will assume you clone the repo into a folder named `code`.
4. In Terminal, type `git clone ` and follow it by pasting in the copied URL from the clipboard. The command should now look something like this:

You can now `cd` and check out your local copy of of the GA class repo!

#### Adding a git *remote* for the original GA class repo

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which remotes exist for a given local repo using this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **remote** that points to GA's class repo that you forked:

```
$ git remote add upstream <link-to-parent-repo>
```

Note that by convention, the remote that points to the *original* GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo) and `upstream` (GA's class repo).

#### Preventing Changes to Upstream/Source Repo

In order to keep the source material safe from being accidentally overwritten, entering the following command will prevent you from pushing changes upstream.

```
git remote set-url --push upstream DISABLE
```

#### Getting Changes Pushed by Your Instructors

Instructional materials may be pushed to the class repo by your instructors. You will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter code", etc.

First, if you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need to **commit** those changes first:

```
$ git add -A
$ git commit -m "Add amazing work..."
```

With local changes committed, you can now fetch the updates from the Github class repo and merge them into your **local** repo (on your computer):

```
$ git pull upstream main
```

From time to time, you will want to "save" the commits you have made locally to your forked GitHub class repo (in the cloud). Doing so is a good idea to ensure your work is backed up to the cloud in case of computer failure:

```
$ git push origin main
```

The above Git/GitHub workflow is summarized by this diagram:

<img src="https://i.imgur.com/OryAQVa.png">

#### Git Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will *annotate* your code to show you how your local code differs from the code being merged from the remote. An example of such annotation is below.

```
<<<<<<< HEAD
// Local code is here 
=======
// Changes you are pulling are here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit` normally.

During your group project, merge conflicts will likely occur giving you an opportunity to learn more about them then.

#### Important

**"Nested" repos are never permitted**.  Therefore, if you have important code, such as your projects, that belongs in its own repo, **be sure to put that code in folders outside of the class repo**.

## 🏆 How to Succeed in SEBR

"Early is on time, on time is late, and late is unacceptable!" -Eric Jerome Dickey. 

### Trust the Process - The Cycle of Imitation, Repetition, & Innovation

We have a large body of knowledge, experience, and expertise to draw on from the iterative nature of SEBR.  Trust the the process. It may feel as though you're not "learning" enough during the lectures. This is not where you should expect to grasp the concepts in this program. In fact, the lectures will make up a relatively small part of your learning.

* ~ 30% of your understanding of the material will come from coding along with the instructor during lectures (imitation). This is the point where most students fall into the panic zone.
* ~ 40% will come from reinforcing those concepts through the deliverables and labs (repetition)
* ~ The rest of the 30% will come from building your projects (innovation)

### Be prepared to work hard, very hard
* The title says it all. Outside of regular class hours, you will spend many hours on homework assignments and projects. The most successful students in the past are ones who invest additional hours outside of class time into the course. The instructors are your biggest cheerleaders and will provide support, but we cannot do the work for you.

### Cooperation & Teamwork

* You'll be learning, eating, growing, failing, and succeeding **together** for the next 12 weeks.
* Teamwork will be paramount to your success as an SEBR student and beyond. Programming is a teamwork-driven profession. You will learn more from each other than from the instructors!

### Re-learning how to learn

* The **MOST** significant skill you will gain from this course is not proficiency in a particular web framework or programming language, but rather learning how to teach yourself.
* You will learn this in an environment that is specifically tailored to this goal, where there is heavy support, instruction designed to structure your self-learning process, and safety to 'fail'.
* We will progressively "back off" over the course of the cohort, encouraging the development of your autonomy as a developer, allowing you to stand strong on your own. We refer to this as the ***gradual release of responsibility***.

### You will be uncomfortable, regularly

* Don't be too hard on yourself.
* You will probably feel somewhat lost on this week's topic, feel more comfortable with last week's lessons, and notice that a few weeks ago looks easy.
* The first couple days would mostly be review, but we're going to ramp up the rigor and difficulty of the course slowly but surely! 
* The pace of this course is designed to push you past your limits.
* The brain is like a muscle; sometimes it gets sore.
* Struggling with the material doesn't mean you aren't learning; on the contrary, it reflects sustained and meaningful engagement with the material.

### Balance

* This intensity means that we have to make room for balance.
* Sleep, food, hydration, rest, and hygiene.

![I was told there would be sleep](https://res.cloudinary.com/practicaldev/image/fetch/s--ehenNuS9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ken191h31mp562g66c2w.jpg)

> Consider making a daily schedule for yourself to prioritize what's important to you - time spent with loved ones, working out, preparing healthy meals, etc. Find a balance between the hard work needed for this course and taking care of yourself.

### The Emotional Cycle of Change

![Emotional Cycle of Change](https://s-media-cache-ak0.pinimg.com/736x/3c/f4/fa/3cf4faeb2078f4f4fbb9265444bde2e0.jpg)

Programming is a mindset. It's about confidence and being open to failure. It's about knowing when to climb from the bottom of the cycle and being able to say, "Eh, I'm going to try this thing, even though I don't really understand it. AND I'm not going to get attached to it in case it doesn't work and I have to erase all my code and try something completely different."

### There's no winning or losing

* This is a non-competitive environment.
* **You get out what you put in.**
* Everyone enters and leaves at different levels. Try to compare you with you *only*.
* Use your classmates' work as inspiration to improve your own!

### Embrace failure

* Here we learn by doing, and things don't always (and usually won't) go right the first time.
* This is normal. Expect it.
* Fail often and learn from it.

### Over-communicate

* **ASK QUESTIONS!!!**
* If you need to be off-camera, if you didn't complete a deliverable, or if you will be late or absent, make sure to communicate with your instructional team! Treat this program as your job.  If you don't, we won't be able to help you get a job.
* If you are having an issue, don't hestitate to ask for assistance.  If necessary the instructional team can assist you individually during office hours/lab time, but generally, when you ask for help during lessons, you are helping everyone!  Debugging is an *absolutely essential skill* in software engineering.  Pausing a lecture to debug provides everyone in the cohort the opportunity to practice this skill.
* Complete the exit tickets. SEBR has been refined and improved through hundreds of cohorts.  We have developed a solid curriculum and approach to delivering the material that has been informed by all of our past cohorts, but we also know that each cohort and individual is unique.  Your feedback is essential to shaping this program in **realtime**.

## 📈 Growth Mindset

[Dr. Carol Dweck](https://en.wikipedia.org/wiki/Carol_Dweck)

[Developing growth mindset](https://www.youtube.com/watch?v=hiiEeMN7vbQ)

> How do you think GROWTH MINDSET could come into play for a bootcamp student? 

This may be the most mentally challenging thing you've ever done - the first time you've been bad at something in a long time. You will fail and struggle at times, but that's important. We don't succeed despite challenges - we succeed because of challenges.

The **growth mindset** here is understanding that even when something doesn't work, it will still make you a better coder! We want this to be challenging for you because...

* Just memorizing stuff won't help you. Learning **HOW** to code will.
* You can't BS your way through code.
* The fundamental standard of programming: It either works, or it doesn't. No amount of sweet-talking will make it work.
* Google is your best friend.
* Unfortunately, this can hurt. Just like exercise can make you sore and tired, so should learning. Try to enjoy the burn knowing it is making you better.
* We anticipate that you will run into hardships. When you do, that's when it is time to really challenge yourself and buckle down. Don't quit! Embrace the fact that the challenge will make you a better coder. Endure the struggle to grow and develop your mind.
* A great way to track your progress and growth is by keeping a [coding journal](https://www.makeuseof.com/tag/become-better-coder-keeping-programming-journal/).

Throughout the course of SEBR many students say something along the lines of "I don't know how to do that." Many of you certainly will. If you do, however, just add "...yet" to the end of that sentence.

# Welcome back! 🧑‍💻
