import React, { useEffect, useState } from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { VscRunAll } from "react-icons/vsc";
import { Link } from 'react-router-dom';
// import { headings } from '../../utils/academyData';
import SectionOne from '../../components/about/SectionOne';
import pattern from "../../assets/images/pattern.jpg";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import CustomLoader from '../../components/resources/CustomLoader';

const PacAcademy = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [academies, setAcademies] = useState([])

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

    return (
        <section className="resources">
            <SectionOne color="#A6A6A7" text="PAC Academy" img={pattern} />
            <div className="section-one">
                {loading ? <CustomLoader /> :
                    <div className="content-head-center">
                        <div className="left">
                            <div className="all">
                                <span>
                                    <BsBuildingsFill />
                                </span>
                                <div className="text">
                                    <h2>{files.length || "..."}</h2>
                                    <p>total files</p>
                                </div>
                                <button>
                                    {" "}
                                    <Link to="/resources/all">view all files</Link>
                                </button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="items">
                                {academies.map((item, index) => {
                                    const { text, icon, id, color, main } = item;
                                    if (text === "all") return;

                                    return (
                                        <Link to={`/pacacademy/${id}`} key={index} className="item">
                                            <span style={{ background: `${color}` }}><VscRunAll /></span>
                                            <div className="text">
                                                <h2>{item.id}</h2>
                                                {/* <p>44 items</p> */}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>}
            </div>
        </section>
    )
}

export default PacAcademy