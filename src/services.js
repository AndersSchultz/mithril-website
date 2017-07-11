const m = require('mithril')

module.exports = {
	view: function(vnode) {
		return m("div", [ 
            m("h1", "More visitors to your website - your message to the world"),
            m("h2", "The challenge"),
            m("p", "How to get more visitors (or \"traffic\" as it is often referred to) to your website is not inherently difficult. However, it is time consuming and difficult to find the best resources to learn especially if you are also in need of keeping the costs low."),
            m("p", "As you scour the vast amount of free information you might be wondering about the quality of the resource you are learning from and whether you are given all what you need to learn or if something is held pay behind \"pay walls\". Plus learning the theory by going through an online course or a weekend seminar might leave you slightly anxious as to whether you will now manage to put it all into practice and really get the most out of the efforts you have spent on learning the material."),
            m("p", "Going it alone can be a bit of a daunting task when starting out because there are quite many factors to consider and several tools to understand and use. Plus, you will most likely need to solve technical issues in regards to your website platform."),
            m("p", "Getting help from consultants can be quite expensive and without the kowledge yourself it is difficult to evaluate the quality of what you are getting for your money (and even what exactly you are getting)."),
            m("h2", "Step by step guidance - and your very own troubleshooter"),
            m("p", "Instead of doing it on your own I offer a process where you are still learning what you need to learn - but in a way that makes you feel sure about what you are doing and will allow you to master the subject in good time."),
            m("p", "The approach I offer is:",
                m("ul",
                    m("li", "Giving you a proven path to walk"),
                    m("li", "Teaching you exactly what you need - when you need it"),
                    m("li", "Review your findings or actions to alleviate doubts and verify your understanding"),
                    m("li", "Answer your questions at any step on the road as you need")
                )
            ),
            m("p", "Plus:",
                m("ul",
                    m("li", "Removing the technical obstacles on your way (while teaching you technical aspects to the degree you are interested)")
                )
            ),
            m("h2", "The system in more details"),
            m("p", "Here is a list with the overall parts of the plan."),
            "(List follows)"
        ])
    }
}