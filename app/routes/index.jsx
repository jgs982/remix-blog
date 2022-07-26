import { BasicLayout } from '../layouts'
import { getCategories } from '../api'
import { useLoaderData } from '@remix-run/react';
import CategoryItem from '../components/blog/CategoryItem'
import { map } from 'lodash'


export const loader = () => {
    return getCategories()
}

export default function Index() {

    const categories = useLoaderData()

    return (
        <BasicLayout>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    map(categories, (category, index) => {
                        return (
                            <CategoryItem
                                key={index}
                                category={category}
                            />
                        )
                    })
                }
            </div>
        </BasicLayout>
  );
}
