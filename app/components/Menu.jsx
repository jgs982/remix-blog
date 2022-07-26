import { useState } from 'react'
import { Link, useParams } from '@remix-run/react'
import { ButtonPrimary, Modal } from './shared'
import AddCategoryForm from '../routes/form/add-category-form'
import AddPostForm from '../routes/form/add-post-form'


export const Menu = () => {

    const { category } = useParams()

    const [show, setShow] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const onOpenCloseModal = () => setShow(prevState => !prevState)

    const addPost = () => {
        setModalContent(<AddPostForm/>)
        onOpenCloseModal()
    }

    const addCategory = () => {
        setModalContent(<AddCategoryForm/>)
        onOpenCloseModal()
    }

    return (
        <>
            <div 
                className='bg-stone-800 flex items-center justify-between py-5 px-10'
            >
                <div></div>

                <Link to='/'>
                    <h1 className='text-white text-2xl'> DevBlog </h1>
                </Link>

                {
                    category 
                    ? (
                        <ButtonPrimary onClick={addPost}>
                            Crear Post
                        </ButtonPrimary>
                    )
                    : (
                        <ButtonPrimary onClick={addCategory}>
                            Crear Categoría
                        </ButtonPrimary>
                    )
                }             
            </div>

            <Modal 
                show={show}
                close={onOpenCloseModal}
            >
                {modalContent}
            </Modal>
        </>
    )
}