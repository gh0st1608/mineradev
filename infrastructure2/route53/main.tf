resource "aws_route53_zone" "primary" {
  name = var.domain
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${aws_route53_zone.primary.name}"
  type    = "A"
  ttl     = 300
  records = [var.public_ip]
}

resource "aws_route53_record" "blank" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = aws_route53_zone.primary.name
  type    = "A"
  ttl     = 300
  records = [var.public_ip]
}