# Mould

  Mould is a small component to parse and format directives for **[brick](http://github.com/bredele/brick)**.

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/mould

with [browserify](http://browserify.org/):

    $ npm install mould

## Concept

  By default, [brick](http://github.com/bredele/brick) doesn't parse the content of your directives. It's simply returned as a string to your plugins:

```html
<span data-plugin="do something"></span>
```

```js
brick(span)
  .add('data-plugin', function(node, content) {
    // content => do something
  });
```

  Brick is intentionnaly limited to allow you to create your own macro language inside a directive. For example, you could finish up doing something like:

```html
<ul data-each="item in items"></ul>
```  

  However, having a consistent interface between plugins makes them less confusing to use and easier to learn and develop. This is what mould is for.

## Usage

<!-- ```html
<span data-plugin="do something"></span>
```


```js
brick(span)
  .add('data-plugin', mould(function(node, ) {

  }));
``` -->

## License

  The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.