module "development_deployment" {
  source = "./anthaathi"
  crm_domain   = "console.crm.anthaathi.dev"
  network_name = "anthaathi-development-network"
  prefix       = "anthaathi-dev"
  project_id   = "anthaathi"
}
