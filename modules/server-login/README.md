---
publicAuthorization: "read, search, execute"
---
# Server login

server-login (`OperationClassification` node-cjs)

This operation exposes rudimentary functions to set cookies from the backend. We require cookies in order to authenticate a user for GET requests. Cookies are sent to the server for every request and are a safer way, because they are not part of the URL that can be found in the browser history.

This thing is far from finished, see `todo/` for what needs to be done.




# Docs

Your doccomment here
*/
```

This overwrites the public authorisation.


### Editing api availability

By default, every exported backend function will become available through the api after indexation of the operation and generating the SDK.

If you want to disable that for a function, you can do so by disabling it altogether, by adding this parameter into your frontmatter.

```ts
/**
---
isApiExposed: false
---

Your doccomment here
*/
const yourFunction = () => void
```

  </details>

# Api reference

