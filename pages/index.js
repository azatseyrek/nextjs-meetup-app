import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://web-assets.bcg.com/dims4/default/7dc08d2/2147483647/strip/true/crop/2868x1620+6+0/resize/701x396!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F33%2F27%2F5f1dffb148eca51da46706bf6da9%2Fbcg-istanbul-office.jpg',
    adress: 'test adress 5, 123 City / 12',
    description: 'this is a first meetup',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
