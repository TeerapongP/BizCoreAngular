module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/**/*.spec.ts'
      ],
      preprocessors: {
        'src/**/*.spec.ts': ['webpack']
      },
      reporters: ['progress'],
      browsers: ['ChromeHeadlessCI'],  // ใช้ ChromeHeadless ใน CI
      singleRun: true,  // ทดสอบครั้งเดียวแล้วหยุด
      autoWatch: false, // ไม่ต้องคอยติดตามการเปลี่ยนแปลงของไฟล์
      colors: true
    });
  };
  