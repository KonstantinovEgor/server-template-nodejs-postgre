const http = require('http');
const chalk = require('chalk');

const serverService = () => {

    const checkEnvironment = environment => {

        if (environment !== 'production' &&
                environment !== 'development' &&
                environment !== 'testing') {
                console.log(
                    chalk.red(
                        `\nNODE_ENV is set to ${environment}, but only production, development and testing are valid.\n`
                    )
                );
                process.exit(1);
            }

    };

    const startServer = (app, config) => {

        try {
            checkEnvironment(config.environment);

            const server = http.Server(app);

             server.listen(config.port, async () => {
                console.log(chalk.green(`\nServer started on http://${config.host}:${config.port}`))
            });
        } catch (error) {
            console.info(chalk.red(`\nFail to start server!\n${error}\n`));
        };

    };

    return {
        startServer
    };
};

module.exports = serverService;