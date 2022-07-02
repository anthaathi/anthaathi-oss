pub mod anthaathi_graphql_core {
    use std::collections::HashMap;
    use std::error::Error;
    use std::fmt;
    use std::fmt::{Formatter, Write};
    use std::net::SocketAddr;
    use std::str::FromStr;

    use anthaathi_graphql_common::config_loader::{Config, ConfigHandler};
    use hyper::service::{make_service_fn, service_fn};
    use hyper::{Body, Request, Response, Server};

    use anthaathi_graphql_common::config_loader::parse_config;

    pub trait GraphQLServer {
        fn run(self) -> Result<(), GraphQLServerError>;
    }

    pub struct GQLServer {
        socket_listeners: HashMap<String, SocketAddr>,
        config: Config,
    }

    pub trait Handler {}

    struct GQLHandler {
        handler: ConfigHandler,
    }

    impl Handler for GQLHandler {}

    impl GraphQLServer for GQLServer {
        fn run(self) -> Result<(), GraphQLServerError> {
            for handler in self.config.handler {
                let hand = GQLHandler { handler };
            }

            Ok(())
        }
    }

    #[derive(Debug)]
    pub struct GraphQLServerError {
        pub stack: Vec<String>,
    }

    impl fmt::Display for GraphQLServerError {
        fn fmt(&self, fmt: &mut Formatter<'_>) -> fmt::Result {
            fmt.write_str(self.stack.join("\n").as_str())
        }
    }

    impl Error for GraphQLServerError {}

    pub async fn init_server(config_input: &str) -> Result<impl GraphQLServer, GraphQLServerError> {
        let config = parse_config(config_input);

        let config = match config {
            Err(e) => {
                return Err(GraphQLServerError {
                    stack: vec![e.to_string()],
                })
            }
            Ok(config) => config,
        };

        let mut socket_listeners: HashMap<String, SocketAddr> =
            HashMap::with_capacity(config.listener.len());

        for listener in &config.listener {
            let socket_addr = SocketAddr::from_str(listener.address.as_str());

            let socket_addr = match socket_addr {
                Ok(addr) => addr,
                Err(err) => {
                    return Err(GraphQLServerError {
                        stack: vec![err.to_string()],
                    })
                }
            };

            socket_listeners.insert(listener.name.clone(), socket_addr);
        }

        let socket_listeners = socket_listeners;

        let server = GQLServer {
            socket_listeners,
            config,
        };

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
