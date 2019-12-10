# Suicidal Rate Visualization
## Final Product
link: https://sophieniu.github.io/webdesignfinal/

## Dataset 
Source: https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016/data

Columns: 
- Year 
- Country
  - number of suicides
  - Suicide rate
  - Population
  - GDP
  - GDP per capita
  - HDI (human development index)
- People
  - Age group
  - Generation (based on age group avg)
  - Sex


## Final Deliverable 
- Simple page 
  - Text: problem statement, story we want to tell, the impact, the interpretation
  - Infovis  (d3.js)

- TBD factors: 
  - [ ] How many visuals (d3, tableau?)
  - [ ] Focus on what aspect? 
  - [ ] Do we need any other dataset?
  - [ ] What layout?

## Domain tasks:  
Here is the list of questions that we would like to explore: 
  - What’s the relationship between GDP per capita and suicidal rate? 
  - Are there any differences in suicidal rates among different sex in different countries? 
  - Any trend in suicidal people’s age and sex throughout the years? 
  - Based on the years, have the suicidal rate improved?
  - According to generation, is there any correlation between high suicidal rate parents and children? 
  - What’s the relationship between suicide rate and HDI?  
  - How does the suicidal rate change over the years?
  - How does the suicidal rate relate to the economic situation?
  - Is age a good indicator of the suicidal rate?
  
- [x] Here is the final three questions that we would like to answer with the vis: 
   1. What’s the relationship between continents and suicidal rate? 
   2. How suicide rates change in different age groups?
   3. What’s the relationship between gpd per capita and suicidal rate? 
   4. What’s the relationship between gender and suicidal rate?

## Meeting Todo
### 11/15 (Fri)  meeting: 
- [x] Select 3 questions from the list to focus on 
- [x] Decide on the potential visual presentations of the tasks/ data
- [x] Number of visual & interaction
- [ ] Find & set the texts based on the questions
- [x] Decide the layout (responsive?)
 
### After 11/15 meeting: 
- [ ] Simple html setup
- [ ] Text finding and creation
- [ ] Bubble j3 chart 
- [ ] Streamgraph
- [ ] Line Chart


## Time tracking
11/5 - Group discussion (select a topic) - all ~ 1 hour

11/13 - Group discussion - all ~ 1 hour

11/15 - Group discussion time - all ~1.5 hours

11/26 - Created the index.html and wrote content - Yiqi Ye > 3 hours

Thanksgiving Break - Created and implemented the third graph in the index.html - Sophie Niu > 6 hours

Thanksgiving Break- Implemented the first and the second d3 graphs and reformated the page layout - Kefan Xu > 8 hours

12/1 - Group meeting - all ~ 1.5 hours

Total Hour ~ 31 hours

## Reference Code Snippets: 
1. Streamgraph: https://bl.ocks.org/mbostock/1256572 
2. Area: https://www.d3-graph-gallery.com/graph/area_basic.html
3. Streamgraph simple: http://bl.ocks.org/WillTurman/4631136 (possibly only need to use this one) 

## Github
4. checkout the master branch<br>
```
git checkout master
git pull
```
Make sure you start from the master branch so that later on your branch is not merging on other's branch.`git pull` fetches all content from the master branch.  

5. create new branch for editing<br>
To **check which branch you are in right now**: ```git branch```<br>
To create a new branch: ```git checkout -b new_branch_name```<br>
Change new_branch_name to the name that you create for the branch. 

6. switch to the new branch <br>
Once the new branch is created, switch to the new branch before making changes to any code:<br>
```git branch new_branch_name```

7. make changes on the code from your text editor<br>
For frontend, open up a browser, type in `localhost:3000` should open up the project page, and this will reflect the changes you made in the code. 

8. merge code to the master<br>
Once the code you have created can carry out the desired task, merge your branch to the master:<br>
```
git status
git add .
git commit -m `write a commit message to describe what you did` 
git push -u origin new_branch_name
```
Once the task for the branch is completed, create a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) on github which asks other developers on the team to review and discuss your code. 

`git status` shows how many files have been modified. <br>
`git log` shows all the commits that happened in this repo, which helps to revert unwanted changes and track history. <br>
`git add .` adds all changes to the commit. <br>
`git push` pushes the local changes to the site.<br><br>
For more git commands, see [Atlassian git glossary](https://www.atlassian.com/git/glossary).

