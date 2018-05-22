import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
export default DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	phone: DS.attr('string'),
	books: DS.hasMany('book'),
	isValid: notEmpty('name')
});
