import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
        <section className="breadCmb">
            <div>
                <h2>Our Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li>Our Products</li>
                </ul>
            </div>
            <div className="btn1">
                <Link to={'/create-product'} >Create Product </Link>
            </div>
        </section>

        <section className="tables">
            <div className="container">
                <div className="row">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="https://images.unsplash.com/photo-1710756115964-f949e92b97fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Category-image" /></td>
                                <td>uPVC pipes</td>
                                <td>cPVC Pipes / Fittings</td>
                                <td className='upd-btns'>
                                    <Link to={''} className='upd-btns update'><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <Link to={''} className='upd-btns delete'><i class="fa-solid fa-trash-arrow-up"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage