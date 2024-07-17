module "route53" {
  source = "./route53"
  domain = var.domain
  public_ip = module.ec2.public_ip
}

module "ec2" {
  source = "./ec2"
  private_key = var.private_key
  domain = var.domain
  key_name = module.key_pair.key_name
  security_group_id = module.security_group.security_group_id
}

module "key_pair" {
  source = "./key_pair"
  public_key = var.public_key
}

module "security_group" {
  source = "./security_group"
}
