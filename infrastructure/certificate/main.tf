# Crear un certificado SSL con AWS Certificate Manager
resource "aws_acm_certificate" "cert" {
  domain_name = "${var.certificate_domain_name}"# Cambia a tu dominio
  validation_method = "DNS"
    subject_alternative_names = ["www.${var.certificate_domain_name}", "${var.certificate_domain_name}"]

  lifecycle {
    create_before_destroy = true
  }
}
