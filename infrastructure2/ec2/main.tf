data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}
resource "aws_instance" "web" {
  ami             = data.aws_ami.ubuntu.id
  instance_type   = "t2.micro"
  key_name        = var.key_name
  vpc_security_group_ids = [var.security_group_id]

/*   connection {
    type        = "ssh"
    user        = "ubuntu"
    host        = self.public_ip
    private_key = file("miningsculture.pem")
    agent = false
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update -y",
      "sudo apt install nginx -y",
      "sudo bash -c 'echo Welcome to ${var.domain} > /var/www/html/index.html'"
    ]
  } */
}