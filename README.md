Originally, this Project was created in Vite. For a beginner, Vite is easier to understand than NextJS (maybe because im still new to NextJS)

Now, here we are next JS (with version control sheesh)

<---------------------------------------------------------------------------------------------------->

Initializing git on this project

cd "project name"
git init
git add .
git commit -m "initital commit"
git remote add origin [put copied link of repo here]
git push -u origin master


To commit changes Example: If you want to commit changes to index.js and styles.css
git add index.js styles.css git commit -m "Updated index.js and styles.css"

To add everything
git add . 
git push origin branch_name
if there are errors
  git pull origin master
  merge message show up
  make a new merge message
  Esc
  type ":wq"
git push origin branch_name

<--------------------------------------------------------------------------------------------------->

NextJS

layout.tsx 
  > where you put html body and head tag

in the directory structure, you should make sure that fonts and images are in a public folder. to access specifics:
Example
  accessing 1.png in the image folder of the public folder
  <link rel="icon" href="/images/1.png">
  should be like this since public is a root folder

don't forget to add 'use client' on client components
