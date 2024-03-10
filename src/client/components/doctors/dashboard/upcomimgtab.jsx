import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  IMG04,
  IMG05,
  IMG06,
  patient,
  patient1,
  patient2,
} from "./img";

const UpcomingTab = () => {
  const [appointments, setAppointments] = useState([]); // State to store appointments
  const storedToken = localStorage.getItem('token'); // Get token from localStorage

  const fetchAppointments = () => {
    fetch('http://localhost:8080/appointments/doctor', {
      headers: {
        'Authorization': `Bearer ${storedToken}` // Set Authorization header with token
      }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setAppointments(data); // Set appointments state with response data
        })
        .catch(error => {
          console.error("Error fetching appointments:", error);
        });
  };

  // Fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      {/* Upcoming Appointment Tab */}
      <div className="tab-pane show active" id="upcoming-appointments">
        <div className="card card-table mb-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead style={{borderBottom: "none"}}>
                <tr>
                  <th>Patient Name</th>
                  <th>Appt Date</th>
                  <th>Appointment Time</th>
                  <th>Link</th>
                  <th>Clinical History</th>
                  {/*<th className="text-center">Paid Amount</th>*/}
                  <th/>
                </tr>
                </thead>
                <tbody style={{borderTop: "none"}}>
                {/* Map appointments to table rows */}
                {appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>
                        <h2 className="table-avatar">
                          {/*<Link*/}
                          {/*    to={`/doctor/patient-profile/${appointment.patientId}`}*/}
                          {/*    className="avatar avatar-sm me-2"*/}
                          {/*>*/}
                          {/*  <img*/}
                          {/*      className="avatar-img rounded-circle"*/}
                          {/*      src={appointment.patientImage}*/}
                          {/*      alt="User Image"*/}
                          {/*  />*/}
                          {/*</Link>*/}
                          {/*<Link to={`/doctor/patient-profile/${appointment.patientId}`}>*/}
                            {appointment.patientName} {appointment.patientSurname}
                          {/*</Link>*/}
                        </h2>
                      </td>
                      <td>
                        {appointment.appointmentDay}{" "}
                        {/*<span className="d-block text-info">{appointment.appointmentTime}</span>*/}
                      </td>
                      <td><span className="d-block text-info">{appointment.appointmentTime}</span></td>
                      <td>{appointment.link}</td>
                      {appointment.clinicalHistoryUuid !== null ? (
                          <td><Link to={{
                            pathname: "/doctorclinicalhistory",
                            state: {
                              patient_uuid: appointment.patientUuid
                            }
                          }}>View</Link></td>
                      ) : (
                          <td><Link to={{
                            pathname: "/doctorclinicalhistory",
                            state: {
                              clinicalHistoryUuid: appointment.clinicalHistoryUuid
                            }
                          }}>View</Link></td>
                      )}
                      {/*<td className="text-center">{appointment.link}</td>*/}
                      {/*<td className="text-end">*/}
                      {/*  <div className="table-action">*/}
                      {/*    <Link to="#" className="btn btn-sm bg-info-light" style={{marginRight: "5px"}}>*/}
                      {/*      <i className="far fa-eye"/> View*/}
                      {/*    </Link>*/}
                      {/*    <Link to="#" className="btn btn-sm bg-success-light" style={{marginRight: "5px"}}>*/}
                      {/*      <i className="fas fa-check"/> Accept*/}
                      {/*    </Link>*/}
                      {/*    <Link to="#" className="btn btn-sm bg-danger-light">*/}
                      {/*      <i className="fas fa-times"/> Cancel*/}
                      {/*    </Link>*/}
                      {/*  </div>*/}
                      {/*</td>*/}
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Upcoming Appointment Tab */}
    </>
  );
};

export default UpcomingTab;
