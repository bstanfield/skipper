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
require.register("includes/footer.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Ffooter.pug":".footer\n  .primary-container\n    .container\n      .row\n        .col-md-3\n          h4 Explore\n          a(href='about.html') About us\n          a(href='blog.html') Blog\n          br\n        .col-md-3\n          h4 Resources\n          a(href='index.html#research') Research\n          a(href='privacy.html') Privacy\n          br\n        .col-md-6\n          h4 Subscribe for updates\n          form#emailForm(action=\"\" type=\"\")\n            .form-group\n                    input.input-box(type='text', placeholder='Email address' name='email')\n            \n            input#email_submit.button(type=\"submit\" value=\"Sign up\")\n\n        script.\n          var $ = require('jquery');\n          $('#emailForm').submit(function(e){\n            e.preventDefault();\n            $.ajax({\n                url:'https:\u002F\u002Fhooks.zapier.com\u002Fhooks\u002Fcatch\u002F2137285\u002Fwo0as1\u002F',\n                type:'post',\n                data:$('#emailForm').serialize(),\n                success:function(){\n                  window.location = \"\u002Fsuccess.html\";\n                }\n            });\n          });\n\n    .container\n      img.tiny.closer(src=imgpath + \"skipper-icon.png\")"};
;var locals_for_with = (locals || {});(function (imgpath) {;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"primary-container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Explore\u003C\u002Fh4\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"about.html\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "About us\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"blog.html\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Blog\u003C\u002Fa\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Resources\u003C\u002Fh4\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"index.html#research\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Research\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"privacy.html\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Privacy\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-6\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Subscribe for updates\u003C\u002Fh4\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cform id=\"emailForm\" action=\"\" type=\"\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cinput class=\"input-box\" type=\"text\" placeholder=\"Email address\" name=\"email\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cinput class=\"button\" id=\"email_submit\" type=\"submit\" value=\"Sign up\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "var $ = require('jquery');";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "$('#emailForm').submit(function(e){";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "  e.preventDefault();";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "  $.ajax({";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "      url:'https:\u002F\u002Fhooks.zapier.com\u002Fhooks\u002Fcatch\u002F2137285\u002Fwo0as1\u002F',";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "      type:'post',";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "      data:$('#emailForm').serialize(),";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "      success:function(){";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "        window.location = \"\u002Fsuccess.html\";";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "      }";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "  });";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "});";
;pug_debug_line = 36;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 36;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"tiny closer\""+pug.attr("src", imgpath + "skipper-icon.png", true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"imgpath" in locals_for_with?locals_for_with.imgpath:typeof imgpath!=="undefined"?imgpath:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/head.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fhead.pug":"head\n  meta(charset=\"utf-8\")\n  meta(name=\"viewport\" content=\"width=device-width\")\n\n  \u002F\u002F- Google Analytics\n  \u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-121010767-1\"\u003E\u003C\u002Fscript\u003E\n\n  \u002F\u002F- LiveChat (Free Trial)\n  script.\n    window.__lc = window.__lc || {};\n    window.__lc.license = 9867750;\n    (function() {\n      var lc = document.createElement('script'); lc.type = 'text\u002Fjavascript'; lc.async = true;\n      lc.src = ('https:' == document.location.protocol ? 'https:\u002F\u002F' : 'http:\u002F\u002F') + 'cdn.livechatinc.com\u002Ftracking.js';\n      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);\n    })();\n  \n  script.\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n    gtag('config', 'UA-121010767-1');\n\n  \u002F\u002F- OpenGraph Properties\n  meta(property=\"og:type\" content=\"website\")\n  meta(property=\"og:url\" content=\"http:\u002F\u002Fwww.skipper.ai\")\n  meta(property=\"og:site_name\" content=\"Skipper.ai\")\n  meta(property=\"og:title\" content=\"Skipper | Navigate and improve inclusion in your workplace\")\n  meta(property=\"og:description\" content=\"Skipper shows you how employee-development initiatives and benefits impact your team's productivity and well-being.\")\n  meta(property=\"og:image\" content=\"https:\u002F\u002Fimgur.com\u002Fa\u002FxVHYYqF\")\n  \n  \u002F\u002F- Twitter Card\n  \u003Cmeta name=\"twitter:card\" content=\"summary_large_image\"\u003E\n  \u003Cmeta name=\"twitter:domain\" value=\"skipper.ai\" \u002F\u003E\n  \u003Cmeta name=\"twitter:title\" value=\"Skipper\" \u002F\u003E\n  \u003Cmeta name=\"twitter:description\" value=\"Skipper shows you which benefits, L&amp;D initiatives, and company culture decisions have the biggest impact on engagement and productivity so you can build the most effective culture possible.\" \u002F\u003E\n  \u003Cmeta name=\"twitter:image\" content=\"https:\u002F\u002Fimgur.com\u002Fa\u002FxVHYYqF\" \u002F\u003E\n  \u003Cmeta name=\"twitter:url\" value=\"http:\u002F\u002Fwww.skipper.ai\u002F\" \u002F\u003E\n  \u003Cmeta name=\"twitter:label1\" value=\"Sign up for beta\" \u002F\u003E\n  \u003Cmeta name=\"twitter:data1\" value=\"at skipper.ai\u002Fbeta.html\" \u002F\u003E\n  \u003Cmeta name=\"twitter:label2\" value=\"Find culture resources\" \u002F\u003E\n  \u003Cmeta name=\"twitter:data2\" value=\"at skipper.ai\u002Fblog.html\" \u002F\u003E\n  title Skipper\n  \n  \u002F\u002F- CSS Compile & Google Fonts\n  link(rel=\"stylesheet\" href=\"\u002Fapp.css\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,500,500i,600,600i\" rel=\"stylesheet\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Merriweather:400,400i,700,700i\" rel=\"stylesheet\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Serif:400,400i,500,500i\" rel=\"stylesheet\")\n  \n  \u002F\u002F- Favicon\n  link(rel=\"shortcut icon\" type=\"image\u002Fx-icon\" href=\"..\u002Fimages\u002Ffavicon.ico\")\n\n  \u002F\u002F- Compiled Scripts\n  script(src=\"\u002Fvendor.js\")\n  script(src=\"\u002Fapp.js\")\n  script(require('initialize'))"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-121010767-1\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.__lc = window.__lc || {};";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.__lc.license = 9867750;";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "(function() {";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  var lc = document.createElement('script'); lc.type = 'text\u002Fjavascript'; lc.async = true;";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  lc.src = ('https:' == document.location.protocol ? 'https:\u002F\u002F' : 'http:\u002F\u002F') + 'cdn.livechatinc.com\u002Ftracking.js';";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "})();";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 19;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.dataLayer = window.dataLayer || [];";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "function gtag(){";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  dataLayer.push(arguments);";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "}";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('js', new Date());";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('config', 'UA-121010767-1');";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:type\" content=\"website\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:url\" content=\"http:\u002F\u002Fwww.skipper.ai\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:site_name\" content=\"Skipper.ai\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:title\" content=\"Skipper | Navigate and improve inclusion in your workplace\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:description\" content=\"Skipper shows you how employee-development initiatives and benefits impact your team's productivity and well-being.\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image\" content=\"https:\u002F\u002Fimgur.com\u002Fa\u002FxVHYYqF\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta name=\"twitter:card\" content=\"summary_large_image\"\u003E\n\u003Cmeta name=\"twitter:domain\" value=\"skipper.ai\" \u002F\u003E\n\u003Cmeta name=\"twitter:title\" value=\"Skipper\" \u002F\u003E\n\u003Cmeta name=\"twitter:description\" value=\"Skipper shows you which benefits, L&amp;D initiatives, and company culture decisions have the biggest impact on engagement and productivity so you can build the most effective culture possible.\" \u002F\u003E\n\u003Cmeta name=\"twitter:image\" content=\"https:\u002F\u002Fimgur.com\u002Fa\u002FxVHYYqF\" \u002F\u003E\n\u003Cmeta name=\"twitter:url\" value=\"http:\u002F\u002Fwww.skipper.ai\u002F\" \u002F\u003E\n\u003Cmeta name=\"twitter:label1\" value=\"Sign up for beta\" \u002F\u003E\n\u003Cmeta name=\"twitter:data1\" value=\"at skipper.ai\u002Fbeta.html\" \u002F\u003E\n\u003Cmeta name=\"twitter:label2\" value=\"Find culture resources\" \u002F\u003E\n\u003Cmeta name=\"twitter:data2\" value=\"at skipper.ai\u002Fblog.html\" \u002F\u003E";
;pug_debug_line = 45;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 45;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "Skipper\u003C\u002Ftitle\u003E";
;pug_debug_line = 48;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,500,500i,600,600i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Merriweather:400,400i,700,700i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Serif:400,400i,500,500i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"shortcut icon\" type=\"image\u002Fx-icon\" href=\"..\u002Fimages\u002Ffavicon.ico\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fvendor.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 58;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fapp.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 59;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript require('initialize')\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/nav.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fnav.pug":"\u002F\u002F- - function openNav()\n\u002F\u002F-     document.getElementById('open').style.display = 'none'\n\u002F\u002F-     document.getElementById('nav').style.width = '100%'\n\n\u002F\u002F- .nav#nav\n\u002F\u002F-     a(href=\"javascript:void(0)\" class=\"close\" onclick=\"closeNav()\") &times;\n\u002F\u002F-     a(href=\"#\") Home\n\u002F\u002F-     a(href=\"#\") Research\n\u002F\u002F-     a(href=\"#\") About Us\n\u002F\u002F-     a(href=\"#\") Join Beta\n.navbar\n    .nav-items\n        .nav-burger\n            span.open(id=\"open\" onclick=\"openNav()\") &#9776\n        a.nav-logo(href='\u002F')\n            img.medium(src='images\u002Fskipper-logo.png')\n        .nav-menu\n            \u002F\u002F- a.nav-link(href=\"index.html\") Home\n            a.nav-link(href='about.html') About Us\n            a.nav-link(href='blog.html') Blog\n            a.nav-link.beta-link(href='demo.html') Request A Demo"};
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-items\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-burger\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cspan class=\"open\" id=\"open\" onclick=\"openNav()\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "&#9776\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-logo\" href=\"\u002F\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cimg class=\"medium\" src=\"images\u002Fskipper-logo.png\"\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-menu\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"about.html\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "About Us\u003C\u002Fa\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"blog.html\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Blog\u003C\u002Fa\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link beta-link\" href=\"demo.html\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Request A Demo\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("initialize.js", function(exports, require, module) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // do your setup here
  console.log('Initialized app');

  var $ = require('jquery');
});
});

require.register("logger.js", function(exports, require, module) {
'use strict';

console.log('Hello, world');
});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map