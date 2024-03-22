import React from 'react'

const AddProduct = () => {
  return (
    <>
        <section className="breadCmb">
            <div>
                <h2>Add Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-products">Our Products / </a></li>
                    <li>Create Product</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row">
              
                <div class="col-md-4">
                  <label for="product-name" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id='product-name' placeholder="Product name" aria-label="Product name" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">Select Category</label>
                  <select id="inputState" class="form-select">
                    <option selected>Category 1</option>
                    <option>Category 2</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="selectImage" class="form-label">Select Product Image</label>
                  <input type="file" class="form-control" id='selectImage' />
                </div>
                <div class="col-md-4">
                  <label for="selectImage1" class="form-label">Select Table Image</label>
                  <input type="file" class="form-control" id='selectImage1' />
                </div>
                <div class="col-md-12">
                  <label for="Desciption" class="form-label">Description</label>
                  <textarea class="form-control"  id="Desciption"></textarea>
                </div>
                <div class="col-md-12">
                  <label for="Desciption2" class="form-label">Description</label>
                  <textarea class="form-control"  id="Desciption2"></textarea>
                </div>
                <div class="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Product" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddProduct