# Using Import Value in AWS CDK for Cross Stack References

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/import-value-aws-cdk-cross-stack)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the S3 Bucket CDK stack

```bash
npx aws-cdk deploy my-s3-stack
```

4. Create the Stack that references the S3 Bucket stack

```bash
npx aws-cdk deploy my-cdk-stack
```

4. Open the AWS CloudFormation Console and the stacks should be created in your
   default region

5. Cleanup

```bash
npx aws-cdk destroy my-cdk-stack

npx aws-cdk destroy my-s3-stack
```
