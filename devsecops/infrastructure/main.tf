module "development-cluster" {
  source     = "./gke-regional"
  project_id = var.project_id
  prefix     = "dev"
  region     = "asia-south1"
  gke_num_nodes = 1
  preemptible = true
}
