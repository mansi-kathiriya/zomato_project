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

/** Multiple send email */
new CronJob(
    "0 7 * * *",
    async () => {
      const userDetails = await userService.getUserList();

      const userEmails = [];
      for (let ele of userDetails) {
        userEmails.push(ele.email);
      }

      await emailService.sendMail(
        userEmails,
        "Morning message",
        "Good morning! Have a nice day :)"
      );
    },
    null,
    false,
    "Asia/Kolkata"
  ).start();