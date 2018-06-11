// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: 'app.css',
      order: {
        before: [
          'app/bootstrap.css',
          'app/styles.scss',
          'app/mq.scss',
          'app/fonts.scss',
        ]
      }
  },

  templates: {
    sass: {
      mode: 'ruby' // set to 'native' to force libsass
    }
  }

};

exports.plugins = {
  babel: {presets: ['latest']}
};
