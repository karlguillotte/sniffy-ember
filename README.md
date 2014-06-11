# Sniffy

## Installation
```sh
git clone https://github.com/karlguillotte/sniffy
cd sniffy
npm install
bower install
```


## Running
```sh
ember server
```
npm and bower install should be run everytime this repo is synchronized. 
```sh
npm install
bower install
ember server
```
Visit [http://localhost:4200](http://localhost:4200)

## Building & Deployment
```sh
ember build
firebase deploy
firebase open
```

## Running Tests

* `ember test`
* `ember test --server`

## Screenshots
https://www.lucidchart.com/documents/edit/c8d54cba-1343-4652-bd52-abaac65f6879

## If empty database
```JavaScript
Sniffy.__container__.lookup('store:main').createRecord('user', { name: 'Blair Bodnar', handle: 'BB', id: '-JO7EyRq1TB4t9fKVe9D' }).save();
```
