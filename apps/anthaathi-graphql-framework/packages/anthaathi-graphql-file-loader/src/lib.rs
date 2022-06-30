pub mod anthaathi_graphql_schema_file_loader {
    use std::collections::BTreeMap;

    use anthaathi_graphql_common::schema_loader_plugin;
    use serde_yaml::Value;

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    struct Config {
        input: BTreeMap<String, Value>,
    }

    pub struct Plugin {}

    impl schema_loader_plugin::SchemaLoaderConfig<Config> for Plugin {
        const PLUGIN_NAME: &'static str = "file_loader";

        fn load_config<Config>() {}
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
