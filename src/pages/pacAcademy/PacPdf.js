import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import SectionOne from '../../components/about/SectionOne';
import pattern from "../../assets/images/pattern.jpg";
import { Translate } from "react-auto-translate";
import prevblue from "../../assets/logos/prevblue.svg";
import nextblue from "../../assets/logos/nextblue.svg";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PacPdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdf, setPdf] = useState({})

    const navigate = useNavigate()

    const { pdfs } = useSelector((store) => store.pdf)

    const { name } = useParams()

    // console.log(pdfs);

    useEffect(() => {
        window.scroll(0, 0);
        // const file = pdfs.find((item) => item.name === name)
        pdfs?.map((item) => {
            item.files?.map((file) => {
                if (file.name === name) {
                    // console.log(file);
                    setPdf(file)
                    return
                }
            })
        })
        // setPdf(file)
    }, [])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <div className='academy-pdf' >
            <div className='content'>
                <div className='pdf-container' onContextMenu={(e) => e.preventDefault()}>
                    <Document file={`http://localhost:8080/getPdf?downloadUrl=${encodeURIComponent(pdf.downloadURL)}`} onLoadSuccess={onDocumentLoadSuccess}>
                        {/* <Page pageNumber={pageNumber} width={window.innerWidth - 200} /> */}
                        <Page pageNumber={pageNumber} width={document.body.clientWidth - 100} />
                    </Document>
                </div>
                <div className="pagination">
                    <div className="center">
                        <div className="left">
                            <p>
                                <Translate>
                                    {`Showing page ${pageNumber} of ${numPages} pages`}
                                </Translate>
                            </p>
                            <span className='input-span'>
                                <input
                                    type="text"
                                    value={pageNumber}
                                    onChange={(e) => {
                                        const enteredValue = parseInt(e.target.value, 10) || 1;
                                        setPageNumber(Math.min(enteredValue, numPages));
                                    }}
                                />
                            </span>
                        </div>
                        <div className="right">
                            <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
                                <img src={prevblue} alt="prevblue" />
                                <span>
                                    <Translate>Previous</Translate>
                                </span>
                            </button>
                            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                                <span>
                                    <Translate>Next</Translate>
                                </span>
                                <img src={nextblue} alt="nextblue" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacPdf;
