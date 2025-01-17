/*!
 * paginga - jQuery Pagination Plugin v0.8.1
 * https://github.com/mrk-j/paginga
 *
 * Copyright 2017 Mark and other contributors
 * Released under the MIT license
 * https://github.com/mrk-j/paginga/blob/master/LICENSE
 */
! function(t, s, e, i) {
    "use strict";

    function a(s, e) {
        this.element = s, this.settings = t.extend(!0, {}, r, e), this._defaults = r, this._name = n, this._ready = !1, this.currentPage = this.settings.page, this.items = t(this.element).find(this.settings.itemsContainer + " " + this.settings.item), this.totalPages = Math.ceil(this.items.length / this.settings.itemsPerPage), this.totalPages <= 1 ? t(this.element).find(this.settings.pager).hide() : this.init()
    }
    var n = "paginga",
        r = {
            itemsPerPage: 3,
            itemsContainer: ".items",
            item: "> div",
            page: 1,
            nextPage: ".nextPage",
            previousPage: ".previousPage",
            firstPage: ".firstPage",
            lastPage: ".lastPage",
            pageNumbers: ".pageNumbers",
            maxPageNumbers: !1,
            currentPageClass: "active",
            pager: ".pager",
            autoHidePager: !0,
            scrollToTop: {
                offset: 15,
                speed: 100
            },
            history: !1,
            historyHashPrefix: "page-"
        };
    t.extend(a.prototype, {
        init: function() {
            if (this.bindEvents(), this.showPage(), this.settings.history) {
                var t = this;
                if (s.location.hash) {
                    var e = parseInt(s.location.hash.substring(t.settings.historyHashPrefix.length + 1), 10);
                    e <= t.totalPages && e > 0 && (t.currentPage = e, t.showPage.call(t))
                }
                s.addEventListener("popstate", function(s) {
                    t.currentPage = s && s.state && s.state.page ? s.state.page : t.settings.page, t.showPage.call(t)
                })
            }
            this._ready = !0
        },
        bindEvents: function() {
            var s = this,
                e = t(s.element),
                i = e.find(s.settings.previousPage),
                a = e.find(s.settings.nextPage),
                n = e.find(s.settings.firstPage),
                r = e.find(s.settings.lastPage);
            i.on("click", function() {
                s.showPreviousPage.call(s)
            }), a.on("click", function() {
                s.showNextPage.call(s)
            }), n.on("click", function() {
                s.showFirstPage.call(s)
            }), r.on("click", function() {
                s.showLastPage.call(s)
            })
        },
        showPreviousPage: function() {
            this.currentPage--, this.currentPage <= 1 && (this.currentPage = 1), this.setHistoryUrl(), this.showPage()
        },
        showNextPage: function() {
            this.currentPage++, this.currentPage >= this.totalPages && (this.currentPage = this.totalPages), this.setHistoryUrl(), this.showPage()
        },
        showFirstPage: function() {
            this.currentPage = 1, this.setHistoryUrl(), this.showPage()
        },
        showLastPage: function() {
            this.currentPage = this.totalPages, this.setHistoryUrl(), this.showPage()
        },
        showPage: function() {
            var e = this.currentPage * this.settings.itemsPerPage - this.settings.itemsPerPage,
                i = e + this.settings.itemsPerPage;
            t.each(this.items, function(s, a) {
                return s >= e && i > s ? (t(a).show(), !0) : void t(a).hide()
            });
            var a = this,
                n = t(a.element),
                r = n.find(a.settings.previousPage),
                g = n.find(a.settings.nextPage),
                h = n.find(a.settings.firstPage),
                o = n.find(a.settings.lastPage);
            a._ready && a.settings.scrollToTop && n.offset().top - a.settings.scrollToTop.offset < t(s).scrollTop() && t("html, body").animate({
                scrollTop: n.offset().top - a.settings.scrollToTop.offset
            }, a.settings.scrollToTop.speed), this.currentPage <= 1 ? (r.addClass("disabled"), h.addClass("disabled")) : (r.removeClass("disabled"), h.removeClass("disabled")), this.currentPage >= this.totalPages ? (g.addClass("disabled"), o.addClass("disabled")) : (g.removeClass("disabled"), o.removeClass("disabled"));
            var l = n.find(this.settings.pager),
                P = l.find(this.settings.pageNumbers);
            if (P) {
                P.html("");
                var c = 1,
                    u = this.totalPages;
                if (this.settings.maxPageNumbers) {
                    var d = Math.ceil((this.settings.maxPageNumbers - 1) / 2);
                    c = Math.max(1, this.currentPage - d), u = Math.min(this.totalPages, this.currentPage + d), u - c < this.settings.maxPageNumbers - 1 && (d >= c ? u = Math.min(this.totalPages, c + this.settings.maxPageNumbers - 1) : u > this.totalPages - d && (c = Math.max(1, u - this.settings.maxPageNumbers + 1)))
                }
                for (var f = c; u >= f; f++) {
                    var m = f == this.currentPage ? this.settings.currentPageClass : "";
                    P.append("<a href='javascript:void(0);' data-page='" + f + "' class='" + m + "'>" + f + "</a>")
                }
                P.find("a").on("click", function() {
                    a.currentPage = t(this).data("page"), a.setHistoryUrl.call(a), a.showPage.call(a)
                })
            }
        },
        setHistoryUrl: function() {
            var t = this;
            t._ready && t.settings.history && "pushState" in history && history.pushState({
                page: this.currentPage
            }, null, "#" + t.settings.historyHashPrefix + this.currentPage)
        }
    }), t.fn[n] = function(s) {
        return this.each(function() {
            t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new a(this, s))
        })
    }
}(jQuery, window, document);