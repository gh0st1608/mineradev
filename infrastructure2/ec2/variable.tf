variable "private_key" {
  type = string
}

variable "domain" {
  type        = string
  description = "Name of domain."
}

variable "key_name" {
  type        = string
}

/* variable "security_group_name" {
  type        = string
} */

variable "security_group_id" {
  type        = string
}