import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.authenticatedRoute('admin', function() {
    this.authenticatedRoute('invitations');
    this.authenticatedRoute('contacts');
    this.authenticatedRoute('seeder');
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('authors');
  this.route('books');
  this.route('login');
  this.route('logout');
});

export default Router;
