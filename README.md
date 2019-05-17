# Craco Interpolate HTML

[craco](https://github.com/sharegate/craco) plugin to apply interpolate-html to create-react-app

# installation

```text
# npm
$ npm install craco-interpolate-html-plugin

# yarn
$ yarn add craco-interpolate-html-plugin
```

# Usage

```javascript
// craco.config.js
// @see https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview
const interpolateHtml = require('craco-interpolate-html-plugin');

module.exports = {
  plugins: [
    {
      plugin: interpolateHtml,
      // Enter the variable to be interpolated in the html file
      options: {
        preText: 'This is Interpolate Html Option',
      },
    },
  ],
};
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
  </head>
  <body>
    <!-- using preTest -->
    <div>%preText%</div>
  </body>
</html>
```

# License

MIT
