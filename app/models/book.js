import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),
  library: DS.belongsTo('library'),
  author: DS.attr(),
  $: DS.attr(),
  ember: DS.attr(),
  g: DS.attr(),
  model: DS.attr(),
  name: DS.attr('string'),
  books: DS.hasMany('book')
});
