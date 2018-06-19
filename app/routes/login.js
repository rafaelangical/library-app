import Route from '@ember/routing/route';
import Ember from 'ember'; 

export default Route.extend({
  session: Ember.inject.service(),

  beforeModel: function() {
    this.get("session").fetch().catch(function() {});
  },

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