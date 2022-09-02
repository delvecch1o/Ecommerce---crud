import React from 'react';

function Category(){
    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Category</h1>
        <form>
    
    <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="seo-targs-tab" data-bs-toggle="tab" data-bs-target="#seo-targs" type="button" role="tab" aria-controls="seo-targs" aria-selected="false">SEO Tags</button>
            </li>
       
    </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    
                    <div className="form-group mb-3">
                        <label>Slug</label>
                        <input type="text" name="slug" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label>Description</label>
                        <textarea name="descrip" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label>Status</label>
                        <input type="checkbox" name="status" /> Status 0=shown/1=hidden
                    </div>
                
            </div>
                <div className="tab-pane card-body border fade" id="seo-targs" role="tabpanel" aria-labelledby="seo-targs-tab">

                        <div className="form-group mb-3">
                            <label>Meta Title</label>
                            <input type="text" name="meta_title" className="form-control" />
                        </div>
                    
                        <div className="form-group mb-3">
                            <label>Meta Keywords</label>
                            <textarea name="meta_keyword" className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label>Meta Description </label>
                            <textarea name="meta_descrip" className="form-control" />
                        </div>

                </div>
        
    </div>

    <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
    
    </form>

</div>


    )
}

export default Category;