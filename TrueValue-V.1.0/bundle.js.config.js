/*this file include config file for bundling the dev files*/
module.exports = {
    bundle: {
        framework: {
            scripts: [
                './www/js/lib/jquery.1.12.3.js',
                './www/js/lib/bootstrap.js',
                './www/js/lib/angular.js',
                './www/js/lib/angular-route.js',
                './www/js/lib/angular-sanitize.js',
            ],
            options: {
                rev: false
            }
        },
        application: {
            scripts: [
                './www/js/app.js'
            ],
            options: {
                rev: false
            }
        },
        controllers: {
            scripts: [
                './www/js/controllers/**/*.js'
            ],
            options: {
                rev: false
            }
        },
        directives: {
            scripts: [
                './www/js/directives/**/*.js'
            ],
            options: {
                rev: false
            }
        }
    }
};