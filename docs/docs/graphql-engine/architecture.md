---
sidebar_position: 2
---
# Architecture

1. Schema Fetcher
2. Data Connector
   1. Schema Generator
   2. Data Fetcher
3. Hooks

## Schema Fetcher

It loads schema from locale files or remote locations. Then, it can reload the schema using a notification system. Notification is an optional system.
Schema Plugin can load the schema from a file, remote database, or zookeeper.

## Plugin architecture

We have three components to make a plugin for the GraphQL Engine.
1. TypeDefinitionRegistry
2. DataFetcherRegistry
3. Hooks

### Lifecycle

### GQLTypeDefinitionRegistry

We built schema dynamically. So schema  
