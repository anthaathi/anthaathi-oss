use apollo_parser::{ast, Parser};
use crossbeam_channel::bounded;

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
        } else if let ast::Definition::InterfaceTypeDefinition(interface_type) = def {
            println!("{}", interface_type.name().unwrap().text());
        }
    }

    use crossbeam_channel::unbounded;

    let (s1, r1) = bounded(1);
    let (s2, r2) = (s1.clone(), r1.clone());
    let (s3, r3) = (s2.clone(), r2.clone());

    s1.send(10).unwrap();
    assert_eq!(r3.recv(), Ok(10));

    s2.send(20).unwrap();
    assert_eq!(r1.recv(), Ok(20));

    s3.send(30).unwrap();
    assert_eq!(r2.recv(), Ok(30));
}
