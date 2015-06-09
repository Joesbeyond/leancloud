var AV = require('avoscloud-sdk').AV;
AV.initialize("8eol1eflhld00nvp7hcjrjvwyouuuv6jzx1w7jtp3fjhxpg7", "62ui4itl0rm5zusrc8lmb8ktxkyg55pj2h1vl54u7q2m1iea");

var TestObject = AV.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
  console.log("LeanCloud works!");
  }
});