import React from 'react'
import { FormProvider } from 'react-hook-form'
import TextInput from '../../components/Form/Elements/TextInput'
import TextArea from '../../components/Form/Elements/TextArea'
import { DropDown } from '../../components/Form/Elements/DropDown'
import FormButton from '../../components/Form/Elements/FormButton'
import taskStatusOptions from './TaskStatusOptions'
import { ITaskForm } from './Task.model'

export const TaskForm = (props: ITaskForm) => {
    const { methods, onSubmit,data } = props;
    const { handleSubmit } = methods;
    return (
        <div className="card flex justify-content-center">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput attribute="title" placeholder="Title" value={data?.title} />
                    <TextArea attribute="description" placeholder="Description" value={data?.description} />
                    <DropDown
                        attribute="status"
                        placeholder="Select Status"
                        options={taskStatusOptions}
                        value={data?.status}
                    />
                    <FormButton label="submit" />
                </form>
            </FormProvider>
        </div>
    )
}
