# Anthaathi Core

## Config Input

```yaml
apiVersion: alphaV1
listener:
  - address: "localhost:3000"
    name: http
handler:
  - hosts:
      - $1.anthaathi.org
    listener:
      - http
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

```

 ## Create Listeners
In this we will create listeners

```rust
mod core {
    pub trait Listener {}

    struct GQLListeners {
        handlers: Vec<GQLHandlers>,
    }

    impl Listener for GQLListeners {
        
    }

    pub trait Handler {}

    struct GQLHandlers {}
    
    impl Handler for GQLHandlers {
        
    }
}
```
