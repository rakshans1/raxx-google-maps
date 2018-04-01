## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/rakshans1/raxx-google-maps.git
```

and run:

```bash
npm install
npm start
```

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the component for production, run:

```bash
npm run build
```


## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/raxx-google-maps/dist/raxxgooglemaps.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install raxx-google-maps --save`
- Put a script tag similar to this `<script src='node_modules/raxx-google-maps/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


### Html file
```
<raxx-google-maps apikey="YOUR_API_KEYS" id="google"></raxx-google-maps>
```
[Get your api key](https://developers.google.com/maps/documentation/javascript/get-api-key)


### Adding marker
```
<script>
const map = document.getElementsByTagName('raxx-google-maps');
map[0].addMarker(19.230145, 72.918576)
</script>