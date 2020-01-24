import React from "react";
import Header from "../block/Header";
import Image from "../block/Image";
import Img1 from "../images/Img1.jpeg";
import Img2 from "../images/Img2.jpg";
import Img3 from "../images/Img3.jpg";

function ImageGallery() {
    return (
        <>
            <Header header="Image Gallery" />
            <div styleName="row">
                <Image
                    src={Img1}
                    styleName="column"
                    alt="Test Image1"
                />
                <Image
                    src={Img2}
                    styleName="column"
                    alt="Test Image2"
                />
                <Image
                    src={Img3}
                    styleName="column"
                    alt="Test Image3"
                />
            </div>
        </>
    );
}

export default ImageGallery;