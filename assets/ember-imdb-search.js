"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ember-imdb-search/app', ['exports', 'ember', 'ember-imdb-search/resolver', 'ember-load-initializers', 'ember-imdb-search/config/environment'], function (exports, _ember, _emberImdbSearchResolver, _emberLoadInitializers, _emberImdbSearchConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberImdbSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberImdbSearchConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberImdbSearchResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberImdbSearchConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-imdb-search/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-imdb-search/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberImdbSearchConfigEnvironment) {

  var name = _emberImdbSearchConfigEnvironment['default'].APP.name;
  var version = _emberImdbSearchConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-imdb-search/components/loader-component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ember-imdb-search/components/zoombox-init", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    didInsertElement: function didInsertElement() {
      $(".zoombox").materialbox();
    }
  });
});
define("ember-imdb-search/helpers/image-helper", ["exports", "ember"], function (exports, _ember) {
  exports.imageHelper = imageHelper;

  function imageHelper(params /*, hash*/) {
    if (params[0] === "N/A") {
      params[0] = "//prakashchokalingam.github.io/imdb-search-engine//assets/images/NA.png";
    }
    return params;
  }

  exports["default"] = _ember["default"].Helper.helper(imageHelper);
});
define("ember-imdb-search/helpers/load-more", ["exports", "ember"], function (exports, _ember) {
  exports.loadMore = loadMore;

  function loadMore(params /*, hash*/) {
    if (params[2] == "boolean") {
      if (params[0] - params[1] <= 0) {
        return "hide";
      }
    } else {
      return params[0] - params[1];
    }
  }

  exports["default"] = _ember["default"].Helper.helper(loadMore);
});
define('ember-imdb-search/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-imdb-search/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-imdb-search/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-imdb-search/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberImdbSearchConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberImdbSearchConfigEnvironment['default'].APP.name, _emberImdbSearchConfigEnvironment['default'].APP.version)
  };
});
define('ember-imdb-search/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-imdb-search/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ember-imdb-search/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-imdb-search/initializers/export-application-global', ['exports', 'ember', 'ember-imdb-search/config/environment'], function (exports, _ember, _emberImdbSearchConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberImdbSearchConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emberImdbSearchConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberImdbSearchConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-imdb-search/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ember-imdb-search/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ember-imdb-search/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("ember-imdb-search/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-imdb-search/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-imdb-search/router', ['exports', 'ember', 'ember-imdb-search/config/environment'], function (exports, _ember, _emberImdbSearchConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberImdbSearchConfigEnvironment['default'].locationType,
    rootURL: _emberImdbSearchConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' }, function () {
      // if user refreshes page without year -> transitionTo to 'search' with year = ""
      this.route('missurl', { path: 'search/:type/:key' });
      this.route('search', { path: 'search/:type/:value/:year' });
      this.route('view', { path: 'view/:id/:title' });
    });
    this.route('back');
    this.route('forward');
  });

  exports['default'] = Router;
});
define('ember-imdb-search/routes/back', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      history.back();
      return;
    }
  });
});
define('ember-imdb-search/routes/forward', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      history.forward();
      return;
    }
  });
});
define("ember-imdb-search/routes/index", ["exports", "ember"], function (exports, _ember) {
  // asset values
  var assets = _ember["default"].Object.create({
    advanceSearch: false,
    search: "",
    type: "movie",
    year: "",
    data: ""
  });
  // model
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      this._super.apply(this, arguments);
      return assets;
    },
    actions: {
      EnableAdvanceSearch: function EnableAdvanceSearch() {
        assets.toggleProperty('advanceSearch');
        var _this = this;
        // wait till dom elements to render
        _ember["default"].run.later(function () {
          _this.send('setSearchType', assets.type);;
        }, 300);
      },
      setSearchValue: function setSearchValue(searchValue, event) {
        assets.set('search', searchValue);
        // if key pressed is enter
        if (event.keyCode === 13) {
          this.send("sendSearchApi");
        }
      },
      setSearchType: function setSearchType(value) {
        console.log(value);
        $(".chip").removeClass('active');
        var classname = ".chip." + value;
        $(classname).addClass('active');
        assets.set('type', value);
      },
      setSearchYear: function setSearchYear(searchYear) {
        assets.set('year', searchYear);
      },
      sendSearchApi: function sendSearchApi() {
        this.transitionTo('index.search', assets.get('type'), assets.get('search'), assets.get('year'));
      }
    }
  });
});
define('ember-imdb-search/routes/index/missurl', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      this.transitionTo('index.search', params.type, params.key, "");
    }
  });
});
define("ember-imdb-search/routes/index/search", ["exports", "ember"], function (exports, _ember) {
  var modeldata = _ember["default"].Object.create({
    results: "",
    page: 1,
    url: "",
    loading: false,
    loadmore: false
  });
  exports["default"] = _ember["default"].Route.extend({
    model: function model(params) {
      this._super.apply(this, arguments);
      if (params.type == "all") {
        params.type = "";
      }
      var url = "https://www.omdbapi.com/?s=" + params.value + "&type=" + params.type + "&y=" + params.year;
      modeldata.set('url', url);
      this.loadData(url, true);
      return modeldata;
    },
    loadData: function loadData(url) {
      var _this2 = this;

      var initload = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (initload) {
        (function () {
          modeldata.set('loading', true);
          var _this = _this2;
          $(window).on("scroll.loadMore", function (e) {
            if ($(window).height() + $(window).scrollTop() == $(document).height()) {
              _this.send('loadMore');
            }
          });
        })();
      } else {
        modeldata.set('loadmore', true);
      }
      $.getJSON(url, function () {}).done(function (data) {
        if (data.Response === "True") {
          data.Response = true;
        } else {
          data.Response = false;
        }
        if (initload) {
          modeldata.set('results', data);
          modeldata.set('page', 1);
          modeldata.set('loading', false);
        } else {
          if (data.Response) {
            var newArr = modeldata.get('results').Search.concat(data.Search);
            modeldata.set('results.Search', newArr);
            modeldata.set('loadmore', false);
          } else {
            modeldata.set('loadmore', false);
            $(window).off('.loadMore');
          }
        }
      }).error(function () {});
    },
    actions: {
      loadMore: function loadMore() {
        var url = modeldata.url + "&page=" + (modeldata.get('page') + 1);
        modeldata.set('page', modeldata.get('page') + 1);
        return this.loadData(url);
      }
    }
  });
});
define('ember-imdb-search/routes/index/view', ['exports', 'ember'], function (exports, _ember) {
  var Movie = _ember['default'].Object.create({
    results: "",
    Loading: false
  });
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      Movie.set('Loading', true);
    },
    model: function model(params) {
      var url = 'https://www.omdbapi.com/?i=' + params.id + '&tomatoes=true';
      $.getJSON(url, function () {}).done(function (data) {
        if (data.Response == "True") {
          data.Response = true;
        } else {
          data.Response = false;
        }
        Movie.set('Loading', false);
        Movie.set('results', data);
      }).error(function () {
        var custome_obj = { Response: false };
        Movie.set('results', custome_obj);
      });
      return Movie;
    },
    didInsertElement: function didInsertElement() {
      console.log("x");
    }
  });
});
define('ember-imdb-search/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("ember-imdb-search/templates/back", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 15
            },
            "end": {
              "line": 2,
              "column": 45
            }
          },
          "moduleName": "ember-imdb-search/templates/back.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Go Home ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/back.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Failed ! ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [2, 15], [2, 45]]]], ["content", "outlet", ["loc", [null, [4, 0], [4, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-imdb-search/templates/breadcrumbs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 6
            },
            "end": {
              "line": 2,
              "column": 79
            }
          },
          "moduleName": "ember-imdb-search/templates/breadcrumbs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "material-icons");
          var el3 = dom.createTextNode("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 5,
              "column": 77
            }
          },
          "moduleName": "ember-imdb-search/templates/breadcrumbs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "material-icons");
          var el3 = dom.createTextNode("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 76
            }
          },
          "moduleName": "ember-imdb-search/templates/breadcrumbs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "material-icons");
          var el3 = dom.createTextNode("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/breadcrumbs.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col s4");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col s4 center-align");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col s4");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["forward"], [], 0, null, ["loc", [null, [2, 6], [2, 91]]]], ["block", "link-to", ["index"], [], 1, null, ["loc", [null, [5, 6], [5, 89]]]], ["block", "link-to", ["back"], [], 2, null, ["loc", [null, [8, 6], [8, 88]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ember-imdb-search/templates/components/loader-component", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/components/loader-component.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "spinner");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 0], [2, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-imdb-search/templates/components/zoombox-init", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/components/zoombox-init.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-imdb-search/templates/footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "footer");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12 breadcrumbs");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("Created in Ember JS by ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://facebook.com/prakashchokalingam");
        dom.setAttribute(el5, "target", "_blank");
        var el6 = dom.createTextNode("Prakash Chokalingam");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" | ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "https://github.com/prakashchokalingam/imdb-search-engine");
        dom.setAttribute(el5, "target", "_blank");
        var el6 = dom.createTextNode("Fork it on Github");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["breadcrumbs"], [], ["loc", [null, [4, 2], [4, 27]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-imdb-search/templates/forward", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 15
            },
            "end": {
              "line": 2,
              "column": 45
            }
          },
          "moduleName": "ember-imdb-search/templates/forward.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Go Home ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/forward.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Failed ! ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [2, 15], [2, 45]]]], ["content", "outlet", ["loc", [null, [4, 0], [4, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-imdb-search/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 37
            },
            "end": {
              "line": 4,
              "column": 79
            }
          },
          "moduleName": "ember-imdb-search/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("IMDB Search Engine");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 198
              },
              "end": {
                "line": 12,
                "column": 251
              }
            },
            "moduleName": "ember-imdb-search/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" , year : ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("b");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "search-year", ["loc", [null, [12, 231], [12, 246]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 15,
              "column": 6
            }
          },
          "moduleName": "ember-imdb-search/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col s12 right-align");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h6");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "#");
          dom.setAttribute(el3, "class", "");
          var el4 = dom.createTextNode("+ Advance search ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("small");
          dom.setAttribute(el3, "class", "hint");
          var el4 = dom.createTextNode(" search for : ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("b");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" , type : ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("b");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1, 1]);
          var element6 = dom.childAt(element5, [1]);
          var element7 = dom.childAt(element5, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element6);
          morphs[1] = dom.createMorphAt(dom.childAt(element7, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element7, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(element7, 5, 5);
          return morphs;
        },
        statements: [["element", "action", ["EnableAdvanceSearch"], ["preventDefault", true], ["loc", [null, [12, 33], [12, 85]]], 0, 0], ["content", "search-value", ["loc", [null, [12, 145], [12, 161]]], 0, 0, 0, 0], ["content", "model.type", ["loc", [null, [12, 178], [12, 192]]], 0, 0, 0, 0], ["block", "if", [["get", "search-year", ["loc", [null, [12, 204], [12, 215]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [12, 198], [12, 258]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 4
            },
            "end": {
              "line": 27,
              "column": 4
            }
          },
          "moduleName": "ember-imdb-search/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col l4 m4 s12 right right-align");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "chip all");
          var el4 = dom.createTextNode("All");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "chip movie");
          var el4 = dom.createTextNode("Movie");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "chip series");
          var el4 = dom.createTextNode("Series");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "chip episodes");
          var el4 = dom.createTextNode("Episodes");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var element3 = dom.childAt(element0, [5]);
          var element4 = dom.childAt(element0, [7]);
          var morphs = new Array(5);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createElementMorph(element3);
          morphs[3] = dom.createElementMorph(element4);
          morphs[4] = dom.createMorphAt(element0, 9, 9);
          return morphs;
        },
        statements: [["element", "action", ["setSearchType", "all", ["get", "this", ["loc", [null, [20, 66], [20, 70]]], 0, 0, 0, 0]], ["on", "click"], ["loc", [null, [20, 35], [20, 84]]], 0, 0], ["element", "action", ["setSearchType", "movie"], [], ["loc", [null, [21, 37], [21, 71]]], 0, 0], ["element", "action", ["setSearchType", "series"], [], ["loc", [null, [22, 38], [22, 73]]], 0, 0], ["element", "action", ["setSearchType", "episodes"], [], ["loc", [null, [23, 40], [23, 77]]], 0, 0], ["inline", "input", [], ["type", "number", "name", "search-year", "class", "search-year", "value", ["subexpr", "@mut", [["get", "search-year", ["loc", [null, [24, 77], [24, 88]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter year", "key-up", "setSearchYear"], ["loc", [null, [24, 10], [24, 138]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4, "class", "center-align title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "search-input");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "material-icons magnifier");
        var el5 = dom.createTextNode("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element8 = dom.childAt(fragment, [0]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element9, [3]);
        var element11 = dom.childAt(element10, [3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element9, [1, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(element10, 1, 1);
        morphs[2] = dom.createElementMorph(element11);
        morphs[3] = dom.createMorphAt(element10, 5, 5);
        morphs[4] = dom.createMorphAt(element9, 5, 5);
        morphs[5] = dom.createMorphAt(element8, 3, 3);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [4, 37], [4, 79]]]], ["inline", "input", [], ["name", "search-value", "class", "search-box", "value", ["subexpr", "@mut", [["get", "search-value", ["loc", [null, [7, 59], [7, 71]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter movie name here... ", "required", "true", "key-up", "setSearchValue"], ["loc", [null, [7, 6], [7, 153]]], 0, 0], ["element", "action", ["sendSearchApi"], [], ["loc", [null, [8, 42], [8, 68]]], 0, 0], ["block", "if", [["get", "search-value", ["loc", [null, [9, 12], [9, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 6], [15, 13]]]], ["block", "if", [["get", "model.advanceSearch", ["loc", [null, [17, 10], [17, 29]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [17, 4], [27, 11]]]], ["content", "outlet", ["loc", [null, [29, 3], [29, 13]]], 0, 0, 0, 0], ["inline", "partial", ["footer"], [], ["loc", [null, [31, 0], [31, 20]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ember-imdb-search/templates/index/error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/index/error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Something went wrong !");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ember-imdb-search/templates/index/missurl", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/index/missurl.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-imdb-search/templates/index/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "ember-imdb-search/templates/index/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "loader-component", ["loc", [null, [4, 6], [4, 26]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 11,
                    "column": 16
                  },
                  "end": {
                    "line": 24,
                    "column": 14
                  }
                },
                "moduleName": "ember-imdb-search/templates/index/search.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "card search hoverable");
                var el2 = dom.createTextNode("\n                  ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "row");
                var el3 = dom.createTextNode("\n                    ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "col s4");
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("img");
                dom.setAttribute(el4, "class", "img responsive-img");
                dom.setAttribute(el4, "height", "100px");
                dom.setAttribute(el4, "width", "100px");
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                    ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "col s8");
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("h5");
                dom.setAttribute(el4, "class", "truncate");
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("p");
                var el5 = dom.createElement("i");
                dom.setAttribute(el5, "class", "small material-icons ");
                var el6 = dom.createTextNode("");
                dom.appendChild(el5, el6);
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode(" ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                      ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("p");
                var el5 = dom.createElement("i");
                dom.setAttribute(el5, "class", "material-icons");
                var el6 = dom.createTextNode("");
                dom.appendChild(el5, el6);
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode(" ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                    ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                  ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1, 1]);
                var element1 = dom.childAt(element0, [1, 1]);
                var element2 = dom.childAt(element0, [3]);
                var morphs = new Array(5);
                morphs[0] = dom.createAttrMorph(element1, 'src');
                morphs[1] = dom.createAttrMorph(element1, 'alt');
                morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
                morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 2, 2);
                morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]), 2, 2);
                return morphs;
              },
              statements: [["attribute", "src", ["concat", [["subexpr", "image-helper", [["get", "movie.Poster", ["loc", [null, [15, 47], [15, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 32], [15, 61]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "movie.Title", ["loc", [null, [15, 70], [15, 81]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "movie.Title", ["loc", [null, [18, 43], [18, 58]]], 0, 0, 0, 0], ["content", "movie.Type", ["loc", [null, [19, 71], [19, 85]]], 0, 0, 0, 0], ["content", "movie.Year", ["loc", [null, [20, 64], [20, 78]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 10
                },
                "end": {
                  "line": 27,
                  "column": 10
                }
              },
              "moduleName": "ember-imdb-search/templates/index/search.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col s12 m4 l4");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["block", "link-to", ["index.view", ["get", "movie.imdbID", ["loc", [null, [11, 40], [11, 52]]], 0, 0, 0, 0], ["get", "movie.Title", ["loc", [null, [11, 53], [11, 64]]], 0, 0, 0, 0]], ["title", ["subexpr", "@mut", [["get", "movie.Title", ["loc", [null, [11, 71], [11, 82]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [11, 16], [24, 26]]]]],
            locals: ["movie"],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 10
                },
                "end": {
                  "line": 31,
                  "column": 10
                }
              },
              "moduleName": "ember-imdb-search/templates/index/search.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "loader-component", ["loc", [null, [30, 12], [30, 32]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 37,
                "column": 6
              }
            },
            "moduleName": "ember-imdb-search/templates/index/search.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "center-align");
            var el2 = dom.createTextNode("Results Found : ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "style", "padding-bottom: 30px;");
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s12 card loadmore");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h5");
            dom.setAttribute(el3, "class", "center-align");
            var el4 = dom.createTextNode(" Loading ....  ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" more ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [7]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[3] = dom.createAttrMorph(element3, 'class');
            morphs[4] = dom.createMorphAt(dom.childAt(element3, [1, 1]), 1, 1);
            return morphs;
          },
          statements: [["content", "model.results.totalResults", ["loc", [null, [7, 49], [7, 79]]], 0, 0, 0, 0], ["block", "each", [["get", "model.results.Search", ["loc", [null, [9, 18], [9, 38]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 10], [27, 19]]]], ["block", "if", [["get", "model.loadmore", ["loc", [null, [29, 16], [29, 30]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [29, 10], [31, 17]]]], ["attribute", "class", ["concat", ["row ", ["subexpr", "load-more", [["get", "model.results.totalResults", ["loc", [null, [32, 40], [32, 66]]], 0, 0, 0, 0], ["get", "model.results.Search.length", ["loc", [null, [32, 67], [32, 94]]], 0, 0, 0, 0], "boolean"], [], ["loc", [null, [32, 28], [32, 106]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "load-more", [["get", "model.results.totalResults", ["loc", [null, [34, 68], [34, 94]]], 0, 0, 0, 0], ["get", "model.results.Search.length", ["loc", [null, [34, 95], [34, 122]]], 0, 0, 0, 0], "count"], [], ["loc", [null, [34, 56], [34, 132]]], 0, 0]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 6
              },
              "end": {
                "line": 41,
                "column": 6
              }
            },
            "moduleName": "ember-imdb-search/templates/index/search.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row card hoverable center-align");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h2");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "model.results.Error", ["loc", [null, [39, 12], [39, 35]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 42,
              "column": 4
            }
          },
          "moduleName": "ember-imdb-search/templates/index/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "model.results.Response", ["loc", [null, [6, 12], [6, 34]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [6, 6], [41, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/index/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.loading", ["loc", [null, [3, 10], [3, 23]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [42, 11]]]], ["content", "outlet", ["loc", [null, [45, 0], [45, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-imdb-search/templates/index/view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "ember-imdb-search/templates/index/view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "loader-component", ["loc", [null, [4, 4], [4, 24]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 34,
                "column": 4
              }
            },
            "moduleName": "ember-imdb-search/templates/index/view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", " view card");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s12 m4 l4");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "img responsive-img zoombox");
            dom.setAttribute(el3, "max-width", "100%");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "left-align");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            var el5 = dom.createElement("small");
            var el6 = dom.createTextNode(" click to enlarge ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s12 m8 l8");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            var el4 = dom.createElement("h3");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Type");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" : ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Actors");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" : ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Director");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" : ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(". ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Writer");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Language");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(". ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Country");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Released");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(". ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Run Time ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Genre");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Plot");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(":  ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Awards");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("BoxOffice");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" : ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("imdbRating");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("tomatoRating");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("a");
            dom.setAttribute(el4, "target", "_blank");
            var el5 = dom.createTextNode("Rotten Tomatoes");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Production");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("Website");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(":  ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4, "class", "key");
            var el5 = dom.createTextNode("DVD");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(": ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons");
            var el5 = dom.createTextNode("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment(" to init zoom box ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 1]);
            var element2 = dom.childAt(element0, [3]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element2, [7]);
            var element5 = dom.childAt(element2, [9]);
            var element6 = dom.childAt(element2, [11]);
            var element7 = dom.childAt(element2, [23]);
            var element8 = dom.childAt(element7, [6]);
            var morphs = new Array(24);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createAttrMorph(element1, 'data-caption');
            morphs[2] = dom.createAttrMorph(element1, 'alt');
            morphs[3] = dom.createAttrMorph(element3, 'href');
            morphs[4] = dom.createMorphAt(dom.childAt(element3, [0]), 0, 0);
            morphs[5] = dom.createMorphAt(dom.childAt(element2, [3]), 4, 4);
            morphs[6] = dom.createMorphAt(dom.childAt(element2, [5]), 4, 4);
            morphs[7] = dom.createMorphAt(element4, 4, 4);
            morphs[8] = dom.createMorphAt(element4, 10, 10);
            morphs[9] = dom.createMorphAt(element5, 4, 4);
            morphs[10] = dom.createMorphAt(element5, 10, 10);
            morphs[11] = dom.createMorphAt(element6, 4, 4);
            morphs[12] = dom.createMorphAt(element6, 10, 10);
            morphs[13] = dom.createMorphAt(dom.childAt(element2, [13]), 4, 4);
            morphs[14] = dom.createMorphAt(dom.childAt(element2, [15]), 4, 4);
            morphs[15] = dom.createMorphAt(dom.childAt(element2, [17]), 4, 4);
            morphs[16] = dom.createMorphAt(dom.childAt(element2, [19]), 4, 4);
            morphs[17] = dom.createMorphAt(dom.childAt(element2, [21]), 4, 4);
            morphs[18] = dom.createMorphAt(element7, 4, 4);
            morphs[19] = dom.createAttrMorph(element8, 'href');
            morphs[20] = dom.createMorphAt(dom.childAt(element2, [25]), 4, 4);
            morphs[21] = dom.createMorphAt(dom.childAt(element2, [27]), 4, 4);
            morphs[22] = dom.createMorphAt(dom.childAt(element2, [29]), 3, 3);
            morphs[23] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["subexpr", "image-helper", [["get", "model.results.Poster", ["loc", [null, [9, 33], [9, 53]]], 0, 0, 0, 0]], [], ["loc", [null, [9, 18], [9, 55]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "data-caption", ["concat", [["get", "model.results.Title", ["loc", [null, [9, 73], [9, 92]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "model.results.Title", ["loc", [null, [9, 104], [9, 123]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "window.location.url", ["loc", [null, [15, 19], [15, 38]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.results.Title", ["loc", [null, [15, 46], [15, 69]]], 0, 0, 0, 0], ["content", "model.results.Type", ["loc", [null, [16, 82], [16, 104]]], 0, 0, 0, 0], ["content", "model.results.Actors", ["loc", [null, [17, 84], [17, 108]]], 0, 0, 0, 0], ["content", "model.results.Director", ["loc", [null, [18, 86], [18, 112]]], 0, 0, 0, 0], ["content", "model.results.Writer", ["loc", [null, [18, 186], [18, 210]]], 0, 0, 0, 0], ["content", "model.results.Language", ["loc", [null, [19, 85], [19, 111]]], 0, 0, 0, 0], ["content", "model.results.Country", ["loc", [null, [19, 186], [19, 211]]], 0, 0, 0, 0], ["content", "model.results.Released", ["loc", [null, [20, 85], [20, 111]]], 0, 0, 0, 0], ["content", "model.results.Runtime", ["loc", [null, [20, 188], [20, 213]]], 0, 0, 0, 0], ["content", "model.results.Genre", ["loc", [null, [21, 82], [21, 105]]], 0, 0, 0, 0], ["content", "model.results.Plot", ["loc", [null, [22, 82], [22, 104]]], 0, 0, 0, 0], ["content", "model.results.Awards", ["loc", [null, [23, 83], [23, 107]]], 0, 0, 0, 0], ["content", "model.results.BoxOffice", ["loc", [null, [24, 87], [24, 114]]], 0, 0, 0, 0], ["content", "model.results.imdbRating", ["loc", [null, [25, 87], [25, 115]]], 0, 0, 0, 0], ["content", "model.results.tomatoRating", ["loc", [null, [26, 89], [26, 119]]], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "model.results.tomatoURL", ["loc", [null, [26, 131], [26, 154]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.results.Production", ["loc", [null, [27, 87], [27, 115]]], 0, 0, 0, 0], ["content", "model.results.Website", ["loc", [null, [28, 85], [28, 110]]], 0, 0, 0, 0], ["content", "model.results.DVD", ["loc", [null, [29, 79], [29, 100]]], 0, 0, 0, 0], ["content", "zoombox-init", ["loc", [null, [33, 4], [33, 20]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 4
              }
            },
            "moduleName": "ember-imdb-search/templates/index/view.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h1");
            var el2 = dom.createTextNode("Something went wrong !");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "ember-imdb-search/templates/index/view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "model.results.Response", ["loc", [null, [6, 10], [6, 32]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [6, 4], [36, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/index/view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.Loading", ["loc", [null, [3, 8], [3, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 2], [37, 9]]]], ["content", "outlet", ["loc", [null, [40, 0], [40, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-imdb-search/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-imdb-search/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("loading...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ember-imdb-search/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-imdb-search';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ember-imdb-search/app")["default"].create({"name":"ember-imdb-search","version":"0.0.0+86df1b79"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-imdb-search.map