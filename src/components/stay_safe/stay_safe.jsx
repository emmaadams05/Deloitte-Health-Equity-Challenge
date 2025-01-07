// Code for Cloud positioning -- hidden when the window becomes small
import './stay_safe.css'
import { Tabs } from '../tabs/tabs'

export const StaySafe = () => {

  return (

  <div className = "stay-safe-title" id="stay-safe">
    {/* Container for the Stay Safe portion of the website */}
    <h3><span class="goldText">Stay Safe:</span> Check Your Location’s <span class="goldText">Air Quality Index (AQI)</span></h3>
    <p>Search your current location on the map and view the current <span class="goldText">air quality index</span> in your area.<br/>
    Also check out the <span class="goldText">safety tips</span> for different <span class="goldText">at-risk populations</span>.</p>
    <section class="map">
      
      <div class="tab-section">
        <p>Select Below your Area’s Color from the Map</p>
        {/* CALL THE TABS ELEMENT ------- Displays tab part */}
        <Tabs />
      </div>

    {/* Map to identify current AQI based on location */}
      <iframe src="https://environment-playground.ue.r.appspot.com/"></iframe>
    </section>
    
  </div>

  );
};