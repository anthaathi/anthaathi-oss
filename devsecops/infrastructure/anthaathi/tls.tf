# Certificate for the all front facing domains
resource "google_compute_managed_ssl_certificate" "default" {
  name = "${ var.prefix }-anthaathi-cert"

  managed {
    domains = [var.crm_domain]
  }
}

# Certificates for the internal apps like admin panel
resource "google_compute_managed_ssl_certificate" "default_private" {
  name = "${ var.prefix }-anthaathi-private-cert"

  managed {
    domains = [var.crm_domain]
  }
}
