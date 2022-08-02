import './FilesPage.css';

function FilesPage(){
    return (
        <div className='FilesPage'>
            <a href='/' className='CheckFiles'>Upload Files Now</a>
            <div className='FileData'>
                <h1>ALL FILES</h1>
                <div>
                    <span>Name</span>
                    <span>Description</span>
                    <span>Type</span>
                    <span>Size</span>
                    <span>Date</span>
                    <span>View File</span>
                    <span>Delete</span>
                </div>
            </div>
        </div>
    )
}

export default FilesPage;