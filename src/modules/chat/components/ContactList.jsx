import React from 'react';

export const ContactList = () => {
    return (<div id="contacts">
        <ul>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status online"></span>
                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                    <div class="meta">
                        <p class="name">Louis Litt</p>
                        <p class="preview">You just got LITT up, Mike.</p>
                    </div>
                </div>
            </li>
            <li class="contact active">
                <div class="wrap">
                    <span class="contact-status busy"></span>
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                    <div class="meta">
                        <p class="name">Harvey Specter</p>
                        <p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or,
                            you call their bluff. Or, you do any one of a hundred and forty six other
                            things.</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status away"></span>
                    <img src="http://emilcarlsson.se/assets/rachelzane.png" alt=""/>
                    <div class="meta">
                        <p class="name">Rachel Zane</p>
                        <p class="preview">I was thinking that we could have chicken tonight, sounds
                            good?</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status online"></span>
                    <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt=""/>
                    <div class="meta">
                        <p class="name">Donna Paulsen</p>
                        <p class="preview">Mike, I know everything! I'm Donna..</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status busy"></span>
                    <img src="http://emilcarlsson.se/assets/jessicapearson.png" alt=""/>
                    <div class="meta">
                        <p class="name">Jessica Pearson</p>
                        <p class="preview">Have you finished the draft on the Hinsenburg deal?</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status"></span>
                    <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt=""/>
                    <div class="meta">
                        <p class="name">Harold Gunderson</p>
                        <p class="preview">Thanks Mike! :)</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status"></span>
                    <img src="http://emilcarlsson.se/assets/danielhardman.png" alt=""/>
                    <div class="meta">
                        <p class="name">Daniel Hardman</p>
                        <p class="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status busy"></span>
                    <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt=""/>
                    <div class="meta">
                        <p class="name">Katrina Bennett</p>
                        <p class="preview">I've sent you the files for the Garrett trial.</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status"></span>
                    <img src="http://emilcarlsson.se/assets/charlesforstman.png" alt=""/>
                    <div class="meta">
                        <p class="name">Charles Forstman</p>
                        <p class="preview">Mike, this isn't over.</p>
                    </div>
                </div>
            </li>
            <li class="contact">
                <div class="wrap">
                    <span class="contact-status"></span>
                    <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt=""/>
                    <div class="meta">
                        <p class="name">Jonathan Sidwell</p>
                        <p class="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>);
};