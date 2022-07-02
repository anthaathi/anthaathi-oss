pub mod anthaathi_graphql_core {
    use anthaathi_graphql_common::config_loader::parse_config;
    use hyper::service::{make_service_fn, service_fn};
    use hyper::{Body, Request, Response, Server};
    use std::convert::Infallible;
    use std::net::SocketAddr;
    use std::ptr::null;

    pub trait GraphQLServer {}

    pub struct GQLServer {}

    impl GraphQLServer for GQLServer {}

    async fn handle(_: Request<Body>) -> Result<Response<Body>, Infallible> {
        Ok(Response::new("Hello, World!".into()))
    }

    async fn setup_port() -> Result<_, serde_yaml::Error> {
        let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

        let make_svc = make_service_fn(|_conn| async { Ok::<_, Infallible>(service_fn(handle)) });

        let server = Server::bind(&addr).serve(make_svc);

        if let Err(e) = server.await {
            eprintln!("server error: {}", e);
        }

        return Ok(null());
    }

    pub async fn init_server(config_input: &str) -> Result<impl GraphQLServer, serde_yaml::Error> {
        let config = parse_config(config_input)?;

        let server = GQLServer {};

        for x in config.spec {
            x.port;
        }

        return Ok(server);
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
