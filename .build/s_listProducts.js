
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'joaodev',
  applicationName: 'aws-sls-api',
  appUid: 'njK8nGjwklbHfMXp4f',
  orgUid: '4a0d267f-11f5-44ab-adb0-f852cb59bff2',
  deploymentUid: '095529a0-d914-45f2-8593-01712549a37b',
  serviceName: 'serverless-crud',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '7.2.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'serverless-crud-dev-listProducts', timeout: 6 };

try {
  const userHandler = require('./src/functions/listProducts.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}