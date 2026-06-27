const INFO = {
	main: {
		title: "Vishal Naikawadi | Tech Lead",
		name: "Vishal Naikawadi",
		email: "vishalnaikawadi@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/vishalnaikawadi",
		linkedin: "https://www.linkedin.com/in/vishalnaikawadi/",
		stackoverflow: "https://stackoverflow.com/users/7023751/vishal-naikawadi",
	},

	homepage: {
		eyebrow: "Tech Lead · Curious builder · Mobile products",
		title: "I like turning ideas into mobile products that feel useful, personal, and a little unexpected.",
		description:
			"I work at the intersection of mobile engineering, product thinking, AI experiments, and team leadership. This portfolio is less about listing every credential and more about the way I explore problems, build in public, lead delivery, and stay curious about where software is going next.",
		stats: [
			{ value: "Lead", label: "turning unclear product goals into shippable mobile plans" },
			{ value: "Builder", label: "making personal products outside the day job" },
			{ value: "Explorer", label: "testing AI, automation, and new mobile patterns" },
			{ value: "Mentor", label: "helping teams move with clarity and ownership" },
		],
		currentBuild: {
			name: "Solo Saga",
			label: "Currently building",
			description:
				"A personal journaling app that converts daily journal entries into comic book-style storyboards. It is my playground for AI storytelling, mobile UX, creativity, memory, and emotional reflection.",
			link: "https://apps.apple.com/us/app/solosaga/id6761699620",
			linkText: "View on App Store",
			tags: ["Journaling", "AI storyboards", "Comic strips", "Personal product"],
		},
		skills: [
			"React Native",
			"TypeScript",
			"Expo / EAS",
			"AI workflows",
			"Playwright",
			"Maestro",
			"Store releases",
			"Firebase",
		],
		highlights: [
			"I like leading from the middle: clarifying tradeoffs, unblocking people, reviewing decisions, and keeping delivery practical.",
			"I stay close to the craft by building personal apps, testing AI workflows, and learning from real product constraints.",
			"I care about products that combine usefulness with feeling: tools that help people learn, reflect, create, or understand themselves better.",
		],
	},

	about: {
		title: "I’m Vishal Naikawadi, a Tech Lead based in Mumbai.",
		description:
			"I spend most of my time building with React Native and React: shaping mobile product architecture, designing reusable flows, handling releases, and connecting product ideas with polished user experiences. My recent work includes Quicktakes.ai at work, plus personal products like Solo Saga and Claripath, where I explore AI storytelling, journaling, mentorship discovery, and the small details that make mobile apps feel personal.",
		focus: [
			"Leading React Native delivery for Quicktakes.ai across architecture, feature planning, native integrations, app quality, Expo/EAS workflows, and release readiness.",
			"Building Solo Saga, a journaling app that turns daily reflections into comic-style storyboards, combining React Native UX, AI storytelling, and personal product thinking.",
			"Exploring Claripath as a student mentor-discovery product, focusing on React Native delivery, product design, app release learning, and clearer guidance experiences for students.",
		],
	},

	projects: [
		{
			title: "Quicktakes.ai",
			description:
				"AI learning app for students. I lead React Native delivery across architecture, upgrades, native integrations, IAP, file uploads, audio recording, AI content workflows, EAS builds, OTA updates, automation, and production release readiness.",
			asset: "quicktakes.png",
			tags: ["React Native", "AI", "Expo/EAS", "IAP", "Automation"],
			linkText: "View App",
			link: "https://play.google.com/store/apps/details?id=com.edkey.quicktakes",
		},

		{
			title: "LEAD Student App",
			description:
				"B2B2C education app used by LEAD students. I maintained React Native modules inside Android, worked on UI and feature revamps, supported iHomework and Resource Management, and helped improve the home-study experience.",
			asset: "lead.png",
			tags: ["React Native", "Android", "Kotlin", "Education"],
			linkText: "View App",
			link: "https://play.google.com/store/apps/details?id=com.leadschool.parentapp",
		},

		{
			title: "mAudit",
			description:
				"B2B field management app where I developed reusable themes, led customizations and deployments, reviewed code, tested modules, and improved performance by moving legacy network/XML parsing toward REST API and Retrofit.",
			asset: "transovative.jpeg",
			tags: ["Android", "Java", "Retrofit", "B2B"],
			linkText: "Visit Website",
			link: "https://transovative.com/",
		},
	],

	currentFocusProjects: [
		{
			title: "Solo Saga",
			description:
				"A personal project that turns daily journal entries into comic book-style storyboards. I am exploring how React Native, AI storytelling, and a playful writing experience can make reflection feel more alive.",
			tags: ["React Native", "AI storyboards", "Journaling", "iOS"],
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/solosaga/id6761699620",
			images: [
				{ src: "solo-saga-story.png", alt: "Solo Saga comic storyboard preview" },
				{ src: "solo-saga-journal.png", alt: "Solo Saga journaling editor preview" },
			],
		},
		{
			title: "Claripath",
			description:
				"A mentor-discovery and course exploration app for students. I am focused on making career discovery feel clearer through course browsing, profession discovery, and mentor matching flows.",
			tags: ["React Native", "Mentorship", "Courses", "Android"],
			linkText: "View on Play Store",
			link: "https://play.google.com/store/apps/details?id=com.beatsandbytes.claripath&pcampaignid=web_share",
			images: [
				{ src: "claripath-courses.png", alt: "Claripath explore courses preview" },
				{ src: "claripath-mentors.png", alt: "Claripath mentor matching preview" },
			],
		},
	],
};

export default INFO;
