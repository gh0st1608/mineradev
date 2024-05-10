variable "bucket_name" {
  description = "name of bucket"
  type        = string
  default = "minera"
}

variable "tags" {
  description = "tag of bucket"
  type        = map(string)
  default     = {
    Name        = "terraform_buckets3"
    Environment = "dev"
  }
}