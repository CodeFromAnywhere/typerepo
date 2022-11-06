[Server.js](https://serverjs.io) is used because it has many great plugins out of the box and doesn't require another middleware for every little thing. I am aware that it is a less common server to use, but it's great, not only because it presents the developer with all required things in a clear way, but also because it keeps the endpoints clean.

With normal [express.js](https://expressjs.com) we are required to return our endpoint response through a function like `res.send`. In `server.js` this is not needed, you can simply return it from the function and put it in the server as an endpoint. This makes it super easy to reuse functions, for example internally (without api), as CLI, and as server endpoint.

Please note: Typerepo might revert back to something like express.js later, as it's not 100% required anymore, since we can simply wrap our general purpose functions into a express endpoint as well. The advantage of express.js would be that it's much better documented and it has first-class support for everything.

Nevertheless, server.js works fine and most things are documented.
