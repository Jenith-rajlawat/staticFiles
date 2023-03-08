import './DonorDetails.css';

function Donor() {
    return (
        <div className='request-order'>
            <form>
                <div className='form-group'>
                    <label className='request-title'>User</label>:
                    <label className='request-data'>Jenith, @user022</label>
                </div>
                <div className='form-group'>
                    <label className='request-title'>Phone</label>:
                    <label className='request-data'>9816066893</label>
                </div>
                <div className='form-group'>
                    <label className='request-title'>Location</label>:
                    <label className='request-data'>Hattiban,Lalitpur</label>

                </div>
                  <div className='form-group'>
                    <label className='request-title'>Donations</label>:
                    <label className='request-data'>15</label>

                </div>
                
            </form>
        </div>
    );
}
export default Donor;