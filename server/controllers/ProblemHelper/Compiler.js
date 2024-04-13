const fs = require("fs");
const { exec } = require("child_process");

exports.compilecode = async (req, res) => {
  const code = req.body.code;
  const input = req.body.input || "";
  const language = req.body.language.toLowerCase();

  const fileName = `Main.${language}`;
  const execCommand =
    language === "cpp"
      ? `g++ ${fileName} -o Main && echo '${input}' | ./Main`
      : language === "java"
      ? `javac ${fileName} && java Main`
      : language === "python"
      ? `python3 ${fileName}`
      : "";

  if (!execCommand) {
    res.send({
      success: false,
      message: "Unsupported language. Please choose C++, Java, or Python.",
    });
    return;
  }

  fs.writeFileSync(fileName, code);

  const startTime = new Date().getTime();

  exec(execCommand, (error, stdout, stderr) => {
    const endTime = new Date().getTime();
    const executionTime = endTime - startTime;

    if (error) {
      res.send({ success: false, message: stderr, time: executionTime });
    } else {
      const spaceComplexity = code.length;

      res.send({
        success: true,
        message: stdout,
        time: executionTime,
        space: spaceComplexity,
      });
    }
  });
};
