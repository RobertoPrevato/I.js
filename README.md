# I.js
Tiny and simple utility to implement localization in JavaScript, supporting only scoped translations; and simple
templates.

## Features
* Supports scoped translations
* Allow the implementation of simple localization
* Supports NodeJs and amd

## More complex solutions
I.js is meant to be as simple and short as possible, and to support **only** scoped translations.
Users who need more complex solutions (e.g. with support for pluralization; currencies; dates management), should look
instead at other libraries:
* [i18n-js](https://github.com/fnando/i18n-js)
* [i18next](http://i18next.com/)

## Examples
The following example shows how to work with scoped translations, using I.js:
```js
(function () {

  //set the locale information:
  I.regional = {
    "en": {
      "voc": {
        "Hi": "Hi"
      }
    },
    "it": {
      "voc": {
        "Hi": "Ciao"
      }
    },
    "pl": {
      "voc": {
        "Hi": "Cześć"
      }
    }
  };

  I.setLocale("en");
  I.t("voc.Hi"); // --> "Hi"

  I.setLocale("it");
  I.t("voc.Hi"); // --> "Ciao"

  I.setLocale("pl");
  I.t("voc.Hi"); // --> "Cześć"

})();
```

The following example shows how to use simple templates:
```js
(function () {

  //set the locale information:
  I.regional = {
    "en": {
      "voc": {
        "HelloName": "Hello, {{name}}!"
      }
    },
    "it": {
       "voc": {
         "HelloName": "Ciao, {{name}}!"
       }
    }
  };

  I.setLocale("en");
  I.t("voc.HelloName"); // --> "Hello, {{name}}!"
  I.t("voc.HelloName", {
    name: "Edyta" // e.g. user.name
  }); // --> "Hello, Edyta!"

  I.setLocale("it");
  I.t("voc.HelloName"); // --> "Ciao, {{name}}!"
  I.t("voc.HelloName", {
    name: "Edyta" // e.g. user.name
  }); // --> "Ciao, Edyta!"

})();
```

## Examples in other repositories
The following repositories contain examples of internationalization implemented using I.js:
* [jQuery-KingTable](https://github.com/RobertoPrevato/jQuery-KingTable)
* [jQuery-DataEntry](https://github.com/RobertoPrevato/jQuery-DataEntry)
Live demos:
* [KingTable live demo](http://ugrose.com/content/demos/kingtable/index.html)
* [DataEntry live demo](http://ugrose.com/content/demos/jqdataentry/index.html)

## Notes
When setting a locale using the function setLocale; a class to the document.body is also added accordingly
(if the document object exists).