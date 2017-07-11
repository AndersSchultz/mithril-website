const m = require('mithril')

module.exports = {
	view: function(vnode) {
		return m("div", [ 
			//m("h2", "Learn how to get your website or blog known",
				m("h2", "Increase your reach and get your message seen on a scale that really matters."),
			//),
			m("p", "Do you fall under one of these categories of people?",
				m("ul",
					m("li", "Socially conscious wanting to affect positive change"),
					//m("li", "Doing profound service aiming to better the world either locally or globally"),
					m("li", "Fighting for something of importance"),
					//m("li", "Have a positive message that needs to be gotten across"),
					m("li", "Helping others with your knowledge or your service"),
					//m("li", "A good-hearted human being making a living")
				)
			),
			m("p", "If so then I would very much like to help you get a flood of visitors to your website"),
			m("p", "The most efficient, low-cost and long-term way to do this is to help you make your content more easily found through search engines."),
			m("p", "This is done through a process known as Search Engine Optimization - or SEO in short. It is a broad subject involving several disciplines. Done right and you become unstoppable."),
			m("p", "Technical things are not a problem. I can help you with these as well."),
			m("br"),
			m("h2", "Learn to attract visitors to your website or blog"),
			m("p", "In practice what I focus on and can help you with is the following:",
				m("ul",
					m("li", "Understanding your current siuation in regards to how many visitors you have and all the things that can be known about them."),
					m("li", "Upgrading your web platform in terms of speed and usability (as needed)"),
					m("li", "Solving any technical issues your website might have that limits its potential"),
					m("li", "Discovering what words your audience is likely to use when searching for information relevant to your topic"),
					m("li", "Making a strategy around those key words and ensuring that your content is optimized to get high positions in the search engines."),
					m("li", "Understanding what type of content your visitors are most likely to share and engage with"),
					m("li", "Reaching out to other website owners and asking them share your content by linking to it"),
					m("li", "Making a strategy around how to capture the contact information of your visitors so that you can update them with new content you publish"),
					m("li", "If you are selling a service or product: Making a strategy around how to communicate your message in a way that will end up in the right people reaching out for your service."),
				)
			),
			m("p", "If you do not have a website yet I also help you to get this set up in the most cost efficient way as possible."),
			m.trust("<p>See the details about my <a href='#'>Get Traffic</a> service"),
			m("br"),
			m("br")
		])
	}
}
