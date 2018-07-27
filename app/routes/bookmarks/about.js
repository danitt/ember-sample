import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findRecord('bookmark', 1);
    // this.get('store').queryRecord('bookmark', { aboutIsNull: true });
  },
});
