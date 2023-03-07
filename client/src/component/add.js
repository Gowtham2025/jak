import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";

export function AddStd(){


    return(
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-12 text-center">
                        <h3>Add Student Details</h3>
                        <Link to="/">
                            <button type="button" className="btn btn-primary" id="next-data" name="next-data">Go Back</button>
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-6">
                        <form onSubmit=''>
                            <div className="table-responsive">
                                <div className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td><label>First Name</label></td>
                                            <td><input type="text" name="firstname" id="firstname"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Last Name</label></td>
                                            <td><input type="text" name="lastname" id="lastname"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Address</label></td>
                                            <td><input type="text" name="address" id="address"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone Number</label></td>
                                            <td><input type="text" name="phnum" id="phnum"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Email</label></td>
                                            <td><input type="email" name="email" id="email"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Father Name</label></td>
                                            <td><input type="text" name="fathername" id="fathername"></input></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                                <button type="submit" id="data-submit" name="data-submit" value="submit" className="btn btn-success">Submit</button>

                                            </td>
                                        </tr>
                                    </tbody>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}