import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// ---Data Fetching for static pages--- (SSG)

// asagida yazilan kodun amaci normlade bir fetch islemi yaptigimizda gelen data yi html icerisinde goremeyiz. Bunun icin iki yol (SSG , SSR) vardir birincisi asagida yazacagimiz gibi olan nextjs in sagladigi bir fonksyondur.

// export isleme ile beraber bu fonksiyon sadece pages dizini altindaki ana index.js icerisinde yapilir.

// SSG
export async function getStaticProps() {
  // fetch data from api

  const client = await MongoClient.connect(
    'mongodb+srv://azatseyrek:derin123@azatseyrek.9a8io.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //SSG islemi genelde cok hizli degismeyen verilerde kullanilir ornegin blog sayfasi gibi. Ama illaki hizli degisen verilerde de kullanacagim diyorsan o halde revalidate i ekleyip degeri saniye cinsinden belirleyebilirsin. bu sayede islem belirledigin sure sonra tekrar regeneret edilecek. (istek varsa)
  };
}

// SSR -> Clinet ta asla calismaz sadece server tarafinda calisir.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
