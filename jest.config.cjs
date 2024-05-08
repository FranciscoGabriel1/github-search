module.exports = {
  preset: 'ts-jest',  
  testEnvironment: 'jest-environment-jsdom',  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  
    '\\.css$': 'identity-obj-proxy',  
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
};
