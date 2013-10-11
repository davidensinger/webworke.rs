# webworke.rs
**Life and Craft in Columbus, Ohio**

## Getting Started
- Check that you have [Node.js](http://nodejs.org/), [Ruby](http://www.ruby-lang.org/), [Bundler](http://gembundler.com/), and [Grunt](http://gruntjs.com/) installed
- Run `npm cache clean` and then `npm install` and `bundle` to install dependencies.

## Grunt Workflow
- `grunt server`: Compiles all files and opens the site in your default browser. A watch task watches for changes to files, recompiles if necessary, and injects the changes into the browser with LiveReload
- `grunt check`: Checks code quality with Jshint, CSS Lint and CSSCSS, and Jekyll health with `jekyll doctor`
- `grunt build`: Builds an optimized site to the dist directory.

## Thanks
This site has been scaffolded courtesy of [Yeoman](http://yeoman.io/) and [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb).
