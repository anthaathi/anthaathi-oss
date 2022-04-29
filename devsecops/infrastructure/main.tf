terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
    }
  }
}
#
#data "google_client_config" "current" {}
#
#provider "kubernetes" {
#  alias                  = "development_cluster"
#  host                   = module.development_cluster.endpoint
#  token                  = data.google_client_config.current.access_token
#  client_certificate     = base64decode(module.development_cluster.client_certificate)
#  client_key             = base64decode(module.development_cluster.client_key)
#  cluster_ca_certificate = base64decode(module.development_cluster.cluster_ca_certificate)
#}

module "development_cluster" {
  source                          = "./gke-regional"
  project_id                      = var.project_id
  prefix                          = "dev"
  region                          = "asia-south1"
  gke_num_nodes                   = 1
  google_compute_network_vpc_name = google_compute_network.vpc_development.name
  preemptible                     = true
  node_storage                    = 100
  env                             = "development"
  tags                            = ["gke-development"]
}
