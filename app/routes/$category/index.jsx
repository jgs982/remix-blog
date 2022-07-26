import { BasicLayout } from '../../layouts'
import { useLoaderData } from '@remix-run/react'
import { getPosts } from '../../api/posts'
import { PostItem } from '../../components/blog/PostItem'
import { NoPosts } from '../../components/blog/NoPosts'
import { map, size } from 'lodash'


export const loader = async(data) => {

    const { params } = data
    
    const posts = await getPosts(params.category)

    return {
        category: params.category,
        posts
    }
}


const Category = () => {

    const { category, posts } = useLoaderData()

    return (
        <BasicLayout>
            <div
                className='grid grid-cols-2 gap-2 mt-10'
            >
                {
                    map(posts, (post, index) => (
                        <PostItem
                            key={index}
                            post={post}
                            category={category}
                        />
                    ))
                }
            </div>

            {
                size(posts) < 1 
                && <NoPosts/>
            }
        </BasicLayout>
    )
}


export default Category