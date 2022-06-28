use apollo_parser::{ast, Parser};

fn main() {
    let input = "
directive @arangoCollection(name: String!) on OBJECT
directive @hasMetadata on OBJECT
directive @cmsObject on OBJECT

interface Node {
    id: ID!
}

interface Component implements Node {
    id: ID!
    _component: String!
}

type QuestionComponent implements Component, Node {
    id: ID!
    _component: String!
    question: String
    answer: String
}

type FAQComponent implements Component, Node {
    id: ID!
    _component: String!
    question: [QuestionComponent]
}

type Page implements Node {
    id: ID!
    handle: String
    body: [Component]
}

type Product implements Node @arangoCollection(name: \"product\") @hasMetadata @cmsObject {
    id: ID!
    title: String!
    description: HTML!

    # Auto
    status: Status

    createdAt: DateTime
    updatedAt: DateTime
    author: ID
}

scalar HTML
scalar DateTime

enum Status {
    PUBLISHED
    DRAFT
    ARCHIVED
}";
    let parser = Parser::new(input);
    let ast = parser.parse();
    assert_eq!(0, ast.errors().len());

    let doc = ast.document();

    for def in doc.definitions() {
        if let ast::Definition::ObjectTypeDefinition(object_type) = def {
            println!("{}", object_type.name().unwrap().text());
            for field_def in object_type.fields_definition().unwrap().field_definitions() {
                println!("{}", field_def.name().unwrap().text()); // size weight
            }
        }
    }
}
