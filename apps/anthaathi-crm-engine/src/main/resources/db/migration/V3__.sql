ALTER TABLE crm.task
DROP
CONSTRAINT fk_task_on_organization;

ALTER TABLE crm.task
    ADD CONSTRAINT FK_TASK_ON_ORGANIZATION FOREIGN KEY (organization_id) REFERENCES auth.organization (id);
