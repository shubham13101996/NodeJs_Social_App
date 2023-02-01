const kue = require("kue");
const queue = kue.createQueue();
const addJobToQueue = (jobCategoryType, messageObject) => {
  console.log(jobCategoryType);
  console.log(messageObject);

  let job = queue.create(jobCategoryType, messageObject).save(function (err) {
    if (err) {
      console.log("Error in creating a queue", err);
      return;
    }
    console.log("job enqueued", job.id);
  });
};

module.exports = { addJobToQueue, queue };
