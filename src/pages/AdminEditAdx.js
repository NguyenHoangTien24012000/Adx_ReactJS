import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAdxTypeAction, upLoadFileImage } from '../redux/actions/AdxTypeAction';


export default function AdminEditAdx(props) {

    const dispatch = useDispatch();

    const { adxType } = useSelector(state => state.AdxTypeReducer)

    let { idADX } = (props.match.params)


    const [file, setFile] = useState({ fileRender: '' });

    useEffect(() => {
        dispatch(getAdxTypeAction(idADX))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            detail: adxType? adxType.detail :'',
            id_adx: adxType? adxType.id_adx : '',
            image: adxType? adxType.image : '',
            name_adx: adxType? adxType.name_adx :'',
            name_demo: adxType? adxType.name_demo:'',
            posti: adxType? adxType.posti : '',
            size: adxType? adxType.size : '',
            type_adx: adxType? adxType.type_adx:'',
            type_screen: adxType? adxType.type_screen :''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            let formData = new FormData();
            for(let key in values ){
                formData.append(key,values[key])
            }
            dispatch(upLoadFileImage(formData))
        },
    });

    const hangdleChangeFile = async (e) => {
        let image = e.target.files[0]
        await formik.setFieldValue("image", image)
        if (e.target.files && e.target.files[0]) {
            setFile({ fileRender: URL.createObjectURL(image) });
        }
    }

    return (
        <div className='container'>
            <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX</h4>
            <div className='row'>
                <div className="form-group col-10">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-2">
                                <label className="form-label">ID Adx</label>
                                <input type="number" className="form-control" name='id_adx' disabled={true} value={formik.values.id_adx} onChange={formik.handleChange} />
                            </div>
                            <div className="mb-3 col-10">
                                <label className="form-label">Name Adx</label>
                                <input type="text" className="form-control" name='name_adx' value={formik.values.name_adx} onChange={formik.handleChange} />

                            </div>

                        </div>
                        <div className='row'>
                            <div className="mb-3 col-4">
                                <label >File Image</label>
                                <input type="file" className="form-control-file" name="image" id="customFile" onChange={hangdleChangeFile} />
                            </div>
                            {!file.fileRender ? <div className="mb-3 col-4">
                                <img src={formik.values.image} className='img-fluid w-50' alt='Adx image' />
                            </div> : <div className="mb-3 col-4">
                                <img src={file.fileRender} className='img-fluid w-50' alt='Adx image' />
                            </div>}
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Name AdxDemo</label>
                                <input type="text" className="form-control" name='name_demo' value={formik.values.name_demo} onChange={formik.handleChange} />
                            </div>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Position</label>
                                <input type="text" className="form-control" name='posti' value={formik.values.posti} onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-12'>
                                <label className="form-label">Detail</label>
                                <textarea type="text" className="form-control" name='detail' value={formik.values.detail} onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Size</label>
                                <input type="text" className="form-control" name='size' value={formik.values.size} onChange={formik.handleChange} />
                            </div>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Type ADX</label>
                                <input type="text" className="form-control" name='position' disabled={true} value={formik.values.type_adx} onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Type Screen</label>
                                <select className="form-control" defaultValue={formik.values.type_screen} name='type_screen' onChange={formik.handleChange}>
                                    <option value="MOBILE">MOBILE</option>
                                    <option value="PC">PC</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

