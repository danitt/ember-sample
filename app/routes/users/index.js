import Route from '@ember/routing/route';
import ENV from 'bookmarker/config/environment';

export default Route.extend({
  model() {
    console.info(`Variable pulled from environment.js: "${ENV.APP.title}"`);
    return this.get('store').findAll('user', {
      include: 'bookmarks',
    });
  }
});
