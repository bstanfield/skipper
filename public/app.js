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
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Ffooter.pug":".footer\n  .primary-container\n    .container#footer-hr\n      .row(style=\"padding-top: 50px;\")\n        .col-md-3\n          h4 Explore\n          a(href='about.html') About us\n          a(href='blog.html') Blog\n          br\n        .col-md-3\n          h4 Resources\n          a(href='privacy.html') Privacy Policy\n          a(href='https:\u002F\u002Fmedium.com\u002Fskipper-ai\u002F5-memorable-quotes-from-culture-first-723790d6bc21') Medium Articles\n          \n          br\n        .col-md-6\n          h4 Request a demo\n          br\n          form#simpleForm(action=\"success.html\" method=\"GET\")\n              input.input-box.input-nav(type=\"email\" placeholder=\"Enter email\" name=\"email\" style=\"margin-left: 0px;\")\n              input#email_submit.button.button-nav(type=\"submit\" value=\"Join beta\")            \n\n    .container\n      img.tiny.closer(src=imgpath + \"skipper-icon.png\")"};
;var locals_for_with = (locals || {});(function (imgpath) {;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"primary-container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\" id=\"footer-hr\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\" style=\"padding-top: 50px;\"\u003E";
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
pug_html = pug_html + "\u003Ca href=\"privacy.html\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Privacy Policy\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fskipper-ai\u002F5-memorable-quotes-from-culture-first-723790d6bc21\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Medium Articles\u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-6\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Request a demo\u003C\u002Fh4\u003E";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 19;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cform id=\"simpleForm\" action=\"success.html\" method=\"GET\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cinput class=\"input-box input-nav\" type=\"email\" placeholder=\"Enter email\" name=\"email\" style=\"margin-left: 0px;\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cinput class=\"button button-nav\" id=\"email_submit\" type=\"submit\" value=\"Join beta\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"tiny closer\""+pug.attr("src", imgpath + "skipper-icon.png", true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"imgpath" in locals_for_with?locals_for_with.imgpath:typeof imgpath!=="undefined"?imgpath:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/head.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fhead.pug":"head\n  meta(charset=\"utf-8\")\n  meta(name=\"viewport\" content=\"width=device-width\")\n\n  \u002F\u002F- Google Analytics\n  \u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-121010767-1\"\u003E\u003C\u002Fscript\u003E\n\n  \u002F\u002F- AdWords\n  \u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=AW-799084191\"\u003E\u003C\u002Fscript\u003E\n  \n  script.\n    window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n    gtag('config', 'AW-799084191');\n\n  \u002F\u002F- Facebook Pixel (warning)\n  script.\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https:\u002F\u002Fconnect.facebook.net\u002Fen_US\u002Ffbevents.js');\n    fbq('init', '1876966272387087', {\n      'em': 'em',\n      'fn': 'fn',\n      'ln': 'ln',\n    });\n    fbq('track', 'PageView');\n\n  noscript.\n    \u003Cimg height=\"1\" width=\"1\" style=\"display:none\"\n    src=\"https:\u002F\u002Fwww.facebook.com\u002Ftr?id=1876966272387087&ev=PageView&noscript=1\"\n    \u002F\u003E\n\n  \u002F\u002F- FontAwesome\n  \u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.3.1\u002Fcss\u002Fall.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\"\u003E\n  \n  script.\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n    gtag('config', 'UA-121010767-1');\n\n  \u002F\u002F- INTERCOM\n  script.\n      window.intercomSettings = {\n        app_id: 'd2qx1f2z'\n      };\n\n  script.\n    (function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text\u002Fjavascript';s.async=true;s.src='https:\u002F\u002Fwidget.intercom.io\u002Fwidget\u002Fd2qx1f2z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()\n\n  \u002F\u002F- Hubspot\n  \u003Cscript type=\"text\u002Fjavascript\" id=\"hs-script-loader\" async defer src=\"\u002F\u002Fjs.hs-scripts.com\u002F4671514.js\"\u003E\u003C\u002Fscript\u003E\n\n\n  \u002F\u002F- OpenGraph Properties\n  meta(property=\"og:type\" content=\"website\")\n  meta(property=\"og:url\" content=\"http:\u002F\u002Fwww.skipper.ai\")\n  meta(property=\"og:site_name\" content=\"Skipper.ai\")\n  meta(property=\"og:title\" content=\"Skipper | Navigate and improve inclusion in your workplace\")\n  meta(property=\"og:description\" content=\"Skipper shows you how employee-development initiatives and benefits impact your team's productivity and well-being.\")\n  meta(property=\"og:image\" content=\"https:\u002F\u002Fi.imgur.com\u002FEd61mdF.png\")\n  \n  \u002F\u002F- Twitter Card\n  \u003Cmeta name=\"twitter:card\" content=\"summary_large_image\"\u003E\n  \u003Cmeta name=\"twitter:domain\" value=\"skipper.ai\" \u002F\u003E\n  \u003Cmeta name=\"twitter:title\" value=\"Skipper\" \u002F\u003E\n  \u003Cmeta name=\"twitter:description\" value=\"Skipper measures company engagement and productivity... without sending a single survey.\" \u002F\u003E\n  \u003Cmeta name=\"twitter:image\" content=\"https:\u002F\u002Fi.imgur.com\u002FEd61mdF.png\" \u002F\u003E\n  \u003Cmeta name=\"twitter:url\" value=\"http:\u002F\u002Fwww.skipper.ai\u002F\" \u002F\u003E\n  title Skipper | Navigate and improve company culture\n  \n  \u002F\u002F- CSS Compile & Google Fonts\n  link(rel=\"stylesheet\" href=\"\u002Fapp.css\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,500,500i,600,600i\" rel=\"stylesheet\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Merriweather:400,400i,700,700i\" rel=\"stylesheet\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Serif:400,400i,500,500i\" rel=\"stylesheet\")\n  link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Mono:400,400i,700,700i\" rel=\"stylesheet\")\n  \n  \u002F\u002F- Favicon\n  link(rel=\"shortcut icon\" type=\"image\u002Fx-icon\" href=\"..\u002Fimages\u002Ffavicon.ico\")\n\n  \u002F\u002F- Compiled Scripts\n  script(src=\"\u002Fvendor.js\")\n  script(src=\"\u002Fapp.js\")\n  script(require('initialize'))"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-121010767-1\"\u003E\u003C\u002Fscript\u003E\n\u003Cscript async src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=AW-799084191\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.dataLayer = window.dataLayer || [];";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "function gtag() {";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  dataLayer.push(arguments);";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "}";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('js', new Date());";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('config', 'AW-799084191');";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "!function(f,b,e,v,n,t,s)";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "{if(f.fbq)return;n=f.fbq=function(){n.callMethod?";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "n.callMethod.apply(n,arguments):n.queue.push(arguments)};";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "n.queue=[];t=b.createElement(e);t.async=!0;";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "t.src=v;s=b.getElementsByTagName(e)[0];";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "s.parentNode.insertBefore(t,s)}(window, document,'script',";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "'https:\u002F\u002Fconnect.facebook.net\u002Fen_US\u002Ffbevents.js');";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "fbq('init', '1876966272387087', {";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  'em': 'em',";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  'fn': 'fn',";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  'ln': 'ln',";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "});";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "fbq('track', 'PageView');";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 36;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cnoscript\u003E";
;pug_debug_line = 37;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cimg height=\"1\" width=\"1\" style=\"display:none\"";
;pug_debug_line = 38;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 38;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "src=\"https:\u002F\u002Fwww.facebook.com\u002Ftr?id=1876966272387087&ev=PageView&noscript=1\"";
;pug_debug_line = 39;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 39;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u002F\u003E";
;pug_debug_line = 40;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 40;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fnoscript\u003E";
;pug_debug_line = 42;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.3.1\u002Fcss\u002Fall.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 45;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.dataLayer = window.dataLayer || [];";
;pug_debug_line = 46;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 46;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "function gtag(){";
;pug_debug_line = 47;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 47;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  dataLayer.push(arguments);";
;pug_debug_line = 48;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 48;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "}";
;pug_debug_line = 49;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 49;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('js', new Date());";
;pug_debug_line = 50;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 50;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "gtag('config', 'UA-121010767-1');";
;pug_debug_line = 51;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 51;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 53;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 54;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "window.intercomSettings = {";
;pug_debug_line = 55;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 55;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "  app_id: 'd2qx1f2z'";
;pug_debug_line = 56;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 56;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "};";
;pug_debug_line = 57;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 57;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 58;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 59;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "(function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text\u002Fjavascript';s.async=true;s.src='https:\u002F\u002Fwidget.intercom.io\u002Fwidget\u002Fd2qx1f2z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()";
;pug_debug_line = 60;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 60;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 62;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" id=\"hs-script-loader\" async defer src=\"\u002F\u002Fjs.hs-scripts.com\u002F4671514.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 66;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:type\" content=\"website\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:url\" content=\"http:\u002F\u002Fwww.skipper.ai\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:site_name\" content=\"Skipper.ai\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:title\" content=\"Skipper | Navigate and improve inclusion in your workplace\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:description\" content=\"Skipper shows you how employee-development initiatives and benefits impact your team's productivity and well-being.\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image\" content=\"https:\u002F\u002Fi.imgur.com\u002FEd61mdF.png\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cmeta name=\"twitter:card\" content=\"summary_large_image\"\u003E\n\u003Cmeta name=\"twitter:domain\" value=\"skipper.ai\" \u002F\u003E\n\u003Cmeta name=\"twitter:title\" value=\"Skipper\" \u002F\u003E\n\u003Cmeta name=\"twitter:description\" value=\"Skipper measures company engagement and productivity... without sending a single survey.\" \u002F\u003E\n\u003Cmeta name=\"twitter:image\" content=\"https:\u002F\u002Fi.imgur.com\u002FEd61mdF.png\" \u002F\u003E\n\u003Cmeta name=\"twitter:url\" value=\"http:\u002F\u002Fwww.skipper.ai\u002F\" \u002F\u003E";
;pug_debug_line = 80;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 80;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "Skipper | Navigate and improve company culture\u003C\u002Ftitle\u003E";
;pug_debug_line = 83;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,500,500i,600,600i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Merriweather:400,400i,700,700i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Serif:400,400i,500,500i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Mono:400,400i,700,700i\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink rel=\"shortcut icon\" type=\"image\u002Fx-icon\" href=\"..\u002Fimages\u002Ffavicon.ico\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fvendor.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 94;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fapp.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 95;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Cscript require('initialize')\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/nav.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fnav.pug":".navbar.top\n    .nav-items\n        .nav-burger\n            span.open(id=\"open\" onclick=\"openNav()\") &#9776\n        a.nav-logo(href='\u002F')\n            img.medium(src='images\u002Fskipper-logo.png')\n        .nav-menu\n            \u002F\u002F- a.nav-link(href=\"index.html\") Home\n            a.nav-link(href='about.html') About us\n            a.nav-link(href='blog.html') Blog\n            a.nav-link.demo-link(href='index.html#') Join beta\n            \n            form#simpleForm(action=\"success.html\" method=\"GET\")\n                input.input-box.input-nav(type=\"email\" placeholder=\"Enter email\" name=\"email\")\n                input#email_submit.button.button-nav(type=\"submit\" value=\"Join beta\")"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar top\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-items\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-burger\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cspan class=\"open\" id=\"open\" onclick=\"openNav()\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "&#9776\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-logo\" href=\"\u002F\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cimg class=\"medium\" src=\"images\u002Fskipper-logo.png\"\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-menu\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"about.html\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "About us\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"blog.html\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Blog\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link demo-link\" href=\"index.html#\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Join beta\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cform id=\"simpleForm\" action=\"success.html\" method=\"GET\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cinput class=\"input-box input-nav\" type=\"email\" placeholder=\"Enter email\" name=\"email\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cinput class=\"button button-nav\" id=\"email_submit\" type=\"submit\" value=\"Join beta\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/nav2.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fnav2.pug":"script.\n    var $ = require('jquery');\n    $(window).on(\"scroll\", function() {\n    var scrollPos = $(window).scrollTop();\n        if (scrollPos \u003C= 15) {\n            $('.navbar').removeClass('top');\n        } else {\n            $('.navbar').addClass('top');\n        }\n    });\n    \n.navbar\n    .nav-items\n        .nav-burger\n            span.open(id=\"open\" onclick=\"openNav()\") &#9776\n        a.nav-logo(href='\u002Findex2.html')\n            img.medium(src='images\u002Fskipper-logo.png')\n        .nav-menu\n            \u002F\u002F- a.nav-link(href=\"index.html\") Home\n            a.nav-link(href='about.html') About\n            a.nav-link(href='blog.html') Blog\n            a.nav-link.demo-link(href='request-demo2.html') Request Demo\n            \n            form#demoForm(action=\"\u002Frequest-demo2.html?email=\" method=\"GET\")\n                input.input-box.input-nav(type=\"email\" placeholder=\"Enter email\" name=\"email\")\n                input#email_submit.button.button-nav(type=\"submit\" value=\"Request Demo\")"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "var $ = require('jquery');";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "$(window).on(\"scroll\", function() {";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "var scrollPos = $(window).scrollTop();";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "    if (scrollPos \u003C= 15) {";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "        $('.navbar').removeClass('top');";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "    } else {";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "        $('.navbar').addClass('top');";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "    }";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "});";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003C\u002Fscript\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-items\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-burger\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cspan class=\"open\" id=\"open\" onclick=\"openNav()\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "&#9776\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Ca class=\"nav-logo\" href=\"\u002Findex2.html\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cimg class=\"medium\" src=\"images\u002Fskipper-logo.png\"\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 18;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-menu\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"about.html\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "About\u003C\u002Fa\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"blog.html\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "Blog\u003C\u002Fa\u003E";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link demo-link\" href=\"request-demo2.html\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "Request Demo\u003C\u002Fa\u003E";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cform id=\"demoForm\" action=\"\u002Frequest-demo2.html?email=\" method=\"GET\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cinput class=\"input-box input-nav\" type=\"email\" placeholder=\"Enter email\" name=\"email\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Fnav2.pug";
pug_html = pug_html + "\u003Cinput class=\"button button-nav\" id=\"email_submit\" type=\"submit\" value=\"Request Demo\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
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