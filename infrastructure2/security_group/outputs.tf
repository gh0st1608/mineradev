output "security_group_name" {
  value = aws_security_group.ssh_web.name
}

output "security_group_id" {
  value = aws_security_group.ssh_web.id
}