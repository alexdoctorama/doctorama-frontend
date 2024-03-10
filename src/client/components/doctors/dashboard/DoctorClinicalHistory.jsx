import React, { useState } from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

const DoctorClinicalHistory = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        doctorUuid: '',
        patientUuid: '',
        patientName: '',
        patientSurname: '',
        nie: '',
        patientDateOfBirth: '',
        phone: '',
        address: '',
        reasonForConsultation: '',
        currentIllness: '',
        familyHistory: '',
        pathologyHistory: '',
        pharmacologicalTreatment: '',
        allergies: '',
        gyneacologicalHistory: '',
        vaccinationStatus: '',
        TA: '',
        FC: '',
        FR: '',
        SAT: '',
        headAndNeck: '',
        thorax: '',
        abdomen: '',
        genitourinary: '',
        extremities: '',
        neurological: '',
        laboratoryTests: '',
        analisis: '',
        diagnosis: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5051/doctorclinicalhistory', formData);
            // Optionally, handle success or navigate to another page
            console.log('Data submitted successfully');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
        <h1 >Doctor Clinical History Form</h1>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <div className="form-group form-focus">
                        <h3>Personal Information</h3>
                        <label>
                            Patient UUID:
                            <input type="text" name="patientUuid" value={formData.patientUuid} onChange={handleChange}
                                   required/>
                        </label>
                        <label>
                            Patient Name:
                            <input type="text" name="patientName" value={formData.patientName} onChange={handleChange}
                                   required/>
                        </label>
                        <label>
                            Patient Surname:
                            <input type="text" name="patientSurname" value={formData.patientSurname}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            NIE:
                            <input type="text" name="nie" value={formData.nie} onChange={handleChange}/>
                        </label>
                        <label>
                            Patient Date of Birth:
                            <input type="text" name="patientDateOfBirth" value={formData.patientDateOfBirth}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                        </label>
                    </div>
                    <br></br><br></br>
                    <div className="form-group form-focus">
                        <h3>Medical History</h3>
                        <label>
                            Current Illness:
                            <input type="text" name="currentIllness" value={formData.currentIllness}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Family History:
                            <input type="text" name="familyHistory" value={formData.familyHistory}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Pathology History:
                            <input type="text" name="pathologyHistory" value={formData.pathologyHistory}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Pharmacological Treatment:
                            <input type="text" name="pharmacologicalTreatment" value={formData.pharmacologicalTreatment}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Allergies:
                            <input type="text" name="allergies" value={formData.allergies} onChange={handleChange}/>
                        </label>
                        <label>
                            Gyneacological History:
                            <input type="text" name="gyneacologicalHistory" value={formData.gyneacologicalHistory}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Vaccination Status:
                            <input type="text" name="vaccinationStatus" value={formData.vaccinationStatus}
                                   onChange={handleChange}/>
                        </label>
                    </div>
                    <br></br><br></br>
                    <div className="form-group form-focus">
                        <h3>Physical Exams</h3>
                        <label>
                            TA:
                            <input type="text" name="TA" value={formData.TA} onChange={handleChange}/>
                        </label>
                        <label>
                            FC:
                            <input type="text" name="FC" value={formData.FC} onChange={handleChange}/>
                        </label>
                        <label>
                            FR:
                            <input type="text" name="FR" value={formData.FR} onChange={handleChange}/>
                        </label>
                        <label>
                            SAT:
                            <input type="text" name="SAT" value={formData.SAT} onChange={handleChange}/>
                        </label>
                        <label>
                            Head and Neck:
                            <input type="text" name="headAndNeck" value={formData.headAndNeck} onChange={handleChange}/>
                        </label>
                        <label>
                            Thorax:
                            <input type="text" name="thorax" value={formData.thorax} onChange={handleChange}/>
                        </label>
                        <label>
                            Abdomen:
                            <input type="text" name="abdomen" value={formData.abdomen} onChange={handleChange}/>
                        </label>
                        <label>
                            Genitourinary:
                            <input type="text" name="genitourinary" value={formData.genitourinary}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Extremities:
                            <input type="text" name="extremities" value={formData.extremities} onChange={handleChange}/>
                        </label>
                        <label>
                            Neurological:
                            <input type="text" name="neurological" value={formData.neurological}
                                   onChange={handleChange}/>
                        </label>
                    </div>
                    <br></br><br></br>
                    <div className="form-group form-focus">
                        <h3>Others</h3>
                        <label>
                            Reason for Consultation:
                            <input type="text" name="reasonForConsultation" value={formData.reasonForConsultation}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Laboratory Tests:
                            <input type="text" name="laboratoryTests" value={formData.laboratoryTests}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Analisis:
                            <input type="text" name="analisis" value={formData.analisis} onChange={handleChange}/>
                        </label>
                        <label>
                            Diagnosis:
                            <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default DoctorClinicalHistory;
