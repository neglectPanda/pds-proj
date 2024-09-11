Originally, this Project was created in Vite. For a beginner, Vite is easier to understand than NextJS (maybe because im still new to NextJS)

Now, here we are next JS (with version control sheesh)

<---------------------------------------------------------------------------------------------------->

Initializing git on this project

1. cd "project name" <br />
2. git init <br />
3. git add . <br />
4. git commit -m "initital commit" <br />
5. git remote add origin [put copied link of repo here] <br />
6. git push -u origin master <br />


To commit changes Example: If you want to commit changes to index.js and styles.css <br />
git add index.js styles.css git commit -m "Updated index.js and styles.css" <br />

To add everything <br />
git add . <br />
git push origin branch_name <br />
if there are errors <br />
  git pull origin master <br />
  merge message show up <br />
  make a new merge message <br />
  Esc <br />
  type ":wq" <br />
git push origin branch_name <br />

<--------------------------------------------------------------------------------------------------->

<h1>NextJS</h1> <br />

layout.tsx <br />
  > where you put html body and head tag

in the directory structure, you should make sure that fonts and images are in a public folder. to access specifics:
Example <br />
  accessing 1.png in the image folder of the public folder <br />
  <link rel="icon" href="/images/1.png"> <br />
  should be like this since public is a root folder <br />

don't forget to add 'use client' on client components <br />
