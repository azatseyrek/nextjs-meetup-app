import {useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://pix10.agoda.net/hotelImages/13485364/0/90e1518cd3eaea6a3dfe8380b0f20693.jpg?ca=20&ce=1&s=1024x768',
    adress: 'Istanbul adress 5, 123 City / 12',
    description: 'this isthe Istanbul meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://a.cdn-hotels.com/gdcs/production167/d32/70860665-c6b2-4b40-82e9-37b4bea5648e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    adress: 'Paris adress 5, 123 City / 12',
    description: 'this is the Paris meetup',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image:
      'https://a.cdn-hotels.com/gdcs/production151/d623/a8b25d0d-64d5-402f-99f5-a58f483c38c6.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    adress: 'Rome adress 5, 123 City / 12 Rome',
    description: 'this is the Rome meetup',
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    // send http req and fetch data
  }, []);

  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
