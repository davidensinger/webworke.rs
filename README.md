# webworke.rs
**Life and Craft in Columbus, Ohio**

## Getting Started
Check that the following are installed and up-to-date:
- [Node.js](http://nodejs.org/)
- [Ruby](http://www.ruby-lang.org/): Note that you may want to manage this with [RVM](https://rvm.io/) or [rbenv](https://github.com/sstephenson/rbenv)
- [Bower](http://bower.io/): Manage most (but not all) of the front-end dependencies
- [Bundler](http://gembundler.com/): Manage Jekyll dependencies
- [Grunt](http://gruntjs.com/): Automate Jekyll development and build tasks
- [ImageMagick](http://www.imagemagick.org/script/): For [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag). Note that I found success installing this with [Homebrew](http://brew.sh/) `brew install imagemagick`.

### Optional, but Recommended
You may also want to ensure that your [Xcode](https://developer.apple.com/xcode/) Command Line Tools are up to date, as well as [Homebrew](http://brew.sh/) (run `brew update` first and then `brew doctor`).

## Install Dependencies
Run the following commands to install the dependencies:
- `npm cache clean` and then `npm install`
- `bundle`
- `bower install`

## Grunt Workflow
- `grunt server`: Compiles all files and opens the site in your default browser. A watch task watches for changes to files, recompiles if necessary, and injects the changes into the browser with LiveReload
- `grunt check`: Checks code quality with Jshint, CSS Lint and CSSCSS, and Jekyll health with `jekyll doctor`
- `grunt build`: Builds an optimized site to the dist directory.

## Big Thanks
This site has been scaffolded courtesy of [Yeoman](http://yeoman.io/) and [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) by [@robwierzbowski](https://github.com/robwierzbowski).
