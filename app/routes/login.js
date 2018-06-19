import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      const controller = this.get('controller');
      const email = controller.get('userEmail');
      const password = controller.get('userPassword');
        this.get('session').open('firebase', {
             provider: 'password',
             email: email,
             password: password
        }).then(function() {
            this.transitionTo('/');
        }.bind(this));
    }
   }
});