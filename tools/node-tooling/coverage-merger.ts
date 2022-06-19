const fs = require('fs');
const path = require('path');
const glob = require('glob');

const getLcovFiles = function lcov(src: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(`${src}/**/lcov.info`, (error: Error, result: string[]) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

async function init() {
  const files = await getLcovFiles('../..');

  const mergedReport = files.reduce(
    (mergedReportCurrent, currFile) =>
      mergedReportCurrent + fs.readFileSync(currFile),
    '',
  );

  fs.writeFile(
    path.resolve('../../coverage/lcov.info'),
    mergedReport,
    (err: any) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('The file has been saved!');
    },
  );
}

init();

export {};
