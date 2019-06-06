import * as React from "react";

const SELFIE_FILE_NAME = '/dog.jpg';

export class Home extends React.Component {


    render() {
        const pStyle = {
            display: 'inline-block'
        };
        return (
            <div className="row">
                <div>
                    <img src={process.env.PUBLIC_URL + SELFIE_FILE_NAME } alt=""/>
                </div>

                <div>
                    <h2>About Me </h2>
                    <p style={pStyle}>
                        I am Hao Fu. I graduated from University of Wisconsin-Madison @ CS department as a master student.
                        Before coming to the US in 2016, I spent my life in eastern China.
                    </p>
                    <p>
                        Now I am working on building highly available database for <a href="https://aws.amazon.com">AWS</a> at <a href="https://aws.amazon.com/qldb/">QLDB team.</a>
                    </p>
                </div>
            </div>
        )
    }
}