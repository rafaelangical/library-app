import Route from '@ember/routing/route';
//import { inject } from '@ember/service/inject' 

export default Route.extend({

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