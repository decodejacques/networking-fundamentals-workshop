## Description
Your job is to create an HTTP server that loads an HTML file at the `/` path and a javascript file at the `/somescript.js` path. The HTTP server is located in the `template.js` file. Running `node template.js` will start the HTTP server.

At the `/` path, the HTTP response should have a content type of `text/html` and the body should be the following:

```html
<html>
    <body>
        <div id='somediv'></div>
        <script src='/somescript.js'></script>
    </body>
</html>
```

At the /somescript.js path, the HTTP response should be of type `application/javascript` and the body should be the following:

```javascript
document.getElementById("somediv").innerText="success!";
```


## Submission
Modify the file template.js directly.

Furthermore, take a screenshot of the webpage and put it in the submission folder.

## Supplied solution
The solution as well as the solution video are provided in the solution folder.

If you're stuck, try watching the video
