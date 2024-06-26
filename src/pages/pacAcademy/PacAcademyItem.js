import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BsFileEarmarkPdfFill, BsFillFileEarmarkExcelFill, BsBuildingsFill } from 'react-icons/bs';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import pattern from "../../assets/images/pattern.jpg";
import SectionOne from '../../components/about/SectionOne';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const PacAcademyItem = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false)
    const [academy, setAcademy] = useState({})

    const postCollectionRef = collection(db, "pacacademy");

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
        academies.length === 0 && getAcademies()
    }, []);

    useEffect(() => {
        window.scroll(0, 400);
        const item = academies.find((item) => item.id === id)
        setAcademy(item)
    }, [id])

    return (
        <div className="resource-details">
            <SectionOne color="#A6A6A7" text={`PAC Academy - ${id}`} img={pattern} />

            <div className="section-two" id="resources">
                <Link to="/pacacademy" className='back-btn'><IoMdArrowRoundBack /> BACK</Link>
                <div className="content-center">
                    <div className="content">
                        <div className="right">
                            {academies.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className={`${item.id === id ? "item active" : "item"}`}
                                        to={`/pacacademy/${item.id}`}
                                    >
                                        <span><BsBuildingsFill /></span>
                                        <h2>{item.id}</h2>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="left">
                            <div className="top">
                                <div className="total">
                                    <p>total</p>{" "}
                                    <p className="length">
                                        <span>{academy?.files?.length || 0}</span>
                                    </p>
                                </div>
                                <h3>
                                    <span>{id}</span>
                                </h3>
                            </div>

                            <div className="bottom">

                                {!loading ? (
                                    academy?.files?.map((file, index) => {
                                        const { name, size, downloadURL, dateCreated } = file;
                                        let fileType;
                                        if (name?.endsWith(".pdf")) {
                                            fileType = "pdf";
                                        }
                                        // console.log(file);

                                        return (
                                            // <a
                                            // key={index}
                                            // className="item"
                                            // href={downloadURL}
                                            // target="_blank"
                                            // rel="noopener noreferrer"
                                            // >
                                            //     <span className="icon">
                                            //         {fileType === "pdf" ? (
                                            //             <BsFileEarmarkPdfFill />
                                            //         ) : (
                                            //             <BsFillFileEarmarkExcelFill />
                                            //         )}
                                            //     </span>
                                            //     <h2>{name}</h2>
                                            //     <p>
                                            //         <FaRegFloppyDisk />{" "}
                                            //         {size / 1000} kb
                                            //     </p>
                                            // </a>
                                            <Link
                                                key={index}
                                                className="item"
                                                target='_blank'
                                                to={`/pacacademy/pdf/${name}`}
                                            >
                                                <span className="icon">
                                                    {fileType === "pdf" ? (
                                                        <BsFileEarmarkPdfFill />
                                                    ) : (
                                                        <BsFillFileEarmarkExcelFill />
                                                    )}
                                                </span>
                                                <h2>{name}</h2>
                                                <p>
                                                    <FaRegFloppyDisk />{" "}
                                                    {size / 1000} kb
                                                </p></Link>
                                        );
                                    })
                                ) : (
                                    <h2>Loading...</h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PacAcademyItem
