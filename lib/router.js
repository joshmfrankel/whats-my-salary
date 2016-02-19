Router.configure({
  layoutTemplate: 'main'
});
Router.route('/listing');
Router.route('/todos');
Router.route('/register');
Router.route('/login');
Router.route('/', {
  name: 'home',
  template: 'home'
});
Router.route('/test', {
  data: function () {
    console.log('shiiit');
  }
});
