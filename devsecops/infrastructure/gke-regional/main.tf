terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.19.0"
    }
  }
}

# GKE cluster
resource "google_container_cluster" "primary" {
  name     = "${var.prefix}-${var.project_id}-${var.region}-gke"
  location = var.region

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  network    = var.google_compute_network_vpc_name
  subnetwork = google_compute_subnetwork.subnet.name
}

# Separately Managed Node Pool
resource "google_container_node_pool" "primary_nodes" {
  name       = "${var.prefix}-gke-node-pool"
  location   = var.region
  cluster    = google_container_cluster.primary.name
  node_count = var.gke_num_nodes

  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    disk_type = var.disk_type

    disk_size_gb = var.node_storage

    labels = {
      env = var.env
    }

    preemptible = var.preemptible

    machine_type = var.machine_type

    tags = setunion(["gke-node", "${var.project_id}-gke"], var.tags)

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }
}
