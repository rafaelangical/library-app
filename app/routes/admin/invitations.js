import Route from '@ember/routing/route';
import Configuration from  './configuration';

export default Route.extend({
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      Ember.assert('The route configured as Configuration.authenticationRoute cannot implement the AuthenticatedRouteMixin mixin as that leads to an infinite transitioning loop!', this.get('routeName') !== Configuration.authenticationRoute);

      transition.abort();
      this.set('session.attemptedTransition', transition);
      this.transitionTo('login');
    } else {
      return this._super(...arguments);
    }
  },
  
  model() {
    return this.store.findAll('invitation');
  }
});
