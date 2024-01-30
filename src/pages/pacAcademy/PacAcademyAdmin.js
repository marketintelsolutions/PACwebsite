import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BsChevronDown, BsFileEarmarkPdfFill, BsFillFileEarmarkExcelFill } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { headings } from '../../utils/academyData';
import pattern from "../../assets/images/pattern.jpg";
import SectionOne from '../../components/about/SectionOne';
import { collection, getDocs, getDoc, addDoc, updateDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db } from '../../firebase/firebaseConfig';

const PacAcademyAdmin = () => {
    const { id } = useParams();

    const navigate = useNavigate()

    const [progress, setProgress] = useState(0);
    const [isUpload, setIsUpload] = useState(false);
    const [isUploadOpen, setIsUploadOpen] = useState(true);
    const [loading, setLoading] = useState(false)

    const [newFiles, setNewFiles] = useState([]);
    // const [academies, setAcademies] = useState([])
    const [folder, setFolder] = useState('')

    const postCollectionRef = collection(db, "pacacademy");
    const storage = getStorage();

    const academies = JSON.parse(localStorage.getItem('academies')) || []


    const getAcademies = async () => {
        setLoading(true)
        try {
            const snapshot = await getDocs(postCollectionRef);
            const academies = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });
            console.log(academies);
            // setAcademies(academies)
            localStorage.setItem('academies', JSON.stringify(academies))
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    };

    useEffect(() => {
        window.scroll(0, 0);
        // !academies && getAcademies()
        academies.length === 0 && getAcademies()

    }, []);

    const handleFileUpload = async () => {
        if (!folder) return
        setIsUpload(true);
        const uploadTasks = newFiles.map((file) => {
            const storageRef = ref(storage, `pacacademy/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    // Error function
                    console.error(error);
                    alert('Error uploading file: ' + error.message);
                },
                async () => {
                    // Complete function
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    const metadata = {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    };
                    try {
                        const docRef = doc(db, 'pacacademy', folder);
                        const docSnap = await getDoc(docRef);
                        const docData = docSnap.data();
                        docData.files = docData.files || [];
                        docData.files.push({ name: file.name, ...metadata, downloadURL });
                        await updateDoc(docRef, docData);
                        setNewFiles([]); // Clear selected files
                        setProgress(0);
                        setIsUpload(false);

                        console.log('file added to store');

                    } catch (error) {
                        console.error('Error updating Firestore:', error);
                        alert('Error saving file link to database: ' + error.message);
                    }
                }
            );

            return uploadTask;
        });

        await Promise.all(uploadTasks);
    };

    const handleFileChange = (event) => {
        const filesObj = event.target.files;

        const filesArr = [];

        for (let i in filesObj) {
            if (i !== "length" && i !== "item") {
                filesArr.push(filesObj[i]);
            }
        }
        setNewFiles(filesArr);
    };

    return (
        <div className="resource-details">
            <SectionOne color="#A6A6A7" text="PAC Academy Admin" img={pattern} />
            <div className="section-two" id="resources">
                <div className="content-center">
                    <div className="content">
                        <div className="right">
                            {headings.map((item, index) => {
                                const { id, text, icon, sub, main } = item;

                                return (
                                    <Link
                                        key={index}
                                        className={`${id === id ? "item active" : "item"}`}
                                        to={`/resources`}
                                    >
                                        <span>{icon}</span>
                                        <h2>{main || text}</h2>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="left">
                            <div className="top">
                                <div className="total">
                                    <p>total</p>{" "}
                                    <p className="length">
                                        <span>10</span>
                                    </p>
                                </div>
                                <h3>
                                    <span>{id}</span>
                                </h3>

                                <div className="button">
                                    <button
                                        // className="upload-button"
                                        className="label"
                                        onClick={() => setIsUploadOpen(true)}
                                    >
                                        Upload
                                    </button>
                                    <input
                                        type="file"
                                        id="upload"
                                        name="upload"
                                        multiple
                                        onChange={handleFileChange}
                                    />
                                    {isUploadOpen && <div className="upload-file">
                                        <div className="content-center">
                                            <Link
                                                className="close"
                                                // onClick={() => setIsUploadOpen(false)}
                                                // onClick={() => navigate(-1)}
                                                to='/pacacademy'
                                            >
                                                x
                                            </Link>

                                            <h2>Select Folder</h2>
                                            <select name="folder" id="folder" disabled={loading} value={folder} onChange={(e) => setFolder(e.target.value)}>
                                                <option value="">--Select folder--</option>
                                                {
                                                    academies.map((item) => <option value={item.id}>{item.id}</option>)
                                                }
                                            </select>

                                            {newFiles.length > 0 ? (
                                                <>
                                                    {isUpload && (
                                                        <span>
                                                            {progress === 100 ? (
                                                                <p>Upload Complete</p>
                                                            ) : (
                                                                <>
                                                                    Uploading... {progress.toFixed(2)}%{" "}
                                                                    <progress value={progress} max="100" />{" "}
                                                                </>
                                                            )}
                                                        </span>
                                                    )}
                                                    <button className="label" onClick={handleFileUpload}>
                                                        Upload
                                                    </button>
                                                    <h2>
                                                        Selected Files:{" "}
                                                        <span
                                                            className="label"
                                                            onClick={() => setNewFiles([])}
                                                        >
                                                            clear all
                                                        </span>
                                                    </h2>
                                                    {newFiles?.map((item, index) => (
                                                        <p>
                                                            {index + 1}. {item.name}{" "}
                                                            <span >x</span>
                                                        </p>
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    {" "}
                                                    <h2>No files selected</h2>
                                                    <label htmlFor="upload" className="label">
                                                        Select files
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="upload"
                                                        name="upload"
                                                        multiple
                                                        onChange={handleFileChange}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>}
                                </div>
                                <div className="bottom">

                                    <a
                                        className="item"
                                        href='#'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="icon">
                                            <BsFillFileEarmarkExcelFill />
                                        </span>
                                        <h2>name</h2>
                                        <p>
                                            {/* <MdDateRange />{" "} */}
                                            {/* {moment(dateCreated).format("MMMM Do YYYY")} */}
                                            year
                                        </p>
                                    </a>

                                    <button className="button">
                                        <span
                                        >
                                            Load More
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PacAcademyAdmin
