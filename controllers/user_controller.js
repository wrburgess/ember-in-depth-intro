App.UserController = Ember.ObjectController.extend({
  deleteMode: false,

  actions: {
    edit: function(){
      this.transitionToRoute('user.edit');
    },
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('users');
      this.set('deleteMode', false);
    }
  }
});