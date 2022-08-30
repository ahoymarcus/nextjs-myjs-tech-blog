---
author: 'Marcus Vinicius Richa'
title: 'Advanced GIT'
date: '2022-02-16'
subject: 'development-articles'
description: 'Git is a version control system used for: handling the source code history of projects, tracking changes made to files, handling small and large projects with speed and efficiency, to collaborate with other developers on different projects.'
---

# Advanced GIT

1. ##### Introduction  
2. ##### Advanced GIT
	2.1. Understanting the GIT History Feature   
	2.2. Dangers and Best Practices While Working with the GIT History    
	2.3. Branches are Pointers   
	2.4. GIT commit --amend   
	2.5. GIT rebase   
	2.6. Squashing Commits    
	2.7. GIT reset    
	2.8. GIT revert    
	2.9. GIT merge    
	2.10. GIT rebase Versus GIT merge: Which is Better?
3. ##### Study Case: A GIT Workflow for Open Source Contribution
4. #####  GIT Best Practices
5. ##### 
6. #####
7. ##### 
8. ##### Further Reading
9. ##### References


### Introduction

**Git** is a `version control system` used for:

- Handling the source code history of projects.
- Tracking changes made to files.
- Handling small and large projects with speed and efficiency.
- To collaborate with other developers on different projects.


###### Other Articles for the GIT Tool Ecossystem
- `GitLab Platform` [^1]



### Advanced GIT

#### Understanting the GIT History Feature

The GIT History, or more appropriately speaking, the **history of the commits** from a repository is a hierarchy of related patches to a repository in a tree like fashion.


And the simplest way to see this tree of commits is to use the command **git log** and it's many attributes and flags, like:

1. **git log --patch or -p**: shows differences patched into each commit in the log.
2. **git log -2 (a number)**: limits the number o commits that are retrieved by the log.
3. **git log --stat**: brings the number of changed files with the number of insertions and deletions, and also a comparative graph for each file in relation to insertions and deletions.
4. **git log --pretty=<values>**:    
	4.1. oneline   
	4.2. short   
	4.3. full   
	4.4. fuller
5. **git log --oneline --decorate**: the flag **decorator** shows where the branch pointers are pointing.
6. **git log <branch-name>**: by default git shows the log for the current branch, but it can be told to show otherwise.
7. **git log --oneline --decorate --graph --all**: using the **--all** flag allows to have a log of both branches at once.
8. **git log --pretty=format:<list of specifiers>**: see the list of specifiers below.


- **git log --pretty=format:<list of specifiesrs>**
```
Specifier 	Description of Output

%H 			Commit hash

%h			Abbreviated commit hash

%T			Tree hash

%t			Abbreviated tree hash

%P			Parent hashes

%p			Abbreviated parent hashes

%an			Author name (who wrote the work)

%ae			Author email

%ad			Author date (format respects the --date=option)

%ar			Author date, relative

%cn			Committer name (who last applied commit to the work)

%ce			Committer email

%cd			Committer date

%cr			Committer date, relative

%s			Subject
```


Here, it is possible to get a picture of the **--decorate** flag working in a repository with 2 branches, Main and Testing:


![showing-git-branches-and-head-pointer](/images/articles/development/showing-git-branches-and-head-pointer.png)


```
$ git log --oneline --decorate
f30ab (HEAD -> master, testing) Add feature #32 - ability to add new formats to the central interface
34ac2 Fix bug #1328 - stack overflow under certain conditions
98ca9 Initial commit
```

Above, it is possible to see that HEAD is pointing to the master, eventhough both branches are on the same point in time according to GIT history.


#### Dangers and Best Practices While Working with the GIT History

Remember that **git amend**, **git rebase**, **git reset**, **git push --force** are all destructive commands, so it is better to work following **best practices**:
1. If working on a team project, make sure rewriting history is safe to do and others know you're doing it.
2. Ideally, stick to using the same commands only on brances that your're working with by yourself.
3. Using the **-f** flag to force something should scare you, and you better have a really good reason for doing it.
4. Don't push after every single commit, changing published history should be avoided when possible.
5. Regarding to the speciffic commands spoken of:   
	5.1. For **git amend** never amend commits that have been pushed to remote repositories.   
	5.2. For **gir rebase** never rebase a repository that others may work off of.   
	5.3. For **git reset** never reset commits that have been pushed to remote repositories.   
	5.4.  For **git push --force** only use it when appropriate, use it with caution, and preferably default to using **git push --force-with-lease**.


#### Branches are Pointers

First of all, to understand Branches and to what are they pointers to, it's interesting to talk about commits and what they represent, because branchs also have them as points in time, just like the ordinary GIT history.


So, a **commit** can be relate as a **snapshot of all the file contents of the repository that were staged at a point of time**, or in other words, the entire workspace which was signed to be tracked gets copied.


And since each one of these points in time have a direction related to the commit or point that came before it, the whole body creates a segment or segments depending on how many leafes are created by the GIT framework:

` Nearly every VCS has some form of branching support. Branching means you diverge from the main line of development and continue to do work without messing with that main line. In many VCS tools, this is a somewhat expensive process, often requiring you to create a new copy of your source code directory, which can take a long time for large projects. Some people refer to Git’s branching model as its “killer feature,” and it certainly sets Git apart in the VCS community. Why is it so special? The way Git branches is incredibly lightweight, making branching operations nearly instantaneous, and switching back and forth between branches generally just as fast. Unlike many other VCSs, Git encourages workflows that branch and merge often, even multiple times in a day.` [Git Branching - Branches in a Nutshell - Git-scm](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)



#### GIT commit --amend

The command **git commit --amend** is a convinient way to modify the last commit made, in the way you can **add** and combine a forgotten file with the last commit into a brand new single commit, or it is possible to change the message make to the commit:

```
$ git commit --amend -m "here, an updated commit message made"
```

Or, in the case of files fogotten:

```
# Edit hello.py and main.py
$ git add hello.py
$ git commit 
# Realize you forgot to add the changes from main.py 
$ git add main.py 
$ git commit --amend
``` 

But, attention, **do not amend public commits, because the current public commit that belong to others is going to be taken away from the history tree in favor of a brand new commit**.

`Remember to only amend commits that have not been pushed anywhere! The reason for this is that git commit --amend does not simply edit the last commit, it replaces that commit with an entirely new one. This means that you could potentially destroy a commit other developers are basing their work on. When rewriting history always make sure that you’re doing so in a safe manner, and that your coworkers are aware of what you’re doing.`


#### GIT rebase

The **git rebase** command is one of two git commands for integrating alterations from different branchs. The othe command is **git merge**. While **git merge** is a alteration in the registry forward, the **git rebase** allow to rewrite the registry, meaning that **git rebase** changes the history of the commits.


On the other hand, **the advantage** of using **git rebase** is to have a cleaner history, which could be extremele important to the work of analysing the history tree and reverting to definite point in the line. But once again, **do not rebase and change history from a public repository, because it will break and destroy old commits**.


Here, the Git Docs are explaining that just the above operation, that while a integration with **rebase** has the same result from **merge**, it keeps a linear and cleaner history though:

`Now, the snapshot pointed to by C4' is exactly the same as the one that was pointed to by C5 in the merge example. There is no difference in the end product of the integration, but rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history: it appears that all the work happened in series, even when it originally happened in parallel.` [Rebasing - Git-scm](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)


Interesting to notice that at the same article page, the Docs show an even more complex rebase action involving 3 branchs, and that the 2 parallel branches were also nested. Then the developer decides to bring just 1 of the branches to the master branch and then operates a merge action.


And, here, in this graph from the The Modern Coder channel, it is possible to see how confusing a GIT history can get with all its merges from across the whole project development:

![showing-a-git-history-with-all-its-merges](/images/articles/development/showing-a-git-history-with-all-its-merges.png)


As the author from the channel expains is that **git rebase** would copy or clone the branch that is being integrated and moving it to the the main branch to have everything set in a straight line history.


Also, in the same video the author has a very good point on how to have the **git rebase** added to some colaborative project without incorring in the risks of destroying work, but still keeping the gain of a cleaner and straight GIT history for the project.


For that, the article shows that the developer would use the command - [Rebasing - Git-scm](https://git-scm.com/book/en/v2/Git-Branching-Rebasing):

```
$ git rebase --onto master server client
```


Because, the **client** branch was nested in the **server** branch, but then it was being rebased and brought **--onto the master** branch to be merged.



Also interesting that by default **git rebase** does a automatic job, while **git rebase i** brings a interative session, that could be followed in this manner:

1. Create a repository and prepare some arbitrary changes.
2. Correct the mistakes made.

``` 
$ touch test{1..4}.md
$ git add test1.md && git commit -m 'Create first file'
$ git add test2.md && git commit -m 'Create send file'
$ git add test3.md && git commit -m 'Create third file and create fourth file'
``` 

See that there are 2 mistakes over there. The first mistake is the type "send" instead of "second", and the second mistake is that the fourth file was forgotten in the third commit.


The second mistake can be easily fixed with git **git --amend** while it is the last commit made. But to reach the second commit it could be done interatively with **git rebase -i**:

``` 
$ git log
$ git rebase -i HEAD~2
``` 


This will open the editor in the command line, but see that the 2 commits retrieved by the HEAD~2 (HEAD aka the current commit) property lists the commits in the opposite order from **git log**. This one is descending, and the **git rebase** is ascending:

```
edit eacf39d Create send file
pick 92ad0af Create third file and create fourth file
``` 

Above, the commit with the type comes first, so it was changed to be edited by changing **pick** for **edit**. And now that the **HEAD (aka the current commit)** is in the second commit, **amend** can be used and the change can be made either with the flag **-m** or with the command line editor. And when finished, hit continue:

```
$ git commit --amend
$ git rebase --continue
```

###### 3 Different Levels of Configuratin for Default Pull Request with Rebase

See that this order from the most general and embracing context to the most fine grained [How to make Git pull use rebase by default for all my repositories? - StackOverflow](https://stackoverflow.com/questions/13846300/how-to-make-git-pull-use-rebase-by-default-for-all-my-repositories):
1. **git config pull.rebase true**: setting this to true means that **git pull** is always equivalent to **git pull --rebase** (unless **branch.<branchname>.rebase** is explicitly set to false).    
	1.1. Also, this configuration can be set per repository or globally.
2. **git config branch.autosetuprebase**: setting this to **always** means that whenever a tracking branch is created, a configuration entry like the one below will be created for it.    
	2.1. For finer grained control, this can also be set to **never**, **local**, or **remote**, and can be set per repository or globally.
3. **git config branch.<branchname>.rebase**: setting this to **true** means that that particular branch will always pull from its upstream vias rebasing, unless **git pull --no-rebase** is used explicitly.


And the article in StackOverflow concludes that while it is not possible to set the default behaviour for all future clones of a repository, it is possible to change the default for all of the current user's (existing and future) repositoroies via **git config --global pull.rebase true**.


####  Squashing Commits

Squashing commits is a handy way of keeping the GIT history tidy, what could be even more important when the project leaves the development stage:

`Squashing makes it easier for others to understand the history of your project. What often happens when a feature is merged, is we end up with some visually complex logs of all the changes a feature branch had on a main branch. These commits are important while the feature is in development, but aren’t really necessary when looking through the entire history of your main branch.`


So, following the same example from above, it is possible to **squash** commit 2 into commit 1:

```
$ git rebase -i --root
``` 

Then it is necessary to **pich** and **squash** the commits according to one's need:

```
pick e30ff48 Create first file
squash 92aa6f3 Create second file
pick 05e5413 Create third file and create fourth file
``` 


So, up there, in the command line editor, the second commited was chosen to **squash** into its previous commit, without forgetting to rewrite the commit message for the squashed new commit. Then, log and see the results:

```
$ git log
Author: Marcus Vinicius Richa <marcus@protonmail.com>
Date:   Sat Aug 27 18:58:14 2022 -0300

    Create third file and create fourth file

commit d18797ec7ed81c446c56d710717d4776048e389d
Author: Marcus Vinicius Richa <marcus@protonmail.com>
Date:   Sat Aug 27 18:57:57 2022 -0300

    Create first and second file
``` 

In this article, [Git Tools - Reset Demystified - Git-scm](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified), from the GIT Docs, by the end, it shows another squashing example, but using the **git reset** to achieve the same squashing result from this example here using **git rebase**.


#### GIT reset

The **git reset** command allows to undo some prior commit made, allowing some different direction. 


So, this time, keeping with the same example from above, it is possible to reset the the third commit and then go forward in another direction like making 2 different commits, one for each separed file that are unstaged:

```
$ git reset HEAD^
$ git log
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	test3.md
	test4.md
``` 


Now, since the last commit was reset and undone, it can be rearranged:

```
$ git add test3.md && git commit -m 'Create third file'
$ git add test4.md && git commit -m 'Create fourth file'
$ git log
commit cb84da5c03bd5b4cc024a2277a6cfb3a85e0197d (HEAD -> main)
Author: Marcus Vinicius Richa <marcus@protonmail.com>
Date:   Sat Aug 27 19:50:09 2022 -0300

    Create fourth file

commit fb1ca3937bd4b65a2cb63c758aacb24d3d80f366
Author: Marcus Vinicius Richa <marcus@protonmail.com>
Date:   Sat Aug 27 19:49:59 2022 -0300

    Create third file

commit d18797ec7ed81c446c56d710717d4776048e389d
Author: Marcus Vinicius Richa <marcus@protonmail.com>
Date:   Sat Aug 27 18:57:57 2022 -0300

    Create first and second file
``` 


One important point to make is the fact that **git reset** can work with the flags - [Git Tools - Reset Demystified - Git-scm](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified):
1. **git reset --soft HEAD~**: this command would undo the last commit, but stop the HEAD  at this same spot, meaning it would not change what is in the staged area "tree".
2. **git reset [--mixed] HEAD~**: this one is in square brackets because it is already the default flag.    
	2.1. This flag would stop the HEAD after the stage area, meaning that not only it undo the commit, but it also unstage the contents of the stage area.
3. **git reset --hard HEAD~**: this one is a destructive command, so be carreful specially while working with public repositories.   
	3.1. What it will do is to undo not only the last commit and the last additioin to the stage area, but also destroy all the working done prior to the penultimate commit.
 

`The last part of reset we want to touch upon is git reset --hard. What this does is it performs all the steps of git reset, moving the HEAD and updating the index, but it also updates the working directory. This is important to note because it can be dangerous as it can potentially destroy data. A hard reset overwrites the files in the working directory to make it look exactly like the staging area of wherever HEAD ends up pointing to. Similarly to git commit --amend, a hard reset is a destructive command which overwrites history. This doesn’t mean you should completely avoid it if working with shared repositories on a team with other developers. You should, however, make sure you know exactly why you’re using it, and that your coworkers are also aware of how and why you’re using it.`


- **Note**:
- Be careful to the distinctions between **git reset** and **git checkout**, as this article from the GIT Docs points out: [Git Tools - Reset Demystified - Git-scm](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)


#### GIT revert

Note that the command **git revert** works for undo registries in the history of commits, but different from other commands like **git checkout** and **git reset**, which move the pointer of reference from HEAD, the **git revert** gets some speciffic commit, but keeps the HEAD at the same place.


What this means is that if **git reset** is used some point back in the history, the HEAD changes to it and everything ahead has to be reconfirmed until it reaches the last point in the log history.


On the other hand, **git revert** is a safer option to undo operations, according to [Atlassian - Git revert](https://www.atlassian.com/br/git/tutorials/undoing-changes/git-revert).


#### GIT merge 

According to the GIT Doc, the **git merge command joins 2 or more development histories together**, and it does so by incorporatig: `changes from the named commits (since the time their histories diverged from the current branch) into the current branch`. 


It's important to remember from the previous points made above that the **git merge** command preserves the history identity, in relation to the fact that after integrating 2 or more development histories their are recorded `in a new commit along with the names of the two parent commits and a log message from the user describing the changes`.


And the GIT Docs also bring a warning concerning doing a merge task while there is uncommitted data in the repository, in the way that here it is possible to be derived a **best practice**, that is to have the local repository always tidy and committed before applying outside changes:

`Warning: Running git merge with non-trivial uncommitted changes is discouraged: while possible, it may leave you in a state that is hard to back out of in the case of a conflict.` [Git-merge - Git-scm](https://git-scm.com/docs/git-merge)


###### How to Resolve Conflicts

After seeing a conflict, you can do two things:

- Decide not to merge. The only clean-ups you need are to reset the index file to the HEAD commit to reverse 2. and to clean up working tree changes made by 2. and 3.; git merge --abort can be used for this.
- Resolve the conflicts. Git will mark the conflicts in the working tree. Edit the files into shape and git add them to the index. Use git commit or git merge --continue to seal the deal. The latter command checks whether there is a (interrupted) merge in progress before calling git commit.

You can work through the conflict with a number of tools:

1. Use a mergetool. git mergetool to launch a graphical mergetool which will work you through the merge.
2. Look at the diffs. git diff will show a three-way diff, highlighting changes from both the HEAD and MERGE_HEAD versions.
3. Look at the diffs from each branch. git log --merge -p <path> will show diffs first for the HEAD version and then the MERGE_HEAD version.
4. Look at the originals. git show :1:filename shows the common ancestor, git show :2:filename shows the HEAD version, and git show :3:filename shows the MERGE_HEAD version.


###### How can I Preview a Merge in GIT?

According to a colaboration on StackOverflow, [How can I preview a merge in git?](https://stackoverflow.com/questions/5817579/how-can-i-preview-a-merge-in-git), a **git merge** task can be previewed using:

1. **git log ..name-of-other-branch**
2. **git diff ...<name-of-other-branch**
3. **gitk ...<name-of-other-branch**:   
	3.1. A graphical representation of the branches since they were merged last time.


That article also points out to the difference in the number of dots in the first case (2 dots) to the other two cases (3 dots): 

`Empty string implies HEAD, so that's why just ..otherbranch instead of HEAD..otherbranch. The two vs. three dots have slightly different meaning for diff than for the commands that list revisions (log, gitk etc.). For log and others two dots (a..b) means everything that is in b but not a and three dots (a...b) means everything that is in only one of a or b. But diff works with two revisions and there the simpler case represented by two dots (a..b) is simple difference from a to b and three dots (a...b) mean difference between common ancestor and b (git diff $(git merge-base a b)..b).` [How can I preview a merge in git?](https://stackoverflow.com/questions/5817579/how-can-i-preview-a-merge-in-git)


###### Competing Line Change Merge Conflicts

The GitHub Docs describes in a article, [Resolving a merge conflict using the command line - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line), the process of resolving a merge conflict from competing lines using the command line:

1. At the local Git repository which has the merge conflict, generate a list of the files affected by the merge conflict with **git status**.
2. Open the files with a text editor and search for this pattern: **<<<<<<<**
3. Analysing the file with the text editor:   
	3.1. The pattern **<<<<<<< HEAD** brings the data from the HEAD or base branch side.   
	3.2. The pattern **=======** marks a division for the data from one conflicting branch from another.   
	3.3. This third pattern, **>>>>>>> BRANCH-NAME**, brings the data from the outside branch being merged.
4. It's possible to opt to keep any side of the changes or even to keep them both.   
	4.1. Just remove the patterns marking the related conflict.
5. Next, add or stage the changes made: **$ git add .**
6. Then, commit the changes with a proper comment:   
	6.1. **$ git commit -m "Resolved merge conflict by incorporating both suggestions"**


- **For example, taking a branch-a in consideration**:
``` 
If you have questions, please
<<<<<<< HEAD
open an issue
=======
ask your question in IRC.
>>>>>>> branch-a
``` 


The same article, [Resolving a merge conflict using the command line - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line), also brings example into resolving a conflict where a file have been changed in one branch while it is deleted on the other.


In this case, the task followis the basic workflow described above, so after discorvering the merge conflicts with **git status**, the developer can make here 3 different decisions:
1. To use the text editor to analyse the deleted file and see the last changes.
2. To keep the file, adding it to the stage area: **$ git add <deleted-file>**
3. Or to remoe the file from the repository: **$ git rm <deleted-file>**
4. Committing all the changes made to resolve the conflicts:   
	4.1. **$ git commit -m "Resolved merge conflict by keeping README.md file"


#### GIT rebase Versus GIT merge: Which is Better?

This is a important question, but also a complex one according to the GIT Docs, because GIT is a tool and it allows you to go either way, but it still gives 2 important points - [Rebasing - Git-scm](https://git-scm.com/book/en/v2/Git-Branching-Rebasing):
1. **The History as a Record of what actually happened**: in this sense there should not be any change in the history, because it should document de project development.   
	1.1. It's a **historical document**.
2. **The History as a Story of how the project was made**: here, the project could have a draft version before completion that was kind of messier in it's own away. But once finished it could be cleaned up for presentation.    
	2.1. It's a **publishing piece** to be presented and read by others.



### Study Case: A GIT Workflow for Open Source Contribution

In this Study Case, the example comes from **The Odin Project** and for the context of the GIT tool workflow, the comes from the participation in the platform as content contributors. 


So, in this workflow, the key players connected and working the content are:
1. **The original GitHub repository from platform**:   
	1.1. [The Odin Project](https://github.com/TheOdinProject/theodinproject)   
	1.2. [The contributing guide](https://github.com/TheOdinProject/theodinproject/wiki/Contributing-Guide)
2. **The contributor's fork from the original repository of the platform**
3. **The local repository cloned on the contributors own machine**


One slightly difference to the ordinary arrangement for a GIT workflow with the **remote repository** and the **local repository**, it's the necessity to also sync one's remote repository to the **upstream**, that it is the same original repository from which the project was forked:

```
$ git remote add upstream git@github.com:TheOdinProject/theodinproject.git
```

Otherwise:

```
$ git remote add upstream https://github.com/TheOdinProject/theodinproject.git
```


Another point to make is the that the original repository is **production-ready code**, meaning that any code deployed to it's **main** branch will be tested in staging and then shipped to production. So, the contributor is working in a **feature branch**.


The **workflow** for the contribution's work:
1. Create a **feature branch** on the forked repository and add the necessary commits.   
	1.1. **git branch feature-branch** and **git checkout feature-branch**, or with a single command:   
	1.2. **git checkout -b feature-branch**
2. When the new feature is done, chances are that other may have also made changes to the **upstream repository**, so this means that the forked **main** branch should be out of date.     
	2.1. Then, fetch the most updated copy with: **git fetch upstream**
3. Now, merge the upstream's changes into the local version of **main**:   
	3.1. **git checkout main**   
	3.2. **git merge upstream/main**
4. Notice that the 2 steps taken above would be the same as doing:   
	4.1. **git pull upstream main**
5. And here, there is a important point in the workflow, because eventhough the aim of all this work is to integrate the new feature into the main branch, since this operation can get a lot of noise from a untidy feature branch, **first the step is to merge the main branch into the feature branch** and then keep the main branch clean and safe.    
	5.1. **git checkout feature-branch**    
	5.2. **git merge main**
6. Resolve the merge conflics...
7. Now, make a clean merge into the main branch:   
	7.1. **git checkout main**   
	7.2. **git merge feature-branch**
8. Then, the proper workflow here is to push the changes into the contributor's own **remote** repository, because the **upstream** does not give outside access.   
	8.1. **git push origin feature-branch**.
9.  Finally, the operation to make a pull request to merge the **feature-branch** with the original **upstream** is done using the GitHub graphic interface.
10. At the forked **remote** repository, after the push made into it, **a new button should be visible near the top of the page, which will allow to create a pull request to the original **upstream** from the Odin Project Repo.    
11. Now, if the **pull request** made was in relation to some prior **issue assignment** given through the [open issue repo](https://github.com/TheOdinProject/theodinproject/issues), it's necessary to link it in the body of the pull request, pointing out the connection.    
	11.1. For example, "resolves #1234" issue.


###### A Small Knowledge Check

Just a basic test to check the understanding of the above workflow:
1. What name is typically given for a Git remote that points to a repo that’s been forked?    
	1.1. Answer: **upstream**
2. Can you directly send your changes to a repository that you don’t own/have write access to?   
	2.1. Answer: **No, it's necessary to push to the forked remote repository and then use the GitHub graphic interface to make a pull request to the upstream repository**.
3. What should you do immediately before merging your feature branch into main?   
	3.1. Answer: **One's should first checkout to the main branch and make a fetch-and-merge or a pull request to the upstream repository as to bring the local repository up to date**



### GIT Best Practices

In the article [Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines) from the site Lullabot, the author proposes some best practices, though the article also adverts that the workflows proposed may not be ideal for all use cases, specially in relation to public repositories like **drupal.org and GitHub**.


And the article [Commit Often, Perfect Later, Publish Once: Git Best Practices - Seth Robertson](https://sethrobertson.github.io/GitBestPractices/#misc) also brings some other best practices to the workflow.


###### Small Logical Commits

According to the article [Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines), other versioning tools would encourage large, single commits due to their own limitations in their branching model, but this may present some difficulties to the developer:
1. **It makes reviewing much harder**: just like in GIT there is the command **git blame** which shows each revisor and last modified line for each update.
2. **It destroys or severely cripples the history for the development of the project**
3. **It would also make a task like binary search a commit useless**:   
	3.1. **git bisect** would be the GIT command counterpart for such binary search of commits.



###### Do Commit Early and Often

Slightly different from the previous best pratice, the article [Commit Often, Perfect Later, Publish Once: Git Best Practices - Seth Robertson](https://sethrobertson.github.io/GitBestPractices/#misc) proposes a even more frequent schedule of commits than the small logical one presented above.


The reasons are many, but one in particular is to have the data monitored and add to the backup system, because out of the commit, the GIT tool simply does not have any relation to that data present in the repository.


And a second good reason to highlight would be to have a complete development history of the project, which according to necessity could be perfected later for publishing or as a more formal document for the project.



###### Always Review Code Before Committing It

Here, the article proposes avoiding to make batch committing using flags like **git add --all (or -a, or .)**, because GIT brought a good set of tools in order to give a better chance for more granullar preparations:
1. **git add --patch**: to better select additions to the index/stage area.   
	1.1. But **git --patch** won't add files not yet monitored, so in this case a ordenary **git add** is necessary.
2. **git diff --cached**: for a final review for the data being committed.



###### Never Delete Unmerged Remote Branches

In this section the article [Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines) proposes to avoid deleting obsolete branches that might be reference at any point in time.

And that is due to the fact that in GIT the branch unmerged would be lost eventually by the process of garbage collection:

`One serious difference between Git and Subversion is that branch addition and removal are not commits themselves. A Git branch is just a pointer to a commit. While in Subversion a deleted branch can be restored just by checking out an old revision, in Git a commit not pointed to by any branch will eventually be removed by the garbage collection process.`


So, to deal with the task the article propose the use of the command merge with the flag **-s**: **git merge -s ours-obsolete-branch**, that would merge the branch into the current branch, but completely discard the changes.


###### Make Customizations to Your Own GIT Toolbox

According to the article [Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines), GIT is also very flexible working much like a Unix shell, what gives plenty of room to custom configuration, starting with the configuration file at the users home directory: **~/.gitconfig**.



###### Keep a Stash of the Current Repository Before Going After Lost Data

So, as the article [Commit Often, Perfect Later, Publish Once: Git Best Practices - Seth Robertson](https://sethrobertson.github.io/GitBestPractices/#misc) reminds, once the data was commited, it is going to be kept at some point in the history of the project development.


In that case, it is possible to be meticulous and before journing into findind any lost work, it should be importat to:
1. Make a stash of the current repository.
2. Analysing the commit history to cherry-pick points in time where recovery would not represent destruction of any work.


continue Don’t panic............
























###### Other Important Resources to Git

1. [Pro Git book - Scott Chacon](https://git-scm.com/book/en/v2)
2. [Git Cheat Sheets - Training.Github.com](https://training.github.com/)
3. [Git Branching from Peter Cottle - Learngitbranching.js.org](https://learngitbranching.js.org/)
4. [Commit Often, Perfect Later, Publish Once: Git Best Practices](https://sethrobertson.github.io/GitBestPractices/)
5. [Git Branching and Tagging Best Practices on SO](https://softwareengineering.stackexchange.com/questions/165725/git-branching-and-tagging-best-practices)
6. [Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines)
7. [Understanding Git Conceptually](https://www.sbf5.com/~cduan/technical/git/)
8. [Top 10 Git Tutorials for Beginners - Webfx.com](https://www.webfx.com/blog/web-design/git-tutorials-beginners/)
9. [Git Immersion](https://gitimmersion.com/lab_01.html):   
	8.1. This is another great tutorial to learn the shortcuts of git (if you are willing to learn some Ruby).
10. [Contributing to Open Source Part II: The Real Way - The Odin Project](https://www.youtube.com/watch?v=mENDYhfxH-o): a descriptive video lesson on how to become a contributor to the platform.


- **And here, 3 Troubleshooting Resources for GIT**:
1. [Oh sh!t git](https://ohshitgit.com/): a quick reference to get one's out of common GIT problems.
2. [How to undu (almost) anything with GIT](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/): another reference to help with some many GIT options on how to undo some mistakes made.
3. [On undoing, fixing, or removing commits in git](https://sethrobertson.github.io/GitFixUm/fixup.html): a fairly comprehensive guide to recovering from mistakes made while using GIT.








### Further Reading

[Pro Git book - Scott Chacon](https://git-scm.com/book/en/v2)

[Think Like (a) Git](https://think-like-a-git.net/)

[GitLab architecture overview - GitLab](https://docs.gitlab.com/ee/development/architecture.html)

[Get started with GitLab CI/CD - GitLab](https://docs.gitlab.com/ee/ci/quick_start/)

[Learn GitLab in 3 Hours | GitLab Complete Tutorial For Beginners - LambdaTest](https://www.youtube.com/watch?v=8aV5AxJrHDg)

[GitLab - TutorialsPoint](https://www.tutorialspoint.com/gitlab/gitlab_introduction.htm)

### References

[Resolving a merge conflict using the command line - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

[How can I preview a merge in git?](https://stackoverflow.com/questions/5817579/how-can-i-preview-a-merge-in-git)

[Contributing to Open Source Part II: The Real Way - The Odin Project](https://www.youtube.com/watch?v=mENDYhfxH-o)
 
[Git Branching and Tagging Best Practices on SO](https://softwareengineering.stackexchange.com/questions/165725/git-branching-and-tagging-best-practices)

[Git Best Practices: Workflow Guidelines](https://www.lullabot.com/articles/git-best-practices-workflow-guidelines)


[^1]:gitlab-2022-02-16

