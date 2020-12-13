---
title: Supercharge your workflow with Git and GitHub CLI
date: "2020-12-13T22:12:03.284Z"
description: "A thorough guide to improving your workflow through basic Git and Github CLI commands"
---

#####Installing Git and GitHub CLI

First, you need to have [Git](https://git-scm.com/download) and [GitHub](https://cli.github.com/) CLI installed on your system. You can download it from the links provided.

#####Cloning a Repo

You can clone a repo into your pc by using the git clone command followed by the URL of the repo.

`git clone <url_of_your_repo>`

#####Adding files to the staging index

You need to add the files to the staging index before you can commit them. You can think of the staging index as a place that will keep a list of all the files that need to be tracked.

`git add .`

This will add all the files in the workspace to the staging index. You can also add each file individually by specifying the file name instead of '.'

`git add <file_name>`

If you need to add all the files except a few files then you can add the files that you want to ignore to the [.gitignore](https://www.javatpoint.com/git-ignore) file and add the rest of the files using the `git add .` command.

#####Commiting the files

When you commit a file you are essentially saving the file at the current state and this state will always be accessible in the future just in case something goes wrong.

`git commit -a -m "your_commit_message"`

This command will commit your files and save them forever in your PC.

#####Saving your files to Github

Your files have been saved locally but you should save them on the internet where they will be safe if anything happens to your PC. You'll also need to do this if you want to collaborate with other people.

`git push`

#####Branching in Git

When you want to add a new feature to your project you cannot push the new features to the main branch because you haven't tested them yet. This is where branching comes into the picture. You'll create a new branch from the current point and when you are done testing the feature and you are sure that it is stable you can merge the branch into the main branch.

![Branching in Github](./branching.png)

The following command will create a new branch.

`git branch <new_branch_name>`

To work on the new branch you'll need to switch to the branch that you just created. You can switch branches with this command.

`git checkout <branch_name>`

If you make changes in the new branch and try to push them to Github you'll get an error saying you need to run the following command `git push --set-upstream origin <new_branch_name>`.

This is because you have created a new branch on your PC but it doesn't exist on Github. You'll have to run the command given above for the first time you are trying to push the changes in the new branch so that the new branch would be set up on Github.

Don't worry if you can't remember the above command you can use `git push` and it will throw an error with the right command to use you can then copy the command from there. 😉

#####Merging a branch in Github

When you want to merge a branch with another branch you need to create a Pull Request to that branch. Let's say you have a branch named 'alternate' and you want to merge this branch with the master branch. So you need to create a PR from this 'alternate' branch to the master branch.

`gh pr create -t "<title_of_the_PR>" -b "<body_of_the_PR>"`

Note: You need to be on the 'alternate' branch before you run this command.

When you make a PR Github will check if it has any merge conflicts. You can check if the PR passed all the tests by running the following command.

`gh pr checks <branch_name>`

You can view your PR by using the `gh pr view <branch_name>` command.

You can merge a PR using the `gh pr merge` command.

You can see all the PR's concerning you using the `gh pr status` command. This command will show all the PR's on the branch you are working on, all the PR's made by you and all the PR's requesting a review from you.

`gh pr list` will list all the PR's in the repo.

#####How to make changes in the last commit

If you committed your changes and then realized that you need to make one more small change then you can make your changes add them to the staging index and then use the command `git commit --amend --no-edit`.

Your last commit will now contain that change.

**Warning:** You should never amend commits that have been pushed up to a public/shared branch! Only amend commits that only exist in your local copy or you're gonna have a bad time.

If you want to know more of these life-saving commands you should check out [Oh Shit, Git!?!](https://ohshitgit.com/)

You can check out the other Github commands [here](https://cli.github.com/manual/) and the Git commands [here](https://git-scm.com/docs)
