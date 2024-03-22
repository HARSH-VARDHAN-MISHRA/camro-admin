import React from 'react'

const AddCategory = () => {
  return (
    <>
        <section className="breadCmb">
            <div>
                <h2>Add Category</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-category">Our Category / </a></li>
                    <li>Create category</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row">
              
                <div class="col-md-4">
                  <label for="product-name" class="form-label">Category Name</label>
                  <input type="text" class="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
                </div>
                <div class="col-md-4">
                  <label for="selectImage" class="form-label">Category Image</label>
                  <input type="file" class="form-control" id='selectImage' />
                </div>
                <div class="col-md-12">
                  <label for="Desciption" class="form-label">Description</label>
                  <textarea class="form-control"  id="Desciption"></textarea>
                </div>
                <div class="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Category" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddCategory