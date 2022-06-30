pub mod schema_loader_plugin {
    pub trait SchemaLoaderConfig<T> {
        const PLUGIN_NAME: &'static str;
        fn load_config(input: T);
    }
}

pub mod config_loader {
    use std::collections::BTreeMap;

    use serde_derive::{Deserialize, Serialize};

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigSpec {
        pub hosts: Vec<String>,
        pub http: Option<Vec<ConfigHTTPConfig>>,
        pub destination: ConfigDestination,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigDestination {}

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigHTTPConfig {
        pub header: Option<ConfigHeaders>,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigHeaders {
        pub request: Option<ConfigHTTPHeaderOperationConfig>,
        pub response: Option<ConfigHTTPHeaderOperationConfig>,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigHTTPHeaderOperationConfig {
        pub set: Option<BTreeMap<String, String>>,
        pub add: Option<BTreeMap<String, String>>,
        pub remove: Option<Vec<String>>,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct Config {
        #[serde(rename = "apiVersion")]
        pub api_version: String,
        pub spec: Vec<ConfigSpec>,
    }
}

#[cfg(test)]
mod tests {
    use crate::config_loader::Config;
    use indoc::indoc;

    #[test]
    fn it_load_default_config() {
        let result = 2 + 2;
        assert_eq!(result, 4);

        let input_file = indoc! {"
            apiVersion: alphaV1
            spec:
              - hosts:
                - www.google.com
                destination:
                  name: something
                  config:
                    somethign: yesIamhere
        "};

        let _config: Config = serde_yaml::from_str(input_file).expect("should load file");
    }
}
