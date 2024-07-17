variable "access_key" {
  type = string
}

variable "secret_key" {
  type = string
}

variable "region" {
  type    = string
}

variable "public_key" {
  type        = string
  description = "File path of public key."
  default = "./miningsculture"
}

variable "private_key" {
  type        = string
  description = "File path of private key."
  default = "./miningsculture.pem"
}

variable "domain" {
  type        = string
  description = "Name of domain."
}