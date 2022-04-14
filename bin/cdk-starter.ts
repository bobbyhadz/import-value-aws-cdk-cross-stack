#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack, S3BucketStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

new S3BucketStack(app, 'my-s3-stack', {
  stackName: 'my-s3-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

new MyCdkStack(app, 'my-cdk-stack', {
  stackName: 'my-cdk-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
