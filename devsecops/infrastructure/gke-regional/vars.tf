variable "project_id" {
  description = "project id"
}

variable "region" {
  description = "region"
}

variable "google_compute_network_vpc_name" {
  description = "vpc name"
}

variable "prefix" {
  type = string
  default = "anthaathi"
}

variable "gke_num_nodes" {
  type = number
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

variable "machine_type" {
  description = "Machine type"
  default = "e2-standard-2"
}

variable "preemptible" {
  type = bool
  default = false
  description = "For dev cluster"
}
