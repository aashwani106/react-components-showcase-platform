import { Formik } from "formik"
import React, { useState } from "react"
import Swal from "sweetalert2"

const AddComponent = () => {

    const [selFile, setSelFile] = useState("");

    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log('file uploaded');
                // toast.success("Image Uploaded!!", {
                //     style: {
                //         borderRadius: "10px",
                //         background: "#333",
                //         color: "#fff",
                //     },
                // });
            }
        });
    };

    const userSubmit = async (formdata) => {
        console.log(formdata)
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch("http://localhost:5000/comp/add", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (response.status === 200) {
            console.log("component added")
            Swal.fire({
                icon: "success",
                title: "Well Done",
                text: "Registered Successfuly",
            })
        }
    }

    return (
        <div>
            <div className="container pt-5">
                <div className="card">
                    <div className="card-body">
                        <Formik initialValues={{ title: "", code: "", thumbnail: "", uploadedBy: "", createdAt: new Date() }} onSubmit={userSubmit}>
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    <label>Title</label>
                                    <input className="form-control" id="title" onChange={handleChange} value={values.title} />
                                    <label>Code</label>
                                    <input className="form-control" id="code" onChange={handleChange} value={values.code} />
                                    <label>Thumbnail</label>
                                    <input className="form-control" type="file" onChange={uploadFile} />
                                    <button type="submit" className="btn btn-primary mt-4">
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddComponent
