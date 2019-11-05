report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/abctime_demo_one_abctime_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20191104-175245/abctime_demo_one_abctime_0_document_0_phone.png",
        "selector": "document",
        "fileName": "abctime_demo_one_abctime_0_document_0_phone.png",
        "label": "abctime",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.95",
          "analysisTime": 17
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20191104-175245/failed_diff_abctime_demo_one_abctime_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "abctime_demo_one"
});