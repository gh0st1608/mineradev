

resource "aws_cloudfront_distribution" "my-distribution" {
  origin {
    domain_name = var.bucket_regional_domain_name
    origin_id   = "S3-Origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1"]
    }

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.my_oai.cloudfront_access_identity_path
    }


  }


  aliases = ["www.miningsculture.com"]

  enabled = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-Origin"
    viewer_protocol_policy = "redirect-to-https"

    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

  }


  viewer_certificate {
    //acm_certificate_arn = var.certificate_miningsculture_arn
    acm_certificate_arn = var.certificate_miningsculture_arn
    ssl_support_method = "sni-only"
  }


  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  depends_on = [
    var.certificate_miningsculture_resource,
    
  ]

  tags = {
    Name        = "my-cloudfront-distribution"
    Environment = "dev"
  }

}

# Crear un Origin Access Identity para CloudFront
resource "aws_cloudfront_origin_access_identity" "my_oai" {
  comment = "OAI for S3 bucket"
}


