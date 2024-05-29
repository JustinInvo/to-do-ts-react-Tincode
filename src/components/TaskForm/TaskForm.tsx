import { useState, FormEvent } from "react"
import { Form, Button } from "react-bootstrap"
import { Task } from "../../api"
import classNames from "classnames";
import { PropsTypes } from "./TaskForm.type";
import "./TaskForm.scss"

const taskActions = new Task();

export function TaskForm(props: PropsTypes) {

    const { close } = props;
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false)
        if(title){
            taskActions.create({title, description})
            close()
        } else {
            setError(true)
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Control type="text" placeholder="Titutlo de la tarea"
                value={title} className={classNames('mb-3', {
                    "error": error,
                })}
                onChange={(e) =>setTitle(e.target.value)}
            />
            {error && "ERROR..."}
            <Form.Control as="textarea" placeholder="Describe la tarea que hay que realizar" 
                className="mb-3" value={description} 
                onChange={(e) =>setDescription(e.target.value)}
            />
            <Button type="submit" className="w-100">
                Crear
            </Button>
        </Form>
    )
}