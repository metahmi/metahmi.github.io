(window["webpackJsonp"] = window["webpackJsonp"] || [])
.push([
	["tags"], {
		"76f0": function(e, t, c) {
			"use strict";
			c("b1d6")
		},
		"8ea7": function(e, t, c) {
			"use strict";
			c.r(t);
			c("b0c0");
			var n = c("7a23"),
				a = {
					class: "flex flex-col"
				},
				r = {
					class: "post-header"
				},
				s = {
					class: "post-title text-white uppercase"
				},
				u = {
					class: "bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block"
				},
				b = {
					key: 2,
					class: "flex flex-row justify-center items-center"
				};

			function j(e, t, c, j, i, l) {
				var o = Object(n["I"])("Breadcrumbs"),
					O = Object(n["I"])("TagItem"),
					g = Object(n["I"])("ob-skeleton"),
					d = Object(n["I"])("svg-icon"),
					f = Object(n["I"])("TagList");
				return Object(n["A"])(), Object(n["g"])("div", a, [Object(n["j"])("div", r, [Object(n["j"])(o, {
					current: e.t("menu.tags")
				}, null, 8, ["current"]), Object(n["j"])("h1", s, Object(n["M"])(e.t("menu.tags")), 1)]), Object(n["j"])("div", u, [Object(n["j"])(f, null, {
					default: Object(n["S"])((function() {
						return [e.tags && e.tags.length > 0 ? (Object(n["A"])(!0), Object(n["g"])(n["a"], {
							key: 0
						}, Object(n["G"])(e.tags, (function(e) {
							return Object(n["A"])(), Object(n["g"])(O, {
								key: e.slug,
								name: e.name,
								slug: e.slug,
								count: e.count,
								size: "xl"
							}, null, 8, ["name", "slug", "count"])
						})), 128)) : e.tags ? (Object(n["A"])(), Object(n["g"])(g, {
							key: 1,
							tag: "li",
							count: 10,
							height: "20px",
							width: "3rem"
						})) : (Object(n["A"])(), Object(n["g"])("div", b, [Object(n["j"])(d, {
							class: "stroke-ob-bright mr-2",
							"icon-class": "warning"
						}), Object(n["i"])(" " + Object(n["M"])(e.t("settings.empty-tag")), 1)]))]
					})),
					_: 1
				})])])
			}
			var i = c("1da1"),
				l = (c("96cf"), c("b6c6")),
				o = c("47e2"),
				O = c("6141"),
				g = c("a899"),
				d = c("5701"),
				f = Object(n["k"])({
					name: "Tag",
					components: {
						Breadcrumbs: l["a"],
						TagList: g["b"],
						TagItem: g["a"]
					},
					setup: function() {
						var e = Object(d["a"])(),
							t = Object(o["b"])(),
							a = t.t,
							r = Object(O["a"])(),
							s = function() {
								var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
									return regeneratorRuntime.wrap((function(t) {
										while (1) switch (t.prev = t.next) {
											case 0:
												r.fetchAllTags(), e.setHeaderImage("".concat(c("87d4")));
											case 2:
											case "end":
												return t.stop()
										}
									}), t)
								})));
								return function() {
									return t.apply(this, arguments)
								}
							}();
						return Object(n["u"])(s), Object(n["y"])((function() {
							e.resetHeaderImage()
						})), {
							tags: Object(n["e"])((function() {
								return r.isLoaded && 0 === r.tags.length ? null : r.tags
							})),
							t: a
						}
					}
				});
			f.render = j;
			t["default"] = f
		},
		b1d6: function(e, t, c) {},
		b6c6: function(e, t, c) {
			"use strict";
			var n = c("7a23"),
				a = Object(n["W"])("data-v-4170130a");
			Object(n["D"])("data-v-4170130a");
			var r = {
				class: "breadcrumbs flex flex-row gap-6 text-white"
			};
			Object(n["B"])();
			var s = a((function(e, t, c, a, s, u) {
					return Object(n["A"])(), Object(n["g"])("ul", r, [Object(n["j"])("li", null, Object(n["M"])(e.t("menu.home")), 1), Object(n["j"])("li", null, Object(n["M"])(e.current), 1)])
				})),
				u = c("47e2"),
				b = Object(n["k"])({
					name: "Breadcrumb",
					props: {
						current: String
					},
					setup: function() {
						var e = Object(u["b"])(),
							t = e.t;
						return {
							t: t
						}
					}
				});
			c("76f0");
			b.render = s, b.__scopeId = "data-v-4170130a";
			t["a"] = b
		}
	}
]);