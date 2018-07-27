/* jshint ignore:start */
import { module, test } from 'qunit';
import {
  andThen,
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | bookmark delete', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /bookmark-delete', async function(assert) {
    // Verify route
    await visit('/bookmark-delete');
    assert.equal(currentURL(), '/bookmark-delete');
    const user = window.server.create('user', {});
    const bookmark = window.server.create('bookmark', {
      title: 'Test Bookmark',
      userId: user.id,
    });
    await visit(`/bookmarks/edit/${bookmark.id}`);
    click('button#delete');
    andThen(function() {
      assert.equal(currentURL(), '/bookmarks');
    })
  });
});
