function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const result1 = await luckyDraw("Tina");
    console.log("Results:", result1);

    const result2 = await luckyDraw("Jorge");
    console.log("Results:", result2);

    const result3 = await luckyDraw("Julien");
    console.log("Results:", result3);
  } catch (error) {
    console.error(error);
  }
}

/* async function getResults() {
  try {
    const data = await Promise.all([
      luckyDraw("Tina"),
      luckyDraw("Jorge"),
      luckyDraw("Julien"),
    ]);

    console.log("data:", data);
  } catch (error) {
    console.error(error);
  }
} */

getResults();
