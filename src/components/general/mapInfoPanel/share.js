import React, {useState} from 'react';
import "./share.css"

import {
    EmailShareButton,
    EmailIcon,

    FacebookShareButton,
    FacebookIcon,

    TwitterShareButton,
    TwitterIcon,

    LinkedinShareButton,
    LinkedinIcon,


    WhatsappShareButton,
    WhatsappIcon,

    ViberShareButton,
    ViberIcon,
} from "react-share";


function Share({
                   shareData: {title, body, url} = {
                       title: "title",
                       body: "body",
                       url: window.location.origin
                   }, onCloseClick
               }) {

    if (navigator.share) {
        navigator.share({title, text: body, url}).finally(() => onCloseClick && onCloseClick())
        return <></>
    }

    const SharedString = `${title}\n\n${body}\n\n`;

    return (

        <div className="share">
            <img src="/img/icon-close.svg" alt="" className={"share_close"}
                 onClick={() => onCloseClick && onCloseClick()}/>

            <EmailShareButton url={url} subject={title} body={body}>
                <EmailIcon size={60} round={true}/>
            </EmailShareButton>

            <FacebookShareButton url={url} quote={SharedString}>
                <FacebookIcon size={60} round={true}/>
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title} via={body}>
                <TwitterIcon size={60} round={true}/>
            </TwitterShareButton>


            <LinkedinShareButton url={url} title={title} summary={body}>
                <LinkedinIcon size={60} round={true}/>
            </LinkedinShareButton>


            <WhatsappShareButton url={url} title={SharedString}>
                <WhatsappIcon size={60} round={true}/>
            </WhatsappShareButton>


            <ViberShareButton url={url} title={SharedString}>
                <ViberIcon size={60} round={true}/>
            </ViberShareButton>

        </div>
    )
}

export default Share