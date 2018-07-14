const edge = require('edge.js');
const hours = new Date().getHours();
let msg = '';

edge.global('hello', function (name) {
  console.log(hours)
  if (hours < 12) {
    msg = 'Good morning'
  } else if (hours < 18) {
    msg = 'Good afternoon'
  } else {
    msg = 'Good evening'
  }
  msg += ', ' + name;
  return this.safe(msg)
})