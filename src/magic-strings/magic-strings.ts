export const magicStrings = {
  path: {
    root: process.cwd(),
    get htmlReport() {
      return `${this.root}/jest_html_reporters.html`;
    },
    get htmlReportResults() {
      return `${this.root}/jest-html-reporters-attach'`;
    },
  },
};
