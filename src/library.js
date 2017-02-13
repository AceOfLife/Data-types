module.exports = {
  datatypes: function (value) {

  if (typeof value === "undefined") {
     return "no value" }

  if (typeof value === 'number'){
       if (value < 100){
         return 'less than 100'
      }
       else if (value > 100){
         return "more than 100"
      }
       else {
         return "equal to 100"
     }}

  if (typeof value === 'function') {
      var callback = function(arg) {
   if(arg === true) {
   return 'called callback';
  }}
 
  if (value === true){
  return true;
  }

  if (value === false){
  return false;
  }

  if (value === null) {
  return "no value"
  }
  if (typeof vakue === 'string'){
     return x.length;
   }
  if (value.constructor === Array){
    return x[2]
    
    if (value[0].length < value[2]){
      return 'undefined';
    }

  }}
}}