resource "aws_s3_bucket" "miningsculture" {
    bucket = "miningsculture.com"

}

resource "aws_s3_bucket_acl" "example_bucket_acl" {

    bucket = aws_s3_bucket.miningsculture.id
    acl    = "public-read"
    //acl = "private"

    depends_on = [
        aws_s3_bucket_ownership_controls.bucket_ownership_controls_miningsculture,
        aws_s3_bucket_public_access_block.bucket_public_access_block_miningsculture,
    ]
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownership_controls_miningsculture" {
  bucket = aws_s3_bucket.miningsculture.id
  rule {
    object_ownership = "BucketOwnerPreferred"
    //object_ownership = "ObjectWriter"
  }

}

/* resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.miningsculture.id

  policy = jsonencode({
    Version = "2012-10-17"
    Id      = "AllowGetObjects"
    Statement = [
      {
        Sid       = "AllowPublic"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.miningsculture.arn}/**"
      }
    ]
  })
} */

resource "aws_s3_bucket_public_access_block" "bucket_public_access_block_miningsculture" {
  bucket = aws_s3_bucket.miningsculture.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false 
}




resource "aws_s3_bucket_website_configuration" "my-config" {
    bucket = aws_s3_bucket.miningsculture.id
    index_document {
        suffix = "index.html"
    }
}

locals {
    mime_types = {
      ".html" = "text/html"
      ".png"  = "image/png"
      ".jpg"  = "image/jpeg"
      ".gif"  = "image/gif"
      ".css"  = "text/css"
      ".js"   = "application/javascript"
    }
}

resource "aws_s3_object" "build" {
  for_each = fileset("../app/src/", "**")
  bucket = aws_s3_bucket.miningsculture.id
  key = each.value
  source = "../app/src/${each.value}"
  etag = filemd5("../app/src/${each.value}")
  acl    = "public-read"
  //content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.key), null)
}