pub mod anthaathi_graphql_core {
    use anthaathi_graphql_common::config_loader::{parse_config, Config};

    pub trait GraphQLServer {}

    pub struct GQLServer {}

    impl GraphQLServer for GQLServer {}

    pub async fn init_server(config_input: &str) -> Result<impl GraphQLServer, serde_yaml::Error> {
        let config = parse_config(config_input)?;

        let server = GQLServer {};

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
