# NoticeJS

![](https://img.shields.io/npm/v/@colecmc/noticejs.svg) ![](https://img.shields.io/github/commit-activity/y/colecmc/noticejs.svg) ![](https://img.shields.io/github/issues-raw/colecmc/noticejs.svg) ![](https://img.shields.io/github/issues-closed-raw/colecmc/noticejs.svg)

> Easy to use vanilla js, micro-library to show a notice on screen.

## Installation
`npm install @colecmc/noticejs --save`

## Usage
```js
const Notice = require('@colecmc/noticejs/src/js/notice');
const notice = new Notce();

notice.memo('Hello World!')
      .type('some-css-class-name other css classnames')
      .show()
      .hide(1);
```

### API
#### memo(message)
**message** `string`

Returns Notice instance.

String to be shown to the user once show() is called. Will throw an error if some other primitive type is passed in.

#### type(css)
**css** `string`

Returns Notice instance.

String, which are css class names, that get added to the main container. Will throw an error if some other primitive type is passed in.
If `updated` is passed in, `block` class will be removed from `span.spinner` element.

#### show()

Returns Notice instance.

Shows the notice, which will stay on screen until `hide` or `hideLater` is called.

#### hide()

Returns Notice instance.

Hides the notice.

#### hideLater(elapse)
**elapse** `number` specified in milliseconds

Returns a Promise.

Hides the notice after the `elapse` time has passed. Will throw an error if some other primitive type is passed in


### CSS
The css in the /dist is minimal, you will likely want to add your own styles.

The library uses the following css class names and styles should correspond:
* notice - main container
* toggle-visibility - hides the main container (this is on by default)
* spinner - optionally use a background image to display some kind of loading/spinner icon
* block - display block on the span.spinner element
* updated - will cause block class to be removed from span.spinner element

## Run Tests
`npm test`

## License
noticejs is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
