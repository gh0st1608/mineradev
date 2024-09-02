output "certificate_miningsculture" {
  value = aws_acm_certificate.cert.arn
}

output "certificate_miningsculture_resource" {
  value = aws_acm_certificate.cert
}