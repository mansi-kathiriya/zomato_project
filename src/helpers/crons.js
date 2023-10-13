const CronJob = require("cron").CronJob;
const { emailService, userService } = require("../services");

/** It's running on every 3 second */
new CronJob(
    "*/3 * * * * *",
    function () {
        // console.log("It's running on every 3 second", new Date());
    },
    null,
    false,
    "Asia/Kolkata"
).start();