ALTER TABLE project.project
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE auth.team_members
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE auth.team_members
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE auth.team_members
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE auth.team
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE auth."user"
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.address
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.address
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.address
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.customer_addresses
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_addresses
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_addresses
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.customer_documents
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_documents
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_documents
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.customer_meta
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_meta
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_meta
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.organizarion_addresses
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.organizarion_addresses
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.organizarion_addresses
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.reaction
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.reaction
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.reaction
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_assigned_users
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_assigned_users
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_assigned_users
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_comment_attachments
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_comment_attachments
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_comment_attachments
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_commnet_reactions
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_commnet_reactions
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_commnet_reactions
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_file_attachments
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_file_attachments
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_file_attachments
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_pre_requisites
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_pre_requisites
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_pre_requisites
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_stages_documents
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_stages_documents
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_stages_documents
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.task_tags
    ADD created_at TIMESTAMP with time zone;

ALTER TABLE crm.task_tags
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_tags
    ALTER COLUMN created_at SET NOT NULL;

ALTER TABLE crm.customer
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.customer_organization
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.document
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.document_type
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.pre_requisite
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.space_folder
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.status
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.tag
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_comment
    ADD updated_at TIMESTAMP with time zone;

ALTER TABLE crm.task_stages
    ADD updated_at TIMESTAMP with time zone;
