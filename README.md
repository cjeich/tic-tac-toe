# TIC TAC TOE

This is a quick demo of a tic-tac-to app

It was originally inspired by an interview question including css for a game board and a question about DOM event listeners.

## Plan
* Create a game board with html/css
* Add event listeners for adding/removing classes
* Only use native DOM, no frameworks

## Step 0: server
* Created a quick `server.js` file based on the [node synopsis](https://nodejs.org/dist/latest-v5.x/docs/api/synopsis.html) and [this gist](https://gist.github.com/ryanflorence/701407)
* site can be served with:
```
$ node server.js
```

## Step 1: html
Created some basic html. We need a 3&times;3 grid.
According the interview question, tables are out.
So we'll replicate a table structure with some divs instead.
```
<div class="board">
  <div class="row">
    <div class="cell"></div>
    &hellip;
  </div>
  &hellip;
</div>
```

## Step 2: Basic CSS
* Set height for the cells. The rows will conform to the height I set;
* Set width as a percentage of each row. for this implementation, I went with calc(), so the widths would be more exact. If this were an actual interview, I'd just put the width to 32.125% or something similar.
* We can add an x or O to a box by adding the has-x or has-o class to a cell
* There's also a user-x or user-o class that we can append to the body which will give use appropriate mouseovers when the user is making their selection

## Step 3: Javascript
* Waits for the DOM to be loaded, then listens for click events on the board
* Adds the appropriate class to each cell when clicked
* Swaps out the class on the body tag for hover events
* Switches current user radio

## Summary

### Technologies used
Good old-fashiond html, css and javascript

### The Good
* We now have a hand-crafted bespoke web page with no external dependencies _(except web fonts)_
* CSS adapts to page width. The game is fairly responsive
* Event handlers have been grouped into smaller functions with low cyclomatic complexity

### The Bad
* Our javascript still looks like standard jQuery code, the style is very procedural
* Our data is all based on the DOM and a global variable
* Code is starting to look complex. More features will cause the code to be hard to reason about

### Future Improvements
* __[css]__ - Implementing flexbox would make our styles cleaner and more responsive
* __[css]__ - Code would be more maintainable if we used sass and post-processor (e.g. autoprefixr or post-css)
* __[js]__ - We should objects to maintain state, rather than procedurally manipulating the DOM
* __[js]__ - We need a single source of data (redux)
* __[js]__ - We need a way to render that source to the DOM (react)
* __[server]__ - We need to upgrade our stack to render sass/react (webpack)
