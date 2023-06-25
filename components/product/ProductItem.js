import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'

const ProductItem = ({ product }) => {
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`} className="btn btn-dark"
                    style={{ marginRight: '5px', flex: 1 }}>
                    Lihat
                </Link>
            </>
        )
    }

    const adminLink = () => {
        return (
            <>
                <Link href={`create/${product._id}`} className="btn btn-dark"
                    style={{ marginRight: '5px', flex: 1 }}>
                    Edit
                </Link>
                <button className="btn btn-danger"
                    style={{ marginLeft: '5px', flex: 1 }}
                    data-toggle="modal" data-target="#exampleModal"
                    onClick={() => dispatch({
                        type: 'ADD_MODAL',
                        payload: [{
                            data: '', id: product._id,
                            title: product.title, type: 'DELETE_PRODUCT'
                        }]
                    })} >
                    Delete
                </button>
            </>
        )
    }

    return (
        <div className='container'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url} />
                <div className="card-body">
                    <h5 className="card-title text-capitalize text-center" title={product.title}>
                        {product.title}
                    </h5>

                    <div className="row justify-content-between mx-0 mt-4">
                        {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ProductItem