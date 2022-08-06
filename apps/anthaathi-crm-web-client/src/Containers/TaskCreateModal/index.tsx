import * as React from 'react';
import {Modal, ModalBody, ModalButton, ModalFooter, ModalHeader, ROLE} from "baseui/modal";
import {Input} from "baseui/input";
import {Button} from "baseui/button";
import {Select} from "baseui/select";
import {MarkdownEditor} from "../../Features/MarkdownEditor";
import {DatePicker} from "baseui/datepicker";

function TaskCreateModal() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Button
                onClick={ () => setIsOpen(true) }
                $style={{
                    padding: "10px",
                    margin: "10px"
                }}
            >
                Create New Task
            </Button>
            <Modal
                onClose={() => setIsOpen(false)}
                closeable
                isOpen={isOpen}
                autoFocus
                role={ROLE.dialog}
                overrides={{
                    Dialog: {
                        style: {
                            width: "50vw",
                            display: "flex",
                            flexDirection: "column"
                        }
                    }
                }}
            >
                <ModalHeader>
                    Create new task
                </ModalHeader>

                <ModalBody>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingBottom: "10px"
                        }}
                    >
                        <div style={{ flex: 1, paddingRight: "5px" }}>
                            <Select
                                placeholder="Request Type"
                                options={[
                                    {id: '1'},
                                    {id: '2'},
                                    {id: '3'}
                                ]}
                                labelKey="id"
                            />
                        </div>

                        <div style={{ flex: 1, paddingLeft: "5px"}} >
                            <Select
                                placeholder="Select Tags"
                                options={[
                                    {id: '1'},
                                    {id: '2'},
                                    {id: '3'}
                                ]}
                                labelKey="id"
                            />
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", paddingBottom: "10px"}} >
                        <div style={{ flex: 1, paddingRight: "5px" }} >
                            <Select
                                placeholder="Add Assignee"
                                options={[
                                    {id: '1'},
                                    {id: '2'},
                                    {id: '3'}
                                ]}
                                labelKey="id"
                            />
                        </div>

                        <div style={{ flex: 1 }} >
                        </div>
                    </div>

                    <div style={{ flex: 1, paddingBottom: "10px" }} >
                        <Select
                            placeholder="Add Team"
                            options={[
                                {id: '1'},
                                {id: '2'},
                                {id: '3'}
                            ]}
                            labelKey="id"
                        />
                    </div>

                    <div style={{ flex: 1, paddingBottom: "10px"}} >
                        <MarkdownEditor value="Comment" onChange={() => console.log("Markdown")} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", paddingBottom: "10px"}} >
                        <div style={{ flex: 1, paddingRight: "5px"}} >
                            <Input
                                placeholder="Owner Name"
                            />
                        </div>

                        <div style={{ flex: 1, paddingLeft: "5px" }} >
                            <Input
                                placeholder="Location"
                            />
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row"}} >
                        <div style={{ flex: 1, paddingRight: "5px" }}>
                            <DatePicker />
                        </div>
                        <div style={{ flex: 1, paddingLeft: "5px" }}></div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <ModalButton
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </ModalButton>
                    <ModalButton>
                        Create Task
                    </ModalButton>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default TaskCreateModal;
