import React, { useState } from 'react';
import styles from '../../styles/css/LandingPage.module.css';
import flexbox from '../../styles/css/Flexbox.module.css';
import Swal from 'sweetalert2';

const LandingPageFooter = () => {

    const [newsletter, setNewsletter] = useState(() => '');

    const today = new Date();

    const handleClick = () => {

        if (!newsletter) {
            Swal.fire({
                icon: 'error',
                title: `You need to fill the form before submission ;)`,
                showConfirmButton: true,
                timer: 3000
            });
            return
        }

        if (!newsletter.includes('@') || !newsletter.includes('.com')) {
            Swal.fire({
                icon: 'error',
                title: `You need to type a valid email`,
                showConfirmButton: true,
                timer: 3000
            });
            return
        }

        Swal.fire({
            icon: 'success',
            title: `Thanks for signing up. Look for news on your email feed!`,
            showConfirmButton: false,
            timer: 3000
        });

        setNewsletter(() => '');
    }

    return (
        <footer className={styles.lp__footer}>
            <div className={flexbox.row}>
                <div className={flexbox.col__4}>
                    <p className={styles.lead} style={{ color: 'magenta', textAlign: 'left' }}>Our team has nothing to do with the actual redux team. This is just a model page ;)</p>
                    <p className={styles.lead} style={{ textAlign: 'left' }}>All rights reserved. JM Softwares &copy; {today.getFullYear()}</p>
                </div>
                <div className={flexbox.col__8}>
                    <label className={styles.label__CTA}>
                        <input
                            style={{ 
                                width: '100%',
                                padding: '35px 40px',
                                margin: '20px',
                                borderRadius: '60px',
                             }}
                            type='text'
                            placeholder='Your best email'
                            value={newsletter}
                            onChange={(e) => setNewsletter(() => e.target.value)}
                        />
                        <button
                            style={{ 
                                position: 'absolute',
                                right: '30px',
                                transform: 'translateY(-90px)',
                                padding: '20px 45px',
                                borderRadius: '60px',
                                color: 'black',
                                backgroundColor: 'yellow',
                                cursor: 'pointer',

                             }}
                            onClick={() => handleClick()}
                        >
                            Send
                        </button>
                    </label>
                </div>
            </div>
        </footer>
    )
}

export default LandingPageFooter