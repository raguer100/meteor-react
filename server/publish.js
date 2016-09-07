Reactresolutions = new Mongo.Collection('reactresolutions');

console.log(Meteor.settings.private.ptest);

Meteor.publish('resolutions', function() {
	return Reactresolutions.find();
});

Meteor.publish('userResolutions', function() {
	return Reactresolutions.find({user: this.userId});
});