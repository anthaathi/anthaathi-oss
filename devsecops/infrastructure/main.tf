terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

module "development-cluster" {
  source     = "./gke-regional"
  project_id = var.project_id
  prefix     = "dev"
  region     = "asia-south1"
  gke_num_nodes = 1
  google_compute_network_vpc_name = google_compute_network.vpc_development.name
  preemptible = true
  node_storage = 100
}
