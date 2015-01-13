if (Meteor.isClient) {
  Template.welcome.created = function () {
    a = 0
    for (var i = 0; i < 100000000; i++) {
      // just waste some time before rendering
      a += i
    };
  };
}