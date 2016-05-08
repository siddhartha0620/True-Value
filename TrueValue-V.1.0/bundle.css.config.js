/*this file include config file for bundling the dev files*/
module.exports = {
    bundle: {
        framework: {
            styles: [
                './www/css/lib/bootstrap.css',
                './www/css/lib/bootstrap-4.v.alpha.css',
                './www/css/lib/bootstrap-theme.css',
            ],
            options: {
                rev: false
            }
        },
        site: {
            styles: [
                './www/css/site.css'
            ],
            options: {
                rev: false
            }
        }
    }
};