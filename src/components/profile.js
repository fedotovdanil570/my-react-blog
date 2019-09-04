import React from 'react';
import PlaceInfoLine from './profile-place-info-line';
import ContactsInfoLine from './profile-contacts-info-line';
import face from '../img/myPhoto.jpg'

const info = {
    name: 'Daniil Fedotov',
    profession: 'Java Developer',
    photo: face,
    places: [
        {
            country: 'Russia',
            city: 'Samara'
        },
        {
            country: 'Czech Republic',
            city: 'Prague'
        }
    ],
    contacts: {
        email: 'fedotovdanil570@gmail.com',
        socials: [
            {
                name: 'Facebook',
                link: 'facebook.com',
                icon: ''
            },
            {
                name: 'Vkontakte',
                link: 'vk.com',
                icon: ''
            },
            {
                name: 'Instagram',
                link: 'instagram.com',
                icon: ''
            }
        ]
    }
    
};
//<img className="img-fluid mt-2" alt="Here must be My face..." src={photo}  height="250" width="150"/>
//<li><i className="fa fa-envelope"></i><a href={'mailto:' + info.contacts.email}> {info.contacts.email}</a></li>
const Profile = props => {
    return(
        <div className="myPhoto text-center">
            <img className="img-fluid shadow-sm mt-2" alt="Here must be My face..." src={info.photo}  height="250" width="150"/>
            <h1>{info.name}</h1>
            <h2>{info.profession}</h2>
            <hr />
            <ul className="list-unstyled contact-links">
                    <PlaceInfoLine city={info.places[0].country + ', ' + info.places[0].city} />
                    <PlaceInfoLine city={info.places[1].country + ', ' + info.places[1].city} />
                    <ContactsInfoLine email={info.contacts.email} socials={info.contacts.socials} />
            </ul>
            <hr />            
        </div>
    )
};

export default Profile;