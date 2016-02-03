# TIC TAC TOE

This is a quick demo of a tic-tac-to app

It was originally inspired by an interview question including css for a game board and a question about DOM event listeners.

## Plan
* Create a game board with html/css
* Add event listeners
* Animate line drawing
* Add socket for multiplayer

# Step 1
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

## Basic CSS
* Set height for the cells. The rows will conform to the height I set;
* Set width as a percentage of each row. for this implementation, I went with calc(), so the widths would be more exact. If this were an actual interview, I'd just put the width to 32.125% or something similar.
* We can add an x or O to a box by adding the has-x or has-o class to a cell
* There's also a user-x or user-o class that we can append to the body which will give use appropriate mouseovers when the user is making their selection
