(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("includes/head.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fhead.pug":"head\n\u003Cmeta charset=\"utf-8\"\u003E\n  \u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E\n  title Skipper\n  \u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E\n  \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro|Source+Serif+Pro\" rel=\"stylesheet\"\u003E\n  \n  script(src=\"\u002Fvendor.js\")\n  script(src=\"\u002Fapp.js\")\n\n  script(require('initialize'))"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Chead\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E\n\u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "Skipper\u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E\n\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro|Source+Serif+Pro\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fvendor.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fapp.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript require('initialize')\u003E\u003C\u002Fscript\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/nav.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fnav.pug":".navbar\n    .nav-items\n        .nav-logo\n            img.medium(src='images\u002Fskipper-logo.png')\n        .nav-menu\n            a.nav-link(href='google.com') Features\n            a.nav-link(href='google.com') Research\n            a.nav-link(href='google.com') About Us\n            a.nav-link.beta-link(href='google.com') Join Beta"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-items\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-logo\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cimg class=\"medium\" src=\"images\u002Fskipper-logo.png\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-menu\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"google.com\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Features\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"google.com\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Research\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"google.com\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "About Us\u003C\u002Fa\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link beta-link\" href=\"google.com\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Join Beta\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("initialize.js", function(exports, require, module) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // do your setup here
  console.log('Initialized app');

  var $ = require('jquery');
  console.log('Tasty Brunch, just trying to use jQuery!', $('body'));
});
});

require.register("logger.js", function(exports, require, module) {
'use strict';

console.log('Hello, world');
});

;require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map