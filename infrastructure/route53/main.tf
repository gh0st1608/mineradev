resource "aws_acm_certificate" "cert-miningsculture-com" {
  domain_name       = "${var.domain}" //var.domain
  validation_method = "DNS"
  subject_alternative_names = ["*.${var.domain}"]

  lifecycle {
    create_before_destroy = true
  }
}


resource "aws_route53_zone" "main" {
  name = "miningsculture.com"
}

resource "aws_route53_zone" "dev" {
  name = "dev.miningsculture.com"

  tags = {
    Environment = "dev"
  } 
}



resource "aws_route53_record" "cert-validation-record" {
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
} 



resource "aws_acm_certificate_validation" "cert-validation" {
  certificate_arn         = aws_acm_certificate.cert-miningsculture-com.arn
  validation_record_fqdns = [for record in aws_route53_record.cert-validation-record : record.fqdn]
}