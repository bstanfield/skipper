// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'},

  templates: {
    sass: {
      mode: 'ruby' // set to 'native' to force libsass
    }
  }

};

exports.plugins = {
  babel: {presets: ['latest']}
};
