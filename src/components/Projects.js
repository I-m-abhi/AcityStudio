import i1 from '../constants/Images/Projects/1.jpg';
import i2 from '../constants/Images/Projects/2.jpg';
import i3 from '../constants/Images/Projects/3.jpg';
import i4 from '../constants/Images/Projects/4.jpg';
import i5 from '../constants/Images/Projects/5.jpg';
import i6 from '../constants/Images/Projects/6.jpg';
import i7 from '../constants/Images/Projects/7.jpg';
import i8 from '../constants/Images/Projects/8.jpg';
import i9 from '../constants/Images/Projects/9.jpg';
import i10 from '../constants/Images/Projects/10.jpg';
import i11 from '../constants/Images/Projects/11.jpg';
import i12 from '../constants/Images/Projects/12.jpg';
import i13 from '../constants/Images/Projects/13.jpg';
import i14 from '../constants/Images/Projects/14.jpg';
import i15 from '../constants/Images/Projects/15.jpg';
import i16 from '../constants/Images/Projects/16.jpg';
import i17 from '../constants/Images/Projects/17.jpg';
import i18 from '../constants/Images/Projects/18.jpg';
import i19 from '../constants/Images/Projects/19.jpg';
import i20 from '../constants/Images/Projects/20.jpg';
import i21 from '../constants/Images/Projects/21.jpg';
import i22 from '../constants/Images/Projects/22.jpg';
import i23 from '../constants/Images/Projects/23.jpg';
import i24 from '../constants/Images/Projects/24.jpg';
import i25 from '../constants/Images/Projects/25.jpg';
import i26 from '../constants/Images/Projects/26.jpg';
import i27 from '../constants/Images/Projects/27.jpg';
import i28 from '../constants/Images/Projects/28.jpg';

import vid1 from '../constants/Images/Projects/Untitled design (1).mp4';
import vid2 from '../constants/Images/Projects/Untitled design (2).mp4';
import vid3 from '../constants/Images/Projects/Untitled design (3).mp4';
import vid4 from '../constants/Images/Projects/Untitled design (4).mp4';
import vid7 from '../constants/Images/Projects/Untitled design (7).mp4';
import vid8 from '../constants/Images/Projects/Untitled design (8).mp4';

import { Link } from 'react-router-dom';
import MiniContact from './MiniContact';

const Projects = () => {
  const projectVideo = [vid1, vid2, vid3, vid4, vid7, vid8];
  const projectImg = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25, i26, i27, i28];

  return (
    <>
      <section className="page-title">
        <ul className="bread-crumb">
          <li><h1>Projects</h1></li>
          <li className='bread-crumb-list'>
            <Link className='page-link' to="/">Home</Link>
          </li>
          <li className='bread-crumb-list'>/ Projects</li>
        </ul>
      </section>
      <section className="project-section container">
        <h2>Structures and Designs created by Acity and Teams are listed</h2>
        <div className="project-list grid grid-three-col">
          {projectVideo.map((data, id) => {
            return (
              <div key={id} className="project-item">
                <video className='video' autoPlay muted loop>
                  <source src={data} />
                </video>
              </div>
            )
          })}
        </div>
      </section>
      <section className="project-section container">
        <h2>Structures and Designs created by Acity and Teams are listed</h2>
        <div className="project-list grid grid-two-col">
          {projectImg.map((data, id) => {
            return (
              <div key={id} className="project-item">
                <img className='pro-img' src={data} alt="Projects are showing" />
              </div>
            )
          })}
        </div>
      </section>
      <MiniContact />
    </>
  )
}

export default Projects;