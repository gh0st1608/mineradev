output "my_distribution" {
  value = aws_cloudfront_distribution.my-distribution
}

output "my_distribution_domain_name" {
  value = aws_cloudfront_distribution.my-distribution.domain_name
}

output "my_distribution_hosted_zone_id" {
  value = aws_cloudfront_distribution.my-distribution.hosted_zone_id
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.my-distribution.domain_name
}