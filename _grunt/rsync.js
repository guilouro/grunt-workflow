module.exports = {
	options: {
		args: ["-Cravz"],
		exclude: [""],
		recursive: true,
		syncDest: true
	},
	production: {
		options: {
			src: "build/",
			dest: "/path/server",
			host: "user@host.com",
		}
	}
};
