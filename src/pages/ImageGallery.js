import React from "react";
import Header from "../block/Header";
import Image from "../block/Image";
import Img1 from "../images/Img1.jpeg";
import Img2 from "../images/Img2.jpg";
import Img3 from "../images/Img3.jpg";
import Img4 from "../images/Img4.jpg";

function ImageGallery() {
    return (
        <>
            <Header header="Image Gallery" />
            <div styleName="row">
                <Image
                    src={Img1}
                    styleName="column"
                    alt="TDP 2018 Chrirstmas Meal"
                />
                <Image
                    src={Img2}
                    styleName="column"
                    alt="TDP 2018 Christmas Meal 2"
                />
                <Image
                    src={Img3}
                    styleName="column"
                    alt="Friday learning Group Dinner"
                />
                <Image
                    src={Img4}
                    styleName="column"
                    alt="Rock Climbing Social"
                />
            </div>
        </>
    );
}

export default ImageGallery;