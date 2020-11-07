import { gql, useQuery } from "@apollo/client";
import React, { useRef, useState } from "react"
import Header from "../components/Header"
import Lolly from "../components/Lolly"


const GETDATA = gql`
    {
        hello
    }
`

export default function CreateNew() {
    const [color1, setColor1] = useState("#deaa43");
    const [color2, setColor2] = useState("#d52358");
    const [color3, setColor3] = useState("#e95946");
    const recipientNameRef = useRef();
    const messageRef = useRef();
    const senderRef = useRef();

    const {loading, error, data } = useQuery(GETDATA);

    const submitLollyForm = () => {
        console.log("clicked");
        console.log('color 1', color1);
        console.log('Sender Name', senderRef.current.value);
    }

    return (
        <div>
            <div className="container">
                {data && data.hello && <div>{data.hello}</div>}
                <Header />
                
                <div className="lollyFromDiv">
                    <div>
                        <Lolly fillLollyTop={color1} fillLollyMiddle={color2} fillLollyBottom={color3} />
                    </div>
                    <div className="lollyFlavourDiv">
                        <label htmlFor="flavourTop" className="colorPickerLabel">
                            <input type="color" value={color1} className="colorPicker" name="flavourTop" id="flavourTop"
                                onChange={(e) => {
                                    setColor1(e.target.value);
                                }}
                            />
                        </label>
                        <label htmlFor="flavourTop" className="colorPickerLabel">
                            <input type="color" value={color2} className="colorPicker" name="flavourTop" id="flavourTop"
                                onChange={(e) => {
                                    setColor2(e.target.value);
                                }}
                            />
                        </label>
                        <label htmlFor="flavourTop" className="colorPickerLabel">
                            <input type="color" value={color3} className="colorPicker" name="flavourTop" id="flavourTop"
                                onChange={(e) => {
                                    setColor3(e.target.value);
                                }}
                            />
                        </label>

                    </div>
                    <div>
                        <div className="lollyForm">
                            <label htmlFor="recipientName">
                                To
                            </label>
                            <input type="text" name="recipientName" id="recipientName" ref={recipientNameRef} />
                            <label htmlFor="recipientName">
                                Message
                            </label>
                            <textarea rows="15" columns="30" ref={messageRef} />
                            <label htmlFor="senderName">
                                From
                            </label>
                            <input type="text" name="senderName" id="senderName" ref={senderRef} />
                            <button onClick={() => submitLollyForm()}>Create Lolly</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
