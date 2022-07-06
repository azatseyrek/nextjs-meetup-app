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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// ---Data Fetching for static pages--- (SSG)

// asagida yazilan kodun amaci normlade bir fetch islemi yaptigimizda gelen data yi html icerisinde goremeyiz. Bunun icin iki yol (SSG , SSR) vardir birincisi asagida yazacagimiz gibi olan nextjs in sagladigi bir fonksyondur.

// export isleme ile beraber bu fonksiyon sadece pages dizini altindaki ana index.js icerisinde yapilir.

// SSG
export async function getStaticProps() {
  // fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10 //SSG islemi genelde cok hizli degismeyen verilerde kullanilir ornegin blog sayfasi gibi. Ama illaki hizli degisen verilerde de kullanacagim diyorsan o halde revalidate i ekleyip degeri saniye cinsinden belirleyebilirsin. bu sayede islem belirledigin sure sonra tekrar regeneret edilecek. (istek varsa)
  };
}

export default HomePage;
