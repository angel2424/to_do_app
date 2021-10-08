# To do app
Hello there, welcome to one of my first Javascript focused projects. This is my first project where I focused more on Javascipt for the first time.
I have built other projects before but the only JavaScript I used was for the mobile menu.

This was a very fun experience. I got to put everything I learned into practice, it took me a while to get the flow going, but once I started getting comfortable working with it, it all became really easy.
Feel free to take a look at my code! I would like to hear your feedback, I know I can make my code better and using less lines, but I am happy with the results being my first time.

The designs and project concept was taken from Frontendmentor.io

## Building process

* HTML & CSS: Here I started with building and styling the basic structure of the todo app. As an extra from the challenge's goals I decided to add and illustration as a placeholder whenever the task list was empty. I then added the styles for the elements that were going to be added dynamically with JavaScript in the future.

* Javascript: This is the part that took me the most time, and the most fun part really 😊. 
  1. I started with the input field at the top that added the tasks, this part was really fun because I had to figure out how to submit the input value when the user pressed enter in their keyboard, and after some little research I figured it out. This was the easiest part of the project for me.
  2. After creating the new task I then had to work on being able to mark the task as done when clicking the done button (a circle in front of the task), this is where I started having trouble. I added a sample task to the HTML to check that everything that I was adding was working then I added the functionality and it worked! but there was one problem 🙃, whenever I added a new task the code wasn't applying to that new task! After researching for quite a while I found out about bubbling, which I had heard of in the course I took but I didn't remember it. After adding a few more changes to my code, everything worked!
  3. Now I had to be able to remove a task when clicking an X icon. This part was easy because it was basically the same as the done button, but this time I just had to remove the element.
  4. After that I had to be able to delete all the tasks that where completed. I went into my done button and I made sure to add a class of completed to the task when it was clicked. I then listened for a click on the Delete Completed button and then looked for the 'completed' class in my tasks, and added the remove method for those classes.
  5. After that I had to work on keeping track of my number of active tasks, making sure to check when I added a task, removed or marked a task completed. 
  6. At last I had to be able to filter my task list from all to active to completed, this is where I had the most trouble but also where I was able to find a solution faster because I was a lot more comfortable with the language than at first. I found a way to do it, and everything works really well, although I think the code could be shrinked more.
  

## Check out my live demo! (https://angel2424.github.io/to_do_app)

  
