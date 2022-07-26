import { Form } from '@remix-run/react'
import { redirect } from '@remix-run/server-runtime'
import { ButtonPrimary, Input } from '../../components/shared'
import { createCategory } from '../../api'



const AddCategoryForm = () => {
    return (
        <Form
            method='POST'
            action='/form/add-category-form'
            className='flex flex-col'
        >
            <Input 
                name='title'
                placeholder='Título'
                className='my-2'
            />

            <Input 
                name='slug'
                placeholder='Slug'
            />

            <ButtonPrimary type='submit' className='mt-3'>
                Crear Categoría 
            </ButtonPrimary>
        </Form>
    )
}

export const action = async(props) => {

    const { request } = props 

    const formData = await request.formData()

    const data = {
        title: formData.get('title'),
        slug: formData.get('slug')
    }

    await createCategory(data)

    return redirect('/')
}

export default AddCategoryForm 