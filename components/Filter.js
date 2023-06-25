import React, { useState, useEffect } from 'react'
import filterSearch from '../utils/filterSearch'
import { useRouter } from 'next/router'

const Filter = ({ state }) => {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')

    const { categories } = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({ router, category: e.target.value })
    }

    useEffect(() => {
        filterSearch({ router, search: search ? search.toLowerCase() : 'all' })
    }, [search])

    return (
        <div className='container page_product'>
            <center>
                <div className="input-group pt-3">
                    <div className="input-group-prepend col-md-2 px-0 mt-2">
                        <select className="custom-select text-capitalize"
                            value={category} onChange={handleCategory}>

                            <option value="all">All Products</option>

                            {
                                categories.map(item => (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <form autoComplete="off" className="mt-2 col-md-10 px-0">
                        <input type="text" className="form-control" list="title_product"
                            value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} />
                    </form>
                </div>
            </center>
        </div>
    )
}

export default Filter
