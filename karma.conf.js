module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"], // ใช้ Jasmine framework สำหรับ unit testing
    files: [
      "src/**/*.spec.ts", // รันไฟล์ spec ที่อยู่ในโฟลเดอร์ src
    ],
    preprocessors: {
      "src/**/*.spec.ts": ["typescript"], // ใช้ TypeScript สำหรับไฟล์ spec
    },
    browsers: ["ChromeHeadless"], // ใช้ ChromeHeadless แทน ChromeHeadlessCI
    singleRun: true, // ตั้งค่าให้รันแค่ครั้งเดียวแล้วปิด
    reporters: ["progress", "kjhtml"], // กำหนดรูปแบบการแสดงผล
    customLaunchers: {
      ChromeHeadless: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-gpu",
          "--remote-debugging-port=9222",
        ],
      },
    },
  });
};
