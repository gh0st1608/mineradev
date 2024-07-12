module "s3" {
  source = "./s3"
}

module "cloudfront" {
  source = "./cloudfront"
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  certificate_miningsculture_arn = module.route53.certificate_miningsculture_arn
  certificate_miningsculture = module.route53.certificate_miningsculture
}

module "route53" {
  source = "./route53"
  domain = var.domain
}

