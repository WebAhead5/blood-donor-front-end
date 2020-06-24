import React, {useState} from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
} from "react-share";

//    LivejournalIcon, MailruIcon, OKIcon, PinterestIcon, PocketIcon, RedditIcon, TelegramIcon, TumblrIcon, TwitterIcon, ViberIcon, VKIcon, WeiboIcon, WhatsappIcon, WorkplaceIcon, InstapaperIcon,LineIcon,

//     LivejournalShareButton, MailruShareButton, OKShareButton, PinterestShareButton, PocketShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton, TwitterShareButton, ViberShareButton, VKShareButton, WhatsappShareButton, WorkplaceShareButton, InstapaperShareButton, LineShareButton,

function Share({ shareButtonState }) {

    return (

        <div id="shareButtonsContainer">
            <EmailShareButton url={shareButtonState.shareUrl} subject={shareButtonState.title} body="body text here">
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton
              url={shareButtonState.shareUrl}
            quote={shareButtonState.title}
            >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton link={shareButtonState.shareUrl}   url={shareButtonState.shareUrl} appId={shareButtonState.appId}>
                <FacebookMessengerIcon size={32} round={true} />
            </FacebookMessengerShareButton>
            <LinkedinShareButton url={shareButtonState.shareUrl} >
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
        </div>
    )
}

export default Share