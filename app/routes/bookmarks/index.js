import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('bookmark', { include: 'user' });
  },
  renderTemplate() {
    this.render('about');
  }
});
