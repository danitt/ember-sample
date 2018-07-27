import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  bookmark: null,
  router: service(), // quick and dirty way to resolve bookmark value
  actions: {
    save(bookmark) {
      console.info('Save called', bookmark);
      bookmark.save()
        .then(value => {
          console.info('save result', value);
          this.get('router').transitionTo('bookmarks');
        })
        .catch(err => {
          console.error('failed to save', err);
        });
    },
    cancel() {
      console.info('Cancel called');
    },
    delete(bookmark) {
      console.info('Delete called');
      bookmark.destroyRecord();
      this.get('router').transitionTo('bookmarks');
    }
  }
});
