
module "s3" {
  source = "./s3"
}

module "certificate" {
  source = "./certificate"
  certificate_domain_name = var.domain_name
}

module "cloudfront" {
  source = "./cloudfront"
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  certificate_miningsculture_arn = module.route53.certificate_miningsculture_arn
  certificate_miningsculture_resource = module.certificate.certificate_miningsculture_resource
}

module "route53" {
  source = "./route53"
  cloudfront_my_distribution_domain_name =  var.domain_name
  cloudfront_my_distribution_hosted_zone_id =  module.cloudfront.my_distribution_hosted_zone_id
  cloudfront_distribution = module.cloudfront.my_distribution
}








