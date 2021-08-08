import classes from './Preloader.module.css';

const Preloader = (props) =>{
    return <div className={props.load?classes.preloader:`${classes["preloader-none"]} ${classes["preloader"]}`}></div>
}

export default Preloader;