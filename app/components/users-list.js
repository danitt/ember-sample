import Component from '@ember/component';

const UsersListComponent = Component.extend({
  imgClass: 'avatar',
  click() {
    console.info('users-list was clicked');
  }
});

UsersListComponent.reopenClass({
  positionalParams: ['avatarUrl', 'email']
});

export default UsersListComponent;
