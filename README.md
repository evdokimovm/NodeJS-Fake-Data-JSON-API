# Fake Data JSON API

NodeJS JSON API Server Providing Fake Data using [Faker.js](https://github.com/Marak/faker.js).

This API used all API Methods listed in the Official Repository [Faker.js](https://github.com/Marak/faker.js#api-methods).

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) (Cross-Origin Resource Sharing) enable with [CORS Node Module](https://www.npmjs.com/package/cors).

> CORS can be enabled without use CORS Node Module

```js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
```

## v.1.0.0

#### Run Server

1. `git clone https://github.com/evdokimovm/NodeJS-Fake-Data-JSON-API.git`
2. `cd NodeJS-Fake-Data-JSON-API`
3. `npm install`
4. `node fake-data-api-v1.js`

#### Methods

In `fake-data-api-v1`, Faker.js different methods are scattered to different URL addresses.

1. Method `address` on `http://localhost:3500/api/fake/address`
2. Method `commerce` on `http://localhost:3500/api/fake/commerce`
3. Method `company` on `http://localhost:3500/api/fake/company`
4. Method `date` on `http://localhost:3500/api/fake/date`
5. Method `finance` on `http://localhost:3500/api/fake/finance`
6. Method `hacker` on `http://localhost:3500/api/fake/hacker`
7. Method `helpers` on `http://localhost:3500/api/fake/helpers`
8. Method `image` on `http://localhost:3500/api/fake/image`
9. Method `internet` on `http://localhost:3500/api/fake/internet`
10. Method `lorem` on `http://localhost:3500/api/fake/lorem`
11. Method `name` on `http://localhost:3500/api/fake/name`
12. Method `phone` on `http://localhost:3500/api/fake/phone`
13. Method `random` on `http://localhost:3500/api/fake/random`
14. Method `system` on `http://localhost:3500/api/fake/system`

#### Usage

For get data from `fake-data-api-v1` you can use `jQuery.getJSON` function.
For example:

```js
$.getJSON('http://localhost:3500/api/fake/address').done(function(data) {
    console.log(data[0].zipCode);
});
```

## v.2.0.0

#### Run Server

1. `git clone https://github.com/evdokimovm/NodeJS-Fake-Data-JSON-API.git`
2. `cd NodeJS-Fake-Data-JSON-API`
3. `npm install`
4. `node fake-data-api-v2.js`

#### Methods

In `fake-data-api-v2`, Faker.js different methods are scattered to different objects and located at the one address `http://localhost:3500/api/fake`

#### Usage

For get data from `fake-data-api-v2` you can use `jQuery.getJSON` function.
For example get data from `helpers -> createCard` method:

```js
$.getJSON('http://localhost:3500/api/fake').done(function(data) {
    console.log(data.helpers.createCard.posts[0].words);
});
```
