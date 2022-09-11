ALTER TABLE project.project
    ADD handle VARCHAR(50);

ALTER TABLE project.project
    ALTER COLUMN handle SET NOT NULL;

ALTER TABLE project.project
    ADD CONSTRAINT uc_project_handle UNIQUE (handle);
