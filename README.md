# First steps with ReactJS
This is a repository I will use to track my first steps on ReactJS.

**Disclaimer**: I have been long working on backend (PHP/JAVA mostly) and it has been years since last time I touched anything JS related (except from some lines here and there for internal CRMs).

## TODO
- [x] Following this [basic tutorial](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) a friend of mine suggested [@jmgaya](https://www.github.com/jmgaya).
- [x] Iterate over the Likes example and evolve it into a comments list.
- [ ] Make comments *likeable*.
- [ ] Try to make it talk to external API ([Zen quotes](https://api.github.com/zen) from Github might be a good start, or [Firebase](https://www.firebase.com) to add a layer of persistency).
- [ ] At some point try to include Redux to the party.
- [ ] Next? Who knows...

## Diary
### 1# Following [basic tutorial](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) suggested by [@jmgaya](https://www.github.com/jmgaya)

#### Preparing the IDE (Atom.io)
First things first, I decided to go with [Atom](https://www.atom.io) as editor. ***Why?*** Because it's quite popular and I wanted a full inmersion in the JS movement so, what could be better than an editor made in JS itself? :P  
I added some plugins I found for Atom (mostly from [here](http://www.sitepoint.com/10-essential-atom-add-ons/)):
```
$ apm install seti-ui monokai-seti open-recent highlight-selected autoclose-html auto-detect-indentation atom-beautify linter linter-htmlhint linter-csslint linter-jshint linter-react
```
They are a bunch, linter and friends are very useful but most of the rest are not even close to "necessary". I thought they might be useful at some point.

#### Now the tutorial
It was *really, really, really* easy. But also very quick, so I think it is worth it.  
What did I do?
* Copy/paste some code.
* Create a few files.
* Play around a little with *npm* and *webpack*.
* Add some npm dependencies to make everything work together.
* Understand that you need *babel* to transpile JSX and ES2015 (aka ES6) to common JS.

### 2# First iteration to evolve into a comments list
Now it's time to evolve this thing into something a little more complex. I want to make a comments list and later make the comments *likeable*.

#### Printing the comments
First step is creating a new component `CommentsListComponent`, I did it pretty simple, something that just relies on an array of "comments" stored in the state. I also created a `HeaderComponent` with the header, obviously...  
Then I implemented the `render()` method to iterate over the comments and print them. Pretty easy.  
It works like a charm! But I can only print comments hardcoded into the state...  
Let's create a form so new comments can be added dynamically.

#### Creating the form
I looked for [some inspiration](https://pankajparashar.com/posts/todo-app-react-js/) to see how this kind of forms are supposed to be handled.  
`CommentsListComponent` is updated to show a simple form. Along with that an `onSubmit()` method is added to handle the actual processing of the form input. Here is what I did:  
* Added a form with one text input and a button into the `render()` method.
* Create an `onSubmit()` method, and assign it to the onSubmit property of the form.
* Bind the `onSubmit()` method to this on the Component constructor (I didn't do this at first and it didn't work).
* Update the definition of a comment to have 'text' and also 'id' properties.
* I also added along the way [Bootstrap](http://getbootstrap.com/) to the `index.html` to make this look less ugly.

And that's where we are now. A form we can use to add new comments to a list.  
Next step? Making them *likeable*. ***Mental note:*** What about persistence? I guess we will end up using local storage or maybe an external API like [Firebase](https://www.firebase.com)?
