# VPC
resource "google_compute_network" "vpc_development" {
  name                    = "${var.project_id}-vpc"
  auto_create_subnetworks = "false"
}
