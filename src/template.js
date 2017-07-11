const m = require('mithril')

module.exports = {
    view: function(vnode) {
        return m("div",
            m("header.sticky.row", [
                m("div.col-sm-12.col-md-10.col-lg-8.col-md-offset-1.col-lg-offset-2.inner",
                    m("label.button.drawer-toggle[for=drawer-checkbox]"),
                    m("a.logo[href=#]", "Get Traffic"
                        //m("img", { src: logo, style: "height: 40px; padding-top:2px" })
                    ),
                    m("button[href=/home]", { oncreate: m.route.link }, "Home"),
                    m("a.button[href=/services]", { oncreate: m.route.link }, "Services"),
                    m("a.button[href=/about-me]", { oncreate: m.route.link }, "About me")
                )
            ]),
            m("div.container.hero",
                m("div.row",
                    m("div.col-sm-12.col-md-10.col-lg-8.col-md-offset-1.col-lg-offset-2.inner",
                        m("h1", "Share your message with the world"),
                        m("div","- and make it a better place")
                    )
                )
            ),
            m("div.container",
                m("div.row",
                    m("div.col-sm-12.col-md-10.col-lg-8.col-md-offset-1.col-lg-offset-2.inner",
                        m("br"),
                        vnode.children
                        // m("h2", "A Mithril.js web application starter kit",
                        //     m("small", "Made possible by Node.js and JavaScript"),
                        //     m("small", "Packed by webpack.")
                        //  ),
                        // m("p",
                        //     m("span", "This is where "),
                        //     m("mark.secondary", "it all starts"),
                        //     m("span", " ...")
                        // )
                    )
                )
            ),
            m("footer",
                m("p", m.trust("&copy; 2017 Visionary Programmer | <a href='/about-me'>About me</a> | <a href='#'>Terms of use</a>"))
            )
        )
    }
}
