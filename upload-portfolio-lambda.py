import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    # TODO implement
    s3 = boto3.resource('s3')

    portfolio_bucket = s3.Bucket('mmaer-portfolio-serverless')
    build_bucket = s3.Bucket('mmaer-portfoliobuild')
    
    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuid.zip', portfolio_zip)
    
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    
    return 'Hello lambda function'
