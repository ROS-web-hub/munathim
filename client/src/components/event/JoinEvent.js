import React from 'react';
import CustomTable from '../layout/CustomTable';
import '../../App.css';

const JoinEvent = () => {
    return (
        <React.Fragment>
            <div className='p-5' style={{ minHeight: '100vh', backgroundColor: 'rgb(80, 139, 252)'}}>
                <div className='d-flex justify-content-center text-white'><h1>Join Event</h1></div>
                <div className='p-5'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="event name" />
                        <div className="input-group-append">
                            <button className="btn btn-primary text-white" type="submit">search</button>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <CustomTable />
                    </div>

                </div>
            </div>

        </React.Fragment>

    )

}

export default JoinEvent;