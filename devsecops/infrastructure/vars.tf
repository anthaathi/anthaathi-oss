variable "project_id" {
  description = "project id"
}

variable "region" {
  description = "region"
}

variable "domain" {
  type = string
}

variable "prefix" {
  type = string
  default = "anthaathi"
}

variable "gke_num_nodes" {
  default     = 2
  description = "number of gke nodes"
}

variable "node_storage" {
  default = 250
  description = "Storage for kubernetes nodes"
}

variable "disk_type" {
  default = "pd-ssd"
}
