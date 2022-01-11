// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { upLoadFileImage } from '../redux/actions/AdxTypeAction';

// export default function AdminEditAdx(props) {

//     const [file, setFile] = useState('');

//     const [filename, setFileName] = useState('Choose File');

//     const dispatch = useDispatch();

//     const onChange = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name)
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData()
//         formData.append('image', file)
//         console.log(formData);
//         dispatch(upLoadFileImage(formData))
//     }
//     return (
//         <div className='container'>
//             <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX</h4>
//             <div className='row'>
//                 <div className="form-group col-10">
//                     <form onSubmit={onSubmit}>
//                         <div className='row'>
//                             <div className="mb-3 col-2">
//                                 <label className="form-label">ID Adx</label>
//                                 <input type="number" className="form-control" name='id_adx ' disabled="true" value={1} />

//                             </div>
//                             <div className="mb-3 col-10">
//                                 <label className="form-label">Name Adx</label>
//                                 <input type="text" className="form-control" name='name_adx' />
//                             </div>
//                         </div>
//                         <div className='row'>
//                             <div className="mb-3 col-6">
//                                 <label className="form-label">Img Adx</label>
//                                 <input type="file" className="form-control-file" name="image" onChange={onChange} />
//                             </div>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </form>
//                 </div>
//             </div>

//         </div>
//     )
// }


import React, { useState } from 'react'

export default function AdminEditAdx() {
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    return (
        <div className="">
            <form>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="file" value={selectedFile ? setSelectedFile : ''}
                    onChange={(e) => setSelectedFile(e.target.files[0])} />
            </form>
        </div>
    )
}
