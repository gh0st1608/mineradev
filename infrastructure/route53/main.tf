resource "aws_route53_record" "cloudfront_alias" {
  zone_id = aws_route53_zone.main.zone_id  # Cambia esto por el ID de tu zona alojada en Route 53
  name    = "miningsculture.com"  # Cambia esto por tu dominio personalizado
  type    = "A"

  alias {
    name                   =  var.cloudfront_my_distribution_domain_name
    zone_id                =  var.cloudfront_my_distribution_hosted_zone_id
    evaluate_target_health = true
  }

  //depends_on = [var.cloudfront_distribution]
}


resource "aws_route53_zone" "main" {
  name = "miningsculture.com"
  tags = {
    Environment = "prod"
  } 
}

resource "aws_route53_zone" "dev" {
  name = "dev.miningsculture.com"

  tags = {
    Environment = "dev"
  } 
} 

/* resource "aws_route53_record" "cert-validation-record" {
  for_each = {
    for dvo in aws_acm_certificate.cert-miningsculture-com.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.main.zone_id
}  */


/* 
resource "aws_acm_certificate_validation" "cert-validation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
  //validation_record_fqdns = [for record in aws_route53_record.cert-validation-record : record.fqdn]
}  */