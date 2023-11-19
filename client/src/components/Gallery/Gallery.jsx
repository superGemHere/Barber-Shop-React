import './gallery.css'

export default function Gallery(){


    return(
        <main className="gallery">
            <div className="galleryContainer">
                <div className='photoCard'>
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibHRK8mA1q1TUOYt9jvsiYDG4oLVbJ_rfDQ&usqp=CAU" alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>Awesome haircut, you should try at least once and I guarantee you will be amazed.</p>
                        <p className='username'>By: Dzhem Syuleyman</p>
                        <p className='createdOn'>23.04.2023</p>
                    </div>
                </div>
                <div className='photoCard'>
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibHRK8mA1q1TUOYt9jvsiYDG4oLVbJ_rfDQ&usqp=CAU" alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>Very good fade asdasdasdasdasdasdasd.</p>
                        <p className='username'>By: Dzhem Syuleyman</p>
                        <p className='createdOn'>23.04.2023</p>
                    </div>
                </div>
                <div className='photoCard'>
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibHRK8mA1q1TUOYt9jvsiYDG4oLVbJ_rfDQ&usqp=CAU" alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>Very good fade.</p>
                        <p className='username'>By: Dzhem Syuleyman</p>
                        <p className='createdOn'>23.04.2023</p>
                    </div>
                </div>
                <div className='photoCard'>
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibHRK8mA1q1TUOYt9jvsiYDG4oLVbJ_rfDQ&usqp=CAU" alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>Very good fade.</p>
                        <p className='username'>By: Dzhem Syuleyman</p>
                        <p className='createdOn'>23.04.2023</p>
                    </div>
                </div>
            </div>
        </main>
    );

}