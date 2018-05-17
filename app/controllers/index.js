import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
export default Controller.extend({
	headerMessage: 'Coming Soon',
	responseMessage: '',
	emailAddress: '',
	isValid: match('emailAddress', /^.+@.+ \. .+$/),
	isDisabled: not('isValid'),
	actions: {
		saveInvitation() {
			const email = this.get('emailAddress');
			const newInvitation = this.store.createRecord('invitation', { email });
			newInvitation.save().then((response) => {
				this.set(
					'responseMessage',
					` Thank you ! We saved your email address with the following id : ${response.get('id')} `
				);
				this.set('emailAddress', '');
			});
		}
	}
});
