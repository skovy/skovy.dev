const TIMEZONE_OFFSET = -7;

module.exports = {
  prompt: async ({ prompter }) => {
    const { description } = await prompter.prompt({
      type: "input",
      name: "description",
      message: "What's the post's description?"
    });

    const { tags } = await prompter.prompt({
      type: "input",
      name: "tags",
      message: "What tags should be associated? (comma delimited, no spaces)"
    });

    const now = new Date();
    now.setHours(now.getHours() + TIMEZONE_OFFSET);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    return { date: now.toISOString(), description, tags: tags.split(",") };
  }
};
