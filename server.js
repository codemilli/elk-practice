var express = require('express');
var ELASTICSEARCH = require('elasticsearch');
var app = express();

var CLIENT = new ELASTICSEARCH.Client({
  host: 'localhost:9200',
  apiVersion: '5.0'
});

CLIENT.get({
  index: 'simpsons',
  type: 'episode',
  id: 1
});
