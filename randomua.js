const randomUseragent = require("random-useragent"),
      fs = require("fs"),
      numberOfIterations = 10000;

let userAgents = [];

(async () => {
  for (let i = 0; i < numberOfIterations; i++) {
    const userAgent = randomUseragent.getRandom();
    userAgents.push(userAgent);
    
    // Ghi dữ liệu vào file mỗi 100.000 user agent
    if (userAgents.length % 100000 === 0) {
      await writeToFile(userAgents);
      userAgents = [];
    }
  }

  // Ghi dữ liệu còn lại vào file
  if (userAgents.length > 0) {
    await writeToFile(userAgents);
  }

  console.log("Dương đã cho bạn 1 tỷ user agent, dec script by phúc, và phúc tặng bạn 1 củ ua");
})();

async function writeToFile(userAgents) {
  const data = userAgents.join("\n");
  await fs.promises.appendFile("ua.txt", data + "\n");
}