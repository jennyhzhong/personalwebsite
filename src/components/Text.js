import React, {Fragment} from 'react';
import styles from "./Text.module.css";

const text = () => {
  return (
    <Fragment>
           <span className={styles['flower']} style={{animationName: styles['bloom']}}>&#127800;</span>
          <div className ={styles["div"]}>
           <br/>
            <h1 className ={styles['h1']}>Hi, I'm Jenny!</h1>
            <p className={styles['p']} ><em> Welcome to my website. </em></p>
    
            <a href='https://www.linkedin.com/in/jennyhzhong/'><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="100" height="100" /></a>
            <a href='https://myeduvisa.org/'><img src="https://myeduvisa.org/img/logo_wide_hires_dark.png" alt="Nonprofit" width="" height="100" /></a>
            <a href='https://github.com/jennyhzhong'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" width="100" height="100" /></a>
          </div>
    </Fragment>

  )
}

export default text; 
