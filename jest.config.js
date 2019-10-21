
module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    moduleNameMapper: {
      '\\.css$': '<rootDir>/EmptyModule.js'
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],

    
  }