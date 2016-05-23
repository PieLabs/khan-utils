/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {window.KhanUtil = {};
	global.Khan = window.Khan = {};
	global.KhanUtil = window.KhanUtil = Khan.KhanUtil = {};
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(10);
	__webpack_require__(19);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	// Perseus running in local mode depends on $_, which is defined here
	if (typeof React !== 'undefined') {
	    var addons = React.___internalAddons || React.addons;
	    var createFragment = addons.createFragment;
	}

	/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable no-var */
	/* To fix, remove an entry above, run "make linc", and fix errors. */


	// The plural language strings for all the languages we have
	// listed in crowdin.  The values here need to match what crowdin
	// uses (sometimes different platforms use different plural forms,
	// for ambiguous languages like Turkish).  I got it by running
	//    deploy/download_i18n.py -s
	// and looking a the .po files in all.zip.  Each .po file has a
	// header line that say something like:
	//    "Plural-Forms: nplurals=2; plural=(n != 1);\n"
	// which I copied in here with the following changes:
	//    1) I only take the 'plural=' section, which I wrapped in a function
	//    2) Changed 'or' to '||'
	// These functions return either true or false or a number.  We map
	// true to 1 and false to 0 below, to always get a number out of this.

	/* eslint-disable space-infix-ops, eqeqeq, max-len */
	var likeEnglish = function (n) {return n != 1;};

	// TODO(csilvers): auto-generate this list from the foo.po files (in dropbox)
	var allPluralForms = { 
	    "accents": likeEnglish, // a 'fake' langauge
	    "af": likeEnglish, 
	    "ar": function (n) {return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 && n % 100 <= 99 ? 4 : 5;}, 
	    "az": likeEnglish, 
	    "bg": likeEnglish, 
	    "bn": likeEnglish, 
	    "boxes": likeEnglish, // a 'fake' langauge
	    "ca": likeEnglish, 
	    "cs": function (n) {return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;}, 
	    "da": likeEnglish, 
	    "de": likeEnglish, 
	    "el": likeEnglish, 
	    "empty": likeEnglish, // a 'fake' langauge
	    "en": likeEnglish, 
	    "en-pt": likeEnglish, // a 'fake' language, used by crowdin for JIPT
	    "es": likeEnglish, 
	    "fa": function (n) {return 0;}, 
	    "fa-af": function (n) {return 0;}, 
	    "fi": likeEnglish, 
	    "fr": function (n) {return n > 1;}, 
	    "he": likeEnglish, 
	    "hi": likeEnglish, 
	    "hu": likeEnglish, 
	    "hy": likeEnglish, 
	    "id": function (n) {return 0;}, 
	    "it": likeEnglish, 
	    "ja": function (n) {return 0;}, 
	    "ko": function (n) {return 0;}, 
	    "lol": likeEnglish, // a 'fake' langauge
	    "mn": likeEnglish, 
	    "ms": function (n) {return 0;}, 
	    "nb": likeEnglish, 
	    "nl": likeEnglish, 
	    "pl": function (n) {return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;}, 
	    "pt": likeEnglish, 
	    "pt-pt": likeEnglish, 
	    "ro": function (n) {return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;}, 
	    "ru": function (n) {return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;}, 
	    "si-LK": likeEnglish, 
	    "sk": function (n) {return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;}, 
	    "sr": function (n) {return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;}, 
	    "sv-SE": likeEnglish, 
	    "sw": likeEnglish, 
	    "te": likeEnglish, 
	    "th": function (n) {return 0;}, 
	    "tr": function (n) {return 0;}, 
	    "uk": function (n) {return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;}, 
	    "ur": likeEnglish, 
	    "vi": function (n) {return 0;}, 
	    "xh": likeEnglish, 
	    "zh-hans": function (n) {return 0;}, 
	    "zh-hant": function (n) {return 0;}, 
	    "zu": likeEnglish };

	/* eslint-enable */

	var interpolationMarker = /%\(([\w_]+)\)s/g;
	/**
	 * Performs sprintf-like %(name)s replacement on str, and returns a React
	 * fragment of the string interleaved with those replacements. The replacements
	 * can be any valid React node including strings and numbers.
	 *
	 * For example:
	 *  interpolateStringToFragment("test", {}) ->
	 *      test
	 *  interpolateStringToFragment("test %(num)s", {num: 5}) ->
	 *      test 5
	 *  interpolateStringToFragment("test %(num)s", {num: <Count />}) ->
	 *      test <Count />
	 */
	var interpolateStringToFragment = function (str, options) {
	    options = options || {};

	    // Split the string into its language fragments and substitutions
	    var split = str.split(interpolationMarker);

	    var result = { "text_0": split[0] };

	    // Replace the substitutions with the appropriate option
	    for (var i = 1; i < split.length; i += 2) {
	        var key = split[i];
	        var replaceWith = options[key];
	        if (replaceWith === undefined) {
	            replaceWith = "%(" + key + ")s";}


	        // We prefix each substitution key with a number that increments each
	        // time it's used, so "test %(num)s %(fruit)s and %(num)s again" turns
	        // into an object with keys:
	        // [text_0, 0_num, text_2, 0_fruit, text_4, 1_num, text_6]
	        // This is better than just using the array index in the case that we
	        // switch between two translated strings with the same variables.
	        // Admittedly, an edge case.
	        var j = 0;
	        while ("" + j + "_" + key in result) {
	            j++;}

	        result["" + j + "_" + key] = replaceWith;
	        // Because the regex has one capturing group, the `split` array always
	        // has an odd number of elements, so this always stays in bounds.
	        result["text_" + (i + 1)] = split[i + 1];}


	    return createFragment(result);};


	/**
	    * Simple i18n method with sprintf-like %(name)s replacement
	    * To be used like so:
	    *   i18n._("Some string")
	    *   i18n._("Hello %(name)s", {name: "John"})
	    */
	var _ = function (str, options) {
	    // Sometimes we're given an argument that's meant for ngettext().  This
	    // happens if the same string is used in both i18n._() and i18n.ngettext()
	    // (.g. a = i18n._(foo); b = i18n.ngettext("foo", "bar", count);
	    // In such cases, only the plural form ends up in the .po file, and
	    // then it gets sent to us for the i18n._() case too.  No problem, though:
	    // we'll just take the singular arg.
	    if (typeof str === "object" && str.messages) {
	        str = str.messages[0];}


	    options = options || {};

	    return str.replace(interpolationMarker, function (match, key) {
	        var replaceWith = options[key];
	        return replaceWith === undefined ? match : replaceWith;});};



	/**
	    * A simple i18n react component-like function to allow for string
	    * interpolation destined for the output of a react render() function
	    *
	    * This function understands react components, or other things
	    * renderable by react, passed in as props.
	    *
	    * Examples:
	    *   <$_ first="Motoko" last="Kusanagi">
	    *       Hello, %(first)s %(last)s!
	    *   </$_>
	    *
	    * which react/jsx compiles to:
	    *   $_({first: "Motoko", last: "Kusanagi"}, "Hello, %(first)s %(last)s!")
	    *
	    *
	    *   <$_ textbox={<input type="text" />}>
	    *       Please enter a number: %(textbox)s
	    *   </$_>
	    *
	    * which react/jsx compiles to:
	    *   $_({textbox: React.DOM.input({type: "text"}),
	    *       "Please enter a number: %(textbox)s")
	    *
	    * Note: this is not a full react component to avoid complex handling of
	    * other things added to props, such as this.props.ref and
	    * this.props.children
	    */
	var $_ = function (options, str) {
	    if (arguments.length !== 2 || typeof str !== "string") {
	        return "<$_> must have exactly one child, which must be a string";}

	    return interpolateStringToFragment(str, options);};


	/**
	    * A simple i18n react component-like function to allow for marking a
	    * string as not needing to be translated.
	    *
	    * Example:
	    *
	    *    <$i18nDoNotTranslate>English only text.</$i18nDoNotTranslate>
	    *
	    * which react/jsx compiles to:
	    *    $i18nDoNotTranslate(null, "English only text.")
	    */
	var $i18nDoNotTranslate = function (options, str) {
	    return str;};


	/**
	    * Simple ngettext method with sprintf-like %(name)s replacement
	    * To be used like so:
	    *   i18n.ngettext("Singular", "Plural", 3)
	    *   i18n.ngettext("1 Cat", "%(num)s Cats", 3)
	    *   i18n.ngettext("1 %(type)s", "%(num)s %(type)s", 3, {type: "Cat"})
	    * This method is also meant to be used when injecting for other
	    * non-English languages, like so (taking an array of plural messages,
	    * which varies based upon the language):
	    *   i18n.ngettext({
	    *     lang: "ja",
	    *     messages: ["%(num)s 猫 %(username)s"]
	    *   }, 3, {username: "John"});
	    */
	var ngettext = function (singular, plural, num, options) {
	    // Fall back to the default lang
	    var lang;
	    var messages;

	    // If the first argument is an object then we're receiving a plural
	    // configuration object
	    if (typeof singular === "object") {
	        lang = singular.lang;
	        messages = singular.messages;
	        // We only have a messages object no plural string
	        // thus we need to shift all the arguments over by one.
	        options = num;
	        num = plural;} else 
	    {
	        lang = "en"; // We're using text written into the source code
	        messages = [singular, plural];}


	    // Get the translated string
	    var idx = ngetpos(num, lang);
	    var translation = "";
	    if (idx < messages.length) {// the common (non-error) case
	        translation = messages[idx];}


	    // Get the options to substitute into the string.
	    // We automatically add in the 'magic' option-variable 'num'.
	    options = options || {};
	    options.num = options.num || num;

	    // Then pass into i18n._ for the actual substitution
	    return _(translation, options);};


	/*
	    * Return the ngettext position that matches the given number and locale.
	    *
	    * Arguments:
	    *  - num: The number upon which to toggle the plural forms.
	    *  - lang: The language to use as the basis for the pluralization.
	    */
	var ngetpos = function (num, lang) {
	    var pluralForm = allPluralForms[lang] || allPluralForms["en"];
	    var pos = pluralForm(num);
	    // Map true to 1 and false to 0, keep any numeric return value the same.
	    return pos === true ? 1 : pos ? pos : 0;};


	/*
	    * A dummy identity function.  It's used as a signal to automatic
	    * translation-identification tools that they shouldn't mark this
	    * text up to be translated, even though it looks like
	    * natural-language text.  (And likewise, a signal to linters that
	    * they shouldn't complain that this text isn't translated.)
	    * Use it like so: 'tag.author = i18n.i18nDoNotTranslate("Jim");'
	    */
	var i18nDoNotTranslate = _;

	/**
	    * Dummy Handlebars _ function. Is a noop.
	    * Should be used as: {{#_}}...{{/_}}
	    * The text is extracted, at compile-time, by server-side scripts.
	    * This is just used for marking up those fragments that need translation.
	    * The translated text is injected at deploy-time.
	    */
	var handlebarsUnderscore = function (options) {
	    return options.fn(this);};


	/**
	    *  Mark text as not needing translation.
	    *
	    * This function is used to let i18nize_templates.py know that
	    * everything within it does not need to be translate.
	    * Should be used as: {{#i18nDoNotTranslate}}...{{/i18nDoNotTranslate}}
	    * It does not need to actually do anything and hence returns the contents
	    * as is.
	    */
	var handlebarsDoNotTranslate = function (options) {
	    return options.fn(this);};


	/**
	    * Handlebars ngettext function.
	    * Doesn't do any translation, is used for showing the correct string
	    * based upon the specified number and language.
	    * All strings are extracted (at compile-time) and injected (at
	    * deploy-time). By default this should be used as:
	    *   {{#ngettext NUM}}singular{{else}}plural{{/ngettext}}
	    * After injecting the translated strings into the page it'll read as:
	    *   {{#ngettext NUM "lang" 0}}singular{{else}}plural{{/ngettext}}
	    * (May depend upon the language used and how many different plural
	    * forms the language has.)
	    *
	    * Arguments:
	    *  - num: The number upon which to toggle the plural forms.
	    *  - lang: The language to use as the basis for the pluralization.
	    *  - pos: The expected plural form (depends upon the language)
	    */
	var handlebarsNgettext = function (num, lang, pos, options) {
	    // This method has two signatures:
	    // (num) (the default for when the code is run in dev mode)
	    // (num, lang, pos) (for when the code is run in prod mode)
	    if (typeof lang !== "string") {
	        options = lang;
	        lang = "en";
	        pos = 0;}


	    // Add in 'num' as a magic variable.
	    this.num = this.num || num;

	    // If the result of the plural form function given the specified
	    // number matches the expected position then we give the first
	    // result, otherwise we give the inverse result.
	    return ngetpos(num) === pos ? 
	    options.fn(this) : 
	    options.inverse(this);};


	/**
	 * Rounds num to X places, and uses the proper decimal seperator.
	 * But does *not* insert thousands separators.
	 */
	var localeToFixed = function (num, places) {
	    var decimalSeperator = icu.getDecimalFormatSymbols().decimal_separator;
	    var localeFixed = num.toFixed(places).replace(".", decimalSeperator);
	    if (localeFixed === "-0") {
	        localeFixed = "0";}

	    return localeFixed;};


	// This is necessary for khan-exercises, perseus, and
	// bootstrap-daterangepicker (live-editor also uses the global i18n
	// var, but defines its own version of it.)  We export the symbols
	// that they need.
	window.i18n = { 
	    _: _, 
	    ngettext: ngettext, 
	    i18nDoNotTranslate: i18nDoNotTranslate, 
	    // khan-exercises is the only client of ngetpos (which is emitted
	    // into khan-exercises by kake/translate-exercises.py).
	    ngetpos: ngetpos };


	// TODO(csilvers): is it still necessary to make these globals?
	window.$_ = $_;
	window.$i18nDoNotTranslate = $i18nDoNotTranslate;

	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable brace-style, comma-dangle, indent, max-len, no-redeclare, no-undef, no-var, one-var, prefer-spread, space-infix-ops */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var kpoint = __webpack_require__(3);
	var kvector = __webpack_require__(4);
	__webpack_require__(6);  // for graphie.label()
	__webpack_require__(7);

	var Graphie = KhanUtil.Graphie = function() {
	};

	/* Convert cartesian coordinates [x, y] to polar coordinates [r,
	 * theta], with theta in degrees, or in radians if angleInRadians is
	 * specified.
	 */
	function cartToPolar(coord, angleInRadians) {
	    var r = Math.sqrt(Math.pow(coord[0], 2) + Math.pow(coord[1], 2));
	    var theta = Math.atan2(coord[1], coord[0]);
	    // convert angle range from [-pi, pi] to [0, 2pi]
	    if (theta < 0) {
	        theta += 2 * Math.PI;
	    }
	    if (!angleInRadians) {
	        theta = theta * 180 / Math.PI;
	    }
	    return [r, theta];
	}

	function polar(r, th) {
	    if (typeof r === "number") {
	        r = [r, r];
	    }
	    th = th * Math.PI / 180;
	    return [r[0] * Math.cos(th), r[1] * Math.sin(th)];
	}

	// Keep track of all the intervalIDs created by setInterval.
	// This lets us cancel all the intervals when cleaning up.
	var intervalIDs = [];
	function cleanupIntervals() {
	    _.each(intervalIDs, function(intervalID) {
	        window.clearInterval(intervalID);
	    });
	    intervalIDs.length = 0;
	}

	$.extend(KhanUtil, {
	    unscaledSvgPath: function(points) {
	        // If this is an empty closed path, return "" instead of "z", which
	        // would give an error
	        if (points[0] === true) {
	            return "";
	        }
	        return $.map(points, function(point, i) {
	            if (point === true) {
	                return "z";
	            }
	            return (i === 0 ? "M" : "L") + point[0] + " " + point[1];
	        }).join("");
	    },

	    getDistance: function(point1, point2) {
	        return kpoint.distanceToPoint(point1, point2);
	    },

	    /**
	    * Return the difference between two sets of coordinates
	    */
	    coordDiff: function(startCoord, endCoord) {
	        return _.map(endCoord, function(val, i) {
	            return endCoord[i] - startCoord[i];
	        });
	    },

	    /**
	    * Round the given coordinates to a given snap value
	    * (e.g., nearest 0.2 increment)
	    */
	    snapCoord: function(coord, snap) {
	        return _.map(coord, function(val, i) {
	            return KhanUtil.roundToNearest(snap[i], val);
	        });
	    },

	    // Find the angle in degrees between two or three points
	    findAngle: function(point1, point2, vertex) {
	        if (vertex === undefined) {
	            var x = point1[0] - point2[0];
	            var y = point1[1] - point2[1];
	            if (!x && !y) {
	                return 0;
	            }
	            return (180 + Math.atan2(-y, -x) * 180 / Math.PI + 360) % 360;
	        } else {
	            return KhanUtil.findAngle(point1, vertex) - KhanUtil.findAngle(point2, vertex);
	        }
	    },

	    graphs: {}
	});


	_.extend(Graphie.prototype, {
	    cartToPolar: cartToPolar,
	    polar: polar
	});

	var labelDirections = {
	    "center": [-0.5, -0.5],
	    "above": [-0.5, -1.0],
	    "above right": [0.0, -1.0],
	    "right": [0.0, -0.5],
	    "below right": [0.0, 0.0],
	    "below": [-0.5, 0.0],
	    "below left": [-1.0, 0.0],
	    "left": [-1.0, -0.5],
	    "above left": [-1.0, -1.0]
	};

	KhanUtil.createGraphie = function(el) {
	    var xScale = 40, yScale = 40, xRange, yRange;

	    $(el).css("position", "relative");
	    var raphael = Raphael(el);

	    // For a sometimes-reproducible IE8 bug; doesn't affect SVG browsers at all
	    $(el).children("div").css("position", "absolute");

	    // Set up some reasonable defaults
	    var currentStyle = {
	        "stroke-width": 2,
	        "fill": "none"
	    };

	    var scaleVector = function(point) {
	        if (typeof point === "number") {
	            return scaleVector([point, point]);
	        }

	        var x = point[0], y = point[1];
	        return [x * xScale, y * yScale];
	    };

	    var scalePoint = function scalePoint(point) {
	        if (typeof point === "number") {
	            return scalePoint([point, point]);
	        }

	        var x = point[0], y = point[1];
	        return [(x - xRange[0]) * xScale, (yRange[1] - y) * yScale];
	    };

	    var unscalePoint = function(point) {
	        if (typeof point === "number") {
	            return unscalePoint([point, point]);
	        }

	        var x = point[0], y = point[1];
	        return [x / xScale + xRange[0], yRange[1] - y / yScale];
	    };

	    var unscaleVector = function(point) {
	        if (typeof point === "number") {
	            return unscaleVector([point, point]);
	        }

	        return [point[0] / xScale, point[1] / yScale];
	    };

	    var setLabelMargins = function(span, size) {
	        var $span = $(span);
	        var direction = $span.data("labelDirection");
	        $span.css("visibility", "");

	        if (typeof direction === "number") {
	            var x = Math.cos(direction);
	            var y = Math.sin(direction);

	            var scale = Math.min(
	                size[0] / 2 / Math.abs(x),
	                size[1] / 2 / Math.abs(y));

	            $span.css({
	                marginLeft: (-size[0] / 2) + x * scale,
	                marginTop: (-size[1] / 2) - y * scale
	            });
	        } else {
	            var multipliers = labelDirections[direction || "center"];
	            $span.css({
	                marginLeft: Math.round(size[0] * multipliers[0]),
	                marginTop: Math.round(size[1] * multipliers[1])
	            });
	        }
	    };

	    var svgPath = function(points, alreadyScaled) {
	        return $.map(points, function(point, i) {
	            if (point === true) {
	                return "z";
	            } else {
	                var scaled = alreadyScaled ? point : scalePoint(point);
	                return (i === 0 ? "M" : "L") + KhanUtil.bound(scaled[0]) + " " + KhanUtil.bound(scaled[1]);
	            }
	        }).join("");
	    };

	    var svgParabolaPath = function(a, b, c) {
	        var computeParabola = function(x) {
	            return (a * x + b) * x + c;
	        };

	        // If points are collinear, plot a line instead
	        if (a === 0) {
	            var points = _.map(xRange, function(x) {
	                return [x, computeParabola(x)];
	            });
	            return svgPath(points);
	        }

	        // Calculate x coordinates of points on parabola
	        var xVertex = -b / (2 * a);
	        var distToEdge = Math.max(
	            Math.abs(xVertex - xRange[0]),
	            Math.abs(xVertex - xRange[1])
	        );

	        // To guarantee that drawn parabola to spans the viewport, use a point
	        // on the edge of the graph furtherest from the vertex
	        var xPoint = xVertex + distToEdge;

	        // Compute parabola and other point on the curve
	        var vertex = [xVertex, computeParabola(xVertex)];
	        var point = [xPoint, computeParabola(xPoint)];

	        // Calculate SVG 'control' point, defined by spec
	        var control = [vertex[0], vertex[1] - (point[1] - vertex[1])];

	        // Calculate mirror points across parabola's axis of symmetry
	        var dx = Math.abs(vertex[0] - point[0]);
	        var left = [vertex[0] - dx, point[1]];
	        var right = [vertex[0] + dx, point[1]];

	        // Scale and bound
	        var points = _.map([left, control, right], scalePoint);
	        var values = _.map(_.flatten(points), KhanUtil.bound);
	        return "M" + values[0] + "," + values[1] + " Q" + values[2] + "," +
	            values[3] + " " + values[4] + "," + values[5];
	    };

	    var svgSinusoidPath = function(a, b, c, d) {
	        // Plot a sinusoid of the form: f(x) = a * sin(b * x - c) + d
	        var quarterPeriod = Math.abs(Math.PI / (2 * b));

	        var computeSine = function(x) {
	            return a * Math.sin(b * x - c) + d;
	        };

	        var computeDerivative = function(x) {
	            return a * b * Math.cos(c - b * x);
	        };

	        var coordsForOffset = function(initial, i) {
	            // Return the cubic coordinates (including the two anchor and two
	            // control points) for the ith portion of the sinusoid.
	            var x0 = initial + quarterPeriod * i;
	            var x1 = x0 + quarterPeriod;

	            // Interpolate using derivative technique
	            // See: http://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js
	            var xCoords = [
	                x0,
	                x0 * 2/3 + x1 * 1/3,
	                x0 * 1/3 + x1 * 2/3,
	                x1
	            ];
	            var yCoords = [
	                computeSine(x0),
	                computeSine(x0) + computeDerivative(x0) * (x1 - x0)/3,
	                computeSine(x1) - computeDerivative(x1) * (x1 - x0)/3,
	                computeSine(x1)
	            ];

	            // Zip and scale
	            return _.map(_.zip(xCoords, yCoords), scalePoint);
	        };

	        // How many quarter-periods do we need to span the graph?
	        var extent = xRange[1] - xRange[0];
	        var numQuarterPeriods = Math.ceil(extent / quarterPeriod) + 1;

	        // Find starting coordinate: first anchor point curve left of xRange[0]
	        var initial = c / b;
	        var distToEdge = initial - xRange[0];
	        initial -= quarterPeriod * Math.ceil(distToEdge / quarterPeriod);

	        // First portion of path is special-case, requiring move-to ('M')
	        var coords = coordsForOffset(initial, 0);
	        var path = "M" + coords[0][0] + "," + coords[0][1] + " C" +
	            coords[1][0] + "," + coords[1][1] + " " + coords[2][0] + "," +
	            coords[2][1] + " " + coords[3][0] + "," + coords[3][1];
	        for (var i = 1; i < numQuarterPeriods; i++) {
	            coords = coordsForOffset(initial, i);
	            path += " C" + coords[1][0] + "," + coords[1][1] + " " +
	                coords[2][0] + "," + coords[2][1] + " " + coords[3][0] + "," +
	                coords[3][1];
	        }

	        return path;
	    };

	    // `svgPath` is independent of graphie range, so we export on KhanUtil
	    $.extend(KhanUtil, { svgPath: svgPath });

	    var processAttributes = function(attrs) {
	        var transformers = {
	            scale: function(scale) {
	                if (typeof scale === "number") {
	                    scale = [scale, scale];
	                }

	                xScale = scale[0];
	                yScale = scale[1];

	                // Update the canvas size
	                raphael.setSize((xRange[1] - xRange[0]) * xScale, (yRange[1] - yRange[0]) * yScale);
	            },

	            clipRect: function(pair) {
	                var point = pair[0], size = pair[1];
	                point[1] += size[1]; // because our coordinates are flipped

	                return { "clip-rect": scalePoint(point).concat(scaleVector(size)).join(" ") };
	            },

	            strokeWidth: function(val) {
	                return { "stroke-width": parseFloat(val) };
	            },

	            rx: function(val) {
	                return { rx: scaleVector([val, 0])[0] };
	            },

	            ry: function(val) {
	                return { ry: scaleVector([0, val])[1] };
	            },

	            r: function(val) {
	                var scaled = scaleVector([val, val]);
	                return { rx: scaled[0], ry: scaled[1] };
	            }
	        };

	        var processed = {};
	        $.each(attrs || {}, function(key, value) {
	            var transformer = transformers[key];

	            if (typeof transformer === "function") {
	                $.extend(processed, transformer(value));
	            } else {
	                var dasherized = key.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
	                    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
	                    .toLowerCase();
	                processed[dasherized] = value;
	            }
	        });

	        return processed;
	    };

	    var addArrowheads = function arrows(path) {
	        var type = path.constructor.prototype;

	        if (type === Raphael.el) {
	            if (path.type === "path" && typeof path.arrowheadsDrawn === "undefined") {
	                var w = path.attr("stroke-width"), s = 0.6 + 0.4 * w;
	                var l = path.getTotalLength();
	                var set = raphael.set();
	                var head = raphael.path("M-3 4 C-2.75 2.5 0 0.25 0.75 0C0 -0.25 -2.75 -2.5 -3 -4");
	                var end = path.getPointAtLength(l - 0.4);
	                var almostTheEnd = path.getPointAtLength(l - 0.75 * s);
	                var angle = Math.atan2(end.y - almostTheEnd.y, end.x - almostTheEnd.x) * 180 / Math.PI;
	                var attrs = path.attr();
	                delete attrs.path;

	                var subpath = path.getSubpath(0, l - 0.75 * s);
	                subpath = raphael.path(subpath).attr(attrs);
	                subpath.arrowheadsDrawn = true;
	                path.remove();

	                head.rotate(angle, 0.75, 0).scale(s, s, 0.75, 0)
	                    .translate(almostTheEnd.x, almostTheEnd.y).attr(attrs)
	                    .attr({ "stroke-linejoin": "round", "stroke-linecap": "round" });
	                head.arrowheadsDrawn = true;
	                set.push(subpath);
	                set.push(head);
	                return set;
	            }
	        } else if (type === Raphael.st) {
	            for (var i = 0, l = path.items.length; i < l; i++) {
	                arrows(path.items[i]);
	            }
	        }
	        return path;
	    };

	    var drawingTools = {
	        circle: function(center, radius) {
	            return raphael.ellipse.apply(raphael, scalePoint(center).concat(scaleVector([radius, radius])));
	        },

	        // (x, y) is coordinate of bottom left corner
	        rect: function(x, y, width, height) {
	            // Raphael needs (x, y) to be coordinate of upper left corner
	            var corner = scalePoint([x, y + height]);
	            var dims = scaleVector([width, height]);
	            return raphael.rect.apply(raphael, corner.concat(dims));
	        },

	        ellipse: function(center, radii) {
	            return raphael.ellipse.apply(raphael, scalePoint(center).concat(scaleVector(radii)));
	        },

	        fixedEllipse: function(center, radii, maxScale) {
	            // Scale point and radius
	            var scaledPoint = scalePoint(center);
	            var scaledRadii = scaleVector(radii);

	            // Padding protects against clipping at the edges
	            var padding = 2;
	            var width = 2 * scaledRadii[0] * maxScale + padding;
	            var height = 2 * scaledRadii[1] * maxScale + padding;

	            // Calculate absolute left, top
	            var left = scaledPoint[0] - width / 2;
	            var top = scaledPoint[1] - height / 2;

	            // Wrap in <div>
	            var wrapper = document.createElement("div");
	            $(wrapper).css({
	                position: "absolute",
	                width: width + "px",
	                height: height + "px",
	                left: left + "px",
	                top: top + "px"
	            });

	            // Create Raphael canvas
	            var localRaphael = Raphael(wrapper, width, height);
	            var visibleShape = localRaphael.ellipse(
	                width / 2,
	                height / 2,
	                scaledRadii[0],
	                scaledRadii[1]
	            );

	            return {
	                wrapper: wrapper,
	                visibleShape: visibleShape
	            };
	        },

	        arc: function(center, radius, startAngle, endAngle, sector) {
	            startAngle = (startAngle % 360 + 360) % 360;
	            endAngle = (endAngle % 360 + 360) % 360;

	            var cent = scalePoint(center);
	            var radii = scaleVector(radius);
	            var startVector = polar(radius, startAngle);
	            var endVector = polar(radius, endAngle);

	            var startPoint = scalePoint([center[0] + startVector[0], center[1] + startVector[1]]);
	            var endPoint = scalePoint([center[0] + endVector[0], center[1] + endVector[1]]);

	            var largeAngle = ((endAngle - startAngle) % 360 + 360) % 360 > 180;

	            return raphael.path(
	                "M" + startPoint.join(" ") +
	                "A" + radii.join(" ") +
	                " 0 " + // ellipse rotation
	                (largeAngle ? 1 : 0) +
	                " 0 " + // sweep flag
	                endPoint.join(" ") +
	                (sector ? "L" + cent.join(" ") + "z" : ""));
	        },

	        path: function(points) {
	            var p = raphael.path(svgPath(points));
	            p.graphiePath = points;
	            return p;
	        },

	        fixedPath: function(points, center, createPath) {
	            points = _.map(points, scalePoint);
	            center = center ? scalePoint(center) : null;
	            createPath = createPath || svgPath;

	            var pathLeft = _.min(_.pluck(points, 0));
	            var pathRight = _.max(_.pluck(points, 0));
	            var pathTop = _.min(_.pluck(points, 1));
	            var pathBottom = _.max(_.pluck(points, 1));

	            // Apply padding to line
	            var padding = [4, 4];

	            // Calculate and apply additional offset
	            var extraOffset = [pathLeft, pathTop];

	            // Apply padding and offset to points
	            points = _.map(points, function(point) {
	                return kvector.add(
	                    kvector.subtract(
	                        point,
	                        extraOffset
	                    ),
	                    kvector.scale(padding, 0.5)
	                );
	            });

	            // Calculate <div> dimensions
	            var width = (pathRight - pathLeft) + padding[0];
	            var height = (pathBottom - pathTop) + padding[1];
	            var left = extraOffset[0] - padding[0]/2;
	            var top = extraOffset[1] - padding[1]/2;

	            // Create <div>
	            var wrapper = document.createElement("div");
	            $(wrapper).css({
	                position: "absolute",
	                width: width + "px",
	                height: height + "px",
	                left: left + "px",
	                top: top + "px",
	                // If user specified a center, set it
	                transformOrigin: center ? (width/2 + center[0]) + "px " +
	                                          (height/2 + center[1]) + "px"
	                                        : null
	            });

	            // Create Raphael canvas
	            var localRaphael = Raphael(wrapper, width, height);

	            // Calculate path
	            var visibleShape = localRaphael.path(createPath(points));

	            return {
	                wrapper: wrapper,
	                visibleShape: visibleShape
	            };
	        },

	        scaledPath: function(points) {
	            var p = raphael.path(svgPath(points, /* alreadyScaled */ true));
	            p.graphiePath = points;
	            return p;
	        },

	        line: function(start, end) {
	            return this.path([start, end]);
	        },

	        parabola: function(a, b, c) {
	            // Plot a parabola of the form: f(x) = (a * x + b) * x + c
	            return raphael.path(svgParabolaPath(a, b, c));
	        },

	        fixedLine: function(start, end, thickness) {
	            // Apply padding to line
	            var padding = [thickness, thickness];

	            // Scale points to get values in pixels
	            start = scalePoint(start);
	            end = scalePoint(end);

	            // Calculate and apply additional offset
	            var extraOffset = [
	                Math.min(start[0], end[0]),
	                Math.min(start[1], end[1])
	            ];

	            // Apply padding and offset to start, end points
	            start = kvector.add(
	                kvector.subtract(
	                    start,
	                    extraOffset
	                ),
	                kvector.scale(padding, 0.5)
	            );
	            end = kvector.add(
	                kvector.subtract(
	                    end,
	                    extraOffset
	                ),
	                kvector.scale(padding, 0.5)
	            );

	            // Calculate <div> dimensions
	            var left = extraOffset[0] - padding[0]/2;
	            var top = extraOffset[1] - padding[1]/2;
	            var width = Math.abs(start[0] - end[0]) + padding[0];
	            var height = Math.abs(start[1] - end[1]) + padding[1];

	            // Create <div>
	            var wrapper = document.createElement("div");
	            $(wrapper).css({
	                position: "absolute",
	                width: width + "px",
	                height: height + "px",
	                left: left + "px",
	                top: top + "px",
	                // Outsiders should feel like the line's 'origin' (i.e., for
	                // rotation) is the starting point
	                transformOrigin: start[0] + "px " + start[1] + "px"
	            });

	            // Create Raphael canvas
	            var localRaphael = Raphael(wrapper, width, height);

	            // Calculate path
	            var path = "M" + start[0] + " " + start[1] + " " +
	                       "L" + end[0] + " " + end[1];
	            var visibleShape = localRaphael.path(path);
	            visibleShape.graphiePath = [start, end];

	            return {
	                wrapper: wrapper,
	                visibleShape: visibleShape
	            };
	        },

	        sinusoid: function(a, b, c, d) {
	            // Plot a sinusoid of the form: f(x) = a * sin(b * x - c) + d
	            return raphael.path(svgSinusoidPath(a, b, c, d));
	        },

	        grid: function(xr, yr) {
	            var step = currentStyle.step || [1, 1];
	            var set = raphael.set();

	            var x = step[0] * Math.ceil(xr[0] / step[0]);
	            for (; x <= xr[1]; x += step[0]) {
	                set.push(this.line([x, yr[0]], [x, yr[1]]));
	            }

	            var y = step[1] * Math.ceil(yr[0] / step[1]);
	            for (; y <= yr[1]; y += step[1]) {
	                set.push(this.line([xr[0], y], [xr[1], y]));
	            }

	            return set;
	        },

	        label: function(point, text, direction, latex) {
	            latex = (typeof latex === "undefined") || latex;

	            var $span = $("<span>").addClass("graphie-label");

	            var pad = currentStyle["label-distance"];

	            // TODO(alpert): Isn't currentStyle applied afterwards
	            // automatically since this is a 'drawing tool'?
	            $span
	                .css($.extend({}, currentStyle, {
	                        position: "absolute",
	                        padding: (pad != null ? pad : 7) + "px"
	                    }))
	                .data("labelDirection", direction)
	                .appendTo(el);

	            $span.setPosition = function(point) {
	                var scaledPoint = scalePoint(point);
	                $span.css({
	                    left: scaledPoint[0],
	                    top: scaledPoint[1]
	                });
	            };

	            $span.setPosition(point);

	            var span = $span[0];

	            $span.processMath = function(math, force) {
	                KhanUtil.processMath(span, math, force, function() {
	                    var width = span.scrollWidth;
	                    var height = span.scrollHeight;
	                    setLabelMargins(span, [width, height]);
	                });
	            };

	            $span.processText = function(text) {
	                $span.html(text);
	                var width = span.scrollWidth;
	                var height = span.scrollHeight;
	                setLabelMargins(span, [width, height]);
	            };

	            if (latex) {
	                $span.processMath(text, /* force */ false);
	            } else {
	                $span.processText(text);
	            }

	            return $span;
	        },

	        plotParametric: function(fn, range, shade, fn2) {
	            // Note: fn2 should only be set if 'shade' is true, as it denotes
	            // the function between which fn should have its area shaded.
	            // In general, plotParametric shouldn't be used to shade the area
	            // between two arbitrary parametrics functions over an interval,
	            // as the method assumes that fn and fn2 are both of the form
	            // fn(t) = (t, fn'(t)) for some initial fn'.
	            fn2 = fn2 || function(t) { return [t, 0]; };

	            currentStyle.strokeLinejoin || (currentStyle.strokeLinejoin = "round");
	            currentStyle.strokeLinecap || (currentStyle.strokeLinecap = "round");

	            var min = range[0], max = range[1];
	            var step = (max - min) / (currentStyle["plot-points"] || 800);
	            if (step === 0) {
	                step = 1;
	            }

	            var paths = raphael.set();
	            var points = [];
	            var lastDiff = KhanUtil.coordDiff(fn(min), fn2(min));

	            var lastFlip = min;
	            for (var t = min; t <= max; t += step) {
	                var top = fn(t);
	                var bottom = fn2(t);
	                var diff = KhanUtil.coordDiff(top, bottom);

	                // Find points where it flips
	                // Create path that sketches area between the two functions
	                if (
	                    // if there is an asymptote here, meaning that the graph switches signs and has a large difference
	                    ((diff[1] < 0) !== (lastDiff[1] < 0)) && Math.abs(diff[1] - lastDiff[1]) > 2 * yScale ||
	                    // or the function value gets really high (which breaks raphael)
	                    Math.abs(diff[1]) > 1e7 ||
	                    // or the function is undefined
	                    isNaN(diff[1])
	                   ) {
	                    // split the path at this point, and draw it
	                    if (shade) {
	                        points.push(top);

	                        // backtrack to draw paired function
	                        for (var u = t - step; u >= lastFlip; u -= step) {
	                            points.push(fn2(u));
	                        }
	                        lastFlip = t;
	                    }
	                    paths.push(this.path(points));
	                    // restart the path, excluding this point
	                    points = [];
	                    if (shade) {
	                        points.push(top);
	                    }
	                } else {
	                    // otherwise, just add the point to the path
	                    points.push(top);
	                }

	                lastDiff = diff;
	            }

	            if (shade) {
	                // backtrack to draw paired function
	                for (var u = max - step; u >= lastFlip; u -= step) {
	                    points.push(fn2(u));
	                }
	            }
	            paths.push(this.path(points));

	            return paths;
	        },

	        plotPolar: function(fn, range) {
	            var min = range[0], max = range[1];

	            // There is probably a better heuristic for this
	            currentStyle["plot-points"] || (currentStyle["plot-points"] = 2 * (max - min) * xScale);

	            return this.plotParametric(function(th) {
	                return polar(fn(th), th * 180 / Math.PI);
	            }, range);
	        },

	        plot: function(fn, range, swapAxes, shade, fn2) {
	            var min = range[0], max = range[1];
	            currentStyle["plot-points"] || (currentStyle["plot-points"] = 2 * (max - min) * xScale);

	            if (swapAxes) {
	                if (fn2) {
	                    // TODO(charlie): support swapped axis area shading
	                    throw new Error(
	                        "Can't shade area between functions with swapped axes."
	                    );
	                }
	                return this.plotParametric(function(y) {
	                    return [fn(y), y];
	                }, range, shade);
	            } else {
	                if (fn2) {
	                    if (shade) {
	                        return this.plotParametric(function(x) {
	                            return [x, fn(x)];
	                        }, range, shade, function(x) {
	                            return [x, fn2(x)];
	                        });
	                    } else {
	                        throw new Error(
	                            "fn2 should only be set when 'shade' is True."
	                        );
	                    }
	                }
	                return this.plotParametric(function(x) {
	                    return [x, fn(x)];
	                }, range, shade);
	            }
	        },

	        /**
	         * Given a piecewise function, return a Raphael set of paths that
	         * can be used to draw the function, e.g. using style().
	         * Calls plotParametric.
	         *
	         * @param  {[]} fnArray    array of functions which when called
	         *                         with a parameter i return the value of
	         *                         the function at i
	         * @param  {[]} rangeArray array of ranges over which the
	         *                         corresponding functions are defined
	         * @return {Raphael set}
	         */
	        plotPiecewise: function(fnArray, rangeArray) {
	            var paths = raphael.set();
	            var self = this;
	            _.times(fnArray.length, function(i) {
	                var fn = fnArray[i];
	                var range = rangeArray[i];
	                var fnPaths = self.plotParametric(function(x) {
	                    return [x, fn(x)];
	                }, range);
	                _.each(fnPaths, function(fnPath) {
	                    paths.push(fnPath);
	                });
	            });

	            return paths;
	        },

	        /**
	         * Given an array of coordinates of the form [x, y], create and
	         * return a Raphael set of Raphael circle objects at those
	         * coordinates
	         *
	         * @param  {Array of arrays} endpointArray
	         * @return {Raphael set}
	         */
	        plotEndpointCircles: function(endpointArray) {
	            var circles = raphael.set();
	            var self = this;

	            _.each(endpointArray, function(coord, i) {
	                circles.push(self.circle(coord, 0.15));
	            });

	            return circles;
	        },

	        plotAsymptotes: function(fn, range) {
	            var min = range[0], max = range[1];
	            var step = (max - min) / (currentStyle["plot-points"] || 800);

	            var asymptotes = raphael.set(), lastVal = fn(min);

	            for (var t = min; t <= max; t += step) {
	                var funcVal = fn(t);

	                if (((funcVal < 0) !== (lastVal < 0)) && Math.abs(funcVal - lastVal) > 2 * yScale) {
	                    asymptotes.push(
	                        this.line([t, yScale], [t, -yScale])
	                    );
	                }

	                lastVal = funcVal;
	            }

	            return asymptotes;
	        }
	    };

	    var graphie = new Graphie();
	    _.extend(graphie, {
	        raphael: raphael,

	        init: function(options) {
	            var scale = options.scale || [40, 40];
	            scale = (typeof scale === "number" ? [scale, scale] : scale);

	            xScale = scale[0];
	            yScale = scale[1];

	            if (options.range == null) {
	                return Khan.error("range should be specified in graph init");
	            }

	            xRange = options.range[0];
	            yRange = options.range[1];

	            var w = (xRange[1] - xRange[0]) * xScale, h = (yRange[1] - yRange[0]) * yScale;
	            raphael.setSize(w, h);

	            $(el).css({
	                "width": w,
	                "height": h
	            });

	            this.range = options.range;
	            this.scale = scale;
	            this.dimensions = [w, h];
	            this.xpixels = w;
	            this.ypixels = h;

	            return this;
	        },

	        // Wrap window.setInterval to keep track of all the intervalIDs.
	        setInterval: function() {
	            var intervalID = Function.prototype.apply.call(window.setInterval,
	                                                           window,
	                                                           arguments);
	            intervalIDs.push(intervalID);
	            return intervalID;
	        },

	        style: function(attrs, fn) {
	            var processed = processAttributes(attrs);

	            if (typeof fn === "function") {
	                var oldStyle = currentStyle;
	                currentStyle = $.extend({}, currentStyle, processed);
	                var result = fn.call(graphie);
	                currentStyle = oldStyle;
	                return result;
	            } else {
	                $.extend(currentStyle, processed);
	            }
	        },

	        scalePoint: scalePoint,
	        scaleVector: scaleVector,

	        unscalePoint: unscalePoint,
	        unscaleVector: unscaleVector,

	        // Custom SVG path functions that are dependent on graphie range
	        // `svgPath`, while independent of range, is exported for consistency
	        svgPath: svgPath,
	        svgParabolaPath: svgParabolaPath,
	        svgSinusoidPath: svgSinusoidPath
	    });

	    $.each(drawingTools, function(name) {
	        graphie[name] = function() {
	            var last = arguments[arguments.length - 1];
	            var oldStyle = currentStyle;
	            var result;

	            // The last argument is probably trying to change the style
	            if (typeof last === "object" && !_.isArray(last)) {
	                currentStyle = $.extend({}, currentStyle, processAttributes(last));

	                var rest = [].slice.call(arguments, 0, arguments.length - 1);
	                result = drawingTools[name].apply(drawingTools, rest);
	            } else {
	                currentStyle = $.extend({}, currentStyle);

	                result = drawingTools[name].apply(drawingTools, arguments);
	            }

	            // Bad heuristic for recognizing Raphael elements and sets
	            var type = result.constructor.prototype;
	            if (type === Raphael.el || type === Raphael.st) {
	                result.attr(currentStyle);

	                if (currentStyle.arrows) {
	                    result = addArrowheads(result);
	                }
	            } else if (result instanceof $) {
	                result.css(currentStyle);
	            }

	            currentStyle = oldStyle;
	            return result;
	        };
	    });


	    // Initializes graphie settings for a graph and draws the basic graph
	    // features (axes, grid, tick marks, and axis labels)
	    // Options expected are:
	    // - range: [[a, b], [c, d]] or [a, b]
	    // - scale: [a, b] or number
	    // - gridOpacity: number (0 - 1)
	    // - gridStep: [a, b] or number (relative to units)
	    // - tickStep: [a, b] or number (relative to grid steps)
	    // - tickLen: [a, b] or number (in pixels)
	    // - labelStep: [a, b] or number (relative to tick steps)
	    // - yLabelFormat: fn to format label string for y-axis
	    // - xLabelFormat: fn to format label string for x-axis
	    // - smartLabelPositioning: true or false to ignore minus sign
	    graphie.graphInit = function(options) {

	        options = options || {};

	        $.each(options, function(prop, val) {

	            // allow options to be specified by a single number for shorthand if
	            // the horizontal and vertical components are the same
	            if (!prop.match(/.*Opacity$/) && prop !== "range" &&
	                typeof val === "number") {
	                options[prop] = [val, val];
	            }

	            // allow symmetric ranges to be specified by the absolute values
	            if (prop === "range" || prop === "gridRange") {
	                if (val.constructor === Array) {
	                    if (val[0].constructor !== Array) {  // but don't mandate symmetric ranges
	                        options[prop] = [[-val[0], val[0]], [-val[1], val[1]]];
	                    }
	                } else if (typeof val === "number") {
	                    options[prop] = [[-val, val], [-val, val]];
	                }
	            }

	        });

	        var range = options.range || [[-10, 10], [-10, 10]],
	            gridRange = options.gridRange || options.range,
	            scale = options.scale || [20, 20],
	            grid = options.grid != null ? options.grid : true,
	            gridOpacity = options.gridOpacity || 0.1,
	            gridStep = options.gridStep || [1, 1],
	            axes = options.axes != null ? options.axes : true,
	            axisArrows = options.axisArrows || "",
	            axisOpacity = options.axisOpacity || 1.0,
	            axisCenter = options.axisCenter || [
	                Math.min(Math.max(range[0][0], 0), range[0][1]),
	                Math.min(Math.max(range[1][0], 0), range[1][1])
	            ],
	            axisLabels = options.axisLabels != null ? options.axisLabels : false,
	            ticks = options.ticks != null ? options.ticks : true,
	            tickStep = options.tickStep || [2, 2],
	            tickLen = options.tickLen || [5, 5],
	            tickOpacity = options.tickOpacity || 1.0,
	            labels = options.labels || options.labelStep || false,
	            labelStep = options.labelStep || [1, 1],
	            labelOpacity = options.labelOpacity || 1.0,
	            unityLabels = options.unityLabels || false,
	            labelFormat = options.labelFormat || function(a) { return a; },
	            xLabelFormat = options.xLabelFormat || labelFormat,
	            yLabelFormat = options.yLabelFormat || labelFormat,
	            smartLabelPositioning = options.smartLabelPositioning != null ?
	                options.smartLabelPositioning : true,
	            realRange = [
	                [range[0][0] - (range[0][0] > 0 ? 1 : 0),
	                 range[0][1] + (range[0][1] < 0 ? 1 : 0)],
	                [range[1][0] - (range[1][0] > 0 ? 1 : 0),
	                 range[1][1] + (range[1][1] < 0 ? 1 : 0)]
	            ];

	        if (!_.isArray(unityLabels)) {
	            unityLabels = [unityLabels, unityLabels];
	        }

	        if (smartLabelPositioning) {
	            var minusIgnorer = function(lf) { return function(a) {
	                return (lf(a) + "").replace(/-(\d)/g, "\\llap{-}$1");
	            }; };

	            xLabelFormat = minusIgnorer(xLabelFormat);
	            yLabelFormat = minusIgnorer(yLabelFormat);
	        }

	        this.init({
	            range: realRange,
	            scale: scale
	        });

	        // draw grid
	        if (grid) {
	            this.grid(gridRange[0], gridRange[1], {
	                stroke: "#000000",
	                opacity: gridOpacity,
	                step: gridStep
	            });
	        }

	        // draw axes
	        if (axes) {

	            // this is a slight hack until <-> arrowheads work
	            if (axisArrows === "<->" || axisArrows === true) {
	                this.style({
	                    stroke: "#000000",
	                    opacity: axisOpacity,
	                    strokeWidth: 2,
	                    arrows: "->"
	                }, function() {
	                    if (range[1][0] < 0 && range[1][1] > 0) {
	                        this.path([axisCenter, [gridRange[0][0], axisCenter[1]]]);
	                        this.path([axisCenter, [gridRange[0][1], axisCenter[1]]]);
	                    }
	                    if (range[0][0] < 0 && range[0][1] > 0) {
	                        this.path([axisCenter, [axisCenter[0], gridRange[1][0]]]);
	                        this.path([axisCenter, [axisCenter[0], gridRange[1][1]]]);
	                    }
	                });

	            // also, we don't support "<-" arrows yet, but why you
	            // would want that on your graph is beyond me.
	            } else if (axisArrows === "->" || axisArrows === "") {
	                this.style({
	                    stroke: "#000000",
	                    opacity: axisOpacity,
	                    strokeWidth: 2,
	                    arrows: axisArrows
	                }, function() {
	                    this.path([[gridRange[0][0], axisCenter[1]], [gridRange[0][1], axisCenter[1]]]);
	                    this.path([[axisCenter[0], gridRange[1][0]], [axisCenter[0], gridRange[1][1]]]);
	                });

	            }

	            if (axisLabels && axisLabels.length === 2) {
	                this.label([gridRange[0][1], axisCenter[1]], axisLabels[0], "right");
	                this.label([axisCenter[0], gridRange[1][1]], axisLabels[1], "above");
	            }

	        }

	        // draw tick marks
	        if (ticks) {
	            this.style({
	                stroke: "#000000",
	                opacity: tickOpacity,
	                strokeWidth: 1
	            }, function() {

	                // horizontal axis
	                var step = gridStep[0] * tickStep[0],
	                    len = tickLen[0] / scale[1],
	                    start = gridRange[0][0],
	                    stop = gridRange[0][1];

	                if (range[1][0] < 0 && range[1][1] > 0) {
	                    for (var x = step + axisCenter[0]; x <= stop; x += step) {
	                        if (x < stop || !axisArrows) {
	                            this.line([x, -len + axisCenter[1]], [x, len + axisCenter[1]]);
	                        }
	                    }

	                    for (var x = -step + axisCenter[0]; x >= start; x -= step) {
	                        if (x > start || !axisArrows) {
	                            this.line([x, -len + axisCenter[1]], [x, len + axisCenter[1]]);
	                        }
	                    }
	                }

	                // vertical axis
	                step = gridStep[1] * tickStep[1];
	                len = tickLen[1] / scale[0];
	                start = gridRange[1][0];
	                stop = gridRange[1][1];

	                if (range[0][0] < 0 && range[0][1] > 0) {
	                    for (var y = step + axisCenter[1]; y <= stop; y += step) {
	                        if (y < stop || !axisArrows) {
	                            this.line([-len + axisCenter[0], y], [len + axisCenter[0], y]);
	                        }
	                    }

	                    for (var y = -step + axisCenter[1]; y >= start; y -= step) {
	                        if (y > start || !axisArrows) {
	                            this.line([-len + axisCenter[0], y], [len + axisCenter[0], y]);
	                        }
	                    }
	                }

	            });
	        }

	        // draw axis labels
	        if (labels) {
	            this.style({
	                stroke: "#000000",
	                opacity: labelOpacity
	            }, function() {

	                // horizontal axis
	                var step = gridStep[0] * tickStep[0] * labelStep[0],
	                    start = gridRange[0][0],
	                    stop = gridRange[0][1],
	                    xAxisPosition = (axisCenter[0] < 0) ? "above" : "below",
	                    yAxisPosition = (axisCenter[0] < 0) ? "right" : "left",
	                    xShowZero = axisCenter[0] === 0 && axisCenter[1] !== 0,
	                    yShowZero = axisCenter[0] !== 0 && axisCenter[1] === 0,
	                    axisOffCenter = axisCenter[0] !== 0 || axisCenter[1] !== 0,
	                    showUnityX = unityLabels[0] || axisOffCenter,
	                    showUnityY = unityLabels[1] || axisOffCenter;

	                // positive x-axis
	                for (var x = (xShowZero ? 0 : step) + axisCenter[0]; x <= stop; x += step) {
	                    if (x < stop || !axisArrows) {
	                        this.label([x, axisCenter[1]], xLabelFormat(x), xAxisPosition);
	                    }
	                }

	                // negative x-axis
	                for (var x = -step * (showUnityX ? 1 : 2) + axisCenter[0]; x >= start; x -= step) {
	                    if (x > start || !axisArrows) {
	                        this.label([x, axisCenter[1]], xLabelFormat(x), xAxisPosition);
	                    }
	                }

	                step = gridStep[1] * tickStep[1] * labelStep[1];
	                start = gridRange[1][0];
	                stop = gridRange[1][1];

	                // positive y-axis
	                for (var y = (yShowZero ? 0 : step) + axisCenter[1]; y <= stop; y += step) {
	                    if (y < stop || !axisArrows) {
	                        this.label([axisCenter[0], y], yLabelFormat(y), yAxisPosition);
	                    }
	                }

	                // negative y-axis
	                for (var y = -step * (showUnityY ? 1 : 2) + axisCenter[1]; y >= start; y -= step) {
	                    if (y > start || !axisArrows) {
	                        this.label([axisCenter[0], y], yLabelFormat(y), yAxisPosition);
	                    }
	                }
	            });
	        }
	    };

	    return graphie;
	};

	$.fn.graphie = function(problem) {
	    if (Khan.query.nographie != null) {
	        return;
	    }
	    return this.find(".graphie, script[type='text/graphie']").addBack().filter(".graphie, script[type='text/graphie']").each(function() {
	        // Grab code for later execution
	        var code = $(this).text(), graphie;

	        // Ignore graphie elements that have already been processed
	        if ($(this).data("graphie") != null) {
	            return;
	        }

	        // Remove any of the code that's in there
	        $(this).empty();

	        // Initialize the graph
	        if ($(this).data("update")) {
	            var id = $(this).data("update");
	            $(this).remove();

	            // Graph could be in either of these
	            var area = $("#problemarea").add(problem);
	            graphie = area.find("#" + id + ".graphie").data("graphie");
	        } else {
	            var el = this;
	            if ($(this).filter("script")[0] != null) {
	                el = $("<div>").addClass("graphie")
	                    .attr("id", $(this).attr("id")).insertAfter(this)[0];
	                $(this).remove();
	            }
	            graphie = KhanUtil.createGraphie(el);
	            $(el).data("graphie", graphie);

	            var id = $(el).attr("id");
	            if (id) {
	                KhanUtil.graphs[id] = graphie;
	            }
	        }

	        // So we can write graph.bwahahaha = 17 to save stuff between updates
	        if (typeof graphie.graph === "undefined") {
	            graphie.graph = {};
	        }

	        // Add newline in case code ends with a // comment
	        code = "(function() {" + code + "\n})()";

	        // Execute the graph-specific code
	        KhanUtil.currentGraph = graphie;
	        $.tmpl.getVAR(code, graphie);
	        // delete KhanUtil.currentGraph;
	    }).end();
	};

	$.fn.graphieCleanup = function(problem) {
	    cleanupIntervals();
	};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * Point Utils
	 * A point is an array of two numbers e.g. [0, 0].
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var kvector = __webpack_require__(4);
	var knumber = __webpack_require__(5);

	var kpoint = KhanUtil.kpoint = {

	    // Rotate point (around origin unless a center is specified)
	    rotateRad: function(point, theta, center) {
	        if (center === undefined) {
	            return kvector.rotateRad(point, theta);
	        } else {
	            return kvector.add(
	                center,
	                kvector.rotateRad(
	                    kvector.subtract(point, center),
	                    theta
	                )
	            );
	        }
	    },

	    rotateDeg: function(point, theta, center) {
	        if (center === undefined) {
	            return kvector.rotateDeg(point, theta);
	        } else {
	            return kvector.add(
	                center,
	                kvector.rotateDeg(
	                    kvector.subtract(point, center),
	                    theta
	                )
	            );
	        }
	    },

	    // Distance between two points
	    distanceToPoint: function(point1, point2) {
	        return kvector.length(kvector.subtract(point1, point2));
	    },

	    // Distance between point and line
	    distanceToLine: function(point, line) {
	        var lv = kvector.subtract(line[1], line[0]);
	        var pv = kvector.subtract(point, line[0]);
	        var projectedPv = kvector.projection(pv, lv);
	        var distancePv = kvector.subtract(projectedPv, pv);
	        return kvector.length(distancePv);
	    },

	    // Reflect point over line
	    reflectOverLine: function(point, line) {
	        var lv = kvector.subtract(line[1], line[0]);
	        var pv = kvector.subtract(point, line[0]);
	        var projectedPv = kvector.projection(pv, lv);
	        var reflectedPv = kvector.subtract(kvector.scale(projectedPv, 2), pv);
	        return kvector.add(line[0], reflectedPv);
	    },

	    /**
	     * Compares two points, returning -1, 0, or 1, for use with
	     * Array.prototype.sort
	     *
	     * Note: This technically doesn't satisfy the total-ordering
	     * requirements of Array.prototype.sort unless equalityTolerance
	     * is 0. In some cases very close points that compare within a
	     * few equalityTolerances could appear in the wrong order.
	     */
	    compare: function(point1, point2, equalityTolerance) {
	        if (point1.length !== point2.length) {
	            return point1.length - point2.length;
	        }
	        for (var i = 0; i < point1.length; i++) {
	            if (!knumber.equal(point1[i], point2[i], equalityTolerance)) {
	                return point1[i] - point2[i];
	            }
	        }
	        return 0;
	    }
	};

	_.extend(kpoint, {
	    // Check if a value is a point
	    is: kvector.is,

	    // Add and subtract vector(s)
	    addVector: kvector.add,
	    addVectors: kvector.add,
	    subtractVector: kvector.subtract,
	    equal: kvector.equal,

	    // Convert from cartesian to polar and back
	    polarRadFromCart: kvector.polarRadFromCart,
	    polarDegFromCart: kvector.polarDegFromCart,
	    cartFromPolarRad: kvector.cartFromPolarRad,
	    cartFromPolarDeg: kvector.cartFromPolarDeg,

	    // Rounding
	    round: kvector.round,
	    roundTo: kvector.roundTo,
	    floorTo: kvector.floorTo,
	    ceilTo: kvector.ceilTo
	});

	return kpoint;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-trailing-spaces, no-undef, no-var, prefer-spread */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * Vector Utils 
	 * A vector is an array of numbers e.g. [0, 3, 4].
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var knumber = __webpack_require__(5);

	function arraySum(array) {
	    return _.reduce(array, function(memo, arg) { return memo + arg; }, 0);
	}

	function arrayProduct(array) {
	    return _.reduce(array, function(memo, arg) { return memo * arg; }, 1);
	}

	var kvector = KhanUtil.kvector = {

	    is: function(vec, length) {
	        if (!_.isArray(vec)) {
	            return false;
	        }
	        if (length !== undefined && vec.length !== length) {
	            return false;
	        }
	        return _.all(vec, knumber.is);
	    },

	    // Normalize to a unit vector
	    normalize: function(v) {
	        return kvector.scale(v, 1 / kvector.length(v));
	    },

	    // Length/magnitude of a vector
	    length: function(v) {
	        return Math.sqrt(kvector.dot(v, v));
	    },

	    // Dot product of two vectors
	    dot: function(a, b) {
	        var vecs = _.toArray(arguments);
	        var zipped = _.zip.apply(_, vecs);
	        var multiplied = _.map(zipped, arrayProduct);
	        return arraySum(multiplied);
	    },

	    /* vector-add multiple [x, y] coords/vectors
	     *
	     * kvector.add([1, 2], [3, 4]) -> [4, 6]
	     */
	    add: function() {
	        var points = _.toArray(arguments);
	        var zipped = _.zip.apply(_, points);
	        return _.map(zipped, arraySum);
	    },

	    subtract: function(v1, v2) {
	        return _.map(_.zip(v1, v2), function(dim) {
	            return dim[0] - dim[1];
	        });
	    },

	    negate: function(v) {
	        return _.map(v, function(x) {
	            return -x;
	        });
	    },

	    // Scale a vector
	    scale: function(v1, scalar) {
	        return _.map(v1, function(x) {
	            return x * scalar;
	        });
	    },

	    equal: function(v1, v2, tolerance) {
	        // _.zip will nicely deal with the lengths, going through
	        // the length of the longest vector. knumber.equal then
	        // returns false for any number compared to the undefined
	        // passed in if one of the vectors is shorter.
	        return _.all(_.zip(v1, v2), function(pair) {
	            return knumber.equal(pair[0], pair[1], tolerance);
	        });
	    },

	    codirectional: function(v1, v2, tolerance) {
	        // The origin is trivially codirectional with all other vectors.
	        // This gives nice semantics for codirectionality between points when
	        // comparing their difference vectors.
	        if (knumber.equal(kvector.length(v1), 0, tolerance) ||
	                knumber.equal(kvector.length(v2), 0, tolerance)) {
	            return true;
	        }

	        v1 = kvector.normalize(v1);
	        v2 = kvector.normalize(v2);

	        return kvector.equal(v1, v2, tolerance);
	    },

	    collinear: function(v1, v2, tolerance) {
	        return kvector.codirectional(v1, v2, tolerance) ||
	                kvector.codirectional(v1, kvector.negate(v2), tolerance);
	    },

	    // Convert a cartesian coordinate into a radian polar coordinate
	    polarRadFromCart: function(v) {
	        var radius = kvector.length(v);
	        var theta = Math.atan2(v[1], v[0]);

	        // Convert angle range from [-pi, pi] to [0, 2pi]
	        if (theta < 0) {
	            theta += 2 * Math.PI;
	        }

	        return [radius, theta];
	    },

	    // Converts a cartesian coordinate into a degree polar coordinate
	    polarDegFromCart: function(v) {
	        var polar = kvector.polarRadFromCart(v);
	        return [polar[0], polar[1] * 180 / Math.PI];
	    },

	    /* Convert a polar coordinate into a cartesian coordinate
	     *
	     * Examples:
	     * cartFromPolarRad(5, Math.PI)
	     * cartFromPolarRad([5, Math.PI])
	     */
	    cartFromPolarRad: function(radius, theta) {
	        if (_.isUndefined(theta)) {
	            theta = radius[1];
	            radius = radius[0];
	        }

	        return [radius * Math.cos(theta), radius * Math.sin(theta)];
	    },

	    /* Convert a polar coordinate into a cartesian coordinate
	     *
	     * Examples:
	     * cartFromPolarDeg(5, 30)
	     * cartFromPolarDeg([5, 30])
	     */
	    cartFromPolarDeg: function(radius, theta) {
	        if (_.isUndefined(theta)) {
	            theta = radius[1];
	            radius = radius[0];
	        }

	        return kvector.cartFromPolarRad(radius, theta * Math.PI / 180);
	    },

	    // Rotate vector
	    rotateRad: function(v, theta) {
	        var polar = kvector.polarRadFromCart(v);
	        var angle = polar[1] + theta;
	        return kvector.cartFromPolarRad(polar[0], angle);
	    },

	    rotateDeg: function(v, theta) {
	        var polar = kvector.polarDegFromCart(v);
	        var angle = polar[1] + theta;
	        return kvector.cartFromPolarDeg(polar[0], angle);
	    },

	    // Angle between two vectors
	    angleRad: function(v1, v2) {
	        return Math.acos(kvector.dot(v1, v2) /
	            (kvector.length(v1) * kvector.length(v2)));
	    },

	    angleDeg: function(v1, v2) {
	        return kvector.angleRad(v1, v2) * 180 / Math.PI;
	    },

	    // Vector projection of v1 onto v2
	    projection: function(v1, v2) {
	        var scalar = kvector.dot(v1, v2) / kvector.dot(v2, v2);
	        return kvector.scale(v2, scalar);
	    },

	    // Round each number to a certain number of decimal places
	    round: function(vec, precision) {
	        return _.map(vec, function(elem, i) {
	            return knumber.round(elem, precision[i] || precision);
	        });
	    },

	    // Round each number to the nearest increment
	    roundTo: function(vec, increment) {
	        return _.map(vec, function(elem, i) {
	            return knumber.roundTo(elem, increment[i] || increment);
	        });
	    },

	    floorTo: function(vec, increment) {
	        return _.map(vec, function(elem, i) {
	            return knumber.floorTo(elem, increment[i] || increment);
	        });
	    },

	    ceilTo: function(vec, increment) {
	        return _.map(vec, function(elem, i) {
	            return knumber.ceilTo(elem, increment[i] || increment);
	        });
	    }
	};

	return kvector;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable camelcase, comma-dangle, indent, no-undef, no-var, one-var, space-infix-ops */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * Number Utils
	 * A number is a js-number, e.g. 5.12
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var DEFAULT_TOLERANCE = 1e-9;
	var EPSILON = Math.pow(2, -42);

	var knumber = KhanUtil.knumber = {

	    DEFAULT_TOLERANCE: DEFAULT_TOLERANCE,
	    EPSILON: EPSILON,

	    is: function(x) {
	        return _.isNumber(x) && !_.isNaN(x);
	    },

	    equal: function(x, y, tolerance) {
	        // Checking for undefined makes this function behave nicely
	        // with vectors of different lengths that are _.zip'd together
	        if (x == null || y == null) {
	            return x === y;
	        }
	        if (tolerance == null) {
	            tolerance = DEFAULT_TOLERANCE;
	        }
	        return Math.abs(x - y) < tolerance;
	    },

	    sign: function(x, tolerance) {
	        return knumber.equal(x, 0, tolerance) ? 0 : Math.abs(x) / x;
	    },

	    // Round a number to a certain number of decimal places
	    round: function(num, precision) {
	        var factor = Math.pow(10, precision);
	        return Math.round(num * factor) / factor;
	    },

	    // Round num to the nearest multiple of increment
	    // i.e. roundTo(83, 5) -> 85
	    roundTo: function(num, increment) {
	        return Math.round(num / increment) * increment;
	    },

	    floorTo: function(num, increment) {
	        return Math.floor(num / increment) * increment;
	    },

	    ceilTo: function(num, increment) {
	        return Math.ceil(num / increment) * increment;
	    },

	    isInteger: function(num, tolerance) {
	        return knumber.equal(Math.round(num), num, tolerance);
	    },

	    /**
	     * toFraction
	     *
	     * Returns a [numerator, denominator] array rational representation
	     * of `decimal`
	     *
	     * See http://en.wikipedia.org/wiki/Continued_fraction for implementation
	     * details
	     *
	     * toFraction(4/8) => [1, 2]
	     * toFraction(0.66) => [33, 50]
	     * toFraction(0.66, 0.01) => [2/3]
	     * toFraction(283 + 1/3) => [850, 3]
	     */
	    toFraction: function(decimal, tolerance, max_denominator) {
	        max_denominator = max_denominator || 1000;
	        tolerance = tolerance || EPSILON; // can't be 0

	        // Initialize everything to compute successive terms of
	        // continued-fraction approximations via recurrence relation
	        var n = [1, 0], d = [0, 1];
	        var a = Math.floor(decimal);
	        var rem = decimal - a;

	        while (d[0] <= max_denominator) {
	            if (knumber.equal(n[0] / d[0], decimal, tolerance)) {
	                return [n[0], d[0]];
	            }
	            n = [a*n[0] + n[1], n[0]];
	            d = [a*d[0] + d[1], d[0]];
	            a = Math.floor(1 / rem);
	            rem = 1/rem - a;
	        }

	        // We failed to find a nice rational representation,
	        // so return an irrational "fraction"
	        return [decimal, 1];
	    }
	};

	return knumber;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	function findChildOrAdd(elem, className) {
	    var $child = $(elem).find("." + className);
	    if ($child.length === 0) {
	        return $("<span>").addClass(className).appendTo($(elem));
	    } else {
	        return $child;
	    }
	}

	function doCallback(elem, callback) {
	    var tries = 0;
	    (function check() {
	        var height = elem.scrollHeight;
	        // Heuristic to guess if the font has kicked in
	        // so we have box metrics (magic number ick,
	        // but this seems to work mostly-consistently)
	        if (height > 18 || tries >= 10) {
	            callback();
	        } else {
	            tries++;
	            setTimeout(check, 100);
	        }
	    })();
	}


	$.extend(KhanUtil, {
	    // Process a node and add math inside of it. This attempts to use KaTeX to
	    // format the math, and if that fails it falls back to MathJax.
	    //
	    // elem: The element which the math should be added to.
	    //
	    // text: The text that should be formatted inside of the node. If the node
	    //       has already had math formatted inside of it before, this doesn't
	    //       have to be provided. If this is not provided, and the node hasn't
	    //       been formatted before, the text content of the node is used.
	    //
	    // force: (optional) if the node has been processed before, then it will
	    //        not be formatted again, unless this argument is true
	    //
	    // callback: (optional) a callback to be run after the math has been
	    //           processed (note: this might be called synchronously or
	    //           asynchronously, depending on whether KaTeX or MathJax is used)
	    processMath: function(elem, text, force, callback) {
	        var $elem = $(elem);

	        // Only process if it hasn't been done before, or it is forced
	        if ($elem.attr("data-math-formula") == null || force) {
	            var $katexHolder = findChildOrAdd($elem, "katex-holder");
	            var $mathjaxHolder = findChildOrAdd($elem, "mathjax-holder");

	            // Search for MathJax-y script tags inside of the node. These are
	            // used by MathJax to denote the formula to be typeset. Before, we
	            // would update the formula by updating the contents of the script
	            // tag, which shouldn't happen any more, but we manage them just in
	            // case.
	            var script = $mathjaxHolder.find("script[type='math/tex']")[0];

	            // If text wasn't provided, we look in two places
	            if (text == null) {
	                if ($elem.attr("data-math-formula")) {
	                    // The old typeset formula
	                    text = $elem.attr("data-math-formula");
	                } else if (script) {
	                    // The contents of the <script> tag
	                    text = script.text || script.textContent;
	                }
	            }

	            text = text != null ? text + "" : "";

	            // Attempt to clean up some of the math
	            if (KhanUtil.cleanMath) {
	                text = KhanUtil.cleanMath(text);
	            }

	            // Store the formula that we're using
	            $elem.attr("data-math-formula", text);

	            if (Exercises.useKatex) {
	                // Try to process the nodes with KaTeX first
	                try {
	                    katex.render(text, $katexHolder[0]);
	                    // If that worked, and we previously formatted with
	                    // mathjax, do some mathjax cleanup
	                    if ($elem.attr("data-math-type") === "mathjax") {
	                        // Remove the old mathjax stuff
	                        var jax = MathJax.Hub.getJaxFor(script);
	                        if (jax) {
	                            var e = jax.SourceElement();
	                            if (e.previousSibling &&
	                                    e.previousSibling.className) {
	                                jax.Remove();
	                            }
	                        }
	                    }
	                    $elem.attr("data-math-type", "katex");
	                    // Call the callback
	                    if (callback) {
	                        doCallback(elem, callback);
	                    }
	                    return;
	                } catch (err) {
	                    // IE doesn't do instanceof correctly, so we resort to
	                    // manual checking
	                    /* jshint -W103 */
	                    if (err.__proto__ !== katex.ParseError.prototype) {
	                        throw err;
	                    }
	                    /* jshint +W103 */
	                }
	            }

	            // Otherwise, fallback to MathJax

	            // (Note: we don't need to do any katex cleanup here, because
	            // KaTeX is smart and cleans itself up)
	            $elem.attr("data-math-type", "mathjax");
	            // Update the script tag, or add one if necessary
	            if (!script) {
	                $mathjaxHolder.append("<script type='math/tex'>" +
	                        text.replace(/<\//g, "< /") + "</script>");
	            } else {
	                if ("text" in script) {
	                    // IE8, etc
	                    script.text = text;
	                } else {
	                    script.textContent = text;
	                }
	            }
	            if (typeof MathJax !== "undefined") {
	                // Put the process, a debug log, and the callback into the
	                // MathJax queue
	                MathJax.Hub.Queue(["Reprocess", MathJax.Hub,
	                    $mathjaxHolder[0]]);
	                MathJax.Hub.Queue(function() {
	                    KhanUtil.debugLog("MathJax done typesetting (" + text +
	                            ")");
	                });
	                if (callback) {
	                    MathJax.Hub.Queue(function() {
	                        var cb = MathJax.Callback(function() {});
	                        doCallback(elem, function() {
	                            callback();
	                            cb();
	                        });
	                        return cb;
	                    });
	                }
	            }
	        }
	    },

	    processAllMath: function(elem, force) {
	        var $elem = $(elem);
	        $elem.filter("code").add($elem.find("code")).each(function() {
	            var $this = $(this);
	            var text = $this.attr("data-math-formula");
	            if (text == null) {
	                text = $this.text();
	                $this.empty();
	            }
	            KhanUtil.processMath(this, text, force);
	        });
	    },

	    // Function to restore a node to a non-math-processed state
	    cleanupMath: function(elem) {
	        var $elem = $(elem);

	        // Only mess with it if it's been processed before
	        if ($elem.attr("data-math-formula")) {
	            // Remove MathJax remnants
	            if (typeof MathJax !== "undefined") {
	                var jax = MathJax.Hub.getJaxFor($elem.find("script")[0]);
	                if (jax) {
	                    var e = jax.SourceElement();
	                    if (e.previousSibling && e.previousSibling.className) {
	                        jax.Remove();
	                    }
	                }
	            }

	            $elem.text($elem.attr("data-math-formula"));
	            $elem.attr("data-math-formula", null);
	            $elem.attr("data-math-type", null);
	        }

	        return elem;
	    },

	    // Function to retrieve the formula of a typeset math node
	    retrieveMathFormula: function(elem) {
	        return $(elem).attr("data-math-formula");
	    }
	});

	$.fn.tex = function() {
	    KhanUtil.processAllMath(this, false);

	    return this;
	};

	$.fn.texCleanup = function() {
	    this.filter("code").add(this.find("code")).each(function() {
	        KhanUtil.cleanupMath(this);
	    });

	    return this;
	};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, max-len, no-alert, no-redeclare, no-undef, no-var, no-with, one-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var crc32 = __webpack_require__(9);

	var localMode;

	// Keep the template variables private, to prevent external access
	var VARS = {};

	$.tmpl = {
	    DATA_ENSURE_LOOPS: 0,

	    // Processors that act based on element attributes
	    attr: {
	        "data-ensure": function(elem, ensure) {
	            // Returns a function in order to run after other templating and var assignment
	            return function(elem) {
	                // Return a boolean corresponding to the ensure's value
	                // False means all templating will be run again, so new values will be chosen
	                var result = !!(ensure && $.tmpl.getVAR(ensure));
	                if (!result) {
	                    if ($.tmpl.DATA_ENSURE_LOOPS++ > 10000 && localMode) {
	                        // Shucks, probably not possible. Just give up in order
	                        // to not hang the dev's browser.
	                        alert("unsatisfiable data-ensure?");
	                        return true;
	                    }
	                }
	                return result;
	            };
	        },

	        "data-if": function(elem, value) {
	            var $elem = $(elem);

	            value = value && $.tmpl.getVAR(value);

	            // Save the result of this data-if in the next sibling for data-else-if and data-else
	            // Only save the value if no previous value has been set
	            var $nextElem = $elem.next();
	            if ($nextElem.data("lastCond") === undefined) {
	                $nextElem.data("lastCond", value);
	            }

	            if (!value) {
	                // Delete the element if the data-if evaluated to false
	                return [];
	            }
	        },

	        "data-else-if": function(elem, value) {
	            var $elem = $(elem);

	            var lastCond = $elem.data("lastCond");

	            // Show this element iff the preceding element was hidden AND this data-if returns truthily
	            value = !lastCond && value && $.tmpl.getVAR(value);

	            // Succeeding elements care about the visibility of both me and my preceding siblings
	            // Only save the value if no previous value has been set
	            var $nextElem = $elem.next();
	            if ($nextElem.data("lastCond") === undefined) {
	                $nextElem.data("lastCond", lastCond || value);
	            }

	            if (!value) {
	                // Delete the element if appropriate
	                return [];
	            }
	        },

	        "data-else": function(elem) {
	            var $elem = $(elem);

	            if ($elem.data("lastCond")) {
	                // Delete the element if the data-if of the preceding element was true
	                return [];
	            }
	        },

	        "data-each": function(elem, value) {
	            var match;

	            // Remove the data-each attribute so it doesn't end up in the generated elements
	            $(elem).removeAttr("data-each");

	            // HINT_COUNT times
	            // HINT_COUNT times as INDEX
	            if ((match = /^(.+) times(?: as (\w+))?$/.exec(value))) {
	                var times = $.tmpl.getVAR(match[1]);

	                return {
	                    items: $.map(new Array(times), function(e, i) { return i; }),
	                    value: match[2],
	                    oldValue: VARS[match[2]]
	                };

	            // Extract the 1, 2, or 3 parts of the data-each attribute, which could be
	            //   - items
	            //   - items as value
	            //   - items as pos, value
	            } else if ((match = /^(.*?)(?: as (?:(\w+), )?(\w+))?$/.exec(value))) {
	                // See "if (ret.items)" in traverse() for the other half of the data-each code
	                return {
	                    // The collection which we'll iterate through
	                    items: $.tmpl.getVAR(match[1]),

	                    // "value" and "pos" as strings
	                    value: match[3],
	                    pos: match[2],

	                    // Save the values of the iterator variables so we don't permanently overwrite them
	                    oldValue: VARS[match[3]],
	                    oldPos: VARS[match[2]]
	                };
	            }
	        },

	        "data-unwrap": function(elem) {
	            return $(elem).contents();
	        },

	        "data-video-hint": function(elem) {
	            var youtubeIds = $(elem).data("youtube-id");
	            if (!youtubeIds) {
	                return;
	            }

	            youtubeIds = youtubeIds.split(/,\s*/);

	            var author = $(elem).data("video-hint-author") || "Sal";
	            var msg = i18n._("Watch %(author)s work through a very similar " +
	                "problem:", {author: author});
	            var preface = $("<p>").text(msg);

	            var wrapper = $("<div>", { "class": "video-hint" });
	            wrapper.append(preface);

	            _.each(youtubeIds, function(youtubeId) {
	                var href = "http://www.khanacademy.org/embed_video?v=" +
	                            youtubeId;
	                var iframe = $("<iframe>").attr({
	                    "frameborder": "0",
	                    "scrolling": "no",
	                    "width": "100%",
	                    "height": "360px",
	                    "src": href
	                });

	                wrapper.append(iframe);
	            });

	            return wrapper;
	        }

	    },

	    // Processors that act based on tag names
	    type: {
	        "var": function(elem, value) {
	            // When called by process(), value is undefined

	            // If the <var> has any child elements, run later with the innerHTML
	            // Use $ instead of getElementsByTagName to exclude comment nodes in IE
	            if (!value && $(elem).children().length > 0) {
	                return function(elem) {
	                    return $.tmpl.type["var"](elem, elem.innerHTML);
	                };
	            }

	            // Evaluate the contents of the <var> as a JS string
	            value = value || $.tmpl.getVAR(elem);

	            // If an ID was specified then we're going to save the value
	            var name = elem.id;
	            if (name) {

	                // Utility function for VARS[name] = value, warning if the name overshadows a KhanUtil property
	                var setVAR = function(name, value) {
	                    if (KhanUtil[name]) {
	                        Khan.error("Defining variable '" + name + "' overwrites utility property of same name.");
	                    }

	                    VARS[name] = value;
	                };

	                // Destructure the array if appropriate
	                if (name.indexOf(",") !== -1) {
	                    // Nested arrays are not supported
	                    var parts = name.split(/\s*,\s*/);

	                    $.each(parts, function(i, part) {
	                        // Ignore empty parts
	                        if (part.length > 0) {
	                            setVAR(part, value[i]);
	                        }
	                    });

	                // Just a normal assignment
	                } else {
	                    setVAR(name, value);
	                }

	            // No value was specified so we replace it with a text node of the value
	            } else {
	                if (value == null) {
	                    // Don't show anything
	                    return [];
	                } else {
	                    // Convert the value to a string and replace with those elements and text nodes
	                    // Add a space so that it can end with a "<" in Safari
	                    var div = $("<div>");
	                    var html = div.append(value + " ").html();
	                    return div.html(html.slice(0, -1)).contents();
	                }
	            }
	        }
	    },

	    // Eval a string in the context of Math, KhanUtil, VARS, and optionally another passed context
	    getVAR: function(elem, ctx) {
	        // We need to compute the value
	        var code = elem.nodeName ? $(elem).text() : elem;

	        // If no extra context was passed, use an empty object
	        if (ctx == null) {
	            ctx = {};
	        }

	        function doEval() {
	            /* jshint -W085 */
	            // Use the methods from JavaScript's built-in Math methods
	            with (Math) {
	                // And the methods provided by the library
	                with (KhanUtil) {
	                    // And the passed-in context
	                    with (ctx) {
	                        // And all the computed variables
	                        with (VARS) {
	                            return eval("(function() { return (" + code + "); })()");
	                        }
	                    }
	                }
	            }
	            /* jshint +W085 */
	        }

	        if (Khan.query.debug != null) {
	            // Skip try-catch in debug mode so that the script panel works
	            return doEval();
	        } else {
	            try {
	                return doEval();
	            } catch (e) {
	                var info;

	                if (elem.nodeName) {
	                    info = elem.nodeName.toLowerCase();

	                    if (elem.id != null && elem.id.length > 0) {
	                        info += "#" + elem.id;
	                    }
	                } else {
	                    info = JSON.stringify(code);
	                }

	                Khan.error("Error while evaluating " + info, e);
	            }
	        }
	    },

	    /**
	     * Get a hash of the problem variables for duplication detection purposes.
	     */
	    // TODO(david): Allow exercise developers to specify which variables are not
	    //     important for duplicate determination purposes.
	    // TODO(david): Just a possibility, but allow exercise developers to specify
	    //     their own variable hash function, so that, eg. for addition 1, 2 + 3
	    //     could hash to the same value as 3 + 2.
	    getVarsHash: function() {
	        // maybe TODO(david): Can base-64 encode the crc32 integer if we want to
	        //     save a few bytes, since localStorage stores strings only.

	        // Just convert top-level values to strings instead of recursively
	        // stringifying, due to issues with circular references.
	        return crc32(JSON.stringify($.map(VARS, function(value, key) {
	            return [key, String(value)];
	        })));
	    }
	};

	if (typeof KhanUtil !== "undefined") {
	    KhanUtil.tmpl = $.tmpl;
	}

	// Reinitialize VARS for each problem
	$.fn.tmplLoad = function(problem, info) {
	    VARS = {};
	    $.tmpl.DATA_ENSURE_LOOPS = 0;

	    localMode = info.localMode;

	    // Expose the variables if we're in local mode
	    if (localMode) {
	        $.tmpl.VARS = VARS;
	    }
	};

	$.fn.tmpl = function() {
	    // Call traverse() for each element in the $ object
	    for (var i = 0, l = this.length; i < l; i++) {
	        traverse(this[i]);
	    }

	    return this;

	    // Walk through the element and its descendants, process()-ing each one using the processors defined above
	    function traverse(elem) {
	        // Array of functions to run after doing the rest of the processing
	        var post = [],

	            // Live NodeList of child nodes to traverse if we don't remove/replace this element
	            child = elem.childNodes,

	            // Result of running the attribute and tag processors on the element
	            ret = process(elem, post);

	        // If false, rerun all templating (like data-ensure)
	        if (ret === false) {
	            return traverse(elem);

	        // If undefined, do nothing
	        } else if (ret === undefined) {

	        // If a (possibly-empty) array of nodes, replace this one with those
	        // The type of ret is checked to ensure it is not a function
	        } else if (typeof ret === "object" && typeof ret.length !== "undefined") {
	            if (elem.parentNode) {
	                // All nodes must be inserted before any are traversed
	                $.each(ret, function(i, rep) {
	                    if (rep.nodeType) {
	                        elem.parentNode.insertBefore(rep, elem);
	                    }
	                });

	                $.each(ret, function(i, rep) {
	                    traverse(rep);
	                });

	                elem.parentNode.removeChild(elem);
	            }

	            return null;

	        // If { items: ... }, this is a data-each loop
	        } else if (ret.items) {
	            // We need these references to insert the elements in the appropriate places
	            var origParent = elem.parentNode,
	                origNext = elem.nextSibling;

	            // Loop though the given array
	            $.each(ret.items, function(pos, value) {
	                // Set the value if appropriate
	                if (ret.value) {
	                    VARS[ret.value] = value;
	                }

	                // Set the position if appropriate
	                if (ret.pos) {
	                    VARS[ret.pos] = pos;
	                }

	                // Do a deep clone (including event handlers and data) of the element
	                var clone = $(elem).clone(true)
	                    .removeAttr("data-each").removeData("each")[0];

	                // Prepend all conditional statements with a declaration of ret.value
	                // and ret.post and an assignment of their current values so that
	                // the conditional will still make sense even when outside of the
	                // data-each context
	                var conditionals = ["data-if", "data-else-if", "data-else"];

	                var declarations = "";
	                declarations += (ret.pos) ? "var " + ret.pos + " = " + JSON.stringify(pos) + ";" : "";
	                declarations += (ret.value) ? "var " + ret.value + " = " + JSON.stringify(value) + ";" : "";

	                for (var i = 0; i < conditionals.length; i++) {
	                    var conditional = conditionals[i];
	                    $(clone).find("[" + conditional + "]").each(function() {
	                        var code = $(this).attr(conditional);
	                        code = "(function() { " + declarations + " return " + code + " })()";
	                        $(this).attr(conditional, code);
	                    });
	                }

	                // Do the same for graphie code
	                $(clone).find(".graphie").addBack().filter(".graphie").each(function() {
	                    var code = $(this).text();
	                    $(this).text(declarations + code);
	                });

	                // Insert in the proper place (depends on whether the loops is the last of its siblings)
	                if (origNext) {
	                    origParent.insertBefore(clone, origNext);
	                } else {
	                    origParent.appendChild(clone);
	                }

	                // Run all templating on the new element
	                traverse(clone);
	            });

	            // Restore the old value of the value variable, if it had one
	            if (ret.value) {
	                VARS[ret.value] = ret.oldValue;
	            }

	            // Restore the old value of the position variable, if it had one
	            if (ret.pos) {
	                VARS[ret.pos] = ret.oldPos;
	            }

	            // Remove the loop element and its handlers now that we've processed it
	            $(elem).remove();

	            // Say that the element was removed so that child traversal doesn't skip anything
	            return null;
	        }

	        // Loop through the element's children if it was not removed
	        for (var i = 0; i < child.length; i++) {
	            // Traverse the child; decrement the counter if the child was removed
	            if (child[i].nodeType === 1 && traverse(child[i]) === null) {
	                i--;
	            }
	        }

	        // Run through each post-processing function
	        for (var i = 0, l = post.length; i < l; i++) {
	            // If false, rerun all templating (for data-ensure and <code> math)
	            if (post[i](elem) === false) {
	                return traverse(elem);
	            }
	        }

	        return elem;
	    }

	    // Run through the attr and type processors, return as soon as one of them is decisive about a plan of action
	    function process(elem, post) {
	        var ret,
	            $elem = $(elem);

	        // Look through each of the attr processors, see if our element has the matching attribute
	        for (var attr in $.tmpl.attr) {
	            if ($.tmpl.attr.hasOwnProperty(attr)) {
	                var value;

	                if ((/^data-/).test(attr)) {
	                    value = $elem.data(attr.replace(/^data-/, ""));
	                } else {
	                    value = $elem.attr(attr);
	                }

	                if (value !== undefined) {
	                    ret = $.tmpl.attr[attr](elem, value);

	                    // If a function, run after all of the other templating
	                    if (typeof ret === "function") {
	                        post.push(ret);

	                    // Return anything else (boolean, array of nodes for replacement, object for data-each)
	                    } else if (ret !== undefined) {
	                        return ret;
	                    }
	                }
	            }
	        }

	        // Look up the processor based on the tag name
	        var type = elem.nodeName.toLowerCase();
	        if ($.tmpl.type[type] != null) {
	            ret = $.tmpl.type[type](elem);

	            // If a function, run after all of the other templating
	            if (typeof ret === "function") {
	                post.push(ret);
	            }
	        }

	        return ret;
	    }
	};

	$.extend($.expr[":"], {
	    inherited: function(el) {
	        return $(el).data("inherited");
	    }
	});

	$.fn.extend({
	    tmplApply: function(options) {
	        options = options || {};

	        // Get the attribute which we'll be checking, defaults to "id"
	        // but "class" is sometimes used
	        var attribute = options.attribute || "id",

	            // Figure out the way in which the application will occur
	            defaultApply = options.defaultApply || "replace",

	            // Store for elements to be used later
	            parent = {};

	        return this.each(function() {
	            var $this = $(this),
	                name = $this.attr(attribute),
	                hint = $this.data("apply") && !$this.data("apply").indexOf("hint");

	            // Only operate on the element if it has the attribute that we're using
	            if (name) {
	                // The inheritance only works if we've seen an element already
	                // that matches the particular name and we're not looking at hint
	                // templating
	                if (name in parent && !hint) {
	                    // Get the method through which we'll be doing the application
	                    // You can specify an application style directly on the sub-element
	                    parent[name] = $.tmplApplyMethods[$this.data("apply") || defaultApply]

	                        // Call it with the context of the parent and the sub-element itself
	                        .call(parent[name], this);

	                    if (parent[name] == null) {
	                        delete parent[name];
	                    }

	                // Store the parent element for later use if it was inherited from somewhere else
	                } else if ($this.closest(":inherited").length > 0) {
	                    parent[name] = this;
	                }
	            }
	        });
	    }
	});

	$.extend({
	    // These methods should be called with context being the parent
	    // and first argument being the child.
	    tmplApplyMethods: {
	        // Removes both the parent and the child
	        remove: function(elem) {
	            $(this).remove();
	            $(elem).remove();
	        },

	        // Replaces the parent with the child
	        replace: function(elem) {
	            $(this).replaceWith(elem);
	            return elem;
	        },

	        // Replaces the parent with the child's content. Useful when
	        // needed to replace an element without introducing additional
	        // wrappers.
	        splice: function(elem) {
	            $(this).replaceWith($(elem).contents());
	        },

	        // Appends the child element to the parent element
	        append: function(elem) {
	            $(this).append(elem);
	            return this;
	        },

	        // Appends the child element's contents to the parent element.
	        appendContents: function(elem) {
	            $(this).append($(elem).contents());
	            $(elem).remove();
	            return this;
	        },

	        // Prepends the child element to the parent.
	        prepend: function(elem) {
	            $(this).prepend(elem);
	            return this;
	        },

	        // Prepends the child element's contents to the parent element.
	        prependContents: function(elem) {
	            $(this).prepend($(elem).contents());
	            $(elem).remove();
	            return this;
	        },

	        // Insert child before the parent.
	        before: function(elem) {
	            $(this).before(elem);
	            return this;
	        },

	        // Insert child's contents before the parent.
	        beforeContents: function(elem) {
	            $(this).before($(elem).contents());
	            $(elem).remove();
	            return this;
	        },

	        // Insert child after the parent.
	        after: function(elem) {
	            $(this).after(elem);
	            return this;
	        },

	        // Insert child's contents after the parent.
	        afterContents: function(elem) {
	            $(this).after($(elem).contents());
	            $(elem).remove();
	            return this;
	        },

	        // Like appendContents but also merges the data-ensures
	        appendVars: function(elem) {
	            var parentEnsure = $(this).data("ensure") || "1";
	            var childEnsure = $(elem).data("ensure") || "1";
	            $(this).data("ensure",
	                "(" + parentEnsure + ") && (" + childEnsure + ")");

	            return $.tmplApplyMethods.appendContents.call(this, elem);
	        },

	        // Like prependContents but also merges the data-ensures
	        prependVars: function(elem) {
	            var parentEnsure = $(this).data("ensure") || "1";
	            var childEnsure = $(elem).data("ensure") || "1";
	            $(this).data("ensure",
	                "(" + childEnsure + ") && (" + parentEnsure + ")");

	            return $.tmplApplyMethods.prependContents.call(this, elem);
	        }
	    }
	});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable indent, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	/*
	===============================================================================
	Crc32 is a JavaScript function for computing the CRC32 of a string
	...............................................................................

	Version: 1.2 - 2006/11 - http://noteslog.com/category/javascript/

	-------------------------------------------------------------------------------
	Copyright (c) 2006 Andrea Ercolino
	http://www.opensource.org/licenses/mit-license.php
	===============================================================================
	*/

	// CRC32 Lookup Table
	var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 " +
	            "9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD " +
	            "E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D " +
	            "6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC " +
	            "14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 " +
	            "A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C " +
	            "DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC " +
	            "51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F " +
	            "2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB " +
	            "B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F " +
	            "9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB " +
	            "086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E " +
	            "6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA " +
	            "FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE " +
	            "A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A " +
	            "346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 " +
	            "5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 " +
	            "CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 " +
	            "B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 " +
	            "9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 " +
	            "E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 " +
	            "6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 " +
	            "10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 " +
	            "A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B " +
	            "D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF " +
	            "4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 " +
	            "220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 " +
	            "B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A " +
	            "9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE " +
	            "0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 " +
	            "68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 " +
	            "FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 " +
	            "A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D " +
	            "3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 " +
	            "47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 " +
	            "CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 " +
	            "B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

	/* Number */
	var crc32 = function(str, crc) {
	    if (crc == null) {
	        crc = 0;
	    }
	    var n = 0; //a number between 0 and 255
	    var x = 0; //a hex number

	    crc = crc ^ (-1);
	    for (var i = 0, iTop = str.length; i < iTop; i++) {
	        n = (crc ^ str.charCodeAt(i)) & 0xFF;
	        x = "0x" + table.substr(n * 9, 8);
	        crc = (crc >>> 8) ^ x;
	    }
	    return Math.abs(crc ^ (-1));
	};

	return crc32;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, max-len, no-redeclare, no-undef, no-var, one-var, prefer-spread, space-infix-ops, space-unary-ops */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	__webpack_require__(11);

	__webpack_require__(2);
	var kvector = __webpack_require__(4);
	var kpoint = __webpack_require__(3);
	var kline = __webpack_require__(12);
	var WrappedEllipse = __webpack_require__(13);
	var WrappedLine = __webpack_require__(17);
	var WrappedPath = __webpack_require__(18);

	function sum(array) {
	    return _.reduce(array, function(memo, arg) { return memo + arg; }, 0);
	}

	function clockwise(points) {
	    var segments = _.zip(points, points.slice(1).concat(points.slice(0, 1)));
	    var areas = _.map(segments, function(segment) {
	        var p1 = segment[0], p2 = segment[1];
	        return (p2[0] - p1[0]) * (p2[1] + p1[1]);
	    });
	    return sum(areas) > 0;
	}

	/* vector-add multiple [x, y] coords/vectors */
	function addPoints() {
	    var points = _.toArray(arguments);
	    var zipped = _.zip.apply(_, points);
	    return _.map(zipped, sum);
	}

	function reverseVector(vector) {
	    return _.map(vector, function(coord) {
	        return coord * -1;
	    });
	}

	function scaledDistanceFromAngle(angle) {
	    // constants based on the magic numbers from graphie.addTriangle()
	    var a = 3.51470560176242 * 20;
	    var b = 0.5687298702748785 * 20;
	    var c = -0.037587715462826674;
	    return (a - b) * Math.exp(c * angle) + b;
	}

	function scaledPolarRad(radius, radians) {
	    return [
	        radius * Math.cos(radians),
	        radius * Math.sin(radians) * -1 // SVG flips y axis
	    ];
	}

	function scaledPolarDeg(radius, degrees) {
	    var radians = degrees * Math.PI / 180;
	    return scaledPolarRad(radius, radians);
	}


	$.extend(KhanUtil, {
	    // Fill opacity for inequality shading
	    FILL_OPACITY: 0.3,

	    // TODO(alpert): Should this be a global?
	    dragging: false,

	    createSorter: function() {
	        var sorter = {};
	        var list;

	        sorter.hasAttempted = false;

	        sorter.init = function(element) {
	            list = $("[id=" + element + "]").last();
	            var container = list.wrap("<div>").parent();
	            var placeholder = $("<li>");
	            placeholder.addClass("placeholder");
	            container.addClass("sortable ui-helper-clearfix");

	            list.find("li").each(function(tileNum, tile) {
	                $(tile).bind("vmousedown", function(event) {
	                    if (event.type === "vmousedown" && (event.which === 1 || event.which === 0)) {
	                        event.preventDefault();
	                        $(tile).addClass("dragging");
	                        var tileIndex = $(this).index();
	                        placeholder.insertAfter(tile);
	                        placeholder.width($(tile).width());
	                        $(this).css("z-index", 100);
	                        var offset = $(this).offset();
	                        var click = {
	                            left: event.pageX - offset.left - 3,
	                            top: event.pageY - offset.top - 3
	                        };
	                        $(tile).css({ position: "absolute" });
	                        $(tile).offset({
	                            left: offset.left,
	                            top: offset.top
	                        });

	                        $(document).bind("vmousemove.tile vmouseup.tile", function(event) {
	                            event.preventDefault();
	                            if (event.type === "vmousemove") {
	                                sorter.hasAttempted = true;
	                                $(tile).offset({
	                                    left: event.pageX - click.left,
	                                    top: event.pageY - click.top
	                                });
	                                var leftEdge = list.offset().left;
	                                var midWidth = $(tile).offset().left - leftEdge;
	                                var index = 0;
	                                var sumWidth = 0;
	                                list.find("li").each(function() {
	                                    if (this === placeholder[0] || this === tile) {
	                                        return;
	                                    }
	                                    if (midWidth > sumWidth + $(this).outerWidth(true) / 2) {
	                                        index += 1;
	                                    }
	                                    sumWidth += $(this).outerWidth(true);
	                                });
	                                if (index !== tileIndex) {
	                                    tileIndex = index;
	                                    if (index === 0) {
	                                        placeholder.prependTo(list);
	                                        $(tile).prependTo(list);
	                                    } else {
	                                        placeholder.detach();
	                                        $(tile).detach();
	                                        var preceeding = list.find("li")[index - 1];
	                                        placeholder.insertAfter(preceeding);
	                                        $(tile).insertAfter(preceeding);
	                                    }
	                                }
	                            } else if (event.type === "vmouseup") {
	                                $(document).unbind(".tile");
	                                var position = $(tile).offset();
	                                $(position).animate(placeholder.offset(), {
	                                    duration: 150,
	                                    step: function(now, fx) {
	                                        position[fx.prop] = now;
	                                        $(tile).offset(position);
	                                    },
	                                    complete: function() {
	                                        $(tile).css("z-index", 0);
	                                        placeholder.detach();
	                                        $(tile).css({ position: "static" });
	                                        $(tile).removeClass("dragging");
	                                    }
	                                });
	                            }
	                        });
	                    }
	                });
	            });
	        };

	        sorter.getContent = function() {
	            var content = [];
	            list.find("li").each(function(tileNum, tile) {
	                content.push($.trim($(tile).find(".sort-key").text()));
	            });
	            return content;
	        };

	        sorter.setContent = function(content) {
	            var tiles = [];
	            $.each(content, function(n, sortKey) {
	                var tile = list.find("li .sort-key").filter(function() {
	                    // sort-key must match exactly
	                    return $(this).text() === sortKey;
	                }).closest("li").get(0);
	                $(tile).detach();  // remove matched tile so you can have duplicates
	                tiles.push(tile);
	            });
	            list.append(tiles);
	        };


	        return sorter;
	    },

	    // Useful for shapes that are only sometimes drawn. If a shape isn't
	    // needed, it can be replaced with bogusShape which just has stub methods
	    // that successfully do nothing.
	    // The alternative would be 'if..typeof' checks all over the place.
	    bogusShape: {
	        animate: function() {},
	        attr: function() {},
	        remove: function() {}
	    }
	});

	$.extend(KhanUtil.Graphie.prototype, {
	    // Wrap graphInit to create a fixed-size graph automatically scaled to the given range
	    initAutoscaledGraph: function(range, options) {
	        var graph = this;
	        options = $.extend({
	            xpixels: 500,
	            ypixels: 500,
	            xdivisions: 20,
	            ydivisions: 20,
	            labels: true,
	            unityLabels: true,
	            range: (range === undefined ? [[-10, 10], [-10, 10]] : range)
	        }, options);

	        options.scale = [
	            options.xpixels / (options.range[0][1] - options.range[0][0]),
	            options.ypixels / (options.range[1][1] - options.range[1][0])
	        ];
	        options.gridStep = [
	            (options.range[0][1] - options.range[0][0]) / options.xdivisions,
	            (options.range[1][1] - options.range[1][0]) / options.ydivisions
	        ];

	        // Attach the resulting metrics to the graph for later reference
	        graph.xpixels = options.xpixels;
	        graph.ypixels = options.ypixels;
	        graph.range = options.range;
	        graph.scale = options.scale;

	        graph.graphInit(options);
	    },

	    // graphie puts text spans on top of the SVG, which looks good, but gets
	    // in the way of mouse events. This adds another SVG element on top
	    // of everything else where we can add invisible shapes with mouse
	    // handlers wherever we want.
	    addMouseLayer: function(options) {
	        var graph = this;
	        options = _.extend({
	            allowScratchpad: false
	        }, options);

	        var mouselayerZIndex = 2;
	        graph.mouselayer = Raphael(graph.raphael.canvas.parentNode, graph.xpixels, graph.ypixels);
	        $(graph.mouselayer.canvas).css("z-index", mouselayerZIndex);
	        if (options.onClick || options.onMouseDown || options.onMouseMove ||
	                options.onMouseOver || options.onMouseOut) {
	            var canvasClickTarget = graph.mouselayer.rect(
	                    0, 0, graph.xpixels, graph.ypixels).attr({
	                fill: "#000",
	                opacity: 0
	            });
	            var isClickingCanvas = false;

	            $(graph.mouselayer.canvas).on("vmousedown", function(e) {
	                if (e.target === canvasClickTarget[0]) {
	                    if (options.onMouseDown) {
	                        options.onMouseDown(graph.getMouseCoord(e));
	                    }
	                    isClickingCanvas = true;

	                    if (options.onMouseMove) {
	                        $(document).bind("vmousemove.mouseLayer", function(e) {
	                            if (isClickingCanvas) {
	                                e.preventDefault();
	                                options.onMouseMove(graph.getMouseCoord(e));
	                            }
	                        });
	                    }

	                    $(document).bind("vmouseup.mouseLayer", function(e) {
	                        $(document).unbind(".mouseLayer");

	                        // Only register clicks that started on the canvas, and not
	                        // on another mouseLayer target
	                        if (isClickingCanvas && options.onClick) {
	                            options.onClick(graph.getMouseCoord(e));
	                        }
	                        isClickingCanvas = false;
	                    });
	                }
	            });
	            if (options.onMouseOver) {
	                $(graph.mouselayer.canvas).on("vmouseover", function(e) {
	                    options.onMouseOver(graph.getMouseCoord(e));
	                });
	            }
	            if (options.onMouseOut) {
	                $(graph.mouselayer.canvas).on("vmouseout", function(e) {
	                    options.onMouseOut(graph.getMouseCoord(e));
	                });
	            }
	        }
	        if (!options.allowScratchpad) {
	            Khan.scratchpad.disable();
	        }

	        // Add mouse and visible wrapper layers for DOM-node-wrapped movables
	        graph._mouselayerWrapper = document.createElement("div");
	        $(graph._mouselayerWrapper).css({
	            position: "absolute",
	            left: 0,
	            top: 0,
	            zIndex: mouselayerZIndex
	        });

	        graph._visiblelayerWrapper = document.createElement("div");
	        $(graph._visiblelayerWrapper).css({
	            position: "absolute",
	            left: 0,
	            top: 0
	        });

	        var el = graph.raphael.canvas.parentNode;
	        el.appendChild(graph._visiblelayerWrapper);
	        el.appendChild(graph._mouselayerWrapper);

	        // Add functions for adding to wrappers
	        graph.addToMouseLayerWrapper = function(el) {
	            this._mouselayerWrapper.appendChild(el);
	        };
	        graph.addToVisibleLayerWrapper = function(el) {
	            this._visiblelayerWrapper.appendChild(el);
	        };
	    },

	    /**
	     * Get mouse coordinates in pixels
	     */
	    getMousePx: function(event) {
	        var graphie = this;

	        // mouse{X|Y} is in pixels relative to the SVG
	        var mouseX = event.pageX - $(graphie.raphael.
	            canvas.parentNode).offset().left;
	        var mouseY = event.pageY - $(graphie.raphael.
	            canvas.parentNode).offset().top;

	        return [mouseX, mouseY];
	    },

	    /**
	     * Get mouse coordinates in graph coordinates
	     */
	    getMouseCoord: function(event) {
	        return this.unscalePoint(this.getMousePx(event));
	    },

	    // Draw angle arcs
	    drawArcs: function(point1, vertex, point3, numArcs) {
	        var startAngle = KhanUtil.findAngle(point1, vertex);
	        var endAngle = KhanUtil.findAngle(point3, vertex);
	        if (((endAngle - startAngle) % 360 + 360) % 360 > 180) {
	            var temp = startAngle;
	            startAngle = endAngle;
	            endAngle = temp;
	        }

	        var radius = 0.3;
	        // smaller angles need a bigger radius
	        if ((((endAngle - startAngle) % 360 + 360) % 360) < 75) {
	            radius = (-0.6 / 90) * (((endAngle - startAngle) % 360 + 360) % 360) + 0.8;
	        }

	        var arcset = [];
	        for (var arc = 0; arc < numArcs; ++arc) {
	            arcset.push(this.arc(vertex, radius + (0.15 * arc), startAngle, endAngle));
	        }
	        return arcset;
	    },

	    /**
	     * Unlike all other Graphie-related code, the following three functions use
	     * a lot of scaled coordinates (so that labels appear the same size
	     * regardless of current shape/figure scale). These are prefixed with 's'.
	     */
	    labelAngle: function(options) {
	        var graphie = this;

	        _.defaults(options, {
	            point1: [0, 0],
	            vertex: [0, 0],
	            point3: [0, 0],
	            label: null,
	            numArcs: 1,
	            showRightAngleMarker: true,
	            pushOut: 0,
	            clockwise: false,
	            style: {}
	        });

	        // Allow null text to hide the 90 degree angle marker
	        var text = (options.text === undefined) ? "" : options.text;

	        var vertex = options.vertex;
	        var sVertex = graphie.scalePoint(vertex);

	        var p1, p3;
	        if (options.clockwise) {
	            p1 = options.point1;
	            p3 = options.point3;
	        } else {
	            p1 = options.point3;
	            p3 = options.point1;
	        }

	        // TODO(alex): more spacing if >= 100 degrees (due to +1 character)
	        // also take into account angle vs. text orientation, if possible

	        // Calculate angles
	        var startAngle = KhanUtil.findAngle(p1, vertex);
	        var endAngle = KhanUtil.findAngle(p3, vertex);
	        var angle = (endAngle + 360 - startAngle) % 360;
	        var halfAngle = (startAngle + angle / 2) % 360;

	        // Calculate distance from angle
	        var sPadding = 5 * options.pushOut;
	        var sRadius = sPadding + scaledDistanceFromAngle(angle);

	        var temp = [];

	        if (Math.abs(angle - 90) < 1e-9 && options.showRightAngleMarker) {
	            // Draw right angle box
	            var v1 = addPoints(sVertex, scaledPolarDeg(sRadius, startAngle));
	            var v2 = addPoints(sVertex, scaledPolarDeg(sRadius, endAngle));

	            sRadius *= Math.SQRT2;
	            var v3 = addPoints(sVertex, scaledPolarDeg(sRadius, halfAngle));

	            _.each([v1, v2], function(v) {
	                temp.push(graphie.scaledPath([v, v3], options.style));
	            });
	        } else {
	            // Draw arcs
	            _.times(options.numArcs, function(i) {
	                temp.push(graphie.arc(
	                    vertex,
	                    graphie.unscaleVector(sRadius),
	                    startAngle,
	                    endAngle,
	                    options.style
	                ));
	                sRadius += 3;
	            });
	        }

	        if (text) {
	            // Update label text

	            // Substitute actual angle measure for "$deg"
	            var match = text.match(/\$deg(\d)?/);
	            if (match) {
	                var precision = match[1] || 1;
	                text = text.replace(
	                    match[0],
	                    KhanUtil.toFixedApprox(angle, precision) + "^{\\circ}"
	                );
	            }

	            // Calculate label position
	            var sOffset = scaledPolarDeg(sRadius + 15, halfAngle);
	            var sPosition = addPoints(sVertex, sOffset);
	            var position = graphie.unscalePoint(sPosition);

	            // Reuse label if possible
	            if (options.label) {
	                options.label.setPosition(position);
	                options.label.processMath(text, /* force */ true);
	            } else {
	                graphie.label(position, text, "center", options.style);
	            }
	        }

	        return temp;
	    },

	    labelSide: function(options) {
	        var graphie = this;

	        _.defaults(options, {
	            point1: [0, 0],
	            point2: [0, 0],
	            label: null,
	            text: "",
	            numTicks: 0,
	            numArrows: 0,
	            clockwise: false,
	            style: {}
	        });

	        var p1, p2;
	        if (options.clockwise) {
	            p1 = options.point1;
	            p2 = options.point2;
	        } else {
	            p1 = options.point2;
	            p2 = options.point1;
	        }

	        var midpoint = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
	        var sMidpoint = graphie.scalePoint(midpoint);

	        var parallelAngle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
	        var perpendicularAngle = parallelAngle + Math.PI / 2;

	        var temp = [];
	        var sCumulativeOffset = 0;

	        if (options.numTicks) {
	            // Draw ticks
	            var n = options.numTicks;

	            var sSpacing = 5;
	            var sHeight = 5;

	            var style = _.extend({}, options.style, {
	                strokeWidth: 2
	            });

	            _.times(n, function(i) {
	                var sOffset = sSpacing * (i - (n - 1) / 2);

	                var sOffsetVector = scaledPolarRad(sOffset, parallelAngle);
	                var sHeightVector = scaledPolarRad(sHeight, perpendicularAngle);

	                var sPath = [
	                    addPoints(sMidpoint, sOffsetVector, sHeightVector),
	                    addPoints(sMidpoint, sOffsetVector,
	                              reverseVector(sHeightVector))
	                ];

	                temp.push(graphie.scaledPath(sPath, style));
	            });

	            sCumulativeOffset += sSpacing * (n - 1) + 15;
	        }

	        if (options.numArrows) {
	            // Draw arrows
	            var n = options.numArrows;

	            // Arrows always point up, unless horizontal (if so, point right)
	            var start = [p1, p2].sort(function(a, b) {
	                if (a[1] === b[1]) {
	                    return a[0] - b[0];
	                } else {
	                    return a[1] - b[1];
	                }
	            })[0];
	            var sStart = graphie.scalePoint(start);

	            var style = _.extend({}, options.style, {
	                arrows: "->",
	                strokeWidth: 2
	            });

	            var sSpacing = 5;

	            _.times(n, function(i) {
	                var sOffset = sCumulativeOffset + sSpacing * i;
	                var sOffsetVector = scaledPolarRad(sOffset, parallelAngle);

	                if (start !== p1) {
	                    sOffsetVector = reverseVector(sOffsetVector);
	                }

	                var sEnd = addPoints(sMidpoint, sOffsetVector);

	                temp.push(graphie.scaledPath([sStart, sEnd], style));
	            });
	        }

	        var text = options.text;
	        if (text) {
	            // Update label text

	            // Substitute actual side length for "$len"
	            var match = text.match(/\$len(\d)?/);
	            if (match) {
	                var distance = KhanUtil.getDistance(p1, p2);
	                var precision = match[1] || 1;
	                text = text.replace(
	                    match[0],
	                    KhanUtil.toFixedApprox(distance, precision)
	                );
	            }

	            // Calculate label position

	            // distance needs to take into account length of label
	            // and perhaps orientation, to be smart about it
	            var sOffset = 20;
	            var sOffsetVector = scaledPolarRad(sOffset, perpendicularAngle);
	            var sPosition = addPoints(sMidpoint, sOffsetVector);
	            var position = graphie.unscalePoint(sPosition);

	            // Reuse label if possible
	            if (options.label) {
	                options.label.setPosition(position);
	                options.label.processMath(text, /* force */ true);
	            } else {
	                graphie.label(position, text, "center", options.style);
	            }
	        }

	        return temp;
	    },

	    /* Can also be used to label points that aren't vertices */
	    labelVertex: function(options) {
	        var graphie = this;

	        _.defaults(options, {
	            point1: null,
	            vertex: [0, 0],
	            point3: null,
	            label: null,
	            text: "",
	            clockwise: false,
	            style: {}
	        });

	        if (!options.text) {
	            return;
	        }

	        var vertex = options.vertex;
	        var sVertex = graphie.scalePoint(vertex);

	        var p1, p3;
	        if (options.clockwise) {
	            p1 = options.point1;
	            p3 = options.point3;
	        } else {
	            p1 = options.point3;
	            p3 = options.point1;
	        }

	        // Calculate label angle relative to vertex
	        var angle = 135;
	        var halfAngle;
	        if (p1 && p3) {
	            // Point within a polygon
	            var startAngle = KhanUtil.findAngle(p1, vertex);
	            var endAngle = KhanUtil.findAngle(p3, vertex);
	            angle = (endAngle + 360 - startAngle) % 360;
	            halfAngle = (startAngle + angle / 2 + 180) % 360;
	        } else if (p1) {
	            // Point on a line/segment
	            var parallelAngle = KhanUtil.findAngle(vertex, p1);
	            halfAngle = parallelAngle + 90;
	        } else if (p3) {
	            var parallelAngle = KhanUtil.findAngle(p3, vertex);
	            halfAngle = parallelAngle + 90;
	        } else {
	            // Standalone point
	            halfAngle = 135;
	        }

	        // Calculate label position
	        var sRadius = 10 + scaledDistanceFromAngle(360 - angle);
	        var sOffsetVector = scaledPolarDeg(sRadius, halfAngle);
	        var sPosition = addPoints(sVertex, sOffsetVector);
	        var position = graphie.unscalePoint(sPosition);

	        // Reuse label if possible
	        if (options.label) {
	            options.label.setPosition(position);
	            options.label.processMath(options.text, /* force */ true);
	        } else {
	            graphie.label(position, options.text, "center", options.style);
	        }
	    },


	    // Add a point to the graph that can be dragged around.
	    // It allows automatic constraints on its movement as well as automatically
	    // managing line segments that terminate at the point.
	    //
	    // Options can be set to control how the point behaves:
	    //   coord[]:
	    //     The initial position of the point
	    //   snapX, snapY:
	    //     The minimum increment the point can be moved
	    //
	    // The return value is an object that can be used to manipulate the point:
	    //   The coordX and coordY properties tell you the current position
	    //
	    //   By adding an onMove() method to the returned object, you can install an
	    //   event handler that gets called every time the user moves the point.
	    //
	    //   The returned object also provides a moveTo(x,y) method that will move
	    //   the point to a specific coordinate
	    //
	    // Constraints can be set on the on the returned object:
	    //
	    //  - Set point to be immovable:
	    //        movablePoint.constraints.fixed = true
	    //
	    //  - Constrain point to a fixed distance from another point. The resulting
	    //    point will move in a circle:
	    //        movablePoint.fixedDistance = {
	    //           dist: 2,
	    //           point: point1
	    //        }
	    //
	    //  - Constrain point to a line defined by a fixed angle between it and
	    //    two other points:
	    //        movablePoint.fixedAngle = {
	    //           angle: 45,
	    //           vertex: point1,
	    //           ref: point2
	    //        }
	    //
	    //  - Confined the point to traveling in a vertical or horizontal line,
	    //    respectively
	    //        movablePoint.constrainX = true;
	    //        movablePoint.constrainY = true;
	    //
	    //  - Connect a movableLineSegment to a movablePoint. The point is attached
	    //    to a specific end of the line segment by adding the segment either to
	    //    the list of lines that start at the point or the list of lines that
	    //    end at the point (movableLineSegment can do this for you):
	    //        movablePoint.lineStarts.push(movableLineSegment);
	    //          - or -
	    //        movablePoint.lineEnds.push(movableLineSegment);
	    //
	    //  - Connect a movablePolygon to a movablePoint in exacty the same way:
	    //        movablePoint.polygonVertices.push(movablePolygon);
	    //
	    addMovablePoint: function(options) {
	        // The state object that gets returned
	        var movablePoint = $.extend(true, {
	            graph: this,
	            coord: [0, 0],
	            snapX: 0,
	            snapY: 0,
	            pointSize: 4,
	            highlight: false,
	            dragging: false,
	            visible: true,
	            bounded: true,
	            constraints: {
	                fixed: false,
	                constrainX: false,
	                constrainY: false,
	                fixedAngle: {},
	                fixedDistance: {}
	            },
	            lineStarts: [],
	            lineEnds: [],
	            polygonVertices: [],
	            normalStyle: {},
	            highlightStyle: {
	                fill: KhanUtil.INTERACTING,
	                stroke: KhanUtil.INTERACTING
	            },
	            labelStyle: {
	                color: KhanUtil.INTERACTIVE
	            },
	            vertexLabel: "",
	            mouseTarget: null
	        }, options);

	        var normalColor = (movablePoint.constraints.fixed) ?
	                                  KhanUtil.DYNAMIC
	                                : KhanUtil.INTERACTIVE;
	        movablePoint.normalStyle = _.extend({}, {
	            "fill": normalColor,
	            "stroke": normalColor
	        }, options.normalStyle);

	        // deprecated: don't use coordX/coordY; use coord[]
	        if (options.coordX !== undefined) {
	            movablePoint.coord[0] = options.coordX;
	        }
	        if (options.coordY !== undefined) {
	            movablePoint.coord[1] = options.coordY;
	        }

	        var graph = movablePoint.graph;

	        var applySnapAndConstraints = function(coord) {
	            // coord should be the scaled coordinate

	            // move point away from edge of graph unless it's invisible or fixed
	            if (movablePoint.visible &&
	                    movablePoint.bounded &&
	                    !movablePoint.constraints.fixed) {
	                // can't go beyond 10 pixels from the edge
	                coord = graph.constrainToBounds(coord, 10);
	            }

	            var coordX = coord[0];
	            var coordY = coord[1];

	            // snap coordinates to grid
	            if (movablePoint.snapX !== 0) {
	                coordX = Math.round(coordX / movablePoint.snapX) * movablePoint.snapX;
	            }
	            if (movablePoint.snapY !== 0) {
	                coordY = Math.round(coordY / movablePoint.snapY) * movablePoint.snapY;
	            }

	            // snap to points around circle
	            if (movablePoint.constraints.fixedDistance.snapPoints) {
	                var mouse = graph.scalePoint(coord);
	                var mouseX = mouse[0];
	                var mouseY = mouse[1];

	                var snapRadians = 2 * Math.PI / movablePoint.constraints.fixedDistance.snapPoints;
	                var radius = movablePoint.constraints.fixedDistance.dist;

	                // get coordinates relative to the fixedDistance center
	                var centerCoord = movablePoint.constraints.fixedDistance.point;
	                var centerX = (centerCoord[0] - graph.range[0][0]) * graph.scale[0];
	                var centerY = (-centerCoord[1] + graph.range[1][1]) * graph.scale[1];

	                var mouseXrel = mouseX - centerX;
	                var mouseYrel = -mouseY + centerY;
	                var radians = Math.atan(mouseYrel / mouseXrel);
	                var outsideArcTanRange = mouseXrel < 0;

	                // adjust so that angles increase from 0 to 2 pi as you go around the circle
	                if (outsideArcTanRange) {
	                    radians += Math.PI;
	                }

	                // perform the snap
	                radians = Math.round(radians / snapRadians) * snapRadians;

	                // convert from radians back to pixels
	                mouseXrel = radius * Math.cos(radians);
	                mouseYrel = radius * Math.sin(radians);
	                // convert back to coordinates relative to graphie canvas
	                mouseX = mouseXrel + centerX;
	                mouseY = - mouseYrel + centerY;
	                coordX = KhanUtil.roundTo(5, mouseX / graph.scale[0] + graph.range[0][0]);
	                coordY = KhanUtil.roundTo(5, graph.range[1][1] - mouseY / graph.scale[1]);
	            }

	            // apply any constraints on movement
	            var result = movablePoint.applyConstraint([coordX, coordY]);
	            return result;
	        };

	        // Using the passed coordinates, apply any constraints and return the closest coordinates
	        // that match the constraints.
	        movablePoint.applyConstraint = function(coord, extraConstraints, override) {
	            var newCoord = coord.slice();
	            // use the configured constraints for the point plus any passed-in constraints; use only passed-in constraints if override is set
	            var constraints = {};
	            if (override) {
	                $.extend(constraints, {
	                    fixed: false,
	                    constrainX: false,
	                    constrainY: false,
	                    fixedAngle: {},
	                    fixedDistance: {}
	                }, extraConstraints);
	            } else {
	                $.extend(constraints, this.constraints, extraConstraints);
	            }

	            // constrain to vertical movement
	            if (constraints.constrainX) {
	                newCoord = [this.coord[0], coord[1]];

	            // constrain to horizontal movement
	            } else if (constraints.constrainY) {
	                newCoord = [coord[0], this.coord[1]];

	            // both distance and angle are constrained
	            } else if (typeof constraints.fixedAngle.angle === "number" && typeof constraints.fixedDistance.dist === "number") {
	                var vertex = constraints.fixedAngle.vertex.coord || constraints.fixedAngle.vertex;
	                var ref = constraints.fixedAngle.ref.coord || constraints.fixedAngle.ref;
	                var distPoint = constraints.fixedDistance.point.coord || constraints.fixedDistance.point;

	                var constrainedAngle = (constraints.fixedAngle.angle + KhanUtil.findAngle(ref, vertex)) * Math.PI / 180;
	                var length = constraints.fixedDistance.dist;
	                newCoord[0] = length * Math.cos(constrainedAngle) + distPoint[0];
	                newCoord[1] = length * Math.sin(constrainedAngle) + distPoint[1];

	            // angle is constrained
	            } else if (typeof constraints.fixedAngle.angle === "number") {
	                var vertex = constraints.fixedAngle.vertex.coord || constraints.fixedAngle.vertex;
	                var ref = constraints.fixedAngle.ref.coord || constraints.fixedAngle.ref;

	                // constrainedAngle is the angle from vertex to the point with reference to the screen
	                var constrainedAngle = (constraints.fixedAngle.angle + KhanUtil.findAngle(ref, vertex)) * Math.PI / 180;
	                // angle is the angle from vertex to the mouse with reference to the screen
	                var angle = KhanUtil.findAngle(coord, vertex) * Math.PI / 180;
	                var distance = KhanUtil.getDistance(coord, vertex);
	                var length = distance * Math.cos(constrainedAngle - angle);
	                length = length < 1.0 ? 1.0 : length;
	                newCoord[0] = length * Math.cos(constrainedAngle) + vertex[0];
	                newCoord[1] = length * Math.sin(constrainedAngle) + vertex[1];

	            // distance is constrained
	            } else if (typeof constraints.fixedDistance.dist === "number") {
	                var distPoint = constraints.fixedDistance.point.coord || constraints.fixedDistance.point;

	                var angle = KhanUtil.findAngle(coord, distPoint);
	                var length = constraints.fixedDistance.dist;
	                angle = angle * Math.PI / 180;
	                newCoord[0] = length * Math.cos(angle) + distPoint[0];
	                newCoord[1] = length * Math.sin(angle) + distPoint[1];

	            // point is fixed
	            } else if (constraints.fixed) {
	                newCoord = movablePoint.coord;
	            }
	            return newCoord;
	        };

	        movablePoint.coord = applySnapAndConstraints(movablePoint.coord);

	        var highlightScale = 2;

	        if (movablePoint.visible) {
	            graph.style(movablePoint.normalStyle, function() {
	                var radii = [
	                    movablePoint.pointSize / graph.scale[0],
	                    movablePoint.pointSize / graph.scale[1]
	                ];
	                var options = {
	                    maxScale: highlightScale
	                };
	                movablePoint.visibleShape = new WrappedEllipse(graph,
	                    movablePoint.coord, radii, options);
	                movablePoint.visibleShape.attr(_.omit(movablePoint.normalStyle, "scale"));
	                movablePoint.visibleShape.toFront();
	            });
	        }
	        movablePoint.normalStyle.scale = 1;
	        movablePoint.highlightStyle.scale = highlightScale;

	        if (movablePoint.vertexLabel) {
	            movablePoint.labeledVertex = this.label([0, 0], "", "center", movablePoint.labelStyle);
	        }

	        movablePoint.drawLabel = function() {
	            if (movablePoint.vertexLabel) {
	                movablePoint.graph.labelVertex({
	                    vertex: movablePoint.coord,
	                    label: movablePoint.labeledVertex,
	                    text: movablePoint.vertexLabel,
	                    style: movablePoint.labelStyle
	                });
	            }
	        };

	        movablePoint.drawLabel();

	        movablePoint.grab = function() {
	            $(document).bind("vmousemove.point vmouseup.point", function(event) {
	                event.preventDefault();
	                movablePoint.dragging = true;
	                KhanUtil.dragging = true;

	                var coord = graph.getMouseCoord(event);

	                coord = applySnapAndConstraints(coord);
	                var coordX = coord[0];
	                var coordY = coord[1];
	                var mouseX;
	                var mouseY;

	                if (event.type === "vmousemove") {
	                    var doMove = true;
	                    // The caller has the option of adding an onMove() method to the
	                    // movablePoint object we return as a sort of event handler
	                    // By returning false from onMove(), the move can be vetoed,
	                    // providing custom constraints on where the point can be moved.
	                    // By returning array [x, y], the move can be overridden
	                    if (_.isFunction(movablePoint.onMove)) {
	                        var result = movablePoint.onMove(coordX, coordY);
	                        if (result === false) {
	                            doMove = false;
	                        }
	                        if (_.isArray(result)) {
	                            coordX = result[0];
	                            coordY = result[1];
	                        }
	                    }
	                    // coord{X|Y} may have been modified by constraints or onMove handler; adjust mouse{X|Y} to match
	                    mouseX = (coordX - graph.range[0][0]) * graph.scale[0];
	                    mouseY = (-coordY + graph.range[1][1]) * graph.scale[1];

	                    if (doMove) {
	                        var point = graph.unscalePoint([mouseX, mouseY]);
	                        movablePoint.visibleShape.moveTo(point);
	                        movablePoint.mouseTarget.moveTo(point);
	                        movablePoint.coord = [coordX, coordY];
	                        movablePoint.updateLineEnds();
	                        $(movablePoint).trigger("move");
	                    }

	                    movablePoint.drawLabel();

	                } else if (event.type === "vmouseup") {
	                    $(document).unbind(".point");
	                    movablePoint.dragging = false;
	                    KhanUtil.dragging = false;
	                    if (_.isFunction(movablePoint.onMoveEnd)) {
	                        var result = movablePoint.onMoveEnd(coordX, coordY);
	                        if (_.isArray(result)) {
	                            coordX = result[0];
	                            coordY = result[1];
	                            mouseX = (coordX - graph.range[0][0]) * graph.scale[0];
	                            mouseY = (-coordY + graph.range[1][1]) * graph.scale[1];
	                            var point = graph.unscalePoint([mouseX, mouseY]);
	                            movablePoint.visibleShape.moveTo(point);
	                            movablePoint.mouseTarget.moveTo(point);
	                            movablePoint.coord = [coordX, coordY];
	                        }
	                    }
	                    if (!movablePoint.highlight) {
	                        movablePoint.visibleShape.animate(movablePoint.normalStyle, 50);
	                        if (movablePoint.onUnhighlight) {
	                            movablePoint.onUnhighlight();
	                        }
	                    }
	                }
	            });
	        };

	        if (movablePoint.visible && !movablePoint.constraints.fixed) {
	            // the invisible shape in front of the point that gets mouse events
	            if (!movablePoint.mouseTarget) {
	                var radii = graph.unscaleVector(15);
	                var options = {
	                    mouselayer: true
	                };
	                movablePoint.mouseTarget = new WrappedEllipse(graph,
	                    movablePoint.coord, radii, options);
	                movablePoint.mouseTarget.attr({fill: "#000", opacity: 0.0});
	            }

	            var $mouseTarget = $(movablePoint.mouseTarget.getMouseTarget());
	            $mouseTarget.css("cursor", "move");
	            $mouseTarget.bind("vmousedown vmouseover vmouseout", function(event) {
	                if (event.type === "vmouseover") {
	                    movablePoint.highlight = true;
	                    if (!KhanUtil.dragging) {
	                        movablePoint.visibleShape.animate(movablePoint.highlightStyle, 50);
	                        if (movablePoint.onHighlight) {
	                            movablePoint.onHighlight();
	                        }
	                    }

	                } else if (event.type === "vmouseout") {
	                    movablePoint.highlight = false;
	                    if (!movablePoint.dragging && !KhanUtil.dragging) {
	                        movablePoint.visibleShape.animate(movablePoint.normalStyle, 50);
	                        if (movablePoint.onUnhighlight) {
	                            movablePoint.onUnhighlight();
	                        }
	                    }

	                } else if (event.type === "vmousedown" && (event.which === 1 || event.which === 0)) {
	                    event.preventDefault();

	                    movablePoint.grab();
	                }
	            });
	        }

	        // Method to let the caller animate the point to a new position. Useful
	        // as part of a hint to show the user the correct place to put the point.
	        movablePoint.moveTo = function(coordX, coordY, updateLines) {
	            // find distance in pixels to move
	            var distance = KhanUtil.getDistance(this.graph.scalePoint([coordX, coordY]), this.graph.scalePoint(this.coord));

	            // 5ms per pixel seems good
	            var time = distance * 5;

	            // Update the line on each step of the animation, if necessary
	            var cb = updateLines && function(coord) {
	                movablePoint.coord = coord;
	                movablePoint.updateLineEnds();
	            };
	            this.visibleShape.animateTo([coordX, coordY], time, cb);
	            this.mouseTarget.animateTo([coordX, coordY], time, cb);
	            this.coord = [coordX, coordY];
	            if (_.isFunction(this.onMove)) {
	                this.onMove(coordX, coordY);
	            }
	        };


	        // After moving the point, call this to update all line segments terminating at the point
	        movablePoint.updateLineEnds = function() {
	            $(this.lineStarts).each(function() {
	                this.coordA = movablePoint.coord;
	                this.transform();
	            });
	            $(this.lineEnds).each(function() {
	                this.coordZ = movablePoint.coord;
	                this.transform();
	            });
	            $(this.polygonVertices).each(function() {
	                this.transform();
	            });
	        };

	        // Put the point at a new position without any checks, animation, or callbacks
	        movablePoint.setCoord = function(coord) {
	            if (this.visible) {
	                this.visibleShape.moveTo(coord);
	                if (this.mouseTarget != null) {
	                    this.mouseTarget.moveTo(coord);
	                }
	            }
	            this.coord = coord.slice();
	        };

	        // Put the point at the new position, checking that it is within the graph's bounds
	        movablePoint.setCoordConstrained = function(coord) {
	            this.setCoord(applySnapAndConstraints(coord));
	        };

	        // Change z-order to back
	        movablePoint.toBack = function() {
	            if (this.visible) {
	                if (this.mouseTarget != null) {
	                    this.mouseTarget.toBack();
	                }
	                this.visibleShape.toBack();
	            }
	        };

	        // Change z-order to front
	        movablePoint.toFront = function() {
	            if (this.visible) {
	                if (this.mouseTarget != null) {
	                    this.mouseTarget.toFront();
	                }
	                this.visibleShape.toFront();
	            }
	        };

	        movablePoint.remove = function() {
	            if (this.visibleShape) {
	                this.visibleShape.remove();
	            }
	            if (this.mouseTarget) {
	                this.mouseTarget.remove();
	            }
	            if (this.labeledVertex) {
	                this.labeledVertex.remove();
	            }
	        };

	        return movablePoint;
	    },

	    // Plot a function that allows the user to mouse over points on the function.
	    // * currently, the function must be continuous
	    //
	    // The return value is an object:
	    //   By adding an onMove() method to the returned object, you can install an
	    //   event handler that gets called every time the user moves the mouse over
	    //   the function.
	    //
	    //   By adding an onLeave() method to the returned object, you can install an
	    //   event handler that gets called when the mouse moves away from the function.
	    //
	    addInteractiveFn: function(fn, options) {
	        var graph = this;
	        options = $.extend({
	            graph: graph,
	            snap: 0,
	            range: [graph.range[0][0], graph.range[0][1]]
	        }, options);
	        var interactiveFn = {
	            highlight: false
	        };

	        // Plot the function
	        graph.style({
	            stroke: KhanUtil.BLUE
	        }, function() {
	            interactiveFn.visibleShape = graph.plot(fn, options.range, options.swapAxes);
	        });

	        // Draw a circle that will be used to highlight the point on the function the mouse is closest to
	        graph.style({
	            fill: KhanUtil.BLUE,
	            stroke: KhanUtil.BLUE
	        }, function() {
	            interactiveFn.cursorPoint = graph.ellipse([0, fn(0)], [4 / graph.scale[0], 4 / graph.scale[1]]);
	        });
	        // Hide the point for now
	        interactiveFn.cursorPoint.attr("opacity", 0.0);

	        // We want the mouse target to be much wider than the line itself, so you don't
	        // have to hit a 2px target. Ideally, this would be done with an invisible
	        // line following the same path, but with a really big strokeWidth. That
	        // mostly works, but unfortunately there seem to be some bugs in Firefox
	        // where it gets a bit confused about whether the mouse is or isn't over
	        // a really thick curved line :(
	        //
	        // So instead, we have to use a polygon.
	        var mouseAreaWidth = 30;
	        var points = [];
	        var step = (options.range[1] - options.range[0]) / 100;

	        var addScaledPoint = function(x, y) {
	            if (options.swapAxes) {
	                points.push([(y - graph.range[0][0]) * graph.scale[0], (graph.range[1][1] - x) * graph.scale[1]]);
	            } else {
	                points.push([(x - graph.range[0][0]) * graph.scale[0], (graph.range[1][1] - y) * graph.scale[1]]);
	            }
	        };

	        // Draw a curve parallel to, but (mouseAreaWidth/2 pixels) above the function
	        for (var x = options.range[0]; x <= options.range[1]; x += step) {
	            var ddx = (fn(x - 0.001) - fn(x + 0.001)) / 0.002;
	            var x1 = x;
	            var y1 = fn(x) + (mouseAreaWidth / (2 * graph.scale[1]));

	            if (ddx !== 0) {
	                var normalslope = (-1 / (ddx * (graph.scale[1] / graph.scale[0]))) / (graph.scale[1] / graph.scale[0]);
	                if (ddx < 0) {
	                    x1 = x - Math.cos(-Math.atan(normalslope * (graph.scale[1] / graph.scale[0]))) * mouseAreaWidth / (2 * graph.scale[0]);
	                    y1 = normalslope * (x - x1) + fn(x);
	                } else if (ddx > 0) {
	                    x1 = x + Math.cos(-Math.atan(normalslope * (graph.scale[1] / graph.scale[0]))) * mouseAreaWidth / (2 * graph.scale[0]);
	                    y1 = normalslope * (x - x1) + fn(x);
	                }
	            }
	            addScaledPoint(x1, y1);
	        }
	        // Draw a curve parallel to, but (mouseAreaWidth/2 pixels) below the function
	        for (var x = options.range[1]; x >= options.range[0]; x -= step) {
	            var ddx = (fn(x - 0.001) - fn(x + 0.001)) / 0.002;
	            var x1 = x;
	            var y1 = fn(x) - (mouseAreaWidth / (2 * graph.scale[1]));

	            if (ddx !== 0) {
	                var normalslope = (-1 / (ddx * (graph.scale[1] / graph.scale[0]))) / (graph.scale[1] / graph.scale[0]);
	                if (ddx < 0) {
	                    x1 = x + Math.cos(-Math.atan(normalslope * (graph.scale[1] / graph.scale[0]))) * mouseAreaWidth / (2 * graph.scale[0]);
	                    y1 = normalslope * (x - x1) + fn(x);
	                } else if (ddx > 0) {
	                    x1 = x - Math.cos(-Math.atan(normalslope * (graph.scale[1] / graph.scale[0]))) * mouseAreaWidth / (2 * graph.scale[0]);
	                    y1 = normalslope * (x - x1) + fn(x);
	                }
	            }
	            addScaledPoint(x1, y1);
	        }

	        // plot the polygon and make it invisible
	        interactiveFn.mouseTarget = graph.mouselayer.path(KhanUtil.unscaledSvgPath(points));
	        interactiveFn.mouseTarget.attr({ fill: "#000", "opacity": 0.0 });

	        // Add mouse handlers to the polygon
	        $(interactiveFn.mouseTarget[0]).bind("vmouseover vmouseout vmousemove", function(event) {
	            event.preventDefault();
	            var mouseX = event.pageX - $(graph.raphael.canvas.parentNode).offset().left;
	            var mouseY = event.pageY - $(graph.raphael.canvas.parentNode).offset().top;
	            // can't go beyond 10 pixels from the edge
	            mouseX = Math.max(10, Math.min(graph.xpixels - 10, mouseX));
	            mouseY = Math.max(10, Math.min(graph.ypixels - 10, mouseY));
	            // snap to grid
	            if (options.snap) {
	                mouseX = Math.round(mouseX / (graph.scale[0] * options.snap)) * (graph.scale[0] * options.snap);
	            }
	            // coord{X|Y} are the scaled coordinate values
	            var coordX = mouseX / graph.scale[0] + graph.range[0][0];
	            var coordY = graph.range[1][1] - mouseY / graph.scale[1];

	            // Find the closest point on the curve to the mouse (by brute force)
	            var findDistance = function(coordX, coordY) {
	                var closestX = 0;
	                var minDist = Math.sqrt((coordX) * (coordX) + (coordY) * (coordY));
	                for (var x = options.range[0]; x < options.range[1]; x += ((options.range[1] - options.range[0]) / graph.xpixels)) {
	                    if (Math.sqrt((x - coordX) * (x - coordX) + (fn(x) - coordY) * (fn(x) - coordY)) < minDist) {
	                        closestX = x;
	                        minDist = Math.sqrt((x - coordX) * (x - coordX) + (fn(x) - coordY) * (fn(x) - coordY));
	                    }
	                }
	                return closestX;
	            };

	            if (options.swapAxes) {
	                var closestX = findDistance(coordY, coordX);
	                coordX = fn(closestX);
	                coordY = closestX;
	            } else {
	                var closestX = findDistance(coordX, coordY);
	                coordX = closestX;
	                coordY = fn(closestX);
	            }

	            interactiveFn.cursorPoint.attr("cx", (graph.range[0][1] + coordX) * graph.scale[0]);
	            interactiveFn.cursorPoint.attr("cy", (graph.range[1][1] - coordY) * graph.scale[1]);

	            // If the caller wants to be notified when the user points to the function
	            if (_.isFunction(interactiveFn.onMove)) {
	                interactiveFn.onMove(coordX, coordY);
	            }

	            if (event.type === "vmouseover") {
	                interactiveFn.cursorPoint.animate({ opacity: 1.0 }, 50);
	                interactiveFn.highlight = true;

	            } else if (event.type === "vmouseout") {
	                interactiveFn.highlight = false;
	                interactiveFn.cursorPoint.animate({ opacity: 0.0 }, 50);
	                // If the caller wants to be notified when the user stops pointing to the function
	                if (_.isFunction(interactiveFn.onLeave)) {
	                    interactiveFn.onLeave(coordX, coordY);
	                }
	            }
	        });

	        interactiveFn.mouseTarget.toBack();
	        return interactiveFn;
	    },


	    // MovableLineSegment is a line segment that can be dragged around the
	    // screen. By attaching a smartPoint to each (or one) end, the ends can be
	    // manipulated individually.
	    //
	    // To use with smartPoints, add the smartPoints first, then:
	    //   addMovableLineSegment({ pointA: smartPoint1, pointZ: smartPoint2 });
	    // Or just one end:
	    //   addMovableLineSegment({ pointA: smartPoint, coordZ: [0, 0] });
	    //
	    // Include "fixed: true" in the options if you don't want the entire line
	    // to be draggable (you can still use points to make the endpoints
	    // draggable)
	    //
	    // The returned object includes the following properties/methods:
	    //
	    //   - lineSegment.coordA / lineSegment.coordZ
	    //         The coordinates of each end of the line segment
	    //
	    //   - lineSegment.transform(syncToPoints)
	    //         Repositions the line segment. Call after changing coordA and/or
	    //         coordZ, or pass syncToPoints = true to use the current position
	    //         of the corresponding smartPoints, if the segment was defined using
	    //         smartPoints
	    //
	    addMovableLineSegment: function(options) {
	        var lineSegment = $.extend({
	            graph: this,
	            coordA: [0, 0],
	            coordZ: [1, 1],
	            snapX: 0,
	            snapY: 0,
	            fixed: false,
	            ticks: 0,
	            normalStyle: {},
	            highlightStyle: {
	                "stroke": KhanUtil.INTERACTING,
	                "stroke-width": 6
	            },
	            labelStyle: {
	                "stroke": KhanUtil.INTERACTIVE,
	                "color": KhanUtil.INTERACTIVE
	            },
	            highlight: false,
	            dragging: false,
	            tick: [],
	            extendLine: false,
	            extendRay: false,
	            constraints: {
	                fixed: false,
	                constrainX: false,
	                constrainY: false
	            },
	            sideLabel: "",
	            vertexLabels: [],
	            numArrows: 0,
	            numTicks: 0,
	            movePointsWithLine: false
	        }, options);

	        var normalColor = (lineSegment.fixed) ? KhanUtil.DYNAMIC
	                                              : KhanUtil.INTERACTIVE;
	        lineSegment.normalStyle = _.extend({}, {
	            "stroke-width": 2,
	            "stroke": normalColor
	        }, options.normalStyle);
	        // arrowStyle should be kept in sync with styling of the line
	        lineSegment.arrowStyle = _.extend({}, lineSegment.normalStyle, {
	            "color": lineSegment.normalStyle.stroke
	        });

	        // If the line segment is defined by movablePoints, coordA/coordZ are
	        // owned by the points, otherwise they're owned by us
	        if (options.pointA !== undefined) {
	            lineSegment.coordA = options.pointA.coord;
	            lineSegment.pointA.lineStarts.push(lineSegment);
	        } else if (options.coordA !== undefined) {
	            lineSegment.coordA = options.coordA.slice();
	        }

	        if (options.pointZ !== undefined) {
	            lineSegment.coordZ = options.pointZ.coord;
	            lineSegment.pointZ.lineEnds.push(lineSegment);
	        } else if (options.coordA !== undefined) {
	            lineSegment.coordA = lineSegment.coordA.slice();
	        }

	        var graph = lineSegment.graph;

	        graph.style(lineSegment.normalStyle);
	        for (var i = 0; i < lineSegment.ticks; ++i) {
	            lineSegment.tick[i] = KhanUtil.bogusShape;
	        }
	        var path = KhanUtil.unscaledSvgPath([[0, 0], [1, 0]]);
	        for (var i = 0; i < lineSegment.ticks; ++i) {
	            var tickoffset = 0.5 - ((lineSegment.ticks - 1) + (i * 2)) / graph.scale[0];
	            path += KhanUtil.unscaledSvgPath([[tickoffset, -7], [tickoffset, 7]]);
	        }

	        // Create and style visible shape
	        var options = {
	            thickness: Math.max(
	                lineSegment.normalStyle["stroke-width"],
	                lineSegment.highlightStyle["stroke-width"]
	            )
	        };
	        lineSegment.visibleLine = new WrappedLine(graph, [0, 0], [1, 0],
	            options);
	        lineSegment.visibleLine.attr(lineSegment.normalStyle);

	        // Add mouse target
	        if (!lineSegment.fixed) {
	            var options = {
	                thickness: 30,
	                mouselayer: true
	            };
	            lineSegment.mouseTarget = new WrappedLine(graph, [0, 0], [1, 0],
	                options);
	            lineSegment.mouseTarget.attr({fill: "#000", "opacity": 0.0});
	        }

	        // Reposition the line segment. Call after changing coordA and/or
	        // coordZ, or pass syncToPoints = true to use the current position of
	        // the corresponding movablePoints, if the segment was defined using
	        // movablePoints
	        lineSegment.transform = function(syncToPoints) {
	            if (syncToPoints) {
	                if (typeof this.pointA === "object") {
	                    this.coordA = this.pointA.coord;
	                }
	                if (typeof this.pointZ === "object") {
	                    this.coordZ = this.pointZ.coord;
	                }
	            }

	            // Given a line, find the angle between the endpoints
	            var getScaledAngle = function(line) {
	                var scaledA = line.graph.scalePoint(line.coordA);
	                var scaledZ = line.graph.scalePoint(line.coordZ);
	                return kvector.polarDegFromCart(
	                    kvector.subtract(
	                        scaledZ,
	                        scaledA
	                    )
	                )[1];
	            };

	            // Given `coord` and `angle`, find the point where a line extended
	            // from `coord` in the direction of `angle` would be clipped by the
	            // edge of the graphie canvas.
	            var getClipPoint = function(graph, coord, angle) {
	                var graph = lineSegment.graph;
	                // Actually put the arrowheads 4px from the edge so they have
	                // a bit of room
	                var xExtent = graph.range[0][1] - graph.range[0][0];
	                var yExtent = graph.range[1][1] - graph.range[1][0];

	                // shoot a point off into the distance ...
	                var distance = xExtent + yExtent;
	                // we need to scale the point according to the scale of the axes
	                var angleVec = graph.unscaleVector(
	                    kvector.cartFromPolarDeg([1, angle])
	                );
	                var distVec = kvector.scale(
	                    kvector.normalize(angleVec),
	                    distance
	                );
	                var farCoord = kvector.add(coord, distVec);
	                var scaledAngle = kvector.polarDegFromCart(angleVec)[1];
	                // ... and then bring it back
	                var clipPoint = graph.constrainToBoundsOnAngle(farCoord, 4,
	                                              scaledAngle * Math.PI / 180);
	                return clipPoint;
	            };

	            var angle = getScaledAngle(this);
	            var start = this.coordA;
	            var end = this.coordZ;

	            // Extend start, end if necessary (i.e., if not a line segment)
	            if (this.extendLine) {
	                start = getClipPoint(graph, start, 360 - angle);
	                end = getClipPoint(graph, end, (540 - angle) % 360);
	            } else if (this.extendRay) {
	                end = getClipPoint(graph, start, 360 - angle);
	            }

	            var elements = [this.visibleLine];
	            if (!this.fixed) {
	                elements.push(this.mouseTarget);
	            }
	            _.each(elements, function(element) {
	                element.moveTo(start, end);
	            });

	            // Draw an arrowhead at the end of the line
	            var createArrow = function(graph, style) {
	                // Points that define the arrowhead
	                var center = [0.75, 0];
	                var points = [
	                    [-3, 4],
	                    [-2.75, 2.5],
	                    [0, 0.25],
	                    center,
	                    [0, -0.25],
	                    [-2.75, -2.5],
	                    [-3, -4]
	                ];

	                // Scale points by 1.4 around (0.75, 0)
	                var scale = 1.4;
	                points = _.map(points, function(point) {
	                    var pv = kvector.subtract(point, center);
	                    var pvScaled = kvector.scale(pv, scale);
	                    return kvector.add(center, pvScaled);
	                });

	                // We can't just pass in a path to `graph.fixedPath` as we need to modify
	                // the points in some way, so instead we provide a function for creating
	                // the path once the points have been transformed
	                var createCubicPath = function(points) {
	                    var path = "M" + points[0][0] + " " + points[0][1];
	                    for (var i = 1; i < points.length; i += 3) {
	                        path += "C" + points[i][0] + " " + points[i][1] + " " +
	                                      points[i + 1][0] + " " + points[i + 1][1] + " " +
	                                      points[i + 2][0] + " " + points[i + 2][1];
	                    }
	                    return path;
	                };

	                // Create arrowhead
	                var unscaledPoints = _.map(points, graph.unscalePoint);
	                var options = {
	                    center: graph.unscalePoint(center),
	                    createPath: createCubicPath
	                };
	                var arrowHead = new WrappedPath(graph, unscaledPoints, options);
	                arrowHead.attr(_.extend({
	                    "stroke-linejoin": "round",
	                    "stroke-linecap": "round",
	                    "stroke-dasharray": ""
	                }, style));

	                // Add custom function for transforming arrowheads that accounts for
	                // center, scaling, etc.
	                arrowHead.toCoordAtAngle = function(coord, angle) {
	                    var clipPoint = graph.scalePoint(getClipPoint(graph, coord, angle));
	                    var do3dTransform = KhanUtil.getCanUse3dTransform();
	                    arrowHead.transform(
	                        "translateX(" + (clipPoint[0] + scale * center[0]) + "px) " +
	                        "translateY(" + (clipPoint[1] + scale * center[1]) + "px) " +
	                        (do3dTransform ? "translateZ(0) " : "") +
	                        "rotate(" + (360 - KhanUtil.bound(angle)) + "deg)");
	                };

	                return arrowHead;
	            };

	            // Add arrows
	            if (this._arrows == null) {
	                this._arrows = [];

	                if (this.extendLine) {
	                    this._arrows.push(createArrow(
	                        graph, this.normalStyle));
	                    this._arrows.push(createArrow(
	                        graph, this.normalStyle));
	                } else if (this.extendRay) {
	                    this._arrows.push(createArrow(
	                        graph, this.normalStyle));
	                }
	            }

	            // Move and rotate arrows to appropriate coordinate and angle
	            var coordForArrow = [this.coordA, this.coordZ];
	            var angleForArrow = [360 - angle, (540 - angle) % 360];
	            _.each(this._arrows, function(arrow, i) {
	                arrow.toCoordAtAngle(coordForArrow[i], angleForArrow[i]);
	            });

	            // Temporary objects: array of SVG nodes that get recreated on drag
	            _.invoke(this.temp, "remove");
	            this.temp = [];

	            // Labels are always above line, unless vertical (if so, on right)
	            // probably want to add an option to flip this at will!
	            var isClockwise = (this.coordA[0] < this.coordZ[0]) ||
	                (this.coordA[0] === this.coordZ[0] &&
	                this.coordA[1] > this.coordZ[1]);

	            // Update side label
	            if (this.sideLabel) {
	                this.temp.push(this.graph.labelSide({
	                    point1: this.coordA,
	                    point2: this.coordZ,
	                    label: this.labeledSide,
	                    text: this.sideLabel,
	                    numArrows: this.numArrows,
	                    numTicks: this.numTicks,
	                    clockwise: isClockwise,
	                    style: this.labelStyle
	                }));
	            }

	            // Update vertex labels
	            if (this.vertexLabels.length) {
	                this.graph.labelVertex({
	                    vertex: this.coordA,
	                    point3: this.coordZ,
	                    label: this.labeledVertices[0],
	                    text: this.vertexLabels[0],
	                    clockwise: isClockwise,
	                    style: this.labelStyle
	                });

	                this.graph.labelVertex({
	                    point1: this.coordA,
	                    vertex: this.coordZ,
	                    label: this.labeledVertices[1],
	                    text: this.vertexLabels[1],
	                    clockwise: isClockwise,
	                    style: this.labelStyle
	                });
	            }

	            this.temp = _.flatten(this.temp);
	        };

	        // Change z-order to back;
	        lineSegment.toBack = function() {
	            if (!lineSegment.fixed) {
	                lineSegment.mouseTarget.toBack();
	            }
	            lineSegment.visibleLine.toBack();
	        };

	        // Change z-order to front
	        lineSegment.toFront = function() {
	            if (!lineSegment.fixed) {
	                lineSegment.mouseTarget.toFront();
	            }
	            lineSegment.visibleLine.toFront();
	        };

	        lineSegment.remove = function() {
	            if (!lineSegment.fixed) {
	                lineSegment.mouseTarget.remove();
	            }
	            lineSegment.visibleLine.remove();
	            if (lineSegment.labeledSide) {
	                lineSegment.labeledSide.remove();
	            }
	            if (lineSegment.labeledVertices) {
	                _.invoke(lineSegment.labeledVertices, "remove");
	            }
	            if (lineSegment._arrows) {
	                _.invoke(lineSegment._arrows, "remove");
	            }
	            if (lineSegment.temp.length) {
	                _.invoke(lineSegment.temp, "remove");
	            }
	        };

	        lineSegment.hide = function() {
	            lineSegment.visibleLine.hide();
	            if (lineSegment.temp.length) {
	                _.invoke(lineSegment.temp, "hide");
	            }
	            if (lineSegment._arrows) {
	                _.invoke(lineSegment._arrows, "hide");
	            }
	        };

	        lineSegment.show = function() {
	            lineSegment.visibleLine.show();
	            if (lineSegment.temp.length) {
	                _.invoke(lineSegment.temp, "show");
	            }
	            if (lineSegment._arrows) {
	                _.invoke(lineSegment._arrows, "show");
	            }
	        };

	        if (lineSegment.sideLabel) {
	            lineSegment.labeledSide = this.label([0, 0], "", "center", lineSegment.labelStyle);
	        }

	        if (lineSegment.vertexLabels.length) {
	            lineSegment.labeledVertices = _.map(lineSegment.vertexLabels, function(label) {
	                return this.label([0, 0], "", "center", lineSegment.labelStyle);
	            }, this);
	        }

	        if (!lineSegment.fixed && !lineSegment.constraints.fixed) {
	            var $mouseTarget = $(lineSegment.mouseTarget.getMouseTarget());
	            $mouseTarget.css("cursor", "move");
	            $mouseTarget.bind("vmousedown vmouseover vmouseout", function(event) {
	                if (event.type === "vmouseover") {
	                    if (!KhanUtil.dragging) {
	                        lineSegment.highlight = true;
	                        lineSegment.visibleLine.animate(lineSegment.highlightStyle, 50);
	                        lineSegment.arrowStyle = _.extend({}, lineSegment.arrowStyle, {
	                            "color": lineSegment.highlightStyle.stroke,
	                            "stroke": lineSegment.highlightStyle.stroke
	                        });
	                        lineSegment.transform();
	                    }

	                } else if (event.type === "vmouseout") {
	                    lineSegment.highlight = false;
	                    if (!lineSegment.dragging) {
	                        lineSegment.visibleLine.animate(lineSegment.normalStyle, 50);
	                        lineSegment.arrowStyle = _.extend({}, lineSegment.arrowStyle, {
	                            "color": lineSegment.normalStyle.stroke,
	                            "stroke": lineSegment.normalStyle.stroke
	                        });
	                        lineSegment.transform();
	                    }

	                } else if (event.type === "vmousedown" && (event.which === 1 || event.which === 0)) {
	                    event.preventDefault();
	                    // coord{X|Y} are the scaled coordinate values of the mouse position
	                    var coordX = (event.pageX - $(graph.raphael.canvas.parentNode).offset().left) / graph.scale[0] + graph.range[0][0];
	                    var coordY = graph.range[1][1] - (event.pageY - $(graph.raphael.canvas.parentNode).offset().top) / graph.scale[1];
	                    if (lineSegment.snapX > 0) {
	                        coordX = Math.round(coordX / lineSegment.snapX) * lineSegment.snapX;
	                    }
	                    if (lineSegment.snapY > 0) {
	                        coordY = Math.round(coordY / lineSegment.snapY) * lineSegment.snapY;
	                    }
	                    // Offsets between the mouse and each end of the line segment
	                    var mouseOffsetA = [lineSegment.coordA[0] - coordX, lineSegment.coordA[1] - coordY];
	                    var mouseOffsetZ = [lineSegment.coordZ[0] - coordX, lineSegment.coordZ[1] - coordY];

	                    // Figure out how many pixels of the bounding box of the line segment lie to each direction of the mouse
	                    var offsetLeft = -Math.min(graph.scaleVector(mouseOffsetA)[0], graph.scaleVector(mouseOffsetZ)[0]);
	                    var offsetRight = Math.max(graph.scaleVector(mouseOffsetA)[0], graph.scaleVector(mouseOffsetZ)[0]);
	                    var offsetTop = Math.max(graph.scaleVector(mouseOffsetA)[1], graph.scaleVector(mouseOffsetZ)[1]);
	                    var offsetBottom = -Math.min(graph.scaleVector(mouseOffsetA)[1], graph.scaleVector(mouseOffsetZ)[1]);

	                    $(document).bind("vmousemove.lineSegment vmouseup.lineSegment", function(event) {
	                        event.preventDefault();
	                        lineSegment.dragging = true;
	                        KhanUtil.dragging = true;

	                        // mouse{X|Y} are in pixels relative to the SVG
	                        var mouseX = event.pageX - $(graph.raphael.canvas.parentNode).offset().left;
	                        var mouseY = event.pageY - $(graph.raphael.canvas.parentNode).offset().top;
	                        // no part of the line segment can go beyond 10 pixels from the edge
	                        mouseX = Math.max(offsetLeft + 10, Math.min(graph.xpixels - 10 - offsetRight, mouseX));
	                        mouseY = Math.max(offsetTop + 10, Math.min(graph.ypixels - 10 - offsetBottom, mouseY));

	                        // coord{X|Y} are the scaled coordinate values
	                        var coordX = mouseX / graph.scale[0] + graph.range[0][0];
	                        var coordY = graph.range[1][1] - mouseY / graph.scale[1];
	                        if (lineSegment.snapX > 0) {
	                            coordX = Math.round(coordX / lineSegment.snapX) * lineSegment.snapX;
	                        }
	                        if (lineSegment.snapY > 0) {
	                            coordY = Math.round(coordY / lineSegment.snapY) * lineSegment.snapY;
	                        }

	                        if (event.type === "vmousemove") {
	                            if (lineSegment.constraints.constrainX) {
	                                coordX = lineSegment.coordA[0] - mouseOffsetA[0];
	                            }
	                            if (lineSegment.constraints.constrainY) {
	                                coordY = lineSegment.coordA[1] - mouseOffsetA[1];
	                            }
	                            var dX = coordX + mouseOffsetA[0] - lineSegment.coordA[0];
	                            var dY = coordY + mouseOffsetA[1] - lineSegment.coordA[1];
	                            lineSegment.coordA = [coordX + mouseOffsetA[0], coordY + mouseOffsetA[1]];
	                            lineSegment.coordZ = [coordX + mouseOffsetZ[0], coordY + mouseOffsetZ[1]];
	                            lineSegment.transform();

	                            if (lineSegment.movePointsWithLine) {
	                                // If the points are movablePoints, adjust
	                                // their coordinates when the line itself is
	                                // dragged
	                                if (typeof lineSegment.pointA === "object") {
	                                    lineSegment.pointA.setCoord([
	                                            lineSegment.pointA.coord[0] + dX,
	                                            lineSegment.pointA.coord[1] + dY
	                                    ]);
	                                }
	                                if (typeof lineSegment.pointZ === "object") {
	                                    lineSegment.pointZ.setCoord([
	                                            lineSegment.pointZ.coord[0] + dX,
	                                            lineSegment.pointZ.coord[1] + dY
	                                    ]);
	                                }
	                            }

	                            if (_.isFunction(lineSegment.onMove)) {
	                                lineSegment.onMove(dX, dY);
	                            }

	                        } else if (event.type === "vmouseup") {
	                            $(document).unbind(".lineSegment");
	                            lineSegment.dragging = false;
	                            KhanUtil.dragging = false;
	                            if (!lineSegment.highlight) {
	                                lineSegment.visibleLine.animate(lineSegment.normalStyle, 50);
	                                lineSegment.arrowStyle = _.extend({}, lineSegment.arrowStyle, {
	                                    "color": lineSegment.normalStyle.stroke,
	                                    "stroke": lineSegment.normalStyle.stroke
	                                });
	                                lineSegment.transform();
	                            }
	                            if (_.isFunction(lineSegment.onMoveEnd)) {
	                                lineSegment.onMoveEnd();
	                            }

	                        }

	                        $(lineSegment).trigger("move");
	                    });
	                }
	            });
	        }


	        if (lineSegment.pointA !== undefined) {
	            lineSegment.pointA.toFront();
	        }
	        if (lineSegment.pointZ !== undefined) {
	            lineSegment.pointZ.toFront();
	        }
	        lineSegment.transform();
	        return lineSegment;
	    },

	    // MovablePolygon is a polygon that can be dragged around the screen.
	    // By attaching a smartPoint to each vertex, the points can be
	    // manipulated individually.
	    //
	    // To use with smartPoints, add the smartPoints first, then:
	    //   addMovablePolygon({points: [...]});
	    //
	    // Include "fixed: true" in the options if you don't want the entire
	    // polygon to be draggable (you can still use points to make the
	    // vertices draggable)
	    //
	    // The returned object includes the following properties/methods:
	    //
	    //   - polygon.points
	    //         The polygon's dynamic smartPoints and static coordinates, mixed.
	    //
	    //   - polygon.coords
	    //         The polygon's current coordinates (generated, don't edit).
	    //
	    //   - polygon.transform()
	    //         Repositions the polygon. Call after changing any points.
	    //
	    addMovablePolygon: function(options) {
	        var graphie = this;

	        var polygon = $.extend({
	            snapX: 0,
	            snapY: 0,
	            fixed: false,
	            constrainToGraph: true,
	            normalStyle: {},
	            highlightStyle: {
	                "stroke": KhanUtil.INTERACTING,
	                "stroke-width": 2,
	                "fill": KhanUtil.INTERACTING,
	                "fill-opacity": 0.05
	            },
	            pointHighlightStyle: {
	                "fill": KhanUtil.INTERACTING,
	                "stroke": KhanUtil.INTERACTING
	            },
	            labelStyle: {
	                "stroke": KhanUtil.DYNAMIC,
	                "stroke-width": 1,
	                "color": KhanUtil.DYNAMIC
	            },
	            angleLabels: [],
	            showRightAngleMarkers: [],
	            sideLabels: [],
	            vertexLabels: [],
	            numArcs: [],
	            numArrows: [],
	            numTicks: [],
	            updateOnPointMove: true,
	            closed: true
	        }, _.omit(options, "points"));

	        var normalColor = (polygon.fixed) ? KhanUtil.DYNAMIC
	                                          : KhanUtil.INTERACTIVE;
	        polygon.normalStyle = _.extend({
	            "stroke-width": 2,
	            "fill-opacity": 0,
	            "fill": normalColor,
	            "stroke": normalColor
	        }, options.normalStyle);

	        // don't deep copy the points array with $.extend;
	        // we may want to append to it later for click-to-add-points
	        polygon.points = options.points;

	        var isPoint = function(coordOrPoint) {
	            return !_.isArray(coordOrPoint);
	        };

	        polygon.update = function() {
	            var n = polygon.points.length;

	            // Update coords
	            polygon.coords = _.map(polygon.points, function(coordOrPoint, i) {
	                if (isPoint(coordOrPoint)) {
	                    return coordOrPoint.coord;
	                } else {
	                    return coordOrPoint;
	                }
	            });

	            // Calculate bounding box
	            polygon.left = _.min(_.pluck(polygon.coords, 0));
	            polygon.right = _.max(_.pluck(polygon.coords, 0));
	            polygon.top = _.max(_.pluck(polygon.coords, 1));
	            polygon.bottom = _.min(_.pluck(polygon.coords, 1));

	            // Calculate scaled coords
	            var scaledCoords = _.map(polygon.coords, function(coord) {
	                return graphie.scalePoint(coord);
	            });

	            // Create path
	            if (polygon.closed) {
	                scaledCoords.push(true);
	            } else {
	                // For open polygons, concatenate a reverse of the path,
	                // to remove the inside area of the path, which would
	                // otherwise be clickable (even if the closing line segment
	                // wasn't drawn
	                scaledCoords = scaledCoords.concat(
	                    _.clone(scaledCoords).reverse()
	                );
	            }
	            polygon.path = KhanUtil.unscaledSvgPath(scaledCoords);

	            // Temporary objects
	            _.invoke(polygon.temp, "remove");
	            polygon.temp = [];

	            // Check which direction coordinates wind
	            var isClockwise = clockwise(polygon.coords);

	            // Update angle labels
	            if (polygon.angleLabels.length ||
	                    polygon.showRightAngleMarkers.length) {
	                _.each(polygon.labeledAngles, function(label, i) {
	                    polygon.temp.push(graphie.labelAngle({
	                        point1: polygon.coords[(i - 1 + n) % n],
	                        vertex: polygon.coords[i],
	                        point3: polygon.coords[(i + 1) % n],
	                        label: label,
	                        text: polygon.angleLabels[i],
	                        showRightAngleMarker: polygon.showRightAngleMarkers[i],
	                        numArcs: polygon.numArcs[i],
	                        clockwise: isClockwise,
	                        style: polygon.labelStyle
	                    }));
	                });
	            }

	            // Update side labels
	            if (polygon.sideLabels.length) {
	                _.each(polygon.labeledSides, function(label, i) {
	                    polygon.temp.push(graphie.labelSide({
	                        point1: polygon.coords[i],
	                        point2: polygon.coords[(i + 1) % n],
	                        label: label,
	                        text: polygon.sideLabels[i],
	                        numArrows: polygon.numArrows[i],
	                        numTicks: polygon.numTicks[i],
	                        clockwise: isClockwise,
	                        style: polygon.labelStyle
	                    }));
	                });
	            }

	            // Update vertex labels
	            if (polygon.vertexLabels.length) {
	                _.each(polygon.labeledVertices, function(label, i) {
	                    graphie.labelVertex({
	                        point1: polygon.coords[(i - 1 + n) % n],
	                        vertex: polygon.coords[i],
	                        point3: polygon.coords[(i + 1) % n],
	                        label: label,
	                        text: polygon.vertexLabels[i],
	                        clockwise: isClockwise,
	                        style: polygon.labelStyle
	                    });
	                });
	            }

	            polygon.temp = _.flatten(polygon.temp);
	        };

	        polygon.transform = function() {
	            polygon.update();

	            polygon.visibleShape.attr({path: polygon.path});

	            if (!polygon.fixed) {
	                polygon.mouseTarget.attr({path: polygon.path});
	            }
	        };

	        polygon.remove = function() {
	            polygon.visibleShape.remove();

	            if (!polygon.fixed) {
	                polygon.mouseTarget.remove();
	            }

	            if (polygon.labeledAngles) {
	                _.invoke(polygon.labeledAngles, "remove");
	            }

	            if (polygon.labeledSides) {
	                _.invoke(polygon.labeledSides, "remove");
	            }

	            if (polygon.labeledVertices) {
	                _.invoke(polygon.labeledVertices, "remove");
	            }

	            if (polygon.temp.length) {
	                _.invoke(polygon.temp, "remove");
	            }
	        };

	        polygon.toBack = function() {
	            if (!polygon.fixed) {
	                polygon.mouseTarget.toBack();
	            }

	            polygon.visibleShape.toBack();
	        };

	        polygon.toFront = function() {
	            if (!polygon.fixed) {
	                polygon.mouseTarget.toFront();
	            }

	            polygon.visibleShape.toFront();
	        };

	        // Setup

	        if (polygon.updateOnPointMove) {
	            _.each(_.filter(polygon.points, isPoint), function(coordOrPoint) {
	                coordOrPoint.polygonVertices.push(polygon);
	            });
	        }

	        polygon.coords = new Array(polygon.points.length);

	        if (polygon.angleLabels.length) {
	            polygon.labeledAngles = _.times(Math.max(
	                        polygon.angleLabels.length,
	                        polygon.showRightAngleMarkers.length
	                    ), function() {
	                return this.label([0, 0], "", "center", polygon.labelStyle);
	            }, this);
	        }

	        if (polygon.sideLabels.length) {
	            polygon.labeledSides = _.map(polygon.sideLabels, function(label) {
	                return this.label([0, 0], "", "center", polygon.labelStyle);
	            }, this);
	        }

	        if (polygon.vertexLabels.length) {
	            polygon.labeledVertices = _.map(polygon.vertexLabels, function(label) {
	                return this.label([0, 0], "", "center", polygon.labelStyle);
	            }, this);
	        }

	        polygon.update();

	        polygon.visibleShape = graphie.raphael.path(polygon.path);
	        polygon.visibleShape.attr(polygon.normalStyle);

	        if (!polygon.fixed) {
	            polygon.mouseTarget = graphie.mouselayer.path(polygon.path);
	            polygon.mouseTarget.attr({fill: "#000", opacity: 0, cursor: "move"});

	            $(polygon.mouseTarget[0]).bind("vmousedown vmouseover vmouseout", function(event) {
	                if (event.type === "vmouseover") {
	                    if (!KhanUtil.dragging || polygon.dragging) {
	                        polygon.highlight = true;
	                        polygon.visibleShape.animate(polygon.highlightStyle, 50);
	                        _.each(_.filter(polygon.points, isPoint), function(point) {
	                            point.visibleShape.animate(polygon.pointHighlightStyle, 50);
	                        });
	                    }

	                } else if (event.type === "vmouseout") {
	                    polygon.highlight = false;
	                    if (!polygon.dragging) {
	                        polygon.visibleShape.animate(polygon.normalStyle, 50);
	                        var points = _.filter(polygon.points, isPoint);
	                        if (!_.any(_.pluck(points, "dragging"))) {
	                            _.each(points, function(point) {
	                                point.visibleShape.animate(point.normalStyle, 50);
	                            });
	                        }
	                    }

	                } else if (event.type === "vmousedown" && (event.which === 1 || event.which === 0)) {
	                    event.preventDefault();

	                    _.each(_.filter(polygon.points, isPoint), function(point) {
	                        point.dragging = true;
	                    });

	                    // start{X|Y} are the scaled coordinate values of the starting mouse position
	                    var startX = (event.pageX - $(graphie.raphael.canvas.parentNode).offset().left) / graphie.scale[0] + graphie.range[0][0];
	                    var startY = graphie.range[1][1] - (event.pageY - $(graphie.raphael.canvas.parentNode).offset().top) / graphie.scale[1];
	                    if (polygon.snapX > 0) {
	                        startX = Math.round(startX / polygon.snapX) * polygon.snapX;
	                    }
	                    if (polygon.snapY > 0) {
	                        startY = Math.round(startY / polygon.snapY) * polygon.snapY;
	                    }
	                    var lastX = startX;
	                    var lastY = startY;

	                    var polygonCoords = polygon.coords.slice();

	                    // Figure out how many pixels of the bounding box of the polygon lie to each direction of the mouse
	                    var offsetLeft = (startX - polygon.left) * graphie.scale[0];
	                    var offsetRight = (polygon.right - startX) * graphie.scale[0];
	                    var offsetTop = (polygon.top - startY) * graphie.scale[1];
	                    var offsetBottom = (startY - polygon.bottom) * graphie.scale[1];

	                    $(document).bind("vmousemove.polygon vmouseup.polygon", function(event) {
	                        event.preventDefault();

	                        polygon.dragging = true;
	                        KhanUtil.dragging = true;

	                        // mouse{X|Y} are in pixels relative to the SVG
	                        var mouseX = event.pageX - $(graphie.raphael.canvas.parentNode).offset().left;
	                        var mouseY = event.pageY - $(graphie.raphael.canvas.parentNode).offset().top;

	                        // no part of the polygon can go beyond 10 pixels from the edge
	                        if (polygon.constrainToGraph) {
	                            mouseX = Math.max(
	                                offsetLeft + 10,
	                                Math.min(
	                                    graphie.xpixels - 10 - offsetRight,
	                                    mouseX
	                                )
	                            );
	                            mouseY = Math.max(
	                                offsetTop + 10,
	                                Math.min(
	                                    graphie.ypixels - 10 - offsetBottom,
	                                    mouseY
	                                )
	                            );
	                        }

	                        // current{X|Y} are the scaled coordinate values of the current mouse position
	                        var currentX = mouseX / graphie.scale[0] + graphie.range[0][0];
	                        var currentY = graphie.range[1][1] - mouseY / graphie.scale[1];
	                        if (polygon.snapX > 0) {
	                            currentX = Math.round(currentX / polygon.snapX) * polygon.snapX;
	                        }
	                        if (polygon.snapY > 0) {
	                            currentY = Math.round(currentY / polygon.snapY) * polygon.snapY;
	                        }

	                        if (event.type === "vmousemove") {
	                            var dX = currentX - startX;
	                            var dY = currentY - startY;

	                            // The caller has the option of adding an onMove()
	                            // method to the movablePolygon object we return as
	                            // a sort of event handler. By returning false from
	                            // onMove(), the move can be vetoed, providing
	                            // custom constraints on where the point can be
	                            // moved. By returning array [dX, dY], the move can
	                            // be overridden.
	                            var doMove = true;
	                            if (_.isFunction(polygon.onMove)) {
	                                var onMoveResult = polygon.onMove(dX, dY);
	                                if (onMoveResult === false) {
	                                    doMove = false;
	                                } else if (_.isArray(onMoveResult)) {
	                                    dX = onMoveResult[0];
	                                    dY = onMoveResult[1];
	                                    currentX = startX + dX;
	                                    currentY = startY + dY;
	                                }
	                            }

	                            var increment = function(i) {
	                                return [
	                                    polygonCoords[i][0] + dX,
	                                    polygonCoords[i][1] + dY
	                                ];
	                            };

	                            if (doMove) {
	                                _.each(polygon.points, function(coordOrPoint, i) {
	                                    if (isPoint(coordOrPoint)) {
	                                        coordOrPoint.setCoord(increment(i));
	                                    } else {
	                                        polygon.points[i] = increment(i);
	                                    }
	                                });

	                                polygon.transform();

	                                $(polygon).trigger("move");

	                                lastX = currentX;
	                                lastY = currentY;
	                            }

	                        } else if (event.type === "vmouseup") {
	                            $(document).unbind(".polygon");

	                            var points = _.filter(polygon.points, isPoint);
	                            _.each(points, function(point) {
	                                point.dragging = false;
	                            });

	                            polygon.dragging = false;
	                            KhanUtil.dragging = false;
	                            if (!polygon.highlight) {
	                                polygon.visibleShape.animate(polygon.normalStyle, 50);

	                                _.each(points, function(point) {
	                                    point.visibleShape.animate(point.normalStyle, 50);
	                                });
	                            }
	                            if (_.isFunction(polygon.onMoveEnd)) {
	                                polygon.onMoveEnd(lastX - startX, lastY - startY);
	                            }
	                        }
	                    });
	                }
	            });
	        }

	        // Bring any movable points to the front
	        _.invoke(_.filter(polygon.points, isPoint), "toFront");

	        return polygon;
	    },

	    /**
	     * Constrain a point to be within the graph (including padding).
	     * If outside graph, point's x and y coordinates are clamped within
	     * the graph.
	     */
	    constrainToBounds: function(point, padding) {
	        var lower = this.unscalePoint([padding, this.ypixels - padding]);
	        var upper = this.unscalePoint([this.xpixels - padding, padding]);
	        var coordX = Math.max(lower[0], Math.min(upper[0], point[0]));
	        var coordY = Math.max(lower[1], Math.min(upper[1], point[1]));
	        return [coordX, coordY];
	    },

	    /**
	     * Constrain a point to be within the graph (including padding).
	     * If outside graph, point is moved along the ray specified by angle
	     * until inside graph.
	     */
	    constrainToBoundsOnAngle: function(point, padding, angle) {
	        var lower = this.unscalePoint([padding, this.ypixels - padding]);
	        var upper = this.unscalePoint([this.xpixels - padding, padding]);

	        var result = point.slice();

	        if (result[0] < lower[0]) {
	            result = [lower[0], result[1] + (lower[0] - result[0]) * Math.tan(angle)];
	        } else if (result[0] > upper[0]) {
	            result = [upper[0], result[1] - (result[0] - upper[0]) * Math.tan(angle)];
	        }

	        if (result[1] < lower[1]) {
	            result = [result[0] + (lower[1] - result[1]) / Math.tan(angle), lower[1]];
	        } else if (result[1] > upper[1]) {
	            result = [result[0] - (result[1] - upper[1]) / Math.tan(angle), upper[1]];
	        }

	        return result;
	    },

	    // MovableAngle is an angle that can be dragged around the screen.
	    // By attaching a smartPoint to the vertex and ray control points, the
	    // rays can be manipulated individually.
	    //
	    // Use only with smartPoints; add the smartPoints first, then:
	    //   addMovableAngle({points: [...]});
	    //
	    // The rays can be controlled to snap on degrees (more useful than snapping
	    // on coordinates) by setting snapDegrees to a positive integer.
	    //
	    // The returned object includes the following properties/methods:
	    //
	    //   - movableAngle.points
	    //         The movableAngle's dynamic smartPoints.
	    //
	    //   - movableAngle.coords
	    //         The movableAngle's current coordinates (generated, don't edit).
	    //
	    addMovableAngle: function(options) {
	        return new MovableAngle(this, options);
	    },

	    addArrowWidget: function(options) {
	        var arrowWidget = $.extend({
	            graph: this,
	            direction: "up",
	            coord: [0, 0],
	            onClick: function() {}
	        }, options);
	        var graph = arrowWidget.graph;

	        if (arrowWidget.direction === "up") {
	            arrowWidget.visibleShape = graph.path([
	                    [arrowWidget.coord[0], arrowWidget.coord[1] - 4 / graph.scale[1]],
	                    [arrowWidget.coord[0] - 4 / graph.scale[0], arrowWidget.coord[1] - 4 / graph.scale[1]],
	                    [arrowWidget.coord[0], arrowWidget.coord[1] + 4 / graph.scale[1]],
	                    [arrowWidget.coord[0] + 4 / graph.scale[0], arrowWidget.coord[1] - 4 / graph.scale[1]],
	                    [arrowWidget.coord[0], arrowWidget.coord[1] - 4 / graph.scale[1]]
	                    ], { stroke: "", fill: KhanUtil.INTERACTIVE });
	        } else if (arrowWidget.direction === "down") {
	            arrowWidget.visibleShape = graph.path([
	                    [arrowWidget.coord[0], arrowWidget.coord[1] + 4 / graph.scale[1]],
	                    [arrowWidget.coord[0] - 4 / graph.scale[0], arrowWidget.coord[1] + 4 / graph.scale[1]],
	                    [arrowWidget.coord[0], arrowWidget.coord[1] - 4 / graph.scale[1]],
	                    [arrowWidget.coord[0] + 4 / graph.scale[0], arrowWidget.coord[1] + 4 / graph.scale[1]],
	                    [arrowWidget.coord[0], arrowWidget.coord[1] + 4 / graph.scale[1]]
	                    ], { stroke: "", fill: KhanUtil.INTERACTIVE });
	        }

	        // You might think we JUST NOW set the style when we drew this. But
	        // does IE8 care? No! Of course not! It was too busy being slow and
	        // obnoxious. So apparently we have to set the style again, later, when
	        // it's paying attention. Or something.
	        _.defer(function() {
	            arrowWidget.visibleShape.attr({stroke: "", fill: KhanUtil.INTERACTIVE});
	        });

	        arrowWidget.mouseTarget = graph.mouselayer.circle(
	                graph.scalePoint(arrowWidget.coord)[0], graph.scalePoint(arrowWidget.coord)[1], 15);
	        arrowWidget.mouseTarget.attr({fill: "#000", "opacity": 0.0});

	        $(arrowWidget.mouseTarget[0]).css("cursor", "pointer");
	        $(arrowWidget.mouseTarget[0]).bind("vmousedown vmouseover vmouseout", function(event) {
	            if (event.type === "vmouseover") {
	                arrowWidget.visibleShape.animate({ scale: 2, fill: KhanUtil.INTERACTING }, 20);
	            } else if (event.type === "vmouseout") {
	                arrowWidget.visibleShape.animate({ scale: 1, fill: KhanUtil.INTERACTING }, 20);
	            } else if (event.type === "vmousedown" && (event.which === 1 || event.which === 0)) {
	                if (!arrowWidget.hidden) {
	                    arrowWidget.onClick();
	                }
	                return false;
	            }
	        });

	        arrowWidget.hide = function() {
	            arrowWidget.visibleShape.hide();
	            arrowWidget.hidden = true;
	            $(arrowWidget.mouseTarget[0]).css("cursor", "default");
	        };

	        arrowWidget.show = function() {
	            arrowWidget.visibleShape.show();
	            arrowWidget.hidden = false;
	            $(arrowWidget.mouseTarget[0]).css("cursor", "pointer");
	        };

	        return arrowWidget;
	    },


	    addRectGraph: function(options) {
	        // settings
	        var rect = $.extend(true, {
	            x: 0,
	            y: 0,
	            width: 1,
	            height: 1,
	            normalStyle: {
	                points: {
	                    stroke: KhanUtil.INTERACTIVE,
	                    fill: KhanUtil.INTERACTIVE,
	                    opacity: 1
	                },
	                edges: {
	                    stroke: KhanUtil.INTERACTIVE,
	                    opacity: 1,
	                    "stroke-width": 1
	                },
	                area: {
	                    fill: KhanUtil.INTERACTIVE,
	                    "fill-opacity": 0.1,
	                    "stroke-width": 0
	                }
	            },
	            hoverStyle: {
	                points: {
	                    color: KhanUtil.INTERACTING,
	                    opacity: 1,
	                    width: 2
	                },
	                edges: {
	                    stroke: KhanUtil.INTERACTING,
	                    opacity: 1,
	                    "stroke-width": 1
	                },
	                area: {
	                    fill: KhanUtil.INTERACTING,
	                    "fill-opacity": 0.2,
	                    "stroke-width": 0
	                }
	            },
	            fixed: {
	                // if true, users cannot move the edge independently
	                edges: [false, false, false, false],

	                // if true, users cannot move the point independently
	                points: [false, false, false, false]
	            },
	            constraints: {
	                constrainX: false, // limit movement to y axis
	                constrainY: false, // limit movement to x axis

	                // bounds for translations
	                xmin: null,
	                xmax: null,
	                ymin: null,
	                ymax: null
	            },
	            snapX: 0,
	            snapY: 0,

	            // this function will be called whenever .translate(), .snap(), or
	            // .moveTo() are called
	            onMove: function() {}
	        }, options);


	        // functions
	        rect = $.extend({
	            initialized: function() {
	                return rect.points && rect.points.length;
	            },
	            x2: function() {
	                return this.x + this.width;
	            },
	            y2: function() {
	                return this.y + this.height;
	            },
	            getX: function() {
	                if (rect.initialized()) {
	                    return rect.points[0].coord[0];
	                }
	                return rect.x;
	            },
	            getY: function() {
	                if (rect.initialized()) {
	                    return rect.points[0].coord[1];
	                }
	                return rect.y;
	            },
	            getX2: function() {
	                return rect.getX() + rect.getWidth();
	            },
	            getY2: function() {
	                return rect.getY() + rect.getHeight();
	            },
	            getXLims: function() {
	                var x = rect.getX();
	                return [x, x + rect.getWidth()];
	            },
	            getYLims: function() {
	                var y = rect.getY();
	                return [y, y + rect.getHeight()];
	            },
	            getWidth: function() {
	                if (rect.initialized()) {
	                    var x0 = rect.points[1].coord[0];
	                    var x1 = rect.points[2].coord[0];
	                    return x1 - x0;
	                }
	                return rect.width;
	            },
	            getHeight: function() {
	                if (rect.initialized()) {
	                    var y0 = rect.points[0].coord[1];
	                    var y1 = rect.points[1].coord[1];
	                    return y1 - y0;
	                }
	                return rect.height;
	            },
	            getCoord: function() {
	                return [rect.getX(), rect.getY()];
	            },
	            getRaphaelParamsArr: function() {
	                var width = rect.getWidth();
	                var height = rect.getHeight();
	                var x = rect.getX();
	                var y = rect.getY();
	                var point = graphie.scalePoint([x, y + height]);
	                var dims = graphie.scaleVector([width, height]);
	                return point.concat(dims);
	            },
	            getRaphaelParams: function() {
	                var arr = rect.getRaphaelParamsArr();
	                return {
	                    x: arr[0],
	                    y: arr[1],
	                    width: arr[2],
	                    height: arr[3]
	                };
	            }
	        }, rect);

	        var graphie = this;



	        // ADD RECTANGLE AND MOUSE TARGET

	        rect.fillArea = graphie.rect().attr(rect.normalStyle.area);
	        rect.mouseTarget = graphie.mouselayer.rect()
	            .attr({
	                fill: "#000",
	                opacity: 0,
	                "fill-opacity": 0
	            });

	        rect.render = function() {
	            rect.fillArea.attr(rect.getRaphaelParams());
	            rect.mouseTarget.attr(rect.getRaphaelParams());
	        };

	        rect.render(); // initialize



	        // ADD POINTS

	        rect.points = [];

	        var coords = [[rect.x, rect.y], [rect.x, rect.y2()], [rect.x2(), rect.y2()], [rect.x2(), rect.y]];
	        var sames = [[1, 3], [0, 2], [3, 1], [2, 0]];
	        var moveLimits = [[1, 1], [1, 0], [0, 0], [0, 1]];


	        function adjustNeighboringPoints(x, y, sameX, sameY) {
	            rect.points[sameX].setCoord([x, rect.points[sameX].coord[1]]);
	            rect.points[sameY].setCoord([rect.points[sameY].coord[0], y]);
	            rect.points[sameX].updateLineEnds();
	            rect.points[sameY].updateLineEnds();
	        }

	        function coordInBounds(limit, newVal, checkIsGreater) {
	            return checkIsGreater ? newVal < limit : newVal > limit;
	        }

	        function moveIsInBounds(index, newX, newY) {
	            var xlims = rect.getXLims();
	            var ylims = rect.getYLims();

	            var i = moveLimits[index];

	            var xInBounds = coordInBounds(xlims[i[0]], newX, i[0] === 1);
	            var yInBounds = coordInBounds(ylims[i[1]], newY, i[1] === 1);

	            return xInBounds && yInBounds;
	        }

	        _.times(4, function(i) {
	            var sameX = sames[i][0];
	            var sameY = sames[i][1];
	            var coord = coords[i];

	            var point = graphie.addMovablePoint({
	                graph: graphie,
	                coord: coord,
	                normalStyle: rect.normalStyle.points,
	                hoverStyle: rect.hoverStyle.points,
	                snapX: rect.snapX,
	                snapY: rect.snapY,
	                visible: !rect.fixed.points[i],
	                constraints: {
	                    fixed: rect.fixed.points[i]
	                },
	                onMove: function(x, y) {
	                    if (!moveIsInBounds(i, x, y)) {
	                        return false;
	                    }
	                    adjustNeighboringPoints(x, y, sameX, sameY);
	                    rect.render();
	                }
	            });

	            rect.points.push(point);
	        });



	        // ADD EDGES

	        rect.edges = [];

	        rect.moveEdge = function(dx, dy, edgeIndex) {
	            var a = rect.edges[edgeIndex].pointA;
	            var z = rect.edges[edgeIndex].pointZ;
	            a.setCoord([a.coord[0] + dx, a.coord[1] + dy]);
	            z.setCoord([z.coord[0] + dx, z.coord[1] + dy]);
	            a.updateLineEnds();
	            z.updateLineEnds();
	        };

	        _.times(4, function(i) {
	            var pointA = rect.points[i];
	            var pointZ = rect.points[(i + 1) % 4]; // next point
	            var constrainX = (i % 2); // odd edges have X constrained
	            var constrainY = ((i + 1) % 2); // even edges have Y constrained

	            var edge = graphie.addMovableLineSegment({
	                graph: graphie,
	                pointA: pointA,
	                pointZ: pointZ,
	                normalStyle: rect.normalStyle.edges,
	                hoverStyle: rect.hoverStyle.edges,
	                snapX: rect.snapX,
	                snapY: rect.snapY,
	                fixed: rect.fixed.edges[i],
	                constraints: {
	                    constrainX: constrainX,
	                    constrainY: constrainY
	                },
	                onMove: function(dx, dy) {
	                    rect.moveEdge(dx, dy, i);
	                    rect.render();
	                }
	            });

	            rect.edges.push(edge);
	        });



	        // CREATE COLLECTION OF ALL ELEMENTS (used in toFront)
	        var elems = [rect.fillArea, rect.mouseTarget];
	        rect.elems = elems.concat(rect.edges).concat(rect.points);



	        // MOVING FUNCTIONS

	        function constrainTranslation(dx, dy) {
	            var xC = rect.constraints.constrainX;
	            var xLT = rect.getX() + dx < rect.constraints.xmin;
	            var xGT = rect.getX2() + dx > rect.constraints.xmax;
	            var yC = rect.constraints.constrainY;
	            var yLT = rect.getY() + dy < rect.constraints.ymin;
	            var yGT = rect.getY2() + dy > rect.constraints.ymax;

	            dx = xC || xLT || xGT ? 0 : dx;
	            dy = yC || yLT || yGT ? 0 : dy;

	            return [dx, dy];
	        }

	        rect.translate = function(dx, dy) {
	            if (rect.constraints.constrainX && rect.constraints.constrainY) {
	                return;
	            }
	            var d = constrainTranslation(dx, dy);
	            dx = d[0];
	            dy = d[1];

	            _.each(rect.points, function(point, i) {
	                var x = point.coord[0] + dx;
	                var y = point.coord[1] + dy;
	                // move points
	                point.setCoord([x, y]);
	                // move edges
	                point.updateLineEnds();
	            });

	            // move rectangle & mouseTarget
	            rect.render();

	            // fire "on move" event with the new xlims and ylims
	            rect.onMove(dx, dy);
	        };

	        rect.moveTo = function(x, y) {
	            var dx = x - rect.getX();
	            var dy = y - rect.getY();
	            rect.translate(dx, dy);
	        };

	        rect.snap = function() {
	            var dx;
	            var dy;
	            _.each(rect.points, function(point, i) {
	                var x0 = point.coord[0];
	                var y0 = point.coord[1];
	                var x1 = x0;
	                var y1 = y0;

	                if (rect.snapX) {
	                    x1 = KhanUtil.roundToNearest(rect.snapX, x0);
	                }
	                if (rect.snapY) {
	                    y1 = KhanUtil.roundToNearest(rect.snapY, y0);
	                }

	                if (!dx || !dy) {
	                    dx = x1 - x0;
	                    dy = y1 - y0;
	                }

	                // move points
	                point.setCoord([x1, y1]);
	                // move edges
	                point.updateLineEnds();
	            });

	            // move rectangle & mouseTarget
	            rect.render();

	            // fire "on move" event with the new xlims and ylims
	            rect.onMove(dx, dy);
	        };

	        // TODO(stephanie): confirm this works
	        rect.toFront = function() {
	            _.each(rect.elems, function(elem) {
	                elem.toFront();
	            });
	        };

	        rect.hide = function(speed) {
	            if (rect.hidden) {
	                return;
	            }

	            speed = speed || 100;

	            rect.fillArea.animate({
	                "fill-opacity": 0
	            }, speed);
	            $(rect.mouseTarget[0]).css("display", "none");

	            rect.hidden = true;
	        };

	        rect.show = function(speed) {
	            if (!rect.hidden) {
	                return;
	            }

	            speed = speed || 100;

	            rect.fillArea.animate(rect.normalStyle.area, speed);
	            $(rect.mouseTarget[0]).css("display", "block");

	            rect.hidden = false;
	        };

	        rect.enableHoverStyle = function() {
	            rect.highlight = true;
	            if (!KhanUtil.dragging) {
	                rect.fillArea.animate(rect.hoverStyle.area, 100);
	            }
	        };

	        rect.enableNormalStyle = function() {
	            rect.highlight = false;
	            if (!rect.dragging) {
	                rect.fillArea.animate(rect.normalStyle.area, 100);
	            }
	        };

	        // tie actual translation events to the translate function
	        var bindTranslation = function() {
	            $(rect.mouseTarget[0]).css("cursor", "move");
	            $(rect.mouseTarget[0]).on(
	                "vmouseover vmouseout vmousedown", function(event) {
	                    if (event.type === "vmouseover") {
	                        rect.enableHoverStyle();

	                    } else if (event.type === "vmouseout") {
	                        rect.enableNormalStyle();

	                    } else if (event.type === "vmousedown" &&
	                            (event.which === 1 || event.which === 0)) {
	                        event.preventDefault();
	                        rect.toFront();
	                        rect.prevCoord = graphie.getMouseCoord(event);

	                        rect.enableHoverStyle();

	                        $(document).on("vmousemove vmouseup", function(event) {
	                            event.preventDefault();
	                            rect.dragging = true;
	                            KhanUtil.dragging = true;

	                            if (event.type === "vmousemove") {
	                                var currCoord = graphie.getMouseCoord(event);

	                                if (rect.prevCoord && rect.prevCoord.length === 2) {
	                                    var diff = KhanUtil.coordDiff(rect.prevCoord, currCoord);
	                                    rect.translate(diff[0], diff[1]);
	                                }

	                                rect.prevCoord = currCoord;

	                            } else if (event.type === "vmouseup") {
	                                $(document).off("vmousemove vmouseup");
	                                rect.dragging = false;
	                                KhanUtil.dragging = false;

	                                var currCoord = graphie.getMouseCoord(event);
	                                if (currCoord[0] < rect.getX() ||
	                                    currCoord[0] > rect.getX2() ||
	                                    currCoord[1] < rect.getY() ||
	                                    currCoord[1] > rect.getY2()) {
	                                        rect.enableNormalStyle();
	                                }

	                                // snap to grid
	                                rect.snap();
	                            }
	                        });
	                    }
	            });
	        };

	        bindTranslation();

	        return rect;
	    },

	    // center: movable point
	    // radius: int
	    // circ: graphie circle
	    // perim: invisible mouse target for dragging/changing radius
	    addCircleGraph: function(options) {
	        var graphie = this;
	        var circle = $.extend({
	            center: [0, 0],
	            radius: 2,
	            snapX: 0.5,
	            snapY: 0.5,
	            snapRadius: 0.5,
	            minRadius: 1,
	            centerConstraints: {},
	            centerNormalStyle: {},
	            centerHighlightStyle: {
	                stroke: KhanUtil.INTERACTING,
	                fill: KhanUtil.INTERACTING
	            },
	            circleNormalStyle: {
	                stroke: KhanUtil.INTERACTIVE,
	                "fill-opacity": 0
	            },
	            circleHighlightStyle: {
	                stroke: KhanUtil.INTERACTING,
	                fill: KhanUtil.INTERACTING,
	                "fill-opacity": 0.05
	            }
	        }, options);

	        // Set normal styling based on interactability
	        var normalColor = (circle.centerConstraints.fixed) ?
	                                  KhanUtil.DYNAMIC
	                                : KhanUtil.INTERACTIVE;
	        var centerNormalStyle = (options) ? options.centerNormalStyle : null;
	        circle.centerNormalStyle = _.extend({}, {
	            "fill": normalColor,
	            "stroke": normalColor
	        }, centerNormalStyle);

	        circle.centerPoint = graphie.addMovablePoint({
	            graph: graphie,
	            coord: circle.center,
	            normalStyle: circle.centerNormalStyle,
	            snapX: circle.snapX,
	            snapY: circle.snapY,
	            constraints: circle.centerConstraints
	        });
	        circle.circ = graphie.circle(circle.center, circle.radius,
	                circle.circleNormalStyle);
	        circle.perim = graphie.mouselayer.circle(
	            graphie.scalePoint(circle.center)[0],
	            graphie.scalePoint(circle.center)[1],
	            graphie.scaleVector(circle.radius)[0]).attr({
	                "stroke-width": 20,
	                "opacity": 0.002  // This is as close to 0 as MSIE will allow
	            });

	        // Highlight circle circumference on center point hover
	        if (!circle.centerConstraints.fixed) {
	            $(circle.centerPoint.mouseTarget.getMouseTarget()).on("vmouseover vmouseout",
	                    function(event) {
	                if (circle.centerPoint.highlight ||
	                        circle.centerPoint.dragging) {
	                    circle.circ.animate(circle.circleHighlightStyle, 50);
	                } else {
	                    circle.circ.animate(circle.circleNormalStyle, 50);
	                }
	            });
	        }

	        circle.toFront = function() {
	            circle.circ.toFront();
	            circle.perim.toFront();
	            circle.centerPoint.visibleShape.toFront();
	            if (!circle.centerConstraints.fixed) {
	                circle.centerPoint.mouseTarget.toFront();
	            }
	        };

	        circle.centerPoint.onMove = function(x, y) {
	            circle.toFront();
	            circle.circ.attr({
	                cx: graphie.scalePoint(x)[0],
	                cy: graphie.scalePoint(y)[1]
	            });
	            circle.perim.attr({
	                cx: graphie.scalePoint(x)[0],
	                cy: graphie.scalePoint(y)[1]
	            });
	            if (circle.onMove) {
	                circle.onMove(x, y);
	            }
	        };

	        $(circle.centerPoint).on("move", function() {
	            circle.center = this.coord;
	            $(circle).trigger("move");
	        });

	        // circle.setCenter(x, y) moves the circle to the specified
	        // x, y coordinate as if the user had dragged it there.
	        circle.setCenter = function(x, y) {
	            circle.centerPoint.setCoord([x, y]);
	            circle.centerPoint.onMove(x, y);
	            circle.center = [x, y];
	        };

	        // circle.setRadius(r) sets the circle's radius to the specified
	        // value as if the user had dragged it there.
	        circle.setRadius = function(r) {
	            circle.radius = r;

	            circle.perim.attr({
	                r: graphie.scaleVector(r)[0]
	            });
	            circle.circ.attr({
	                rx: graphie.scaleVector(r)[0],
	                ry: graphie.scaleVector(r)[1]
	            });
	        };

	        circle.remove = function() {
	            circle.centerPoint.remove();
	            circle.circ.remove();
	            circle.perim.remove();
	        };

	        $(circle.perim[0]).css("cursor", "move");
	        $(circle.perim[0]).on(
	            "vmouseover vmouseout vmousedown", function(event) {
	                if (event.type === "vmouseover") {
	                    circle.highlight = true;
	                    if (!KhanUtil.dragging) {
	                        // TODO(jack): Figure out why this doesn't work
	                        // for circleHighlightStyle's that change
	                        // stroke-dasharray
	                        circle.circ.animate(circle.circleHighlightStyle, 50);
	                        circle.centerPoint.visibleShape.animate(
	                            circle.centerHighlightStyle,
	                            50
	                        );
	                    }

	                } else if (event.type === "vmouseout") {
	                    circle.highlight = false;
	                    if (!circle.dragging && !circle.centerPoint.dragging) {
	                        circle.circ.animate(circle.circleNormalStyle, 50);
	                        circle.centerPoint.visibleShape.animate(
	                            circle.centerNormalStyle,
	                            50
	                        );
	                    }

	                } else if (event.type === "vmousedown" &&
	                        (event.which === 1 || event.which === 0)) {
	                    event.preventDefault();
	                    circle.toFront();
	                    var startRadius = circle.radius;

	                    $(document).on("vmousemove vmouseup", function(event) {
	                        event.preventDefault();
	                        circle.dragging = true;
	                        KhanUtil.dragging = true;

	                        if (event.type === "vmousemove") {
	                            // can't go beyond 10 pixels from the edge
	                            // coord is the scaled coordinate
	                            var coord = graphie.constrainToBounds(
	                                graphie.getMouseCoord(event), 10);

	                            var radius = KhanUtil.getDistance(
	                                circle.centerPoint.coord, coord);
	                            radius = Math.max(circle.minRadius,
	                                Math.round(radius / circle.snapRadius) *
	                                circle.snapRadius);
	                            var oldRadius = circle.radius;
	                            var doResize = true;
	                            if (circle.onResize) {
	                                var onResizeResult = circle.onResize(radius, oldRadius);
	                                if (_.isNumber(onResizeResult)) {
	                                    radius = onResizeResult;
	                                } else if (onResizeResult === false) {
	                                    doResize = false;
	                                }
	                            }
	                            if (doResize) {
	                                circle.setRadius(radius);
	                                $(circle).trigger("move");
	                            }
	                        } else if (event.type === "vmouseup") {
	                            $(document).off("vmousemove vmouseup");
	                            circle.dragging = false;
	                            KhanUtil.dragging = false;
	                            if (circle.onResizeEnd) {
	                                circle.onResizeEnd(circle.radius, startRadius);
	                            }
	                        }
	                    });
	                }
	        });

	        return circle;
	    },

	    interactiveEllipse: function(options) {
	        var graphie = this;
	        var ellipse = $.extend({
	            center: [0, 0],
	            radius: 2,
	            xRadius: 2,
	            yRadius: 2,
	            ellipseNormalStyle: {
	                stroke: KhanUtil.BLUE,
	                "fill-opacity": 0
	            },
	            ellipseBoundaryHideStyle: {
	                "fill-opacity": 0,
	                "stroke-width": 0
	            },
	            ellipseBoundaryShowStyle: {
	                "fill-opacity": 1,
	                fill: KhanUtil.BLUE
	            },
	            onMove: function(coordX, coordY) { /* Here to be overriden */ },
	            onLeave: function(coordX, coordY) { /* Here to be overriden */ }
	        }, options);

	        ellipse.circ = graphie.ellipse(ellipse.center, [ellipse.xRadius, ellipse.yRadius], ellipse.ellipseNormalStyle);
	        ellipse.perim = graphie.mouselayer.ellipse(
	            graphie.scalePoint(ellipse.center)[0],
	            graphie.scalePoint(ellipse.center)[1],
	            graphie.scaleVector(ellipse.xRadius)[0],
	            graphie.scaleVector(ellipse.yRadius)[0]).attr({
	                "stroke-width": 30,
	                "opacity": 0.002  // This is as close to 0 as MSIE will allow
	        });

	        ellipse.boundaryPoint = graphie.circle(ellipse.center, 0.4, ellipse.ellipseBoundaryHideStyle);

	        ellipse.remove = function() {
	            ellipse.circ.remove();
	            ellipse.perim.remove();
	        };

	        ellipse.showPoint = function(event) {
	            // Fix to ellipse boundary by finding angle and adjusting the radius
	            var coord = graphie.constrainToBounds(graphie.getMouseCoord(event), 10);
	            var dx = ellipse.yRadius * (ellipse.center[0] - coord[0]);
	            var dy = ellipse.xRadius * (ellipse.center[1] - coord[1]);
	            var angle = Math.atan2(dy, dx);

	            coord[0] = ellipse.center[0] - ellipse.xRadius * Math.cos(angle);
	            coord[1] = ellipse.center[1] - ellipse.yRadius * Math.sin(angle);

	            var scaledPoint = graphie.scalePoint(coord);
	            ellipse.boundaryPoint.attr({ cx: scaledPoint[0] });
	            ellipse.boundaryPoint.attr({ cy: scaledPoint[1] });
	            ellipse.boundaryPoint.animate(ellipse.ellipseBoundaryShowStyle, 50);

	            ellipse.onMove(coord[0], coord[1]);
	        };

	        $(ellipse.perim[0]).on(
	            "vmouseover vmouseout vmousemove", function(event) {
	                if (event.type === "vmouseover") {
	                    ellipse.showPoint(event);
	                } else if (event.type === "vmouseout") {
	                    ellipse.boundaryPoint.animate(ellipse.ellipseBoundaryHideStyle, 50);
	                    ellipse.onLeave();
	                } else if (event.type === "vmousemove") {
	                    ellipse.showPoint(event);
	                }
	        });

	        return ellipse;
	    },

	    addRotateHandle: (function() {
	        var drawRotateHandle = function(graphie, center, radius, halfWidth,
	                lengthAngle, angle, interacting) {
	            // Get a point on the arrow, given an angle offset and a distance
	            // from the "midline" of the arrow (ROTATE_HANDLE_DIST away from
	            // the rotation point).
	            var getRotateHandlePoint = function(offset,
	                    distanceFromArrowMidline) {
	                var distFromRotationCenter = radius + distanceFromArrowMidline;
	                var vec = KhanUtil.kvector.cartFromPolarDeg([
	                    distFromRotationCenter,
	                    angle + offset
	                ]);
	                var absolute = KhanUtil.kvector.add(center, vec);
	                var pixels = graphie.scalePoint(absolute);
	                return pixels[0] + "," + pixels[1];
	            };

	            // Inner and outer radii for the curved part of the arrow
	            var innerR = graphie.scaleVector(radius - halfWidth);
	            var outerR = graphie.scaleVector(radius + halfWidth);

	            // Draw the double-headed arrow thing that shows users where to
	            // click and drag to rotate
	            return graphie.raphael.path(
	                // upper arrowhead
	                " M" + getRotateHandlePoint(lengthAngle, -halfWidth) +
	                " L" + getRotateHandlePoint(lengthAngle, -3 * halfWidth) +
	                " L" + getRotateHandlePoint(2 * lengthAngle, 0) +
	                " L" + getRotateHandlePoint(lengthAngle, 3 * halfWidth) +
	                " L" + getRotateHandlePoint(lengthAngle, halfWidth) +
	                // outer arc
	                " A" + outerR[0] + "," + outerR[1] + ",0,0,1," +
	                    getRotateHandlePoint(-lengthAngle, halfWidth) +
	                // lower arrowhead
	                " L" + getRotateHandlePoint(-lengthAngle, 3 * halfWidth) +
	                " L" + getRotateHandlePoint(-2 * lengthAngle, 0) +
	                " L" + getRotateHandlePoint(-lengthAngle, -3 * halfWidth) +
	                " L" + getRotateHandlePoint(-lengthAngle, -halfWidth) +
	                // inner arc
	                " A" + innerR[0] + "," + innerR[1] + ",0,0,0," +
	                    getRotateHandlePoint(lengthAngle, -halfWidth) +
	                " Z"
	            ).attr({
	                stroke: null,
	                fill: (interacting) ? KhanUtil.INTERACTING
	                                    : KhanUtil.INTERACTIVE
	            });
	        };

	        return function(options) {
	            var graph = this;

	            var rotatePoint = options.center;
	            var radius = options.radius;
	            var lengthAngle = options.lengthAngle || 30;
	            var hideArrow = options.hideArrow || false;
	            var mouseTarget = options.mouseTarget;
	            var id = _.uniqueId("rotateHandle");

	            // Normalize rotatePoint into something that always looks
	            // like a movablePoint
	            if (_.isArray(rotatePoint)) {
	                rotatePoint = {
	                    coord: rotatePoint
	                };
	            }

	            var rotateHandle = graph.addMovablePoint({
	                coord: KhanUtil.kpoint.addVector(
	                    rotatePoint.coord,
	                    KhanUtil.kvector.cartFromPolarDeg(
	                        radius,
	                        options.angleDeg || 0
	                )),
	                constraints: {
	                    fixedDistance: {
	                        dist: radius,
	                        point: rotatePoint
	                    }
	                },
	                mouseTarget: mouseTarget
	            });

	            // move the rotatePoint in front of the rotateHandle to avoid
	            // confusing clicking/scaling of the rotateHandle when the user
	            // intends to click on the rotatePoint
	            rotatePoint.toFront();

	            // The logic below in onMove handlers is to make sure we
	            // move rotateHandle with rotatePoint
	            var rotatePointPrevCoord = rotatePoint.coord;
	            var rotateHandlePrevCoord = rotateHandle.coord;
	            var rotateHandleStartCoord = rotateHandlePrevCoord;
	            var isRotating = false;
	            var isHovering = false;
	            var drawnRotateHandle;

	            var redrawRotateHandle = function(handleCoord) {
	                if (hideArrow) {
	                    return; // Don't draw anything!
	                }

	                var handleVec = KhanUtil.kvector.subtract(handleCoord,
	                        rotatePoint.coord);
	                var handlePolar = KhanUtil.kvector.polarDegFromCart(handleVec);
	                var angle = handlePolar[1];

	                if (drawnRotateHandle) {
	                    drawnRotateHandle.remove();
	                }

	                drawnRotateHandle = drawRotateHandle(
	                    graph,
	                    rotatePoint.coord,
	                    options.radius,
	                    (isRotating || isHovering ?
	                        options.hoverWidth / 2 :
	                        options.width / 2
	                    ),
	                    lengthAngle,
	                    angle,
	                    isRotating || isHovering
	                );
	            };


	            // when the rotation center moves, we need to move
	            // the rotationHandle as well, or it will end up out
	            // of sync
	            $(rotatePoint).on("move." + id, function() {
	                var delta = KhanUtil.kvector.subtract(
	                    rotatePoint.coord,
	                    rotatePointPrevCoord
	                );

	                rotateHandle.setCoord(KhanUtil.kvector.add(
	                    rotateHandle.coord,
	                    delta
	                ));

	                redrawRotateHandle(rotateHandle.coord);

	                rotatePointPrevCoord = rotatePoint.coord;
	                rotateHandle.constraints.fixedDistance.point = rotatePoint;
	                rotateHandlePrevCoord = rotateHandle.coord;
	            });

	            // Rotate polygon with rotateHandle
	            rotateHandle.onMove = function(x, y) {
	                if (!isRotating) {
	                    rotateHandleStartCoord = rotateHandlePrevCoord;
	                    isRotating = true;
	                }

	                var coord = [x, y];

	                if (options.onMove) {
	                    var oldPolar = KhanUtil.kvector.polarDegFromCart(
	                        KhanUtil.kvector.subtract(
	                            rotateHandlePrevCoord,
	                            rotatePoint.coord
	                        )
	                    );
	                    var newPolar = KhanUtil.kvector.polarDegFromCart(
	                        KhanUtil.kvector.subtract(coord, rotatePoint.coord)
	                    );

	                    var oldAngle = oldPolar[1];
	                    var newAngle = newPolar[1];
	                    var result = options.onMove(newAngle, oldAngle);
	                    if (result != null && result !== true) {
	                        if (result === false) {
	                            result = oldAngle;
	                        }
	                        coord = KhanUtil.kvector.add(
	                            rotatePoint.coord,
	                            KhanUtil.kvector.cartFromPolarDeg(
	                                [oldPolar[0], result]
	                            )
	                        );
	                    }
	                }

	                redrawRotateHandle(coord);

	                rotateHandlePrevCoord = coord;
	                return coord;
	            };

	            rotateHandle.onMoveEnd = function() {
	                isRotating = false;
	                redrawRotateHandle(rotateHandle.coord);
	                if (options.onMoveEnd) {
	                    var oldPolar = KhanUtil.kvector.polarDegFromCart(
	                        KhanUtil.kvector.subtract(
	                            rotateHandleStartCoord,
	                            rotatePoint.coord
	                        )
	                    );
	                    var newPolar = KhanUtil.kvector.polarDegFromCart(
	                        KhanUtil.kvector.subtract(
	                            rotateHandle.coord,
	                            rotatePoint.coord
	                        )
	                    );
	                    options.onMoveEnd(newPolar[1], oldPolar[1]);
	                }
	            };

	            // Remove the default dot added by the movablePoint since we have
	            // our double-arrow thing
	            rotateHandle.visibleShape.remove();

	            if (!mouseTarget) {
	                // Make the default mouse target bigger to encompass the whole
	                // area around the double-arrow thing
	                rotateHandle.mouseTarget.attr({scale: 2});
	            }

	            // Make the arrow-thing grow and shrink with mouseover/out
	            var $mouseTarget = $(rotateHandle.mouseTarget.getMouseTarget());
	            $mouseTarget.bind("vmouseover", function(e) {
	                isHovering = true;
	                redrawRotateHandle(rotateHandle.coord);
	            });
	            $mouseTarget.bind("vmouseout", function(e) {
	                isHovering = false;
	                redrawRotateHandle(rotateHandle.coord);
	            });

	            redrawRotateHandle(rotateHandle.coord);

	            var oldRemove = rotateHandle.remove;
	            rotateHandle.remove = function() {
	                oldRemove.call(rotateHandle);
	                if (drawnRotateHandle) {
	                    drawnRotateHandle.remove();
	                }
	                $(rotatePoint).off("move." + id);
	            };

	            rotateHandle.update = function() {
	                redrawRotateHandle(rotateHandle.coord);
	            };

	            return rotateHandle;
	        };
	    })(),

	    addReflectButton: (function() {
	        var drawButton = function(
	                graphie,
	                buttonCoord,
	                lineCoords,
	                size,
	                distanceFromCenter,
	                leftStyle,
	                rightStyle) {

	            // Avoid invalid lines
	            if (kpoint.equal(lineCoords[0], lineCoords[1])) {
	                lineCoords = [
	                    lineCoords[0],
	                    kpoint.addVector(lineCoords[0], [1, 1])
	                ];
	            }

	            var lineDirection = kvector.normalize(
	                kvector.subtract(lineCoords[1], lineCoords[0])
	            );

	            var lineVec = kvector.scale(
	                lineDirection,
	                size/2
	            );

	            // Calculate the offset the center points should be placed at
	            var centerVec = kvector.scale(lineDirection, distanceFromCenter);
	            var leftCenterVec = kvector.rotateDeg(centerVec, 90);
	            var rightCenterVec = kvector.rotateDeg(centerVec, -90);

	            // Calculate the offsets for the far points
	            var negLineVec = kvector.negate(lineVec);
	            var leftVec = kvector.rotateDeg(lineVec, 90);
	            var rightVec = kvector.rotateDeg(lineVec, -90);

	            // Calculate the center point locations
	            var leftCenter = kpoint.addVectors(buttonCoord, leftCenterVec);
	            var rightCenter = kpoint.addVectors(buttonCoord, rightCenterVec);

	            // Calculate the far point locations
	            var leftCoord1 = kpoint.addVectors(buttonCoord, leftCenterVec, lineVec, leftVec);
	            var leftCoord2 = kpoint.addVectors(buttonCoord, leftCenterVec, negLineVec, leftVec);
	            var rightCoord1 = kpoint.addVectors(buttonCoord, rightCenterVec, lineVec, rightVec);
	            var rightCoord2 = kpoint.addVectors(buttonCoord, rightCenterVec, negLineVec, rightVec);

	            var leftButton = graphie.path(
	                [leftCenter, leftCoord1, leftCoord2, true],
	                leftStyle
	            );
	            var rightButton = graphie.path(
	                [rightCenter, rightCoord1, rightCoord2, true],
	                rightStyle
	            );

	            return {
	                remove: function() {
	                    leftButton.remove();
	                    rightButton.remove();
	                }
	            };
	        };

	        return function(options) {
	            var graphie = this;

	            var line = options.line;

	            var button = graphie.addMovablePoint({
	                constraints: options.constraints,
	                coord: kline.midpoint([
	                    line.pointA.coord,
	                    line.pointZ.coord
	                ]),
	                snapX: graphie.snap[0],
	                snapY: graphie.snap[1],
	                onMove: function(x, y) {
	                    // Don't allow the button to actually move. This is a hack
	                    // around the inability to both set a point as fixed AND
	                    // allow it to be clicked.
	                    return false;
	                },
	                onMoveEnd: function(x, y) {
	                    if (options.onMoveEnd) {
	                        options.onMoveEnd.call(this, x, y);
	                    }
	                }
	            });

	            var isHovering = false;
	            var isFlipped = false;
	            var currentlyDrawnButton;

	            var isHighlight = function() {
	                return isHovering;
	            };

	            var styles = _.map([0, 1], function(isHighlight) {
	                var baseStyle = isHighlight ?
	                        options.highlightStyle :
	                        options.normalStyle;

	                return _.map([0, 1], function(opacity) {
	                    return _.defaults({
	                        "fill-opacity": opacity
	                    }, baseStyle);
	                });
	            });

	            var getStyle = function(isRight) {
	                if (isFlipped) {
	                    isRight = !isRight;
	                }
	                return styles[+isHighlight()][+isRight];
	            };

	            var redraw = function(coord, lineCoords) {
	                if (currentlyDrawnButton) {
	                    currentlyDrawnButton.remove();
	                }
	                currentlyDrawnButton = drawButton(
	                    graphie,
	                    coord,
	                    lineCoords,
	                    isHighlight() ? options.size * 1.5 : options.size,
	                    isHighlight() ? options.size * 0.125 : 0.25,
	                    getStyle(0),
	                    getStyle(1)
	                );
	            };

	            // Keep the button's position in-sync with the line
	            var update = function(coordA, coordZ) {
	                coordA = coordA || line.pointA.coord;
	                coordZ = coordZ || line.pointZ.coord;

	                var buttonCoord = kline.midpoint([coordA, coordZ]);
	                button.setCoord(buttonCoord);

	                redraw(buttonCoord, [coordA, coordZ]);
	            };

	            $(line).on("move", _.bind(update, button, null, null));

	            // Add click handling
	            var $mouseTarget = $(button.mouseTarget.getMouseTarget());
	            $mouseTarget.on("vclick", function() {
	                var result = options.onClick();
	                if (result !== false) {
	                    isFlipped = !isFlipped;
	                    redraw(button.coord,
	                        [line.pointA.coord, line.pointZ.coord]);
	                }
	            });

	            // Bring the reflection line handles in front of the button, so
	            // that if we drag the reflectPoints really close together, we can
	            // still move the handles away from each other, rather than only
	            // being able to apply the reflection.
	            line.pointA.toFront();
	            line.pointZ.toFront();

	            // Replace the visual point with the double triangle thing
	            button.visibleShape.remove();
	            // Resize the hidden point to cover the size of the visual point
	            var pointScale = graphie.scaleVector(options.size)[0] / 20;
	            button.mouseTarget.attr({scale: 1.5 * pointScale});
	            $mouseTarget.css("cursor", "pointer");

	            // Make the arrow-thing grow and shrink with mouseover/out
	            $mouseTarget.bind("vmouseover", function(e) {
	                isHovering = true;
	                redraw(button.coord, [line.pointA.coord, line.pointZ.coord]);
	            });
	            $mouseTarget.bind("vmouseout", function(e) {
	                isHovering = false;
	                redraw(button.coord, [line.pointA.coord, line.pointZ.coord]);
	            });

	            var oldButtonRemove = button.remove;
	            button.remove = function() {
	                currentlyDrawnButton.remove();
	                oldButtonRemove.call(button);
	            };

	            button.update = update;
	            button.isFlipped = function() {
	                return isFlipped;
	            };

	            update();
	            return button;
	        };
	    })(),

	    protractor: function(center) {
	        return new Protractor(this, center);
	    },

	    ruler: function(options) {
	        return new Ruler(this, options || {});
	    },

	    addPoints: addPoints
	});


	function Protractor(graph, center) {
	    this.set = graph.raphael.set();

	    this.cx = center[0];
	    this.cy = center[1];
	    var pro = this;

	    var r = graph.unscaleVector(180.5)[0];
	    var imgPos = graph.scalePoint([this.cx - r, this.cy + r - graph.unscaleVector(10.5)[1]]);
	    this.set.push(graph.mouselayer.image(
	            "https://ka-perseus-graphie.s3.amazonaws.com/e9d032f2ab8b95979f674fbfa67056442ba1ff6a.png",
	            imgPos[0], imgPos[1], 360, 180));


	    // Customized polar coordinate thingie to make it easier to draw the double-headed arrow thing.
	    // angle is what you'd expect -- use that big protractor on your screen :)
	    // pixels from edge is relative to the edge of the protractor; it's not the full radius
	    var arrowHelper = function(angle, pixelsFromEdge) {
	        var scaledRadius = graph.scaleVector(r);
	        scaledRadius[0] -= 16;
	        scaledRadius[1] -= 16;
	        var scaledCenter = graph.scalePoint(center);
	        var x = Math.sin((angle + 90) * Math.PI / 180) * (scaledRadius[0] + pixelsFromEdge) + scaledCenter[0];
	        var y = Math.cos((angle + 90) * Math.PI / 180) * (scaledRadius[1] + pixelsFromEdge) + scaledCenter[1];
	        return x + "," + y;
	    };

	    // Draw the double-headed arrow thing that shows users where to click and drag to rotate
	    var arrow = graph.raphael.path(
	        " M" + arrowHelper(180, 6) +
	        " L" + arrowHelper(180, 2) +
	        " L" + arrowHelper(183, 10) +
	        " L" + arrowHelper(180, 18) +
	        " L" + arrowHelper(180, 14) +
	        " A" + (graph.scaleVector(r)[0] + 10) + "," + (graph.scaleVector(r)[1] + 10) + ",0,0,1," + arrowHelper(170, 14) +
	        " L" + arrowHelper(170, 18) +
	        " L" + arrowHelper(167, 10) +
	        " L" + arrowHelper(170, 2) +
	        " L" + arrowHelper(170, 6) +
	        " A" + (graph.scaleVector(r)[0] + 10) + "," + (graph.scaleVector(r)[1] + 10) + ",0,0,0," + arrowHelper(180, 6) +
	        " Z"
	    ).attr({
	        "stroke": null,
	        "fill": KhanUtil.INTERACTIVE
	    });

	    // add it to the set so it translates with everything else
	    this.set.push(arrow);

	    this.centerPoint = graph.addMovablePoint({
	        coord: center,
	        visible: false
	    });

	    // Use a movablePoint for rotation
	    this.rotateHandle = graph.addMovablePoint({
	        coord: [
	            Math.sin(275 * Math.PI / 180) * (r + 0.5) + this.cx,
	            Math.cos(275 * Math.PI / 180) * (r + 0.5) + this.cy
	        ],
	        onMove: function(x, y) {
	            var angle = Math.atan2(pro.centerPoint.coord[1] - y, pro.centerPoint.coord[0] - x) * 180 / Math.PI;
	            pro.rotate(-angle - 5, true);
	        }
	    });

	    // Add a constraint so the point moves in a circle
	    this.rotateHandle.constraints.fixedDistance.dist = r + 0.5;
	    this.rotateHandle.constraints.fixedDistance.point = this.centerPoint;

	    // Remove the default dot added by the movablePoint since we have our double-arrow thing
	    this.rotateHandle.visibleShape.remove();
	    // Make the mouse target bigger to encompass the whole area around the double-arrow thing
	    this.rotateHandle.mouseTarget.attr({ scale: 2.0 });

	    // Make the arrow-thing grow and shrink with mouseover/out
	    var isDragging = false;
	    var isHovering = false;
	    var isHighlight = function() {
	        return isHovering || isDragging;
	    };

	    var self = this;
	    var $mouseTarget = $(self.rotateHandle.mouseTarget.getMouseTarget());
	    $mouseTarget.bind("vmousedown", function(event) {
	        isDragging = true;
	        arrow.animate({ scale: 1.5, fill: KhanUtil.INTERACTING }, 50);

	        $(document).bind("vmouseup.rotateHandle", function(event) {
	            isDragging = false;

	            if (!isHighlight()) {
	                arrow.animate({ scale: 1.0, fill: KhanUtil.INTERACTIVE }, 50);
	            }

	            $(document).unbind("vmouseup.rotateHandle");
	        });
	    });

	    $mouseTarget.bind("vmouseover", function(event) {
	        isHovering = true;
	        arrow.animate({ scale: 1.5, fill: KhanUtil.INTERACTING }, 50);
	    });
	    $mouseTarget.bind("vmouseout", function(event) {
	        isHovering = false;
	        if (!isHighlight()) {
	            arrow.animate({ scale: 1.0, fill: KhanUtil.INTERACTIVE }, 50);
	        }
	    });

	    var setNodes = $.map(this.set, function(el) { return el.node; });
	    this.makeTranslatable = function makeTranslatable() {
	        $(setNodes).css("cursor", "move");

	        $(setNodes).bind("vmousedown", function(event) {
	            event.preventDefault();
	            var startx = event.pageX - $(graph.raphael.canvas.parentNode).offset().left;
	            var starty = event.pageY - $(graph.raphael.canvas.parentNode).offset().top;

	            $(document).bind("vmousemove.protractor", function(event) {
	                // mouse{X|Y} are in pixels relative to the SVG
	                var mouseX = event.pageX - $(graph.raphael.canvas.parentNode).offset().left;
	                var mouseY = event.pageY - $(graph.raphael.canvas.parentNode).offset().top;
	                // can't go beyond 10 pixels from the edge
	                mouseX = Math.max(10, Math.min(graph.xpixels - 10, mouseX));
	                mouseY = Math.max(10, Math.min(graph.ypixels - 10, mouseY));

	                var dx = mouseX - startx;
	                var dy = mouseY - starty;

	                $.each(pro.set.items, function() {
	                    this.translate(dx, dy);
	                });
	                pro.centerPoint.setCoord([pro.centerPoint.coord[0] + dx / graph.scale[0], pro.centerPoint.coord[1] - dy / graph.scale[1]]);
	                pro.rotateHandle.setCoord([pro.rotateHandle.coord[0] + dx / graph.scale[0], pro.rotateHandle.coord[1] - dy / graph.scale[1]]);
	                startx = mouseX;
	                starty = mouseY;
	            });

	            $(document).one("vmouseup", function(event) {
	                $(document).unbind("vmousemove.protractor");
	            });
	        });
	    };


	    this.rotation = 0;

	    this.rotate = function(offset, absolute) {
	        var center = graph.scalePoint(this.centerPoint.coord);

	        if (absolute) {
	            this.rotation = 0;
	        }

	        this.set.rotate(this.rotation + offset, center[0], center[1]);
	        this.rotation = this.rotation + offset;

	        return this;
	    };

	    this.moveTo = function moveTo(x, y) {
	        var start = graph.scalePoint(pro.centerPoint.coord);
	        var end = graph.scalePoint([x, y]);
	        var time = KhanUtil.getDistance(start, end) * 2;  // 2ms per pixel

	        $({ x: start[0], y: start[1] }).animate({ x: end[0], y: end[1] }, {
	            duration: time,
	            step: function(now, fx) {
	                var dx = 0;
	                var dy = 0;
	                if (fx.prop === "x") {
	                    dx = now - graph.scalePoint(pro.centerPoint.coord)[0];
	                } else if (fx.prop === "y") {
	                    dy = now - graph.scalePoint(pro.centerPoint.coord)[1];
	                }
	                $.each(pro.set.items, function() {
	                    this.translate(dx, dy);
	                });
	                pro.centerPoint.setCoord([pro.centerPoint.coord[0] + dx / graph.scale[0], pro.centerPoint.coord[1] - dy / graph.scale[1]]);
	                pro.rotateHandle.setCoord([pro.rotateHandle.coord[0] + dx / graph.scale[0], pro.rotateHandle.coord[1] - dy / graph.scale[1]]);
	            }
	        });
	    };

	    this.rotateTo = function rotateTo(angle) {
	        if (Math.abs(this.rotation - angle) > 180) {
	            this.rotation += 360;
	        }
	        var time = Math.abs(this.rotation - angle) * 5;  // 5ms per deg
	        $({ 0: this.rotation }).animate({ 0: angle }, {
	            duration: time,
	            step: function(now, fx) {
	                pro.rotate(now, true);
	                pro.rotateHandle.setCoord([
	                    Math.sin((now + 275) * Math.PI / 180) * (r + 0.5) + pro.centerPoint.coord[0],
	                    Math.cos((now + 275) * Math.PI / 180) * (r + 0.5) + pro.centerPoint.coord[1]
	                ]);
	            }
	        });
	    };

	    this.remove = function() {
	        this.set.remove();
	    };

	    this.makeTranslatable();
	    return this;
	}

	function Ruler(graphie, options) {
	    _.defaults(options, {
	        center: [0, 0],
	        pixelsPerUnit: 40,
	        ticksPerUnit: 10,   // 10 or power of 2
	        units: 10,          // the length the ruler can measure
	        label: "",          // e.g "cm" (the shorter, the better)
	        style: {
	            fill: null,
	            stroke: KhanUtil.GRAY
	        }
	    });

	    var light = _.extend({}, options.style, {strokeWidth: 1});
	    var bold  = _.extend({}, options.style, {strokeWidth: 2});

	    // Ruler dimensions in pixels
	    var width = options.units * options.pixelsPerUnit;
	    var height = 50;        // arbitrary, but looks good

	    // Bottom left corner of the ruler in graphie units
	    var leftBottom = graphie.unscalePoint(
	        kvector.subtract(
	            graphie.scalePoint(options.center),
	            kvector.scale([width, -height], 0.5)
	        )
	    );

	    var graphieUnitsPerUnit = options.pixelsPerUnit / graphie.scale[0];
	    var graphieUnitsHeight = height / graphie.scale[0];

	    // Top right corner of the ruler in graphie units
	    var rightTop = kvector.add(
	        leftBottom,
	        [options.units * graphieUnitsPerUnit, graphieUnitsHeight]
	    );

	    var tickHeight = 1.0;   // percent of ruler height
	    var tickHeightMap;      // mapping of tick frequency to tick height
	                            // {n: h} means every n-th tick will have height h

	    if (options.ticksPerUnit === 10) {
	        // decimal, as on a centimeter ruler
	        tickHeightMap = {
	            10: tickHeight,
	            5:  tickHeight * 0.55,
	            1:  tickHeight * 0.35
	        };
	    } else {
	        // powers of 2, as on an inch ruler
	        var sizes = [1, 0.6, 0.45, 0.3];

	        tickHeightMap = {};
	        for (var i = options.ticksPerUnit; i >= 1; i /= 2) {
	            tickHeightMap[i] = tickHeight * (sizes.shift() || 0.2);
	        }
	    }

	    var tickFrequencies = _.keys(tickHeightMap).sort(function(a, b) {
	        return b - a;
	    });

	    function getTickHeight(i) {
	        for (var k = 0; k < tickFrequencies.length; k++) {
	            var key = tickFrequencies[k];
	            if (i % key === 0) {
	                return tickHeightMap[key];
	            }
	        }
	    }

	    // Draw the ruler
	    var left = leftBottom[0];
	    var bottom = leftBottom[1];
	    var right = rightTop[0];
	    var top = rightTop[1];

	    var numTicks = options.units * options.ticksPerUnit + 1;

	    var set = graphie.raphael.set();

	    var px = 1 / graphie.scale[0]; // one pixel
	    set.push(graphie.line([left - px, bottom], [right + px, bottom], bold));
	    set.push(graphie.line([left - px, top], [right + px, top], bold));

	    _.times(numTicks, function(i) {
	        var n = i / options.ticksPerUnit;
	        var x = left + n * graphieUnitsPerUnit;
	        var height = getTickHeight(i) * graphieUnitsHeight;

	        var style = (i === 0 || i === numTicks - 1) ? bold : light;
	        set.push(graphie.line([x, bottom], [x, bottom + height], style));

	        if (n % 1 === 0) {
	            // Graphie labels are difficult to rotate in IE8,
	            // so use raphael.text() instead
	            var coord = graphie.scalePoint([x, top]);
	            var text;
	            var offset;

	            if (n === 0) {
	                // Unit label
	                text = options.label;
	                offset = {
	                    mm: 13,
	                    cm: 11,
	                    m: 8,
	                    km: 11,
	                    in: 8,
	                    ft: 8,
	                    yd: 10,
	                    mi: 10
	                }[text] || (3 * text.toString().length);
	            } else {
	                // Tick label
	                text = n;
	                offset = -3 * (n.toString().length + 1);
	            }
	            var label = graphie.raphael.text(
	                coord[0] + offset,
	                coord[1] + 10,
	                text
	            );
	            label.attr({
	                "font-family": "KaTeX_Main",
	                "font-size": "12px",
	                "color": "#444"
	            });
	            set.push(label);
	        }
	    });

	    // Add a mouse target
	    var mouseTarget = graphie.mouselayer.path(KhanUtil.svgPath([
	        leftBottom, [left, top], rightTop, [right, bottom], /* closed */ true
	    ]));
	    mouseTarget.attr({
	        fill: "#000",
	        opacity: 0,
	        stroke: "#000",
	        "stroke-width": 2
	    });
	    set.push(mouseTarget);

	    var setNodes = $.map(set, function(el) { return el.node; });
	    $(setNodes).css("cursor", "move");

	    $(setNodes).bind("vmousedown", function(event) {
	        event.preventDefault();
	        var startx = event.pageX - $(graphie.raphael.canvas.parentNode).offset().left;
	        var starty = event.pageY - $(graphie.raphael.canvas.parentNode).offset().top;

	        $(document).bind("vmousemove.ruler", function(event) {
	            // mouse{X|Y} are in pixels relative to the SVG
	            var mouseX = event.pageX - $(graphie.raphael.canvas.parentNode).offset().left;
	            var mouseY = event.pageY - $(graphie.raphael.canvas.parentNode).offset().top;
	            // can't go beyond 10 pixels from the edge
	            mouseX = Math.max(10, Math.min(graphie.xpixels - 10, mouseX));
	            mouseY = Math.max(10, Math.min(graphie.ypixels - 10, mouseY));

	            var dx = mouseX - startx;
	            var dy = mouseY - starty;

	            set.translate(dx, dy);
	            leftBottomHandle.setCoord([leftBottomHandle.coord[0] + dx / graphie.scale[0], leftBottomHandle.coord[1] - dy / graphie.scale[1]]);
	            rightBottomHandle.setCoord([rightBottomHandle.coord[0] + dx / graphie.scale[0], rightBottomHandle.coord[1] - dy / graphie.scale[1]]);

	            startx = mouseX;
	            starty = mouseY;
	        });

	        $(document).one("vmouseup", function(event) {
	            $(document).unbind("vmousemove.ruler");
	        });
	    });

	    // Handles for rotation
	    var leftBottomHandle = graphie.addMovablePoint({
	        coord: leftBottom,
	        normalStyle: {
	            fill: KhanUtil.INTERACTIVE,
	            "fill-opacity": 0,
	            stroke: KhanUtil.INTERACTIVE
	        },
	        highlightStyle: {
	            fill: KhanUtil.INTERACTING,
	            "fill-opacity": 0.1,
	            stroke: KhanUtil.INTERACTING
	        },
	        pointSize: 6, // or 8 maybe?
	        onMove: function(x, y) {
	            var dy = rightBottomHandle.coord[1] - y;
	            var dx = rightBottomHandle.coord[0] - x;
	            var angle = Math.atan2(dy, dx) * 180 / Math.PI;
	            var center = kvector.scale(kvector.add([x, y], rightBottomHandle.coord), 0.5);
	            var scaledCenter = graphie.scalePoint(center);
	            var oldCenter = kvector.scale(kvector.add(leftBottomHandle.coord, rightBottomHandle.coord), 0.5);
	            var scaledOldCenter = graphie.scalePoint(oldCenter);
	            var diff = kvector.subtract(scaledCenter, scaledOldCenter);
	            set.rotate(-angle, scaledOldCenter[0], scaledOldCenter[1]);
	            set.translate(diff[0], diff[1]);
	        }
	    });
	    var rightBottomHandle = graphie.addMovablePoint({
	        coord: [right, bottom],
	        normalStyle: {
	            fill: KhanUtil.INTERACTIVE,
	            "fill-opacity": 0,
	            stroke: KhanUtil.INTERACTIVE
	        },
	        highlightStyle: {
	            fill: KhanUtil.INTERACTING,
	            "fill-opacity": 0.1,
	            stroke: KhanUtil.INTERACTING
	        },
	        pointSize: 6, // or 8 maybe?
	        onMove: function(x, y) {
	            var dy = y - leftBottomHandle.coord[1];
	            var dx = x - leftBottomHandle.coord[0];
	            var angle = Math.atan2(dy, dx) * 180 / Math.PI;
	            var center = kvector.scale(kvector.add([x, y], leftBottomHandle.coord), 0.5);
	            var scaledCenter = graphie.scalePoint(center);
	            var oldCenter = kvector.scale(kvector.add(leftBottomHandle.coord, rightBottomHandle.coord), 0.5);
	            var scaledOldCenter = graphie.scalePoint(oldCenter);
	            var diff = kvector.subtract(scaledCenter, scaledOldCenter);
	            set.rotate(-angle, scaledOldCenter[0], scaledOldCenter[1]);
	            set.translate(diff[0], diff[1]);
	        }
	    });

	    // Make each handle rotate the ruler about the other one
	    leftBottomHandle.constraints.fixedDistance.dist = width / graphie.scale[0];
	    leftBottomHandle.constraints.fixedDistance.point = rightBottomHandle;
	    rightBottomHandle.constraints.fixedDistance.dist = width / graphie.scale[0];
	    rightBottomHandle.constraints.fixedDistance.point = leftBottomHandle;

	    this.remove = function() {
	        set.remove();
	        leftBottomHandle.remove();
	        rightBottomHandle.remove();
	    };

	    return this;
	}

	function MovableAngle(graphie, options) {
	    this.graphie = graphie;

	    // TODO(alex): Move standard colors from math.js to somewhere else
	    // so that they are available when this file is first parsed
	    _.extend(this, options);
	    _.defaults(this, {
	        normalStyle: {
	            "stroke": KhanUtil.INTERACTIVE,
	            "stroke-width": 2,
	            "fill": KhanUtil.INTERACTIVE
	        },
	        highlightStyle: {
	            "stroke": KhanUtil.INTERACTING,
	            "stroke-width": 2,
	            "fill": KhanUtil.INTERACTING
	        },
	        labelStyle: {
	            "stroke": KhanUtil.DYNAMIC,
	            "stroke-width": 1,
	            "color": KhanUtil.DYNAMIC
	        },
	        angleStyle: {
	            "stroke": KhanUtil.DYNAMIC,
	            "stroke-width": 1,
	            "color": KhanUtil.DYNAMIC
	        },
	        allowReflex: true // not on MovableAngle.prototype so that
	                          // it is not overridden by undefined
	    });

	    if (!this.points || this.points.length !== 3) {
	        throw new Error("MovableAngle requires 3 points");
	    }

	    // Handle coordinates that are not MovablePoints (i.e. [2, 4])
	    this.points = _.map(options.points, function(point) {
	        if (_.isArray(point)) {
	            return graphie.addMovablePoint({
	                coord: point,
	                visible: false,
	                constraints: {
	                    fixed: true
	                },
	                normalStyle: this.normalStyle
	            });
	        } else {
	            return point;
	        }
	    }, this);
	    this.coords = _.pluck(this.points, "coord");
	    if (this.reflex == null) {
	        if (this.allowReflex) {
	            this.reflex = (this._getClockwiseAngle(this.coords) > 180);
	        } else {
	            this.reflex = false;
	        }
	    }

	    this.rays = _.map([0, 2], function(i) {
	        return graphie.addMovableLineSegment({
	            pointA: this.points[1],
	            pointZ: this.points[i],
	            fixed: true,
	            extendRay: true
	        });
	    }, this);

	    this.temp = [];
	    this.labeledAngle = graphie.label([0, 0], "", "center", this.labelStyle);

	    if (!this.fixed) {
	        this.addMoveHandlers();
	        this.addHighlightHandlers();
	    }
	    this.update();
	}

	_.extend(MovableAngle.prototype, {
	    points: [],
	    snapDegrees: 0,
	    snapOffsetDeg: 0,
	    angleLabel: "",
	    numArcs: 1,
	    pushOut: 0,
	    fixed: false,

	    addMoveHandlers: function() {
	        var graphie = this.graphie;

	        function tooClose(point1, point2) {
	            // Vertex and ray points can't be closer than this many pixels
	            var safeDistance = 30;
	            var distance = KhanUtil.getDistance(
	                graphie.scalePoint(point1),
	                graphie.scalePoint(point2)
	            );
	            return distance < safeDistance;
	        }

	        var points = this.points;

	        // Drag the vertex to move the entire angle
	        points[1].onMove = function(x, y) {
	            var oldVertex = points[1].coord;
	            var newVertex = [x, y];
	            var delta = addPoints(newVertex, reverseVector(oldVertex));

	            var valid = true;
	            var newPoints = {};
	            _.each([0, 2], function(i) {
	                var oldPoint = points[i].coord;
	                var newPoint = addPoints(oldPoint, delta);

	                // Constrain ray points to stay the same angle from vertex
	                var angle = KhanUtil.findAngle(newVertex, newPoint);
	                angle *= Math.PI / 180;
	                newPoint = graphie.constrainToBoundsOnAngle(newPoint, 10, angle);
	                newPoints[i] = newPoint;

	                if (tooClose(newVertex, newPoint)) {
	                    valid = false;
	                }
	            });

	            // Only move points if all new positions are valid
	            if (valid) {
	                _.each(newPoints, function(newPoint, i) {
	                    points[i].setCoord(newPoint);
	                });
	            }
	            return valid;
	        };

	        var snap = this.snapDegrees;
	        var snapOffset = this.snapOffsetDeg;

	        // Drag ray control points to move each ray individually
	        _.each([0, 2], function(i) {
	            points[i].onMove = function(x, y) {
	                var newPoint = [x, y];
	                var vertex = points[1].coord;

	                if (tooClose(vertex, newPoint)) {
	                    return false;
	                } else if (snap) {
	                    var angle = KhanUtil.findAngle(newPoint, vertex);
	                    angle = Math.round((angle - snapOffset) / snap) * snap +
	                            snapOffset;
	                    var distance = KhanUtil.getDistance(newPoint, vertex);
	                    return addPoints(vertex, graphie.polar(distance, angle));
	                } else {
	                    return true;
	                }
	            };
	        });

	        // Expose only a single move event
	        $(points).on("move", function() {
	            this.update();
	            $(this).trigger("move");
	        }.bind(this));
	    },

	    addHighlightHandlers: function() {
	        var vertex = this.points[1];

	        vertex.onHighlight = function() {
	            _.each(this.points, function(point) {
	                point.visibleShape.animate(this.highlightStyle, 50);
	            }, this);
	            _.each(this.rays, function(ray) {
	                ray.visibleLine.animate(this.highlightStyle, 50);
	                ray.arrowStyle = _.extend({}, ray.arrowStyle, {
	                    "color": this.highlightStyle.stroke,
	                    "stroke": this.highlightStyle.stroke
	                });
	            }, this);

	            this.angleStyle = _.extend({}, this.angleStyle, {
	                "color": this.highlightStyle.stroke,
	                "stroke": this.highlightStyle.stroke
	            });
	            this.update();

	        }.bind(this);

	        vertex.onUnhighlight = function() {
	            _.each(this.points, function(point) {
	                point.visibleShape.animate(this.normalStyle, 50);
	            }, this);
	            _.each(this.rays, function(ray) {
	                ray.visibleLine.animate(ray.normalStyle, 50);
	                ray.arrowStyle = _.extend({}, ray.arrowStyle, {
	                    "color": ray.normalStyle.stroke,
	                    "stroke": ray.normalStyle.stroke
	                });
	            }, this);

	            this.angleStyle = _.extend({}, this.angleStyle, {
	                "color": KhanUtil.DYNAMIC,
	                "stroke": KhanUtil.DYNAMIC
	            });
	            this.update();

	        }.bind(this);
	    },

	    /**
	     * Returns the angle in [0, 360) degrees created by the
	     * coords when interpreted in a clockwise direction.
	     */
	    _getClockwiseAngle: function(coords) {
	        // TODO(jack): Add this to a kangle.js
	        var clockwiseAngle = (KhanUtil.findAngle(
	            // The order of these is "weird" to match what a clockwise
	            // order is in graphie.labelAngle
	            coords[2], // from the second point
	            coords[0], // clockwise to the first point
	            coords[1] // the vertex parameter is last
	        ) + 360) % 360;

	        return clockwiseAngle;
	    },

	    isReflex: function() {
	        return this.reflex;
	    },

	    isClockwise: function() {
	        var clockwiseReflexive = (this._getClockwiseAngle(this.coords) > 180);
	        return clockwiseReflexive === this.reflex;
	    },

	    getClockwiseCoords: function() {
	        if (this.isClockwise()) {
	            return _.clone(this.coords);
	        } else {
	            return _.clone(this.coords).reverse();
	        }
	    },

	    update: function(shouldChangeReflexivity) {
	        // Update coords
	        var prevCoords = this.coords;
	        this.coords = _.pluck(this.points, "coord");

	        // Update lines
	        _.invoke(this.points, "updateLineEnds");

	        var prevAngle = this._getClockwiseAngle(prevCoords);
	        var angle = this._getClockwiseAngle(this.coords);
	        var prevClockwiseReflexive = (prevAngle > 180);
	        var clockwiseReflexive = (angle > 180);

	        if (this.allowReflex) {
	            if (shouldChangeReflexivity == null) {
	                shouldChangeReflexivity =
	                        (prevClockwiseReflexive !== clockwiseReflexive) &&
	                        (Math.abs(angle - prevAngle) < 180);
	            }

	            if (shouldChangeReflexivity) {
	                this.reflex = !this.reflex;
	            }
	        }

	        _.invoke(this.temp, "remove");
	        this.temp = this.graphie.labelAngle({
	            point1: this.coords[0],
	            vertex: this.coords[1],
	            point3: this.coords[2],
	            label: this.labeledAngle,
	            text: this.angleLabel,
	            numArcs: this.numArcs,
	            pushOut: this.pushOut,
	            clockwise: this.reflex === clockwiseReflexive,
	            style: this.angleStyle
	        });
	    },

	    remove: function() {
	        _.invoke(this.rays, "remove");
	        _.invoke(this.temp, "remove");
	        this.labeledAngle.remove();
	    }
	});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
	* jQuery Mobile Framework : "mouse" plugin
	* Copyright (c) jQuery Project
	* Dual licensed under the MIT or GPL Version 2 licenses.
	* http://jquery.org/license
	*/

	// This plugin is an experiment for abstracting away the touch and mouse
	// events so that developers don't have to worry about which method of input
	// the device their document is loaded on supports.
	//
	// The idea here is to allow the developer to register listeners for the
	// basic mouse events, such as mousedown, mousemove, mouseup, and click,
	// and the plugin will take care of registering the correct listeners
	// behind the scenes to invoke the listener at the fastest possible time
	// for that device, while still retaining the order of event firing in
	// the traditional mouse environment, should multiple handlers be registered
	// on the same element for different events.
	//
	// The current version exposes the following virtual events to jQuery bind methods:
	// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

	(function( $, window, document, undefined ) {

	var dataPropertyName = "virtualMouseBindings",
		touchTargetPropertyName = "virtualTouchID",
		virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
		touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
		mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
		mouseEventProps = $.event.props.concat( mouseHookProps ),
		activeDocHandlers = {},
		resetTimerID = 0,
		startX = 0,
		startY = 0,
		didScroll = false,
		clickBlockList = [],
		blockMouseTriggers = false,
		blockTouchTriggers = false,
		eventCaptureSupported = "addEventListener" in document,
		$document = $( document ),
		nextTouchID = 1,
		lastTouchID = 0;

	$.vmouse = {
		moveDistanceThreshold: 10,
		clickDistanceThreshold: 10,
		resetTimerDuration: 1500
	};

	function getNativeEvent( event ) {

		while ( event && typeof event.originalEvent !== "undefined" ) {
			event = event.originalEvent;
		}
		return event;
	}

	function createVirtualEvent( event, eventType ) {

		var t = event.type,
			oe, props, ne, prop, ct, touch, i, j;

		event = $.Event(event);
		event.type = eventType;

		oe = event.originalEvent;
		props = $.event.props;

		// addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
		// https://github.com/jquery/jquery-mobile/issues/3280
		if ( t.search(/mouse/) >-1 ) {
			props = mouseEventProps;
		}

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( oe ) {
			for ( i = props.length, prop; i; ) {
				prop = props[ --i ];
				event[ prop ] = oe[ prop ];
			}
		}

		// make sure that if the mouse and click virtual events are generated
		// without a .which one is defined
		if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ){
			event.which = 1;
		}

		if ( t.search(/^touch/) !== -1 ) {
			ne = getNativeEvent( oe );
			t = ne.touches;
			ct = ne.changedTouches;
			touch = ( t && t.length ) ? t[0] : ( (ct && ct.length) ? ct[ 0 ] : undefined );

			if ( touch ) {
				for ( j = 0, len = touchEventProps.length; j < len; j++){
					prop = touchEventProps[ j ];
					event[ prop ] = touch[ prop ];
				}
			}
		}

		return event;
	}

	function getVirtualBindingFlags( element ) {

		var flags = {},
			b, k;

		while ( element ) {

			b = $.data( element, dataPropertyName );

			for (  k in b ) {
				if ( b[ k ] ) {
					flags[ k ] = flags.hasVirtualBinding = true;
				}
			}
			element = element.parentNode;
		}
		return flags;
	}

	function getClosestElementWithVirtualBinding( element, eventType ) {
		var b;
		while ( element ) {

			b = $.data( element, dataPropertyName );

			if ( b && ( !eventType || b[ eventType ] ) ) {
				return element;
			}
			element = element.parentNode;
		}
		return null;
	}

	function enableTouchBindings() {
		blockTouchTriggers = false;
	}

	function disableTouchBindings() {
		blockTouchTriggers = true;
	}

	function enableMouseBindings() {
		lastTouchID = 0;
		clickBlockList.length = 0;
		blockMouseTriggers = false;

		// When mouse bindings are enabled, our
		// touch bindings are disabled.
		disableTouchBindings();
	}

	function disableMouseBindings() {
		// When mouse bindings are disabled, our
		// touch bindings are enabled.
		enableTouchBindings();
	}

	function startResetTimer() {
		clearResetTimer();
		resetTimerID = setTimeout(function(){
			resetTimerID = 0;
			enableMouseBindings();
		}, $.vmouse.resetTimerDuration );
	}

	function clearResetTimer() {
		if ( resetTimerID ){
			clearTimeout( resetTimerID );
			resetTimerID = 0;
		}
	}

	function triggerVirtualEvent( eventType, event, flags ) {
		var ve;

		if ( ( flags && flags[ eventType ] ) ||
					( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

			ve = createVirtualEvent( event, eventType );

			$( event.target).trigger( ve );
		}

		return ve;
	}

	function mouseEventCallback( event ) {
		var touchID = $.data(event.target, touchTargetPropertyName);

		if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ){
			var ve = triggerVirtualEvent( "v" + event.type, event );
			if ( ve ) {
				if ( ve.isDefaultPrevented() ) {
					event.preventDefault();
				}
				if ( ve.isPropagationStopped() ) {
					event.stopPropagation();
				}
				if ( ve.isImmediatePropagationStopped() ) {
					event.stopImmediatePropagation();
				}
			}
		}
	}

	function handleTouchStart( event ) {

		var touches = getNativeEvent( event ).touches,
			target, flags;

		if ( touches && touches.length === 1 ) {

			target = event.target;
			flags = getVirtualBindingFlags( target );

			if ( flags.hasVirtualBinding ) {

				lastTouchID = nextTouchID++;
				$.data( target, touchTargetPropertyName, lastTouchID );

				clearResetTimer();

				disableMouseBindings();
				didScroll = false;

				var t = getNativeEvent( event ).touches[ 0 ];
				startX = t.pageX;
				startY = t.pageY;

				triggerVirtualEvent( "vmouseover", event, flags );
				triggerVirtualEvent( "vmousedown", event, flags );
			}
		}
	}

	function handleScroll( event ) {
		if ( blockTouchTriggers ) {
			return;
		}

		if ( !didScroll ) {
			triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
		}

		didScroll = true;
		startResetTimer();
	}

	function handleTouchMove( event ) {
		if ( blockTouchTriggers ) {
			return;
		}

		var t = getNativeEvent( event ).touches[ 0 ],
			didCancel = didScroll,
			moveThreshold = $.vmouse.moveDistanceThreshold;
			didScroll = didScroll ||
				( Math.abs(t.pageX - startX) > moveThreshold ||
					Math.abs(t.pageY - startY) > moveThreshold ),
			flags = getVirtualBindingFlags( event.target );

		if ( didScroll && !didCancel ) {
			triggerVirtualEvent( "vmousecancel", event, flags );
		}

		triggerVirtualEvent( "vmousemove", event, flags );
		startResetTimer();
	}

	function handleTouchEnd( event ) {
		if ( blockTouchTriggers ) {
			return;
		}

		disableTouchBindings();

		var flags = getVirtualBindingFlags( event.target ),
			t;
		triggerVirtualEvent( "vmouseup", event, flags );

		if ( !didScroll ) {
			var ve = triggerVirtualEvent( "vclick", event, flags );
			if ( ve && ve.isDefaultPrevented() ) {
				// The target of the mouse events that follow the touchend
				// event don't necessarily match the target used during the
				// touch. This means we need to rely on coordinates for blocking
				// any click that is generated.
				t = getNativeEvent( event ).changedTouches[ 0 ];
				clickBlockList.push({
					touchID: lastTouchID,
					x: t.clientX,
					y: t.clientY
				});

				// Prevent any mouse events that follow from triggering
				// virtual event notifications.
				blockMouseTriggers = true;
			}
		}
		triggerVirtualEvent( "vmouseout", event, flags);
		didScroll = false;

		startResetTimer();
	}

	function hasVirtualBindings( ele ) {
		var bindings = $.data( ele, dataPropertyName ),
			k;

		if ( bindings ) {
			for ( k in bindings ) {
				if ( bindings[ k ] ) {
					return true;
				}
			}
		}
		return false;
	}

	function dummyMouseHandler(){}

	function getSpecialEventObject( eventType ) {
		var realType = eventType.substr( 1 );

		return {
			setup: function( data, namespace ) {
				// If this is the first virtual mouse binding for this element,
				// add a bindings object to its data.

				if ( !hasVirtualBindings( this ) ) {
					$.data( this, dataPropertyName, {});
				}

				// If setup is called, we know it is the first binding for this
				// eventType, so initialize the count for the eventType to zero.
				var bindings = $.data( this, dataPropertyName );
				bindings[ eventType ] = true;

				// If this is the first virtual mouse event for this type,
				// register a global handler on the document.

				activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

				if ( activeDocHandlers[ eventType ] === 1 ) {
					$document.bind( realType, mouseEventCallback );
				}

				// Some browsers, like Opera Mini, won't dispatch mouse/click events
				// for elements unless they actually have handlers registered on them.
				// To get around this, we register dummy handlers on the elements.

				$( this ).bind( realType, dummyMouseHandler );

				// For now, if event capture is not supported, we rely on mouse handlers.
				if ( eventCaptureSupported ) {
					// If this is the first virtual mouse binding for the document,
					// register our touchstart handler on the document.

					activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

					if (activeDocHandlers[ "touchstart" ] === 1) {
						$document.bind( "touchstart", handleTouchStart )
							.bind( "touchend", handleTouchEnd )

							// On touch platforms, touching the screen and then dragging your finger
							// causes the window content to scroll after some distance threshold is
							// exceeded. On these platforms, a scroll prevents a click event from being
							// dispatched, and on some platforms, even the touchend is suppressed. To
							// mimic the suppression of the click event, we need to watch for a scroll
							// event. Unfortunately, some platforms like iOS don't dispatch scroll
							// events until *AFTER* the user lifts their finger (touchend). This means
							// we need to watch both scroll and touchmove events to figure out whether
							// or not a scroll happenens before the touchend event is fired.

							.bind( "touchmove", handleTouchMove )
							.bind( "scroll", handleScroll );
					}
				}
			},

			teardown: function( data, namespace ) {
				// If this is the last virtual binding for this eventType,
				// remove its global handler from the document.

				--activeDocHandlers[ eventType ];

				if ( !activeDocHandlers[ eventType ] ) {
					$document.unbind( realType, mouseEventCallback );
				}

				if ( eventCaptureSupported ) {
					// If this is the last virtual mouse binding in existence,
					// remove our document touchstart listener.

					--activeDocHandlers[ "touchstart" ];

					if ( !activeDocHandlers[ "touchstart" ] ) {
						$document.unbind( "touchstart", handleTouchStart )
							.unbind( "touchmove", handleTouchMove )
							.unbind( "touchend", handleTouchEnd )
							.unbind( "scroll", handleScroll );
					}
				}

				var $this = $( this ),
					bindings = $.data( this, dataPropertyName );

				// teardown may be called when an element was
				// removed from the DOM. If this is the case,
				// jQuery core may have already stripped the element
				// of any data bindings so we need to check it before
				// using it.
				if ( bindings ) {
					bindings[ eventType ] = false;
				}

				// Unregister the dummy event handler.

				$this.unbind( realType, dummyMouseHandler );

				// If this is the last virtual mouse binding on the
				// element, remove the binding data from the element.

				if ( !hasVirtualBindings( this ) ) {
					$this.removeData( dataPropertyName );
				}
			}
		};
	}

	// Expose our custom events to the jQuery bind/unbind mechanism.

	for ( var i = 0; i < virtualEventNames.length; i++ ){
		$.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
	}

	// Add a capture click handler to block clicks.
	// Note that we require event capture support for this so if the device
	// doesn't support it, we punt for now and rely solely on mouse events.
	if ( eventCaptureSupported ) {
		document.addEventListener( "click", function( e ){
			var cnt = clickBlockList.length,
				target = e.target,
				x, y, ele, i, o, touchID;

			if ( cnt ) {
				x = e.clientX;
				y = e.clientY;
				threshold = $.vmouse.clickDistanceThreshold;

				// The idea here is to run through the clickBlockList to see if
				// the current click event is in the proximity of one of our
				// vclick events that had preventDefault() called on it. If we find
				// one, then we block the click.
				//
				// Why do we have to rely on proximity?
				//
				// Because the target of the touch event that triggered the vclick
				// can be different from the target of the click event synthesized
				// by the browser. The target of a mouse/click event that is syntehsized
				// from a touch event seems to be implementation specific. For example,
				// some browsers will fire mouse/click events for a link that is near
				// a touch event, even though the target of the touchstart/touchend event
				// says the user touched outside the link. Also, it seems that with most
				// browsers, the target of the mouse/click event is not calculated until the
				// time it is dispatched, so if you replace an element that you touched
				// with another element, the target of the mouse/click will be the new
				// element underneath that point.
				//
				// Aside from proximity, we also check to see if the target and any
				// of its ancestors were the ones that blocked a click. This is necessary
				// because of the strange mouse/click target calculation done in the
				// Android 2.1 browser, where if you click on an element, and there is a
				// mouse/click handler on one of its ancestors, the target will be the
				// innermost child of the touched element, even if that child is no where
				// near the point of touch.

				ele = target;

				while ( ele ) {
					for ( i = 0; i < cnt; i++ ) {
						o = clickBlockList[ i ];
						touchID = 0;

						if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
									$.data( ele, touchTargetPropertyName ) === o.touchID ) {
							// XXX: We may want to consider removing matches from the block list
							//      instead of waiting for the reset timer to fire.
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}
					ele = ele.parentNode;
				}
			}
		}, true);
	}
	})( jQuery, window, document );


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, max-len, no-trailing-spaces, no-undef, no-var, space-infix-ops */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * Line Utils
	 * A line is an array of two points e.g. [[-5, 0], [5, 0]].
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var kpoint = __webpack_require__(3);
	var knumber = __webpack_require__(5);

	var kline = KhanUtil.kline = {

	    distanceToPoint: function(line, point) {
	        return kpoint.distanceToLine(point, line);
	    },

	    reflectPoint: function(line, point) {
	        return kpoint.reflectOverLine(point, line);
	    },

	    midpoint: function(line) {
	        return [
	            (line[0][0] + line[1][0]) / 2,
	            (line[0][1] + line[1][1]) / 2
	        ];
	    },

	    /**
	    * Tests if two lines are collinear.
	    * https://en.wikipedia.org/wiki/Collinearity
	    */
	    equal: function(line1, line2, tolerance) {
	        /**
	        * line1's points are trivially collinear.
	        * So check against each point in line2.
	        * Form a triangle of the points (line1 and a single point from line2)
	        * iff the area of the triangle is zero, are the points collinear
	        * http://mathworld.wolfram.com/Collinear.html
	        */
	        var x1 = line1[0][0];
	        var y1 = line1[0][1];
	        var x2 = line1[1][0];
	        var y2 = line1[1][1];
	        return _.every(line2, function(point) {
	            var x3 = point[0];
	            var y3 = point[1];
	            
	            //calculating area of triangle formed by the three points
	            //https://en.wikipedia.org/wiki/Shoelace_formula#Examples
	            //A = 1/2|x1*y2 + x2*y3 + x3*y1 - x2*y1 - x3*y2 - x1*y3|
	            var area = (1/2)*Math.abs(x1*y2 + x2*y3 + x3*y1 -
	                x2*y1 - x3*y2 - x1*y3);

	            return knumber.equal(area, 0, tolerance);
	        });
	    },

	    intersect: function(px, py, rx, ry, qx, qy, sx, sy) {
	        // Returns true is the line from (px, py) to (rx, ry) intersections the line (qx, qy) to (sx, sy)
	        // http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect/565282#565282
	        function cross(vx, vy, wx, wy) {
	            return vx * wy - vy * wx;
	        }

	        if (cross(rx, ry, sx, sy) === 0) {
	            return cross(qx - px, qy - py, rx, ry) === 0;
	        } else {
	            var t = cross(qx - px, qy - py, sx, sy) / cross(rx, ry, sx, sy);
	            var u = cross(qx - px, qy - py, rx, ry) / cross(rx, ry, sx, sy);
	            return 0 <= t && t <= 1 && 0 <= u && u <= 1;
	        }
	    }
	};

	return kline;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var WrappedDefaults = __webpack_require__(14);
	var kvector = __webpack_require__(4);

	var DEFAULT_OPTIONS = {
	    maxScale: 1,
	    mouselayer: false
	};

	var WrappedEllipse = function(graphie, center, radii, options) {
	    options = _.extend({}, DEFAULT_OPTIONS, options);

	    // Add `wrapper`, `visibleShape`, and remaining properties
	    _.extend(this, graphie.fixedEllipse(center, radii, options.maxScale), {
	        graphie: graphie,
	        initialPoint: center
	    });

	    // Add to appropriate graphie layer
	    if (options.mouselayer) {
	        this.graphie.addToMouseLayerWrapper(this.wrapper);
	    } else {
	        this.graphie.addToVisibleLayerWrapper(this.wrapper);
	    }
	};

	_.extend(WrappedEllipse.prototype,  {
	    animateTo: function(point, time, cb) {
	        var delta = kvector.subtract(
	            this.graphie.scalePoint(point),
	            this.graphie.scalePoint(this.initialPoint)
	        );
	        var do3dTransform = KhanUtil.getCanUse3dTransform();

	        // Animate with step function
	        var self = this;
	        var prevX = null;
	        var prevY = null;
	        $(this.wrapper).animate({
	            cx: delta[0],
	            cy: delta[1]
	        }, {
	            duration: time,
	            step: function(now, fx) {
	                prevX = (fx.prop === "cx" && now) ||
	                            (prevX != null && prevX) ||
	                            (fx.prop === "cx" && fx.start);
	                prevY = (fx.prop === "cy" && now) ||
	                            (prevY != null && prevY) ||
	                            (fx.prop === "cy" && fx.start);
	                var transformation = "translateX(" + prevX + "px) " +
	                                     "translateY(" + prevY + "px)" +
	                                     (do3dTransform ? " translateZ(0)" : "");
	                self.transform(transformation);

	                // Pass in unscaled coord for callback
	                var unscaledPoint = self.graphie.unscalePoint(kvector.add(
	                    self.graphie.scalePoint(self.initialPoint),
	                    [prevX, prevY]
	                ));
	                cb && cb(unscaledPoint);
	            }
	        });
	    }
	}, WrappedDefaults);

	return WrappedEllipse;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var, prefer-spread, space-before-function-paren */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var objective_ = __webpack_require__(15);
	var kvector = __webpack_require__(4);
	__webpack_require__(16);

	/*
	 * These functions, when called on the wrapped object, simply pass the
	 * arguments to the underlying Raphael object.
	 */
	var PASS_TO_RAPHAEL = [
	    "attr",
	    "animate"
	];

	var WrappedDefaults = _.extend({
	    transform: function(transformation) {
	        var prefixedTransform = KhanUtil.getPrefixedTransform();
	        this.wrapper.style[prefixedTransform] = transformation;
	    },

	    toFront: function () {
	        var parentNode = this.wrapper.parentNode;
	        // XXX(joel/emily/charlie)
	        if (parentNode) {
	            parentNode.appendChild(this.wrapper);
	        }
	    },

	    toBack: function () {
	        var parentNode = this.wrapper.parentNode;
	        if (parentNode.firstChild !== this.wrapper) {
	            parentNode.insertBefore(
	                this.wrapper,
	                parentNode.firstChild
	            );
	        }
	    },

	    remove: function() {
	        this.visibleShape.remove();
	        $(this.wrapper).remove();
	    },

	    getMouseTarget: function() {
	        return this.visibleShape[0];
	    },

	    moveTo: function(point) {
	        var delta = kvector.subtract(
	            this.graphie.scalePoint(point),
	            this.graphie.scalePoint(this.initialPoint)
	        );
	        var do3dTransform = KhanUtil.getCanUse3dTransform();
	        var transformation = "translateX(" + delta[0] + "px) " +
	                             "translateY(" + delta[1] + "px)" +
	                             (do3dTransform ? " translateZ(0)" : "");
	        this.transform(transformation);
	    },

	    hide: function() {
	        this.visibleShape.hide();
	    },

	    show: function() {
	        this.visibleShape.show();
	    }
	}, objective_.mapObjectFromArray(PASS_TO_RAPHAEL, function(attribute) {
	    return function() {
	        this.visibleShape[attribute].apply(this.visibleShape, arguments);
	    };
	}));

	return WrappedDefaults;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	/**
	 * A work-in-progress of _ methods for objects.
	 * That is, they take an object as a parameter,
	 * and return an object instead of an array.
	 *
	 * TODO(aria): Move this out of interactive2
	 */

	/**
	 * Does a pluck on keys inside objects in an object
	 *
	 * Ex:
	 * tools = {
	 *     translation: {
	 *         enabled: true
	 *     },
	 *     rotation: {
	 *         enabled: false
	 *     }
	 * };
	 * pluckObject(tools, "enabled") returns {
	 *     translation: true
	 *     rotation: false
	 * }
	 */
	var pluck = function(table, subKey) {
	    return _.object(_.map(table, function(value, key) {
	        return [key, value[subKey]];
	    }));
	};

	/**
	 * Maps an object to an object
	 *
	 * > mapObject({a: '1', b: '2'}, (value, key) => {
	 *       return value + 1;
	 *   });
	 * {a: 2, b: 3}
	 */
	var mapObject = function(obj, lambda) {
	    var result = {};
	    _.each(_.keys(obj), function(key) {
	        result[key] = lambda(obj[key], key);
	    });
	    return result;
	};

	/**
	 * Maps an array to an object
	 *
	 * > mapObjectFromArray(['a', 'b'], function(elem) {
	 *       return elem + elem;
	 *   });
	 * {a: 'aa', b: 'bb'}
	 */
	var mapObjectFromArray = function(arr, lambda) {
	    var result = {};
	    _.each(arr, function(elem) {
	        result[elem] = lambda(elem);
	    });
	    return result;
	};

	return {
	    pluck: pluck,
	    mapObject: mapObject,
	    mapObjectFromArray: mapObjectFromArray
	};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	/**
	 * Compute the correct vendor-prefixed `transform`.
	 */
	var prefixedTransform = null;
	function computePrefixedTransform() {
	    // Temporary element for testing prefix validity
	    var el = document.createElement("div");

	    var prefixes = ["transform", "msTransform", "MozTransform",
	        "WebkitTransform", "OTransform"];
	    var correctPrefix = null;
	    _.each(prefixes, function(prefix) {
	        if (typeof el.style[prefix] !== 'undefined') {
	            correctPrefix = prefix;
	        }
	    });
	    return correctPrefix;
	}

	/**
	 * Compute whether the browser can use 3d transforms by trying to use the
	 * translateZ transformation.
	 */
	var canUse3dTransform = null;
	function computeCanUse3dTransform() {
	    var el = document.createElement("div");

	    var prefix = KhanUtil.getPrefixedTransform();

	    el.style[prefix] = "translateZ(0px)";
	    return !!el.style[prefix];
	}

	$.extend(KhanUtil, {
	    /**
	     * Get the correct vendor-prefixed `transform`.
	     */
	    getPrefixedTransform: function() {
	        // Cache result to avoid re-computation
	        prefixedTransform = prefixedTransform || computePrefixedTransform();
	        return prefixedTransform;
	    },

	    /**
	     * Get whether the browser can use 3d transforms.
	     */
	    getCanUse3dTransform: function() {
	        if (canUse3dTransform == null) {
	            canUse3dTransform = computeCanUse3dTransform();
	        }
	        return canUse3dTransform;
	    }
	});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var WrappedDefaults = __webpack_require__(14);
	var kpoint = __webpack_require__(3);
	var kvector = __webpack_require__(4);
	__webpack_require__(16);

	var DEFAULT_OPTIONS = {
	    thickness: 2,
	    mouselayer: false
	};

	var WrappedLine = function(graphie, start, end, options) {
	    options = _.extend({}, DEFAULT_OPTIONS, options);

	    // Always make the line as large as possible and horizontal; this
	    // simplifies a lot of the transforms, e.g., we can rotate by exactly the
	    // angle of the argument points in `moveTo`.
	    var initialStart = [graphie.range[0][0], 0];
	    var initialEnd = [graphie.range[0][1], 0];

	    // Add `wrapper` and `visibleShape`
	    _.extend(this,
	        graphie.fixedLine(initialStart, initialEnd, options.thickness));

	    // Save properties for computing transformations
	    _.extend(this, {
	        graphie: graphie,
	        initialPoint: graphie.scalePoint(initialStart),
	        initialLength: kpoint.distanceToPoint(
	            graphie.scalePoint(initialStart),
	            graphie.scalePoint(initialEnd)
	        )
	    });

	    // Add to appropriate graphie layer
	    if (options.mouselayer) {
	        this.graphie.addToMouseLayerWrapper(this.wrapper);
	    } else {
	        this.graphie.addToVisibleLayerWrapper(this.wrapper);
	    }

	    // Move to argument points
	    this.moveTo(start, end);
	};

	_.extend(WrappedLine.prototype, WrappedDefaults, {
	    getMouseTarget: function() {
	        return this.wrapper;
	    },

	    moveTo: function(start, end) {
	        var scaledStart = this.graphie.scalePoint(start);
	        var scaledEnd = this.graphie.scalePoint(end);

	        // Compute transformation parameters
	        var polarDiff = kvector.polarDegFromCart(
	            kvector.subtract(
	                scaledEnd,
	                scaledStart
	            )
	        );
	        var lineLength = polarDiff[0];
	        var angle = KhanUtil.bound(polarDiff[1]);
	        var delta = kvector.subtract(scaledStart, this.initialPoint);
	        var scale = KhanUtil.bound(lineLength / this.initialLength);

	        // Construct and apply transformation string
	        var do3dTransform = KhanUtil.getCanUse3dTransform();
	        var transformation = "translateX(" + delta[0] + "px) " +
	                             "translateY(" + delta[1] + "px) " +
	                             (do3dTransform ? "translateZ(0) " : "") +
	                             "rotate(" + angle + "deg) " +
	                             "scaleX(" + scale + ") scaleY(1)";
	        this.transform(transformation);
	    }
	});

	return WrappedLine;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, indent, no-undef, no-var */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	/*
	 * This file was copied from Perseus and shouldn't be modified directly.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	var WrappedDefaults = __webpack_require__(14);

	var DEFAULT_OPTIONS = {
	    center: null, // gets ignored in `graphie.fixedPath` if `null`
	    createPath: null, // gets defaulted in `graphie.fixedPath` if `null`
	    mouselayer: false
	};

	var WrappedPath = function(graphie, points, options) {
	    options = _.extend({}, DEFAULT_OPTIONS, options);

	    // Add `wrapper` and `visibleShape`
	    _.extend(this, graphie.fixedPath(points, options.center,
	        options.createPath));

	    // Add remaining properties
	    _.extend(this, {
	        graphie: graphie,
	        initialPoint: graphie.scalePoint(_.head(points))
	    });

	    // Add to appropriate graphie layer
	    if (options.mouselayer) {
	        this.graphie.addToMouseLayerWrapper(this.wrapper);
	    } else {
	        this.graphie.addToVisibleLayerWrapper(this.wrapper);
	    }
	};

	_.extend(WrappedPath.prototype, WrappedDefaults);

	return WrappedPath;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
	/* eslint-disable comma-dangle, comma-spacing, indent, max-len, no-constant-condition, no-redeclare, no-undef, no-var, one-var, prefer-spread, space-infix-ops */
	/* To fix, remove an entry above, run ka-lint, and fix errors. */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	// Minify Raphael ourselves because IE8 has a problem with the 1.5.2 minified release
	// http://groups.google.com/group/raphaeljs/browse_thread/thread/c34c75ad8d431544
	__webpack_require__(20);
	var knumber = __webpack_require__(5);

	$.extend(KhanUtil, {

	    // Simplify formulas before display
	    cleanMath: function(expr) {
	        return typeof expr === "string" ?
	            expr.replace(/\+\s*-/g, "- ")
	                .replace(/-\s*-/g, "+ ")
	                .replace(/\^1/g, "") :
	            expr;
	    },

	    // A simple random number picker
	    // Returns a random int in [0, num)
	    rand: function(num) {
	        return Math.floor(num * KhanUtil.random());
	    },

	    /* Returns an array of the digits of a nonnegative integer in reverse
	     * order: digits(376) = [6, 7, 3] */
	    digits: function(n) {
	        if (n === 0) {
	            return [0];
	        }

	        var list = [];

	        while (n > 0) {
	            list.push(n % 10);
	            n = Math.floor(n / 10);
	        }

	        return list;
	    },

	    // Similar to above digits, but in original order (not reversed)
	    integerToDigits: function(n) {
	        return KhanUtil.digits(n).reverse();
	    },

	    // Convert a decimal number into an array of digits (reversed)
	    decimalDigits: function(n) {
	        var str = "" + Math.abs(n);
	        str = str.replace(".", "");

	        var list = [];
	        for (var i = str.length; i > 0; i--) {
	            list.push(str.charAt(i-1));
	        }

	        return list;
	    },

	    // Find number of digits after the decimal place
	    decimalPlaces: function(n) {
	        var str = "" + Math.abs(n);
	        str = str.split(".");

	        if (str.length === 1) {
	            return 0;
	        } else {
	            return str[1].length;
	        }
	    },

	    digitsToInteger: function(digits) {
	        var place = Math.floor(Math.pow(10, digits.length - 1));
	        var number = 0;

	        $.each(digits, function(index, digit) {
	            number += digit * place;
	            place /= 10;
	        });

	        return number;
	    },

	    padDigitsToNum: function(digits, num) {
	        digits = digits.slice(0);
	        while (digits.length < num) {
	            digits.push(0);
	        }
	        return digits;
	    },

	    placesLeftOfDecimal: [i18n._("one"), i18n._("ten"), i18n._("hundred"),
	        i18n._("thousand")],
	    placesRightOfDecimal: [i18n._("one"), i18n._("tenth"), i18n._("hundredth"),
	        i18n._("thousandth"),i18n._("ten thousandth")],

	    powerToPlace: function(power) {
	        if (power < 0) {
	            return KhanUtil.placesRightOfDecimal[-1 * power];
	        } else {
	            return KhanUtil.placesLeftOfDecimal[power];
	        }
	    },


	    //Adds 0.001 because of floating points uncertainty so it errs on the side of going further away from 0
	    roundTowardsZero: function(x) {
	        if (x < 0) {
	            return Math.ceil(x - 0.001);
	        }
	        return Math.floor(x + 0.001);
	    },

	    // Bound a number by 1e-6 and 1e20 to avoid exponents after toString
	    bound: function(num) {
	        if (num === 0) {
	            return num;
	        } else if (num < 0) {
	            return -KhanUtil.bound(-num);
	        } else {
	            return Math.max(1e-6, Math.min(num, 1e20));
	        }
	    },

	    factorial: function(x) {
	        if (x <= 1) {
	            return x;
	        } else {
	            return x * KhanUtil.factorial(x - 1);
	        }
	    },

	    getGCD: function(a, b) {
	        if (arguments.length > 2) {
	            var rest = [].slice.call(arguments, 1);
	            return KhanUtil.getGCD(a, KhanUtil.getGCD.apply(KhanUtil, rest));
	        } else {
	            var mod;

	            a = Math.abs(a);
	            b = Math.abs(b);

	            while (b) {
	                mod = a % b;
	                a = b;
	                b = mod;
	            }

	            return a;
	        }
	    },

	    getLCM: function(a, b) {
	        if (arguments.length > 2) {
	            var rest = [].slice.call(arguments, 1);
	            return KhanUtil.getLCM(a, KhanUtil.getLCM.apply(KhanUtil, rest));
	        } else {
	            return Math.abs(a * b) / KhanUtil.getGCD(a, b);
	        }
	    },

	    primes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
	        47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],

	    denominators: [2, 3, 4, 5, 6, 8, 10, 12, 100],
	    smallDenominators: [2, 3, 4, 5, 6, 8, 10, 12],

	    getPrime: function() {
	        return KhanUtil.primes[KhanUtil.rand(KhanUtil.primes.length)];
	    },

	    isPrime: function(n) {
	        if (n <= 1) {
	            return false;
	        } else if (n < 101) {
	            return !!$.grep(KhanUtil.primes, function(p, i) {
	                return Math.abs(p - n) <= 0.5;
	            }).length;
	        } else {
	            if (n <= 1 || n > 2 && n % 2 === 0) {
	                return false;
	            } else {
	                for (var i = 3, sqrt = Math.sqrt(n); i <= sqrt; i += 2) {
	                    if (n % i === 0) {
	                        return false;
	                    }
	                }
	            }

	            return true;
	        }

	    },

	    isOdd: function(n) {
	        return n % 2 === 1;
	    },

	    isEven: function(n) {
	        return n % 2 === 0;
	    },

	    getOddComposite: function(min, max) {
	        if (min === undefined) {
	            min = 0;
	        }

	        if (max === undefined) {
	            max = 100;
	        }

	        var oddComposites = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55];
	        oddComposites = oddComposites.concat([57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99]);

	        var result = -1;
	        while (result < min || result > max) {
	            result = oddComposites[KhanUtil.rand(oddComposites.length)];
	        }
	        return result;
	    },

	    getEvenComposite: function(min, max) {
	        if (min === undefined) {
	            min = 0;
	        }

	        if (max === undefined) {
	            max = 100;
	        }

	        var evenComposites = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
	        evenComposites = evenComposites.concat([28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]);
	        evenComposites = evenComposites.concat([50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72]);
	        evenComposites = evenComposites.concat([74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98]);

	        var result = -1;
	        while (result < min || result > max) {
	            result = evenComposites[KhanUtil.rand(evenComposites.length)];
	        }
	        return result;
	    },

	    getComposite: function() {
	        if (KhanUtil.randRange(0, 1)) {
	            return KhanUtil.getEvenComposite();
	        } else {
	            return KhanUtil.getOddComposite();
	        }
	    },

	    getPrimeFactorization: function(number) {
	        if (number === 1) {
	            return [];
	        } else if (KhanUtil.isPrime(number)) {
	            return [number];
	        }

	        var maxf = Math.sqrt(number);
	        for (var f = 2; f <= maxf; f++) {
	            if (number % f === 0) {
	                return $.merge(KhanUtil.getPrimeFactorization(f), KhanUtil.getPrimeFactorization(number / f));
	            }
	        }
	    },

	    getFactors: function(number) {
	        var factors = [],
	            ins = function(n) {
	                if (_(factors).indexOf(n) === -1) {
	                    factors.push(n);
	                }
	            };

	        var maxf2 = number;
	        for (var f = 1; f * f <= maxf2; f++) {
	            if (number % f === 0) {
	                ins(f);
	                ins(number / f);
	            }
	        }
	        return KhanUtil.sortNumbers(factors);
	    },

	    // Get a random factor of a composite number which is not 1 or that number
	    getNontrivialFactor: function(number) {
	        var factors = KhanUtil.getFactors(number);
	        return factors[KhanUtil.randRange(1, factors.length - 2)];
	    },

	    getMultiples: function(number, upperLimit) {
	        var multiples = [];
	        for (var i = 1; i * number <= upperLimit; i++) {
	            multiples.push(i * number);
	        }
	        return multiples;
	    },

	    // splitRadical(24) gives [2, 6] to mean 2 sqrt(6)
	    splitRadical: function(n) {
	        if (n === 0) {
	            return [0, 1];
	        }

	        var coefficient = 1;
	        var radical = n;

	        for (var i = 2; i * i <= n; i++) {
	            while (radical % (i * i) === 0) {
	                radical /= i * i;
	                coefficient *= i;
	            }
	        }

	        return [coefficient, radical];
	    },

	    // splitCube(24) gives [2, 3] to mean 2 cube_root(3)
	    splitCube: function(n) {
	        if (n === 0) {
	            return [0, 1];
	        }

	        var coefficient = 1;
	        var radical = n;

	        for (var i = 2; i * i * i <= n; i++) {
	            while (radical % (i * i * i) === 0) {
	                radical /= i * i * i;
	                coefficient *= i;
	            }
	        }

	        return [coefficient, radical];
	    },

	    // randRange(min, max) - Get a random integer between min and max, inclusive
	    // randRange(min, max, count) - Get count random integers
	    // randRange(min, max, rows, cols) - Get a rows x cols matrix of random integers
	    // randRange(min, max, x, y, z) - You get the point...
	    randRange: function(min, max) {
	        var dimensions = [].slice.call(arguments, 2);

	        if (dimensions.length === 0) {
	            return Math.floor(KhanUtil.rand(max - min + 1)) + min;
	        } else {
	            var args = [min, max].concat(dimensions.slice(1));
	            return $.map(new Array(dimensions[0]), function() {
	                return [KhanUtil.randRange.apply(null, args)];
	            });
	        }
	    },

	    // Get an array of unique random numbers between min and max
	    randRangeUnique: function(min, max, count) {
	        if (count == null) {
	            return KhanUtil.randRange(min, max);
	        } else {
	            var toReturn = [];
	            for (var i = min; i <= max; i++) {
	                toReturn.push(i);
	            }

	            return KhanUtil.shuffle(toReturn, count);
	        }
	    },

	    // Get an array of unique random numbers between min and max,
	    // that ensures that none of the integers in the array are 0.
	    randRangeUniqueNonZero: function(min, max, count) {
	        if (count == null) {
	            return KhanUtil.randRangeNonZero(min, max);
	        } else {
	            var toReturn = [];
	            for (var i = min; i <= max; i++) {
	                if (i === 0) {
	                    continue;
	                }
	                toReturn.push(i);
	            }

	            return KhanUtil.shuffle(toReturn, count);
	        }
	    },

	    // Get a random integer between min and max with a perc chance of hitting
	    // target (which is assumed to be in the range, but it doesn't have to be).
	    randRangeWeighted: function(min, max, target, perc) {
	        if (KhanUtil.random() < perc || (target === min && target === max)) {
	            return target;
	        } else {
	            return KhanUtil.randRangeExclude(min, max, [target]);
	        }
	    },

	    // Get a random integer between min and max that is never any of the values
	    // in the excludes array.
	    randRangeExclude: function(min, max, excludes) {
	        var result;

	        do {
	            result = KhanUtil.randRange(min, max);
	        } while (_(excludes).indexOf(result) !== -1);

	        return result;
	    },

	    // Get a random integer between min and max with a perc chance of hitting
	    // target (which is assumed to be in the range, but it doesn't have to be).
	    // It never returns any of the values in the excludes array.
	    randRangeWeightedExclude: function(min, max, target, perc, excludes) {
	        var result;

	        do {
	            result = KhanUtil.randRangeWeighted(min, max, target, perc);
	        } while (_(excludes).indexOf(result) !== -1);

	        return result;
	    },

	    // From limits_1
	    randRangeNonZero: function(min, max) {
	        return KhanUtil.randRangeExclude(min, max, [0]);
	    },

	    // Returns a random member of the given array
	    // If a count is passed, it gives an array of random members of the given array
	    randFromArray: function(arr, count) {
	        if (count == null) {
	            return arr[KhanUtil.rand(arr.length)];
	        } else {
	            return $.map(new Array(count), function() {
	                return KhanUtil.randFromArray(arr);
	            });
	        }
	    },

	    // Returns a random member of the given array that is never any of the values
	    // in the excludes array.
	    randFromArrayExclude: function(arr, excludes) {
	        var cleanArr = [];
	        for (var i = 0; i < arr.length; i++) {
	            if (_(excludes).indexOf(arr[i]) === -1) {
	                cleanArr.push(arr[i]);
	            }
	        }
	        return KhanUtil.randFromArray(cleanArr);
	    },

	    // Round a number to the nearest increment
	    // E.g., if increment = 30 and num = 40, return 30. if increment = 30 and num = 45, return 60.
	    roundToNearest: function(increment, num) {
	        return Math.round(num / increment) * increment;
	    },

	    // Round a number to a certain number of decimal places
	    roundTo: function(precision, num) {
	        var factor = Math.pow(10, precision).toFixed(5);
	        return Math.round((num * factor).toFixed(5)) / factor;
	    },

	    /**
	     * Return a string of num rounded to a fixed precision decimal places,
	     * with an approx symbol if num had to be rounded, and trailing 0s
	     */
	    toFixedApprox: function(num, precision) {
	        // TODO(jack): Make this locale-dependent like
	        // KhanUtil.localeToFixed
	        var fixedStr = num.toFixed(precision);
	        if (knumber.equal(+fixedStr, num)) {
	            return fixedStr;
	        } else {
	            return "\\approx " + fixedStr;
	        }
	    },

	    /**
	     * Return a string of num rounded to precision decimal places, with an
	     * approx symbol if num had to be rounded, but no trailing 0s if it was
	     * not rounded.
	     */
	    roundToApprox: function(num, precision) {
	        var fixed = KhanUtil.roundTo(precision, num);
	        if (knumber.equal(fixed, num)) {
	            return String(fixed);
	        } else {
	            return KhanUtil.toFixedApprox(num, precision);
	        }
	    },

	    floorTo: function(precision, num) {
	        var factor = Math.pow(10, precision).toFixed(5);
	        return Math.floor((num * factor).toFixed(5)) / factor;
	    },

	    ceilTo: function(precision, num) {
	        var factor = Math.pow(10, precision).toFixed(5);
	        return Math.ceil((num * factor).toFixed(5)) / factor;
	    },

	    // toFraction(4/8) => [1, 2]
	    // toFraction(0.666) => [333, 500]
	    // toFraction(0.666, 0.001) => [2, 3]
	    //
	    // tolerance can't be bigger than 1, sorry
	    toFraction: function(decimal, tolerance) {
	        if (tolerance == null) {
	            tolerance = Math.pow(2, -46);
	        }

	        if (decimal < 0 || decimal > 1) {
	            var fract = decimal % 1;
	            fract += (fract < 0 ? 1 : 0);

	            var nd = KhanUtil.toFraction(fract, tolerance);
	            nd[0] += Math.round(decimal - fract) * nd[1];
	            return nd;
	        } else if (Math.abs(Math.round(Number(decimal)) - decimal) <= tolerance) {
	            return [Math.round(decimal), 1];
	        } else {
	            var loN = 0, loD = 1, hiN = 1, hiD = 1, midN = 1, midD = 2;

	            while (1) {
	                if (Math.abs(Number(midN / midD) - decimal) <= tolerance) {
	                    return [midN, midD];
	                } else if (midN / midD < decimal) {
	                    loN = midN;
	                    loD = midD;
	                } else {
	                    hiN = midN;
	                    hiD = midD;
	                }

	                midN = loN + hiN;
	                midD = loD + hiD;
	            }
	        }
	    },

	    // Returns the format (string) of a given numeric string
	    // Note: purposively more inclusive than answer-types' predicate.forms
	    // That is, it is not necessarily true that interpreted input are numeric
	    getNumericFormat: function(text) {
	        text = $.trim(text);
	        text = text.replace(/\u2212/, "-").replace(/([+-])\s+/g, "$1");
	        if (text.match(/^[+-]?\d+$/)) {
	            return "integer";
	        } else if (text.match(/^[+-]?\d+\s+\d+\s*\/\s*\d+$/)) {
	            return "mixed";
	        }
	        var fraction = text.match(/^[+-]?(\d+)\s*\/\s*(\d+)$/);
	        if (fraction) {
	            return parseFloat(fraction[1]) > parseFloat(fraction[2]) ?
	                    "improper" : "proper";
	        } else if (text.replace(/[,. ]/g, "").match(/^\d+$/)) {
	            return "decimal";
	        } else if (text.match(/(pi?|\u03c0|t(?:au)?|\u03c4|pau)/)) {
	            return "pi";
	        } else {
	            return null;
	        }
	    },


	    // Returns a string of the number in a specified format
	    toNumericString: function(number, format) {
	        if (number == null) {
	            return "";
	        } else if (number === 0) {
	            return "0"; // otherwise it might end up as 0% or 0pi
	        }

	        if (format === "percent") {
	            return number * 100 + "%";
	        }

	        if (format === "pi") {
	            var fraction = knumber.toFraction(number / Math.PI);
	            var numerator = Math.abs(fraction[0]), denominator = fraction[1];
	            if (knumber.isInteger(numerator)) {
	                var sign = number < 0 ? "-" : "";
	                var pi = "\u03C0";
	                return sign + (numerator === 1 ? "" : numerator) + pi +
	                    (denominator === 1 ? "" : "/" + denominator);
	            }
	        }

	        if (_(["proper", "improper", "mixed", "fraction"]).contains(format)) {
	            var fraction = knumber.toFraction(number);
	            var numerator = Math.abs(fraction[0]), denominator = fraction[1];
	            var sign = number < 0 ? "-" : "";
	            if (denominator === 1) {
	                return sign + numerator; // for integers, irrational, d > 1000
	            } else if (format === "mixed") {
	                var modulus = numerator % denominator;
	                var integer = (numerator - modulus) / denominator;
	                return sign + (integer ? integer + " " : "") +
	                        modulus + "/" + denominator;
	            } // otherwise proper, improper, or fraction
	            return sign + numerator + "/" + denominator;
	        }

	        // otherwise (decimal, float, long long)
	        return String(number);
	    },

	    // Shuffle an array using a Fischer-Yates shuffle
	    // If count is passed, returns an random sublist of that size
	    shuffle: function(array, count) {
	        array = [].slice.call(array, 0);
	        var beginning = typeof count === "undefined" || count > array.length ? 0 : array.length - count;

	        for (var top = array.length; top > beginning; top--) {
	            var newEnd = Math.floor(KhanUtil.random() * top),
	                tmp = array[newEnd];

	            array[newEnd] = array[top - 1];
	            array[top - 1] = tmp;
	        }

	        return array.slice(beginning);
	    },

	    sortNumbers: function(array) {
	        return array.slice(0).sort(function(a, b) {
	            return a - b;
	        });
	    },

	    // From limits_1
	    truncate_to_max: function(num, digits) {
	        return parseFloat(num.toFixed(digits));
	    },

	    // Checks if a number or string representation thereof is an integer
	    isInt: function(num) {
	        return parseFloat(num) === parseInt(num, 10) && !isNaN(num);
	    },


	    /**
	     * Add LaTeX color markup to a given value.
	     */
	    colorMarkup: function(val, color) {
	        return "\\color{" + color + "}{" + val + "}";
	    },

	    /**
	     * Like _.contains except using _.isEqual to verify if item is present.
	     * (Works for lists of non-primitive values.)
	     */
	    contains: function(list, item) {
	        return _.any(list, function(elem) {
	            if (_.isEqual(item, elem)) {
	                return true;
	            }
	            return false;
	        });
	    },

	    BLUE: "#6495ED",
	    ORANGE: "#FFA500",
	    PINK: "#FF00AF",
	    GREEN: "#28AE7B",
	    PURPLE: "#9D38BD",
	    RED: "#DF0030",
	    GRAY: "gray",
	    BLACK: "black",
	    LIGHT_BLUE: "#9AB8ED",
	    LIGHT_ORANGE: "#EDD19B",
	    LIGHT_PINK: "#ED9BD3",
	    LIGHT_GREEN: "#9BEDCE",
	    LIGHT_PURPLE: "#DA9BED",
	    LIGHT_RED: "#ED9AAC",
	    LIGHT_GRAY: "#ED9B9B",
	    LIGHT_BLACK: "#ED9B9B",
	    GRAY10: "#D6D6D6",
	    GRAY20: "#CDCDCD",
	    GRAY30: "#B3B3B3",
	    GRAY40: "#9A9A9A",
	    GRAY50: "#808080",
	    GRAY60: "#666666",
	    GRAY70: "#4D4D4D",
	    GRAY80: "#333333",
	    GRAY90: "#1A1A1A",
	    BLUE_A: "#C7E9F1",
	    BLUE_B: "#9CDCEB",
	    BLUE_C: "#58C4DD",
	    BLUE_D: "#29ABCA",
	    BLUE_E: "#1C758A",
	    TEAL_A: "#ACEAD7",
	    TEAL_B: "#76DDC0",
	    TEAL_C: "#5CD0B3",
	    TEAL_D: "#55C1A7",
	    TEAL_E: "#49A88F",
	    GREEN_A: "#C9E2AE",
	    GREEN_B: "#A6CF8C",
	    GREEN_C: "#83C167",
	    GREEN_D: "#77B05D",
	    GREEN_E: "#699C52",
	    GOLD_A: "#F7C797",
	    GOLD_B: "#F9B775",
	    GOLD_C: "#F0AC5F",
	    GOLD_D: "#E1A158",
	    GOLD_E: "#C78D46",
	    RED_A: "#F7A1A3",
	    RED_B: "#FF8080",
	    RED_C: "#FC6255",
	    RED_D: "#E65A4C",
	    RED_E: "#CF5044",
	    MAROON_A: "#ECABC1",
	    MAROON_B: "#EC92AB",
	    MAROON_C: "#C55F73",
	    MAROON_D: "#A24D61",
	    MAROON_E: "#94424F",
	    PURPLE_A: "#CAA3E8",
	    PURPLE_B: "#B189C6",
	    PURPLE_C: "#9A72AC",
	    PURPLE_D: "#715582",
	    PURPLE_E: "#644172",
	    MINT_A: "#F5F9E8",
	    MINT_B: "#EDF2DF",
	    MINT_C: "#E0E5CC",
	    GRAY_A: "#FDFDFD",
	    GRAY_B: "#F7F7F7",
	    GRAY_C: "#EEEEEE",
	    GRAY_D: "#DDDDDD",
	    GRAY_E: "#CCCCCC",
	    GRAY_F: "#AAAAAA",
	    GRAY_G: "#999999",
	    GRAY_H: "#555555",
	    GRAY_I: "#333333",
	    KA_BLUE: "#314453",
	    KA_GREEN: "#639B24",
	    // Don't actually use _BACKGROUND! Make things transparent instead. The
	    // background color used in exercises is subject to change at the whim
	    // of fickle designers.
	    _BACKGROUND: "#FDFDFD"  // TODO(eater): Get rid of this altogether.
	});

	// For consistent coloring throughout Perseus
	$.extend(KhanUtil, {
	    INTERACTING: KhanUtil.ORANGE,
	    INTERACTIVE: KhanUtil.ORANGE,
	    DYNAMIC: KhanUtil.BLUE
	});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports) {

	/*!
	 * Raphael 1.5.2 - JavaScript Vector Library
	 *
	 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
	 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
	 */
	(function () {
	    var setAttr;
	    if ("".trim) {
	        setAttr = function(node, att, value) {
	            node.setAttribute(att, String(value).trim());
	        };
	    } else {
	        setAttr = function(node, att, value) {
	            node.setAttribute(att, String(value));
	        };
	    }
	    function R() {
	        if (R.is(arguments[0], array)) {
	            var a = arguments[0],
	                cnv = create[apply](R, a.splice(0, 3 + R.is(a[0], nu))),
	                res = cnv.set();
	            for (var i = 0, ii = a[length]; i < ii; i++) {
	                var j = a[i] || {};
	                elements[has](j.type) && res[push](cnv[j.type]().attr(j));
	            }
	            return res;
	        }
	        return create[apply](R, arguments);
	    }
	    R.version = "1.5.2";
	    var separator = /[, ]+/,
	        elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
	        formatrg = /\{(\d+)\}/g,
	        proto = "prototype",
	        has = "hasOwnProperty",
	        doc = document,
	        win = window,
	        oldRaphael = {
	            was: Object[proto][has].call(win, "Raphael"),
	            is: win.Raphael
	        },
	        Paper = function () {
	            this.customAttributes = {};
	        },
	        paperproto,
	        appendChild = "appendChild",
	        apply = "apply",
	        concat = "concat",
	        supportsTouch = "createTouch" in doc,
	        E = "",
	        S = " ",
	        Str = String,
	        split = "split",
	        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[split](S),
	        touchMap = {
	            mousedown: "touchstart",
	            mousemove: "touchmove",
	            mouseup: "touchend"
	        },
	        join = "join",
	        length = "length",
	        lowerCase = Str[proto].toLowerCase,
	        math = Math,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        pow = math.pow,
	        PI = math.PI,
	        nu = "number",
	        string = "string",
	        array = "array",
	        toString = "toString",
	        fillString = "fill",
	        objectToString = Object[proto][toString],
	        paper = {},
	        push = "push",
	        ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
	        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
	        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
	        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	        round = math.round,
	        toFloat = parseFloat,
	        toInt = parseInt,
	        ms = " progid:DXImageTransform.Microsoft",
	        upperCase = Str[proto].toUpperCase,
	        availableAttrs = {blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", opacity: 1, path: "M0,0", r: 0, rotation: 0, rx: 0, ry: 0, scale: "1 1", src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", translation: "0 0", width: 0, x: 0, y: 0},
	        availableAnimAttrs = {along: "along", blur: nu, "clip-rect": "csv", cx: nu, cy: nu, fill: "colour", "fill-opacity": nu, "font-size": nu, height: nu, opacity: nu, path: "path", r: nu, rotation: "csv", rx: nu, ry: nu, scale: "csv", stroke: "colour", "stroke-opacity": nu, "stroke-width": nu, translation: "csv", width: nu, x: nu, y: nu},
	        rp = "replace",
	        animKeyFrames= /^(from|to|\d+%?)$/,
	        commaSpaces = /\s*,\s*/,
	        hsrg = {hs: 1, rg: 1},
	        p2s = /,?([achlmqrstvxz]),?/gi,
	        pathCommand = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
	        pathValues = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,
	        radial_gradient = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
	        sortByKey = function (a, b) {
	            return a.key - b.key;
	        };

	    R.type = (win.SVGAngle || doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
	    if (R.type == "VML") {
	        var d = doc.createElement("div"),
	            b;
	        d.innerHTML = '<v:shape adj="1"/>';
	        b = d.firstChild;
	        b.style.behavior = "url(#default#VML)";
	        if (!(b && typeof b.adj == "object")) {
	            return R.type = null;
	        }
	        d = null;
	    }
	    R.svg = !(R.vml = R.type == "VML");
	    Paper[proto] = R[proto];
	    paperproto = Paper[proto];
	    R._id = 0;
	    R._oid = 0;
	    R.fn = {};
	    R.is = function (o, type) {
	        type = lowerCase.call(type);
	        if (type == "finite") {
	            return !isnan[has](+o);
	        }
	        return  (type == "null" && o === null) ||
	                (type == typeof o) ||
	                (type == "object" && o === Object(o)) ||
	                (type == "array" && Array.isArray && Array.isArray(o)) ||
	                objectToString.call(o).slice(8, -1).toLowerCase() == type;
	    };
	    R.angle = function (x1, y1, x2, y2, x3, y3) {
	        if (x3 == null) {
	            var x = x1 - x2,
	                y = y1 - y2;
	            if (!x && !y) {
	                return 0;
	            }
	            return ((x < 0) * 180 + math.atan(-y / -x) * 180 / PI + 360) % 360;
	        } else {
	            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
	        }
	    };
	    R.rad = function (deg) {
	        return deg % 360 * PI / 180;
	    };
	    R.deg = function (rad) {
	        return rad * 180 / PI % 360;
	    };
	    R.snapTo = function (values, value, tolerance) {
	        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
	        if (R.is(values, array)) {
	            var i = values.length;
	            while (i--) if (abs(values[i] - value) <= tolerance) {
	                return values[i];
	            }
	        } else {
	            values = +values;
	            var rem = value % values;
	            if (rem < tolerance) {
	                return value - rem;
	            }
	            if (rem > values - tolerance) {
	                return value - rem + values;
	            }
	        }
	        return value;
	    };
	    function createUUID() {
	        // http://www.ietf.org/rfc/rfc4122.txt
	        var s = [],
	            i = 0;
	        for (; i < 32; i++) {
	            s[i] = (~~(math.random() * 16))[toString](16);
	        }
	        s[12] = 4;  // bits 12-15 of the time_hi_and_version field to 0010
	        s[16] = ((s[16] & 3) | 8)[toString](16);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
	        return "r-" + s[join]("");
	    }

	    R.setWindow = function (newwin) {
	        win = newwin;
	        doc = win.document;
	    };
	    // colour utilities
	    var toHex = function (color) {
	        if (R.vml) {
	            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
	            var trim = /^\s+|\s+$/g;
	            var bod;
	            try {
	                var docum = new ActiveXObject("htmlfile");
	                docum.write("<body>");
	                docum.close();
	                bod = docum.body;
	            } catch(e) {
	                bod = createPopup().document.body;
	            }
	            var range = bod.createTextRange();
	            toHex = cacher(function (color) {
	                try {
	                    bod.style.color = Str(color)[rp](trim, E);
	                    var value = range.queryCommandValue("ForeColor");
	                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
	                    return "#" + ("000000" + value[toString](16)).slice(-6);
	                } catch(e) {
	                    return "none";
	                }
	            });
	        } else {
	            var i = doc.createElement("i");
	            i.title = "Rapha\xebl Colour Picker";
	            i.style.display = "none";
	            doc.body[appendChild](i);
	            toHex = cacher(function (color) {
	                i.style.color = color;
	                return doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	            });
	        }
	        return toHex(color);
	    },
	    hsbtoString = function () {
	        return "hsb(" + [this.h, this.s, this.b] + ")";
	    },
	    hsltoString = function () {
	        return "hsl(" + [this.h, this.s, this.l] + ")";
	    },
	    rgbtoString = function () {
	        return this.hex;
	    };
	    R.hsb2rgb = function (h, s, b, o) {
	        if (R.is(h, "object") && "h" in h && "s" in h && "b" in h) {
	            b = h.b;
	            s = h.s;
	            h = h.h;
	            o = h.o;
	        }
	        return R.hsl2rgb(h, s, b / 2, o);
	    };
	    R.hsl2rgb = function (h, s, l, o) {
	        if (R.is(h, "object") && "h" in h && "s" in h && "l" in h) {
	            l = h.l;
	            s = h.s;
	            h = h.h;
	        }
	        if (h > 1 || s > 1 || l > 1) {
	            h /= 360;
	            s /= 100;
	            l /= 100;
	        }
	        var rgb = {},
	            channels = ["r", "g", "b"],
	            t2, t1, t3, r, g, b;
	        if (!s) {
	            rgb = {
	                r: l,
	                g: l,
	                b: l
	            };
	        } else {
	            if (l < .5) {
	                t2 = l * (1 + s);
	            } else {
	                t2 = l + s - l * s;
	            }
	            t1 = 2 * l - t2;
	            for (var i = 0; i < 3; i++) {
	                t3 = h + 1 / 3 * -(i - 1);
	                t3 < 0 && t3++;
	                t3 > 1 && t3--;
	                if (t3 * 6 < 1) {
	                    rgb[channels[i]] = t1 + (t2 - t1) * 6 * t3;
	                } else if (t3 * 2 < 1) {
	                    rgb[channels[i]] = t2;
	                } else if (t3 * 3 < 2) {
	                    rgb[channels[i]] = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	                } else {
	                    rgb[channels[i]] = t1;
	                }
	            }
	        }
	        rgb.r *= 255;
	        rgb.g *= 255;
	        rgb.b *= 255;
	        rgb.hex = "#" + (16777216 | rgb.b | (rgb.g << 8) | (rgb.r << 16)).toString(16).slice(1);
	        R.is(o, "finite") && (rgb.opacity = o);
	        rgb.toString = rgbtoString;
	        return rgb;
	    };
	    R.rgb2hsb = function (red, green, blue) {
	        if (green == null && R.is(red, "object") && "r" in red && "g" in red && "b" in red) {
	            blue = red.b;
	            green = red.g;
	            red = red.r;
	        }
	        if (green == null && R.is(red, string)) {
	            var clr = R.getRGB(red);
	            red = clr.r;
	            green = clr.g;
	            blue = clr.b;
	        }
	        if (red > 1 || green > 1 || blue > 1) {
	            red /= 255;
	            green /= 255;
	            blue /= 255;
	        }
	        var max = mmax(red, green, blue),
	            min = mmin(red, green, blue),
	            hue,
	            saturation,
	            brightness = max;
	        if (min == max) {
	            return {h: 0, s: 0, b: max, toString: hsbtoString};
	        } else {
	            var delta = (max - min);
	            saturation = delta / max;
	            if (red == max) {
	                hue = (green - blue) / delta;
	            } else if (green == max) {
	                hue = 2 + ((blue - red) / delta);
	            } else {
	                hue = 4 + ((red - green) / delta);
	            }
	            hue /= 6;
	            hue < 0 && hue++;
	            hue > 1 && hue--;
	        }
	        return {h: hue, s: saturation, b: brightness, toString: hsbtoString};
	    };
	    R.rgb2hsl = function (red, green, blue) {
	        if (green == null && R.is(red, "object") && "r" in red && "g" in red && "b" in red) {
	            blue = red.b;
	            green = red.g;
	            red = red.r;
	        }
	        if (green == null && R.is(red, string)) {
	            var clr = R.getRGB(red);
	            red = clr.r;
	            green = clr.g;
	            blue = clr.b;
	        }
	        if (red > 1 || green > 1 || blue > 1) {
	            red /= 255;
	            green /= 255;
	            blue /= 255;
	        }
	        var max = mmax(red, green, blue),
	            min = mmin(red, green, blue),
	            h,
	            s,
	            l = (max + min) / 2,
	            hsl;
	        if (min == max) {
	            hsl =  {h: 0, s: 0, l: l};
	        } else {
	            var delta = max - min;
	            s = l < .5 ? delta / (max + min) : delta / (2 - max - min);
	            if (red == max) {
	                h = (green - blue) / delta;
	            } else if (green == max) {
	                h = 2 + (blue - red) / delta;
	            } else {
	                h = 4 + (red - green) / delta;
	            }
	            h /= 6;
	            h < 0 && h++;
	            h > 1 && h--;
	            hsl = {h: h, s: s, l: l};
	        }
	        hsl.toString = hsltoString;
	        return hsl;
	    };
	    R._path2string = function () {
	        return this.join(",")[rp](p2s, "$1");
	    };
	    function cacher(f, scope, postprocessor) {
	        function newf() {
	            var arg = Array[proto].slice.call(arguments, 0),
	                args = arg[join]("\u25ba"),
	                cache = newf.cache = newf.cache || {},
	                count = newf.count = newf.count || [];
	            if (cache[has](args)) {
	                return postprocessor ? postprocessor(cache[args]) : cache[args];
	            }
	            count[length] >= 1e3 && delete cache[count.shift()];
	            count[push](args);
	            cache[args] = f[apply](scope, arg);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        return newf;
	    }

	    R.getRGB = cacher(function (colour) {
	        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	            return {r: -1, g: -1, b: -1, hex: "none", error: 1};
	        }
	        if (colour == "none") {
	            return {r: -1, g: -1, b: -1, hex: "none"};
	        }
	        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	        var res,
	            red,
	            green,
	            blue,
	            opacity,
	            t,
	            values,
	            rgb = colour.match(colourRegExp);
	        if (rgb) {
	            if (rgb[2]) {
	                blue = toInt(rgb[2].substring(5), 16);
	                green = toInt(rgb[2].substring(3, 5), 16);
	                red = toInt(rgb[2].substring(1, 3), 16);
	            }
	            if (rgb[3]) {
	                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	                green = toInt((t = rgb[3].charAt(2)) + t, 16);
	                red = toInt((t = rgb[3].charAt(1)) + t, 16);
	            }
	            if (rgb[4]) {
	                values = rgb[4][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            }
	            if (rgb[5]) {
	                values = rgb[5][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsb2rgb(red, green, blue, opacity);
	            }
	            if (rgb[6]) {
	                values = rgb[6][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsl2rgb(red, green, blue, opacity);
	            }
	            rgb = {r: red, g: green, b: blue};
	            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	            R.is(opacity, "finite") && (rgb.opacity = opacity);
	            return rgb;
	        }
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1};
	    }, R);
	    R.getColor = function (value) {
	        var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
	            rgb = this.hsb2rgb(start.h, start.s, start.b);
	        start.h += .075;
	        if (start.h > 1) {
	            start.h = 0;
	            start.s -= .2;
	            start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
	        }
	        return rgb.hex;
	    };
	    R.getColor.reset = function () {
	        delete this.start;
	    };
	    // path utilities
	    R.parsePathString = cacher(function (pathString) {
	        if (!pathString) {
	            return null;
	        }
	        var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0},
	            data = [];
	        if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
	            data = pathClone(pathString);
	        }
	        if (!data[length]) {
	            Str(pathString)[rp](pathCommand, function (a, b, c) {
	                var params = [],
	                    name = lowerCase.call(b);
	                c[rp](pathValues, function (a, b) {
	                    b && params[push](+b);
	                });
	                if (name == "m" && params[length] > 2) {
	                    data[push]([b][concat](params.splice(0, 2)));
	                    name = "l";
	                    b = b == "m" ? "l" : "L";
	                }
	                while (params[length] >= paramCounts[name]) {
	                    data[push]([b][concat](params.splice(0, paramCounts[name])));
	                    if (!paramCounts[name]) {
	                        break;
	                    }
	                }
	            });
	        }
	        data[toString] = R._path2string;
	        return data;
	    });
	    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            x = pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	            y = pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t * t * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t * t * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t * t * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t * t * (p2y - 2 * c2y + c1y),
	            ax = (1 - t) * p1x + t * c1x,
	            ay = (1 - t) * p1y + t * c1y,
	            cx = (1 - t) * c2x + t * p2x,
	            cy = (1 - t) * c2y + t * p2y,
	            alpha = (90 - math.atan((mx - nx) / (my - ny)) * 180 / PI);
	        (mx > nx || my < ny) && (alpha += 180);
	        return {x: x, y: y, m: {x: mx, y: my}, n: {x: nx, y: ny}, start: {x: ax, y: ay}, end: {x: cx, y: cy}, alpha: alpha};
	    };
	    var pathDimensions = cacher(function (path) {
	        if (!path) {
	            return {x: 0, y: 0, width: 0, height: 0};
	        }
	        path = path2curve(path);
	        var x = 0,
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path[length]; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X[push](x);
	                Y[push](y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X[concat](dim.min.x, dim.max.x);
	                Y = Y[concat](dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin[apply](0, X),
	            ymin = mmin[apply](0, Y);
	        return {
	            x: xmin,
	            y: ymin,
	            width: mmax[apply](0, X) - xmin,
	            height: mmax[apply](0, Y) - ymin
	        };
	    }),
	        pathClone = function (pathArray) {
	            var res = [];
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            for (var i = 0, ii = pathArray[length]; i < ii; i++) {
	                res[i] = [];
	                for (var j = 0, jj = pathArray[i][length]; j < jj; j++) {
	                    res[i][j] = pathArray[i][j];
	                }
	            }
	            res[toString] = R._path2string;
	            return res;
	        },
	        pathToRelative = cacher(function (pathArray) {
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = pathArray[0][1];
	                y = pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res[push](["M", x, y]);
	            }
	            for (var i = start, ii = pathArray[length]; i < ii; i++) {
	                var r = res[i] = [],
	                    pa = pathArray[i];
	                if (pa[0] != lowerCase.call(pa[0])) {
	                    r[0] = lowerCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "a":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] - x).toFixed(3);
	                            r[7] = +(pa[7] - y).toFixed(3);
	                            break;
	                        case "v":
	                            r[1] = +(pa[1] - y).toFixed(3);
	                            break;
	                        case "m":
	                            mx = pa[1];
	                            my = pa[2];
	                        default:
	                            for (var j = 1, jj = pa[length]; j < jj; j++) {
	                                r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                            }
	                    }
	                } else {
	                    r = res[i] = [];
	                    if (pa[0] == "m") {
	                        mx = pa[1] + x;
	                        my = pa[2] + y;
	                    }
	                    for (var k = 0, kk = pa[length]; k < kk; k++) {
	                        res[i][k] = pa[k];
	                    }
	                }
	                var len = res[i][length];
	                switch (res[i][0]) {
	                    case "z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "h":
	                        x += +res[i][len - 1];
	                        break;
	                    case "v":
	                        y += +res[i][len - 1];
	                        break;
	                    default:
	                        x += +res[i][len - 2];
	                        y += +res[i][len - 1];
	                }
	            }
	            res[toString] = R._path2string;
	            return res;
	        }, 0, pathClone),
	        pathToAbsolute = cacher(function (pathArray) {
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = +pathArray[0][1];
	                y = +pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res[0] = ["M", x, y];
	            }
	            for (var i = start, ii = pathArray[length]; i < ii; i++) {
	                var r = res[i] = [],
	                    pa = pathArray[i];
	                if (pa[0] != upperCase.call(pa[0])) {
	                    r[0] = upperCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "A":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] + x);
	                            r[7] = +(pa[7] + y);
	                            break;
	                        case "V":
	                            r[1] = +pa[1] + y;
	                            break;
	                        case "H":
	                            r[1] = +pa[1] + x;
	                            break;
	                        case "M":
	                            mx = +pa[1] + x;
	                            my = +pa[2] + y;
	                        default:
	                            for (var j = 1, jj = pa[length]; j < jj; j++) {
	                                r[j] = +pa[j] + ((j % 2) ? x : y);
	                            }
	                    }
	                } else {
	                    for (var k = 0, kk = pa[length]; k < kk; k++) {
	                        res[i][k] = pa[k];
	                    }
	                }
	                switch (r[0]) {
	                    case "Z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = res[i][res[i][length] - 2];
	                        my = res[i][res[i][length] - 1];
	                    default:
	                        x = res[i][res[i][length] - 2];
	                        y = res[i][res[i][length] - 1];
	                }
	            }
	            res[toString] = R._path2string;
	            return res;
	        }, null, pathClone),
	        l2c = function (x1, y1, x2, y2) {
	            return [x1, y1, x2, y2, x2, y2];
	        },
	        q2c = function (x1, y1, ax, ay, x2, y2) {
	            var _13 = 1 / 3,
	                _23 = 2 / 3;
	            return [
	                    _13 * x1 + _23 * ax,
	                    _13 * y1 + _23 * ay,
	                    _13 * x2 + _23 * ax,
	                    _13 * y2 + _23 * ay,
	                    x2,
	                    y2
	                ];
	        },
	        a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	            // for more information of where this math came from visit:
	            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	            var _120 = PI * 120 / 180,
	                rad = PI / 180 * (+angle || 0),
	                res = [],
	                xy,
	                rotate = cacher(function (x, y, rad) {
	                    var X = x * math.cos(rad) - y * math.sin(rad),
	                        Y = x * math.sin(rad) + y * math.cos(rad);
	                    return {x: X, y: Y};
	                });
	            if (!recursive) {
	                xy = rotate(x1, y1, -rad);
	                x1 = xy.x;
	                y1 = xy.y;
	                xy = rotate(x2, y2, -rad);
	                x2 = xy.x;
	                y2 = xy.y;
	                var cos = math.cos(PI / 180 * angle),
	                    sin = math.sin(PI / 180 * angle),
	                    x = (x1 - x2) / 2,
	                    y = (y1 - y2) / 2;
	                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	                if (h > 1) {
	                    h = math.sqrt(h);
	                    rx = h * rx;
	                    ry = h * ry;
	                }
	                var rx2 = rx * rx,
	                    ry2 = ry * ry,
	                    k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                        math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                    cx = k * rx * y / ry + (x1 + x2) / 2,
	                    cy = k * -ry * x / rx + (y1 + y2) / 2,
	                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	                f1 = x1 < cx ? PI - f1 : f1;
	                f2 = x2 < cx ? PI - f2 : f2;
	                f1 < 0 && (f1 = PI * 2 + f1);
	                f2 < 0 && (f2 = PI * 2 + f2);
	                if (sweep_flag && f1 > f2) {
	                    f1 = f1 - PI * 2;
	                }
	                if (!sweep_flag && f2 > f1) {
	                    f2 = f2 - PI * 2;
	                }
	            } else {
	                f1 = recursive[0];
	                f2 = recursive[1];
	                cx = recursive[2];
	                cy = recursive[3];
	            }
	            var df = f2 - f1;
	            if (abs(df) > _120) {
	                var f2old = f2,
	                    x2old = x2,
	                    y2old = y2;
	                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	                x2 = cx + rx * math.cos(f2);
	                y2 = cy + ry * math.sin(f2);
	                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	            }
	            df = f2 - f1;
	            var c1 = math.cos(f1),
	                s1 = math.sin(f1),
	                c2 = math.cos(f2),
	                s2 = math.sin(f2),
	                t = math.tan(df / 4),
	                hx = 4 / 3 * rx * t,
	                hy = 4 / 3 * ry * t,
	                m1 = [x1, y1],
	                m2 = [x1 + hx * s1, y1 - hy * c1],
	                m3 = [x2 + hx * s2, y2 - hy * c2],
	                m4 = [x2, y2];
	            m2[0] = 2 * m1[0] - m2[0];
	            m2[1] = 2 * m1[1] - m2[1];
	            if (recursive) {
	                return [m2, m3, m4][concat](res);
	            } else {
	                res = [m2, m3, m4][concat](res)[join]()[split](",");
	                var newres = [];
	                for (var i = 0, ii = res[length]; i < ii; i++) {
	                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	                }
	                return newres;
	            }
	        },
	        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	            var t1 = 1 - t;
	            return {
	                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	            };
	        },
	        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
	                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
	                c = p1x - c1x,
	                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                y = [p1y, p2y],
	                x = [p1x, p2x],
	                dot;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x[push](dot.x);
	                y[push](dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x[push](dot.x);
	                y[push](dot.y);
	            }
	            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
	            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
	            c = p1y - c1y;
	            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x[push](dot.x);
	                y[push](dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x[push](dot.x);
	                y[push](dot.y);
	            }
	            return {
	                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
	                max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
	            };
	        }),
	        path2curve = cacher(function (path, path2) {
	            var p = pathToAbsolute(path),
	                p2 = path2 && pathToAbsolute(path2),
	                attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                processPath = function (path, d) {
	                    var nx, ny;
	                    if (!path) {
	                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                    }
	                    !(path[0] in {T:1, Q:1}) && (d.qx = d.qy = null);
	                    switch (path[0]) {
	                        case "M":
	                            d.X = path[1];
	                            d.Y = path[2];
	                            break;
	                        case "A":
	                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
	                            break;
	                        case "S":
	                            nx = d.x + (d.x - (d.bx || d.x));
	                            ny = d.y + (d.y - (d.by || d.y));
	                            path = ["C", nx, ny][concat](path.slice(1));
	                            break;
	                        case "T":
	                            d.qx = d.x + (d.x - (d.qx || d.x));
	                            d.qy = d.y + (d.y - (d.qy || d.y));
	                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                            break;
	                        case "Q":
	                            d.qx = path[1];
	                            d.qy = path[2];
	                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                            break;
	                        case "L":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
	                            break;
	                        case "H":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
	                            break;
	                        case "V":
	                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
	                            break;
	                        case "Z":
	                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
	                            break;
	                    }
	                    return path;
	                },
	                fixArc = function (pp, i) {
	                    if (pp[i][length] > 7) {
	                        pp[i].shift();
	                        var pi = pp[i];
	                        while (pi[length]) {
	                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
	                        }
	                        pp.splice(i, 1);
	                        ii = mmax(p[length], p2 && p2[length] || 0);
	                    }
	                },
	                fixM = function (path1, path2, a1, a2, i) {
	                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                        path2.splice(i, 0, ["M", a2.x, a2.y]);
	                        a1.bx = 0;
	                        a1.by = 0;
	                        a1.x = path1[i][1];
	                        a1.y = path1[i][2];
	                        ii = mmax(p[length], p2 && p2[length] || 0);
	                    }
	                };
	            for (var i = 0, ii = mmax(p[length], p2 && p2[length] || 0); i < ii; i++) {
	                p[i] = processPath(p[i], attrs);
	                fixArc(p, i);
	                p2 && (p2[i] = processPath(p2[i], attrs2));
	                p2 && fixArc(p2, i);
	                fixM(p, p2, attrs, attrs2, i);
	                fixM(p2, p, attrs2, attrs, i);
	                var seg = p[i],
	                    seg2 = p2 && p2[i],
	                    seglen = seg[length],
	                    seg2len = p2 && seg2[length];
	                attrs.x = seg[seglen - 2];
	                attrs.y = seg[seglen - 1];
	                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	                attrs2.x = p2 && seg2[seg2len - 2];
	                attrs2.y = p2 && seg2[seg2len - 1];
	            }
	            return p2 ? [p, p2] : p;
	        }, null, pathClone),
	        parseDots = cacher(function (gradient) {
	            var dots = [];
	            for (var i = 0, ii = gradient[length]; i < ii; i++) {
	                var dot = {},
	                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
	                dot.color = R.getRGB(par[1]);
	                if (dot.color.error) {
	                    return null;
	                }
	                dot.color = dot.color.hex;
	                par[2] && (dot.offset = par[2] + "%");
	                dots[push](dot);
	            }
	            for (i = 1, ii = dots[length] - 1; i < ii; i++) {
	                if (!dots[i].offset) {
	                    var start = toFloat(dots[i - 1].offset || 0),
	                        end = 0;
	                    for (var j = i + 1; j < ii; j++) {
	                        if (dots[j].offset) {
	                            end = dots[j].offset;
	                            break;
	                        }
	                    }
	                    if (!end) {
	                        end = 100;
	                        j = ii;
	                    }
	                    end = toFloat(end);
	                    var d = (end - start) / (j - i + 1);
	                    for (; i < j; i++) {
	                        start += d;
	                        dots[i].offset = start + "%";
	                    }
	                }
	            }
	            return dots;
	        }),
	        getContainer = function (x, y, w, h) {
	            var container;
	            if (R.is(x, string) || R.is(x, "object")) {
	                container = R.is(x, string) ? doc.getElementById(x) : x;
	                if (container.tagName) {
	                    if (y == null) {
	                        return {
	                            container: container,
	                            width: container.style.pixelWidth || container.offsetWidth,
	                            height: container.style.pixelHeight || container.offsetHeight
	                        };
	                    } else {
	                        return {container: container, width: y, height: w};
	                    }
	                }
	            } else {
	                return {container: 1, x: x, y: y, width: w, height: h};
	            }
	        },
	        plugins = function (con, add) {
	            var that = this;
	            for (var prop in add) {
	                if (add[has](prop) && !(prop in con)) {
	                    switch (typeof add[prop]) {
	                        case "function":
	                            (function (f) {
	                                con[prop] = con === that ? f : function () { return f[apply](that, arguments); };
	                            })(add[prop]);
	                        break;
	                        case "object":
	                            con[prop] = con[prop] || {};
	                            plugins.call(this, con[prop], add[prop]);
	                        break;
	                        default:
	                            con[prop] = add[prop];
	                        break;
	                    }
	                }
	            }
	        },
	        tear = function (el, paper) {
	            el == paper.top && (paper.top = el.prev);
	            el == paper.bottom && (paper.bottom = el.next);
	            el.next && (el.next.prev = el.prev);
	            el.prev && (el.prev.next = el.next);
	        },
	        tofront = function (el, paper) {
	            if (paper.top === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = null;
	            el.prev = paper.top;
	            paper.top.next = el;
	            paper.top = el;
	        },
	        toback = function (el, paper) {
	            if (paper.bottom === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = paper.bottom;
	            el.prev = null;
	            paper.bottom.prev = el;
	            paper.bottom = el;
	        },
	        insertafter = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.top && (paper.top = el);
	            el2.next && (el2.next.prev = el);
	            el.next = el2.next;
	            el.prev = el2;
	            el2.next = el;
	        },
	        insertbefore = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.bottom && (paper.bottom = el);
	            el2.prev && (el2.prev.next = el);
	            el.prev = el2.prev;
	            el2.prev = el;
	            el.next = el2;
	        },
	        removed = function (methodname) {
	            return function () {
	                throw new Error("Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object");
	            };
	        };
	    R.pathToRelative = pathToRelative;
	    // SVG
	    if (R.svg) {
	        paperproto.svgns = "http://www.w3.org/2000/svg";
	        paperproto.xlink = "http://www.w3.org/1999/xlink";
	        round = function (num) {
	            return +num + (~~num === num) * .5;
	        };
	        var $ = function (el, attr) {
	            if (attr) {
	                for (var key in attr) {
	                    if (attr[has](key)) {
	                        setAttr(el, key, Str(attr[key]));
	                    }
	                }
	            } else {
	                el = doc.createElementNS(paperproto.svgns, el);
	                el.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
	                return el;
	            }
	        };
	        R[toString] = function () {
	            return  "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
	        };
	        var thePath = function (pathString, SVG) {
	            var el = $("path");
	            SVG.canvas && SVG.canvas[appendChild](el);
	            var p = new Element(el, SVG);
	            p.type = "path";
	            setFillAndStroke(p, {fill: "none", stroke: "#000", path: pathString});
	            return p;
	        };
	        var addGradientFill = function (o, gradient, SVG) {
	            var type = "linear",
	                fx = .5, fy = .5,
	                s = o.style;
	            gradient = Str(gradient)[rp](radial_gradient, function (all, _fx, _fy) {
	                type = "radial";
	                if (_fx && _fy) {
	                    fx = toFloat(_fx);
	                    fy = toFloat(_fy);
	                    var dir = ((fy > .5) * 2 - 1);
	                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&
	                        (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) &&
	                        fy != .5 &&
	                        (fy = fy.toFixed(5) - 1e-5 * dir);
	                }
	                return E;
	            });
	            gradient = gradient[split](/\s*\-\s*/);
	            if (type == "linear") {
	                var angle = gradient.shift();
	                angle = -toFloat(angle);
	                if (isNaN(angle)) {
	                    return null;
	                }
	                var vector = [0, 0, math.cos(angle * PI / 180), math.sin(angle * PI / 180)],
	                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
	                vector[2] *= max;
	                vector[3] *= max;
	                if (vector[2] < 0) {
	                    vector[0] = -vector[2];
	                    vector[2] = 0;
	                }
	                if (vector[3] < 0) {
	                    vector[1] = -vector[3];
	                    vector[3] = 0;
	                }
	            }
	            var dots = parseDots(gradient);
	            if (!dots) {
	                return null;
	            }
	            var id = o.getAttribute(fillString);
	            id = id.match(/^url\(#(.*)\)$/);
	            id && SVG.defs.removeChild(doc.getElementById(id[1]));

	            var el = $(type + "Gradient");
	            el.id = createUUID();
	            $(el, type == "radial" ? {fx: fx, fy: fy} : {x1: vector[0], y1: vector[1], x2: vector[2], y2: vector[3]});
	            SVG.defs[appendChild](el);
	            for (var i = 0, ii = dots[length]; i < ii; i++) {
	                var stop = $("stop");
	                $(stop, {
	                    offset: dots[i].offset ? dots[i].offset : !i ? "0%" : "100%",
	                    "stop-color": dots[i].color || "#fff"
	                });
	                el[appendChild](stop);
	            }
	            $(o, {
	                fill: "url(#" + el.id + ")",
	                opacity: 1,
	                "fill-opacity": 1
	            });
	            s.fill = E;
	            s.opacity = 1;
	            s.fillOpacity = 1;
	            return 1;
	        };
	        var updatePosition = function (o) {
	            var bbox = o.getBBox();
	            $(o.pattern, {patternTransform: R.format("translate({0},{1})", bbox.x, bbox.y)});
	        };
	        var setFillAndStroke = function (o, params) {
	            var dasharray = {
	                    "": [0],
	                    "none": [0],
	                    "-": [3, 1],
	                    ".": [1, 1],
	                    "-.": [3, 1, 1, 1],
	                    "-..": [3, 1, 1, 1, 1, 1],
	                    ". ": [1, 3],
	                    "- ": [4, 3],
	                    "--": [8, 3],
	                    "- .": [4, 3, 1, 3],
	                    "--.": [8, 3, 1, 3],
	                    "--..": [8, 3, 1, 3, 1, 3]
	                },
	                node = o.node,
	                attrs = o.attrs,
	                rot = o.rotate(),
	                addDashes = function (o, value) {
	                    value = dasharray[lowerCase.call(value)];
	                    if (value) {
	                        var width = o.attrs["stroke-width"] || "1",
	                            butt = {round: width, square: width, butt: 0}[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
	                            dashes = [];
	                        var i = value[length];
	                        while (i--) {
	                            dashes[i] = value[i] * width + ((i % 2) ? 1 : -1) * butt;
	                        }
	                        $(node, {"stroke-dasharray": dashes[join](",")});
	                    }
	                };
	            params[has]("rotation") && (rot = params.rotation);
	            var rotxy = Str(rot)[split](separator);
	            if (!(rotxy.length - 1)) {
	                rotxy = null;
	            } else {
	                rotxy[1] = +rotxy[1];
	                rotxy[2] = +rotxy[2];
	            }
	            toFloat(rot) && o.rotate(0, true);
	            for (var att in params) {
	                if (params[has](att)) {
	                    if (!availableAttrs[has](att)) {
	                        continue;
	                    }
	                    var value = params[att];
	                    attrs[att] = value;
	                    switch (att) {
	                        case "blur":
	                            o.blur(value);
	                            break;
	                        case "rotation":
	                            o.rotate(value, true);
	                            break;
	                        case "href":
	                        case "title":
	                        case "target":
	                            var pn = node.parentNode;
	                            if (lowerCase.call(pn.tagName) != "a") {
	                                var hl = $("a");
	                                pn.insertBefore(hl, node);
	                                hl[appendChild](node);
	                                pn = hl;
	                            }
	                            if (att == "target" && value == "blank") {
	                                pn.setAttributeNS(o.paper.xlink, "show", "new");
	                            } else {
	                                pn.setAttributeNS(o.paper.xlink, att, value);
	                            }
	                            break;
	                        case "cursor":
	                            node.style.cursor = value;
	                            break;
	                        case "clip-rect":
	                            var rect = Str(value)[split](separator);
	                            if (rect[length] == 4) {
	                                o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
	                                var el = $("clipPath"),
	                                    rc = $("rect");
	                                el.id = createUUID();
	                                $(rc, {
	                                    x: rect[0],
	                                    y: rect[1],
	                                    width: rect[2],
	                                    height: rect[3]
	                                });
	                                el[appendChild](rc);
	                                o.paper.defs[appendChild](el);
	                                $(node, {"clip-path": "url(#" + el.id + ")"});
	                                o.clip = rc;
	                            }
	                            if (!value) {
	                                var clip = doc.getElementById(node.getAttribute("clip-path")[rp](/(^url\(#|\)$)/g, E));
	                                clip && clip.parentNode.removeChild(clip);
	                                $(node, {"clip-path": E});
	                                delete o.clip;
	                            }
	                        break;
	                        case "path":
	                            if (o.type == "path") {
	                                $(node, {d: value ? attrs.path = pathToAbsolute(value) : "M0,0"});
	                            }
	                            break;
	                        case "width":
	                            setAttr(node, att, value);
	                            if (attrs.fx) {
	                                att = "x";
	                                value = attrs.x;
	                            } else {
	                                break;
	                            }
	                        case "x":
	                            if (attrs.fx) {
	                                value = -attrs.x - (attrs.width || 0);
	                            }
	                        case "rx":
	                            if (att == "rx" && o.type == "rect") {
	                                break;
	                            }
	                        case "cx":
	                            rotxy && (att == "x" || att == "cx") && (rotxy[1] += value - attrs[att]);
	                            setAttr(node, att, value);
	                            o.pattern && updatePosition(o);
	                            break;
	                        case "height":
	                            setAttr(node, att, value);
	                            if (attrs.fy) {
	                                att = "y";
	                                value = attrs.y;
	                            } else {
	                                break;
	                            }
	                        case "y":
	                            if (attrs.fy) {
	                                value = -attrs.y - (attrs.height || 0);
	                            }
	                        case "ry":
	                            if (att == "ry" && o.type == "rect") {
	                                break;
	                            }
	                        case "cy":
	                            rotxy && (att == "y" || att == "cy") && (rotxy[2] += value - attrs[att]);
	                            setAttr(node, att, value);
	                            o.pattern && updatePosition(o);
	                            break;
	                        case "r":
	                            if (o.type == "rect") {
	                                $(node, {rx: value, ry: value});
	                            } else {
	                                setAttr(node, att, value);
	                            }
	                            break;
	                        case "src":
	                            if (o.type == "image") {
	                                node.setAttributeNS(o.paper.xlink, "href", value);
	                            }
	                            break;
	                        case "stroke-width":
	                            node.style.strokeWidth = value;
	                            // Need following line for Firefox
	                            setAttr(node, att, value);
	                            if (attrs["stroke-dasharray"]) {
	                                addDashes(o, attrs["stroke-dasharray"]);
	                            }
	                            break;
	                        case "stroke-dasharray":
	                            addDashes(o, value);
	                            break;
	                        case "translation":
	                            var xy = Str(value)[split](separator);
	                            xy[0] = +xy[0] || 0;
	                            xy[1] = +xy[1] || 0;
	                            if (rotxy) {
	                                rotxy[1] += xy[0];
	                                rotxy[2] += xy[1];
	                            }
	                            translate.call(o, xy[0], xy[1]);
	                            break;
	                        case "scale":
	                            xy = Str(value)[split](separator);
	                            o.scale(+xy[0] || 1, +xy[1] || +xy[0] || 1, isNaN(toFloat(xy[2])) ? null : +xy[2], isNaN(toFloat(xy[3])) ? null : +xy[3]);
	                            break;
	                        case fillString:
	                            var isURL = Str(value).match(ISURL);
	                            if (isURL) {
	                                el = $("pattern");
	                                var ig = $("image");
	                                el.id = createUUID();
	                                $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
	                                $(ig, {x: 0, y: 0});
	                                ig.setAttributeNS(o.paper.xlink, "href", isURL[1]);
	                                el[appendChild](ig);

	                                var img = doc.createElement("img");
	                                img.style.cssText = "position:absolute;left:-9999em;top-9999em";
	                                img.onload = function () {
	                                    $(el, {width: this.offsetWidth, height: this.offsetHeight});
	                                    $(ig, {width: this.offsetWidth, height: this.offsetHeight});
	                                    doc.body.removeChild(this);
	                                    o.paper.safari();
	                                };
	                                doc.body[appendChild](img);
	                                img.src = isURL[1];
	                                o.paper.defs[appendChild](el);
	                                node.style.fill = "url(#" + el.id + ")";
	                                $(node, {fill: "url(#" + el.id + ")"});
	                                o.pattern = el;
	                                o.pattern && updatePosition(o);
	                                break;
	                            }
	                            var clr = R.getRGB(value);
	                            if (!clr.error) {
	                                delete params.gradient;
	                                delete attrs.gradient;
	                                !R.is(attrs.opacity, "undefined") &&
	                                    R.is(params.opacity, "undefined") &&
	                                    $(node, {opacity: attrs.opacity});
	                                !R.is(attrs["fill-opacity"], "undefined") &&
	                                    R.is(params["fill-opacity"], "undefined") &&
	                                    $(node, {"fill-opacity": attrs["fill-opacity"]});
	                            } else if ((({circle: 1, ellipse: 1})[has](o.type) || Str(value).charAt() != "r") && addGradientFill(node, value, o.paper)) {
	                                attrs.gradient = value;
	                                attrs.fill = "none";
	                                break;
	                            }
	                            clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                        case "stroke":
	                            clr = R.getRGB(value);
	                            setAttr(node, att, clr.hex);
	                            att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                            break;
	                        case "gradient":
	                            (({circle: 1, ellipse: 1})[has](o.type) || Str(value).charAt() != "r") && addGradientFill(node, value, o.paper);
	                            break;
	                        case "opacity":
	                            if (attrs.gradient && !attrs[has]("stroke-opacity")) {
	                                $(node, {"stroke-opacity": value > 1 ? value / 100 : value});
	                            }
	                            // fall
	                        case "fill-opacity":
	                            if (attrs.gradient) {
	                                var gradient = doc.getElementById(node.getAttribute(fillString)[rp](/^url\(#|\)$/g, E));
	                                if (gradient) {
	                                    var stops = gradient.getElementsByTagName("stop");
	                                    setAttr(stops[stops[length] - 1], "stop-opacity", value);
	                                }
	                                break;
	                            }
	                        default:
	                            att == "font-size" && (value = toInt(value, 10) + "px");
	                            var cssrule = att[rp](/(\-.)/g, function (w) {
	                                return upperCase.call(w.substring(1));
	                            });
	                            node.style[cssrule] = value;
	                            // Need following line for Firefox
	                            setAttr(node, att, value);
	                            break;
	                    }
	                }
	            }

	            tuneText(o, params);
	            if (rotxy) {
	                o.rotate(rotxy.join(S));
	            } else {
	                toFloat(rot) && o.rotate(rot, true);
	            }
	        };
	        var leading = 1.2,
	        tuneText = function (el, params) {
	            if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
	                return;
	            }
	            var a = el.attrs,
	                node = el.node,
	                fontSize = node.firstChild ? toInt(doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

	            if (params[has]("text")) {
	                a.text = params.text;
	                while (node.firstChild) {
	                    node.removeChild(node.firstChild);
	                }
	                var texts = Str(params.text)[split]("\n");
	                for (var i = 0, ii = texts[length]; i < ii; i++) if (texts[i]) {
	                    var tspan = $("tspan");
	                    i && $(tspan, {dy: fontSize * leading, x: a.x});
	                    tspan[appendChild](doc.createTextNode(texts[i]));
	                    node[appendChild](tspan);
	                }
	            } else {
	                texts = node.getElementsByTagName("tspan");
	                for (i = 0, ii = texts[length]; i < ii; i++) {
	                    i && $(texts[i], {dy: fontSize * leading, x: a.x});
	                }
	            }
	            $(node, {y: a.y});
	            var bb = el.getBBox(),
	                dif = a.y - (bb.y + bb.height / 2);
	            dif && R.is(dif, "finite") && $(node, {y: a.y + dif});
	        },
	        Element = function (node, svg) {
	            var X = 0,
	                Y = 0;
	            this[0] = node;
	            this.id = R._oid++;
	            this.node = node;
	            node.raphael = this;
	            this.paper = svg;
	            this.attrs = this.attrs || {};
	            this.transformations = []; // rotate, translate, scale
	            this._ = {
	                tx: 0,
	                ty: 0,
	                rt: {deg: 0, cx: 0, cy: 0},
	                sx: 1,
	                sy: 1
	            };
	            !svg.bottom && (svg.bottom = this);
	            this.prev = svg.top;
	            svg.top && (svg.top.next = this);
	            svg.top = this;
	            this.next = null;
	        };
	        var elproto = Element[proto];
	        Element[proto].rotate = function (deg, cx, cy) {
	            if (this.removed) {
	                return this;
	            }
	            if (deg == null) {
	                if (this._.rt.cx) {
	                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][join](S);
	                }
	                return this._.rt.deg;
	            }
	            var bbox = this.getBBox();
	            deg = Str(deg)[split](separator);
	            if (deg[length] - 1) {
	                cx = toFloat(deg[1]);
	                cy = toFloat(deg[2]);
	            }
	            deg = toFloat(deg[0]);
	            if (cx != null && cx !== false) {
	                this._.rt.deg = deg;
	            } else {
	                this._.rt.deg += deg;
	            }
	            (cy == null) && (cx = null);
	            this._.rt.cx = cx;
	            this._.rt.cy = cy;
	            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
	            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
	            if (this._.rt.deg) {
	                this.transformations[0] = R.format("rotate({0} {1} {2})", this._.rt.deg, cx, cy);
	                this.clip && $(this.clip, {transform: R.format("rotate({0} {1} {2})", -this._.rt.deg, cx, cy)});
	            } else {
	                this.transformations[0] = E;
	                this.clip && $(this.clip, {transform: E});
	            }
	            $(this.node, {transform: this.transformations[join](S)});
	            return this;
	        };
	        Element[proto].hide = function () {
	            !this.removed && (this.node.style.display = "none");
	            return this;
	        };
	        Element[proto].show = function () {
	            !this.removed && (this.node.style.display = "");
	            return this;
	        };
	        Element[proto].remove = function () {
	            if (this.removed) {
	                return;
	            }
	            tear(this, this.paper);
	            this.node.parentNode.removeChild(this.node);
	            for (var i in this) {
	                delete this[i];
	            }
	            this.removed = true;
	        };
	        Element[proto].getBBox = function () {
	            if (this.removed) {
	                return this;
	            }
	            if (this.type == "path") {
	                return pathDimensions(this.attrs.path);
	            }
	            if (this.node.style.display == "none") {
	                this.show();
	                var hide = true;
	            }
	            var bbox = {};
	            try {
	                bbox = this.node.getBBox();
	            } catch(e) {
	                // Firefox 3.0.x plays badly here
	            } finally {
	                bbox = bbox || {};
	            }
	            if (this.type == "text") {
	                bbox = {x: bbox.x, y: Infinity, width: 0, height: 0};
	                for (var i = 0, ii = this.node.getNumberOfChars(); i < ii; i++) {
	                    var bb = this.node.getExtentOfChar(i);
	                    (bb.y < bbox.y) && (bbox.y = bb.y);
	                    (bb.y + bb.height - bbox.y > bbox.height) && (bbox.height = bb.y + bb.height - bbox.y);
	                    (bb.x + bb.width - bbox.x > bbox.width) && (bbox.width = bb.x + bb.width - bbox.x);
	                }
	            }
	            hide && this.hide();
	            return bbox;
	        };
	        Element[proto].attr = function (name, value) {
	            if (this.removed) {
	                return this;
	            }
	            if (name == null) {
	                var res = {};
	                for (var i in this.attrs) if (this.attrs[has](i)) {
	                    res[i] = this.attrs[i];
	                }
	                this._.rt.deg && (res.rotation = this.rotate());
	                (this._.sx != 1 || this._.sy != 1) && (res.scale = this.scale());
	                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	                return res;
	            }
	            if (value == null && R.is(name, string)) {
	                if (name == "translation") {
	                    return translate.call(this);
	                }
	                if (name == "rotation") {
	                    return this.rotate();
	                }
	                if (name == "scale") {
	                    return this.scale();
	                }
	                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
	                    return this.attrs.gradient;
	                }
	                return this.attrs[name];
	            }
	            if (value == null && R.is(name, array)) {
	                var values = {};
	                for (var j = 0, jj = name.length; j < jj; j++) {
	                    values[name[j]] = this.attr(name[j]);
	                }
	                return values;
	            }
	            if (value != null) {
	                var params = {};
	                params[name] = value;
	            } else if (name != null && R.is(name, "object")) {
	                params = name;
	            }
	            for (var key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	                var par = this.paper.customAttributes[key].apply(this, [][concat](params[key]));
	                this.attrs[key] = params[key];
	                for (var subkey in par) if (par[has](subkey)) {
	                    params[subkey] = par[subkey];
	                }
	            }
	            setFillAndStroke(this, params);
	            return this;
	        };
	        Element[proto].toFront = function () {
	            if (this.removed) {
	                return this;
	            }
	            this.node.parentNode[appendChild](this.node);
	            var svg = this.paper;
	            svg.top != this && tofront(this, svg);
	            return this;
	        };
	        Element[proto].toBack = function () {
	            if (this.removed) {
	                return this;
	            }
	            if (this.node.parentNode.firstChild != this.node) {
	                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
	                toback(this, this.paper);
	                var svg = this.paper;
	            }
	            return this;
	        };
	        Element[proto].insertAfter = function (element) {
	            if (this.removed) {
	                return this;
	            }
	            var node = element.node || element[element.length - 1].node;
	            if (node.nextSibling) {
	                node.parentNode.insertBefore(this.node, node.nextSibling);
	            } else {
	                node.parentNode[appendChild](this.node);
	            }
	            insertafter(this, element, this.paper);
	            return this;
	        };
	        Element[proto].insertBefore = function (element) {
	            if (this.removed) {
	                return this;
	            }
	            var node = element.node || element[0].node;
	            node.parentNode.insertBefore(this.node, node);
	            insertbefore(this, element, this.paper);
	            return this;
	        };
	        Element[proto].blur = function (size) {
	            // Experimental. No Safari support. Use it on your own risk.
	            var t = this;
	            if (+size !== 0) {
	                var fltr = $("filter"),
	                    blur = $("feGaussianBlur");
	                t.attrs.blur = size;
	                fltr.id = createUUID();
	                $(blur, {stdDeviation: +size || 1.5});
	                fltr.appendChild(blur);
	                t.paper.defs.appendChild(fltr);
	                t._blur = fltr;
	                $(t.node, {filter: "url(#" + fltr.id + ")"});
	            } else {
	                if (t._blur) {
	                    t._blur.parentNode.removeChild(t._blur);
	                    delete t._blur;
	                    delete t.attrs.blur;
	                }
	                t.node.removeAttribute("filter");
	            }
	        };
	        var theCircle = function (svg, x, y, r) {
	            var el = $("circle");
	            svg.canvas && svg.canvas[appendChild](el);
	            var res = new Element(el, svg);
	            res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};
	            res.type = "circle";
	            $(el, res.attrs);
	            return res;
	        },
	        theRect = function (svg, x, y, w, h, r) {
	            var el = $("rect");
	            svg.canvas && svg.canvas[appendChild](el);
	            var res = new Element(el, svg);
	            res.attrs = {x: x, y: y, width: w, height: h, r: r || 0, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000"};
	            res.type = "rect";
	            $(el, res.attrs);
	            return res;
	        },
	        theEllipse = function (svg, x, y, rx, ry) {
	            var el = $("ellipse");
	            svg.canvas && svg.canvas[appendChild](el);
	            var res = new Element(el, svg);
	            res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};
	            res.type = "ellipse";
	            $(el, res.attrs);
	            return res;
	        },
	        theImage = function (svg, src, x, y, w, h) {
	            var el = $("image");
	            $(el, {x: x, y: y, width: w, height: h, preserveAspectRatio: "none"});
	            el.setAttributeNS(svg.xlink, "href", src);
	            svg.canvas && svg.canvas[appendChild](el);
	            var res = new Element(el, svg);
	            res.attrs = {x: x, y: y, width: w, height: h, src: src};
	            res.type = "image";
	            return res;
	        },
	        theText = function (svg, x, y, text) {
	            var el = $("text");
	            $(el, {x: x, y: y, "text-anchor": "middle"});
	            svg.canvas && svg.canvas[appendChild](el);
	            var res = new Element(el, svg);
	            res.attrs = {x: x, y: y, "text-anchor": "middle", text: text, font: availableAttrs.font, stroke: "none", fill: "#000"};
	            res.type = "text";
	            setFillAndStroke(res, res.attrs);
	            return res;
	        },
	        setSize = function (width, height) {
	            this.width = width || this.width;
	            this.height = height || this.height;
	            setAttr(this.canvas, "width", this.width);
	            setAttr(this.canvas, "height", this.height);
	            return this;
	        },
	        create = function () {
	            var con = getContainer[apply](0, arguments),
	                container = con && con.container,
	                x = con.x,
	                y = con.y,
	                width = con.width,
	                height = con.height;
	            if (!container) {
	                throw new Error("SVG container not found.");
	            }
	            var cnvs = $("svg");
	            x = x || 0;
	            y = y || 0;
	            width = width || 512;
	            height = height || 342;
	            $(cnvs, {
	                xmlns: "http://www.w3.org/2000/svg",
	                version: 1.1,
	                width: width,
	                height: height
	            });
	            if (container == 1) {
	                cnvs.style.cssText = "position:absolute;left:" + x + "px;top:" + y + "px";
	                doc.body[appendChild](cnvs);
	            } else {
	                if (container.firstChild) {
	                    container.insertBefore(cnvs, container.firstChild);
	                } else {
	                    container[appendChild](cnvs);
	                }
	            }
	            container = new Paper;
	            container.width = width;
	            container.height = height;
	            container.canvas = cnvs;
	            plugins.call(container, container, R.fn);
	            container.clear();
	            return container;
	        };
	        paperproto.clear = function () {
	            var c = this.canvas;
	            while (c.firstChild) {
	                c.removeChild(c.firstChild);
	            }
	            this.bottom = this.top = null;
	            (this.desc = $("desc"))[appendChild](doc.createTextNode("Created with Rapha\xebl"));
	            c[appendChild](this.desc);
	            c[appendChild](this.defs = $("defs"));
	        };
	        paperproto.remove = function () {
	            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
	            for (var i in this) {
	                this[i] = removed(i);
	            }
	        };
	    }

	    // VML
	    if (R.vml) {
	        var map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
	            bites = /([clmz]),?([^clmz]*)/gi,
	            blurregexp = / progid:\S+Blur\([^\)]+\)/g,
	            val = /-?[^,\s-]+/g,
	            coordsize = 1e3 + S + 1e3,
	            zoom = 10,
	            pathlike = {path: 1, rect: 1},
	            path2vml = function (path) {
	                var total =  /[ahqstv]/ig,
	                    command = pathToAbsolute;
	                Str(path).match(total) && (command = path2curve);
	                total = /[clmz]/g;
	                if (command == pathToAbsolute && !Str(path).match(total)) {
	                    var res = Str(path)[rp](bites, function (all, command, args) {
	                        var vals = [],
	                            isMove = lowerCase.call(command) == "m",
	                            res = map[command];
	                        args[rp](val, function (value) {
	                            if (isMove && vals[length] == 2) {
	                                res += vals + map[command == "m" ? "l" : "L"];
	                                vals = [];
	                            }
	                            vals[push](round(value * zoom));
	                        });
	                        return res + vals;
	                    });
	                    return res;
	                }
	                var pa = command(path), p, r;
	                res = [];
	                for (var i = 0, ii = pa[length]; i < ii; i++) {
	                    p = pa[i];
	                    r = lowerCase.call(pa[i][0]);
	                    r == "z" && (r = "x");
	                    for (var j = 1, jj = p[length]; j < jj; j++) {
	                        r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
	                    }
	                    res[push](r);
	                }
	                return res[join](S);
	            };

	        R[toString] = function () {
	            return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
	        };
	        thePath = function (pathString, vml) {
	            var g = createNode("group");
	            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
	            g.coordsize = vml.coordsize;
	            g.coordorigin = vml.coordorigin;
	            var el = createNode("shape"), ol = el.style;
	            ol.width = vml.width + "px";
	            ol.height = vml.height + "px";
	            el.coordsize = coordsize;
	            el.coordorigin = vml.coordorigin;
	            g[appendChild](el);
	            var p = new Element(el, g, vml),
	                attr = {fill: "none", stroke: "#000"};
	            pathString && (attr.path = pathString);
	            p.type = "path";
	            p.path = [];
	            p.Path = E;
	            setFillAndStroke(p, attr);
	            vml.canvas[appendChild](g);
	            return p;
	        };
	        setFillAndStroke = function (o, params) {
	            o.attrs = o.attrs || {};
	            var node = o.node,
	                a = o.attrs,
	                s = node.style,
	                xy,
	                newpath = (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.r != a.r) && o.type == "rect",
	                res = o;

	            for (var par in params) if (params[has](par)) {
	                a[par] = params[par];
	            }
	            if (newpath) {
	                a.path = rectPath(a.x, a.y, a.width, a.height, a.r);
	                o.X = a.x;
	                o.Y = a.y;
	                o.W = a.width;
	                o.H = a.height;
	            }
	            params.href && (node.href = params.href);
	            params.title && (node.title = params.title);
	            params.target && (node.target = params.target);
	            params.cursor && (s.cursor = params.cursor);
	            "blur" in params && o.blur(params.blur);
	            if (params.path && o.type == "path" || newpath) {
	                node.path = path2vml(a.path);
	            }
	            if (params.rotation != null) {
	                o.rotate(params.rotation, true);
	            }
	            if (params.translation) {
	                xy = Str(params.translation)[split](separator);
	                translate.call(o, xy[0], xy[1]);
	                if (o._.rt.cx != null) {
	                    o._.rt.cx +=+ xy[0];
	                    o._.rt.cy +=+ xy[1];
	                    o.setBox(o.attrs, xy[0], xy[1]);
	                }
	            }
	            if (params.scale) {
	                xy = Str(params.scale)[split](separator);
	                o.scale(+xy[0] || 1, +xy[1] || +xy[0] || 1, +xy[2] || null, +xy[3] || null);
	            }
	            if ("clip-rect" in params) {
	                var rect = Str(params["clip-rect"])[split](separator);
	                if (rect[length] == 4) {
	                    rect[2] = +rect[2] + (+rect[0]);
	                    rect[3] = +rect[3] + (+rect[1]);
	                    var div = node.clipRect || doc.createElement("div"),
	                        dstyle = div.style,
	                        group = node.parentNode;
	                    dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
	                    if (!node.clipRect) {
	                        dstyle.position = "absolute";
	                        dstyle.top = 0;
	                        dstyle.left = 0;
	                        dstyle.width = o.paper.width + "px";
	                        dstyle.height = o.paper.height + "px";
	                        group.parentNode.insertBefore(div, group);
	                        div[appendChild](group);
	                        node.clipRect = div;
	                    }
	                }
	                if (!params["clip-rect"]) {
	                    node.clipRect && (node.clipRect.style.clip = E);
	                }
	            }
	            if (o.type == "image" && params.src) {
	                node.src = params.src;
	            }
	            if (o.type == "image" && params.opacity) {
	                node.filterOpacity = ms + ".Alpha(opacity=" + (params.opacity * 100) + ")";
	                s.filter = (node.filterMatrix || E) + (node.filterOpacity || E);
	            }
	            params.font && (s.font = params.font);
	            params["font-family"] && (s.fontFamily = '"' + params["font-family"][split](",")[0][rp](/^['"]+|['"]+$/g, E) + '"');
	            params["font-size"] && (s.fontSize = params["font-size"]);
	            params["font-weight"] && (s.fontWeight = params["font-weight"]);
	            params["font-style"] && (s.fontStyle = params["font-style"]);
	            if (params.opacity != null ||
	                params["stroke-width"] != null ||
	                params.fill != null ||
	                params.stroke != null ||
	                params["stroke-width"] != null ||
	                params["stroke-opacity"] != null ||
	                params["fill-opacity"] != null ||
	                params["stroke-dasharray"] != null ||
	                params["stroke-miterlimit"] != null ||
	                params["stroke-linejoin"] != null ||
	                params["stroke-linecap"] != null) {
	                node = o.shape || node;
	                var fill = (node.getElementsByTagName(fillString) && node.getElementsByTagName(fillString)[0]),
	                    newfill = false;
	                !fill && (newfill = fill = createNode(fillString));
	                if ("fill-opacity" in params || "opacity" in params) {
	                    var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
	                    opacity = mmin(mmax(opacity, 0), 1);
	                    fill.opacity = opacity;
	                }
	                params.fill && (fill.on = true);
	                if (fill.on == null || params.fill == "none") {
	                    fill.on = false;
	                }
	                if (fill.on && params.fill) {
	                    var isURL = params.fill.match(ISURL);
	                    if (isURL) {
	                        fill.src = isURL[1];
	                        fill.type = "tile";
	                    } else {
	                        fill.color = R.getRGB(params.fill).hex;
	                        fill.src = E;
	                        fill.type = "solid";
	                        if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill)) {
	                            a.fill = "none";
	                            a.gradient = params.fill;
	                        }
	                    }
	                }
	                newfill && node[appendChild](fill);
	                var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),
	                newstroke = false;
	                !stroke && (newstroke = stroke = createNode("stroke"));
	                if ((params.stroke && params.stroke != "none") ||
	                    params["stroke-width"] ||
	                    params["stroke-opacity"] != null ||
	                    params["stroke-dasharray"] ||
	                    params["stroke-miterlimit"] ||
	                    params["stroke-linejoin"] ||
	                    params["stroke-linecap"]) {
	                    stroke.on = true;
	                }
	                (params.stroke == "none" || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
	                var strokeColor = R.getRGB(params.stroke);
	                stroke.on && params.stroke && (stroke.color = strokeColor.hex);
	                opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
	                var width = (toFloat(params["stroke-width"]) || 1) * .75;
	                opacity = mmin(mmax(opacity, 0), 1);
	                params["stroke-width"] == null && (width = a["stroke-width"]);
	                params["stroke-width"] && (stroke.weight = width);
	                width && width < 1 && (opacity *= width) && (stroke.weight = 1);
	                stroke.opacity = opacity;

	                params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
	                stroke.miterlimit = params["stroke-miterlimit"] || 8;
	                params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
	                if (params["stroke-dasharray"]) {
	                    var dasharray = {
	                        "-": "shortdash",
	                        ".": "shortdot",
	                        "-.": "shortdashdot",
	                        "-..": "shortdashdotdot",
	                        ". ": "dot",
	                        "- ": "dash",
	                        "--": "longdash",
	                        "- .": "dashdot",
	                        "--.": "longdashdot",
	                        "--..": "longdashdotdot"
	                    };
	                    stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
	                }
	                newstroke && node[appendChild](stroke);
	            }
	            if (res.type == "text") {
	                s = res.paper.span.style;
	                a.font && (s.font = a.font);
	                a["font-family"] && (s.fontFamily = a["font-family"]);
	                a["font-size"] && (s.fontSize = a["font-size"]);
	                a["font-weight"] && (s.fontWeight = a["font-weight"]);
	                a["font-style"] && (s.fontStyle = a["font-style"]);
	                res.node.string && (res.paper.span.innerHTML = Str(res.node.string)[rp](/</g, "&#60;")[rp](/&/g, "&#38;")[rp](/\n/g, "<br>"));
	                res.W = a.w = res.paper.span.offsetWidth;
	                res.H = a.h = res.paper.span.offsetHeight;
	                res.X = a.x;
	                res.Y = a.y + round(res.H / 2);

	                // text-anchor emulationm
	                switch (a["text-anchor"]) {
	                    case "start":
	                        res.node.style["v-text-align"] = "left";
	                        res.bbx = round(res.W / 2);
	                    break;
	                    case "end":
	                        res.node.style["v-text-align"] = "right";
	                        res.bbx = -round(res.W / 2);
	                    break;
	                    default:
	                        res.node.style["v-text-align"] = "center";
	                    break;
	                }
	            }
	        };
	        addGradientFill = function (o, gradient) {
	            o.attrs = o.attrs || {};
	            var attrs = o.attrs,
	                fill,
	                type = "linear",
	                fxfy = ".5 .5";
	            o.attrs.gradient = gradient;
	            gradient = Str(gradient)[rp](radial_gradient, function (all, fx, fy) {
	                type = "radial";
	                if (fx && fy) {
	                    fx = toFloat(fx);
	                    fy = toFloat(fy);
	                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
	                    fxfy = fx + S + fy;
	                }
	                return E;
	            });
	            gradient = gradient[split](/\s*\-\s*/);
	            if (type == "linear") {
	                var angle = gradient.shift();
	                angle = -toFloat(angle);
	                if (isNaN(angle)) {
	                    return null;
	                }
	            }
	            var dots = parseDots(gradient);
	            if (!dots) {
	                return null;
	            }
	            o = o.shape || o.node;
	            fill = o.getElementsByTagName(fillString)[0] || createNode(fillString);
	            !fill.parentNode && o.appendChild(fill);
	            if (dots[length]) {
	                fill.on = true;
	                fill.method = "none";
	                fill.color = dots[0].color;
	                fill.color2 = dots[dots[length] - 1].color;
	                var clrs = [];
	                for (var i = 0, ii = dots[length]; i < ii; i++) {
	                    dots[i].offset && clrs[push](dots[i].offset + S + dots[i].color);
	                }
	                fill.colors && (fill.colors.value = clrs[length] ? clrs[join]() : "0% " + fill.color);
	                if (type == "radial") {
	                    fill.type = "gradientradial";
	                    fill.focus = "100%";
	                    fill.focussize = fxfy;
	                    fill.focusposition = fxfy;
	                } else {
	                    fill.type = "gradient";
	                    fill.angle = (270 - angle) % 360;
	                }
	            }
	            return 1;
	        };
	        Element = function (node, group, vml) {
	            var Rotation = 0,
	                RotX = 0,
	                RotY = 0,
	                Scale = 1;
	            this[0] = node;
	            this.id = R._oid++;
	            this.node = node;
	            node.raphael = this;
	            this.X = 0;
	            this.Y = 0;
	            this.attrs = {};
	            this.Group = group;
	            this.paper = vml;
	            this._ = {
	                tx: 0,
	                ty: 0,
	                rt: {deg:0},
	                sx: 1,
	                sy: 1
	            };
	            !vml.bottom && (vml.bottom = this);
	            this.prev = vml.top;
	            vml.top && (vml.top.next = this);
	            vml.top = this;
	            this.next = null;
	        };
	        elproto = Element[proto];
	        elproto.rotate = function (deg, cx, cy) {
	            if (this.removed) {
	                return this;
	            }
	            if (deg == null) {
	                if (this._.rt.cx) {
	                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][join](S);
	                }
	                return this._.rt.deg;
	            }
	            deg = Str(deg)[split](separator);
	            if (deg[length] - 1) {
	                cx = toFloat(deg[1]);
	                cy = toFloat(deg[2]);
	            }
	            deg = toFloat(deg[0]);
	            if (cx != null) {
	                this._.rt.deg = deg;
	            } else {
	                this._.rt.deg += deg;
	            }
	            cy == null && (cx = null);
	            this._.rt.cx = cx;
	            this._.rt.cy = cy;
	            this.setBox(this.attrs, cx, cy);
	            this.Group.style.rotation = this._.rt.deg;
	            // gradient fix for rotation. TODO
	            // var fill = (this.shape || this.node).getElementsByTagName(fillString);
	            // fill = fill[0] || {};
	            // var b = ((360 - this._.rt.deg) - 270) % 360;
	            // !R.is(fill.angle, "undefined") && (fill.angle = b);
	            return this;
	        };
	        elproto.setBox = function (params, cx, cy) {
	            if (this.removed) {
	                return this;
	            }
	            var gs = this.Group.style,
	                os = (this.shape && this.shape.style) || this.node.style;
	            params = params || {};
	            for (var i in params) if (params[has](i)) {
	                this.attrs[i] = params[i];
	            }
	            cx = cx || this._.rt.cx;
	            cy = cy || this._.rt.cy;
	            var attr = this.attrs,
	                x,
	                y,
	                w,
	                h;
	            switch (this.type) {
	                case "circle":
	                    x = attr.cx - attr.r;
	                    y = attr.cy - attr.r;
	                    w = h = attr.r * 2;
	                    break;
	                case "ellipse":
	                    x = attr.cx - attr.rx;
	                    y = attr.cy - attr.ry;
	                    w = attr.rx * 2;
	                    h = attr.ry * 2;
	                    break;
	                case "image":
	                    x = +attr.x;
	                    y = +attr.y;
	                    w = attr.width || 0;
	                    h = attr.height || 0;
	                    break;
	                case "text":
	                    this.textpath.v = ["m", round(attr.x), ", ", round(attr.y - 2), "l", round(attr.x) + 1, ", ", round(attr.y - 2)][join](E);
	                    x = attr.x - round(this.W / 2);
	                    y = attr.y - this.H / 2;
	                    w = this.W;
	                    h = this.H;
	                    break;
	                case "rect":
	                case "path":
	                    if (!this.attrs.path) {
	                        x = 0;
	                        y = 0;
	                        w = this.paper.width;
	                        h = this.paper.height;
	                    } else {
	                        var dim = pathDimensions(this.attrs.path);
	                        x = dim.x;
	                        y = dim.y;
	                        w = dim.width;
	                        h = dim.height;
	                    }
	                    break;
	                default:
	                    x = 0;
	                    y = 0;
	                    w = this.paper.width;
	                    h = this.paper.height;
	                    break;
	            }
	            cx = (cx == null) ? x + w / 2 : cx;
	            cy = (cy == null) ? y + h / 2 : cy;
	            var left = cx - this.paper.width / 2,
	                top = cy - this.paper.height / 2, t;
	            gs.left != (t = left + "px") && (gs.left = t);
	            gs.top != (t = top + "px") && (gs.top = t);
	            this.X = pathlike[has](this.type) ? -left : x;
	            this.Y = pathlike[has](this.type) ? -top : y;
	            this.W = w;
	            this.H = h;
	            if (pathlike[has](this.type)) {
	                os.left != (t = -left * zoom + "px") && (os.left = t);
	                os.top != (t = -top * zoom + "px") && (os.top = t);
	            } else if (this.type == "text") {
	                os.left != (t = -left + "px") && (os.left = t);
	                os.top != (t = -top + "px") && (os.top = t);
	            } else {
	                gs.width != (t = this.paper.width + "px") && (gs.width = t);
	                gs.height != (t = this.paper.height + "px") && (gs.height = t);
	                os.left != (t = x - left + "px") && (os.left = t);
	                os.top != (t = y - top + "px") && (os.top = t);
	                os.width != (t = w + "px") && (os.width = t);
	                os.height != (t = h + "px") && (os.height = t);
	            }
	        };
	        elproto.hide = function () {
	            !this.removed && (this.Group.style.display = "none");
	            return this;
	        };
	        elproto.show = function () {
	            !this.removed && (this.Group.style.display = "block");
	            return this;
	        };
	        elproto.getBBox = function () {
	            if (this.removed) {
	                return this;
	            }
	            if (pathlike[has](this.type)) {
	                return pathDimensions(this.attrs.path);
	            }
	            return {
	                x: this.X + (this.bbx || 0),
	                y: this.Y,
	                width: this.W,
	                height: this.H
	            };
	        };
	        elproto.remove = function () {
	            if (this.removed) {
	                return;
	            }
	            tear(this, this.paper);
	            this.node.parentNode.removeChild(this.node);
	            this.Group.parentNode.removeChild(this.Group);
	            this.shape && this.shape.parentNode.removeChild(this.shape);
	            for (var i in this) {
	                delete this[i];
	            }
	            this.removed = true;
	        };
	        elproto.attr = function (name, value) {
	            if (this.removed) {
	                return this;
	            }
	            if (name == null) {
	                var res = {};
	                for (var i in this.attrs) if (this.attrs[has](i)) {
	                    res[i] = this.attrs[i];
	                }
	                this._.rt.deg && (res.rotation = this.rotate());
	                (this._.sx != 1 || this._.sy != 1) && (res.scale = this.scale());
	                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	                return res;
	            }
	            if (value == null && R.is(name, "string")) {
	                if (name == "translation") {
	                    return translate.call(this);
	                }
	                if (name == "rotation") {
	                    return this.rotate();
	                }
	                if (name == "scale") {
	                    return this.scale();
	                }
	                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
	                    return this.attrs.gradient;
	                }
	                return this.attrs[name];
	            }
	            if (this.attrs && value == null && R.is(name, array)) {
	                var ii, values = {};
	                for (i = 0, ii = name[length]; i < ii; i++) {
	                    values[name[i]] = this.attr(name[i]);
	                }
	                return values;
	            }
	            var params;
	            if (value != null) {
	                params = {};
	                params[name] = value;
	            }
	            value == null && R.is(name, "object") && (params = name);
	            if (params) {
	                for (var key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	                    var par = this.paper.customAttributes[key].apply(this, [][concat](params[key]));
	                    this.attrs[key] = params[key];
	                    for (var subkey in par) if (par[has](subkey)) {
	                        params[subkey] = par[subkey];
	                    }
	                }
	                if (params.text && this.type == "text") {
	                    this.node.string = params.text;
	                }
	                setFillAndStroke(this, params);
	                if (params.gradient && (({circle: 1, ellipse: 1})[has](this.type) || Str(params.gradient).charAt() != "r")) {
	                    addGradientFill(this, params.gradient);
	                }
	                (!pathlike[has](this.type) || this._.rt.deg) && this.setBox(this.attrs);
	            }
	            return this;
	        };
	        elproto.toFront = function () {
	            !this.removed && this.Group.parentNode[appendChild](this.Group);
	            this.paper.top != this && tofront(this, this.paper);
	            return this;
	        };
	        elproto.toBack = function () {
	            if (this.removed) {
	                return this;
	            }
	            if (this.Group.parentNode.firstChild != this.Group) {
	                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
	                toback(this, this.paper);
	            }
	            return this;
	        };
	        elproto.insertAfter = function (element) {
	            if (this.removed) {
	                return this;
	            }
	            if (element.constructor == Set) {
	                element = element[element.length - 1];
	            }
	            if (element.Group.nextSibling) {
	                element.Group.parentNode.insertBefore(this.Group, element.Group.nextSibling);
	            } else {
	                element.Group.parentNode[appendChild](this.Group);
	            }
	            insertafter(this, element, this.paper);
	            return this;
	        };
	        elproto.insertBefore = function (element) {
	            if (this.removed) {
	                return this;
	            }
	            if (element.constructor == Set) {
	                element = element[0];
	            }
	            element.Group.parentNode.insertBefore(this.Group, element.Group);
	            insertbefore(this, element, this.paper);
	            return this;
	        };
	        elproto.blur = function (size) {
	            var s = this.node.runtimeStyle,
	                f = s.filter;
	            f = f.replace(blurregexp, E);
	            if (+size !== 0) {
	                this.attrs.blur = size;
	                s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
	                s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
	            } else {
	                s.filter = f;
	                s.margin = 0;
	                delete this.attrs.blur;
	            }
	        };

	        theCircle = function (vml, x, y, r) {
	            var g = createNode("group"),
	                o = createNode("oval"),
	                ol = o.style;
	            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
	            g.coordsize = coordsize;
	            g.coordorigin = vml.coordorigin;
	            g[appendChild](o);
	            var res = new Element(o, g, vml);
	            res.type = "circle";
	            setFillAndStroke(res, {stroke: "#000", fill: "none"});
	            res.attrs.cx = x;
	            res.attrs.cy = y;
	            res.attrs.r = r;
	            res.setBox({x: x - r, y: y - r, width: r * 2, height: r * 2});
	            vml.canvas[appendChild](g);
	            return res;
	        };
	        function rectPath(x, y, w, h, r) {
	            if (r) {
	                return R.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", x + r, y, w - r * 2, r, -r, h - r * 2, r * 2 - w, r * 2 - h);
	            } else {
	                return R.format("M{0},{1}l{2},0,0,{3},{4},0z", x, y, w, h, -w);
	            }
	        }
	        theRect = function (vml, x, y, w, h, r) {
	            var path = rectPath(x, y, w, h, r),
	                res = vml.path(path),
	                a = res.attrs;
	            res.X = a.x = x;
	            res.Y = a.y = y;
	            res.W = a.width = w;
	            res.H = a.height = h;
	            a.r = r;
	            a.path = path;
	            res.type = "rect";
	            return res;
	        };
	        theEllipse = function (vml, x, y, rx, ry) {
	            var g = createNode("group"),
	                o = createNode("oval"),
	                ol = o.style;
	            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
	            g.coordsize = coordsize;
	            g.coordorigin = vml.coordorigin;
	            g[appendChild](o);
	            var res = new Element(o, g, vml);
	            res.type = "ellipse";
	            setFillAndStroke(res, {stroke: "#000"});
	            res.attrs.cx = x;
	            res.attrs.cy = y;
	            res.attrs.rx = rx;
	            res.attrs.ry = ry;
	            res.setBox({x: x - rx, y: y - ry, width: rx * 2, height: ry * 2});
	            vml.canvas[appendChild](g);
	            return res;
	        };
	        theImage = function (vml, src, x, y, w, h) {
	            var g = createNode("group"),
	                o = createNode("image");
	            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
	            g.coordsize = coordsize;
	            g.coordorigin = vml.coordorigin;
	            o.src = src;
	            g[appendChild](o);
	            var res = new Element(o, g, vml);
	            res.type = "image";
	            res.attrs.src = src;
	            res.attrs.x = x;
	            res.attrs.y = y;
	            res.attrs.w = w;
	            res.attrs.h = h;
	            res.setBox({x: x, y: y, width: w, height: h});
	            vml.canvas[appendChild](g);
	            return res;
	        };
	        theText = function (vml, x, y, text) {
	            var g = createNode("group"),
	                el = createNode("shape"),
	                ol = el.style,
	                path = createNode("path"),
	                ps = path.style,
	                o = createNode("textpath");
	            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
	            g.coordsize = coordsize;
	            g.coordorigin = vml.coordorigin;
	            path.v = R.format("m{0},{1}l{2},{1}", round(x * 10), round(y * 10), round(x * 10) + 1);
	            path.textpathok = true;
	            ol.width = vml.width;
	            ol.height = vml.height;
	            o.string = Str(text);
	            o.on = true;
	            el[appendChild](o);
	            el[appendChild](path);
	            g[appendChild](el);
	            var res = new Element(o, g, vml);
	            res.shape = el;
	            res.textpath = path;
	            res.type = "text";
	            res.attrs.text = text;
	            res.attrs.x = x;
	            res.attrs.y = y;
	            res.attrs.w = 1;
	            res.attrs.h = 1;
	            setFillAndStroke(res, {font: availableAttrs.font, stroke: "none", fill: "#000"});
	            res.setBox();
	            vml.canvas[appendChild](g);
	            return res;
	        };
	        setSize = function (width, height) {
	            var cs = this.canvas.style;
	            width == +width && (width += "px");
	            height == +height && (height += "px");
	            cs.width = width;
	            cs.height = height;
	            cs.clip = "rect(0 " + width + " " + height + " 0)";
	            return this;
	        };
	        var createNode;
	        doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
	        try {
	            !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
	            createNode = function (tagName) {
	                return doc.createElement('<rvml:' + tagName + ' class="rvml">');
	            };
	        } catch (e) {
	            createNode = function (tagName) {
	                return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
	            };
	        }
	        create = function () {
	            var con = getContainer[apply](0, arguments),
	                container = con.container,
	                height = con.height,
	                s,
	                width = con.width,
	                x = con.x,
	                y = con.y;
	            if (!container) {
	                throw new Error("VML container not found.");
	            }
	            var res = new Paper,
	                c = res.canvas = doc.createElement("div"),
	                cs = c.style;
	            x = x || 0;
	            y = y || 0;
	            width = width || 512;
	            height = height || 342;
	            width == +width && (width += "px");
	            height == +height && (height += "px");
	            res.width = 1e3;
	            res.height = 1e3;
	            res.coordsize = zoom * 1e3 + S + zoom * 1e3;
	            res.coordorigin = "0 0";
	            res.span = doc.createElement("span");
	            res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
	            c[appendChild](res.span);
	            cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
	            if (container == 1) {
	                doc.body[appendChild](c);
	                cs.left = x + "px";
	                cs.top = y + "px";
	                cs.position = "absolute";
	            } else {
	                if (container.firstChild) {
	                    container.insertBefore(c, container.firstChild);
	                } else {
	                    container[appendChild](c);
	                }
	            }
	            plugins.call(res, res, R.fn);
	            return res;
	        };
	        paperproto.clear = function () {
	            this.canvas.innerHTML = E;
	            this.span = doc.createElement("span");
	            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
	            this.canvas[appendChild](this.span);
	            this.bottom = this.top = null;
	        };
	        paperproto.remove = function () {
	            this.canvas.parentNode.removeChild(this.canvas);
	            for (var i in this) {
	                this[i] = removed(i);
	            }
	            return true;
	        };
	    }

	    // rest
	    // WebKit rendering bug workaround method
	    var version = navigator.userAgent.match(/Version\/(.*?)\s/);
	    if ((navigator.vendor == "Apple Computer, Inc.") && (version && version[1] < 4 || navigator.platform.slice(0, 2) == "iP")) {
	        paperproto.safari = function () {
	            var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
	            win.setTimeout(function () {rect.remove();});
	        };
	    } else {
	        paperproto.safari = function () {};
	    }

	    // Events
	    var preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    addEvent = (function () {
	        if (doc.addEventListener) {
	            return function (obj, type, fn, element) {
	                var realName = supportsTouch && touchMap[type] ? touchMap[type] : type;
	                var f = function (e) {
	                    if (supportsTouch && touchMap[has](type)) {
	                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                            if (e.targetTouches[i].target == obj) {
	                                var olde = e;
	                                e = e.targetTouches[i];
	                                e.originalEvent = olde;
	                                e.preventDefault = preventTouch;
	                                e.stopPropagation = stopTouch;
	                                break;
	                            }
	                        }
	                    }
	                    return fn.call(element, e);
	                };
	                obj.addEventListener(realName, f, false);
	                return function () {
	                    obj.removeEventListener(realName, f, false);
	                    return true;
	                };
	            };
	        } else if (doc.attachEvent) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    e = e || win.event;
	                    e.preventDefault = e.preventDefault || preventDefault;
	                    e.stopPropagation = e.stopPropagation || stopPropagation;
	                    return fn.call(element, e);
	                };
	                obj.attachEvent("on" + type, f);
	                var detacher = function () {
	                    obj.detachEvent("on" + type, f);
	                    return true;
	                };
	                return detacher;
	            };
	        }
	    })(),
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
	            scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft,
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch) {
	                var i = e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            x += scrollX;
	            y += scrollY;
	            dragi.move && dragi.move.call(dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        R.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            dragi.end && dragi.end.call(dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	        }
	        drag = [];
	    };
	    for (var i = events[length]; i--;) {
	        (function (eventName) {
	            R[eventName] = Element[proto][eventName] = function (fn, scope) {
	                if (R.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || doc, eventName, fn, scope || this)});
	                }
	                return this;
	            };
	            R["un" + eventName] = Element[proto]["un" + eventName] = function (fn) {
	                var events = this.events,
	                    l = events[length];
	                while (l--) if (events[l].name == eventName && events[l].f == fn) {
	                    events[l].unbind();
	                    events.splice(l, 1);
	                    !events.length && delete this.events;
	                    return this;
	                }
	                return this;
	            };
	        })(events[i]);
	    }
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        this._drag = {};
	        this.mousedown(function (e) {
	            (e.originalEvent || e).preventDefault();
	            var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
	                scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
	            this._drag.x = e.clientX + scrollX;
	            this._drag.y = e.clientY + scrollY;
	            this._drag.id = e.identifier;
	            onstart && onstart.call(start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
	            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
	            drag.push({el: this, move: onmove, end: onend, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
	        });
	        return this;
	    };
	    elproto.undrag = function (onmove, onstart, onend) {
	        var i = drag.length;
	        while (i--) {
	            drag[i].el == this && (drag[i].move == onmove && drag[i].end == onend) && drag.splice(i++, 1);
	        }
	        !drag.length && R.unmousemove(dragMove).unmouseup(dragUp);
	    };
	    paperproto.circle = function (x, y, r) {
	        return theCircle(this, x || 0, y || 0, r || 0);
	    };
	    paperproto.rect = function (x, y, w, h, r) {
	        return theRect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
	    };
	    paperproto.ellipse = function (x, y, rx, ry) {
	        return theEllipse(this, x || 0, y || 0, rx || 0, ry || 0);
	    };
	    paperproto.path = function (pathString) {
	        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
	        return thePath(R.format[apply](R, arguments), this);
	    };
	    paperproto.image = function (src, x, y, w, h) {
	        return theImage(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
	    };
	    paperproto.text = function (x, y, text) {
	        return theText(this, x || 0, y || 0, Str(text));
	    };
	    paperproto.set = function (itemsArray) {
	        arguments[length] > 1 && (itemsArray = Array[proto].splice.call(arguments, 0, arguments[length]));
	        return new Set(itemsArray);
	    };
	    paperproto.setSize = setSize;
	    paperproto.top = paperproto.bottom = null;
	    paperproto.raphael = R;
	    function x_y() {
	        return this.x + S + this.y;
	    }
	    elproto.resetScale = function () {
	        if (this.removed) {
	            return this;
	        }
	        this._.sx = 1;
	        this._.sy = 1;
	        this.attrs.scale = "1 1";
	    };
	    elproto.scale = function (x, y, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        if (x == null && y == null) {
	            return {
	                x: this._.sx,
	                y: this._.sy,
	                toString: x_y
	            };
	        }
	        y = y || x;
	        !+y && (y = x);
	        var dx,
	            dy,
	            dcx,
	            dcy,
	            a = this.attrs;
	        if (x != 0) {
	            var bb = this.getBBox(),
	                rcx = bb.x + bb.width / 2,
	                rcy = bb.y + bb.height / 2,
	                kx = abs(x / this._.sx),
	                ky = abs(y / this._.sy);
	            cx = (+cx || cx == 0) ? cx : rcx;
	            cy = (+cy || cy == 0) ? cy : rcy;
	            var posx = this._.sx > 0,
	                posy = this._.sy > 0,
	                dirx = ~~(x / abs(x)),
	                diry = ~~(y / abs(y)),
	                dkx = kx * dirx,
	                dky = ky * diry,
	                s = this.node.style,
	                ncx = cx + abs(rcx - cx) * dkx * (rcx > cx == posx ? 1 : -1),
	                ncy = cy + abs(rcy - cy) * dky * (rcy > cy == posy ? 1 : -1),
	                fr = (x * dirx > y * diry ? ky : kx);
	            switch (this.type) {
	                case "rect":
	                case "image":
	                    var neww = a.width * kx,
	                        newh = a.height * ky;
	                    this.attr({
	                        height: newh,
	                        r: a.r * fr,
	                        width: neww,
	                        x: ncx - neww / 2,
	                        y: ncy - newh / 2
	                    });
	                    break;
	                case "circle":
	                case "ellipse":
	                    this.attr({
	                        rx: a.rx * kx,
	                        ry: a.ry * ky,
	                        r: a.r * fr,
	                        cx: ncx,
	                        cy: ncy
	                    });
	                    break;
	                case "text":
	                    this.attr({
	                        x: ncx,
	                        y: ncy
	                    });
	                    break;
	                case "path":
	                    var path = pathToRelative(a.path),
	                        skip = true,
	                        fx = posx ? dkx : kx,
	                        fy = posy ? dky : ky;
	                    for (var i = 0, ii = path[length]; i < ii; i++) {
	                        var p = path[i],
	                            P0 = upperCase.call(p[0]);
	                        if (P0 == "M" && skip) {
	                            continue;
	                        } else {
	                            skip = false;
	                        }
	                        if (P0 == "A") {
	                            p[path[i][length] - 2] *= fx;
	                            p[path[i][length] - 1] *= fy;
	                            p[1] *= kx;
	                            p[2] *= ky;
	                            p[5] = +(dirx + diry ? !!+p[5] : !+p[5]);
	                        } else if (P0 == "H") {
	                            for (var j = 1, jj = p[length]; j < jj; j++) {
	                                p[j] *= fx;
	                            }
	                        } else if (P0 == "V") {
	                            for (j = 1, jj = p[length]; j < jj; j++) {
	                                p[j] *= fy;
	                            }
	                         } else {
	                            for (j = 1, jj = p[length]; j < jj; j++) {
	                                p[j] *= (j % 2) ? fx : fy;
	                            }
	                        }
	                    }
	                    var dim2 = pathDimensions(path);
	                    dx = ncx - dim2.x - dim2.width / 2;
	                    dy = ncy - dim2.y - dim2.height / 2;
	                    path[0][1] += dx;
	                    path[0][2] += dy;
	                    this.attr({path: path});
	                break;
	            }
	            if (this.type in {text: 1, image:1} && (dirx != 1 || diry != 1)) {
	                if (this.transformations) {
	                    this.transformations[2] = "scale("[concat](dirx, ",", diry, ")");
	                    setAttr(this.node, "transform", this.transformations[join](S));
	                    dx = (dirx == -1) ? -a.x - (neww || 0) : a.x;
	                    dy = (diry == -1) ? -a.y - (newh || 0) : a.y;
	                    this.attr({x: dx, y: dy});
	                    a.fx = dirx - 1;
	                    a.fy = diry - 1;
	                } else {
	                    this.node.filterMatrix = ms + ".Matrix(M11="[concat](dirx,
	                        ", M12=0, M21=0, M22=", diry,
	                        ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
	                    s.filter = (this.node.filterMatrix || E) + (this.node.filterOpacity || E);
	                }
	            } else {
	                if (this.transformations) {
	                    this.transformations[2] = E;
	                    setAttr(this.node, "transform", this.transformations[join](S));
	                    a.fx = 0;
	                    a.fy = 0;
	                } else {
	                    this.node.filterMatrix = E;
	                    s.filter = (this.node.filterMatrix || E) + (this.node.filterOpacity || E);
	                }
	            }
	            a.scale = [x, y, cx, cy][join](S);
	            this._.sx = x;
	            this._.sy = y;
	        }
	        return this;
	    };
	    elproto.clone = function () {
	        if (this.removed) {
	            return null;
	        }
	        var attr = this.attr();
	        delete attr.scale;
	        delete attr.translation;
	        return this.paper[this.type]().attr(attr);
	    };
	    var curveslengths = {},
	    getPointAtSegmentLength = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
	        // Is this a straight line?
	        // Added for huge speed improvements
	        if ( p1x === c1x && p1y === c1y && c2x === p2x && c2y == p2y ) {
	            var dx = p2x - p1x, dy = p2y - p1y;
	            var totalLength = Math.sqrt( dx * dx + dy * dy );

	            if ( length == null ) {
	                return totalLength;
	            } else {
	                var fract = length / totalLength;
	                return {
	                    start: { x: p1x, y: p1y },
	                    m: { x: p1x, y: p1y },
	                    n: { x: p2x, y: p2y },
	                    end: { x: p2x, y: p2y },
	                    x: p1x + fract * dx,
	                    y: p1y + fract * dy,
	                    alpha: (90 - math.atan(dx / dy) * 180 / PI)
	                };
	            }
	        }

	        var len = 0,
	            precision = 100,
	            name = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y].join(),
	            cache = curveslengths[name],
	            old, dot;
	        !cache && (curveslengths[name] = cache = {data: []});
	        cache.timer && clearTimeout(cache.timer);
	        cache.timer = setTimeout(function () {delete curveslengths[name];}, 2000);
	        if (length != null) {
	            var total = getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
	            precision = ~~total * 10;
	        }
	        for (var i = 0; i < precision + 1; i++) {
	            if (cache.data[length] > i) {
	                dot = cache.data[i * precision];
	            } else {
	                dot = R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, i / precision);
	                cache.data[i] = dot;
	            }
	            i && (len += pow(pow(old.x - dot.x, 2) + pow(old.y - dot.y, 2), .5));
	            if (length != null && len >= length) {
	                return dot;
	            }
	            old = dot;
	        }
	        if (length == null) {
	            return len;
	        }
	    },
	    getLengthFactory = function (istotal, subpath) {
	        return function (path, length, onlystart) {
	            path = path2curve(path);
	            var x, y, p, l, sp = "", subpaths = {}, point,
	                len = 0;
	            for (var i = 0, ii = path.length; i < ii; i++) {
	                p = path[i];
	                if (p[0] == "M") {
	                    x = +p[1];
	                    y = +p[2];
	                } else {
	                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                    if (len + l > length) {
	                        if (subpath && !subpaths.start) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            sp += ["C", point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
	                            if (onlystart) {return sp;}
	                            subpaths.start = sp;
	                            sp = ["M", point.x, point.y + "C", point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]][join]();
	                            len += l;
	                            x = +p[5];
	                            y = +p[6];
	                            continue;
	                        }
	                        if (!istotal && !subpath) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            return {x: point.x, y: point.y, alpha: point.alpha};
	                        }
	                    }
	                    len += l;
	                    x = +p[5];
	                    y = +p[6];
	                }
	                sp += p;
	            }
	            subpaths.end = sp;
	            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[1], p[2], p[3], p[4], p[5], p[6], 1);
	            point.alpha && (point = {x: point.x, y: point.y, alpha: point.alpha});
	            return point;
	        };
	    };
	    var getTotalLength = getLengthFactory(1),
	        getPointAtLength = getLengthFactory(),
	        getSubpathsAtLength = getLengthFactory(0, 1);
	    elproto.getTotalLength = function () {
	        if (this.type != "path") {return;}
	        if (this.node.getTotalLength) {
	            return this.node.getTotalLength();
	        }
	        return getTotalLength(this.attrs.path);
	    };
	    elproto.getPointAtLength = function (length) {
	        if (this.type != "path") {return;}
	        return getPointAtLength(this.attrs.path, length);
	    };
	    elproto.getSubpath = function (from, to) {
	        if (this.type != "path") {return;}
	        if (abs(this.getTotalLength() - to) < "1e-6") {
	            return getSubpathsAtLength(this.attrs.path, from).end;
	        }
	        var a = getSubpathsAtLength(this.attrs.path, to, 1);
	        return from ? getSubpathsAtLength(a, from).end : a;
	    };

	    // animation easing formulas
	    R.easing_formulas = {
	        linear: function (n) {
	            return n;
	        },
	        "<": function (n) {
	            return pow(n, 3);
	        },
	        ">": function (n) {
	            return pow(n - 1, 3) + 1;
	        },
	        "<>": function (n) {
	            n = n * 2;
	            if (n < 1) {
	                return pow(n, 3) / 2;
	            }
	            n -= 2;
	            return (pow(n, 3) + 2) / 2;
	        },
	        backIn: function (n) {
	            var s = 1.70158;
	            return n * n * ((s + 1) * n - s);
	        },
	        backOut: function (n) {
	            n = n - 1;
	            var s = 1.70158;
	            return n * n * ((s + 1) * n + s) + 1;
	        },
	        elastic: function (n) {
	            if (n == 0 || n == 1) {
	                return n;
	            }
	            var p = .3,
	                s = p / 4;
	            return pow(2, -10 * n) * math.sin((n - s) * (2 * PI) / p) + 1;
	        },
	        bounce: function (n) {
	            var s = 7.5625,
	                p = 2.75,
	                l;
	            if (n < (1 / p)) {
	                l = s * n * n;
	            } else {
	                if (n < (2 / p)) {
	                    n -= (1.5 / p);
	                    l = s * n * n + .75;
	                } else {
	                    if (n < (2.5 / p)) {
	                        n -= (2.25 / p);
	                        l = s * n * n + .9375;
	                    } else {
	                        n -= (2.625 / p);
	                        l = s * n * n + .984375;
	                    }
	                }
	            }
	            return l;
	        }
	    };

	    var animationElements = [],
	        animation = function () {
	            var Now = +new Date;
	            for (var l = 0; l < animationElements[length]; l++) {
	                var e = animationElements[l];
	                if (e.stop || e.el.removed) {
	                    continue;
	                }
	                var time = Now - e.start,
	                    ms = e.ms,
	                    easing = e.easing,
	                    from = e.from,
	                    diff = e.diff,
	                    to = e.to,
	                    t = e.t,
	                    that = e.el,
	                    set = {},
	                    now;
	                if (time < ms) {
	                    var pos = easing(time / ms);
	                    for (var attr in from) if (from[has](attr)) {
	                        switch (availableAnimAttrs[attr]) {
	                            case "along":
	                                now = pos * ms * diff[attr];
	                                to.back && (now = to.len - now);
	                                var point = getPointAtLength(to[attr], now);
	                                that.translate(diff.sx - diff.x || 0, diff.sy - diff.y || 0);
	                                diff.x = point.x;
	                                diff.y = point.y;
	                                that.translate(point.x - diff.sx, point.y - diff.sy);
	                                to.rot && that.rotate(diff.r + point.alpha, point.x, point.y);
	                                break;
	                            case nu:
	                                now = +from[attr] + pos * ms * diff[attr];
	                                break;
	                            case "colour":
	                                now = "rgb(" + [
	                                    upto255(round(from[attr].r + pos * ms * diff[attr].r)),
	                                    upto255(round(from[attr].g + pos * ms * diff[attr].g)),
	                                    upto255(round(from[attr].b + pos * ms * diff[attr].b))
	                                ][join](",") + ")";
	                                break;
	                            case "path":
	                                now = [];
	                                for (var i = 0, ii = from[attr][length]; i < ii; i++) {
	                                    now[i] = [from[attr][i][0]];
	                                    for (var j = 1, jj = from[attr][i][length]; j < jj; j++) {
	                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
	                                    }
	                                    now[i] = now[i][join](S);
	                                }
	                                now = now[join](S);
	                                break;
	                            case "csv":
	                                switch (attr) {
	                                    case "translation":
	                                        var x = pos * ms * diff[attr][0] - t.x,
	                                            y = pos * ms * diff[attr][1] - t.y;
	                                        t.x += x;
	                                        t.y += y;
	                                        now = x + S + y;
	                                    break;
	                                    case "rotation":
	                                        now = +from[attr][0] + pos * ms * diff[attr][0];
	                                        from[attr][1] && (now += "," + from[attr][1] + "," + from[attr][2]);
	                                    break;
	                                    case "scale":
	                                        now = [+from[attr][0] + pos * ms * diff[attr][0], +from[attr][1] + pos * ms * diff[attr][1], (2 in to[attr] ? to[attr][2] : E), (3 in to[attr] ? to[attr][3] : E)][join](S);
	                                    break;
	                                    case "clip-rect":
	                                        now = [];
	                                        i = 4;
	                                        while (i--) {
	                                            now[i] = +from[attr][i] + pos * ms * diff[attr][i];
	                                        }
	                                    break;
	                                }
	                                break;
	                            default:
	                              var from2 = [].concat(from[attr]);
	                                now = [];
	                                i = that.paper.customAttributes[attr].length;
	                                while (i--) {
	                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
	                                }
	                                break;
	                        }
	                        set[attr] = now;
	                    }
	                    that.attr(set);
	                    that._run && that._run.call(that);
	                } else {
	                    if (to.along) {
	                        point = getPointAtLength(to.along, to.len * !to.back);
	                        that.translate(diff.sx - (diff.x || 0) + point.x - diff.sx, diff.sy - (diff.y || 0) + point.y - diff.sy);
	                        to.rot && that.rotate(diff.r + point.alpha, point.x, point.y);
	                    }
	                    (t.x || t.y) && that.translate(-t.x, -t.y);
	                    to.scale && (to.scale += E);
	                    that.attr(to);
	                    animationElements.splice(l--, 1);
	                }
	            }
	            R.svg && that && that.paper && that.paper.safari();
	            animationElements[length] && setTimeout(animation);
	        },
	        keyframesRun = function (attr, element, time, prev, prevcallback) {
	            var dif = time - prev;
	            element.timeouts.push(setTimeout(function () {
	                R.is(prevcallback, "function") && prevcallback.call(element);
	                element.animate(attr, dif, attr.easing);
	            }, prev));
	        },
	        upto255 = function (color) {
	            return mmax(mmin(color, 255), 0);
	        },
	        translate = function (x, y) {
	            if (x == null) {
	                return {x: this._.tx, y: this._.ty, toString: x_y};
	            }
	            this._.tx += +x;
	            this._.ty += +y;
	            switch (this.type) {
	                case "circle":
	                case "ellipse":
	                    this.attr({cx: +x + this.attrs.cx, cy: +y + this.attrs.cy});
	                    break;
	                case "rect":
	                case "image":
	                case "text":
	                    this.attr({x: +x + this.attrs.x, y: +y + this.attrs.y});
	                    break;
	                case "path":
	                    var path = pathToRelative(this.attrs.path);
	                    path[0][1] += +x;
	                    path[0][2] += +y;
	                    this.attr({path: path});
	                break;
	            }
	            return this;
	        };
	    elproto.animateWith = function (element, params, ms, easing, callback) {
	        for (var i = 0, ii = animationElements.length; i < ii; i++) {
	            if (animationElements[i].el.id == element.id) {
	                params.start = animationElements[i].start;
	            }
	        }
	        return this.animate(params, ms, easing, callback);
	    };
	    elproto.animateAlong = along();
	    elproto.animateAlongBack = along(1);
	    function along(isBack) {
	        return function (path, ms, rotate, callback) {
	            var params = {back: isBack};
	            R.is(rotate, "function") ? (callback = rotate) : (params.rot = rotate);
	            path && path.constructor == Element && (path = path.attrs.path);
	            path && (params.along = path);
	            return this.animate(params, ms, callback);
	        };
	    }
	    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
	        var cx = 3 * p1x,
	            bx = 3 * (p2x - p1x) - cx,
	            ax = 1 - cx - bx,
	            cy = 3 * p1y,
	            by = 3 * (p2y - p1y) - cy,
	            ay = 1 - cy - by;
	        function sampleCurveX(t) {
	            return ((ax * t + bx) * t + cx) * t;
	        }
	        function solve(x, epsilon) {
	            var t = solveCurveX(x, epsilon);
	            return ((ay * t + by) * t + cy) * t;
	        }
	        function solveCurveX(x, epsilon) {
	            var t0, t1, t2, x2, d2, i;
	            for(t2 = x, i = 0; i < 8; i++) {
	                x2 = sampleCurveX(t2) - x;
	                if (abs(x2) < epsilon) {
	                    return t2;
	                }
	                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
	                if (abs(d2) < 1e-6) {
	                    break;
	                }
	                t2 = t2 - x2 / d2;
	            }
	            t0 = 0;
	            t1 = 1;
	            t2 = x;
	            if (t2 < t0) {
	                return t0;
	            }
	            if (t2 > t1) {
	                return t1;
	            }
	            while (t0 < t1) {
	                x2 = sampleCurveX(t2);
	                if (abs(x2 - x) < epsilon) {
	                    return t2;
	                }
	                if (x > x2) {
	                    t0 = t2;
	                } else {
	                    t1 = t2;
	                }
	                t2 = (t1 - t0) / 2 + t0;
	            }
	            return t2;
	        }
	        return solve(t, 1 / (200 * duration));
	    }
	    elproto.onAnimation = function (f) {
	        this._run = f || 0;
	        return this;
	    };
	    elproto.animate = function (params, ms, easing, callback) {
	        var element = this;
	        element.timeouts = element.timeouts || [];
	        if (R.is(easing, "function") || !easing) {
	            callback = easing || null;
	        }
	        if (element.removed) {
	            callback && callback.call(element);
	            return element;
	        }
	        var from = {},
	            to = {},
	            animateable = false,
	            diff = {};
	        for (var attr in params) if (params[has](attr)) {
	            if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
	                animateable = true;
	                from[attr] = element.attr(attr);
	                (from[attr] == null) && (from[attr] = availableAttrs[attr]);
	                to[attr] = params[attr];
	                switch (availableAnimAttrs[attr]) {
	                    case "along":
	                        var len = getTotalLength(params[attr]);
	                        var point = getPointAtLength(params[attr], len * !!params.back);
	                        var bb = element.getBBox();
	                        diff[attr] = len / ms;
	                        diff.tx = bb.x;
	                        diff.ty = bb.y;
	                        diff.sx = point.x;
	                        diff.sy = point.y;
	                        to.rot = params.rot;
	                        to.back = params.back;
	                        to.len = len;
	                        params.rot && (diff.r = toFloat(element.rotate()) || 0);
	                        break;
	                    case nu:
	                        diff[attr] = (to[attr] - from[attr]) / ms;
	                        break;
	                    case "colour":
	                        from[attr] = R.getRGB(from[attr]);
	                        var toColour = R.getRGB(to[attr]);
	                        diff[attr] = {
	                            r: (toColour.r - from[attr].r) / ms,
	                            g: (toColour.g - from[attr].g) / ms,
	                            b: (toColour.b - from[attr].b) / ms
	                        };
	                        break;
	                    case "path":
	                        var pathes = path2curve(from[attr], to[attr]);
	                        from[attr] = pathes[0];
	                        var toPath = pathes[1];
	                        diff[attr] = [];
	                        for (var i = 0, ii = from[attr][length]; i < ii; i++) {
	                            diff[attr][i] = [0];
	                            for (var j = 1, jj = from[attr][i][length]; j < jj; j++) {
	                                diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
	                            }
	                        }
	                        break;
	                    case "csv":
	                        var values = Str(params[attr])[split](separator),
	                            from2 = Str(from[attr])[split](separator);
	                        switch (attr) {
	                            case "translation":
	                                from[attr] = [0, 0];
	                                diff[attr] = [values[0] / ms, values[1] / ms];
	                            break;
	                            case "rotation":
	                                from[attr] = (from2[1] == values[1] && from2[2] == values[2]) ? from2 : [0, values[1], values[2]];
	                                diff[attr] = [(values[0] - from[attr][0]) / ms, 0, 0];
	                            break;
	                            case "scale":
	                                params[attr] = values;
	                                from[attr] = Str(from[attr])[split](separator);
	                                diff[attr] = [(values[0] - from[attr][0]) / ms, (values[1] - from[attr][1]) / ms, 0, 0];
	                            break;
	                            case "clip-rect":
	                                from[attr] = Str(from[attr])[split](separator);
	                                diff[attr] = [];
	                                i = 4;
	                                while (i--) {
	                                    diff[attr][i] = (values[i] - from[attr][i]) / ms;
	                                }
	                            break;
	                        }
	                        to[attr] = values;
	                        break;
	                    default:
	                        values = [].concat(params[attr]);
	                        from2 = [].concat(from[attr]);
	                        diff[attr] = [];
	                        i = element.paper.customAttributes[attr][length];
	                        while (i--) {
	                            diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
	                        }
	                        break;
	                }
	            }
	        }
	        if (!animateable) {
	            var attrs = [],
	                lastcall;
	            for (var key in params) if (params[has](key) && animKeyFrames.test(key)) {
	                attr = {value: params[key]};
	                key == "from" && (key = 0);
	                key == "to" && (key = 100);
	                attr.key = toInt(key, 10);
	                attrs.push(attr);
	            }
	            attrs.sort(sortByKey);
	            if (attrs[0].key) {
	                attrs.unshift({key: 0, value: element.attrs});
	            }
	            for (i = 0, ii = attrs[length]; i < ii; i++) {
	                keyframesRun(attrs[i].value, element, ms / 100 * attrs[i].key, ms / 100 * (attrs[i - 1] && attrs[i - 1].key || 0), attrs[i - 1] && attrs[i - 1].value.callback);
	            }
	            lastcall = attrs[attrs[length] - 1].value.callback;
	            if (lastcall) {
	                element.timeouts.push(setTimeout(function () {lastcall.call(element);}, ms));
	            }
	        } else {
	            var easyeasy = R.easing_formulas[easing];
	            if (!easyeasy) {
	                easyeasy = Str(easing).match(bezierrg);
	                if (easyeasy && easyeasy[length] == 5) {
	                    var curve = easyeasy;
	                    easyeasy = function (t) {
	                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
	                    };
	                } else {
	                    easyeasy = function (t) {
	                        return t;
	                    };
	                }
	            }
	            animationElements.push({
	                start: params.start || +new Date,
	                ms: ms,
	                easing: easyeasy,
	                from: from,
	                diff: diff,
	                to: to,
	                el: element,
	                t: {x: 0, y: 0}
	            });
	            R.is(callback, "function") && (element._ac = setTimeout(function () {
	                callback.call(element);
	            }, ms));
	            animationElements[length] == 1 && setTimeout(animation);
	        }
	        return this;
	    };
	    elproto.stop = function () {
	        for (var i = 0; i < animationElements.length; i++) {
	            animationElements[i].el.id == this.id && animationElements.splice(i--, 1);
	        }
	        for (i = 0, ii = this.timeouts && this.timeouts.length; i < ii; i++) {
	            clearTimeout(this.timeouts[i]);
	        }
	        this.timeouts = [];
	        clearTimeout(this._ac);
	        delete this._ac;
	        return this;
	    };
	    elproto.translate = function (x, y) {
	        return this.attr({translation: x + " " + y});
	    };
	    elproto[toString] = function () {
	        return "Rapha\xebl\u2019s object";
	    };
	    R.ae = animationElements;

	    // Set
	    var Set = function (items) {
	        this.items = [];
	        this[length] = 0;
	        this.type = "set";
	        if (items) {
	            for (var i = 0, ii = items[length]; i < ii; i++) {
	                if (items[i] && (items[i].constructor == Element || items[i].constructor == Set)) {
	                    this[this.items[length]] = this.items[this.items[length]] = items[i];
	                    this[length]++;
	                }
	            }
	        }
	    };
	    Set[proto][push] = function () {
	        var item,
	            len;
	        for (var i = 0, ii = arguments[length]; i < ii; i++) {
	            item = arguments[i];
	            if (item && (item.constructor == Element || item.constructor == Set)) {
	                len = this.items[length];
	                this[len] = this.items[len] = item;
	                this[length]++;
	            }
	        }
	        return this;
	    };
	    Set[proto].pop = function () {
	        delete this[this[length]--];
	        return this.items.pop();
	    };
	    for (var method in elproto) if (elproto[has](method)) {
	        Set[proto][method] = (function (methodname) {
	            return function () {
	                for (var i = 0, ii = this.items[length]; i < ii; i++) {
	                    this.items[i][methodname][apply](this.items[i], arguments);
	                }
	                return this;
	            };
	        })(method);
	    }
	    Set[proto].attr = function (name, value) {
	        if (name && R.is(name, array) && R.is(name[0], "object")) {
	            for (var j = 0, jj = name[length]; j < jj; j++) {
	                this.items[j].attr(name[j]);
	            }
	        } else {
	            for (var i = 0, ii = this.items[length]; i < ii; i++) {
	                this.items[i].attr(name, value);
	            }
	        }
	        return this;
	    };
	    Set[proto].animate = function (params, ms, easing, callback) {
	        (R.is(easing, "function") || !easing) && (callback = easing || null);
	        var len = this.items[length],
	            i = len,
	            item,
	            set = this,
	            collector;
	        callback && (collector = function () {
	            !--len && callback.call(set);
	        });
	        easing = R.is(easing, string) ? easing : collector;
	        item = this.items[--i].animate(params, ms, easing, collector);
	        while (i--) {
	            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, params, ms, easing, collector);
	        }
	        return this;
	    };
	    Set[proto].insertAfter = function (el) {
	        var i = this.items[length];
	        while (i--) {
	            this.items[i].insertAfter(el);
	        }
	        return this;
	    };
	    Set[proto].getBBox = function () {
	        var x = [],
	            y = [],
	            w = [],
	            h = [];
	        for (var i = this.items[length]; i--;) {
	            var box = this.items[i].getBBox();
	            x[push](box.x);
	            y[push](box.y);
	            w[push](box.x + box.width);
	            h[push](box.y + box.height);
	        }
	        x = mmin[apply](0, x);
	        y = mmin[apply](0, y);
	        return {
	            x: x,
	            y: y,
	            width: mmax[apply](0, w) - x,
	            height: mmax[apply](0, h) - y
	        };
	    };
	    Set[proto].clone = function (s) {
	        s = new Set;
	        for (var i = 0, ii = this.items[length]; i < ii; i++) {
	            s[push](this.items[i].clone());
	        }
	        return s;
	    };

	    R.registerFont = function (font) {
	        if (!font.face) {
	            return font;
	        }
	        this.fonts = this.fonts || {};
	        var fontcopy = {
	                w: font.w,
	                face: {},
	                glyphs: {}
	            },
	            family = font.face["font-family"];
	        for (var prop in font.face) if (font.face[has](prop)) {
	            fontcopy.face[prop] = font.face[prop];
	        }
	        if (this.fonts[family]) {
	            this.fonts[family][push](fontcopy);
	        } else {
	            this.fonts[family] = [fontcopy];
	        }
	        if (!font.svg) {
	            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
	            for (var glyph in font.glyphs) if (font.glyphs[has](glyph)) {
	                var path = font.glyphs[glyph];
	                fontcopy.glyphs[glyph] = {
	                    w: path.w,
	                    k: {},
	                    d: path.d && "M" + path.d[rp](/[mlcxtrv]/g, function (command) {
	                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[command] || "M";
	                        }) + "z"
	                };
	                if (path.k) {
	                    for (var k in path.k) if (path[has](k)) {
	                        fontcopy.glyphs[glyph].k[k] = path.k[k];
	                    }
	                }
	            }
	        }
	        return font;
	    };
	    paperproto.getFont = function (family, weight, style, stretch) {
	        stretch = stretch || "normal";
	        style = style || "normal";
	        weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;
	        if (!R.fonts) {
	            return;
	        }
	        var font = R.fonts[family];
	        if (!font) {
	            var name = new RegExp("(^|\\s)" + family[rp](/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
	            for (var fontName in R.fonts) if (R.fonts[has](fontName)) {
	                if (name.test(fontName)) {
	                    font = R.fonts[fontName];
	                    break;
	                }
	            }
	        }
	        var thefont;
	        if (font) {
	            for (var i = 0, ii = font[length]; i < ii; i++) {
	                thefont = font[i];
	                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
	                    break;
	                }
	            }
	        }
	        return thefont;
	    };
	    paperproto.print = function (x, y, string, font, size, origin, letter_spacing) {
	        origin = origin || "middle"; // baseline|middle
	        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
	        var out = this.set(),
	            letters = Str(string)[split](E),
	            shift = 0,
	            path = E,
	            scale;
	        R.is(font, string) && (font = this.getFont(font));
	        if (font) {
	            scale = (size || 16) / font.face["units-per-em"];
	            var bb = font.face.bbox.split(separator),
	                top = +bb[0],
	                height = +bb[1] + (origin == "baseline" ? bb[3] - bb[1] + (+font.face.descent) : (bb[3] - bb[1]) / 2);
	            for (var i = 0, ii = letters[length]; i < ii; i++) {
	                var prev = i && font.glyphs[letters[i - 1]] || {},
	                    curr = font.glyphs[letters[i]];
	                shift += i ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;
	                curr && curr.d && out[push](this.path(curr.d).attr({fill: "#000", stroke: "none", translation: [shift, 0]}));
	            }
	            out.scale(scale, scale, top, height).translate(x - top, y - height);
	        }
	        return out;
	    };

	    R.format = function (token, params) {
	        var args = R.is(params, array) ? [0][concat](params) : arguments;
	        token && R.is(token, string) && args[length] - 1 && (token = token[rp](formatrg, function (str, i) {
	            return args[++i] == null ? E : args[i];
	        }));
	        return token || E;
	    };
	    R.ninja = function () {
	        oldRaphael.was ? (win.Raphael = oldRaphael.is) : delete Raphael;
	        return R;
	    };
	    R.el = elproto;
	    R.st = Set[proto];

	    oldRaphael.was ? (win.Raphael = R) : (Raphael = R);
	})();


/***/ }
/******/ ]);