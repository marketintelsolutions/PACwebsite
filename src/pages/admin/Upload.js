import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/admin/Dashboard'
import upload from '../../assets/logos/upload.svg'
import baselineDelete from '../../assets/logos/baselineDelete.svg'
import bluetick from '../../assets/logos/blueTick.svg'
import { storage } from '../../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import NewsletterModal from '../../components/admin/NewsletterModal'

const Upload = () => {
    const [selected, setSelected] = useState('newsletter');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isNewsletterModal, setIsNewsletterModal] = useState(false)
    const [fileUrl, setFileUrl] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => { uploadFile() }, [selectedFile])

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadFile = () => {
        if (!selectedFile) return
        const storageRef = ref(storage, selected);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);
        setDisabled(true)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress);
                console.log('progress', progress);

                switch (snapshot.state) {
                    case "paused":
                        console.log("upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    //   setFormData((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    console.log(downloadUrl);
                    setFileUrl(downloadUrl)
                    setDisabled(false)
                });
            }
        );
    };

    return (
        <Dashboard>
            <section className='admin-upload'>
                {isNewsletterModal && <NewsletterModal selected={selected} setIsNewsletterModal={setIsNewsletterModal} fileUrl={fileUrl} setSelectedFile={setSelectedFile} />}
                <div className="upload-top-nav">
                    <button className={`${selected === 'newsletter' && 'active'}`} onClick={() => setSelected('newsletter')}>Newsletter</button>
                    <button className={`${selected === 'profile' && 'active'}`} onClick={() => setSelected('profile')}>Company Profile</button>
                </div>
                <div className="upload-bottom">
                    <div className="select">
                        <div className="input">
                            <input
                                type="file"
                                name="file"
                                accept="application/pdf"
                                onChange={(e) => handleFileChange(e)}
                            />
                            <label htmlFor="file">
                                {selectedFile ? <p>{selectedFile.name}</p> : <p>Choose file</p>}
                                <img src={upload} alt="upload" />
                            </label>
                        </div>
                        <img src={bluetick} alt="bluetick" className={`${disabled ? "confirm disabled" : "confirm"}`} onClick={() => {
                            if (disabled) return
                            setIsNewsletterModal(true)
                        }} />
                        <img src={baselineDelete} alt="baselineDelete" className="delete" onClick={() => {
                            setSelectedFile(null);
                            setDisabled(true)
                        }} />
                    </div>
                </div>
            </section>
        </Dashboard>
    )
}

export default Upload