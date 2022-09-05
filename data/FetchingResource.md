## Getting Resource

```javascript
/** Javascript Fetch */

fetch("https://jetcap-api.cyclic.app/users/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err.message));
```

```javascript
/** Jquery AJAX */

$.ajax({
  type: "GET",
  url: "https://jetcap-api.cyclic.app/users/1",
  success: function (data) {
    console.log("Result : ", data);
  },
  error: function () {
    console.error("Oops, something wrong when fetching data");
  },
});
```

```javascript
/** Javascript AJAX */

const HTTP = new XMLHttpRequest();

HTTP.open("GET", "https://jetcap-api.cyclic.app/users/1");
HTTP.send();
HTTP.onreadystatechange = function (e) {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
```

```javascript
/** Axios */

axios
  .get("https://jetcap-api.cyclic.app/users/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));
```

### Output :

```JSON
{
  "id": 1,
  "username": "Andres",
  "email": "Shaylee.Rempel@yahoo.com",
  "fullName": "Robert Koelpin",
  "job": "Legacy Intranet Representative",
  "country": "Congo"
}
```

---

## Listing All Resources

```javascript
/** Javascript Fetch */

fetch("https://jetcap-api.cyclic.app/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err.message));
```

### Output :

```JSON
[
  { "id": 1, "username": "...", /* ... */},
  { "id": 2, "username": "...", /* ... */},
  { "id": 3, "username": "...", /* ... */},
  { "id": 4, "username": "...", /* ... */},
  /* ... */
  { "id": 100, "username": "...", /* ... */}
]
```

---

## Filtering Resources

Basic filtering is supported through query parameters. ✨

```javascript
/** This will return all the posts that belong to the first user */

fetch("https://jetcap-api.cyclic.app/todos?userId=1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err.message));
```

---

## Listing Nested Resources

One level of nested route is available. ✨

```javascript
/** This will return all the posts that belong to the first user */

fetch("https://jetcap-api.cyclic.app/users/1/images")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err.message));
```

The available nested routes are:

- <a href="https://jetcap-api.cyclic.app/users/1/images">/users/1/images</a>

- <a href="https://jetcap-api.cyclic.app/users/1/todos">/users/1/todos</a>

- <a href="https://jetcap-api.cyclic.app/users/1/songs">/users/1/songs</a>