(window["webpackJsonp"] = window["webpackJsonp"] || [])
.push([
	["categories"], {
		4886: function(e, t, c) {
			"use strict";
			c.r(t);
			var n = c("7a23"),
				r = {
					class: "flex flex-col"
				},
				a = {
					class: "post-header"
				},
				b = {
					class: "post-title text-white uppercase"
				},
				s = {
					class: "main-grid"
				},
				j = Object(n["j"])("div", {
					class: "relative"
				}, [Object(n["j"])("div", {
					class: "\n            post-html\n            bg-ob-deep-800\n            px-14\n            py-16\n            rounded-2xl\n            shadow-xl\n            block\n            min-h-screen\n          "
				})], -1),
				u = {
					class: "col-span-1"
				};

			function i(e, t, c, i, d, o) {
				var l = Object(n["I"])("Breadcrumbs"),
					O = Object(n["I"])("Sidebar");
				return Object(n["A"])(), Object(n["g"])("div", r, [Object(n["j"])("div", a, [Object(n["j"])(l, {
					current: e.t("menu.categories")
				}, null, 8, ["current"]), Object(n["j"])("h1", b, Object(n["M"])(e.t("menu.categories")), 1)]), Object(n["j"])("div", s, [j, Object(n["j"])("div", u, [Object(n["j"])(O)])])])
			}
			var d = c("2a1d"),
				o = c("b6c6"),
				l = c("47e2"),
				O = Object(n["k"])({
					name: "Category",
					components: {
						Sidebar: d["d"],
						Breadcrumbs: o["a"]
					},
					setup: function() {
						var e = Object(l["b"])(),
							t = e.t;
						return {
							t: t
						}
					}
				});
			O.render = i;
			t["default"] = O
		},
		"76f0": function(e, t, c) {
			"use strict";
			c("b1d6")
		},
		b1d6: function(e, t, c) {},
		b6c6: function(e, t, c) {
			"use strict";
			var n = c("7a23"),
				r = Object(n["W"])("data-v-4170130a");
			Object(n["D"])("data-v-4170130a");
			var a = {
				class: "breadcrumbs flex flex-row gap-6 text-white"
			};
			Object(n["B"])();
			var b = r((function(e, t, c, r, b, s) {
					return Object(n["A"])(), Object(n["g"])("ul", a, [Object(n["j"])("li", null, Object(n["M"])(e.t("menu.home")), 1), Object(n["j"])("li", null, Object(n["M"])(e.current), 1)])
				})),
				s = c("47e2"),
				j = Object(n["k"])({
					name: "Breadcrumb",
					props: {
						current: String
					},
					setup: function() {
						var e = Object(s["b"])(),
							t = e.t;
						return {
							t: t
						}
					}
				});
			c("76f0");
			j.render = b, j.__scopeId = "data-v-4170130a";
			t["a"] = j
		}
	}
]);