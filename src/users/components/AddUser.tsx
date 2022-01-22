import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUsersCtx } from "../hooks/useUsers";
import { UserInputs } from "../models/users";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../../assets/styles/style.css"

const schema = yup.object({
    name: yup.string().required(),
    username: yup.string().required().max(15)
}).required();

const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserInputs>({
        resolver: yupResolver(schema)
    });
    const { addUser } = useUsersCtx()
    const onSubmit: SubmitHandler<UserInputs> = data => addUser(data);

    return (
        <div>
            <h2>Add User</h2>
            <div className="addUserFields">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name: </label>
                    <input {...register("name")}/>
                    <p>{errors.name?.message}</p>
                    <label htmlFor="username">Username: </label>
                    <input {...register("username")} />
                    <p>{errors.username?.message}</p>
                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}

export default AddUser;