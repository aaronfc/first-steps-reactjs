# First steps with ReactJS
This is a repository I will use to track my first steps on ReactJS.

**Disclaimer**: I have been long working on backend (PHP/JAVA mostly) and it has been years since last time I touched anything JS related (except from some lines here and there for internal CRMs).

## TODO
- [x] Following this [basic tutorial](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) a friend of mine suggested [@jmgaya](https://www.github.com/jmgaya).
- [ ] Iterate over the Likes example and evolve it into a *likeable* comments list.
- [ ] Try to make it talk to external API ([Zen quotes](https://api.github.com/zen) from Github might be a good start).
- [ ] At some point try to include Redux to the party.
- Next? Who knows...

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
