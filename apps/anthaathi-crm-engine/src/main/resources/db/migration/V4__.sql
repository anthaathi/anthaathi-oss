ALTER TABLE crm.space_folder
    ADD project_id UUID;

ALTER TABLE crm.space_folder
    ADD CONSTRAINT FK_SPACE_FOLDER_ON_PROJECT FOREIGN KEY (project_id) REFERENCES project.project (id);
