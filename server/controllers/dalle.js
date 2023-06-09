const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function test(req, res) {
  res.send("Testing Dall-e");
}

async function create(req, res) {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format: "url",
    });

    const image = response.data.data[0].url;
    console.log(response.data);
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

module.exports = {
  test,
  create,
};
