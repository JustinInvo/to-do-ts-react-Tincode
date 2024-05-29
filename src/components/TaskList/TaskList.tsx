import { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { map } from "lodash"
import { Task } from "../../api";

const task = new Task();

export function TaskList(){
    const items = task.obtain();
    const [tasks, setTasks] = useState(items)
    return(
        <Container>
            <Row>
                {map(tasks, (task)=> (
                    <Col xs={6} md={4} lg={3} key={task.id}>
                        <h2>{task.title}</h2>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}