import React, { lazy, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeDocumentTitle } from '../../utils/utils';

const TextAnimation = lazy(() => import('../lib/TextAnimation'));

const ReleaseInfo = () => {
  useEffect(() => {
    document.title = changeDocumentTitle({ component: 'Releases', state: '' });
  });
  return (
    <div className="kromac-scroll landingpage release">
      <div className="kromac-landingpage-container">
        <Link to="/">Go back to home</Link>
        <br />
        <div className="kromac-section">
          <TextAnimation
            word1="Releases"
            background="linear-gradient(90deg, #000, #566573)"
            fontColor="#fff"
          />
          <p>
            In this version <b>1.2.5</b> we released news components
            <b>
              <i> 'Grid' </i>
            </b>
            and
            <b>
              <i> 'GridItem'. </i>
            </b>
          </p>
          <p>
            Now you can use
            <b>
              <i> 'Grid' </i>
            </b>
            component to custom your own display columns from 1 to 24 and
            <b>
              <i> 'GridItem' </i>
            </b>
            component to define how many columns you want and even how may rows
            per item.
          </p>
          <br />
          <p>
            Visit &nbsp;
            <Link
              to={{
                pathname: 'grid',
              }}
              name="grid"
            >
              Grid
            </Link>
            &nbsp; and &nbsp;
            <Link
              to={{
                pathname: 'gridItem',
              }}
              name="gridItem"
            >
              GridItem
            </Link>
            &nbsp; to know how to implement.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ReleaseInfo;
