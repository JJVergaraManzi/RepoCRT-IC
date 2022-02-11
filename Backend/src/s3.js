import dotenv from 'dotenv'
import aws from 'aws-sdk'

dotenv.config()

const region ="us-east-2"
const bucketName ="crtic-filestorage"
const accesKeyId =process.env.AWS_SECRET_KEY
const secretAccessKey =process.env.AWS_ACCES_KEY_ID

const s3 = new aws.S3({
    region,
    bucketName,
    accesKeyId,
    secretAccessKey,
    signatureVersion:'4'
})

export async function generateUploadURL(){
    const imageName=""

    const params =({
        Bucket: bucketName,
        Key:imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}