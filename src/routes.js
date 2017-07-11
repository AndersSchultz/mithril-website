const m = require('mithril')
const frontpage = require('./frontpage')
const services = require('./services')
const template = require('./template')

module.exports = {
    "/home": {
        render: function() {
            return m(template, m(frontpage))
        }
    },
    "/services": {
        render: function() {
            return m(template, m(services))
        }
    }
    //"/about-me": aboutMe
}