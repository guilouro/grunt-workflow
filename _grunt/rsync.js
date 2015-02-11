module.exports = {
    options: {
        args: ["-Cravz"],
        exclude: [""],
        recursive: true,
        syncDest: true
    },
    production: {
        options: {
            src: "<%= path.dest %>",
            dest: "/path/server",
            host: "user@host.com",
        }
    }
};