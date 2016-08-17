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
define("ember-imdb-search/helpers/image-helper", ["exports", "ember"], function (exports, _ember) {
  exports.imageHelper = imageHelper;

  function imageHelper(params /*, hash*/) {
    if (params[0] === "N/A") {
      params[0] = "//assets/images/NA.png";
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
        return "hidden";
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
      },
      setSearchValue: function setSearchValue(searchValue, event) {
        assets.set('search', searchValue);
        // if key pressed is enter
        if (event.keyCode === 13) {
          this.send("sendSearchApi");
        }
      },
      setSearchType: function setSearchType(value) {
        $(".search-type").removeClass('active');
        var classname = ".search-type." + value;
        $(".search-type").removeClass('active');
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
      var initload = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (initload) {
        modeldata.set('loading', true);
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
          var newArr = modeldata.get('results').Search.concat(data.Search);
          modeldata.set('results.Search', newArr);
          modeldata.set('loadmore', false);
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
              "line": 1,
              "column": 24
            },
            "end": {
              "line": 1,
              "column": 50
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
          var el1 = dom.createTextNode("home");
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
              "line": 1,
              "column": 53
            },
            "end": {
              "line": 1,
              "column": 84
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
          var el1 = dom.createTextNode("forward");
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
              "line": 1,
              "column": 88
            },
            "end": {
              "line": 1,
              "column": 113
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
          var el1 = dom.createTextNode("back");
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
            "line": 2,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "breadcrumb");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" / ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  / ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 0, 0);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        morphs[2] = dom.createMorphAt(element0, 4, 4);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [1, 24], [1, 50]]]], ["block", "link-to", ["forward"], [], 1, null, ["loc", [null, [1, 53], [1, 84]]]], ["block", "link-to", ["back"], [], 2, null, ["loc", [null, [1, 88], [1, 113]]]]],
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
            "line": 4,
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
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("Created in Ember JS by ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://facebook.com/prakashchokalingam");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createTextNode("Prakash Chokalingam");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" | ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://github.com/prakashchokalingam/imdb-search-engine");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createTextNode("Fork it on Github");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 192
              },
              "end": {
                "line": 9,
                "column": 238
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
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "search-year", ["loc", [null, [9, 222], [9, 237]]], 0, 0, 0, 0]],
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
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 10,
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
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          dom.setAttribute(el1, "class", "advance-search");
          var el2 = dom.createTextNode("+ Advance search ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("small");
          dom.setAttribute(el1, "class", "hint");
          var el2 = dom.createTextNode("search for : ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" , type : ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1]);
          var element7 = dom.childAt(fragment, [2]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element6);
          morphs[1] = dom.createMorphAt(element7, 1, 1);
          morphs[2] = dom.createMorphAt(element7, 3, 3);
          morphs[3] = dom.createMorphAt(element7, 5, 5);
          return morphs;
        },
        statements: [["element", "action", ["EnableAdvanceSearch"], ["preventDefault", true], ["loc", [null, [9, 43], [9, 95]]], 0, 0], ["content", "search-value", ["loc", [null, [9, 150], [9, 166]]], 0, 0, 0, 0], ["content", "model.type", ["loc", [null, [9, 176], [9, 190]]], 0, 0, 0, 0], ["block", "if", [["get", "search-year", ["loc", [null, [9, 198], [9, 209]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 192], [9, 245]]]]],
        locals: [],
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
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 23,
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
          dom.setAttribute(el1, "class", "advance-search-panel");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "search-type-group");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "search-type all");
          var el4 = dom.createTextNode("All");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "search-type movies active");
          var el4 = dom.createTextNode("Movie");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "search-type series");
          var el4 = dom.createTextNode("Series");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "search-type episodes");
          var el4 = dom.createTextNode("Episodes");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "for", "search-year");
          var el3 = dom.createTextNode(" Year :");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var element4 = dom.childAt(element1, [5]);
          var element5 = dom.childAt(element1, [7]);
          var morphs = new Array(5);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createElementMorph(element3);
          morphs[2] = dom.createElementMorph(element4);
          morphs[3] = dom.createElementMorph(element5);
          morphs[4] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["element", "action", ["setSearchType", "all", ["get", "this", ["loc", [null, [15, 71], [15, 75]]], 0, 0, 0, 0]], ["on", "click"], ["loc", [null, [15, 40], [15, 89]]], 0, 0], ["element", "action", ["setSearchType", "movies"], [], ["loc", [null, [16, 50], [16, 85]]], 0, 0], ["element", "action", ["setSearchType", "series"], [], ["loc", [null, [17, 43], [17, 78]]], 0, 0], ["element", "action", ["setSearchType", "episodes"], [], ["loc", [null, [18, 45], [18, 82]]], 0, 0], ["inline", "input", [], ["type", "number", "name", "search-year", "class", "search-year", "value", ["subexpr", "@mut", [["get", "search-year", ["loc", [null, [21, 75], [21, 86]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter year", "key-up", "setSearchYear"], ["loc", [null, [21, 8], [21, 136]]], 0, 0]],
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
            "line": 29,
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
        dom.setAttribute(el1, "class", "search");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "search-title");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("IMDB Search Engine");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "search-input");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "search-btn");
        dom.setAttribute(el3, "title", "click to search");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "material-icons");
        var el5 = dom.createTextNode("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
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
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
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
        var element9 = dom.childAt(element8, [3]);
        var element10 = dom.childAt(element9, [3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element9, 1, 1);
        morphs[1] = dom.createElementMorph(element10);
        morphs[2] = dom.createMorphAt(dom.childAt(element9, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(element9, 7, 7);
        morphs[4] = dom.createMorphAt(element8, 5, 5);
        morphs[5] = dom.createMorphAt(element8, 7, 7);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", "search-value", "class", "search-box", "value", ["subexpr", "@mut", [["get", "search-value", ["loc", [null, [5, 57], [5, 69]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter movie name here... ", "required", "true", "key-up", "setSearchValue"], ["loc", [null, [5, 4], [5, 151]]], 0, 0], ["element", "action", ["sendSearchApi"], [], ["loc", [null, [6, 55], [6, 81]]], 0, 0], ["block", "if", [["get", "search-value", ["loc", [null, [8, 12], [8, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [8, 6], [10, 13]]]], ["block", "if", [["get", "model.advanceSearch", ["loc", [null, [12, 10], [12, 29]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 4], [23, 11]]]], ["inline", "partial", ["breadcrumbs"], [], ["loc", [null, [25, 2], [25, 27]]], 0, 0], ["content", "outlet", ["loc", [null, [26, 2], [26, 12]]], 0, 0, 0, 0], ["inline", "partial", ["footer"], [], ["loc", [null, [28, 0], [28, 20]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
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
        statements: [["content", "loader-component", ["loc", [null, [3, 4], [3, 24]]], 0, 0, 0, 0]],
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
                    "line": 9,
                    "column": 10
                  },
                  "end": {
                    "line": 20,
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
                var el1 = dom.createElement("table");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("tr");
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("td");
                var el4 = dom.createElement("img");
                dom.setAttribute(el4, "height", "100px");
                dom.setAttribute(el4, "width", "100px");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("td");
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("p");
                dom.setAttribute(el4, "class", "movie-name");
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("p");
                var el5 = dom.createTextNode("Type: ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode(" ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                  ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("p");
                var el5 = dom.createTextNode(" Year: ");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode(" ");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                ");
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
                var element0 = dom.childAt(fragment, [1, 1]);
                var element1 = dom.childAt(element0, [1, 0]);
                var element2 = dom.childAt(element0, [3]);
                var morphs = new Array(5);
                morphs[0] = dom.createAttrMorph(element1, 'src');
                morphs[1] = dom.createAttrMorph(element1, 'alt');
                morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
                morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
                morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
                return morphs;
              },
              statements: [["attribute", "src", ["concat", [["subexpr", "image-helper", [["get", "movie.Poster", ["loc", [null, [12, 45], [12, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [12, 30], [12, 59]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "movie.Title", ["loc", [null, [12, 68], [12, 79]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "movie.Title", ["loc", [null, [14, 40], [14, 55]]], 0, 0, 0, 0], ["content", "movie.Type", ["loc", [null, [15, 27], [15, 41]]], 0, 0, 0, 0], ["content", "movie.Year", ["loc", [null, [16, 28], [16, 42]]], 0, 0, 0, 0]],
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
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 21,
                  "column": 8
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
            statements: [["block", "link-to", ["index.view", ["get", "movie.imdbID", ["loc", [null, [9, 34], [9, 46]]], 0, 0, 0, 0], ["get", "movie.Title", ["loc", [null, [9, 47], [9, 58]]], 0, 0, 0, 0]], ["title", ["subexpr", "@mut", [["get", "movie.Title", ["loc", [null, [9, 65], [9, 76]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [9, 10], [20, 22]]]]],
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
                  "line": 22,
                  "column": 8
                },
                "end": {
                  "line": 24,
                  "column": 8
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
              var el1 = dom.createTextNode("          ");
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
            statements: [["content", "loader-component", ["loc", [null, [23, 10], [23, 30]]], 0, 0, 0, 0]],
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
                "line": 31,
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
            var el1 = dom.createElement("h3");
            var el2 = dom.createTextNode("Results Found : ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "search-data");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "load-more");
            var el4 = dom.createTextNode("\n              Load More (");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(")\n            ");
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
            var element3 = dom.childAt(fragment, [3]);
            var element4 = dom.childAt(element3, [4]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(element3, 1, 1);
            morphs[2] = dom.createMorphAt(element3, 2, 2);
            morphs[3] = dom.createAttrMorph(element4, 'class');
            morphs[4] = dom.createElementMorph(element4);
            morphs[5] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "model.results.totalResults", ["loc", [null, [6, 26], [6, 56]]], 0, 0, 0, 0], ["block", "each", [["get", "model.results.Search", ["loc", [null, [8, 16], [8, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [8, 8], [21, 17]]]], ["block", "if", [["get", "model.loadmore", ["loc", [null, [22, 14], [22, 28]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [22, 8], [24, 15]]]], ["attribute", "class", ["concat", ["loadmore-panel ", ["subexpr", "load-more", [["get", "model.results.totalResults", ["loc", [null, [25, 71], [25, 97]]], 0, 0, 0, 0], ["get", "model.results.Search.length", ["loc", [null, [25, 98], [25, 125]]], 0, 0, 0, 0], "boolean"], [], ["loc", [null, [25, 59], [25, 137]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["loadMore"], [], ["loc", [null, [25, 15], [25, 36]]], 0, 0], ["inline", "load-more", [["get", "model.results.totalResults", ["loc", [null, [27, 37], [27, 63]]], 0, 0, 0, 0], ["get", "model.results.Search.length", ["loc", [null, [27, 64], [27, 91]]], 0, 0, 0, 0], "count"], [], ["loc", [null, [27, 25], [27, 101]]], 0, 0]],
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
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 33,
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
            var el1 = dom.createElement("h2");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "model.results.Error", ["loc", [null, [32, 10], [32, 33]]], 0, 0, 0, 0]],
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
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 34,
              "column": 2
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
        statements: [["block", "if", [["get", "model.results.Response", ["loc", [null, [5, 10], [5, 32]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 4], [33, 11]]]]],
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
            "line": 37,
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
        dom.setAttribute(el1, "class", "search-results");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.loading", ["loc", [null, [2, 8], [2, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [34, 9]]]], ["content", "outlet", ["loc", [null, [36, 0], [36, 10]]], 0, 0, 0, 0]],
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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
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
        statements: [["content", "loader-component", ["loc", [null, [3, 4], [3, 24]]], 0, 0, 0, 0]],
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
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 30,
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
            var el1 = dom.createElement("table");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            dom.setAttribute(el3, "class", "poster");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("img");
            dom.setAttribute(el4, "height", "550px");
            dom.setAttribute(el4, "width", "388px");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            dom.setAttribute(el3, "class", "movie-data");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("h1");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Type");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" : ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Actors");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" : ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Director");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" : ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(". ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Writer");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Language");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(". ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Country");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Released");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(". ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Run Time");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Genre");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Plot");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Awards");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("BoxOffice");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" : ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("imdbRating");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("tomatoRating");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("a");
            dom.setAttribute(el5, "target", "_blank");
            var el6 = dom.createTextNode("Rotten Tomatoes");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Production");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("Website");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "key");
            var el6 = dom.createTextNode("DVD");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(": ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
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
            var element1 = dom.childAt(element0, [1, 1]);
            var element2 = dom.childAt(element0, [3]);
            var element3 = dom.childAt(element2, [7]);
            var element4 = dom.childAt(element2, [9]);
            var element5 = dom.childAt(element2, [11]);
            var element6 = dom.childAt(element2, [23]);
            var element7 = dom.childAt(element6, [4]);
            var morphs = new Array(21);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createAttrMorph(element1, 'alt');
            morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 2, 2);
            morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]), 2, 2);
            morphs[5] = dom.createMorphAt(element3, 2, 2);
            morphs[6] = dom.createMorphAt(element3, 6, 6);
            morphs[7] = dom.createMorphAt(element4, 2, 2);
            morphs[8] = dom.createMorphAt(element4, 6, 6);
            morphs[9] = dom.createMorphAt(element5, 2, 2);
            morphs[10] = dom.createMorphAt(element5, 6, 6);
            morphs[11] = dom.createMorphAt(dom.childAt(element2, [13]), 2, 2);
            morphs[12] = dom.createMorphAt(dom.childAt(element2, [15]), 2, 2);
            morphs[13] = dom.createMorphAt(dom.childAt(element2, [17]), 2, 2);
            morphs[14] = dom.createMorphAt(dom.childAt(element2, [19]), 2, 2);
            morphs[15] = dom.createMorphAt(dom.childAt(element2, [21]), 2, 2);
            morphs[16] = dom.createMorphAt(element6, 2, 2);
            morphs[17] = dom.createAttrMorph(element7, 'href');
            morphs[18] = dom.createMorphAt(dom.childAt(element2, [25]), 2, 2);
            morphs[19] = dom.createMorphAt(dom.childAt(element2, [27]), 2, 2);
            morphs[20] = dom.createMorphAt(dom.childAt(element2, [29]), 2, 2);
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["subexpr", "image-helper", [["get", "model.results.Poster", ["loc", [null, [9, 37], [9, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [9, 22], [9, 59]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "model.results.Title", ["loc", [null, [9, 68], [9, 87]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.results.Title", ["loc", [null, [12, 16], [12, 39]]], 0, 0, 0, 0], ["content", "model.results.Type", ["loc", [null, [13, 47], [13, 69]]], 0, 0, 0, 0], ["content", "model.results.Actors", ["loc", [null, [14, 49], [14, 73]]], 0, 0, 0, 0], ["content", "model.results.Director", ["loc", [null, [15, 51], [15, 77]]], 0, 0, 0, 0], ["content", "model.results.Writer", ["loc", [null, [15, 112], [15, 136]]], 0, 0, 0, 0], ["content", "model.results.Language", ["loc", [null, [16, 50], [16, 76]]], 0, 0, 0, 0], ["content", "model.results.Country", ["loc", [null, [16, 112], [16, 137]]], 0, 0, 0, 0], ["content", "model.results.Released", ["loc", [null, [17, 50], [17, 76]]], 0, 0, 0, 0], ["content", "model.results.Runtime", ["loc", [null, [17, 113], [17, 138]]], 0, 0, 0, 0], ["content", "model.results.Genre", ["loc", [null, [18, 47], [18, 70]]], 0, 0, 0, 0], ["content", "model.results.Plot", ["loc", [null, [19, 46], [19, 68]]], 0, 0, 0, 0], ["content", "model.results.Awards", ["loc", [null, [20, 48], [20, 72]]], 0, 0, 0, 0], ["content", "model.results.BoxOffice", ["loc", [null, [21, 52], [21, 79]]], 0, 0, 0, 0], ["content", "model.results.imdbRating", ["loc", [null, [22, 52], [22, 80]]], 0, 0, 0, 0], ["content", "model.results.tomatoRating", ["loc", [null, [23, 54], [23, 84]]], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "model.results.tomatoURL", ["loc", [null, [23, 96], [23, 119]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.results.Production", ["loc", [null, [24, 52], [24, 80]]], 0, 0, 0, 0], ["content", "model.results.Website", ["loc", [null, [25, 49], [25, 74]]], 0, 0, 0, 0], ["content", "model.results.DVD", ["loc", [null, [26, 45], [26, 66]]], 0, 0, 0, 0]],
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
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 32,
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
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 33,
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
        statements: [["block", "if", [["get", "model.results.Response", ["loc", [null, [5, 10], [5, 32]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 4], [32, 11]]]]],
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
            "line": 36,
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
        dom.setAttribute(el1, "class", "movie");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.Loading", ["loc", [null, [2, 8], [2, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [33, 9]]]], ["content", "outlet", ["loc", [null, [35, 0], [35, 10]]], 0, 0, 0, 0]],
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
  require("ember-imdb-search/app")["default"].create({"name":"ember-imdb-search","version":"0.0.0+667e8c6e"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-imdb-search.map