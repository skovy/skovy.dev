require("dotenv").config({ path: ".env.development" });

const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const https = require("https");

const TIMEZONE_OFFSET = -7;

// https://unsplash.com/documentation#supported-parameters
const UNSPLASH_IMAGE_QUERY_PARAMS = ["w=1200", "crop=edges", "fm=jpg"];

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);

  if (fs.existsSync(dirname)) return true;

  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function saveImageToDisk(url, localPath) {
  return new Promise((resolve, reject) => {
    try {
      ensureDirectoryExistence(localPath);
      const file = fs.createWriteStream(localPath);
      https.get(`${url}&${UNSPLASH_IMAGE_QUERY_PARAMS.join("&")}`, function(
        response
      ) {
        response.pipe(file);
        response.on("end", () => resolve());
      });
    } catch (err) {
      console.error(`Error occurred downloading "${url}" to "${localPath}"`);
      reject(err);
    }
  });
}

async function loadImageDetails(imageId) {
  const result = await fetch(
    `https://api.unsplash.com/photos/${imageId}/?client_id=${process.env.UNSPLASH_API_KEY}`
  );

  const {
    user: { name: userName },
    urls: { raw: rawUrl }
  } = await result.json();

  return { userName, rawUrl };
}

module.exports = {
  prompt: async ({ prompter, args }) => {
    const IMAGE_PATH = path.resolve(
      "content",
      "blog",
      args.name,
      "images",
      "featured-image.jpg"
    );

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

    const { rawPhotoId } = await prompter.prompt({
      type: "input",
      name: "rawPhotoId",
      message:
        "What is the Unsplash Photo ID? (eg: https://unsplash.com/photos/LMGoXPFd6NY or LMGoXPFd6NY)"
    });

    const photoId = rawPhotoId.replace("https://unsplash.com/photos/", "");

    console.log("⬇️  Fetching more image details...");
    const { userName, rawUrl } = await loadImageDetails(photoId);
    console.log("✅ Details fetched.");

    console.log("⬇️  Downloading the image...");
    await saveImageToDisk(rawUrl, IMAGE_PATH);
    console.log("✅ Image downloaded.");

    const now = new Date();
    now.setHours(now.getHours() + TIMEZONE_OFFSET);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    return {
      date: now.toISOString(),
      description,
      tags: tags.split(","),
      featuredImageCredit: `Photo by ${userName}`
    };
  }
};
