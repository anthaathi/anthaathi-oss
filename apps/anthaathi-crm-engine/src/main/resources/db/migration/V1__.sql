CREATE SCHEMA crm;
CREATE SCHEMA auth;
CREATE SCHEMA project;

CREATE TABLE crm.address
(
    id             UUID NOT NULL,
    type           TEXT NOT NULL,
    address_line_1 TEXT NOT NULL,
    address_line2  TEXT NOT NULL,
    address_line_3 TEXT NOT NULL,
    city           TEXT NOT NULL,
    state          TEXT NOT NULL,
    country        TEXT NOT NULL,
    postal_code    TEXT NOT NULL,
    CONSTRAINT pk_address PRIMARY KEY (id)
);

CREATE TABLE crm.customer
(
    id                UUID                     NOT NULL,
    first_name        TEXT                     NOT NULL,
    project_id        UUID                     NOT NULL,
    middle_name       TEXT                     NOT NULL,
    last_name         TEXT                     NOT NULL,
    mobile_number_1   TEXT                     NOT NULL,
    mobile_number_2   TEXT                     NOT NULL,
    organization_name TEXT                     NOT NULL,
    organization_role TEXT                     NOT NULL,
    gender            TEXT                     NOT NULL,
    date_of_birth     date                     NOT NULL,
    job_title         TEXT                     NOT NULL,
    priority          INTEGER                  NOT NULL,
    profile_picture   TEXT                     NOT NULL,
    email             TEXT                     NOT NULL,
    qualification     TEXT                     NOT NULL,
    user_id           UUID,
    created_at        TIMESTAMP with time zone NOT NULL,
    created_by        UUID                     NOT NULL,
    CONSTRAINT pk_customer PRIMARY KEY (id)
);

CREATE TABLE crm.customer_addresses
(
    id          UUID NOT NULL,
    customer_id UUID NOT NULL,
    address_id  UUID NOT NULL,
    CONSTRAINT pk_customer_addresses PRIMARY KEY (id)
);

CREATE TABLE crm.customer_documents
(
    id          UUID NOT NULL,
    document_id UUID NOT NULL,
    project_id  UUID NOT NULL,
    customer_id UUID NOT NULL,
    CONSTRAINT pk_customer_documents PRIMARY KEY (id)
);

CREATE TABLE crm.customer_meta
(
    id          UUID        NOT NULL,
    key         VARCHAR(50) NOT NULL,
    customer_id UUID        NOT NULL,
    value       JSON        NOT NULL,
    CONSTRAINT pk_customer_meta PRIMARY KEY (id)
);

CREATE TABLE crm.customer_organization
(
    id         UUID                     NOT NULL,
    name       TEXT                     NOT NULL,
    project_id UUID,
    logo       TEXT                     NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL,
    created_by UUID                     NOT NULL,
    CONSTRAINT pk_customer_organization PRIMARY KEY (id)
);

CREATE TABLE crm.document
(
    id               UUID                     NOT NULL,
    title            TEXT                     NOT NULL,
    project_id       UUID,
    document_type_id UUID                     NOT NULL,
    expiry           date                     NOT NULL,
    document         TEXT                     NOT NULL,
    created_at       TIMESTAMP with time zone NOT NULL,
    created_by       UUID                     NOT NULL,
    CONSTRAINT pk_document PRIMARY KEY (id)
);

CREATE TABLE crm.document_type
(
    id          UUID                     NOT NULL,
    title       TEXT                     NOT NULL,
    description TEXT                     NOT NULL,
    created_at  TIMESTAMP with time zone NOT NULL,
    created_by  UUID                     NOT NULL,
    CONSTRAINT pk_document_type PRIMARY KEY (id)
);

CREATE TABLE crm.organizarion_addresses
(
    id              UUID NOT NULL,
    organization_id UUID NOT NULL,
    address_id      UUID NOT NULL,
    CONSTRAINT pk_organizarion_addresses PRIMARY KEY (id)
);

CREATE TABLE crm.pre_requisite
(
    id         UUID                     NOT NULL,
    requirment TEXT                     NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL,
    created_by UUID                     NOT NULL,
    CONSTRAINT pk_pre_requisite PRIMARY KEY (id)
);

CREATE TABLE project.project
(
    id              UUID                     NOT NULL,
    title           VARCHAR(150)             NOT NULL,
    description     TEXT                     NOT NULL,
    organization_id UUID                     NOT NULL,
    created_at      TIMESTAMP with time zone NOT NULL,
    created_by      UUID                     NOT NULL,
    CONSTRAINT pk_project PRIMARY KEY (id)
);

CREATE TABLE crm.reaction
(
    id   UUID NOT NULL,
    icon TEXT NOT NULL,
    CONSTRAINT pk_reaction PRIMARY KEY (id)
);

CREATE TABLE crm.space_folder
(
    id         UUID                     NOT NULL,
    name       TEXT                     NOT NULL,
    parent_id  UUID,
    type       VARCHAR(50)              NOT NULL,
    icon       VARCHAR(100)             NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL,
    created_by UUID                     NOT NULL,
    CONSTRAINT pk_space_folder PRIMARY KEY (id)
);

CREATE TABLE crm.status
(
    id         UUID                     NOT NULL,
    name       TEXT                     NOT NULL,
    color      TEXT                     NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL,
    created_by UUID                     NOT NULL,
    CONSTRAINT pk_status PRIMARY KEY (id)
);

CREATE TABLE crm.tag
(
    id         UUID                     NOT NULL,
    title      TEXT                     NOT NULL,
    color      TEXT                     NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL,
    created_by UUID                     NOT NULL,
    CONSTRAINT pk_tag PRIMARY KEY (id)
);

CREATE TABLE crm.task
(
    id              UUID                     NOT NULL,
    owner_id        UUID                     NOT NULL,
    project_id      UUID                     NOT NULL,
    space_folder_id UUID                     NOT NULL,
    organization_id UUID                     NOT NULL,
    status_id       UUID                     NOT NULL,
    team_id         UUID,
    title           TEXT                     NOT NULL,
    description     TEXT                     NOT NULL,
    due_date        date,
    priority        INTEGER                  NOT NULL,
    is_template     BOOLEAN                  NOT NULL,
    icon            TEXT                     NOT NULL,
    background      VARCHAR(50)              NOT NULL,
    created_at      TIMESTAMP with time zone NOT NULL,
    created_by      UUID                     NOT NULL,
    CONSTRAINT pk_task PRIMARY KEY (id)
);

CREATE TABLE crm.task_assigned_users
(
    id         UUID NOT NULL,
    task_id    UUID NOT NULL,
    project_id UUID NOT NULL,
    user_id    UUID NOT NULL,
    CONSTRAINT pk_task_assigned_users PRIMARY KEY (id)
);

CREATE TABLE crm.task_comment
(
    id            UUID                     NOT NULL,
    content       TEXT                     NOT NULL,
    project_id    UUID                     NOT NULL,
    task_id       UUID                     NOT NULL,
    task_stage_id UUID,
    reply_to      UUID                     NOT NULL,
    created_at    TIMESTAMP with time zone NOT NULL,
    created_by    UUID                     NOT NULL,
    CONSTRAINT pk_task_comment PRIMARY KEY (id)
);

CREATE TABLE crm.task_comment_attachments
(
    id              UUID NOT NULL,
    task_comment_id UUID NOT NULL,
    attachment_id   UUID NOT NULL,
    CONSTRAINT pk_task_comment_attachments PRIMARY KEY (id)
);

CREATE TABLE crm.task_commnet_reactions
(
    id              UUID NOT NULL,
    task_comment_id UUID NOT NULL,
    reaction_id     UUID NOT NULL,
    CONSTRAINT pk_task_commnet_reactions PRIMARY KEY (id)
);

CREATE TABLE crm.task_file_attachments
(
    id            UUID NOT NULL,
    task_id       UUID NOT NULL,
    project_id    UUID NOT NULL,
    attachment_id UUID NOT NULL,
    CONSTRAINT pk_task_file_attachments PRIMARY KEY (id)
);

CREATE TABLE crm.task_pre_requisites
(
    id               UUID NOT NULL,
    task_id          UUID NOT NULL,
    project_id       UUID NOT NULL,
    pre_requisite_id UUID NOT NULL,
    CONSTRAINT pk_task_pre_requisites PRIMARY KEY (id)
);

CREATE TABLE crm.task_stages
(
    id                UUID                     NOT NULL,
    title             VARCHAR(150)             NOT NULL,
    project_id        UUID                     NOT NULL,
    next_stage_id     UUID,
    previous_stage_id UUID,
    task_id           UUID                     NOT NULL,
    icon              VARCHAR(50)              NOT NULL,
    completed_at      TIMESTAMP with time zone,
    completed_by      UUID,
    is_mandatory      BOOLEAN                  NOT NULL,
    created_at        TIMESTAMP with time zone NOT NULL,
    created_by        UUID                     NOT NULL,
    CONSTRAINT pk_task_stages PRIMARY KEY (id)
);

CREATE TABLE crm.task_stages_documents
(
    id            UUID NOT NULL,
    task_stage_id UUID NOT NULL,
    document_id   UUID NOT NULL,
    CONSTRAINT pk_task_stages_documents PRIMARY KEY (id)
);

CREATE TABLE crm.task_tags
(
    id         UUID NOT NULL,
    task_id    UUID NOT NULL,
    project_id UUID NOT NULL,
    tag_id     UUID NOT NULL,
    CONSTRAINT pk_task_tags PRIMARY KEY (id)
);

CREATE TABLE auth.team
(
    id             UUID                     NOT NULL,
    name           TEXT                     NOT NULL,
    description    TEXT                     NOT NULL,
    parent_team_id UUID,
    created_at     TIMESTAMP with time zone NOT NULL,
    created_by     UUID                     NOT NULL,
    CONSTRAINT pk_team PRIMARY KEY (id)
);

CREATE TABLE auth.team_members
(
    id      UUID NOT NULL,
    user_id UUID NOT NULL,
    team_id UUID NOT NULL,
    CONSTRAINT pk_team_members PRIMARY KEY (id)
);

CREATE TABLE auth."user"
(
    id              UUID                     NOT NULL,
    first_name      TEXT                     NOT NULL,
    project_id      UUID                     NOT NULL,
    middle_name     TEXT                     NOT NULL,
    last_name       TEXT                     NOT NULL,
    mobile_number_1 TEXT                     NOT NULL,
    mobile_number_2 TEXT                     NOT NULL,
    gender          VARCHAR(20)              NOT NULL,
    date_of_birth   date                     NOT NULL,
    email           TEXT                     NOT NULL,
    qualification   TEXT                     NOT NULL,
    employee_id     TEXT                     NOT NULL,
    created_at      TIMESTAMP with time zone NOT NULL,
    created_by      UUID                     NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (id)
);

ALTER TABLE crm.customer_addresses
    ADD CONSTRAINT FK_CUSTOMER_ADDRESSES_ON_ADDRESS FOREIGN KEY (address_id) REFERENCES crm.address (id);

ALTER TABLE crm.customer_addresses
    ADD CONSTRAINT FK_CUSTOMER_ADDRESSES_ON_CUSTOMER FOREIGN KEY (customer_id) REFERENCES crm.customer (id);

ALTER TABLE crm.customer_documents
    ADD CONSTRAINT FK_CUSTOMER_DOCUMENTS_ON_CUSTOMER FOREIGN KEY (customer_id) REFERENCES crm.customer (id);

ALTER TABLE crm.customer_documents
    ADD CONSTRAINT FK_CUSTOMER_DOCUMENTS_ON_DOCUMENT FOREIGN KEY (document_id) REFERENCES crm.document (id);

ALTER TABLE crm.customer_documents
    ADD CONSTRAINT FK_CUSTOMER_DOCUMENTS_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.customer_meta
    ADD CONSTRAINT FK_CUSTOMER_META_ON_CUSTOMER FOREIGN KEY (customer_id) REFERENCES crm.customer (id);

ALTER TABLE crm.customer
    ADD CONSTRAINT FK_CUSTOMER_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.customer_organization
    ADD CONSTRAINT FK_CUSTOMER_ORGANIZATION_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.document
    ADD CONSTRAINT FK_DOCUMENT_ON_DOCUMENT_TYPE FOREIGN KEY (document_type_id) REFERENCES crm.document_type (id);

ALTER TABLE crm.document
    ADD CONSTRAINT FK_DOCUMENT_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.organizarion_addresses
    ADD CONSTRAINT FK_ORGANIZARION_ADDRESSES_ON_ADDRESS FOREIGN KEY (address_id) REFERENCES crm.address (id);

ALTER TABLE crm.organizarion_addresses
    ADD CONSTRAINT FK_ORGANIZARION_ADDRESSES_ON_ORGANIZATION FOREIGN KEY (organization_id) REFERENCES crm.customer_organization (id);

ALTER TABLE crm.space_folder
    ADD CONSTRAINT FK_SPACE_FOLDER_ON_PARENT FOREIGN KEY (parent_id) REFERENCES crm.space_folder (id);

ALTER TABLE crm.task_assigned_users
    ADD CONSTRAINT FK_TASK_ASSIGNED_USERS_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_assigned_users
    ADD CONSTRAINT FK_TASK_ASSIGNED_USERS_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE crm.task_assigned_users
    ADD CONSTRAINT FK_TASK_ASSIGNED_USERS_ON_USER FOREIGN KEY (user_id) REFERENCES auth."user" (id);

ALTER TABLE crm.task_comment_attachments
    ADD CONSTRAINT FK_TASK_COMMENT_ATTACHMENTS_ON_TASK_COMMENT FOREIGN KEY (task_comment_id) REFERENCES crm.task_comment (id);

ALTER TABLE crm.task_comment
    ADD CONSTRAINT FK_TASK_COMMENT_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_comment
    ADD CONSTRAINT FK_TASK_COMMENT_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE crm.task_comment
    ADD CONSTRAINT FK_TASK_COMMENT_ON_TASK_STAGE FOREIGN KEY (task_stage_id) REFERENCES crm.task_stages (id);

ALTER TABLE crm.task_commnet_reactions
    ADD CONSTRAINT FK_TASK_COMMNET_REACTIONS_ON_REACTION FOREIGN KEY (reaction_id) REFERENCES crm.reaction (id);

ALTER TABLE crm.task_commnet_reactions
    ADD CONSTRAINT FK_TASK_COMMNET_REACTIONS_ON_TASK_COMMENT FOREIGN KEY (task_comment_id) REFERENCES crm.task_comment (id);

ALTER TABLE crm.task_file_attachments
    ADD CONSTRAINT FK_TASK_FILE_ATTACHMENTS_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_file_attachments
    ADD CONSTRAINT FK_TASK_FILE_ATTACHMENTS_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_ORGANIZATION FOREIGN KEY (organization_id) REFERENCES crm.customer_organization (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_OWNER FOREIGN KEY (owner_id) REFERENCES auth."user" (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_SPACE_FOLDER FOREIGN KEY (space_folder_id) REFERENCES crm.space_folder (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_STATUS FOREIGN KEY (status_id) REFERENCES crm.status (id);

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_TEAM FOREIGN KEY (team_id) REFERENCES auth.team (id);

ALTER TABLE crm.task_pre_requisites
    ADD CONSTRAINT FK_TASK_PRE_REQUISITES_ON_PRE_REQUISITE FOREIGN KEY (pre_requisite_id) REFERENCES crm.pre_requisite (id);

ALTER TABLE crm.task_pre_requisites
    ADD CONSTRAINT FK_TASK_PRE_REQUISITES_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_pre_requisites
    ADD CONSTRAINT FK_TASK_PRE_REQUISITES_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE crm.task_stages_documents
    ADD CONSTRAINT FK_TASK_STAGES_DOCUMENTS_ON_DOCUMENT FOREIGN KEY (document_id) REFERENCES crm.document (id);

ALTER TABLE crm.task_stages_documents
    ADD CONSTRAINT FK_TASK_STAGES_DOCUMENTS_ON_TASK_STAGE FOREIGN KEY (task_stage_id) REFERENCES crm.task_stages (id);

ALTER TABLE crm.task_stages
    ADD CONSTRAINT FK_TASK_STAGES_ON_NEXT_STAGE FOREIGN KEY (next_stage_id) REFERENCES crm.task_stages (id);

ALTER TABLE crm.task_stages
    ADD CONSTRAINT FK_TASK_STAGES_ON_PREVIOUS_STAGE FOREIGN KEY (previous_stage_id) REFERENCES crm.task_stages (id);

ALTER TABLE crm.task_stages
    ADD CONSTRAINT FK_TASK_STAGES_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_stages
    ADD CONSTRAINT FK_TASK_STAGES_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE crm.task_tags
    ADD CONSTRAINT FK_TASK_TAGS_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);

ALTER TABLE crm.task_tags
    ADD CONSTRAINT FK_TASK_TAGS_ON_TAG FOREIGN KEY (tag_id) REFERENCES crm.tag (id);

ALTER TABLE crm.task_tags
    ADD CONSTRAINT FK_TASK_TAGS_ON_TASK FOREIGN KEY (task_id) REFERENCES crm.task (id);

ALTER TABLE auth.team_members
    ADD CONSTRAINT FK_TEAM_MEMBERS_ON_TEAM FOREIGN KEY (team_id) REFERENCES auth.team (id);

ALTER TABLE auth.team_members
    ADD CONSTRAINT FK_TEAM_MEMBERS_ON_USER FOREIGN KEY (user_id) REFERENCES auth."user" (id);

ALTER TABLE auth."user"
    ADD CONSTRAINT FK_USER_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);
