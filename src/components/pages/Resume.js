import React from 'react';
import FadeIn from 'react-fade-in';
import resume from '../../assets/pdf/resume.pdf'

export default function Resume() {
    return (
        <div className="tab-content">
            <FadeIn>
                <h1>Resume</h1>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-6 col-sm-12">
                            <h3>Skills</h3>
                            <ul>
                                <li>
                                    HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>JQUERY</li>
                                <li>BOOTSTRAP</li>
                                <li>NODE.JS</li>
                                <li>EXPRESS</li>
                                <li>MYSQL</li>
                                <li>NOSQL</li>
                                <li>REACT</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <button type="button" className="btn btn-info btn-lg btn-dark" data-bs-toggle="modal" data-bs-target="#resumeModal">Resume</button>
                            <div id="resumeModal" className="modal fade" role="dialog">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">Brad Rollinson's Resume</h4>
                                        </div>
                                        <div className="modal-body">
                                            <embed src={resume} frameborder="0" width="100%" height="450px"></embed>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}