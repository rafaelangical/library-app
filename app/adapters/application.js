import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
const { inject } = Ember;

export default ToriiFirebaseAdapter.extend({
  firebase: inject.service(),

  open: function(authorization){
    var userId = authorization.user,
        store  = this.get('store');
    return store.find('user', userId).then(function(user){
      return {
        currentUser: user
      };
    });
  }
});