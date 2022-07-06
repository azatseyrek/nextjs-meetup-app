import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.adress}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;