import React, { useEffect, useState } from 'react'
import closeModal from "../../assets/logos/closeModal.svg";
import alert from "../../assets/logos/alert.svg";
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const NewsletterModal = ({ selected, setIsNewsletterModal, fileUrl, setSelectedFile }) => {
    const [newsletter, setNewsletter] = useState('')
    const [newsletters, setNewsletters] = useState([])

    const postCollectionRef = collection(db, selected);

    const handleSave = async (e) => {
        e.preventDefault();

        // if (!newsletter) {
        //     alert("kindly fill all fields");
        //     return;
        // }

        try {
            await newsletters.map((item) => {
                deleteDoc(doc(db, selected, item.id));
            })

            await addDoc(postCollectionRef, { [selected]: fileUrl });

            console.log('item added');
            setIsNewsletterModal(false);
            setSelectedFile(null)
        } catch (error) {
            console.error('Error adding/deleting newsletter:', error);
            alert('An error occurred while saving the newsletter. Please try again.');
        }
    };

    const getNewsletters = async () => {
        const snapshot = await getDocs(postCollectionRef);
        const newsletters = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log('newsletter gotten');
        console.log(newsletters);
        setNewsletters(newsletters)
        newsletters[0] && setNewsletter(newsletters[0].newsletter); // Pre-fill with the first newsletter
    };

    useEffect(() => {
        getNewsletters();
    }, []);


    return (
        <div className="modal newsletter-modal">
            <div className="modal-center">
                <div className="close-btn" onClick={() => setIsNewsletterModal(false)}>
                    <img src={closeModal} alt="closeModal" />
                </div>
                <div className="icon">
                    <img src={alert} alt="alert" />
                </div>
                <p>Add/Modify {selected} file</p>
                {/* <div className="input">
                    <input type="text" placeholder="Add link to newsletter" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} />
                </div> */}
                <div className="buttons">
                    <button
                        className="button"
                        onClick={handleSave}
                    >
                        Yes, confirm
                    </button>
                    <button className="grey button" onClick={() => setIsNewsletterModal(false)}>
                        No, revert
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsletterModal