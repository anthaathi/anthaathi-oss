---
sidebar_position: 1
---

# Schema Fetcher
It loads schema from locale files or remote locations. Then, it can reload the schema using a notification system. Notification is an optional system.
Schema Plugin can load the schema from a file, remote database, or zookeeper.

Example

```graphql
directive @arangoCollection(name: String!) on OBJECT
directive @hasMetadata on OBJECT
directive @cmsObject on OBJECT
directive @tenantScoped on OBJECT

interface Node {
    id: ID!
}

type Product implements Node @arangoCollection(name: "product") @hasMetadata @cmsObject @tenantScoped {
    id: ID!
    title: String!
    description: HTML!
}

scalar HTML
scalar DateTime
```
