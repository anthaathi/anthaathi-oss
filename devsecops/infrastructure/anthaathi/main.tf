provider "google" {
  project = var.project_id
}

provider "google-beta" {
  project = var.project_id
}

resource "google_compute_network" "default" {
  name                    = var.network_name
  auto_create_subnetworks = "false"
}
