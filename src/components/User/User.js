import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    greetings = familiar? <div>Welcome, dear friend.. <br /> স্বাগতম, প্রিয় বন্ধু.</div>: greetings = <p>Who the hell are you? <br /> তুমি কে?</p>;
    return (
        <div>
            <div>
                <h2>Greetings / <small>শুভেচ্ছা</small></h2>
                {greetings}
            </div>
            <div>
                <h2>Food / <small>খাদ্য</small></h2>
                {
                    familiar 
                    ? <p>I will buy Food for you. <br />আমি আপনার জন্য খাদ্য কিনব.</p> 
                    : <p>Lets eat his his whose whose? <br />তার খাওয়া যাক তার কার কার?</p>
                }                
            </div>
            <div>
            <h2>Connection / <small>সংযোগ</small></h2>
            {
                familiar && <p>Let's join my facebook. <br />আসুন আমার ফেসবুকে যোগদান করি</p>
            }
            </div>
        </div>
    );
};

export default User;