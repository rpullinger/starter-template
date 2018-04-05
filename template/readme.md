# {{ name }}

![Site image](/src/assets/share.jpg)

## Getting started
* `git clone https://github.com/beyondwordsstudio/{{ name }}.git` – Clone the repo
* `yarn install` – Installs dependencies

## Development

TODO: explain dev environment what there is etc.

`yarn start` – To run a development server with live reloading.

`yarn build` – Build a production ready version of the site to the `build` folder

`yarn lint` – Lint the JavaScript

`yarn analyzer` – Analyse the Webpack bundle

## Production build

TODO: Explain production build / CSS etc.


## Deployment

[Netlify](https://www.netlify.com/) is setup to automatically deploy once code is pushed to GitHub. The `master` branch is deployed to [http://{{ name }}.beyondwordsstudio.com/](http://{{ name }}.beyondwordsstudio.com/). Branches will be deployed to a [Netlify](https://www.netlify.com/) URL with the following structure – https://BRANCH--{{ name }}.netlify.com/ e.g [https://staging--{{ name }}.netlify.com/](https://staging--{{ name }}.netlify.com/).
