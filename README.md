# Marcus Institute - NIDUS Web Site - Metrics Panel
## Purpose
The purpose of the project is to archve the source code for the metrics panel displayed on the NIDUS Web site.


## Usage

### Wordpress
- IFRAME embedded in the NIDUS Web site
  - Example: https://hebrewseniorlife.github.io/nidus-app-metrics
- Index / Metrics.html hosted on a Web server (or GitHub pages)
  - Example: https://hebrewseniorlife.github.io/nidus-app-metrics/metrics.html

```html
<iframe src="https://hebrewseniorlife.github.io/nidus-app-metrics/metrics.html" scrolling="no" frameBorder="0" style="width: 650px; height: 75px;  overflow: hidden;" allowtransparency="true"></iframe>
```

### Image Generator
The project may also use Puppetteer to create an PNG image of the metrics page.
#### Command
> node index.js
