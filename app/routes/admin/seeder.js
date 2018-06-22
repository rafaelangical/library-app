import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import Configuration from  './configuration';

export default Route.extend({

  // You can use these lines to experiment with route hooks.
  // Uncomment these and comment out the real implementation below.
  // Open inspection console in your browser and check how Ember call
  // each hook automatically.
  //
  //init() {
  //  debugger;
  //},
  //
  //beforeModel() {
  //  debugger;
  //},
  //
  //model() {
  //  debugger;
  //},
  //
  //afterModel() {
  //  debugger;
  //},
  //
  //setupController() {
  //  debugger;
  //},
  //
  //renderTemplate() {
  //  debugger;
  //},
  //
  //activate() {
  //  debugger;
  //}
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
    return hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);

    this._super(controller, model);
  }
});
