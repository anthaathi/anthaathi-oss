provider "google" {
  project = var.project_id
  region  = var.region
}

# Subnet
resource "google_compute_subnetwork" "subnet" {
  name          = "${var.project_id}-subnet"
  region        = var.region
  network       = var.google_compute_network_vpc_name
  ip_cidr_range = "10.10.0.0/24"
}
