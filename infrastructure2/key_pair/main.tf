resource "aws_key_pair" "key" {
  key_name   = "miningsculture2"
  public_key = file(var.public_key)
}