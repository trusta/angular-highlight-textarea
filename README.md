angular-highlight-textarea
==========================

A directive to highlight words and sentences into &lt;textarea> and &lt;input>.
It is based on [jquery-highlighttextarea](http://mistic100.github.io/jquery-highlighttextarea/index.html)


### Usage

1. Install the module with bower.

``` bash
$ bower install angular-highlight-textarea --save
```

2. Include the module in your own app.

```javascript
angular.module('myApp', ['angularHighlightTextarea'])
```

3. Use the directive on any page of your app.

```html
<textarea fb-highlight fb-option="option"></textarea>
```

### Option

It uses the options of the jquery-highlighttextarea.
[See](http://mistic100.github.io/jquery-highlighttextarea/#usage)
