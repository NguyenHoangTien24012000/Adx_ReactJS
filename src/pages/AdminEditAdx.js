import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { upLoadFileImage } from '../redux/actions/AdxTypeAction';

export default function AdminEditAdx(props) {

    const [valueAdx, setValue] = useState({ nameAdx: '', nameAdxDemo : ''});
    const [file,setFile] = useState({fileUpload : '', fileRender : ''});

    const dispatch = useDispatch();

    const onChangeFile = (e) => {
        let image = e.target.files[0]
        if (e.target.files && e.target.files[0]) {
            setFile({fileUpload : image,fileRender : URL.createObjectURL(image)});
        }
    }

    const onChange = (e) => {
        let { name, value } = e.target;
        setValue({...valueAdx, [name] : value})
        console.log(valueAdx)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', file.fileUpload)
        formData.append('name_adx', valueAdx.nameAdx)
        formData.append('name_demo', valueAdx.nameAdxDemo)
        console.log('image', file.fileUpload);
        dispatch(upLoadFileImage(formData))
    }
    return (
        <div className='container'>
            <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX</h4>
            <div className='row'>
                <div className="form-group col-10">
                    <form onSubmit={onSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-2">
                                <label className="form-label">ID Adx</label>
                                <input type="number" className="form-control" name='id_adx' disabled={true} value={1} />
                            </div>
                            <div className="mb-3 col-10">
                                <label className="form-label">Name Adx</label>
                                <input type="text" className="form-control" name='nameAdx' value={valueAdx.nameAdx} onChange={onChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mb-3 col-4">
                                <label >File Image</label>
                                <input type="file" className="form-control-file" name="image" id="customFile" onChange={onChangeFile} />
                            </div>
                            {!file.fileRender ? '' : <div className="mb-3 col-4">
                                <img src={file.fileRender} className='img-fluid w-50' alt='Adx image' />
                            </div>}
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Name AdxDemo</label>
                                <input type="text" className="form-control" name='nameAdxDemo' value={valueAdx.nameAdxDemo} onChange={onChange} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}


