pub mod schema_loader_plugin {
    pub trait SchemaLoaderConfig<T> {
        const PLUGIN_NAME: &'static str;
        fn load_config(input: T);
    }
}

pub mod config_loader {
    use std::collections::{BTreeMap, HashMap};

    use serde_derive::{Deserialize, Serialize};
    use serde_yaml::Value;

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigSpec {
        pub hosts: Option<Vec<String>>,
        pub port: Vec<ConfigPort>,
        pub http: Vec<ConfigHTTPConfig>,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigDestination {
        #[serde(rename="name")]
        pub plugin_name: String,
        pub config: Value,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigPort {
        pub name: String,
        pub number: u32,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigHTTPConfig {
        pub name: String,
        #[serde(rename="match")]
        pub match_: Option<Vec<ConfigMatchOption>>,
        pub header: Option<ConfigHeaders>,
        pub destination: ConfigDestination,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct ConfigMatchOption {
        // The name assigned to a match. The match’s name will be concatenated with the parent
        // route’s name and will be logged in the access logs for requests matching this route.
        pub name: String,
        pub uri: Option<StringMatch>,
        pub method: Option<StringMatch>,
        pub headers: Option<HashMap<String, StringMatch>>,
        #[serde(rename="query_params")]
        pub query_params: Option<HashMap<String, StringMatch>>,
        #[serde(rename="ignoreUriCase")]
        pub ignore_uri_case: Option<bool>,
        #[serde(rename="withoutHeaders")]
        pub without_headers: Option<HashMap<String, StringMatch>>,
    }

    #[derive(Debug, PartialEq, Serialize, Deserialize)]
    pub struct StringMatch {
        pub exact: Option<String>,
        pub prefix: Option<String>,
        pub regex: Option<String>,
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
    fn it_load_default_config_1() {
        let result = 2 + 2;
        assert_eq!(result, 4);

        let input_file = indoc! {"
            apiVersion: alphaV1
            spec:
              - hosts:
                - $1.anthaathi.org
                port:
                - name: http
                  number: 80
                http:
                - destination:
                    name: FileLoader
                    config:
                      fileMapping:
                      - name: something
                        file: data/$1.graphql
                  match:
                  - name: matchtogoogle
                    uri:
                      exact: /_api/graphql
                  name: goingToFile
        "};

        let config: Config = serde_yaml::from_str(input_file).expect("should load file");
        insta::assert_yaml_snapshot!(config);
    }

    #[test]
    fn it_load_default_config_2() {
        let result = 2 + 2;
        assert_eq!(result, 4);

        let input_file = indoc! {"
            apiVersion: alphaV1
            spec:
              - port:
                - name: http
                  number: 80
                http:
                - destination:
                    name: FileLoader
                    config:
                      fileMapping:
                      - name: something
                        file: data/$1.graphql
                  match:
                  - name: matchtogoogle
                    uri:
                      exact: /_api/graphql
                  name: goingToFile
        "};

        let config: Config = serde_yaml::from_str(input_file).expect("should load file");
        insta::assert_yaml_snapshot!(config);
    }
}
